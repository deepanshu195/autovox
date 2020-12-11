// let sceneHeadingId = ["scene-1-heading", "scene-2-heading", "scene-3-heading"];
let sceneHeadingId = ["scene-1-heading", "scene-1-heading-absolute"];
let sceneHeadingText = [
  "Mobile Steno <br/> for Legal fraternity ",
  "Video transcription for<br/> Ed-Tech content",
  "Driving the telemedicine<br/> adoption in Bharat",
];

let sceneDescriptionText = [
  " Lawyers have immense transcription  <br class='break-at-laptop' /> need on a daily basis. Most of them hire  <br class='break-at-laptop' /> a stenographers salaried upto 40,000&#x20B9; a  <br class='break-at-laptop' /> month. To add to this, there is a need for  <br class='break-at-laptop' /> translation as petitions across courts.",

  "Millions of hours of quality content are  <br class='break-at-laptop' />getting created in multiple subjects. But are  <br class='break-at-laptop' />they reaching out to learners beyond a  <br class='break-at-laptop' />certain geography? Are the creators <br class='break-at-laptop' /> burdened with the task of creating same <br class='break-at-laptop' /> content in multiple language which is a time  <br class='break-at-laptop' />consuming and expensive task?...more",
  "In a country with a low doctor-patient ratio, <br class='break-at-laptop' /> language should not come in between <br class='break-at-laptop' /> reaching out to good doctors.",
];
let sceneDescriptionId = [
  "scene-1-description",
  "scene-1-description-absolute",
];
let sceneDescriptionMobileId = [
  "scene-1-description-mobile",
  "scene-1-description-absolute-mobile",
];

let backgroundImg = [
  "https://res.cloudinary.com/dch9bhewr/image/upload/v1607579511/autovox/Rectangle_21_rwkrow.svg",
  "https://res.cloudinary.com/dch9bhewr/image/upload/v1607579511/autovox/Rectangle_21_1_uypaiy.svg",
  "https://res.cloudinary.com/dch9bhewr/image/upload/v1607579511/autovox/Rectangle_21_2_geemtd.svg",
];
let backgroundImgPeaple = [
  "https://res.cloudinary.com/dch9bhewr/image/upload/v1607572843/autovox/susy_2_3_cn99ul.svg",
  "https://res.cloudinary.com/dch9bhewr/image/upload/v1607572792/autovox/susy_2_3_1_z3woai.svg",
  "https://res.cloudinary.com/dch9bhewr/image/upload/v1607572843/autovox/susy_2_3_2_acelxk.svg",
];
let headtext;
let id = 0;
let id2 = 0;
let id3 = 0;
let id4 = 0;
let id5 = 0;
let interval;
let toggleId = 0;
let timeout = 114000;

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

  let mobH =
    document.getElementById("scene-1-description-mobile").clientHeight ||
    document.getElementById("scene-1-description-absolute-mobile").clientHeight;
  document.getElementById("for-mobile-change-scene-1").style.minHeight =
    mobH + "px";
}

function personImageChange(clickShowId) {
  let pictureChange = document.getElementById("background-img-person");
  // setTimeout(() => {
  pictureChange.classList.add("black-fadeIn");
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
    // for mobile
    activeDisableElement(sceneDescriptionMobileId, sceneDescriptionText, id2);
    id2++;
    //-----------------------------------------------------------
    document
      .getElementById("background-img")
      .setAttribute("src", backgroundImg[(id3 + 1) % backgroundImg.length]);
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
  // for mobile
  activeDisableElement(
    sceneDescriptionMobileId,
    sceneDescriptionText,
    id2,
    idcount
  );

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

let secondCarosoulHtml = [
  '<div class="relative scene-2-heading-div" style="margin-bottom: 80px;"> <div id="" class="scene-2-heading" style="min-height: 100px;margin-left: auto;margin-right: auto;width: max-content;"> High Quality Speech <br/>Processing </div> <div id="" class="absolute disable" style="top: 0px;"> </div> </div> <div class="relative scene-2-description"> <div class="card-deck relative"> <div class="card personalized-card"> <div class="inside-autovox-card-head-text"> <span class="bold "> Source File: </span> <br/> <span class=""> </span> English </div> <div class=" relative graph-img" style="left: -10px;"> <img src="https://res.cloudinary.com/dch9bhewr/image/upload/v1607572781/autovox/Rectangle_33_qol6ta.svg" alt="wave"> </div> <div class="absolute arrow-img"> <img src="https://res.cloudinary.com/dch9bhewr/image/upload/v1607576868/autovox/Vector_3_qwuwbw.svg" alt="arrow"> </div> </div> <div class="card personalized-card relative"> <div class="inside-autovox-card-head-text"> <span class="bold "> Output: </span> <br /> <span class=""> </span> More than 11 indian languages </div> <div class=""> <div class="card-video-number"> 00:00 </div> <div class="zero-row1"> </div> <div class="zero-row2 "></div> <div class="card-video-number">00:06</div> <div class="six-row1 "></div> <div class="six-row2 "></div> <div class="card-video-number">00:12</div> <div class="twelve-row1 "></div> <div class="twelve-row2 "></div> <div class="card-video-number">00:20</div> <div class="twenty-row1 "></div> <div class="twenty-row2 "></div> <div class="card-video-number" style="opacity: 0.5;">00:28</div> </div> <div class="absolute high-quility-speech-info-div"> <span class="bold"> Hindi, Kannada, Tamil,<br /> Telugu, Malayalam </span>and<br /> many more <img style="position: absolute; bottom: -20px;" src="https://res.cloudinary.com/dch9bhewr/image/upload/v1607576868/autovox/Vector_3_qwuwbw.svg" /> </div> </div> </div> </div>',
  '<div> <div class="relative scene-2-heading-div"> <div id="" class="scene-2-heading" style="min-height: 100px; margin-bottom: 80px;margin-left: auto;margin-right: auto;width: max-content;"> Video transcription for <br /> your favorite content </div> <div id="" class="absolute disable" style="top: 0px;"> </div> </div> <div class="video-transcription-for-your relative flex width-max-content" "> <div> <img src="https://res.cloudinary.com/dch9bhewr/image/upload/v1607576658/autovox/asset_lady_sfzvs4.svg" /> </div> <div class="" style="padding: 20px;"> <div> Transcription in more <br /> than <span class="bold"> 11 regional indian <br />languages</span> <img class="transcription-11-img" src="https://res.cloudinary.com/dch9bhewr/image/upload/v1607576868/autovox/Vector_1_lammtx.svg" /> </div> <div class=""> <div class="pic-2-card-video-number"> 00:00 </div> <div class="pic-2-zero-row1"> </div> <div class="pic-2-zero-row2 "></div> <div class="pic-2-card-video-number">00:06</div> <div class="pic-2-six-row1 "></div> <div class="pic-2-six-row2 "></div> <div class="pic-2-card-video-number">00:12</div> <div class="pic-2-twelve-row1 "></div> <div class="pic-2-twelve-row2 "></div> <div class="pic-2-card-video-number">00:18</div> <div class="pic-2-eighteen-row1 "></div> <div class="pic-2-eighteen-row2 "></div> </div> </div> </div> </div>',
  ' <div> <div class="relative scene-2-heading-div" style="margin-bottom: 80px;"> <div id="" class="scene-2-heading" style="min-height: 100px;margin-left: auto;margin-right: auto;width: max-content;"> Machine translation to <br class="break-at-laptop" /> indian regional languages </div> <div id="" class="absolute disable" style="top: 0px;"> </div> </div> <div class="hindi-text hindi-div-box width-max-content" "> <div style="padding: 40px;" class="relative"> Divine sound is the cause of all manifestation. The knower of the mystery of <br class="break-at-laptop" /> sound knows the mystery of the whole universe <div class="absolute divine-sound-info-div"> <span class="bold"> Hindi, Kannada, Tamil,<br /> Telugu, Malayalam </span>and<br /> many more <img class="" src="https://res.cloudinary.com/dch9bhewr/image/upload/v1607576868/autovox/Vector_3_qwuwbw.svg" /> </div> </div> <div class="border-line relative"> <img class="absolute " src="https://res.cloudinary.com/dch9bhewr/image/upload/v1607576654/autovox/ic_arrow_m4jp9j.svg" /> </div> <div style="padding: 40px;"> दिव्य ध्वनि सभी प्रकट होने का कारण है। ध्वनि के रहस्य का ज्ञाता पूरे <br class="break-at-laptop" />ब्रह्मांड के रहस्य को जानता है </div> <div> </div> </div> </div>',
];

let secondCarosoulHtmlMobile = [
  '<div style="min-height:800px"> <div class="relative scene-2-heading-div" style="margin-bottom: 30px;"> <div id="" class="scene-2-heading" style="min-height: 100px;"> High Quality Speech <br/>Processing </div> <div id="" class="absolute disable" style="top: 0px;"> </div> </div> <div class="relative scene-2-description" style="padding:20px"> <div class="card-deck relative" style="justify-content: flex-start;"> <div class="card personalized-card" style="height: fit-content;"> <div class="inside-autovox-card-head-text"> <span class="bold "> Source File: </span> <br/> <span class=""> </span> English </div> <div class=" relative graph-img" style="left: -10px;"> <img src="https://res.cloudinary.com/dch9bhewr/image/upload/v1607572781/autovox/Rectangle_33_qol6ta.svg" alt="wave"> </div> <div class="absolute high-quility-speech-info-div"> <img style="position: absolute; bottom: -20px;" src="https://res.cloudinary.com/dch9bhewr/image/upload/v1607577583/autovox/arrow-right_1_wecs8o_wsscbw.svg" /> </div> </div> </div> <div class="personalized-card relative"> <div class="inside-autovox-card-head-text" style="margin-top: 50px;"> <span class="bold "> Output: </span> <br /> <span class=""> </span> More than 11 indian languages </div> <div class=""> <div class="card-video-number"> 00:00 </div> <div class="zero-row1"> </div> <div class="zero-row2 "> </div> <div class="card-video-number">00:06 </div> <div class="six-row1 "> </div> <div class="six-row2 "> </div> <div class="card-video-number">00:12 </div> <div class="twelve-row1 "> </div> <div class="twelve-row2 "> </div> </div> </div> </div></div>',
  '<div style="padding: 0px 20px; min-height:800px"> <div class="relative scene-2-heading-div"> <div id="" class="scene-2-heading" style="min-height: 100px; margin-bottom: 80px;"> Video transcription for <br /> your favorite content </div> <div id="" class="absolute disable" style="top: 0px;"> </div> </div> <div class="video-transcription-for-your relative flex width-max-content" "> <div> <img src="https://res.cloudinary.com/dch9bhewr/image/upload/v1607576615/autovox/lady_img_qatben.svg" /> </div> </div> <div class="" style="margin-top: 40px;"> <div> Transcription in more <br /> than <span class="bold"> 11 regional indian <br />languages</span> </div> <div class=""> <div class="pic-2-card-video-number"> 00:00 </div> <div class="pic-2-zero-row1"> </div> <div class="pic-2-zero-row2 "></div> <div class="pic-2-card-video-number">00:06</div> <div class="pic-2-six-row1 "></div> <div class="pic-2-six-row2 "></div> <div class="pic-2-card-video-number">00:12</div> <div class="pic-2-twelve-row1 "></div> <div class="pic-2-twelve-row2 "></div> </div> </div> </div>',
  '<div style="padding: 0px 20px;min-height:800px"> <div class="relative scene-2-heading-div" style="margin-bottom: 30px;"> <div id="" class="scene-2-heading" style="min-height: 100px;"> Machine translation to <br class="break-at-laptop" /> indian regional languages </div> <div id="" class="absolute disable" style="top: 0px;"> </div> </div> <div class="hindi-text hindi-div-box width-max-content" "> <div style="padding: 40px 40px 100px 40px;" class="relative"> Divine sound is the cause of all manifestation. The knower of the mystery of <br class="break-at-laptop" /> sound knows the mystery of the whole universe </div> <div class="border-line relative"> <img class="absolute " src="https://res.cloudinary.com/dch9bhewr/image/upload/v1607576654/autovox/ic_arrow_m4jp9j.svg" /> </div> <div style="padding: 40px 40px 100px 40px;"> दिव्य ध्वनि सभी प्रकट होने का कारण है। ध्वनि के रहस्य का ज्ञाता पूरे <br class="break-at-laptop" />ब्रह्मांड के रहस्य को जानता है </div> <div> </div> </div> </div>',
];

let carasol2IdCount = 0,
  scene2toggleId = 0,
  radioButtonIdScene2 = 0;

let imagesceneDescriptionId = ["scene-2-heading", "scene-2-heading-absolute"];
let imagesceneDescriptionIdMobile = [
  "scene-2-heading-mobile",
  "scene-2-heading-absolute-mobile",
];

function setImage(clickShowId) {
  let elementToDisable = document.getElementById(
    imagesceneDescriptionId[scene2toggleId % imagesceneDescriptionId.length]
  );
  let mobileElementToDisable = document.getElementById(
    imagesceneDescriptionIdMobile[
      scene2toggleId % imagesceneDescriptionIdMobile.length
    ]
  );
  elementToDisable.classList.add("disable");
  mobileElementToDisable.classList.add("disable");
  let elementToEnable = document.getElementById(
    imagesceneDescriptionId[
      (scene2toggleId + 1) % imagesceneDescriptionId.length
    ]
  );
  let mobileElementToEnable = document.getElementById(
    imagesceneDescriptionIdMobile[
      (scene2toggleId + 1) % imagesceneDescriptionIdMobile.length
    ]
  );

  elementToEnable.classList.remove("disable");
  mobileElementToEnable.classList.remove("disable");

  setTimeout(() => {
    elementToEnable.innerHTML =
      secondCarosoulHtml[
        clickShowId !== undefined
          ? clickShowId
          : (carasol2IdCount + 1) % secondCarosoulHtml.length
      ];
    mobileElementToEnable.innerHTML =
      secondCarosoulHtmlMobile[
        clickShowId !== undefined
          ? clickShowId
          : (carasol2IdCount + 1) % secondCarosoulHtmlMobile.length
      ];

    // elementToEnable.setAttribute(
    //   "src",
    //   secondCarosoulHtml[
    //     clickShowId !== undefined
    //       ? clickShowId
    //       : (carasol2IdCount + 1) % secondCarosoulHtml.length
    //   ]
    // );
    elementToDisable.innerHTML = "";
    mobileElementToDisable.innerHTML = "";
    // elementToDisable.setAttribute("src", "");
    // = "";
    if (clickShowId !== undefined && clickShowId !== null) {
      carasol2IdCount = clickShowId;
    } else {
      carasol2IdCount++;
    }
    console.log("carasol2IdCount", carasol2IdCount);
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
  // carasol2IdCount = clickShowId;

  carasol2();
}

carasol2();

window.onload = function () {
  document.getElementById(
    "section-1"
  ).style.backgroundImage = `url("https://res.cloudinary.com/dch9bhewr/image/upload/v1607573188/autovox/gif_c8acv2.gif")`;
};
