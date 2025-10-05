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
         ease: "power3.out" 
        })
    .to(".hero-line2", { 
        width: "15vw" 
    }, "<0.25")
    .to(".hero-line3", {
         width: "8vw" }, "<0.25")
    .to(".hero-line4", { width: "52vw" }, "<0.25")
    .to(".hero-line5", { width: "15vw" }, "<0.25")
    .to(".hero-line6", { width: "5vw" }, "<0.25")
    .to(".hero-line7", { width: "5vw" }, "<0.25")
    .to(".hero-line8", { width: "15vw" }, "<0.25")
    .to(".hero-line9", { width: "5vw" }, "<0.25")
    .to(".hero-line10", { width: "23vw" }, "<0.25")
    .to(".hero-line11", { width: "50vw" }, "<0.25")
    .to(".hero-line12", { width: "5vw" }, "<0.25")
    .to(".hero-line13", { width: "46vw" }, "<0.25");
}


lineanime();

function phoneanime(){
    gsap.to(".phone-black",{
        right: "27vw",
        bottom: "8vh",
    })
     gsap.to(".phone-white",{
        right: "21vw",
        delay:5,
    })
}

phoneanime();
