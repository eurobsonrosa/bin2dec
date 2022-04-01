document.getElementById('converter').onclick = e => {
    converter()
}

const regex = new RegExp("^[0-1]*$")


document.getElementById('binary').addEventListener('input', e => {
    regex.test(document.getElementById('binary').value) ? noAlert() : alert()
}) 

function teste() {
    return regex.test(document.getElementById('binary').value) ? true : false    
}

function converter() {
    if (teste()) {
        let decimal = arrayParse().reduce(getArray, 0)
        document.getElementById('result').innerHTML = decimal
        noAlert()
    }
    else {
        document.getElementById('result').innerHTML = ""
        alert()}
}

function arrayParse() {
    let bin = document.getElementById('binary').value
    let binArray = String(bin).split("").map(bin => {
        return Number(bin)
    })
    return binArray
}

const getArray = (acumulador, atual, index, array) => {
    return acumulador + atual * 2 ** (array.length - index - 1)
}

function alert() {
    document.getElementById('alert').style.display = 'block'
}

function noAlert() {
    document.getElementById('alert').style.display = 'none'
}
