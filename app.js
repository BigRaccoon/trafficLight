const a = document.querySelector('.top') // upper signal
const b = document.querySelector('.middle') // middle signal
const c = document.querySelector('.bottom') // lower signal 

const blockTF = document.querySelector('.trafficLight') // body of traffic Light

const Colortmp = {
   RED: 0,
   YELLOW: 1,
   GREEN: 2
}

const Color = {
   RED: 'red',
   YELLOW: 'yellow',
   GREEN: 'green'
}

const colors = Object.values(Color);

console.log(randomColor(colors))

document.querySelector('.btn').onclick = () => {
   blockTF.style.pointerEvents = 'auto'

   document.querySelector('.btn').style.display = 'none'
   setTimeout(() => {
      initializeColors()
   }, 100)
   
}

a.onclick = () => {
   if (a.style.background === Color.GREEN) {
      a.style.background = Color.RED
   } else {
      const colorIndex = colors.indexOf(a.style.background)
      a.style.background = colors[colorIndex + 1]
   }
   if (b.style.background === Color.GREEN) {
      b.style.background = Color.RED
   } else {
      const colorIndex = colors.indexOf(b.style.background)
      b.style.background = colors[colorIndex + 1]
   }
   console.log(a.style.background, b.style.background, c.style.background)
   if (checkValidColorSequence([a.style.background, b.style.background, c.style.background])) {
      win()
      reload()
   }
}

b.onclick = () => {
   if (b.style.background === Color.GREEN) {
      b.style.background = Color.RED
   } else {
      const colorIndex = colors.indexOf(b.style.background)
      b.style.background = colors[colorIndex + 1]
   }
   if (c.style.background === Color.RED) {
      c.style.background = Color.GREEN
   } else {
      const colorIndex = colors.indexOf(c.style.background)
      c.style.background = colors[colorIndex - 1]
   }
   console.log(a.style.background, b.style.background, c.style.background)
   if (checkValidColorSequence([a.style.background, b.style.background, c.style.background])) {
      win()
      reload() 
   }
}

c.onclick = () => {
   if (c.style.background === Color.GREEN) {
      c.style.background = Color.RED
   } else {
      const colorIndex = colors.indexOf(c.style.background)
      c.style.background = colors[colorIndex + 1]
   }
   if (a.style.background === Color.RED) {
      a.style.background = Color.GREEN
   } else {
      const colorIndex = colors.indexOf(a.style.background)
      a.style.background = colors[colorIndex - 1]
   }
   console.log(a.style.background, b.style.background, c.style.background)
   if (checkValidColorSequence([a.style.background, b.style.background, c.style.background])) {
      win()
      reload()
   }

}

console.log(a.style.background, b.style.background, c.style.background)

function checkValidColorSequence(lightCircles) {
   if (lightCircles.length !== 3) {
      return false
   }
   console.log(lightCircles[0] == 'red' && lightCircles[1] == 'yellow' && lightCircles[2] == 'green');
   console.log(lightCircles);
   return lightCircles[0] == 'red' && lightCircles[1] == 'yellow' && lightCircles[2] == 'green';
}

function randomColor(arr) {
   let rand = Math.floor(Math.random() * arr.length);
   return arr[rand];
}

function initializeColors() {
   while (a.style.background === b.style.background || 
      a.style.background === c.style.background || 
      c.style.background === b.style.background || 
      (a.style.background === 'red' && b.style.background === 'yellow' && c.style.background == 'green')) {
      a.style.background = randomColor(colors)
      b.style.background = randomColor(colors)
      c.style.background = randomColor(colors)
      console.log(a.style.background)
   }
}


function reload() {
   setTimeout(() => {
      window.location.reload()
   }, 1000)
}

function win() {
   setTimeout(() => {
      alert("YOU WIN!!!")
   }, 100)
}