//navigation bar
let barsList = document.querySelector(".nav-list");
const ownerLabel = document.querySelector(".owner");
const line = document.querySelector(".underline")
const navListArray = [ "home"," about","projects","social","contact"];
for(let i = 0; i< navListArray.length; i++){
    const li = document.createElement("li");
    li.classList.add("liTags");
    li.innerHTML = navListArray[i].toUpperCase();
    li.id= i;
    barsList.append(li);
    line.style.width = ownerLabel.offsetWidth+"px"; /* line default position */
    ownerLabel.addEventListener("click",()=>{  /* this event listener can remake default underline */
        line.style.width = ownerLabel.offsetWidth+"px";
         const ownerIndivitualWidth = ownerLabel.offsetLeft - 30; /* -30 is owner div margin(ml-[30px]! to removed margin left*/
         line.style.transform = `translateX(${ownerIndivitualWidth}px)`;
         
    })
    li.addEventListener("click",(event)=>{
       let liWiths = event.target.offsetWidth;
       let liIndivitualWidth = event.target.offsetLeft - 30; /* -30 is owner div margin(mr-[30px]! to removed margin right*/
       line.style.width= liWiths+"px";
       line.style.transform = `translateX(${liIndivitualWidth}px)`;
     
    });
  
    
   



};
   
