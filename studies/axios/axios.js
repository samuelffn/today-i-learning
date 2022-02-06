//import axios from 'axios';
const axios = require('axios')

class Api {
    static async getUserInfo(userName){
        try{
            const response = await axios.get(`http://api.github.com/users/${userName}`); 
            console.log(response);
        } catch (err) {
            console.warn('Erro na API do Git: \n', err);
        }
    }
}

//Api.getUserInfo('samuelffn');
Api.getUserInfo('samuelffn123456'); // Usuário inexistente. Tratamento de erros com try/catch


/* REQUISIÇÃO GET COM PARÂMETROS */

// axios api post request
import qs from 'qs';
const data = { 'bar': 123 };
const options = {
  method: 'POST',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  data: qs.stringify(data),
  url,
};
axios(options);


// axios get request with body
/**
 * Package that needed:
 * 'qs', 'axios' 
 * install by `npm install qs --save 
 */

// You can Add more to this 
let headers = {
	'content-type': 'application/x-www-form-urlencoded',
};

let body = {
    field1: 'foo',
    field2: 'bar',
};

// For async_await
let reponse = await axios({
	method: 'POST',
    headers: headers,
    data: qs.stringify(body), // <---- This step it is important
    url: `${YOUR_URL}`,
}); 


return response['data'];
