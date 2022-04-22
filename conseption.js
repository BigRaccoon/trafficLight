// переменные для сфетофора
let a 
let b
let c

let colors = ['red','yellow','green']

// возвращает случайный элемент из массива
let randomColor = (arr) => {
  let rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}
console.log(randomColor(colors))

// задаем начальные значения
while (a === b || a === c || c === b || (a === 'red' && b === 'yellow' && c =='green')) {
  a = randomColor(colors)
  b = randomColor(colors)
  c = randomColor(colors)
  console.log(a,b,c)
}
// думаем как сделать переключение цветов в определенном порядке
let go = prompt('Go go go?')

// выдаст индекс цвета 0 - красный 1 - желтый 2 - зеленый
console.log(colors.indexOf(a))

// изменяет цвет на +1 у верхнего круга
if (go === 'top') {
  if (colors.indexOf(a) === 2) {
    a = colors[colors.indexOf(a)-2]
  } else {
    a = colors[colors.indexOf(a)+1]
  }
  if (colors.indexOf(b) === 2){
  b = colors[colors.indexOf(b)-2]
  } else {
    b = colors[colors.indexOf(b)+2]
  }
}

if (go === 'middle') {
  if (colors.indexOf(b) === 2) {
    b = colors[colors.indexOf(b)-2]
  } else {
    b = colors[colors.indexOf(b)+1]
  }
  if (colors.indexOf(c) === 0){
    c = colors[colors.indexOf(c)+2]
  } else {
    c = colors[colors.indexOf(c)-1]
  }
}

if (go === 'bottom') {
  if (colors.indexOf(c) === 2) {
    c = colors[colors.indexOf(c)-2]
  } else {
    c = colors[colors.indexOf(c)+1]
  }
}
console.log(a,b,c)

if (a === 'red' && b === 'yellow' && c === 'green') {
  alert('YOU WIN!!!')
}
