const controls = document.querySelector('.controls');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');
const resetbTN = document.querySelector('.reset');

controls.addEventListener('change', handleChange);
resetbTN.addEventListener('click', resetStatus);

const handleStyle = {

    element: btn,
    backgroundColor(value) {
        this.element.style.backgroundColor = value;
    },
    height(value) {
        this.element.style.height = value + 'px';
    },
    width(value) {
        this.element.style.width = value + 'px';
    },
    text(value) {
        this.element.innerHTML = value;
    },
    color(value) {
        this.element.style.color = value;
    },
    border(value) {
        this.element.style.border = value;
    },
    borderRadius(value) {
        this.element.style.borderRadius = value + 'px';
    },
    fontFamily(value) {
        this.element.style.fontFamily = value;
    },
    fontSize(value) {
        this.element.style.fontSize = value + 'rem';
    },
}

function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    handleStyle[name](value);

    saveValues(name, value)
    showCss();
}

function saveValues(name, value) {
    localStorage[name] = value;
}

function setValues() {
    const properties = Object.keys(localStorage);
    properties.forEach(prop => {
        handleStyle[prop](localStorage[prop]);
        controls.elements[prop].value = localStorage[prop];
    });
    showCss();
}

setValues();

function showCss() {
    cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
}

function resetStatus() {
    localStorage.clear();
    window.location.reload();
}