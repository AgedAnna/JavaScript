function executar(fn) {
    if (typeof fn === 'function') {
        console.log(fn());
    }
}

function bomDia() {
    return 'Bom dia';
}

executar(bomDia);