var quadratoTag = document.getElementById('quadrato');

quadratoTag.offsetWidth;
setTimeout(function() {
  quadratoTag.innerHTML = '2';
}, 1500);

quadratoTag.style.cssText = "border-radius: 50%; border-color: black; background-color: #F46036; color: black;"