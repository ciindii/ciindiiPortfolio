// Open & Close Nav to over the screen
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

//if user click anything other than .menu-links, overlay menu will close
document.getElementById("myNav").addEventListener("click", function(event){
  if (event.target.closest(".menu-links")) return;
  document.getElementById("myNav").style.width = "0%";
});


//update year for copyright in footer
crYear = new Date().getFullYear();
document.getElementById('copyright-year').innerHTML = `${crYear}`;

//shows email address when hovering 'email me'
function showemail(x) {
  x.innerHTML = 'cindythitruong@gmail.com';
  x.style.transition = "2s";
}
function hideemail(x){
  x.innerHTML =   `<i class="email-me fas fa-paper-plane"></i> email me`;
}
  document.querySelector('#contact a').style.transition = "2s";


//ES6 class
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    //current index of words
    const current = this.wordIndex % this.words.length;
    //get full text of current words
    const fullTxt = this.words[current];
    //check if isDeleting
    if(this.isDeleting) {
      //remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      //add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    //insert txt into Element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
    //Intial type speed
    let typeSpeed = 300;
    if(this.isDeleting) {
      typeSpeed /=  2;
    }

    //if word is complete
    if(!this.isDeleting && this.txt === fullTxt){
      //pause at end
      typeSpeed = this.wait;
      //set delete to true
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === ''){
      this.isDeleting = false;
      //move onto next words
      this.wordIndex++;
      //pause before start typeing
      typeSpeed = 500;
    }
    setTimeout(() => this.type(), typeSpeed);
  }
}

// init on DOM download
document.addEventListener('DOMContentLoaded', init);
// init app
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // init TypeWriter
  new TypeWriter(txtElement, words, wait);
}
