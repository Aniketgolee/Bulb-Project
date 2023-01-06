//getElementbyID
// const heading = document.getElementById("heading");
// console.log(heading.textContent);

// const man = document.getElementsByTagName("h1");
// console.log(man[0]);
// const man = document.querySelector("#heading");
// console.log(man);

// const man = document.querySelector(".fo");
// console.log(man.childNodes);

// const check = document.querySelector("h3");
// console.log(check.previousElementSibling);
// const change = document.querySelector(".heading");
// heading.style.color = "red";

// const man = document.createElement("h2");
// man.innerHTML = "ohhhohhhhh";
// const parent = document.querySelector(".fo");
// parent.appendChild(man);
// parent.insertAdjacentElement("beforebegin", man);

const bulbSwitch = document.querySelector("#bulbSwitch");
const bulb = document.querySelector("#bulb");

bulbSwitch.addEventListener("click", function () {
  if (bulb.src.match("OFF")) {
    bulb.src = "./Bulb-ON.png";
    bulbSwitch.innerHTML = "Turn OFF";
  } else {
    bulb.src = "./Bulb-OFF.png";
    bulbSwitch.innerHTML = "Turn ON";
  }
});
