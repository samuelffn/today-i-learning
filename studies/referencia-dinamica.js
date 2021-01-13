console.log("Testando referência dinâmica");

const list = [
    {
        empresa: {
            codigo: "46578",
            registro: "PE-12345",
            funcionario: {
                nome: "samuel",
                sobrenome: "neto",
                endereco: {
                    cidade: "Recife",
                    estado: "PE",
                },
            },
        },
        logistica: {
            quantidade: "152",
            Local: "Olinda",
            unidade: "2",
        }
    }
];

function teste() {
    const inputData = "empresa.funcionario.endereco.cidade";
    const inputs = inputData.split('.');
    let result = '';
    list.forEach(l => {
        let value = l[inputs[0]];
        for (let v = 0; v < inputs.length; v++) {
            if (v > 0) {
                value = { ...value }[inputs[v]];
            }
        }
        
        result = value;
    });
    return result;
}

function teste2() {
    console.log('O começo da vitória');
    return 'e eu creio';
}

console.log(teste());
