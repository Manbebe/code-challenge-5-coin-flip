const coinIcon = document.getElementById('coin');
const tossBtn = 
    document.getElementById('toss-button');
const result = 
    document.querySelector('.result');
coinIcon.insertAdjacentElement('afterend', result);
tossBtn.addEventListener('click', () => {
    tossBtn.disabled = true;
    tossCoinFunction();
});
function tossCoinFunction() {
    const randomVal = Math.random();
    const faceCoin = randomVal < 0.5 ? 'Heads' : 'Tails';
    const imageUrl = faceCoin === 'Heads' ?
'https://media.geeksforgeeks.org/wp-content/uploads/20231016151817/heads.png' :
'https://i.pinimg.com/474x/09/e4/8d/09e48dddb4dafb39431e79ab69d9e049.jpg';
        
    coinIcon.classList.add('flip');
    setTimeout(() => {
        coinIcon.innerHTML = 
            `<img src="${imageUrl}" alt="${faceCoin}">`;
        coinIcon.classList.remove('flip');
        setTimeout(() => {
            result.textContent = `Result: ${faceCoin}`;
            result.style.opacity = 1;
            tossBtn.disabled = false;
        }, 500);
    }, 1000);
}