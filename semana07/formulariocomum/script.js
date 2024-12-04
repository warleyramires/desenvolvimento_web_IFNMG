const form = document.getElementById('form')

form.addEventListener('submit', function(e){
    e.preventDefault();

    const nome = document.getElementById('nome-produto').value;
    const numero = document.getElementById('numero-produto').value;
    const categoria = document.getElementById('categoria').value;
    const quantidade = document.getElementById('quantidade').value;
    const fornecedor = document.getElementById('fornecedor').value;

    console.log(`${nome}`)
    console.log(`${numero}`)
    console.log(`${categoria}`)
    console.log(`${quantidade}`)
    console.log(`${fornecedor}`)

    verificaEntradas(nome, numero, categoria, quantidade, fornecedor);

})


function verificaEntradas(nome, numero, categoria, quantidade, fornecedor){
    const nomeRegex = /^[A-Za-zÀ-ÿ\s]+$/u;
    const numeroRegex = /^\d+$/


    if (!nomeRegex.test(nome)) {
        alert("Por favor, insira um nome válido (somente letras e espaços).");
        
        
        return;
    }

    if (!numeroRegex.test(numero)) {
        alert("Por favor, insira um número válido (somente números).");
        return;
    }

    if(!numeroRegex.test(quantidade)){
        alert("Por favor, insira um número válido (somente números).");
        return;
    }

    console.log(`Nome: ${nome}`);
    console.log(`Número: ${numero}`);
    console.log(`Categoria: ${categoria}`);
    console.log(`Quantidade: ${quantidade}`);
    console.log(`Fornecedor: ${fornecedor}`);

    alert("Formulário cadastrado com sucesso!");
}