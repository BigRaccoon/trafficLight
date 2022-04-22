let aTop = document.querySelector('.top')
let bMiddle = document.querySelector('.middle')
let cBottom = document.querySelector('.bottom')

let colors = ['red','yellow','green']

// возвращает случайный элемент из массива
let randomColor = (arr) => {
  let rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}
console.log(randomColor(colors))

// задаем начальные значения
while ( aTop.style.background===  bMiddle.style.background||  aTop.style.background===  cBottom.style.background||  cBottom.style.background===  bMiddle.style.background|| ( aTop.style.background=== 'red' &&  bMiddle.style.background=== 'yellow' &&  cBottom.style.background=='green')) {
   aTop.style.background= randomColor(colors)
   bMiddle.style.background= randomColor(colors)
   cBottom.style.background= randomColor(colors)
  console.log(aTop.style.background)
}

// выдаст индекс цвета 0 - красный 1 - желтый 2 - зеленый
console.log(colors.indexOf(aTop.style.background))

// кликаем, чтобы менялись цвета
aTop.onclick = () => {
  if (colors.indexOf(aTop.style.background) === 2) {
    aTop.style.background= colors[colors.indexOf(aTop.style.background)-2]
 } else {
    aTop.style.background= colors[colors.indexOf(aTop.style.background)+1]
 }
 if (colors.indexOf(bMiddle.style.background) === 2){
  bMiddle.style.background= colors[colors.indexOf(bMiddle.style.background)-2]
 } else {
    bMiddle.style.background= colors[colors.indexOf(bMiddle.style.background)+2]
 }
 console.log(aTop.style.background,bMiddle.style.background,cBottom.style.background)

}

bMiddle.onclick = () => {
  if (colors.indexOf(bMiddle.style.background) === 2) {
    bMiddle.style.background= colors[colors.indexOf(bMiddle.style.background)-2]
 } else {
    bMiddle.style.background= colors[colors.indexOf(bMiddle.style.background)+1]
 }
 if (colors.indexOf(cBottom.style.background) === 0){
    cBottom.style.background= colors[colors.indexOf(cBottom.style.background)+2]
 } else {
    cBottom.style.background= colors[colors.indexOf(cBottom.style.background)-1]
 }
 console.log(aTop.style.background,bMiddle.style.background,cBottom.style.background)

}

cBottom.onclick = () => {
  if (colors.indexOf(cBottom.style.background) === 2) {
    cBottom.style.background= colors[colors.indexOf(cBottom.style.background)-2]
 } else {
    cBottom.style.background= colors[colors.indexOf(cBottom.style.background)+1]
 }
 console.log(aTop.style.background,bMiddle.style.background,cBottom.style.background)

}

console.log(aTop.style.background,bMiddle.style.background,cBottom.style.background)


