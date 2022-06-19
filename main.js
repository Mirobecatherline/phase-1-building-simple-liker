// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likerimg= document.querySelectorAll('.like-glyph');
likerimg.forEach(box=>{
  box.addEventListener('click',e=>
  {
    const emoj=e.target;
    mimicServerCall()
    .then(function () {
      const list=emoj.classList;
      if (emoj.innerText===EMPTY_HEART ) {
        emoj.innerText=FULL_HEART;
        list.add("activated-heart");
      } else {
        emoj.innerText=EMPTY_HEART;
        list.remove('activated-heart');
      }
    })
    .catch(function (error) {
      const mod=document.getElementById('modal')
      mod.className="";
      mod.innerText=error;
      setTimeout(()=>mod.className="hidden",3000);
    });
  })
})
//function happening(){
  //likerimg.addEventListener('click',e=>{
    //mimicServerCall()
    //.then(data=>{

   // })
  //})
//}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
