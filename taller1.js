let gradosC = 32
let a = 1
let b = 5
let c = 4
let raizPositiva = true
let mult
let num = 1
let num2 = 12


function gradosF (gradosC) {
    const grados = gradosC*9/5+32
    return grados
}
console.log(gradosC + " grados centigrados equivalen a " + gradosF(gradosC) +" fahrenheit")

function resolvedor (a, b, c, raizPositiva) {
    if (raizPositiva) {
        mult = 1
    } else {
        mult = -1
    }
    return ((-1*b+mult*(b**2-4*a*c)**0.5)/(2*a))
}
console.log('El valor de x es: ' + resolvedor(a, b, c, raizPositiva))

function numPar (num) {
    if (num%2 == 0) {
        return true
    } else {
        return false
    }
}
if (numPar(num)) {
    console.log('El numero ' + num + ' es par')
} else {
    console.log('El numero ' + num + ' es impar')
}

function peorPar (num2) {
    let n = num2
    while (n > 0) {
        n = n -2
    }
    if (n == 0) {
        return true
    } else {
        return false
    }
}
if (peorPar(num2)) {
    console.log('El numero ' + num2 + ' es par')
} else {
    console.log('El numero ' + num2 + ' es impar')
}



