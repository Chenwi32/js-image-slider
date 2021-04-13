const nextBtn = document.querySelector('.next')
const prevBtn = document.querySelector('.previous')
const imageDisplay = document.querySelector('.images')

nextBtn.addEventListener('click', nextImage)
prevBtn.addEventListener('click', previousImage)

let count = 0;
function nextImage(){
    if(count === 8){
     count = -1;
    }
    
    count++
    imageDisplay.style.background = `url(./images/image-${count}.jpg)center/cover`
    imageDisplay.animate([{opacity: 0.2}, {opacity: 1.0}], {duration: 800, fill: 'forwards'})
}


function previousImage(){
    if(count === 0){
     count = 8;
    }
    
    count--
    imageDisplay.style.background = `url(./images/image-${count}.jpg)center/cover`
    imageDisplay.animate([{opacity: 0.2}, {opacity: 1.0}], {duration: 800, fill: 'forwards'})

}





















