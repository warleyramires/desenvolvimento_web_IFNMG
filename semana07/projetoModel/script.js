const formulario = document.getElementById('meu-formulario');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    console.log(`${nome} e ${email}`);

    validaInput(nome, email);
});

function validaInput(nome, email) {
    if (!nome.trim() || !email.trim()) {
        alert("Preencha todos os campos");
    } else {
        // Comparando as strings corretamente
        if (nome === 'Warley' && email === 'warleyramiresgoncalves@gmail.com') {
            alert(`Salvamos seu contato. ${nome} | ${email}`);
        } else {
            alert("Os dados fornecidos não correspondem aos esperados.");
        }
    }
}
