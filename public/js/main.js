let ajout = document.getElementById("Ajout");
let list = document.querySelectorAll("div")[1];
let input = document.querySelector("input");
let myUl = document.querySelector("ul");
// let BtnSuppresion = document.createElement("button");
// let BtnModification = document.createElement("button");

console.log(ajout);
console.log(list);
// console.log(arr);
let li;
let btnV;
let btnS;
let btnM;


var listLi = document.getElementsByTagName("li");
var i;
// Permet de mettre la classe close à tout ces fucking span.
for (i = 0; i < listLi.length; i++) {
  var span = document.createElement("SPAN");
  span.className = "close";
  listLi[i].appendChild(span);
}
// Permet la suppression de l'element Close plutôt de le display none.
var close = document.getElementsByClassName("close");
var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//       if (condition) {
//         div.style.display = "none";
//       }
//     let btnYes = document.createElement("button");
//     btnYes.textContent="yes";
//     this.appendChild(btnYes)
//     let btnNo = document.createElement("button");
//     var div = this.parentElement;
    
//   }
// }

// 

myUl.addEventListener("click",(e)=>{
    console.log("ok");
    if (e.target.className==="BtnValidation") {
        console.log("yes");
        // e.target.parentElement.toggle("done");
    }
})


ajout.addEventListener("click",()=>{
    if (input.value === '') {
        alert("You must write something!");
    } else if (input.value.length>0) {
    li = document.createElement("li");
    // let BtnValidation = document.createElement("button");
    let spant = document.createElement("span");
    let t =document.createTextNode(input.value);
    li.setAttribute("class","tache");
    spant.appendChild(t);
    li.appendChild(spant)
    myUl.appendChild(li);   
    input.value=""
    // Creation du bouton Valider
    btnV = document.createElement("button");
    console.log(btnV);
    btnV.textContent="Valider";
    btnV.setAttribute("class","BtnValidation")
    li.appendChild(btnV);
    btnV.onclick= function(){
        this.parentElement.classList.toggle("checked")
    }
    // Creation du bouton Suppresion
    
    btnS = document.createElement("button");
    btnS.className="close";
    btnS.textContent="Supprimer";
    li.appendChild(btnS);
    // la suppresion de l'element
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            btnM.classList.add("notDisplayed")
            btnV.classList.add("notDisplayed")
            var div = this.parentElement;
            let bitch = this;
            console.log(div);
            let btnYes = document.createElement("button");
            btnYes.textContent="yes";
            let yes = btnYes;
            this.parentElement.appendChild(btnYes);
            let btnNo = document.createElement("button");
            btnNo.textContent="no";
            let no = btnNo;
            this.parentElement.appendChild(btnNo);
            // this.style.display="hidden"
            this.classList.add("notDisplayed");
            btnYes.onclick = function(){
                div.classList.add("notDisplayed");
                console.log("yes");
                }
            btnNo.onclick = function(){
                bitch.classList.remove("notDisplayed")
                btnM.classList.remove("notDisplayed")
                btnV.classList.remove("notDisplayed")
                // div.style.display = "block";
                console.log("no");
                btnNo.classList.add("notDisplayed");
                btnYes.classList.add("notDisplayed");
                
                
                // let btn = document.createElement("button")
                // btn.textContent="supprimer";
                // btn.className="close"
                // div.appendChild(btn);
                }   
            }
            
        }
    }

    // Creation du bouton Modification
    btnM = document.createElement("button");
    btnM.textContent="Modification";
    btnM.setAttribute("class","BtnModification");
    li.appendChild(btnM);
    // A FAIRE
    btnM.onclick = function (){
        console.log("Modif");
        let inputM = document.createElement('input');
        console.log(
            this.parentElement.children[0]
        );
        this.parentElement.children[0] = inputM;
        
    }
})

// WORK IN PROGRESS
btn.addEventListener("click",()=>{
    li.style = "display:none";
});

// Btn Modification
BtnModification.addEventListener("click",()=>{

})