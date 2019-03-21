function loadbar() {
  const prog = document.querySelector(".progress"),
  progThumb = document.querySelector(".progress-thumb");

  var img = document.images,
  c = 0;
  tot = img.length;

  function imgLoaded(){
    c += 1;
    var perc = ((100/tot*c) << 0) +"%";
    progThumb.style.width = perc;
    if(c === tot) return doneLoading();
  }

  function doneLoading(){
    prog.style.opacity = 0;
    setTimeout(function(){ 
      prog.style.display = "none";
    }, 1000);
  }

  for(let i = 0; i < tot; i++) {
    var tImg = new Image();
    tImg.onload = imgLoaded;
    tImg.onerror = imgLoaded;
    tImg.src = img[i].src;
  }
}
// loadbar();
document.addEventListener('DOMContentLoaded', loadbar, false);
