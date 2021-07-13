//buttons and textarea from the left collumn
let Delete_Btn_Submit = document.getElementById("Delete-Btn-Submit"),
    Copy_Btn_Submit = document.getElementById("Copy-Btn-Submit"),
    Textarea_Submit = document.getElementById("code");

//buttons and textarea from the right collumn copy&paste ;) ; :))
let Delete_Btn = document.getElementById("Delete-Btn"),
    Copy_Btn = document.getElementById("Copy-Btn"),
    Textarea = document.getElementsByClassName("code_compiled");

Delete_Btn_Submit.addEventListener('click', function () {
    Textarea_Submit.value = "";
})



Copy_Btn_Submit.addEventListener('click', function () {
    Textarea_Submit.select();
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
element.style.height = Textarea_Submit.offsetHeight.toString() + "px";//();

//alert(Textarea_Submit.offsetHeight)//mergea si console log da cnad cad cand dad ui sace z control s imediat aparu
document.body.appendChild(element);
