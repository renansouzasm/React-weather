# React Weather

> Um projeto de Condições do tempo feito a partir do curso digital gratuito Front-end em React da Comunidade Ada.

A aplicação irá consumir uma API para retornar informações sobre as condições climáticas de um local em relação à pesquisa do usuário.

### API Utilizada no Projeto
- [OpenWeather](https://openweathermap.org/)

### Como funciona?
Bom, para rodar é bem simples, basta instalar as dependências do projeto pelo console e utilizar o comando para iniciar.

```node
npm install 
npm run dev
```

Será necessário o uso de uma API key obtida após o cadastro no site, mas fique a vontade para usar 
a que já está sendo utilizada no projeto, apenas tome cuidado pois essa key pode acabar expirando, por isso 
é recomendável que você consiga sua própria Key

```javascript
"https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API key}&lang=pt_br&units=metric"
```

Exemplo de dados que a _**api**_ retornou:

```json
{
"name": "São Paulo",
"main": {
    "temp": 22.11
  },
"weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "nublado",
      "icon": "04n"
    }
  ]
}
```


<table>
</table>
