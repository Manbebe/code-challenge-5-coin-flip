const coinIcon = document.getElementById('coin');
const tossBtn = 
    document.getElementById('toss-button');
const result = 
    document.querySelector('.result');
let heads = 0;    
let tails = 0;
coinIcon.insertAdjacentElement('afterend', result);
tossBtn.addEventListener('click', () => {
    tossBtn.disabled = true;
    tossCoinFunction();
});
function tossCoinFunction() {
    const randomVal = Math.random();
    const faceCoin = randomVal < 0.5 ? 'Heads' : 'Tails';
    const imageUrl = faceCoin === 'Heads' ?
'https://fbi.cults3d.com/uploaders/23851302/illustration-file/d46348b8-38c3-49a3-aab0-838d5d3dea1e/31.jpg' :
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY_QbuEArXj03SWttt15okZbln5ZE2zeFhDWOi-7eb6-An6l4C:https://fbi.cults3d.com/uploaders/23851302/illustration-file/91f04036-7b97-446e-bd36-4a6a75649bce/34.jpg&s';
if (faceCoin === "Heads") {
    heads++;
    document.getElementById("headsCount").textContent = heads;
} else {
    tails++;
    document.getElementById("tailsCount").textContent = tails;
}

coinIcon.classList.add('flip');
setTimeout(() => {
    coinIcon.innerHTML = `<img src="${imageUrl}" alt="${faceCoin}">`;
    coinIcon.classList.remove('flip');
    setTimeout(() => {
        result.textContent = `Result: ${faceCoin}`;
        result.style.opacity = 1;
        tossBtn.disabled = false;
    }, 500);
}, 1000);
}