// script.js
function calcularValorPorArroba() {
    // Obter valores dos campos
    const totalVenda = parseFloat(document.getElementById('totalVenda').value);
    const pesoBoi = parseFloat(document.getElementById('pesoBoi').value);
    const unidadePeso = document.getElementById('unidadePeso').value;

    // Converter o peso para arrobas, se necessário
    const pesoEmArrobas = (unidadePeso === 'kg') ? pesoBoi / 15 : pesoBoi;

    // Calcular valor por arroba
    const valorPorArroba = totalVenda / pesoEmArrobas;

    // Exibir o resultado na página
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p>Valor por Arroba: R$ ${valorPorArroba.toFixed(2)}</p>`;
}

// script.js
$(document).ready(function() {
    // ... (seu código existente)

    // Função para limpar os valores
    function limparValores() {
        $('#totalVenda').val('');
        $('#pesoBoi').val('');
        $('#unidadePeso').val('arroba'); // Defina a unidade de peso padrão conforme necessário
        $('#resultado').empty();
    }

    // Associar a função ao botão de limpar
    $('#limparBtn').on('click', limparValores);
});
