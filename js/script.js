
/*
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
  window.addEventListener("load",lineanime);


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


window.addEventListener("load", phoneAnimation);
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(phoneAnimation, 300);
});
*/