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

Será necessário o uso de uma API key obtida após o cadastro no site, por isso
é recomendável que você consiga sua própria Key e insira em um arquivo .env na raiz do projeto,
com o prefixo `VITE_REACT`.

.env

```javascript
VITE_REACT_API_KEY = "key";
```

src/App.tsx

```javascript
"URL/appid=${ import.meta.env.VITE_REACT_API_KEY }";
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
    <tr>
        <th>Preview</th>
    </tr>
    <tr>
        <td><img width="600px" src="https://github.com/renansouzasm/React-weather/assets/101893896/7c5a86bf-ad6b-4558-9d3b-014cf60e5a6d" /></td>
    </tr>
</table>
