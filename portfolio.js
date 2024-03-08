const home = document.querySelector('.home');
const contact = document.querySelector('.contact');
const contactSection = document.querySelector('.contactSection');
const contactRight = document.querySelector('.contactRight');
const form = document.querySelector('form');
const toggle = document.getElementById('toggle');
toggle.onclick = function(){
      toggle.classList.toggle('active');
      home.classList.toggle('active');
      contact.classList.toggle('active');
      contactSection.classList.toggle('active');
      contactRight.classList.toggle('active');
      form.classList.toggle('active');
}

var typed = new Typed('#type',{
      strings : ['Web Designer','YouTuber','Blogger'],
      typeSpeed : 70,
      backSpeed : 70,
      backDelay : 1000,
      loop : true
});