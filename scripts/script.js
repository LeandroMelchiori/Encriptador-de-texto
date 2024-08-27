// Función de encriptado (si es necesario)
function encriptar(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

// Función de desencriptado
function desencriptar(textoEncriptado) {
    return textoEncriptado
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

// Manejadores de eventos
document.getElementById('encriptarBtn').addEventListener('click', () => {
    const texto = document.getElementById('textoEntrada').value;
    const textoEncriptado = encriptar(texto);
    document.getElementById('textoSalida').textContent = textoEncriptado;
});

document.getElementById('desencriptarBtn').addEventListener('click', () => {
    const texto = document.getElementById('textoEntrada').value;
    const textoDesencriptado = desencriptar(texto);
    document.getElementById('textoSalida').textContent = textoDesencriptado;
});

document.getElementById('copiarBtn').addEventListener('click', () => {
    const textoSalida = document.getElementById('textoSalida').textContent;
    navigator.clipboard.writeText(textoSalida).then(() => {
        alert('Texto copiado al portapapeles');
    });
});
