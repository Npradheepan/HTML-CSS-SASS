<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
    <title>Letter Animation Netfishing.js </title>
</head>
<style>
body{
    background-color: rgb(89, 238, 219);
}
.sec {
  position: relative;
  font-weight: 200;
  font-size: 4em;
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
  transform-origin: 50% 100%;
  display: inline-block;
  line-height: 1em;
  color: darkorchid;
}
</style>
<body>
    <h1 class="sec">
        <span class="text-wrapper">
            <span class="letters">Good Morning My Love</span>
        </span>
    </h1>
</body>
<script>
var textWrapper = document.querySelector('.sec .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.sec .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.sec',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
</script>
</html>
