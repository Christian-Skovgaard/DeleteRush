const getRandomNr = () => Math.floor(Math.random() * 100);

function createDeleteButton() {
    const button = document.createElement('button');
    button.classList.add('DeleteButton');
    button.textContent = 'DeleteMe';
    button.style.position = 'absolute';
    button.style.left = `${getRandomNr()}%`;
    button.style.top = `${getRandomNr()}%`;

    document.querySelector("body").appendChild(button);
    button.addEventListener('click', () => {
        button.remove();
    });

    console.log("Made button <3");
}

setInterval(createDeleteButton, 500);
