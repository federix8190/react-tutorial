import math
import random
import string
import subprocess as sp

def secuencia(n):
    while n != 1:
        print n,
        if n%2 == 0:
            n = n/2 
        else:
            n = n*3+1

def imprimeMultiplos(n, mayor): 
    i = 1
    while i <= mayor: 
        print n * i, '\t', 
        i = i + 1
    print

def imprimeTablaMult(mayor):
    i = 1
    while i <= mayor:
        imprimeMultiplos(i, i) 
        i = i + 1

def logratimos():
    x = 1.0
    while x < 10.0:
        print x, '\t', math.log(x)
        x = x + 1.0

def listaAleatorios(n):
    s = [0] * n
    for i in range(n):
        s[i] = random.random()
    return s

def enElBalde(lista, minimo, maximo):
    cuenta = 0
    for num in lista:
        if minimo < num < maximo:
            cuenta = cuenta + 1
    return cuenta 

def procesar(opcion):
    tokens = string.split(opcion)
    if (len(tokens) == 0):
        return
        
    comando = tokens[0]
    if comando == 'secuencia':
        param = int(tokens[1])
        secuencia(param)
    elif comando == 'clear':
        sp.call('clear',shell=True)
    elif comando == 'tablaMult':
        param = int(tokens[1])
        imprimeTablaMult(param)
    elif comando == 'logratimos':
        logratimos()
    elif comando == 'random':
        param = int(tokens[1])
        a = listaAleatorios(param)
        #print a
        bajo = enElBalde(a, 0.0, 0.25)
        medioBajo = enElBalde(a, 0.25, 0.5)
        medioAlto = enElBalde(a, 0.5, 0.75)
        alto = enElBalde(a, 0.75, 1.0)
        print 'Bajo      : ', bajo
        print 'MedioBajo : ', medioBajo
        print 'MedioAlto : ', medioAlto
        print 'Alto      : ', alto
    print '\n'

comando = raw_input('$> ')
while (comando != 'exit'):
    procesar(comando)
    comando = raw_input('$> ')

#sp.call('clear',shell=True)
#bajo = enElBalde(a, 0.0, 0.5)
#print bajo