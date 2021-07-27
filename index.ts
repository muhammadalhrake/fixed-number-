// Import stylesheets
import './style.css';
let ez=new Array();
for(let i =1;i<10;i++){
  for(let j=0;j<10;j++){
    let a=(i.toString()+"*"+ j.toString());
    ez.push(a);
  }
}
console.log(ez)
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;