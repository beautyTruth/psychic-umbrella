// const keyContainers = document.querySelectorAll(".keys");
// let textArea = document.querySelector(".display textarea");
// // console.log(keyContainers);
// // console.log(keyContainers[0]);
// // console.log(keyContainers[0].children);

// keyContainers.forEach(function (key) {
//   key.addEventListener("click", function (e) {
//     // console.log(e);
//     // console.log(e.path);
//     // console.log(e.path[0]);
//     // console.log(e.path[0].value);
//     // console.log(e.path[0].value.toLowerCase());

//     if (!e.path[0].value) return;

//     let keyClicked = e.path[0].value.toLowerCase();
//     textArea.value += keyClicked;
//   });
// });

// I'm not angry that you lied; I'm angry that I can never trust you again

/*
my code
*/

const keyContainers = document.querySelectorAll(".keys");
let textArea = document.querySelector(".display textarea");
// console.log(keyContainers);
// console.log(keyContainers[0]);
// console.log(keyContainers[0].children);

keyContainers.forEach((key) => {
  key.addEventListener("click", (e) => {
    if (!e.path[0].value) return;
    // console.log(e);
    // console.log(e.path);
    // console.log(e.path[0]);
    // console.log(e.path[0].value);
  });
});
