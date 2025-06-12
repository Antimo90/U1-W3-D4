// Array per tenere traccia dei numeri già estratti
const extractedNumbers = [];

// Definiamo il numero totale di celle che vogliamo creare.
const numberOfCells = 76;

// Andiamo a creare le celle
const createCells = function () {
  // Otteniamo un riferimento all'elemento div con l'ID "tombolaBoard".
  const tombolaBoard = document.getElementById("tombolaBoard");
  // Iniziamo un ciclo `for` che itererà da 1 fino al numero totale di celle (76).
  for (let i = 1; i <= numberOfCells; i++) {
    // Crea un nuovo elemento HTML `div` in memoria.
    const cell = document.createElement("div");
    // Aggiungiamo la classe CSS "tombolaCell" all'elemento `div` appena creato.
    cell.classList.add("tombolaCell");
    // Imposta il testo interno (il contenuto) della cella con il numero corrente del ciclo (`i`).
    cell.textContent = i;
    // Aggiunge un attributo dati 'dataNumber' per memorizzare il numero della cella.
    cell.setAttribute("dataNumber", i);
    // Aggiunge un listener di eventi 'click' ad ogni cella.
    cell.addEventListener("click", () => {
      // Aggiungiamo la classe .
      cell.classList.toggle("drawn");
    });
    // Aggiunge la cella appena creata e configurata al contenitore
    tombolaBoard.appendChild(cell);
  }
};
createCells();

// Funzione per estrarre un numero casuale e marcarlo
const extractRandomNumber = () => {
  // Se tutti i numeri sono stati estratti, non fare nulla
  if (extractedNumbers.length === numberOfCells) {
    alert("Tutti i numeri sono stati estratti!!");
    return;
  }
  let randomNumber;
  do {
    // / Genera un numero casuale tra 1 e numberOfCells (76)
    randomNumber = Math.ceil(Math.random() * numberOfCells);
  } while (extractedNumbers.includes(randomNumber));
  // Continua a generare finché non trovi un numero non ancora estratto

  // Aggiungi il numero estratto all'elenco dei numeri già estratti
  extractedNumbers.push(randomNumber);

  // Trova l'elemento della cella HTML corrispondente al numero estratto.
  const cellToMark = document.querySelector(
    `.tombolaCell[dataNumber="${randomNumber}"]`
  );
  // Verifica se la cella è stata trovata E controlla che non abbia già la classe 'drawn'
  if (cellToMark && !cellToMark.classList.contains("drawn")) {
    // Aggiunge la classe CSS 'drawn' alla cella.
    cellToMark.classList.add("drawn");
  }
  // Visualizzazione del numero estratto
  const displayElement = document.getElementById("extractedNumberDisplay");
  // Si assicura che l'elemento esista prima di tentare di modificarlo.
  if (displayElement) {
    // Aggiorna il testo di questo elemento per mostrare chiaramente il numero appena estratto.
    displayElement.textContent = `Numero estratto: ${randomNumber}`;
  }
};

// // Attendiamo che il DOM sia completamente caricato prima di eseguire lo script.
// document.addEventListener("DOMContentLoaded", () => {
//   // 1. Chiama la funzione per creare il tabellone quando la pagina è pronta.
//   createCells();
//   // 2. Ottieni un riferimento al bottone di estrazione.
//   const extractButton = document.getElementById("extractButton");
//   // 3. Aggiungi un listener di eventi 'click' al bottone.
//   if (extractButton) {
//     extractButton.addEventListener("click", extractRandomNumber);
//   }
// });

// Crea la tabellina del giocatore
// const createPlayerBoard = () => {
//   const playerBoard = document.getElementById("playerBoard");
//   // Genera 24 numeri casuali unici per la tabellina del giocatore
//   const playerNumbers = [];
//   const randomNumber = Math.ceil(Math.random() * numberOfCells);
//   if (!playerNumbers.includes(randomNumber)) {
//     playerNumbers.push(randomNumber);
//   }
//   // Ordina i numeri per una migliore leggibilità sulla tabellina
//   playerNumbers.sort();
//   // Crea le celle della tabellina del giocatore
//   playerNumbers.forEach(number => {
//         const cell = document.createElement("div");
//         //  Usa la stessa classe di stile delle celle del tabellone
//         cell.classList.add("tombolaCell");
//         cell.textContent = number;
//         // per la marcatura!
//         cell.setAttribute("dataNumber", number);
//         playerBoard.appendChild(cell);
//         const playerBoardCellToMark = document.querySelector(`#player-board .tombola-cell[data-number="${randomNumber}"]`);
//     if (playerBoardCellToMark && !playerBoardCellToMark.classList.contains("drawn")) {
//         playerBoardCellToMark.classList.add("drawn");
//     }
// };
