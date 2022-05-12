//necessário criar o loop dos áudios
//criar os imports, pois o sistema está pronto para melhores práticas

const audioFlorest = new Audio("../audio/Floresta.wav");
const audioRain = new Audio("../audio/Chuva.wav");
const audioCoffeeShop = new Audio("../audio/Cafeteria.wav");
const audioFire = new Audio("../audio/Lareira.wav");

function pressButtonFlorestPlay(){
    audioFlorest.play()
}

function pressButtonFlorestPause(){
    audioFlorest.pause()
}

function pressButtonRainPlay(){
    audioRain.play()
}

function pressButtonRainPause(){
    audioRain.pause()
}

function pressButtonCoffeeShopPlay(){
    audioCoffeeShop.play()
}

function pressButtonCoffeeShopPause(){
    audioCoffeeShop.pause()
}

function pressButtonFirePlay(){
    audioFire.play()
}

function pressButtonFirePause(){
    audioFire.pause()
}

const playDisplay = document.querySelector('#button-play');
const pauseDisplay = document.querySelector('#button-pause');
const resetDisplay = document.querySelector('#button-reset');

const addDisplay = document.querySelector('#button-add');
const subDisplay = document.querySelector('#button-sub');

const secondDisplay = document.querySelector('.seconds');
const minuteDisplay = document.querySelector('.minutes');
const fiveMinutes = 5;

let timerTimeOut;
let minutes = Number(minuteDisplay.textContent)

const florestDisplay = document.querySelector('#florest');
const rainDisplay = document.querySelector('#rain');
const coffeeShopDisplay = document.querySelector('#coffee-shop');
const fireDisplay = document.querySelector('#fire');
let soundOn = false

function florest(){
    if(soundOn == false){
        soundOn = true
        florestDisplay.classList.add('button-pressed')
        pressButtonFlorestPlay()
    } else{
        soundOn = false
        florestDisplay.classList.remove('button-pressed')
        pressButtonFlorestPause()
    }
}

florestDisplay.addEventListener('click', function(){
    florest()
})

function rain(){
    if(soundOn == false){
        soundOn = true
        rainDisplay.classList.add('button-pressed')
        pressButtonRainPlay()
    } else{
        soundOn = false
        rainDisplay.classList.remove('button-pressed')
        pressButtonRainPause()
    }
}

rainDisplay.addEventListener('click', function(){
    rain()
})

function coffeShop(){
    if(soundOn == false){
        soundOn = true
        coffeeShopDisplay.classList.add('button-pressed')
        pressButtonCoffeeShopPlay()
    } else{
        soundOn = false
        coffeeShopDisplay.classList.remove('button-pressed')
        pressButtonCoffeeShopPause()
    }
}

coffeeShopDisplay.addEventListener('click', function(){
    coffeShop()
})

function fire(){
    if(soundOn == false){
        soundOn = true
        fireDisplay.classList.add('button-pressed')
        pressButtonFirePlay()
    } else{
        soundOn = false
        fireDisplay.classList.remove('button-pressed')
        pressButtonFirePause()
    }
}

fireDisplay.addEventListener('click', function(){
    fire()
})

function resetTimer(){
    updateTimer(minutes, 0);
    clearTimeout(timerTimeOut);
}

function resetControl(){
    pauseDisplay.classList.add('hide')
    playDisplay.classList.remove('hide')
}

function updateTimer(minutes, seconds){
    minuteDisplay.textContent = String(minutes).padStart(2, "0")
    secondDisplay.textContent = String(seconds).padStart(2, "0")
}

function countDownSeconds(){
    timerTimeOut = setTimeout(function(){
        let seconds = Number(secondDisplay.textContent)
        let minutes = Number(minuteDisplay.textContent)

        updateTimer(minutes, 0)
        
        if (minutes <= 0 && seconds == 0){
            resetControl()
            return
        } else if(seconds <= 0){
            seconds = 60
            --minutes
        }


        updateTimer(minutes, String(seconds -1))

        countDownSeconds()
        
    }, 1000)
}

playDisplay.addEventListener('click', function(){
    pauseDisplay.classList.remove('hide');
    playDisplay.classList.add('hide');
    countDownSeconds()
})

pauseDisplay.addEventListener('click', function(){
    playDisplay.classList.remove('hide');
    pauseDisplay.classList.add('hide');

    clearTimeout(timerTimeOut)
})

resetDisplay.addEventListener('click', function(){
    resetControl()
    resetTimer()
})

addDisplay.addEventListener('click', function(){
    if(minuteDisplay.textContent < 60){
        let result = Number(minuteDisplay.textContent) + Number(fiveMinutes);
        minuteDisplay.textContent = String(result).padStart(2, "0");
        updateTimer(minuteDisplay.textContent, 0);
    } else{
        return
    }
})

subDisplay.addEventListener('click', function(){
    if(minuteDisplay.textContent != 0){
        let result = Number(minuteDisplay.textContent) - Number(fiveMinutes);
        minuteDisplay.textContent = String(result).padStart(2, "0")
        updateTimer(minuteDisplay.textContent, 0);
    } else {
        return
    }
})