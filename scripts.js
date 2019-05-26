// Open & Close Nav to over the screen
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

//update year for copyright in footer
crYear = new Date().getFullYear();
document.getElementById('copyright-year').innerHTML = `${crYear}`;

//shows email address when hovering 'email me'
function showemail(x) {
  x.innerHTML = 'cindythitruong';
}
function hideemail(x){
  x.innerHTML =  `email`;
}
