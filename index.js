"use strict";

const asleep = (duration) => new Promise((resolve) => {
  setInterval(resolve, duration);
});
let lastPointerEventDispachTime = 0;
const CALC_INTERVAL = 1000;
const BACKGROUND_ID_MAX = 7;

const sinInOut = (zeroToOne) => Math.sin((zeroToOne - 0.5) * Math.PI) + 0.5;

window.addEventListener("load", () => {    
  const page = document.documentElement;
  let pageSize = {
    width: page.scrollWidth,
    height: page.scrollHeight,
  };
  const titleScreen = document.getElementById("title-screen");
  const titleBg = document.getElementById("title-bg");
  titleBg.src = `top-illust-${Math.floor(Math.random() * BACKGROUND_ID_MAX + 1).toString().padStart(3, '0')}.webp`;
  let titleBgSize;
  let titleClientRect = titleScreen.getBoundingClientRect();
  const titleLogo = document.getElementById("title-logo");
  
  const changeTitleImagePosition = (event) => {
    const now = Date.now();
    if (now - lastPointerEventDispachTime > CALC_INTERVAL) {
      if (titleBgSize === undefined || titleBgSize.width === 0) {
        titleBgSize = (() => {
          const { width, height } = titleBg.getBoundingClientRect();
          return { width, height };
        })();
      }
      pageSize = {
        width: page.scrollWidth,
        height: page.scrollHeight,
      };
      titleClientRect = titleScreen.getBoundingClientRect();
      lastPointerEventDispachTime = now;
    }
    const scale = Math.max(
      titleClientRect.height / titleBgSize.height,
      titleClientRect.width / titleBgSize.width,
    ) * 1.25;
    const xPercent = -50 + (sinInOut(event.pageX / pageSize.width) - 0.5) * 10;
    const yPercent = -50 + (sinInOut(event.pageY / pageSize.height) - 0.5) * 10;
    titleBg.style.transform = `translate(${xPercent}%, ${yPercent}%) scale(${scale})`;
  }

  page.addEventListener("pointermove", changeTitleImagePosition);
  animation(titleLogo);
});

const animation = async (titleLogo) => {
  const titleMonoBg = document.getElementById("title-mono-bg");
  const titlePrimaryBg = document.getElementById("title-primary-bg");
  const titleLogoShadow = document.getElementById("title-logo-shadow");
  const titleDescription = document.getElementById("title-description");
  
  titleLogo.classList.add("title-logo-transform-animation1");
  await asleep(1250);
  titleLogo.classList.add("title-logo-fill-animation1");
  await asleep(1000);
  titleLogo.classList.add("title-logo-fill-animation2");
  titleMonoBg.classList.add("to-transparent");
  titleLogoShadow.classList.add("to-transparent");
  await asleep(750);
  titleDescription.classList.add("title-description-animation");
  titleLogo.classList.add("title-logo-transform-animation2");
  await asleep(2000);
  titlePrimaryBg.classList.add("to-transparent");
  titleLogo.classList.add("title-logo-fill-animation3");
};
