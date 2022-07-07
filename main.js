function initializer(){
  let fan = document.getElementById("fanContainer");
  let circle =396, toDegree = 36;
  for (i=1; i<=10; i++){
    let imgfile = document.createElement("img");
    imgfile.src = "./img/rectangle3.svg"
    imgfile.style= "animation: animate"+i+" 30s linear infinite;"
    circle += -36;
    toDegree += - 36;
    const keyFrames = document.createElement("style");
    keyFrames.innerHTML = `
      @keyframes animate`+i+ ` { 0%{
                                  transform:rotateZ(`+circle+`deg);
                                  transform-origin: right bottom;
                                } 100%{
                                  transform: rotateZ( `+toDegree+`deg);
                                  transform-origin:right bottom;
                                }  }`;
    imgfile.appendChild(keyFrames);
    fan.appendChild(imgfile);
  }
}
