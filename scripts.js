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
  x.innerHTML = 'cindythitruong';
}
function hideemail(x){
  x.innerHTML =  `email`;
}
