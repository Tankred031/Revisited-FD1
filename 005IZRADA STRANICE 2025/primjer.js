const menu = document.getElementById('mymenu');
const player = document.getElementById('player');

menu.addEventListener('change', function() {
  const selectedSong = this.value;
  player.src = selectedSong;
  player.play();
});
