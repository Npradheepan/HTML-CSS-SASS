<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
    <title>Come from down letters.js</title>
</head>
<style>
body{
    background-color: rgb(215, 222, 228);
    padding: 0;
    margin: 0;
}
.sec {
  position: relative;
  font-weight: 900;
  font-size: 3.7em;
  text-align: center;
}
.sec .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.2em;
  padding-right: 0.05em;
  padding-bottom: 0.1em;
  overflow: hidden;
}
.sec .letter {
  transform-origin: 0 100%;
  display: inline-block;
  line-height: 1em;
  color: rgb(177, 10, 10);
}
</style>
<body>
    <h1 class="sec">
        <span class="text-wrapper">
            <span class="letters">I am coming Quickly Over There!</span>
        </span>
    </h1>            
</body>
<script>
    var textWrapper = document.querySelector('.sec .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.sec .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  }).add({
    targets: '.sec',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
</script>
</html>
