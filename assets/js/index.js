// 	&nbsp;   - знак пробела
alert('Малюєм прямокутник')
document.write('<h2>Прямокутник</h2>');
const w = parseInt(prompt('Задайте кіл-сть элементів для довжини:'));
const h = parseInt(prompt('Задайте кіл-сть элементів для висоти:'));
for(let i = 0; i <= h; i++) {
   for(let j = 0; j < w; j++) {
    if(i === 0 || i === h){document.write('* &nbsp;');}
     else {
     if (j === 0 || j === w-1) {document.write('* &nbsp;');}
     else {document.write('&nbsp;&nbsp;&nbsp;&nbsp;')}
    }
   }
document.write('<br>');
}


document.write('<hr>');
alert('Тепер малюємо прямокутний трикутник')
document.write('<h2>Прямокутний трикутник</h2>');
const num = parseInt(prompt('Задайте кіл-сть элементів для прямокутного трикутника:'));
for(let i = 0; i < num; i++) {
  for(let j = num - i ; j <= num; j++) {
    document.write('* &nbsp;');
  }
document.write('<br>');
}


document.write('<hr>');
alert('Тепер малюємо рівносторонній трикутник');
document.write('<h2>Рівносторонній трикутник</h2>');
const num1 = parseInt(prompt('Задайте кіл-сть элементів для рівностороннього трикутника:'));
for(let i = 0; i < num1; i++) {
  for(let j = 0 ; j < num1 - i - 1; j++) {
    document.write('&nbsp;&nbsp;');
  }
  for(let o = 0; o <= i; o++) {
  document.write('* &nbsp;&nbsp;');
  }
document.write('<br>');
}


document.write('<hr>');
alert('Тепер малюємо ромб');
document.write('<h2>Ромб</h2>');
const num2 = parseInt(prompt('Задайте кіл-сть элементів для ромба:'));
for(let i = 0; i < num2; i++) {
  for(let j = 0 ; j < num2 - i - 1; j++) {
    document.write('&nbsp;&nbsp;');
  }
  for(let o = 0; o <= i; o++) {
  document.write('* &nbsp;&nbsp;');
  }
document.write('<br>');
}
for(let i = 1; i < num2; i++) {
  for(let x = 0; x < i; x++) {
    document.write('&nbsp;&nbsp;');
  }
  for(let y = 0; y < num2 - i; y++){
    document.write('* &nbsp;&nbsp;');
  }
  document.write('<br>');
}