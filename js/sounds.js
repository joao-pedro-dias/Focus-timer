export default function(){
    const audioFlorest = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true");
    const audioRain = new Audio("https://drive.google.com/file/d/1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2/view");
    const audioCoffeeShop = new Audio("https://drive.google.com/file/d/1OxLKpCwg2wrxXFNUHgZxJ51QEt0ac5RA/view");
    const audioFire = new Audio("https://drive.google.com/file/d/1MakaBPxJvTa_whaSM3kEbRcxiVd1GRCB/view");

    function pressButtonFlorest(){
        audioFlorest.play()
    }

    function pressButtonRain(){
        audioRain.play()
    }

    function pressButtonCoffeeShop(){
        audioCoffeeShop.play()
    }

    function pressButtonFire(){
        audioFire.play()
    }

    return{
        pressButtonFlorest,
        pressButtonRain,
        pressButtonCoffeeShop,
        pressButtonFire
    }
}