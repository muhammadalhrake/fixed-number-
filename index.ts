// Import stylesheets
import './style.css';
let ez=new Array();
for(let i =0;i<10;i++){
  ez.push(i);
}
console.log(ez)
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;