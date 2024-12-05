const form = document.getElementById('meu-formulario');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    let erros = [];

    if (!nome.trim()) {
        erros.push('O campo nome é obrigatório.');
    }

    if (!sobrenome.trim()) {
        erros.push('O campo sobrenome é obrigatório.');
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.trim() || !emailRegex.test(email)) {
        erros.push('Por favor, insira um email válido.');
    }

    if (!assunto.trim()) {
        erros.push('O campo assunto é obrigatório.');
    }

    if (!mensagem.trim()) {
        erros.push('O campo mensagem é obrigatório.');
    }

    const checkboxes = document.querySelectorAll('.checkbox-sobre input[type="checkbox"]');
    let selecionados = [];
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selecionados.push(checkbox.value);
        }
    });

    if (selecionados.length === 0) {
        erros.push('Você precisa selecionar pelo menos uma opção.');
    }

    if (erros.length > 0) {
        alert(erros.join('\n'));
    } else {
        console.log("Nome: ", nome);
        console.log("Sobrenome: ", sobrenome);
        console.log("Email: ", email);
        console.log("Assunto: ", assunto);
        console.log("Mensagem: ", mensagem);
        console.log("Checkboxes selecionados: ", selecionados);
    }
});
