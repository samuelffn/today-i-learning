const fs = require('fs');
const data = fs.readFileSync('pt.json', 'utf8');
const chaves = JSON.parse(data);

const keysPais = Object.keys(chaves);

keysPais.forEach(keyPai => {
    const keysFilhas = Object.keys(chaves[keyPai]);
    if (keysFilhas.length > 0) {
        varrer(keyPai, keysFilhas);
    }
});

function varrer(pai, filhos) {
    filhos.forEach(filho => {
        const novosFilhos = Object.keys(chaves[pai][filho]);
        if (novosFilhos.length > 0 && novosFilhos[0] !== '0') {
            varrer2(pai, filho, novosFilhos);
        } else {
            console.log(`${pai}.${filho}`);
        }
    });
}

function varrer2(pai, filho, novosFilhos) {
    novosFilhos.forEach(novo => {
        const mais = Object.keys(chaves[pai][filho][novo]);
        if (mais.length > 0 && mais[0] !== '0') {
            varrer3(pai, filho, novo, mais);
        } else {
            console.log(`${pai}.${filho}.${novo}`);
        }
    });
}

function varrer3(pai, filho, novo, mais) {
    mais.forEach(novo2 => {
        const mais2 = Object.keys(chaves[pai][filho][novo][novo2]);
        if (mais2.length > 0 && mais2[0] !== '0') {
            varrer4(pai, filho, novo, novo2, mais2);
        } else {
            console.log(`${pai}.${filho}.${novo}.${novo2}`);
        }
    });
}

function varrer4(pai, filho, novo, novo2, mais2) {
    mais2.forEach(novo3 => {
        const mais3 = Object.keys(chaves[pai][filho][novo][novo2][novo3]);
        if (mais3.length > 0 && mais3[0] !== '0') {
            varrer5(pai, filho, novo, novo2, novo3, mais3);
        } else {
            console.log(`${pai}.${filho}.${novo}.${novo2}.${novo3}`);
        }
    });
}

function varrer5(pai, filho, novo, novo2, novo3, mais3) {
    mais3.forEach(novo4 => {
        const mais4 = Object.keys(chaves[pai][filho][novo][novo2][novo3][novo4]);
        if (mais4.length > 0 && mais4[0] !== '0') {
            varrer6(pai, filho, novo, novo2, novo3, novo4, mais4);
        } else {
            console.log(`${pai}.${filho}.${novo}.${novo2}.${novo3}.${novo4}`);
        }
    });
}

function varrer6(pai, filho, novo, novo2, novo3, novo4, mais4) {
    mais4.forEach(novo5 => {
        const mais5 = Object.keys(chaves[pai][filho][novo][novo2][novo3][novo4][novo5]);
        if (mais5.length > 0 && mais5[0] !== '0') {
            varrer7(pai, filho, novo, novo2, novo3, novo4, novo5, mais5);
        } else {
            console.log(`${pai}.${filho}.${novo}.${novo2}.${novo3}.${novo4}.${novo5}`);
        }
    });
}

function varrer7(pai, filho, novo, novo2, novo3, novo4, novo5, mais5) {
    mais5.forEach(novo6 => {
        console.log(`${pai}.${filho}.${novo}.${novo2}.${novo3}.${novo4}.${novo5}.${novo6}`);
    });
}
