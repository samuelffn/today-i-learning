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