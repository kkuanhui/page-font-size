const xSmall = 576;
const small = 768;
const medium = 992;
const large = 1200;
const xLarge = 1400;

function changeBgColor(target){
    document.querySelectorAll('.break-point').forEach(ele => {
      ele.style = 'breakground-color: transparent;' 
    });
    document.getElementById(target).style = 'background-color: blue; color: white;'
}

function clamp(low, mid, high){
  const w = window.innerWidth;
  const resize = mid*w
  if(resize < low){
    return low
  }else if(high < resize){
    return high
  }else{
    return resize
  }
}

function onWindowSizeChange() {
  const w = window.innerWidth;
  const r = window.devicePixelRatio;
  const c = `Page Width ${w}px, pixel ratio is ${r}`;
  document.getElementById("current-window-width-pxratio").innerHTML = c;
  document.getElementById("example-1").innerHTML = (w * 0.01).toFixed(2);
  document.getElementById("example-2").innerHTML = (w * 0.02).toFixed(2);
  document.getElementById("example-3").innerHTML = (w * 0.03).toFixed(2);

  if (w < xSmall) {
    changeBgColor('x-small')
  } else if (xSmall <= w && w < small) {
    changeBgColor('small')
  } else if (small <= w && w < medium) {
    changeBgColor('medium')
  } else if (medium <= w && w < large) {
    changeBgColor('large')
  } else if (large <= w && w < xLarge) {
    changeBgColor('x-large')
  } else if (xLarge < w) {
    changeBgColor('xx-large')
  }
}

onWindowSizeChange()
window.addEventListener("resize", onWindowSizeChange);
