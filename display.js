const SCALE = 20;

function createElement(type, className) {
    let element = document.createElement(type);
    if (className !== undefined) element.className = className
    return element
}

function DOMDisplay(parent, level) {
    this.wrap = parent.appendChild(createElement('div', 'game'));
    this.level = level;

    //this.wrap.appenChild();
    this.drawBackground = function () {
        let table = createElement('table', 'background');
        table.style.width = this.level.width.length * SCALE + 'px';
    }
}