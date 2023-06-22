const serverURL = 'http://localhost:3000/';
const btn = document.querySelector('button');
const txt = document.querySelector('input');
btn.addEventListener('click', getLinks);
function getLinks(){
    let word = txt.value;
    let fullUrl = serverURL + '?word='+word;
    fetch(fullUrl)
    .then((response) => {
        console.log(response);
    })
}