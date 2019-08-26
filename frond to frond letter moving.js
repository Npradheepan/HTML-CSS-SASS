<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
    <title>frond to frond letter moving.js</title>
</head>
<style>
    body{
        background-color: forestgreen;
    }
.sec {
  font-weight: 900;
  font-size: 4em;
  text-align: center;
}

.sec .letter {
  display: inline-block;
  line-height: 1em;
  color: rgb(242, 66, 212);
}
</style>
<body>
    <h1 class="sec">Sommer is cool</h1>      
</body>
<script>
    var textWrapper = document.querySelector('.sec');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.sec .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.sec',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
</script>
</html>
