let ajout = document.getElementById("Ajout");
let list = document.querySelectorAll("div")[3];
let input = document.querySelector("input");
let The3Buttons = document.querySelectorAll("div")[1];

// let BtnSuppresion = document.createElement("button");
// let BtnModification = document.createElement("button");

console.log(ajout);
console.log(list);

ajout.addEventListener("click",()=>{
    if (input.value.length>0) {
    let tache = document.createElement("div");
    tache.classList.add("Tous");
    let spant = document.createElement("span");
    let t =document.createTextNode(input.value);
    spant.appendChild(t);
    tache.appendChild(spant);
    // creation du bouton validé.
    let btnV = document.createElement("button");
    btnV.textContent="validé";
    tache.appendChild(btnV);
    // création du bouton modifier
    let btnM = document.createElement("button");
    btnM.textContent="modifier"
    tache.appendChild(btnM);
    // creation du bouton supprimer
    let btnS = document.createElement("button");
    btnS.textContent="supprimer";
    tache.appendChild(btnS);

    list.appendChild(tache)
    input.value=""
    }
})


list.addEventListener('click', (e)=>{
    //btn validé
    if(e.target.innerText == "validé"){
        e.target.parentNode.setAttribute('style', 'background-color: grey');
        e.target.innerText = "retour";
        e.target.parentNode.classList.add("checked")
    //btn décoché
    } else if (e.target.innerText == "retour") {
        e.target.parentNode.setAttribute('style', 'background-color: #CAC5AE ')
        e.target.innerText = "validé";
        e.target.parentNode.classList.remove("checked")

    //btn supprimer
    } else if (e.target.innerText == 'supprimer'){
        btnSupAnu = document.createElement('button')
        e.target.parentNode.appendChild(btnSupAnu);
        btnSupAnu.classList.add('btnWithTask');
        btnSupAnu.innerText = 'oui';
        e.target.innerText = 'non';
        btnSupAnu.addEventListener('focus', ()=>{
            btnSupAnu.parentNode.remove();
        });
    //btn annulation suppression
    } else if (e.target.innerText == 'non'){
        btnSupAnu.remove();
        e.target.innerText = 'supprimer'
    } else if (e.target.innerText == "modifier") {
        inputModif = document.createElement('input');
        e.target.parentNode.insertBefore(inputModif, e.target.nextSibling);
        inputModif.setAttribute('id', 'spanModifInput');
        e.target.innerText = "confirmer"

    } else if (e.target.innerText == "confirmer"){
        console.log("oui");
        e.target.parentNode.children[0].innerText = e.target.nextElementSibling.value;
        e.target.nextElementSibling.remove();
        e.target.innerText = "modifier";
    }
})

//Creation des filtres.


The3Buttons.addEventListener("click",(e)=>{
    // Btn a faire
    let listFait = document.getElementsByClassName("checked");
    let tabFait = Array.from(listFait);
    let listTous = document.getElementsByClassName("Tous")
    let tabTous = Array.from(listTous);
    console.log(tabTous);
    if (e.target.innerText=="A faire") {    
        tabFait.forEach(element => {
            element.classList.add("notDisplayed")
        });
    // Btn TOUS
    }else if(e.target.innerText=="Tous"){
        tabFait.forEach(element => {
            element.classList.remove("notDisplayed");
        });
        tabTous.forEach(element => {

             element.classList.remove("notDisplayed")
         });
    
    }else if (e.target.innerText=="Terminer") {
        console.log("yes");

        tabTous.forEach(element => {
            element.classList.add("notDisplayed");
            console.log("no");

        })
             tabFait.forEach(element2 => {
                 element2.classList.remove("notDisplayed");
             console.log("no2");
             });
        }
    
})