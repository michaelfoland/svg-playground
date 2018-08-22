let controlPanel = document.getElementById('control-panel');

attachListeners();

function attachListeners() {
  controlPanel.addEventListener('click', handleControlPanelClick, false);
}

function handleControlPanelClick(e) {
  if (e.target.matches('.simple-object__title')) {
    
    // If parent is active, hide it
    if (e.target.parentElement.matches('.simple-object--active')) {
      console.log('in 2nd if block');
      e.target.parentElement.classList.remove('simple-object--active');
    } else {
      console.log('in else block');
      // hide any other active simple-object
      let activeEl = controlPanel.querySelector('.simple-object--active');
      
      if (activeEl) activeEl.classList.remove('simple-object--active');
      
      // show this one
      e.target.parentElement.classList.add('simple-object--active');
    }
  }
}