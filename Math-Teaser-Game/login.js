let difficulty = document.getElementById("difficulty");
let submitBtn = document.getElementById("submit");
 submitBtn.addEventListener("click", function(){
     document.cookie = `difficulty=${difficulty.value}`;
     submitBtn.innerHTML = "HAVE FUN🤩";
 })
