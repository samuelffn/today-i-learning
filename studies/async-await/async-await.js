const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
});

console.log(minhaPromise);
