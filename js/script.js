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




  function phoneanime() {
      // Black phone slides from bottom-right
      gsap.from(".phone-black", {
        x: 100,        // starts offset to right
        y: 50,         // starts offset below
        opacity: 0,    // fade-in
        duration: 1,
        ease: "power2.out"
      });

      // White phone slides from bottom-right, delayed
      gsap.from(".phone-white", {
        x: 120,        // starts offset to right
        y: 80,         // starts offset below
        opacity: 0,
        duration: 1,
        delay: 1,
        ease: "power2.out"
      });
    }

    window.addEventListener("load", phoneanime);
