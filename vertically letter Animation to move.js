<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
    <title>Animation with javascript</title>
</head>
<style>
body{
    background-color: rgb(212, 228, 223);
    text-align: center;
    }
.sec {
  font-weight: 700;
  font-size: 3.5em;
}

.sec .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.1em;
  padding-right: 0.05em;
  padding-bottom: 0.15em;
}

.sec .line {
  opacity: 0;
  position: absolute;
  left: 0;
  height: 100%;
  width: 3px;
  background-color: rgb(145, 130, 130);
  transform-origin: 0 50%;
}

.sec .line1 { 
  top: 0; 
  left: 0;
}

.sec .letters {
  display: inline-block;
  line-height: 1em;
  color: tomato;
  
}
</style>
<body>
    <h1 class="sec">
        <span class="text-wrapper">
            <span class="line line1"></span>
            <span class="letters">Hello Are you happy</span>
        </span>
    </h1>
</body>
<script>
    var textWrapper = document.querySelector('.sec .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.sec .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.sec .line',
    translateX: [0, document.querySelector('.sec .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.sec .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.sec',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
</script>
</html>
