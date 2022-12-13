let nextBtn = document.querySelector(".advice-holder img");

//Call Function when page is loaded
getRandomAdvice();

function getRandomAdvice() {
 let req = new XMLHttpRequest();
 req.open("GET", "https://api.adviceslip.com/advice");
 req.send();

 req.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
   //Show err msg
   document.querySelector(".err-msg").style.visibility = "hidden";

   let jsData = JSON.parse(this.responseText);
   document.querySelector(".advice-id").innerHTML = jsData.slip.id;
   document.querySelector(".advice-holder q").innerHTML = jsData.slip.advice;
  } else {
   //Show err msg
   document.querySelector(".err-msg").style.visibility = "visible";
  }
 };
}

nextBtn.onclick = () => {
 getRandomAdvice();
};
