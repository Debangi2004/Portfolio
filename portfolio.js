const home = document.querySelector('.home');
const toggle = document.getElementById('toggle');
toggle.onclick = function(){
      toggle.classList.toggle('active');
      home.classList.toggle('active');
}

var typed = new Typed('#type',{
      strings : ['Web Designer','YouTuber','Blogger'],
      typeSpeed : 70,
      backSpeed : 70,
      backDelay : 1000,
      loop : true
});