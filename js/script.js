
function lineanime() {
  return gsap
    .timeline({
      defaults: {
        ease: "power2.out",
        duration: 0.5,
        border: "1.5px solid #fff",
      },
    })

    .to(".hero-line1", {
      width: "9vw",
      ease: "power3.out",
    })
    .to(
      ".hero-line2",
      {
        width: "15vw",
      },
      "<0.25"
    )
    .to(
      ".hero-line3",
      {
        width: "8vw",
      },
      "<0.25"
    )
    .to(".hero-line4", { width: "52vw" }, "<0.25")
    .to(".hero-line5", { width: "15vw" }, "<0.25")
    .to(".hero-line6", { width: "5vw" }, "<0.25")
    .to(".hero-line7", { width: "5vw" }, "<0.25")
    .to(".hero-line8", { width: "15vw" }, "<0.25")
    .to(".hero-line9", { width: "5vw" }, "<0.25")
    .to(".hero-line10", { width: "23vw" }, "<0.25")
    .to(".hero-line11", { width: "50vw" }, "<0.25")
    .to(".hero-line12", { width: "5vw" }, "<0.25")
    .to(".hero-line13", { width: "46vw" }, "<0.25")
}
 /* window.addEventListener("load",lineanime);*/


function phoneAnimation() {

  if (window.innerWidth <= 767) {
  
    gsap.to(".phone-black", {
      right: "40vw",
      bottom: "20vh",
      duration: 1.5,
      delay:1,
      ease: "power3.out",
    });

    gsap.to(".phone-white", {
      right: "25vw",
      bottom: "15vh",
      duration: 1.5,
      delay: 2.5,
      ease: "power3.out",
    });
  } else {

    gsap.to(".phone-black", {
      right: "27vw",
      bottom: "8vh",
      duration: 1,
      ease: "power3.out",
    });

    gsap.to(".phone-white", {
      right: "21vw",
      bottom: "3vh",
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
    });
  }
}


/*window.addEventListener("load", phoneAnimation);
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(phoneAnimation, 300);
});  */



function wateranime(){
  const text = document.querySelector(".text-bg ");
  const water1= document.querySelector(".water-splash1");
  const water2= document.querySelector(".water-splash2");


gsap.to(text, {
  fontSize: "22vw",
  opacity:1,
  duration:3, 
  scrollTrigger: {
    trigger: text,
    start: "top 10%", 
    end: "bottom 97%",
    scrub: true, 
  }
});

gsap.to(water1,{
  left:"50%",
  duration : 3,
  scrollTrigger:{
    trigger:water1,
    start: "top 10%", 
    end: "bottom 97%",
    scrub:true,
  }
});

gsap.to(water2,{
  left:"50%",
  duration : 3,
  scrollTrigger:{
    trigger:water2,
     start: "top 10%", 
    end: "bottom 97%",
    scrub:true,
  }
});


}
 /*wateranime();*/


function faq_control() {
 
  const faqItems = document.querySelectorAll(".info-container");

  faqItems.forEach((item) => {
    const head = item.querySelector(".info-head");
    const info = item.querySelector(".info-para");

    
    gsap.set(info, { height: 0, overflow: "hidden", opacity: 0 });

    let isOpen = false;

    head.addEventListener("click", () => {
      if (!isOpen) {
       
        gsap.to(info, {
          height:"auto", 
          opacity: 1,
        
          ease: "power2.out",
          onStart: () => {
            info.style.display = "block";
          },
        });
      } else {
       
        gsap.to(info, {
          height: "auto",
          opacity: 0,
         
          ease: "power2.in",
          onComplete: () => {
            info.style.display = "none";
          },
        });
      }

      isOpen = !isOpen;
    });
  });
}

/*faq_control();*/


function featureanime(){
  head = document.querySelector(".head-feature");

 gsap.to(head, {
  opacity: 1,
  duration: 1.5, 
  ease: "power2.out", 
  scrollTrigger: {
    trigger: head,
    start: "top 5%", 
    end: "bottom 20%", 
    scrub: 1, 
  }
});


gsap.to(".lt1",{
  width:" 18vw",
  duration: 3,
  scrollTrigger:{
    trigger:".lt1",
      start: "top 6%",
    end: "bottom 10%",
    scrub: 1,
  }
})



}

featureanime();