document.addEventListener('DOMContentLoaded', function () {
    // Variáveis globais
    let chart;
    let selectedData;

    // Carregamento de Dados CSV
    const csvFileInput = document.getElementById('csvFileInput');
    csvFileInput.addEventListener('change', handleFile);

    // Seleção de Dados
    const dataSeriesSelect = document.getElementById('dataSeries');
    dataSeriesSelect.addEventListener('change', updateChart);

    // Tipos de Gráficos
    const chartTypeSelect = document.getElementById('chartType');
    chartTypeSelect.addEventListener('change', updateChart);

    // Opções de Gráficos
    const startFromZeroCheckbox = document.getElementById('startFromZero');
    const smoothCurveCheckbox = document.getElementById('smoothCurve');
    const stackableCheckbox = document.getElementById('stackable');
    const fillAreaCheckbox = document.getElementById('fillArea');
    startFromZeroCheckbox.addEventListener('change', updateChart);
    smoothCurveCheckbox.addEventListener('change', updateChart);
    stackableCheckbox.addEventListener('change', updateChart);
    fillAreaCheckbox.addEventListener('change', updateChart);

    // Visualização de Dados
    const dataPreviewTable = document.getElementById('dataPreview');

    // Exportação do Gráfico
    function exportChart() {
        const url = chart.toBase64Image();
        const a = document.createElement('a');
        a.href = url;
        a.download = 'chart.png';
        a.click();
    }

    // Função para carregar o arquivo CSV
    function handleFile(event) {
        const file = event.target.files[0];
        Papa.parse(file, {
            complete: function (results) {
                // Preencher a seleção de dados
                fillDataSeriesSelect(results.data);

                // Exibir a visualização de dados
                displayDataPreview(results.data);
            }
        });
    }

    // Função para preencher a seleção de dados
    function fillDataSeriesSelect(data) {
        const headers = data[0];
        dataSeriesSelect.innerHTML = "";
        headers.forEach((header, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.text = header;
            dataSeriesSelect.add(option);
        });
    }

    // Função para exibir a visualização de dados
    function displayDataPreview(data) {
        dataPreviewTable.innerHTML = "";
        data.slice(0, 5).forEach((row) => {
            const tr = document.createElement('tr');
            row.forEach((cell) => {
                const td = document.createElement('td');
                td.textContent = cell;
                tr.appendChild(td);
            });
            dataPreviewTable.appendChild(tr);
        });
    }

    // Função para atualizar o gráfico
    function updateChart() {
        // Obter dados selecionados
        const selectedColumn = parseInt(dataSeriesSelect.value);
        selectedData = Papa.parse(csvFileInput.files[0], { header: true }).data.map(row => row[selectedColumn]);

        // Configurar opções do gráfico
        const chartOptions = {
            type: chartTypeSelect.value,
            data: {
                labels: selectedData.map((_, index) => index + 1),
                datasets: [{
                    label: dataSeriesSelect.options[dataSeriesSelect.selectedIndex].text,
                    data: selectedData,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)', // Cor de fundo
                    borderColor: 'rgba(75, 192, 192, 1)', // Cor da borda
                    borderWidth: 1 // Largura da borda
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: startFromZeroCheckbox.checked // Começar eixo Y do zero
                    }
                },
                elements: {
                    line: {
                        tension: smoothCurveCheckbox.checked ? 0.4 : 0 // Suavizar curvas
                    }
                },
                plugins: {
                    filler: {
                        propagate: fillAreaCheckbox.checked // Preencher áreas sob curvas
                    },
                    legend: {
                        display: false // Ocultar legenda para manter o espaço limpo
                    }
                }
            }
        };

        // Atualizar ou criar o gráfico
        if (chart) {
            chart.destroy();
        }
        const ctx = document.getElementById('myChart').getContext('2d');
        chart = new Chart(ctx, chartOptions);
    }
});
