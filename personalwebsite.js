 const text = document.getElementById("text")
 const demo = document.querySelector("#demo")
 const next = document.querySelector("#next")
 const pervious = document.querySelector("#goto1")

 const a = document.querySelector("#firstpage")
 const b = document.querySelector("#secondpage")





 

//  addiing new page


next.addEventListener("click",()=>{
  a.style.display='none';
  b.style.display='block';


})
pervious.addEventListener("click",()=>{
  b.style.display='none';
  a.style.display='block';


})
