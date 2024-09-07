const quotes = [
    {
        "_id": "s2aFAaJuV3",
        "author": "Alan Watts",
        "content": "I owe my solitude to other people.",
        "category": "humorous"
    },
    {
        "_id": "NXFzDIOw6GZ",
        "author": "Winston Churchill",
        "content": "Nothing in life is so exhilarating as to be shot at without result.",
        "category": "war"
    },
    {
        "_id": "3OZfAQaDUV",
        "author": "Albert Einstein",
        "content": "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        "category": "life"
    },
    {
        "_id": "XwP2dBzWjR",
        "author": "Mark Twain",
        "content": "The secret of getting ahead is getting started.",
        "category": "motivation"
    },
    {
        "_id": "5DbvRSFkH3",
        "author": "Maya Angelou",
        "content": "You will face many defeats in life, but never let yourself be defeated.",
        "category": "inspiration"
    },
    {
        "_id": "8QvJUN4cKZ",
        "author": "Nelson Mandela",
        "content": "It always seems impossible until it’s done.",
        "category": "inspiration"
    },
    {
        "_id": "9RtMNIadqE",
        "author": "Confucius",
        "content": "It does not matter how slowly you go as long as you do not stop.",
        "category": "perseverance"
    },
    {
        "_id": "4UiLzPqsKV",
        "author": "Walt Disney",
        "content": "The way to get started is to quit talking and begin doing.",
        "category": "motivation"
    },
    {
        "_id": "7XcRNR5FYK",
        "author": "Mahatma Gandhi",
        "content": "Be the change that you wish to see in the world.",
        "category": "philosophy"
    },
    {
        "_id": "A9GvBwr4cL",
        "author": "Friedrich Nietzsche",
        "content": "That which does not kill us makes us stronger.",
        "category": "strength"
    },
    {
        "_id": "V7RfFLaGQd",
        "author": "Oscar Wilde",
        "content": "Be yourself; everyone else is already taken.",
        "category": "individuality"
    },
    {
        "_id": "B0GvXPs8Dd",
        "author": "John Lennon",
        "content": "Life is what happens when you're busy making other plans.",
        "category": "life"
    },
    {
        "_id": "J5PqYLbKTc",
        "author": "Steve Jobs",
        "content": "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
        "category": "work"
    },
    {
        "_id": "S9FkQUaLZ3",
        "author": "Aristotle",
        "content": "It is during our darkest moments that we must focus to see the light.",
        "category": "philosophy"
    },
    {
        "_id": "M4UkbQAaDG",
        "author": "Mother Teresa",
        "content": "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        "category": "kindness"
    }
];


// Keep track of the current quote index
let currentIndex = 0;

// Function to display a quote based on the current index
function displayQuote(index) {
    const quote = quotes[index];
    document.getElementById('quoteText').innerText = quote.content;
    document.getElementById('quoteAuthor').innerText = `- ${quote.author}`;
}

// Event listener for "Next" button
document.getElementById('nextBtn').addEventListener('click', function () {
    if (currentIndex < quotes.length - 1) {
        currentIndex++;
        displayQuote(currentIndex);
    }
});

// Event listener for "Previous" button
document.getElementById('prevBtn').addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--;
        displayQuote(currentIndex);
    }
});

// Initialize by showing the first quote
displayQuote(currentIndex);
