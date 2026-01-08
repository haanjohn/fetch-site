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

    const calculateFVButton = document.getElementById('calculateFV');
    if (calculateFVButton) {
        calculateFVButton.addEventListener('click', () => {
            const presentValue = parseFloat(document.getElementById('presentValue').value);
            const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
            const numPeriods = parseFloat(document.getElementById('numPeriods').value);
            const futureValueResult = document.getElementById('futureValueResult');

            if (isNaN(presentValue) || isNaN(interestRate) || isNaN(numPeriods)) {
                futureValueResult.textContent = 'Please enter valid numbers.';
                futureValueResult.style.color = 'red';
                return;
            }

            // FV = PV * (1 + I/Y)^N
            const futureValue = presentValue * Math.pow((1 + interestRate), numPeriods);
            futureValueResult.textContent = `$${futureValue.toFixed(2)}`;
            futureValueResult.style.color = '#5a3d2b'; // Reset color if it was red
        });
    }
});
