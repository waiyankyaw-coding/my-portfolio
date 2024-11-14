//navigation bar
let barsList = document.querySelector(".nav-list");
const ownerLabel = document.querySelector(".owner");
const line = document.querySelector(".underline")
const navListArray = [ "home"," about","projects","social","contact"];
const Bgimage = document.querySelector(".home-page-background"); 
const Home = document.querySelector(".home-page")//Home section
const About = document.querySelector(".about-section")//About section
const ProjectsSection = document.querySelector(".project-section");//Project section
const Social = document.querySelector(".social-section");//Social section
const Contact = document.querySelector(".contact-section");//Contact section


for(let i = 0; i< navListArray.length; i++){
    const li = document.createElement("li");
    li.classList.add("liTags");
    li.innerHTML = navListArray[i].toUpperCase();
    li.id= i;
    barsList.append(li);
    line.style.width = ownerLabel.offsetWidth+"px"; /* line default position */
    line.style.display = "none";
    ownerLabel.addEventListener("click",()=>{  /* this event listener can remake default underline */
        line.style.display ="block";
        line.style.width = ownerLabel.offsetWidth+"px";
         const ownerIndivitualWidth = ownerLabel.offsetLeft -30; /* -30 is owner div margin(ml-[30px]! to removed margin left*/
         line.style.transform = `translateX(${ownerIndivitualWidth}px)`;
         
    })
    li.addEventListener("click",(event)=>{
       line.style.display ="block";
       let liWiths = event.target.offsetWidth;
       let liIndivitualWidth = event.target.offsetLeft - 30; /* -30 is owner div margin(mr-[30px]! to removed margin right*/
       line.style.width= liWiths+"px";
       line.style.transform = `translateX(${liIndivitualWidth}px)`;

      if (event.target.id === "1") {
        //Hidden list
        Home.style.display = "none";
        ProjectsSection.style.display = "none";
        Bgimage.classList.remove("bg-[url('images/bgimg.jpg')]","h-screen");
        Bgimage.classList.add("h-[auto]");
        Social.style.display = "none";
        Contact.style.display = "none";

        //Blocking list
        About.style.display = "block";
        line.style.display ="block";
        
      } else{
        Home.style.display = "block";
        Bgimage.classList.add("bg-[url('images/bgimg.jpg')]","h-screen")
        About.style.display = "none"
        ProjectsSection.style.display = "none";
        Social.style.display = "none";
        Contact.style.display = "none";
        Bgimage.classList.remove("h-[auto]");
      };
      //About

      if (event.target.id === "2") {
        //Hidden list
        About.style.display = "none";
        Home.style.display = "none";
        Bgimage.classList.remove("bg-[url('images/bgimg.jpg')]");
        Bgimage.classList.add("h-[auto]");
        Social.style.display = "none";
        Contact.style.display = "none";

        //Blocking list
        ProjectsSection.style.display = "block";
        
      };
      
      //Social section

      if(event.target.id === "3") {
        //hidden list
        Home.style.display = "none";
        ProjectsSection.style.display = "none";
        Bgimage.classList.remove("bg-[url('images/bgimg.jpg')]");
        Bgimage.classList.add("h-[auto]");
        Contact.style.display = "none";


        //blocking list
        Social.style.display = "block";

      }

      //Contact section

      if(event.target.id === "4") {

        //hidden list
        Home.style.display = "none";
        ProjectsSection.style.display = "none";
        Bgimage.classList.remove("bg-[url('images/bgimg.jpg')]");
        Bgimage.classList.add("h-[auto]");

        //blocking list
        Contact.style.display = "block";
      }
     
    });

   
};

//downloaded toaster
let button = document.querySelector(".bt");
let downloadedToaster = document.querySelector(".complete-download");
let offHight = downloadedToaster.offsetHeight;
downloadedToaster.style.top = `-${offHight}`+"1"+"px";
button.addEventListener("click",()=>{
setTimeout(()=>{
    downloadedToaster.style.top = "15px";
},100)

setTimeout(()=>{
    downloadedToaster.style.top = `-${offHight}`+"1"+"px";;
},10000)
   
});







   
