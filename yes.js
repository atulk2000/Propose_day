const febHolidays = [
    "Hey Suno",
    "Suno na",
    "Kuch Kehna tha tumse",
    "Tum Sunna Chahogi Kya",
    "Aur koi choice bhi nhi h tumhare paas",
    "Sunna hi padega 😂",
    "Zindagi ek chota sa safar h",
    "Tum saath Ghumna chahogi kya...",
    "Aur Jab Kabhi Mujhe Neend Na aaye",
    "Tum mujhe apne god me sulaogi kya...",
    "Waise to....",
    "Waise to maine gawaya h apni pyaari Cheezo ko..",
    "Par",
    "Kya tum fir bhi wo Pyaari cheez Banna Chahogi Kya....❤️",
    "Yes aur No ka Game mat khelna abhi khel chuke h bahar wahi 😂",
    "BAAKI",
    "Happy Propose Day❤️"

  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
        }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  