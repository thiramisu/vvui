"use strict";

const $$$___RECENT_PROJECTS_DATA___$$$ = [
  {
    title: "やっほー…ばいばい", // .vvproj の抜き
    characters: [ // セリフ多い順5人くらい？
      {
        name: "四国めたん", // 短縮名(4/1のアイコン名とか)
        icon: "images/face_FILL1_wght700_GRAD0_opsz48.png",
      },
      {
        name: "ずんだもん",
        icon: "hogehoge", // 読み込み失敗時のデフォ画像
      }
    ],
    preview: { // 多分一番文字数が多い行
      name: "ナースロボ＿タイプＴ", // 名前が一番長いので収まるかテスト
      icon: "images/face_FILL1_wght700_GRAD0_opsz48.png",
      text: "あああああああああああ",
    },
    lastModified: new Date("2525-04-01T00:00:00"), // fs.statSync(path).mtime
    path: "", // サンプルのため未使用
  },
  {
    title: "やっほー…ばいばい",
    characters: ["春日部つむぎ", "雨晴はう", "波音リツ"],
    preview: {
      name: "ナースロボ＿タイプＴ", // 名前が一番長いので収まるかテスト
      icon: "images/face_FILL1_wght700_GRAD0_opsz48.png",
      text: "存在しないファイルはこんな感じになります。",
    },
    lastModified: undefined, // ファイルが存在しない時の仮
  },
  {
    title: "あああああああああああああああああああああああああああああああああああ.vvproj",
    characters: ["玄野武宏", "白上虎太郎", "青山龍星", "冥鳴ひまり", "九州そら"],
    preview: {
      name: "玄野武宏",
      icon: "images/face_FILL1_wght700_GRAD0_opsz48.png",
      text: "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやいゆえよ", // 一応40文字までを想定
    },
    lastModified: new Date("1970-01-01T00:00:00"),
  },
  {
    title: "",
    characters: ["もち子さん", "剣崎雌雄"],
    preview: {
      name: "もち子さん",
      icon: "hogehoge",
      text: "存在しないアイコンの場合はこうなります。",
    },
    lastModified: new Date("1970-01-01T00:00:00"),
  },
  {
    title: "これは禁則文字のテストです!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
    characters: ["WhiteCUL", "後鬼", "No.7"],
    preview: {
      name: "WhiteCUL",
      icon: "images/face_FILL1_wght700_GRAD0_opsz48.png",
      text: "禁則文字のテスト!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
    },
    lastModified: new Date("1970-01-01T00:00:00"),
  },
  {
    title: "禁則文字のテストです!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
    characters: ["玄野武宏", "白上虎太郎", "青山龍星", "冥鳴ひまり", "九州そら"],
    preview: {
      name: "玄野武宏",
      icon: "images/face_FILL1_wght700_GRAD0_opsz48.png",
      text: "禁則文字のテスト!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
    },
    lastModified: new Date("1970-01-01T00:00:00"),
  }
];

const $$$___LOAD_PROJECT_DATA___$$$ = 0;

const $$$___TITLE_ILLUSTLATOR_NAMES___$$$ = [
  "",
  "坂本アヒル",
  "490",
  "moiky",
  "のほしお",
  "さよなか",
  "レイア",
  "のんたお",
];

const asleep = (duration) => new Promise((resolve) => {
  setInterval(resolve, duration);
});
let lastPointerEventDispachTime = 0;
const CALC_INTERVAL = 1000;
const BACKGROUND_IMAGE_ID_MAX = 7;
const PREVIEW_MAX_FILE_SIZE = 20;

const sinInOut = (zeroToOne) => Math.sin((zeroToOne - 0.5) * Math.PI) + 0.5;

function generateUuid() {
    // https://github.com/GoogleChrome/chrome-platform-analytics/blob/master/src/internal/identifier.js
    // const FORMAT: string = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
    let chars = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("");
    for (let i = 0, len = chars.length; i < len; i++) {
        switch (chars[i]) {
            case "x":
                chars[i] = Math.floor(Math.random() * 16).toString(16);
                break;
            case "y":
                chars[i] = (Math.floor(Math.random() * 4) + 8).toString(16);
                break;
        }
    }
    return chars.join("");
}

const formatDate = (() => {
  // TODO: 59秒/1分/24時間/48時間/日付 に対応
  return (date) => date === undefined ? "日時不明" : "昨日";
})();

const titleScreen = (page) => {
  let pageSize = {
    width: page.scrollWidth,
    height: page.scrollHeight,
  };

  const titleScreen = document.getElementById("title-screen");
  const titleBg = document.getElementById("title-bg");
  const bgId = Math.floor(Math.random() * BACKGROUND_IMAGE_ID_MAX + 1);
  titleBg.src = `images/top-illust-${bgId.toString().padStart(3, '0')}.webp`;
  const titleIllustlatorName = document.getElementById("title-illustlator-name");
  titleIllustlatorName.textContent = $$$___TITLE_ILLUSTLATOR_NAMES___$$$[bgId];
  let titleBgSize;
  let titleClientRect = titleScreen.getBoundingClientRect();
  const titleLogo = document.getElementById("title-logo");

  let isShown = false;
  
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

  const animateTitle = async () => {
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

  const show = () => {
    if (isShown) return;
    isShown = true;
    titleScreen.hidden = false;
    page.addEventListener("pointermove", changeTitleImagePosition);
  }

  const hide = () => {
    if (!isShown) return;
    isShown = false;
    titleScreen.hidden = true;
    page.removeEventListener("pointermove", changeTitleImagePosition);
  }

  let fileSelectorHandler;
  const addEventListeners = () => {
    document.getElementById("title-memu-continue").addEventListener("click", () => {
      fileSelectorHandler.show();
    });
  }

  return {
    init({
      fileSelector
    }) {
      fileSelectorHandler = fileSelector;
      show();
      animateTitle();
      addEventListeners();
    },
    show,
    hide,
  };
};

const fileSelectorScreen = () => {
  const fileSelectorScreen = document.getElementById("file-selector");
  const buttonsWrapper = document.getElementById("file-selector-buttons-wrapper");
  let isShown = false;

  const replaceCharacterImage = ((template) => {
    return (event) => {
      const characterImgElement = event.target;
      const defaultElement = template.content.cloneNode(true);
      characterImgElement.parentNode.replaceChild(defaultElement, characterImgElement);
    };
  })(document.getElementById("character-no-image-template"));

  const createButton = ((template) => {
    return ({ title, characters, preview, lastModified }) => {
      const button = template.content.cloneNode(true);
      const titleElement = button.querySelector(".file-selector-button-title");
      titleElement.textContent = title.slice(0, Math.min(PREVIEW_MAX_FILE_SIZE, title.length)) + (title.length > PREVIEW_MAX_FILE_SIZE ? "…" : "");
      const characterImgElement = button.querySelector(".file-selector-button-preview-icon");
      characterImgElement.src = preview.icon;
      characterImgElement.addEventListener("error", replaceCharacterImage);
      const characterNameElement = button.querySelector(".file-selector-button-preview-name");
      characterNameElement.textContent = preview.name;
      const tectElement = button.querySelector(".file-selector-button-preview-text");
      tectElement.textContent = preview.text;
      const lastModifiedElement = button.querySelector(".file-selector-button-last-modified");
      lastModifiedElement.textContent = formatDate(lastModified);
      const buttonElement = button.querySelector(".file-select-button");
      if (lastModified === undefined) {
        buttonElement.classList.add("file-non-existent-button");
        buttonElement.addEventListener("click", () => {
          if (confirm(`存在しないファイルです。場所が移動されたか、削除された可能性があります。この履歴を削除しますか？`)) {
            alert("削除は未実装です！");
          }
        });
      } else {
        buttonElement.addEventListener("click", () => {
          loadProject();
        });
      }
      return button;
    }
  })(
    document.getElementById("file-selector-button-template"),
    document.getElementById("file-selector-button-default-image"),
  );
  
  const notFoundFileSelector = (() => {
    (title, characters, previewText) => {
      titleElement.textContent = title;
      const fileSelector = template.cloneNode(true);
      return fileSelector;
    }
  })();

  const loadRecentProjectFiles = async () => {
    const data = $$$___RECENT_PROJECTS_DATA___$$$;
    for (const projectSummary of data) {
      const button = createButton(projectSummary);
      buttonsWrapper.append(button);
    }
  };

  const init = async () => {
    const backToTitleButton = document.getElementById("dialog-back-to-title-button");
    backToTitleButton.addEventListener("click", hide);
  };

  const show = async () => {
    if (isShown) return;
    isShown = true;
    await loadRecentProjectFiles();
    fileSelectorScreen.hidden = false;
    await asleep(0); // アニメーションさせる
    fileSelectorScreen.classList.remove("to-bottom");
  };

  const hide = async () => {
    if (!isShown) return;
    isShown = false;
    fileSelectorScreen.classList.add("to-bottom");
    await asleep(500);
    if (isShown) return;
    while(buttonsWrapper.children.length > 2) {
      buttonsWrapper.removeChild(buttonsWrapper.children[buttonsWrapper.children.length - 1]);
    }
    fileSelectorScreen.hidden = true;
  };

  return {
    init,
    show,
    hide,
  };
};

window.addEventListener("load", () => {
  const page = document.documentElement;

  const title = titleScreen(page);
  const fileSelector = fileSelectorScreen();

  title.init({
    fileSelector,
  });

  fileSelector.init();

});
