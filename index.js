const textareael = document.getElementById("textarea");
const totalcounterel= document.getElementById("total-counter");
const remainingcounterel= document.getElementById("remaining-counter")

textareael.addEventListener("keyup", ()=>{
    updatecounter()
})

updatecounter();

function updatecounter(){
    totalcounterel.innerText= textareael.value.length;
    remainingcounterel.innerText =
    textareael.getAttribute("maxlength") - textareael.value.length;
}