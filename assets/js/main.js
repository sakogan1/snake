
let field=document.createElement(`div`)
document.querySelector(`body`).appendChild(field)
field.id = "snakeField"

for(i=0;i<100;i++){
   let div = document.createElement(`div`)
   div.className = "item"
   let item = document.getElementById("snakeField")
   item.appendChild(div)

}

let j = document.querySelectorAll(`div.item`)
console.log(j)
j.forEach((key)=>{
    key.addEventListener(`mouseover`, (event)=>{
        event.target.style.backgroundColor = `rgb(${getR()},${getG()},${getB()})`
        setTimeout(() => {
            event.target.style.backgroundColor="lightblue"
        }, 500);
    })
})

function getR(){
    let r =Math.floor(Math.random() * 255)
    console.log(r)
    return r
}

function getB(){
    let b = Math.floor(Math.random() * 255)
    console.log(b)
    return b
}

function getG(){
    let g = Math.floor(Math.random() * 255)
    console.log(g)
    return g
}


