
const container = document.getElementById('container')
const sun = document.getElementById('sun')

const newYear = '29 Oct 2020';


function countdown() {
    const newYearsDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days =  Math.floor(totalSeconds / 3600 / 24); 
    const hours = Math.floor(totalSeconds / 3600 % 24);
    const mins =  Math.floor(totalSeconds / 60) % 24; 
    const secs =  Math.floor(totalSeconds) % 60;

    // daysEl.innerHTML = formatTime(days);
    // hoursEl.innerHTML = formatTime(hours);
    // minsEl.innerHTML = formatTime(mins);
    // secsEl.innerHTML = formatTime(secs);

    const daysPercentage = ((secs / 60) * 100) 


    console.log(Math.floor(-daysPercentage))

    sun.style.left = `${-daysPercentage * 10}px` 
}



countdown();
setInterval(countdown, 1000);

container.addEventListener('mousemove', (e) => {

     // It's better to use window than body
  const windowHeight = window.innerHeight
  const windowWidth = window.innerWidth
  
  // Transform DOM width into percentage (1 - 100)
  const heightPercent = Math.floor((e.pageY / windowHeight) * 101)
  const widthPercent = Math.floor((e.pageX / windowWidth) * 101)


// console.log(`X: ${e.screenX} Y: ${e.screenY}` );


// const toPercentageX =  ((e.screenX * 100) )
// console.log(`Percentage X: ${toPercentageX}`);

console.log('Ypercent: ', heightPercent);
console.log('Xpercent: ', widthPercent);
})

