const add=document.getElementById("add");
const mainbar=document.querySelector(".main-bar ");
const close=document.querySelector(".close");

//events
add.addEventListener('click', function(){
   mainbar.style.display='block';

});

close.addEventListener("click", function () {
   mainbar.style.display = "none";
});

