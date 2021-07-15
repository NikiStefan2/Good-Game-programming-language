//buttons and textarea from the left collumn
let Delete_Btn_Submit = document.getElementById("Delete-Btn-Submit"),
    Copy_Btn_Submit = document.getElementById("Copy-Btn-Submit"),
    Textarea_Submit = document.getElementsByClassName("code");

//buttons and textarea from the right collumn copy&paste ;) ; :))
let Delete_Btn = document.getElementById("Delete-Btn"),
    Copy_Btn = document.getElementById("Copy-Btn"),
    Textarea = document.getElementsByClassName("code_compiled");



let colorized_code = document.getElementById("colorized-code");
let words = [];

let word_collozer = [];

let wordsSpans;

Delete_Btn_Submit.addEventListener('click', function () {
    Textarea_Submit[0].value = "";
})




Copy_Btn_Submit.addEventListener('click', function () {
    Textarea_Submit[0].select();
    document.execCommand("copy");
})

Delete_Btn.addEventListener('click', function () {
    Textarea[0].value = "";
})



Copy_Btn.addEventListener('click', function () {
    Textarea[0].select();
    document.execCommand("copy");
})

let element = document.createElement("div");
element.classList.add("code-lines");
for (let i = 0; i < 38; i++) {
    let Line = document.createElement("span");
    Line.innerHTML = i + 1;
    element.appendChild(Line);
}
element.style.height = Textarea_Submit[0].offsetHeight.toString() + "px";//();

//alert(Textarea_Submit.offsetHeight)//mergea si console log da cnad cad cand dad ui sace z control s imediat aparu
document.body.appendChild(element);

// document.getElementById("table-of-contents").onscroll = () => {
//     console.log("lkol");
// }

// let stikcy 

// let table_of_contents = document.getElementById("table-of-contents");

// let sticky = table_of_contents.offsetTop + 500;

// //document.getElementById("docs").onscroll = () => {
// window.onscroll = () => {
//     console.log("lol");
//     if (window.pageYOffset >= sticky) {//voiam sa fac cu docume...get..byid..docs");lol da unu nu aveam page y offset cerecaa asa pana ajunge la docs si la ta si mai jos nu la table si conta contents
//         //    table_of_contents.classList.add("sticky-table-of-contents");
//         table_of_contents.style.position = "fixed";
//     } else {
//         //  table_of_contents.classList.remove("sticky-table-of-contents");//of = foor= foo=if lol greseklli a 3 si a 4 incepand lde la 1 
//         table_of_contents.style.position = "relative";
//     }
// }

// Textarea[0].addEventListener('o')

// let ColorsOnWords = {
//     "scrie": "#50CB93",

// }

let ColorsOnWords = [["scrie", "#50CB93"], ['"', "#FF7600"], ["ver", "#1768AC"], ["=", "#93D9A3"]];//aap aparent eu voiam albastru si alesai aceasi nuanta de verde ce cred ca sunt obosit e 12 55 pm

let ColoRize = () => {
    words = Textarea_Submit[0].value.split(" ");
    // let spaces
    console.log(words);
    console.log(ColorsOnWords);

    Textarea_Submit[0].style.display = "none";
    colorized_code.style.display = "block";

    wordsSpans = document.createElement("div");

    for (let i = 0; i < words.length; i++) {
        let spanElement = document.createElement("span");
        word_collozer.push(spanElement.nodeType);
        for (let o = 0; o < ColorsOnWords.length; o++) {
            if (words[i] == ColorsOnWords[o][0]) {
                spanElement.style.color = ColorsOnWords[o][1];
            } else if (words[i] !== ColorsOnWords[o][0] && words[i] !== "ver" && words[i] !== "scrie") {
                spanElement.style.color = "#FF7600";
                // spanElement.innerText = words[i].slice(words[i].indexOf('"'), words[i].indexOf('"', 1));
                // spanElement.innerText = words[i].slice
            }
            if (words[i].includes("(") || words[i].includes(")")) {
                spanElement.style.color = "#50CB93";
            }
        }
        if (i > 0) {
            spanElement.innerText = words[i] + " ";
        } else if (i == 0) {
            spanElement.innerText = words[i] + " ";
        }
        wordsSpans.appendChild(spanElement);
    }
    colorized_code.appendChild(wordsSpans);

    // for(let i = 0; i < 0; i++){
    // for (let i = 0; i < 1; i++) {

    // }
}

let _Date = new Date();

let weekdays = ["Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata", "Duminica"];
let lunideZile = ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"];//trebuia sa numar de la capat ca lka af alfabet sa vad ce urmeaza lol

let datadezile = weekdays[_Date.getDay()] + ", " + _Date.getDate().toString() + " " + lunideZile[_Date.getMonth()] + " " + _Date.getFullYear() + " " + _Date.getHours() + ":" + _Date.getMinutes() + ":" + _Date.getSeconds();//stiu c=sinfgur vs code ca ultima vreau sa fie seconds  imi da dui seama c si singur fara sa ma uit pem mdn la ulktima//uitasem sa pun () la final la get creca nici nu mkergea fara ele lol

let CodeToSave;

let modal = document.getElementById("modal");
let restul = document.getElementById("restu");

document.getElementById("Save-Btn-Submit").addEventListener('click', () =>{
    // prompt("Nume", Date.now());
    CodeToSave = Textarea_Submit[0].value;

    CustomPromptBoy();
    //let name = prompt("Nume", datadezile);

    //localStorage.setItem(name, CodeToSave);
});



let CustomPromptBoy = (message, daufaulk) => {

    let modal_ok_button = document.getElementById("Ok-Btn");//sper sa fie numai la modal im just sayng lol dani loplolololoo
    let modal_cancel_button = document.getElementById("Cancel-Btn");
    let moadal_input = document.getElementById("modal-input");
    let modal_message_text = document.getElementById("modal-message");

    moadal_input.value = daufaulk.toString();
    modal_message_text.innerText = message;


    modal.style.display = "block";
    // restul.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    restul.style.display = "block";
}