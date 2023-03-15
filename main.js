/*Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
Consigli:
Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while*/


let listaSpesa = ["latte","uova","pane","mele","carote"];

let i = 0

const listaDom = document.getElementById("lista");

while (i < listaSpesa.length) {
   listaDom.innerHTML += `<li>${listaSpesa[i]}</li>`
   i++;    
}

const aggiungiDom = document.querySelector('#aggiungi');

aggiungiDom.addEventListener('click',
   function () {
      const elementoInputDom = document.getElementById('elementoInput').value;
      listaSpesa.push (elementoInputDom);
      listaDom.innerHTML += `<li>${elementoInputDom}</li>`
   }
)
