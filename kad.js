const card = document.getElementById('kad')

window.addEventListener('resize', () => {
  updatePosition();
})

function updatePosition() {
  let value = card.getBoundingClientRect();
  let {width, height, top} = value;
  document.documentElement.style.setProperty('--width', width+'px');
  document.documentElement.style.setProperty('--height', height+'px');
  document.documentElement.style.setProperty('--top', top+'px');
}
updatePosition();


let page = 1;
let fcover = document.getElementById('page1')
let linner = document.getElementById('page2')
let rinner = document.getElementById('page3')
let bcover = document.getElementById('page4')

fcover.style.display = 'block';
fcover.style.zIndex = 1;
linner.style.display = 'none';
linner.style.zIndex = 0;
rinner.style.display = 'block';
rinner.style.zIndex = 0;
bcover.style.display = 'none';
bcover.style.zIndex = 0;

let isAnimating = false;

function runDelay() {
  isAnimating = !isAnimating;
  setTimeout(() => {
    isAnimating = !isAnimating;
  }, 1500)
}

function nextPage() {
  if (!isAnimating) {
    if (page == 1) {
      runDelay()
      rinner.style.display = 'block';
      rinner.style.zIndex = 0;
      fcover.style.display = 'block';
      fcover.style.animationName = 'flipRtLfR';
      setTimeout(() => {
        linner.style.display = 'block';
        linner.style.zIndex = 0;
        fcover.style.display = 'none';
        linner.style.animationName = 'flipRtLfL';
        page++;
      }, 750)
    }
    if (page == 2) {
      runDelay();
      rinner.style.zIndex = 1;
      bcover.style.zIndex = 0;
      linner.style.zIndex = 0;
      rinner.style.animationName = 'flipRtLfR';
      setTimeout(() => {
        bcover.style.display = 'block';
        bcover.style.animationName = 'flipRtLfL';
        page++;
      }, 750)
    }
  }
}

function prevPage() {
  if (!isAnimating) {
    if (page == 2) {
      runDelay();
      fcover.style.display = 'none';
      linner.style.zIndex = 1;
      rinner.style.zIndex = 0;
      linner.style.animationName = 'flipLtRfL';
      setTimeout(() => {
        fcover.style.display = 'block';
        fcover.style.zIndex = 1;
        fcover.style.animationName = 'flipLtRfR';
        page--;
      }, 750)
    }
    if (page == 3) {
      runDelay();
      bcover.style.zIndex = 1;
      linner.style.zIndex = 0;
      rinner.style.display = 'none';
      bcover.style.animationName = 'flipLtRfL';
      setTimeout(() => {
        rinner.style.display = 'block';
        bcover.style.display = 'none';
        rinner.style.animationName = 'flipLtRfR';
        page--;
      }, 750)
    }
  }
}
