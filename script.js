const quotes = [
    "The world is a museum of passion projects.",
    "There is no healing, only letting go.",
    "It is not in the light that you get enlightened.",
    "You will remain the same until the pain of remaining the same is greater than the pain of change.",
    "Stop looking for your soulmate, start looking for your soul, mate.",
    "Anxiety is what happens when you grow your intelligence without growing your courage.",
    "Set a goal so big that you can't achieve it until you grow into the person who can.",
    "Your ability to move on is dependent on how high your self-esteem and self-respect is.",
    "Most of what you consider impossible is discomfort you're unwilling to bear",
    "Aiming to be universally likeable is self-erasure. You become a mirror reflecting what others want to see, not a person.",
    // ... (all other quotes)
];

function generateQuote() {
    const quoteElement = document.getElementById('quote');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

// Generate a quote when the page loads
document.addEventListener('DOMContentLoaded', generateQuote);
