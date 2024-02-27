// script.js
function calcularValorPorArroba() {
    // Obter valores dos campos
    const totalVenda = parseFloat(document.getElementById('totalVenda').value);
    const pesoBoiRecebido = parseFloat(document.getElementById('pesoBoi').value);
    const pesoBoiVendido = parseFloat(document.getElementById('pesoBoiVendido').value);
    const unidadePeso = document.getElementById('unidadePeso').value;

    // Converter o peso para arrobas, se necessário
    const pesoEmArrobasEsperado = (unidadePeso === 'kg') ? pesoBoiRecebido / 15 : pesoBoiRecebido;

    // Converter o peso para arrobas, se necessário
    const pesoEmArrobasVendido = (unidadePeso === 'kg') ? pesoBoiVendido / 15 : pesoBoiVendido;

    // Calcular valor por arroba Esperada na Venda
    const valorPorArrobaEsperada = totalVenda / pesoEmArrobasEsperado;

    // Calcular valor por arroba Esperada na Venda
    const valorPorArrobaVendido = totalVenda / pesoEmArrobasVendido;

    // Calcular valor por arroba Esperada na Venda
    const diferecaSobrou = (pesoBoiRecebido) - (pesoBoiVendido);


    // Exibir o resultado na página valor esperado
    const resultadoDivEsperado = document.getElementById('resultadoEsperado');
    resultadoDivEsperado.innerHTML = `<p>Valor por Arroba Esperado: R$ ${valorPorArrobaEsperada.toFixed(2)}</p>`;

    // Exibir o resultado na página valor vendido
    const resultadoDivVendido = document.getElementById('resultadoReal');
    resultadoDivVendido.innerHTML = `<p>Valor por Arroba Vendido: R$ ${valorPorArrobaVendido.toFixed(2)}</p>`;

    // Exibir o resultado na página diferença do peso recebido e vendido
    const diferencaPeso = document.getElementById('sobrou');
    diferencaPeso.innerHTML = `<p>Quantidade não Vendida: ${diferecaSobrou.toFixed(2)} </p>`;
}

// script.js
$(document).ready(function() {
    // ... (seu código existente)

    // Função para limpar os valores
    function limparValores() {
        $('#totalVenda').val('');
        $('#pesoBoiRecebido').val('');
        $('#unidadePeso').val('arroba'); // Defina a unidade de peso padrão conforme necessário
        $('#resultado').empty();
        $('#pesoBoiVendido').val('');
        $('#unidadePesoVendido').val('arroba'); // Defina a unidade de peso padrão conforme necessário
        $('#resultado').empty();
    }

    // Associar a função ao botão de limpar
    $('#limparBtn').on('click', limparValores);
});

$(document).ready(function(){
    // Aplica a máscara de dinheiro ao campo de entrada
    $('#totalVenda').inputmask('currency', {
      alias: 'numeric',
      radixPoint: ',',
      groupSeparator: '.',
      autoGroup: true,
      digits: 2,
      digitsOptional: false,
      prefix: 'R$ ',
      placeholder: '0',
      rightAlign: false,
      autoUnmask: true,
      removeMaskOnSubmit: true
    });
  });
