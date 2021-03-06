// import { wishing, name } from "./script";

// wait time for typer
const wait = 3000;
// the text that will be displayed
const text = [`Happy Birthday ${localStorage.getItem('name')}!`, 'Stay Blessed!!', 'Be Happy!!', 'Enjoy The Day', 'Stay Safe'];

// typer function
const Typer = function (txtElement, wait, text) {
    this.txtElement = txtElement;
    this.text = text;
    this.txt = '';
    this.txtIndex = 0;
    this.wait = wait;
    this.type();
    this.isdel = false;
}

Typer.prototype.type = function () {
    // current index of word
    const index = this.txtIndex % this.text.length;
    // Get Full Text of current word
    const fullTxt = this.text[index];
    // check deleteing
    if (this.isdel) {
        // -character
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    }
    else {
        // +character
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // add text in html element
    this.txtElement.innerHTML = `<span class="text">${this.txt}</span>`;

    // initial type speed
    let typeSpeed = 200;

    if (this.isdel) {
        typeSpeed /= 2;
    }

    // if word is complete
    if (!this.isdel && this.txt === fullTxt) {
        // make pause
        typeSpeed = this.wait;
        // set isdel true
        this.isdel = true;
    }
    else if (this.isdel && this.txt === '') {
        this.isdel = false;
        // move to next wordd
        this.txtIndex++;
        // pause before next word
        typeSpeed = 400;
    }

    // call function type every 500ms
    setTimeout(() => this.type(), typeSpeed)
}


const init = () => {
    if (localStorage.getItem('wishing')) {
        const txtElement = document.querySelector('.txt-type');
        new Typer(txtElement, wait, text);
    }
    h2Init();
}

window.addEventListener('load', init);

//h2-wish para
const paras = ['All the best to you in the year to come!', 'Keep spreading happiness arround you']


h2Init = () => {
    let h2 = document.getElementById('h2')

    var random = Math.floor(Math.random() * paras.length) + 0
    h2.innerHTML = `<h2>${paras[random]}<h2>`;
}
