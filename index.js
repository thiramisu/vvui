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

// キャラ候補に出るキャラ。
// 順番は 選択中＞シーン中＞プロジェクト中。
const $$$___RECENT_CHARACTERS___$$$ = [
  "四国めたん",
  "ずんだもん",
];

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

const $$$___CHARACTER_DATA___$$$ = {
  // 一応50音(辞書)順
  青山龍星: {
    latin: "aoyama_ryusei",
    nickname: "龍星",
    kana: "あおやまりゅうせい",
    color: "#386CB0",
    lightColor: "#B3CDE3",
  },
  雨晴はう: {
    latin: "amehare_hau", // ファイル名用
    nickname: "はう",
    kana: "あめはれはう",
    color: "#1D86AE",
    lightColor: "#B3D7DD",
  },
  櫻歌ミコ: {
    latin: "ouka_miko",
    nickname: "ミコ",
    kana: "おうかみこ",
    color: "#F9344C",
    lightColor: "#FBB4C4",
  },
  春日部つむぎ: {
    latin: "kasukabe_tsumugi",
    nickname: "つむぎ",
    kana: "かすかべつむぎ",
    color: "#FF9914",
    lightColor: "#FEE6AA",
  },
  麒ヶ島宗麟: {
    latin: "kigashima_sourin",
    nickname: "麒ヶ島",
    kana: "きがしまそうりん",
    color: "#FF9914",
    lightColor: "#FEE6AA",
  },
  九州そら: {
    latin: "kyushu_sora",
    nickname: "そら",
    kana: "きゅうしゅうそら",
    color: "#6964AD",
    lightColor: "#B2B6D8",
  },
  玄野武宏: {
    latin: "kurono_takehiro",
    nickname: "武宏",
    kana: "くろのたけひろ",
    color: "#1AA18E",
    lightColor: "#B3E2D8",
  },
  剣崎雌雄: {
    latin: "kenzaki_mesuo",
    nickname: "雌雄",
    kana: "けんざきめすお",
    color: "#33A65E",
    lightColor: "#CCEBC5",
  },
  後鬼: {
    latin: "goki",
    nickname: "後鬼",
    kana: "ごき",
    color: "#386CB0",
    lightColor: "#B3CDE3",
  },
  "小夜/SAYO": {
    latin: "sayo",
    nickname: "小夜",
    kana: "さよ",
    color: "#FF6687",
    lightColor: "#FBB4C4",
  },
  四国めたん: {
    latin: "shikoku_metan",
    nickname: "めたん",
    kana: "しこくめたん",
    color: "#DF4C94",
    lightColor: "#E3ADD5",
  },
  白上虎太郎: {
    latin: "shirakami_kotarou",
    nickname: "虎太郎",
    kana: "しらかみこたろう",
    color: "#99D02B",
    lightColor: "#E6F5B0",
  },
  すんだもん: {
    latin: "zundamon",
    nickname: "すんだもん",
    kana: "ずんだもん",
    color: "#33A65E",
    lightColor: "#CCEBC5",
  },
  ちび式じい: {
    latin: "chibishikiji",
    nickname: "ちびじい",
    kana: "ちびしきじい",
    color: "#1D86AE",
    lightColor: "#B3D7DD",
  },
  中国うさぎ: {
    latin: "chugoku_usagi",
    nickname: "うさぎ",
    kana: "ちゅうごくうさぎ",
    color: "#FC4E32",
    lightColor: "#FDCDB7",
  },
  ナースロボ＿タイプＴ: {
    latin: "nurserobo_typet",
    nickname: "ＴＴ",
    kana: "なーすろぼたいぷてぃー",
    color: "#FF9914",
    lightColor: "#FEE6AA",
  },
  波音リツ: {
    latin: "namine_ritsu",
    nickname: "リツ",
    kana: "なみねりつ",
    color: "#FC4E32",
    lightColor: "#FDCDB7",
  },
  "No.7": {
    latin: "number_seven",
    nickname: "No.7",
    kana: "なんばーせぶん",
    color: "#A45AAA",
    lightColor: "#CAB2D6",
  },
  猫使アル: {
    latin: "nekotsuka_aru",
    nickname: "アル",
    kana: "ねこつかある",
    color: "#F9344C",
    lightColor: "#FBB4C4",
  },
  猫使ビィ: {
    latin: "nekotsuka_bi",
    nickname: "ビィ",
    kana: "ねこつかびぃ",
    color: "#1D86AE",
    lightColor: "#B3D7DD",
  },
  春歌ナナ: {
    latin: "haruka_nana",
    nickname: "ナナ",
    kana: "はるかなな",
    color: "#DF4C94",
    lightColor: "#E3ADD5",
  },
  "†聖騎士紅桜†": {
    latin: "horinaito_benizakura",
    nickname: "†紅桜†",
    kana: "ほーりーないとべにざくら",
    color: "#F9344C",
    lightColor: "#FBB4C4",
  },
  WhiteCUL: {
    latin: "white_cul",
    nickname: "WhiteCUL", // 「雪」よりも差別化できそうなのでそのまま英字
    kana: "ほわいとかる",
    color: "#1D86AE",
    lightColor: "#B3D7DD",
  },
  冥鳴ひまり: {
    latin: "meimei_himari",
    nickname: "ひまり",
    kana: "めいめいひまり",
    color: "#A45AAA",
    lightColor: "#CAB2D6",
  },
  もち子さん: {
    latin: "mochikosan",
    nickname: "もち子",
    kana: "もちこさん",
    color: "#1D86AE",
    lightColor: "#B3D7DD",
  },
  雀松朱司: {
    latin: "wakamatsu_akashi",
    nickname: "朱司",
    kana: "わかまつあかし",
    color: "#FC4E32",
    lightColor: "#FDCDB7",
  },
};

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
  titleBg.src = `images/top-illust/${bgId.toString().padStart(3, '0')}.webp`;
  const titleIllustlatorName = document.getElementById("title-illustlator-name");
  titleIllustlatorName.textContent = $$$___TITLE_ILLUSTLATOR_NAMES___$$$[bgId];
  let titleBgSize;
  let titleClientRect = titleScreen.getBoundingClientRect();
  const titleLogo = document.getElementById("title-logo");

  let isShowing = false;
  
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

  const show = async () => {
    if (isShowing) return;
    isShowing = true;
    titleScreen.classList.remove("to-transparent");
    await asleep(500);
    titleScreen.hidden = false;
    page.addEventListener("pointermove", changeTitleImagePosition);
  }

  const hide = async () => {
    if (!isShowing) return;
    isShowing = false;
    titleScreen.classList.add("to-transparent");
    await asleep(500);
    titleScreen.hidden = true;
    page.removeEventListener("pointermove", changeTitleImagePosition);
  }

  let mainHandler;
  let fileSelectorHandler;
  const addEventListeners = () => {
    document.getElementById("title-memu-start").addEventListener("click", async () => {
      await hide();
      mainHandler.show();
    });
    document.getElementById("title-memu-continue").addEventListener("click", () => {
      fileSelectorHandler.show();
    });
  }

  return {
    init({
      fileSelector,
      main,
    }) {
      mainHandler = main;
      fileSelectorHandler = fileSelector;
      show();
      animateTitle();
      addEventListeners();
    },
    show,
    hide,
  };
};

const sceneCharactorIllusts = () => {
  const sceneCharactorIllusts = document.getElementById("illust");

  const focusActiveCharacter = () => {
    sceneCharactorIllusts.classList.add("focus-active-character");
  };

  const blurActiveCharacter = () => {
    sceneCharactorIllusts.classList.remove("focus-active-character");
  };

  return {
    focusActiveCharacter,
    blurActiveCharacter,
  };
};

const fileSelectorScreen = () => {
  const fileSelectorScreen = document.getElementById("file-selector");
  const buttonsWrapper = document.getElementById("file-selector-buttons-wrapper");
  let isShowing = false;

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
          alert("未実装！NEW PROJECTから始めてください！")
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
    if (isShowing) return;
    isShowing = true;
    await loadRecentProjectFiles();
    fileSelectorScreen.hidden = false;
    await asleep(0); // アニメーションさせる
    fileSelectorScreen.classList.remove("to-bottom");
  };

  const hide = async () => {
    if (!isShowing) return;
    isShowing = false;
    fileSelectorScreen.classList.add("to-bottom");
    await asleep(500);
    if (isShowing) return;
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

const mainScreen = () => {
  const mainScreen = document.getElementById("main");
  const bg = document.getElementById("main-background");
  let isShowing = false;

  const show = async () => {
    if (isShowing) return;
    isShowing = true;
    mainScreen.hidden = false;
    await asleep(0);
    bg.classList.add("bb");
    mainScreen.classList.remove("to-transparent");
  };

  const hide = async () => {
    if (!isShowing) return;
    isShowing = false;
    bg.classList.remove("bb");
    mainScreen.classList.add("to-transparent");
    await asleep(500);
    if (isShowing) return;
    mainScreen.hidden = true;
  };

  return {
    init({ characterSelector }) {
      document.getElementById("character").addEventListener("click", () => {
        if (characterSelector.isShowing) {
          characterSelector.hide();
        } else {
          characterSelector.show();
        }
      });
    },
    show,
    hide,
  }
};

const characterSelectCard = () => {
  const characterSelector = document.getElementById("character-selector");
  const characterSelectorLineButtons = document.getElementById("character-selector-recent-buttons");
  let isShowing = false;

  const characterSelectButton = ((template) => (name, { color }) => {
    const clone = template.content.cloneNode(true);
    const characterSelectButton = clone.querySelector(".character-select-button");
    characterSelectButton.textContent = name;
    return clone;
  })(document.getElementById("character-selector-button-template"));

  const recentButton = ((template) => (recent, index) => {
    const clone = template.content.cloneNode(true);
    const recentButton = clone.querySelector(".recent-button");
    recentButton.textContent = recent;
    return clone;
  })(document.getElementById("character-selector-recent-button-template"));

  const addCharacters = (characterData) => {
    const fragment = document.createDocumentFragment();
    for (const [name, data] of characterData) {
      fragment.appendChild(characterSelectButton(name, data));
    }
    characterSelector.appendChild(fragment);
  };

  let sceneCharactorsHandler;
  const init = ({ sceneCharactors }) => {
    sceneCharactorsHandler = sceneCharactors;
    characterSelectorLineButtons.append(...$$$___RECENT_CHARACTERS___$$$.map(recentButton));
    const characters = Array
      .from(Object.entries($$$___CHARACTER_DATA___$$$))
      .sort((a, b) => a[0] > b[0]);
    addCharacters(characters);
  };

  const show = async () => {
    if (isShowing) return;
    isShowing = true;
    characterSelector.hidden = false;
    characterSelectorLineButtons.hidden = false;
    await asleep(0);
    sceneCharactorsHandler.focusActiveCharacter();
    characterSelectorLineButtons.classList.add("to-initial");;
    await asleep(200);
    if (!isShowing) return;
    characterSelector.classList.remove("to-top");
  };

  const hide = async () => {
    if (!isShowing) return;
    isShowing = false;
    characterSelector.classList.add("to-top");
    characterSelectorLineButtons.classList.remove("to-initial");
    sceneCharactorsHandler.blurActiveCharacter();
    await asleep(500);
    if (isShowing) return;
    characterSelector.hidden = true;
    characterSelectorLineButtons.hidden = true;
  };

  return {
    get isShowing() { return isShowing; },
    init,
    addCharacters,
    show,
    hide,
  };
};

const audioDetailCard = (() => {
  const tabNames = ["accent", "intonation", "length"];
  const tabs = {};
  for (const tabName of tabNames) {
    tabs[tabName] = {
      button: document.getElementById(`audio-detail-${tabName}-tab-button`),
      content: document.getElementById(`audio-detail-${tabName}-tab-content`),
    };
  }
  let currentTabName = undefined;

  const hideTab = (tabName) => {
    tabs[tabName].content.hidden = true;
    tabs[tabName].button.classList.remove("active-tab");
  };

  const changeTab = (tabName) => {
    if (currentTabName === tabName) {
      currentTabName = undefined;
      hideTab(tabName);
    } else {
      const beforeTab = tabs[currentTabName];
      if (beforeTab !== undefined) {
        hideTab(currentTabName);
      }
      currentTabName = tabName;
      tabs[tabName].content.hidden = false;
      tabs[tabName].button.classList.add("active-tab");
    }
  };

  const init = () => {
    for (const [tabName, tab] of Object.entries(tabs)) {
      tab.button.addEventListener("click", () => { changeTab(tabName); });
    }
  };

  return {
    init,
  };
});

window.addEventListener("load", () => {
  const page = document.documentElement;

  const title = titleScreen(page);
  const fileSelector = fileSelectorScreen();
  const main = mainScreen();
  const sceneCharactors = sceneCharactorIllusts();
  const characterSelector = characterSelectCard();
  const audioDetail = audioDetailCard();

  title.init({
    fileSelector,
    main,
  });

  fileSelector.init();

  main.init({
    characterSelector,
  })
  characterSelector.init({
    sceneCharactors,
  });
  audioDetail.init();
});
