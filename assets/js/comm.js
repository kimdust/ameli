var swiper = new Swiper(".bestslide", {
  spaceBetween: 30,
  autoplay: true,
  loop: true,
  freemode: true,
  breakpoints: {
    0: {
      slidesPerView: 1.5,
    },
    361: {
      slidesPerView: 2.5,
    },
    721: {
      slidesPerView: 3.5,
    },
    1221: {
      slidesPerView: 6.3,
    },
  },
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

document.addEventListener("DOMContentLoaded", function () {
  const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });

  tl.from(".mobile_intro .intro_first_line, .mobile_intro .first_line_txt", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
  })
    .from(
      ".mobile_intro .intro_sec_line, .mobile_intro .sec_line_txt",
      { opacity: 0, y: 50, stagger: 0.2 },
      "-=0.5"
    )
    .from(
      ".mobile_intro .intro_third_line, .mobile_intro .third_line_txt",
      { opacity: 0, y: 50, stagger: 0.2 },
      "-=0.5"
    )
    .from(".mobile_intro #logo_img", { opacity: 0, y: 50 }, "-=0.1");
});

document.addEventListener("DOMContentLoaded", function () {
  const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });

  tl.from(".banner li img", { opacity: 0, y: 50, stagger: 0.3 }).from(
    ".banner li .banner_txt",
    { opacity: 0, y: 50, stagger: 0.3 },
    "-=1"
  );

  ScrollTrigger.create({
    trigger: ".banner",
    start: "top 80%",
    animation: tl,
    once: true,
  });
});

$(document).ready(function () {
  $(".up_btn").hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $(".up_btn").fadeIn();
      $(".up_btn").css("visibility", "visible");
    } else {
      $(".up_btn").fadeOut();
      $(".up_btn").css("visibility", "hideen");
    }
  });

  $(".up_btn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });

  $(".fa-bars").click(function () {
    $(".mobile_gnb > ul").slideToggle();
    $("#header").css({ background: "#fdf9f8", backdropFilter: "none" });
  });
});
