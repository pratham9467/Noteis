const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const userNotes = document.querySelector(".userNotes");
let notes = document.querySelectorAll(".input-box");
let main = document.querySelector("main");

function loadNotes() {
  userNotes.innerHTML = localStorage.getItem("notes");
}

loadNotes();

function updateStorage() {
  localStorage.setItem("notes", userNotes.innerHTML);
}

btn.addEventListener("click", () => {
  let inputbox = document.createElement("p");
  let img = document.createElement("img");
  inputbox.className = "input-box";
  inputbox.setAttribute("contenteditable", "true");
  img.className = "img";
  img.src = "./assets/3334328.png";
  userNotes.appendChild(inputbox).appendChild(img);
});

userNotes.addEventListener("click", (e) => {
  if (e.target.className === "img") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.className === "input-box") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
