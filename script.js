const quotes = [
  {"text": "Life is what happens when you're busy making other plans.", "author": "John Lennon"},
  {"text": "Do what you can, with what you have, where you are.", "author": "Theodore Roosevelt"},
  {"text": "Turn your wounds into wisdom.", "author": "Oprah Winfrey"},
  {"text": "Happiness depends upon ourselves.", "author": "Aristotle"},
  {"text": "Everything has beauty, but not everyone sees it.", "author": "Confucius"},
  {"text": "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", "author": "Buddha"},
  {"text": "Life isn’t about finding yourself. Life is about creating yourself.", "author": "George Bernard Shaw"},
  {"text": "It is never too late to be what you might have been.", "author": "George Eliot"},
  {"text": "In the middle of every difficulty lies opportunity.", "author": "Albert Einstein"},
  {"text": "To live is the rarest thing in the world. Most people exist, that is all.", "author": "Oscar Wilde"},
  {"text": "Success is not final, failure is not fatal: it is the courage to continue that counts.", "author": "Winston Churchill"},
  {"text": "The way to get started is to quit talking and begin doing.", "author": "Walt Disney"},
  {"text": "Don't watch the clock; do what it does. Keep going.", "author": "Sam Levenson"},
  {"text": "If you're going through hell, keep going.", "author": "Winston Churchill"},
  {"text": "I find that the harder I work, the more luck I seem to have.", "author": "Thomas Jefferson"},
  {"text": "The secret of getting ahead is getting started.", "author": "Mark Twain"},
  {"text": "Dream big and dare to fail.", "author": "Norman Vaughan"},
  {"text": "Act as if what you do makes a difference. It does.", "author": "William James"},
  {"text": "Opportunities don't happen. You create them.", "author": "Chris Grosser"},
  {"text": "It does not matter how slowly you go as long as you do not stop.", "author": "Confucius"},
  {"text": "Love all, trust a few, do wrong to none.", "author": "William Shakespeare"},
  {"text": "The best thing to hold onto in life is each other.", "author": "Audrey Hepburn"},
  {"text": "Love is composed of a single soul inhabiting two bodies.", "author": "Aristotle"},
  {"text": "We accept the love we think we deserve.", "author": "Stephen Chbosky"},
  {"text": "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.", "author": "Lao Tzu"},
  {"text": "Love takes off masks that we fear we cannot live without and know we cannot live within.", "author": "James Baldwin"},
  {"text": "The greatest thing you'll ever learn is just to love and be loved in return.", "author": "Nat King Cole"},
  {"text": "A friend is someone who knows all about you and still loves you.", "author": "Elbert Hubbard"},
  {"text": "There is only one happiness in life: to love and be loved.", "author": "George Sand"},
  {"text": "Love is not about how many days, months, or years you have been together. It is about how much you love each other every single day.", "author": "Unknown"},
  {"text": "Do one thing every day that scares you.", "author": "Eleanor Roosevelt"},
  {"text": "Courage is resistance to fear, mastery of fear, not absence of fear.", "author": "Mark Twain"},
  {"text": "Fear is only as deep as the mind allows.", "author": "Japanese Proverb"},
  {"text": "All our dreams can come true, if we have the courage to pursue them.", "author": "Walt Disney"},
  {"text": "Hardships often prepare ordinary people for an extraordinary destiny.", "author": "C.S. Lewis"},
  {"text": "He who is not courageous enough to take risks will accomplish nothing in life.", "author": "Muhammad Ali"},
  {"text": "It takes courage to grow up and become who you really are.", "author": "E.E. Cummings"},
  {"text": "Believe you can and you're halfway there.", "author": "Theodore Roosevelt"},
  {"text": "The only limit to our realization of tomorrow is our doubts of today.", "author": "Franklin D. Roosevelt"},
  {"text": "A champion is defined not by their wins but by how they can recover when they fall.", "author": "Serena Williams"},
  {"text": "An investment in knowledge pays the best interest.", "author": "Benjamin Franklin"},
  {"text": "Education is the most powerful weapon which you can use to change the world.", "author": "Nelson Mandela"},
  {"text": "The beautiful thing about learning is that no one can take it away from you.", "author": "B.B. King"},
  {"text": "Live as if you were to die tomorrow. Learn as if you were to live forever.", "author": "Mahatma Gandhi"},
  {"text": "It is not that I'm so smart, it's just that I stay with problems longer.", "author": "Albert Einstein"},
  {"text": "Education is not the filling of a pail, but the lighting of a fire.", "author": "W.B. Yeats"},
  {"text": "Wisdom begins in wonder.", "author": "Socrates"},
  {"text": "Tell me and I forget. Teach me and I remember. Involve me and I learn.", "author": "Benjamin Franklin"},
  {"text": "The only true wisdom is in knowing you know nothing.", "author": "Socrates"},
  {"text": "Knowledge is power.", "author": "Francis Bacon"}
];
const colors = ["#ff9a9e", "#fad0c4", "#ff6b6b", "#74ebd5", "#acb6e5", "#f093fb", "#f5576c"];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const quote = quotes[randomIndex];

  document.getElementById("quote").innerHTML = `"${quote.text}"`;
  document.getElementById("author").innerHTML = `— ${quote.author}`;
  document.body.style.background = `linear-gradient(135deg, ${randomColor}, #ffffff)`;
}

generateQuote();