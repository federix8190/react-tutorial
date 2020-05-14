from flask import Flask
from flask import request
import psycopg2

app = Flask(__name__)
URL_BASE = "/api";

# Database
USER = "federix"
PASS = "konecta"
HOST = "127.0.0.1"
PORT = "5432"
BBDD = "nucleo";

@app.route(URL_BASE + "/")
def hello():
    return "Hello World!"

########################
#### Servicios REST ####
########################

@app.route(URL_BASE + "/personas")
def getPersonas():
	nombre = request.args.get('nombre')
	atributos = ['id', 'nombre', 'apellido', 'cedula', 'direccion']
	return listar('persona', atributos, 20, nombre)

@app.route(URL_BASE + "/ciudades", methods = ['GET', 'POST', 'DELETE'])
def getCiudades():

	if request.method == 'GET':
		atributos = ['id', 'nombre']
		return listar('ciudad', atributos, 20, None)
	if request.method == 'POST':
		atributos = ['id', 'nombre', 'apellido', 'cedula', 'direccion']
		return listar('persona', atributos, 20, None)

@app.route(URL_BASE + "/token", methods = ['POST'])
def getToken():
	return "1234-abcd-6789-efgh"

@app.route(URL_BASE + "/usuarios", methods = ['GET', 'POST', 'DELETE'])
def usuarios():

	if request.method == 'GET':
		atributos = ['id', 'nombre', 'apellido', 'correo']
		return listar('usuario', atributos, 20, None)
	if request.method == 'POST':
		atributos = ['nombre', 'apellido', 'correo', 'id_ciudad']
		return guardarDatos('usuario', atributos, request)

# Funcion para listar
def listar(tabla, atributos, registros, filtros):

	try:
		# Construir Sentencia SQL
		sql = "SELECT "
		cantidad = len(atributos) - 1
		for atr in atributos[0 : cantidad]:
			sql = sql + atr + ', '
		sql = sql + atributos[cantidad] + " FROM " + tabla
		
		if filtros != None:
			sql = sql + " WHERE nombre like '%" + filtros + "%'" 

		if (registros > 0):
			sql = sql +  ' limit ' + str(registros)
		
		# Ejecutar sentencia
		print(sql)
		connection = psycopg2.connect(user = USER, password = PASS, host = HOST, port = PORT, database = BBDD)
		cursor = connection.cursor()
		cursor.execute(sql)
		lista = []

		# Iterar sobre los resultados
		for row in cursor:
			datos = {}
			i = 0
			for atr in atributos:
				datos[atr] = row[i]
				i = i + 1
   			lista.append(datos)

   		cursor.execute('select count(1) from ' + tabla)
   		count = cursor.fetchone()

		json = {}
		json['lista'] = lista
		json['total'] = count[0]
		return json

	except (Exception, psycopg2.Error) as error :
		print ("Error while connecting to PostgreSQL", error)
		return "Error"
	finally:
		if (connection):
			cursor.close()
			connection.close()
			print("PostgreSQL connection is closed")

# Funcion para insertar datos
def guardarDatos(tabla, atributos, request):
	datos = request.json
	datosColumnas = getDataTypes(tabla, 'public')
	columnas = datosColumnas['lista']
	return guardar(tabla, atributos, datos, columnas)

def guardar(tabla, atributos, datos, columnas):

	try:
		# columnas a insertar
		sql = "INSERT INTO " + tabla + '(' + atributos[0]
		for atr in atributos[1:] :
			sql = sql + ', ' + atr
		
		# valores de las columnas
		tipo = buscarTipo(columnas, atributos[0])
		sql = sql + ') values(' + tipo + datos[atributos[0]] + tipo
		for atr in atributos[1:] :
			tipo = buscarTipo(columnas, atr)
			sql = sql + ', ' + tipo + str(datos[atr]) + tipo
		sql = sql + ')'

		print sql
		connection = psycopg2.connect(user = USER, password = PASS, host = HOST, port = PORT, database = BBDD)
		cursor = connection.cursor()
		cursor.execute(sql)
		connection.commit()
		cursor.close()
		return "OK"
	
	except (Exception, psycopg2.Error) as error :
		print ("Error while connecting to PostgreSQL", error)
		return "Error"
	finally:
		if (connection):
			cursor.close()
			connection.close()
			print("PostgreSQL connection is closed")

def buscarTipo(columnas, atributo):
	for col in columnas:
		name = col['name']
		if name == atributo:
			tipo = col['tipo']
			if tipo == 'character varying' or tipo == 'date':
				return "'"
			else: return ""
	return ""

def getDataTypes(tabla, schema):

	try:
		
		# Construir Sentencia SQL
		sql = "SELECT column_name, data_type FROM information_schema.columns WHERE table_schema = '"
		sql = sql + schema + "' AND table_name = '" + tabla + "'"
		
		# Ejecutar sentencia
		print(sql)
		connection = psycopg2.connect(user = USER, password = PASS, host = HOST, port = PORT, database = BBDD)
		cursor = connection.cursor()
		cursor.execute(sql)
		lista = []

		# Iterar sobre los resultados
		for row in cursor:
			datos = {}
			datos['name'] = row[0]
			datos['tipo'] = row[1]
   			lista.append(datos)

		json = {}
		json['lista'] = lista
		return json

	except (Exception, psycopg2.Error) as error :
		print ("Error while connecting to PostgreSQL", error)
		return "Error"
	finally:
		if (connection):
			cursor.close()
			connection.close()
			print("PostgreSQL connection is closed")	

@app.route(URL_BASE + "/test")
def testdb():
	try:
		connection = psycopg2.connect(user = USER, password = PASS, host = HOST, port = PORT, database = BBDD)

		cursor = connection.cursor()
		# Print PostgreSQL Connection properties
		print ( connection.get_dsn_parameters(),"\n")

		# Print PostgreSQL version
		cursor.execute("SELECT version();")
		record = cursor.fetchone()
		res =  ''.join(record)
		return res

	except (Exception, psycopg2.Error) as error :
		print ("Error while connecting to PostgreSQL", error)
		return "Error"
	finally:
		if(connection):
			cursor.close()
			connection.close()
			print("PostgreSQL connection is closed")

if __name__ == "__main__":
    app.run()