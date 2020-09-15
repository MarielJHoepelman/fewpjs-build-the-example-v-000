// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likedButtons = document.getElementsByClassName("like")

function switchGlyph() {
  let glyph = likedButton.querySelector(".like-glyph");

  if (glyph.innerHTML == EMPTY_HEART){
    glyph.innerHTML = FULL_HEART
    glyph.classList.add("activated-heart")
  } else {
    glyph.innerHTML = EMPTY_HEART
    glyph.classList.remove("activated-heart")
  }
}

for (const likedButton of likedButtons) {
  likedButton.addEventListener('click', event =>  {
    mimicServerCall()
    .then(function(object) {
      let glyph = likedButton.querySelector(".like-glyph");
      //
      // if (glyph.innerHTML == EMPTY_HEART){
      //   glyph.innerHTML = FULL_HEART
      //   glyph.classList.add("activated-heart")
      // } else {
      //   glyph.innerHTML = EMPTY_HEART
      //   glyph.classList.remove("activated-heart")
      // }
      switchGlyph(glyph)
    })
    .catch(function(error) {

      let hideError = function() {
        document.getElementById("modal").classList.add("hidden")
      }

      let div = document.getElementById("modal")
      div.classList.remove("hidden")
      document.getElementById("modal-message").innerHTML = error
      setTimeout(hideError, 5000);
    });
  })
}



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
