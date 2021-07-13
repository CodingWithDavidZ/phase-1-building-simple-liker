// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  //might need document.querySelectorAll
  const li = document.querySelectorAll(".like-glyph");
  for (const element of li) {
    element.addEventListener("click", (liked) => {
      mimicServerCall()
        .then(() => {
          if (liked.target.innerText === EMPTY_HEART) {
            liked.target.innerText = FULL_HEART;
            liked.target.className = "activated-heart";
          } else {
            liked.target.innerText = EMPTY_HEART;
            liked.target.className = "like-glyph";
          }
        })
        .catch((error) => {
          const removeModal = document.getElementById("modal");
          removeModal.className = "";
          removeModal.innerText = error;
          setTimeout(() => (removeModal.className = "hidden"), 3000);
        });
    });
  }
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
