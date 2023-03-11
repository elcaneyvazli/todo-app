// console.log("Hello World");

// const arr = [
//   { id: "1", title: "item 1" },
//   { id: "2", title: "item 2" },
//   { id: "3", title: "item 3" },
// ];

// for (const arr1 of arr) {
//   let li = `
//   <li>
//   <div style="display: flex; align-items: center; padding-left: 10px">
//     <input type="checkbox" />
//     <p>${arr1.title}</p>
//     <p style="padding-left: 10px; cursor: pointer" onclick="deletebtn(${arr1.id})" class='delete'>delete</p>
//     <p style="padding-left: 10px; cursor: pointer">duzelt</p>
//   </div>
// </li>
//     `;
//   document.querySelector("ul").innerHTML += li;
// }

// function deletebtn (id) {
//   console.log(id)
//   let deleteItem = arr.findIndex(item => item.id == id);
//   arr.splice(deleteItem, 1);
// }

// let deletebtn = document.querySelectorAll(".delete");
// for (let i = 0; i < deletebtn.length; i++) {
//   deletebtn[i].addEventListener("click",() => {
//     deletebtn.remove();
//   });
// }

const input = document.querySelector("#name");
const button = document.querySelector("#button");
const ul = document.querySelector(".ul");

button.onclick = function (e) {
  let li = `
  <li>
  <div style="display: flex; align-items: center; padding-left: 10px">
    <input type="checkbox" id='check' value="yes"/>
    <p class = 'inp'>${input.value}</p>
    <p style="padding-left: 10px; cursor: pointer" class='delete'>delete</p>
    <p style="padding-left: 10px; cursor: pointer" class ='duzelt'>duzelt</p>
  </div>`;

  ul.innerHTML += li;
  input.value = "";
  e.preventDefault();

  let list = document.querySelectorAll("li");
  let sil = document.querySelectorAll(".delete");
  for (let i = 0; i < list.length; i++) {
    sil[i].addEventListener("click", () => {
      list[i].remove();
      console.log("silindi");
    });
  }

  let check = document.querySelectorAll("#check");
  for (let i = 0; i < list.length; i++) {
    check[i].addEventListener("click", () => {
      let cb = check[i].checked;
      if (cb == true) {
        list[i].style.textDecoration = "line-through";
        cb = false;
      } else if (cb == false) {
        list[i].style.textDecoration = "none";
        cb = true;
      }
      
    });
  }
  //@ts-check
  let duzelt = document.querySelectorAll(".duzelt");
  let inp = document.querySelectorAll(".inp");
  for (let i = 0; i < list.length; i++){
    duzelt[i].addEventListener("click", () => {
      let text = inp[i].textContent;
      input.value = text;
      list[i].remove();
    })
  }
};
