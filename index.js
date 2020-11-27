// let sceneHeadingId = ["scene-1-heading", "scene-2-heading", "scene-3-heading"];
let sceneHeadingId = ["scene-1-heading", "scene-1-heading-absolute"];
let sceneHeadingText = [
  "Mobile Steno for Legal fraternity ",
  "Video transcription for Ed-Tech content",
  "Driving the telemedicine adoption in Bharat",
];

let sceneDescriptionText = [
  "Lawyers have immense transcription requirement running in multiple pages. AutoVox Mobile Steno understand the legal language and can increase productivity and reduce cost for the legal fraternity...more",

  "Millions of hours of quality content are getting created in multiple subjects. But are they reaching out to learners beyond a certain geography? Are the creators burdened with the task of creating same content in multiple language which is a time consuming and expensive task?...more",
  "In a country with a low doctor-patient ratio, language should not come in between reaching out to good doctors.",
];
let sceneDescriptionId = [
  "scene-1-description",
  "scene-1-description-absolute",
];

let backgroundImg = [
  "https://res.cloudinary.com/dh7kluimp/image/upload/v1606140234/tanmayproject/yellow_p9gsk8.png",
  "https://res.cloudinary.com/dh7kluimp/image/upload/v1606140234/tanmayproject/purple_oqz8zb.png",
  "https://res.cloudinary.com/dh7kluimp/image/upload/v1606140234/tanmayproject/blue_ebpbin.png",
];
let backgroundImgPeaple = [
  "https://res.cloudinary.com/dh7kluimp/image/upload/v1606144152/tanmayproject/blue_man_hfsmqs.png",
  "https://res.cloudinary.com/dh7kluimp/image/upload/v1606144152/tanmayproject/yellow_man_l2jkbt.png",
  "https://res.cloudinary.com/dh7kluimp/image/upload/v1606144152/tanmayproject/purple_man_ms7bhz.png",
];
let headtext;
let id = 0;
let id2 = 0;
let id3 = 0;
let id4 = 0;
let id5 = 0;
let interval;
let toggleId = 0;
let timeout = 113000;

function activeDisableElement(sceneId, sceneText, counter, clickShowId) {
  let elementToDisable = document.getElementById(
    sceneId[toggleId % sceneId.length]
  );
  elementToDisable.classList.add("disable");

  let elementToEnable = document.getElementById(
    sceneId[(toggleId + 1) % sceneId.length]
  );
  elementToEnable.innerHTML =
    sceneText[
      clickShowId !== undefined ? clickShowId : (counter + 1) % sceneText.length
    ];
  elementToEnable.classList.remove("disable");
  setTimeout(() => {
    elementToDisable.innerHTML = "";
  }, 500);
  toggleId++;
}

function personImageChange(clickShowId) {
  console.log(clickShowId);
  let pictureChange = document.getElementById("background-img-person");
  // setTimeout(() => {
  pictureChange.classList.add("black-fadeIn");
  console.log(
    (clickShowId !== undefined ? clickShowId : id4 + 1) %
      backgroundImgPeaple.length,
    clickShowId,
    id4
  );
  pictureChange.setAttribute(
    "src",
    backgroundImgPeaple[
      (clickShowId !== undefined ? clickShowId : id4 + 1) %
        backgroundImgPeaple.length
    ]
  );
  if (clickShowId) {
    id4 = clickShowId;
    // id4;
  } else {
    id4++;
  }

  setTimeout(() => {
    pictureChange.classList.remove("black-fadeIn");
  }, 1000);

  // }, 250);
}
function radioButtonChange(clickShowId) {
  let radioButton = document.getElementsByClassName("radio-button");
  radioButton[id5 % 3].classList.remove("active-carousel-radio");
  radioButton[id5 % 3].classList.add("disactive-carousel-radio");
  radioButton[
    clickShowId !== undefined ? clickShowId : (id5 + 1) % 3
  ].classList.remove("disactive-carousel-radio");
  radioButton[
    (clickShowId !== undefined ? clickShowId : id5 + 1) % 3
  ].classList.add("active-carousel-radio");
}

function carasol1() {
  interval = setInterval(() => {
    activeDisableElement(sceneHeadingId, sceneHeadingText, id);
    id++;
    // ----------------------------------------------------------
    activeDisableElement(sceneDescriptionId, sceneDescriptionText, id2);
    id2++;
    //-----------------------------------------------------------
    document
      .getElementById("background-img")
      .setAttribute("src", backgroundImg[id3 % backgroundImg.length]);
    id3++;

    personImageChange();
    radioButtonChange();
    id5++;
  }, timeout);
}
carasol1();

function reset(idcount) {
  clearInterval(interval);
  activeDisableElement(sceneHeadingId, sceneHeadingText, id, idcount);
  activeDisableElement(sceneDescriptionId, sceneDescriptionText, id2, idcount);
  document
    .getElementById("background-img")
    .setAttribute("src", backgroundImg[idcount % backgroundImg.length]);
  personImageChange(idcount);
  radioButtonChange(idcount);
  // idcount++;
  id = idcount;
  id2 = idcount;
  id3 = idcount;
  id5 = idcount;
  carasol1();
}

// --------------------------------------------------- second carosoul-----------------------
let imgUrls = [
  "https://res.cloudinary.com/dh7kluimp/image/upload/v1606319050/tanmayproject/Group_344_ldist6.png",
  "https://res.cloudinary.com/dh7kluimp/image/upload/v1606319925/tanmayproject/Group_345_1_ko11j9.png",
  "https://res.cloudinary.com/dh7kluimp/image/upload/v1606319093/tanmayproject/Group_346_2_qxwkxa.png",
];
let carasol2IdCount = 0,
  scene2toggleId = 0,
  radioButtonIdScene2 = 0;

let imagesceneDescriptionId = ["scene-2-heading", "scene-2-heading-absolute"];

function setImage(clickShowId) {
  let elementToDisable = document.getElementById(
    imagesceneDescriptionId[scene2toggleId % imagesceneDescriptionId.length]
  );
  elementToDisable.classList.add("disable");

  let elementToEnable = document.getElementById(
    imagesceneDescriptionId[
      (scene2toggleId + 1) % imagesceneDescriptionId.length
    ]
  );
  elementToEnable.classList.remove("disable");

  setTimeout(() => {
    elementToEnable.setAttribute(
      "src",
      imgUrls[
        clickShowId !== undefined
          ? clickShowId
          : (carasol2IdCount + 1) % imgUrls.length
      ]
    );
    elementToDisable.setAttribute("src", "");
    // = "";
    if (clickShowId) {
      carasol2IdCount = clickShowId;
    } else {
      carasol2IdCount++;
    }
  }, 200);
  scene2toggleId++;
}
function radioButtonChangeScene2(clickShowId) {
  let radioButton = document.getElementsByClassName("radio-button-one");
  radioButton[radioButtonIdScene2 % 3].classList.remove(
    "active-carousel-radio"
  );
  radioButton[radioButtonIdScene2 % 3].classList.add(
    "disactive-carousel-radio"
  );
  radioButton[
    clickShowId !== undefined ? clickShowId : (radioButtonIdScene2 + 1) % 3
  ].classList.remove("disactive-carousel-radio");
  radioButton[
    (clickShowId !== undefined ? clickShowId : radioButtonIdScene2 + 1) % 3
  ].classList.add("active-carousel-radio");
  radioButtonIdScene2++;
}

let carasol2interval;
function carasol2() {
  carasol2interval = setInterval(function () {
    setImage();
    radioButtonChangeScene2();
  }, timeout);
}
function scene2reset(clickShowId) {
  clearInterval(carasol2interval);
  setImage(clickShowId);
  radioButtonChangeScene2(clickShowId);
  radioButtonIdScene2 = clickShowId;
  carasol2IdCount = clickShowId;

  carasol2();
}

carasol2();
