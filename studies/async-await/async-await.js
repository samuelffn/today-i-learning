const minhaPromisie = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK') }, 2000);
});

// Sem fazer uso so async/await
/* minhaPromisie().then(response => {
    console.log(response); // Depois de 2 segundos ele imprime o Ok no console
})
.catch(err => {
    console.log(err);
}); */

// Usando async/await
async function executaPromise() { // async para informar que essa função é assíncrona
    const response = await minhaPromisie(); // O await tem a mesma função de um .then()
    console.log('Primeira: ', response);
    
    // Cada linha só será executada após a outra
    console.log('Segunda: ', await minhaPromisie());
    console.log('Terceira: ', await minhaPromisie())
    console.log('Quarta: ', await minhaPromisie())
}

// Nunca poderemos executar um await estando fora de uma sync: await executaPromisse();
executaPromise();


// Usando async/await com arrow function
const executaPromise2 = async () => {
    console.log('Primeira 2: ', await minhaPromisie());
    console.log('Segunda 2: ', await minhaPromisie())
    console.log('Terceira 2: ', await minhaPromisie())
}

executaPromise2();