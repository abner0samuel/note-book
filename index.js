const addbtn = document.querySelector("#addbtn");
const root2 = document.querySelector(".container1");

function shownote() {
    root2.innerHTML= localStorage.getItem('myNote') 
}
// document.addEventListener('keydown', (e) => {
//     if (e.key == 'Enter') {
//       e.preventDefault
//       console.log('enter');
//     }
// });
localStorage.setItem("ok","okkkkkkkkkkkkkkkkkk")
console.log(localStorage.key(2,'ok'));
root2.addEventListener("click",(e)=>{
    console.log(e.target.id + "is clicked");
    const target = e.target
    if(target.matches("p")){
        localStorage.clear(e.target)
        target.style.backgroundColor ="orange"
    }
})
root2.addEventListener("click",(e)=>{
    const target = e.target
    if(target.matches("button")){
        target.style.backgroundColor ="green"
        console.log(localStorage.removeItem(1));
        console.log(localStorage.getItem('myNote'));
    }
})
shownote()
function app() {
    const root1 = document.createElement('div')
    root1.setAttribute('class', 'root1')
    root2.appendChild(root1)
    const root = document.createElement('p')
    root.setAttribute('contenteditable', "true")
    root.setAttribute('spellcheck', "true")
    root.setAttribute('class', 'root')
    const xbtn = document.createElement('button')
    xbtn.setAttribute('id', 'Xbtn')
    xbtn.innerText = 'X'
    const savebtn = document.createElement('button')
    savebtn.setAttribute('id', 'savebtn')
    const btn = document.createElement('btn')
    const hr = document.createElement('hr')
    btn.setAttribute('class', 'btn')
    savebtn.innerText = 'save'

    root1.appendChild(root)
    root1.appendChild(btn)
    root2.appendChild(hr)
    btn.appendChild(xbtn)
    btn.appendChild(savebtn)
    xbtn.addEventListener('click', () => {
        localStorage.clear()
        root1.remove()
        hr.remove()
    })

    savebtn.addEventListener('click', () => {
       localStorage.setItem('myNote', root2.innerHTML)
       savebtn.innerHTML= '&check;'
    })
   
}
addbtn.addEventListener('click', () => {
    alert('add note')
    app()
})

const Storage = "item ";
let item = 1;

console.log(Storage + item);
item++
console.log(Storage + item);
item++
console.log(Storage + item);
item++
console.log(Storage + item);
item++
console.log(Storage + item);
item++
console.log(Storage + item);



