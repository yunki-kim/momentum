const quotes = [
  {
    quote: "If you can dream it, You can do it",
    author: "Walt Disney",
  },
  {
    quote: "I find that the harder I work, the more luck I seem to have",
    author: "Thomas Jefferson",
  },
  {
    qutoe:
      "If people only knew how hard I've worked to gain my mastery, it wouldn't seem so wonderful at all.",
    author: "Michelangelo",
  },
  {
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "There is no substitute for hard work",
    author: "Thomas Edison",
  },
  {
    quote: "Success is the sum of small efforts, repeated day in and day out.",
    author: "Robert Collier",
  },
  {
    quote: "Push yourself, because no one else is going to do it for you.",
    author: "unknown",
  },
  {
    quote:
      "Continuous learning is the minimum requirement for success in any field.",
    author: "Brian tracy",
  },
  {
    quote: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe",
  },
  {
    quote:
      "Some people dream of accomplishing great things. Others stay awake and make it happen.",
    author: "Mohsin jameel",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
