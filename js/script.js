const controles = document.querySelector('.form-controles');
const btn = document.querySelector('.btn-resultado');
const cssTexto = document.querySelector('.css');
const eventos = ['input', 'change'];
const handleStyle = {
    element: btn,
    texto(valor) {
        this.element.innerText = valor;
    }, 
    color(valor) {
        this.element.style.color = valor;
    }, 
    backgroundColor(valor) {
        this.element.style.backgroundColor = valor;
    },
    height(valor) {
        this.element.style.height = `${valor}px`;
    },
    width(valor) {
        this.element.style.width = `${valor}px`;
    },
    borderRadius(valor) {
        this.element.style.borderRadius = `${valor}%`;
    },
    border(valor) {
        this.element.style.border = valor;
    }, 
    fontFamily(valor) {
        this.element.style.fontFamily = valor;
    },
    fontSize(valor) {
        this.element.style.fontSize = `${valor}px`;
    },
};

eventos.forEach(evento => {
    controles.addEventListener(evento, handleChange);
});

function handleChange(event) {
    const nome = event.target.name;
    const valor = event.target.value;
    handleStyle[nome](valor);
    salvarLocalStorage(nome, valor);
    listaPropriedadesCss();
}

function listaPropriedadesCss() {
    cssTexto.innerHTML = `<span>${btn.style.cssText.split('; ').join(';</span>\n<span>')}</span>`
}

function salvarLocalStorage(nome, valor) {
    localStorage[nome] = valor;
}

function selecionarValores() {
    const propriedades = Object.keys(localStorage);
    propriedades.forEach(propriedade => {
        handleStyle[propriedade](localStorage[propriedade]);
        controles.elements[propriedade].value = localStorage[propriedade]
    });
    listaPropriedadesCss();
}

selecionarValores();