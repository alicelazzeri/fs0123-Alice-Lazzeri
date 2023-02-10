function aggiungiSimbolo(elemento) {     
  let simbolo = elemento.getAttribute("data-simbolo");
  let display = document.querySelector ('#display');
  display.value += simbolo;
}

function total() {
  let display = document.querySelector ('#display');
  display.value = eval(display.value);
}

function cancelAll() {
  let display = document.querySelector ('#display');
  display.value = '';
}

function del() {
  let display = document.querySelector ('#display');
  let displayNumber = display.value;
  if(displayNumber.length > 0) {
    display.value = displayNumber.substring(0, displayNumber.length - 1);
  }
}

function trickyNumber() {
  let display = document.querySelector ('#display');
  let funnyNumber = display.value;
  if (funnyNumber === '376006') {
    window.open('https://www.google.it/', 'popUpWindow', 'width=500px, height=300px')
  }   
}

function trickyNumber1() {
  let display = document.querySelector ('#display');
  let funnyNumber = display.value;
  if (funnyNumber === '07738135') {
    window.alert('Ancora ai giochi delle medie stiamo?')
  }   
}

function trickyNumber2() {
  let display = document.querySelector ('#display');
  let funnyNumber = display.value;
  if (funnyNumber === '0771705') {
    window.open('assets/images/lillo.gif', 'popUpWindow', 'width=500px, height=300px')
  }   
}

function trickyNumber3() {
  let display = document.querySelector ('#display');
  let funnyNumber = display.value;
  if (funnyNumber === '2020') {
    window.open ('assets/video/coviddi.mp4', 'popUpWindow', 'width=600px, height=300px')
  }   
}