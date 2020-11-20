class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}
class ItensList extends List {
    /* constructor() {
        this.itens = [];
    }

    addItens() {
        this.itens.push("Novo item");
        console.log(this.itens);
    } */

    constructor() {
        super();
        this.usuario = 'Samuel';
    }

    exibeUsuario() {
        console.log(this.usuario);
    }
}

class Matematica {
    static soma(a, b){
        return a + b;
    }
}

const meusItens = new ItensList();

document.getElementById('novoitem').onclick = function() {
    //meusItens.addItens();
    meusItens.add("Novo item");
}

meusItens.exibeUsuario();

console.log(Matematica.soma(1, 2));