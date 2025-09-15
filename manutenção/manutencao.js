
const campoNovoNome = document.getElementById('novo-nome');
        const botaoSalvar = document.getElementById('botao-salvar');

        botaoSalvar.addEventListener('click', function() {
            const novoNome = campoNovoNome.value;

            if (novoNome.trim() !== '') {
                // Salva o novo nome no LocalStorage
                localStorage.setItem('nomeProduto', novoNome);
                alert('Nome do produto atualizado com sucesso! Volte para a tela principal.');
                campoNovoNome.value = ''; // Limpa o campo
            } else {
                alert('Por favor, digite um nome para o produto.');
            }
        });