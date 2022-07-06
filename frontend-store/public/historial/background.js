const ulSquares = document.querySelector('ul.squares');

for (let i = 0; i<26; i++){
    const li = document.createElement('li');

    const random = (min, max) => Math.random() * (max - min) + min;

    const size = Math.floor(random(10, 120));
    const positionRight = random(68,99);
    const positionLeft = random(1, 32);
    i == 0 ? delay = 1 : delay = random(5, 0.1);
    const duration = random(10, 20);

    let position = 0;
    i % 2 == 0 ? position = positionRight: position = positionLeft;

    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `-${size}px`;
    li.style.left = `${position}%`;
    li.style.animationDelay = `${delay}s`;
    li.style.animationDuration = `${duration}s`;
    li.style.animationTimingFunction = `cubic-bezier: ${Math.random()}, ${Math.random}, ${Math.random},${Math.random}`;

    ulSquares.appendChild(li);
}