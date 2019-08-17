writeText("WELCOME TO MY WEBSITE", "welcometext");

writeText("Hi, Im D3SOX", "hitext");
writeText("Im " + calculateAge() + " years old", "agetext");
writeText("I code with Java, PHP, JS, Python", "description");
writeText("You can contact me on Discord: nico.#9196", "description2");

function writeText(text, id) {
  let timer;

  let charArray = text.split("");

  if (charArray.length > 0) {
    document.getElementById(id).innerHTML += charArray.shift();
  } else {
    clearTimeout(timer);
    return false;
  }

  timer = setTimeout(
    "writeText('" + text.substring(1, text.length) + "','" + id + "')",
    100
  );
}

let rev = "fwd";
let changeTitle = false;
let msg = "D3SOX Site";
let timer;

function titlebar(val) {
  if (changeTitle) {
    changeTitle = false;
    return;
  }
  let res = " ";
  let speed = 100;
  let pos = val;
  let le = msg.length;
  if (rev == "fwd") {
    if (pos < le) {
      pos = pos + 1;
      scroll = msg.substr(0, pos);
      document.title = scroll;
      timer = window.setTimeout("titlebar(" + pos + ")", speed);
    } else {
      rev = "bwd";
      timer = window.setTimeout("titlebar(" + pos + ")", speed);
    }
  } else {
    if (pos > 0) {
      pos = pos - 1;
      let ale = le - pos;
      scroll = msg.substr(ale, le);
      document.title = scroll;
      timer = window.setTimeout("titlebar(" + pos + ")", speed);
    } else {
      rev = "fwd";
      timer = window.setTimeout("titlebar(" + pos + ")", speed);
    }
  }
}

titlebar(0);

function calculateAge() {
  let birthDate = new Date("November 26, 1998");
  let today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
