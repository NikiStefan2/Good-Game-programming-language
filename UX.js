//buttons and textarea from the left collumn
let Delete_Btn_Submit = document.getElementById("Delete-Btn-Submit"),
    Copy_Btn_Submit = document.getElementById("Copy-Btn-Submit"),
    Textarea_Submit = document.getElementById("code");

//buttons and textarea from the right collumn copy&paste ;) ; :))
let Delete_Btn = document.getElementById("Delete-Btn"),
Copy_Btn = document.getElementById("Copy-Btn"),
Textarea = document.getElementById("code_compiled");

Delete_Btn_Submit.addEventListener('click', function(){
    Textarea_Submit.value = "";
})



Copy_Btn_Submit.addEventListener('click', function(){
    Textarea_Submit.select();
    document.execCommand("copy");
})

Delete_Btn.addEventListener('click', function(){
    Textarea.value = "";
})



Copy_Btn.addEventListener('click', function(){
    Textarea.select();
    document.execCommand("copy");
})

