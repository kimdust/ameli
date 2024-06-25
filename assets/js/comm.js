var swiper = new Swiper(".bestslide", {
  slidesPerView: 6.3,
  spaceBetween: 30,
  autoplay: true,
  loop: true,
  freemode: true,
});

document.addEventListener("DOMContentLoaded", function () {
  const liElements = document.querySelectorAll(".intro ul li");

  const imageElements = [];
  const textElements = [];
  const logoElement = [];

  liElements.forEach((li) => {
    const img = li.querySelector("img");
    const p = li.querySelector("p");
    if (img && !li.classList.contains("li2box")) {
      imageElements.push(li);
    } else if (p) {
      textElements.push(li);
    } else if (img && li.classList.contains("li2box")) {
      logoElement.push(li);
    }
  });

  for (let i = imageElements.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [imageElements[i], imageElements[j]] = [imageElements[j], imageElements[i]];
  }

  gsap.set([...imageElements, ...textElements, ...logoElement], {
    autoAlpha: 0,
  });

  gsap.to(imageElements, {
    autoAlpha: 1,
    duration: 0.5,
    stagger: 0.2,
    ease: "power2.inOut",
    onComplete: () => {
      gsap.to(textElements, {
        autoAlpha: 1,
        duration: 2,
        stagger: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.to(logoElement, {
            autoAlpha: 1,
            duration: 1,
            ease: "power2.inOut",
          });
        },
      });
    },
  });
});
