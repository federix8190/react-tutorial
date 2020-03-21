def convert(nro, origen, destino):
    lista = []
    div = nro / destino
    res = nro % destino
    print div, ' ', res
    lista.append(res)
    while div >= destino:
        tmp = div
        div = tmp / destino
        res = tmp % destino
        print tmp, ' ', res
        lista.append(res)
    lista.append(div)
    resultado = ''
    for item in lista[::-1]:
        resultado = resultado + str(item)
    return resultado

print convert(2145, 10, 8)