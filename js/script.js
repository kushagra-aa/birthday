// html for wishing page
const wish = `<div class="con">
<div class="container text-center">
<img src="./assets/Cake.svg" alt="Gift" />
<h1>
<span class="txt-type"></span>
</h1>
</div>
<button class="new" onclick="neww()">new?</button>
</div>`

const neww = () => {
    localStorage.clear();
    location.reload();
}

// page div from html
let page = document.getElementById('page');
var name, wishing;

let submitHandler = (e) => {

    if (
        !document.getElementById('name').value
    ) {
        alert("Enter Name!!")
    }
    else {

        e.preventDefault();
        let name = document.getElementById('name').value;
        page.innerHTML = wish;
        wishing = true;
        localStorage.setItem("name", name);
        localStorage.setItem("wishing", wishing);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('wishing')) {
        page.innerHTML = wish;
    }
    else {

        document.getElementById('button').addEventListener('click', submitHandler);
    }
});