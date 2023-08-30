function buscarPrevisao() {
    const cidade = document.getElementById('cidade').value;
    const url
    =`https://api.openweathermap.org/data/2.5/weather?q=${cidade},br&units=metric&lang=pt_
    br&appid=d97a63981b979a167d9bd834c6e791aa`;
    fetch(url)
    
    .then(response => response.json())
    .then(data => {
    const nomeCidade = data.name;
    const temperaturaAtual = data.main.temp;
    const temperaturaMinima = data.main.temp_min;
    const temperaturaMaxima = data.main.temp_max;
    const numeroint=parseInt(temperaturaAtual)
    const numeroint2=parseInt(temperaturaMaxima)
    const numeroint3=parseInt(temperaturaMinima)
    const descricaoClima = data.weather[0].description;
    const icon = data.weather[0].icon;
    const img= `"http://openweathermap.org/img/wn/01d@2x.png" ,
    "http://openweathermap.org/img/wn/01n@2x.png" ,
    "http://openweathermap.org/img/wn/02d@2x.png" ,
    "http://openweathermap.org/img/wn/02n@2x.png" ,
    "http://openweathermap.org/img/wn/03d@2x.png" ,
    "http://openweathermap.org/img/wn/03n@2x.png", "" `;
    const dataAtualizacao = new Date(data.dt *
    1000).toLocaleDateString('pt-BR');
    if (numeroint<28) {
    var previsaoHTML = `
    <p>Data de atualização: ${dataAtualizacao}</p>
    <img src="${img}" alt="">
    <h2>${nomeCidade}</h2>
    <p > ${descricaoClima}</p>
    <p id="media1"> ${numeroint}°C</p>
    <p class="min"> Mínima: ${numeroint3}°C</p>
    <p class="max"> Máxima: ${numeroint2}°C</p>
    `;} else if(numeroint>=27) { var previsaoHTML = `
    <p>Data de atualização: ${dataAtualizacao}</p>
    <img src="${img}" alt="">
    <h2>${nomeCidade}</h2>
    
    <p> ${descricaoClima}</p>
    <p id="media2"> ${numeroint}°C</p>
    <p class="min"> Mínima: ${numeroint3}°C</p>
    <p class="max"> Máxima: ${numeroint2}°C</p>
    `;}
    document.getElementById('previsao').innerHTML = previsaoHTML;
    })
    .catch(error => {
    console.error('Erro ao buscar previsão do tempo:', error);
    alert('Não foi possível buscar a previsão do tempo para essa cidade. Por favor, verifique se o nome da cidade foi digitado corretamente.');
    })
    }