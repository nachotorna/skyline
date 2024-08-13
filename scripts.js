
  
  function toggleNightMode() {
    document.body.classList.add('night-mode');
    document.getElementById('moon-button').style.display = 'none';
    document.getElementById('sun-button').style.display = 'inline-block';
  }

  function toggleDayMode() {
    document.body.classList.remove('night-mode');
    document.getElementById('moon-button').style.display = 'inline-block';
    document.getElementById('sun-button').style.display = 'none';
  }

function setBodyHeight() {
  document.body.style.height = window.innerHeight + 'px';
}

window.addEventListener('resize', setBodyHeight);
window.addEventListener('load', setBodyHeight);
 
