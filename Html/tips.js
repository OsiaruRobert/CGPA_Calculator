const Tips = [
  { content: "Use active learning strategies to enhance your study effectiveness!", author: "Unknown" },
  { content: "Break your study sessions into smaller, manageable chunks.", author: "John Doe" },
  { content: "Stay organized with a planner to track assignments and deadlines.", author: "Jane Smith" },
  { content: "Prioritize tasks based on deadlines and importance.", author: "Mary Johnson" },
  { content: "Practice mindfulness techniques to reduce stress during exams.", author: "David Brown" },
  { content: "Review material regularly to reinforce retention.", author: "Alice Williams" },
  { content: "Study in a quiet and distraction-free environment.", author: "Michael Jones" },
  { content: "Use flashcards for memorization of key terms and concepts.", author: "Emily Davis" },
  { content: "Join study groups to gain different perspectives on the material.", author: "Christopher Garcia" },
  { content: "Teach the material to someone else to reinforce your understanding.", author: "Sarah Wilson" },
  { content: "Set specific goals for each study session.", author: "Daniel Martinez" },
  { content: "Use a rewards system for completing tasks.", author: "Jessica Lee" },
  { content: "Incorporate mnemonic devices to help remember information.", author: "Thomas Anderson" },
  { content: "Take regular breaks using techniques like the Pomodoro Technique.", author: "Laura Thomas" },
  { content: "Utilize online resources and educational platforms for varied learning.", author: "Charles Hall" },
  { content: "Always read the syllabus to understand course expectations.", author: "Olivia Robinson" },
  { content: "Stay hydrated and maintain a healthy diet for optimal brain function.", author: "David Wilson" },
  { content: "Engage in physical activity to improve mood and focus.", author: "Emily Johnson" },
  { content: "Adapt your study style to match the subject matter.", author: "James Brown" },
  { content: "Seek help from teachers or tutors when needed.", author: "Linda Garcia" },
  { content: "Establish a consistent study routine.", author: "William Moore" },
  { content: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
  { content: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
  { content: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { content: "What we learn with pleasure we never forget.", author: "Alfred Mercier" },
  { content: "Absence of evidence is not evidence of absence.", author: "Carl Sagan" },
  { content: "Change is the end result of all true learning.", author: "Leo Buscaglia" },
  { content: "The more that you read, the more things you will know.", author: "Dr. Seuss" },
  { content: "Learning never exhausts the mind.", author: "Leonardo da Vinci" },
  { content: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela" },
  { content: "Tell me and I forget. Teach me and I remember. Involve me and I learn.", author: "Benjamin Franklin" },
  { content: "If you want to learn, you have to listen.", author: "Unknown" },
  { content: "Study hard, for the well is deep, and our thirst for knowledge infinite.", author: "Cicero" },
  { content: "Perseverance is not a long race; it is many short races one after the other.", author: "Walter Elliot" },
  { content: "Education is not the filling of a pail, but the lighting of a fire.", author: "William Butler Yeats" },
  { content: "Your education is a dress rehearsal for a life that is yours to lead.", author: "Nora Ephron" },
  { content: "Intelligence plus character—that is the goal of true education.", author: "Martin Luther King Jr." },
  { content: "Learning without reflection is a waste. Reflection without learning is dangerous.", author: "Confucius" },
  { content: "The man who moves a mountain begins by carrying away small stones.", author: "Confucius" },
  { content: "Mistakes are proof that you are trying.", author: "Unknown" },
  { content: "Education is the key to unlocking the golden door of freedom.", author: "George Washington Carver" },
  { content: "Do not wait; the time will never be 'just right.' Start where you stand.", author: "Napoleon Hill" },
  { content: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { content: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { content: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
  { content: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
  { content: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { content: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
  { content: "There are no limits to what you can accomplish, except the limits you place on your own thinking.", author: "Brian Tracy" },
  { content: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { content: "Hard work beats talent when talent doesn't work hard.", author: "Tim Notke" },
  { content: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
  { content: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { content: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { content: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
  { content: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { content: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.", author: "Jordan Belfort" },
  { content: "Opportunities don't happen, you create them.", author: "Chris Grosser" },
  { content: "Our greatest glory is not in never falling, but in rising every time we fall.", author: "Confucius" },
  { content: "The successful warrior is the average man, with laser-like focus.", author: "Bruce Lee" },
  { content: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
  { content: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },


  { content: "The difference between successful people and others is how long they spend time feeling sorry for themselves.", author: "Barbara Corcoran" },
  { content: "I never dreamed about success. I worked for it.", author: "Estée Lauder" },
  { content: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { content: "The successful man will profit from his mistakes and try again in a different way.", author: "Dale Carnegie" },
  { content: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
  { content: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
  { content: "Your limitation—it’s only your imagination.", author: "Unknown" },
  { content: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
  { content: "Great things never come from comfort zones.", author: "Unknown" },
  { content: "Dream it. Wish it. Do it.", author: "Unknown" },
  { content: "Success doesn’t just find you. You have to go out and get it.", author: "Unknown" },
  { content: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
  { content: "Dream bigger. Do bigger.", author: "Unknown" },
  { content: "Don’t stop when it’s hard. Stop when you’re done.", author: "Unknown" },
  { content: "Wake up with determination. Go to bed with satisfaction.", author: "Unknown" },
  { content: "The key to success is to focus on goals, not obstacles.", author: "Unknown" },
  { content: "Dream it. Believe it. Build it.", author: "Unknown" },
  { content: "The future depends on what you do today.", author: "Mahatma Gandhi" }
];

//function to display tips
function displayTips() {
  //get a Random tips
  let current_Tip = getRandomItem(Tips);
  //displayTips
  Id('tipAuthor').innerText = `~${current_Tip.author}`;
  Id('tipContent').innerText = current_Tip.content;
}

document.getElementById('nextTip').addEventListener('click', () => {
  displayTips();
})