document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
        'In a perfect world, every dog would have a home and every home would have a dog.',
        'The only bad dog is an unloved dog.',
        'Dogs are not our whole life, but they make our lives whole.',
        'A dog is the only thing on earth that loves you more than he loves himself.',
        'Happiness is a warm puppy.'
    ];

    const quoteDisplay = document.getElementById('quote-display');
    if (quoteDisplay) {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteDisplay.textContent = quotes[randomIndex];
    }
});
