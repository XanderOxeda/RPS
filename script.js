let resultados = [];

function play(playerChoice) {
  // Generamos una opción aleatoria para la computadora
  const computerChoices = ['piedra', 'papel', 'tijera'];
  const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  // Comparamos las opciones y determinamos el ganador
  let resultado;
  if (playerChoice === computerChoice) {
    resultado = 'Empate';
  } else if (playerChoice === 'piedra' && computerChoice === 'tijera' || 
             playerChoice === 'papel' && computerChoice === 'piedra' ||
             playerChoice === 'tijera' && computerChoice === 'papel') {
    resultado = 'Ganaste';
  } else {
    resultado = 'Perdiste';
  }

  // Guardamos el resultado en la lista de resultados
  resultados.unshift(`Tu elección: ${playerChoice} - Elección de la computadora: ${computerChoice} - ${resultado}`);
  if (resultados.length > 5) {
    resultados.pop();
  }

  document.getElementById('res-jugador').innerHTML = playerChoice.join('<br>');

  document.getElementById('res-pc').innerHTML = computerChoice.join('<br>');

  document.getElementById('res-juego').innerHTML = playerChoice.join('<br>');
}
