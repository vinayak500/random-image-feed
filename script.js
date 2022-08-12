const container = document.getElementById('container');
const unsplashURL = 'https://source.unsplash.com/random/';

for(let i=0;i<15;i++){
    const img = document.createElement('img');
    img.src = `${unsplashURL}${getRandomSize()}`
    container.appendChild(img);
}



//(301-309) * (301-309)
function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()}`
}

// 301 to 309
function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300
}



