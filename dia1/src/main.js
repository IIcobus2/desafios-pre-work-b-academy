import './style.css'

const texto = `
<h1>B. Academy</h1>
<p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`
const app = document.querySelector('[data-js="app"]');//.innerHTML = texto;
app.innerHTML = texto;
const button = document.querySelector('[data-js="button"]');
// let click = 0;

button.addEventListener('click', () =>{
  // click += 1;
  if(app.style.display === "block"){
    app.style.display = "none";
    button.innerHTML = "Show app";
  }else{
    app.style.display = "block";
    button.innerHTML = "Hide app";
  }
}, false);

