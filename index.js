"use strict";

let lastPointerEventDispachTime = 0;
const CALC_INTERVAL = 1000;


window.addEventListener("load", () => {    
  const page = document.documentElement;
  let pageSize = {
    width: page.scrollWidth,
    height: page.scrollHeight,
  };
  const titleScreen = document.getElementById("title-screen");
  const titleBg = document.getElementById("title-bg");
  const titleBgSize = (() => {
    const { width, height } = titleBg.getBoundingClientRect();
    return { width, height };
  })();
  let titleClientRect = titleScreen.getBoundingClientRect();
  
  const changeTitleImagePosition = (event) => {
    const now = Date.now();
    if (now - lastPointerEventDispachTime > CALC_INTERVAL) {
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
    const margin = {
      height: titleBgSize.height - titleClientRect.height / scale,
      width: titleBgSize.width - titleClientRect.width / scale,
    };
    console.log(pageSize.width);
    const xPercent = -50 + ((event.pageX / pageSize.width) - 0.5) * 20;
    const yPercent = -50 + ((event.pageY / pageSize.height) - 0.5) * 20;
    titleBg.style.transform = `translate(${xPercent}%, ${yPercent}%) scale(${scale})`;
  }

  page.addEventListener("pointermove", changeTitleImagePosition);
});