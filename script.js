var btn = document.createElement('button');
btn.style.margin = '50px';
btn.innerHTML = 'Switch light on';
document.body.appendChild(btn);
btn.onclick = Lightswitch
document.body.style.backgroundColor = "black"
// schijf hier tussen je code

function Lightswitch(){
if(btn.innerHTML == "Switch light off"){
btn.innerHTML = "Switch light on"
document.body.style.backgroundColor = "black"
console.log("Light is off")
}else{
btn.innerHTML = "Switch light off"
document.body.style.backgroundColor = "yellow"
console.log("light is on")
}

}


// schijf hier tussen je code 