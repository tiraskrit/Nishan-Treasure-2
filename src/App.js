import React, { useState } from 'react';
import './App.css';

const App = () => {
  const questions = [
    { question: 'A frog is at the bottom of a 30-foot well. Each day it climbs up 3 feet but slips back 2 feet at night. How many days will it take for the frog to escape the well?', answer: '28' },
    { question: 'What has a bottom at the top?', answer: 'leg' },
    { question: 'What has a head, a tail, but no body?', answer: 'coin' },
    { question: 'What has to be broken before you can use it?', answer: 'egg' },
    { question: 'If a chicken and a half lays an egg and a half in a day and a half, how many eggs would 3 chickens lay in 3 days?', answer: '6' },
  ];

  const images = [
    'https://raw.githubusercontent.com/tiraskrit/Nishan-Treasure-2/refs/heads/main/wall_map.png',
    'https://www.anekdotique.com/wp-content/uploads/2014/08/East_Side_Gallery_Sunset.jpg',
    'https://raw.githubusercontent.com/tiraskrit/Nishan-Treasure-2/refs/heads/main/wall.jfif',
    'https://raw.githubusercontent.com/tiraskrit/Nishan-Treasure-2/refs/heads/main/wall_pole.jfif',
    'https://raw.githubusercontent.com/tiraskrit/Nishan-Treasure-2/refs/heads/main/wall_back.jfif',
  ];

  const funnyMessages = [
    "Congratulations! You cracked it! Here's your first hint. Let's keep the party vibes going!",
    "Boom! Nailed it! Here's your next clue. Bachelor pro in the making!",
    "Bam! You're on fire! Another hint unlocked. The party gets wilder!",
    "Woohoo! You're unstoppable! Here's another clue. Drinks on you tonight!",
    "Yesss! You did it again! Here's your final hint. Let the chaos unfold!",
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [currentImage, setCurrentImage] = useState(null); // Store only one image
  const [message, setMessage] = useState('');
  const [isCorrectMessage, setIsCorrectMessage] = useState(false);

  const handleAnswerSubmission = () => {
    if (
      userAnswer.trim().toLowerCase() === 
      questions[currentQuestionIndex].answer.trim().toLowerCase()
    ) {
      setMessage(funnyMessages[currentQuestionIndex]);
      setIsCorrectMessage(true);
      setCurrentImage(images[currentQuestionIndex]); // Show the most recent image
      setUserAnswer('');

      if (currentQuestionIndex < questions.length - 1) {
        setTimeout(() => {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setMessage(`Now question ${currentQuestionIndex + 2}:`);
          setIsCorrectMessage(false);
        }, 2000);
      } else {
        setTimeout(() => {
          setMessage('Congratulations! You have revealed all the hints! Time to party! 🎉🥳');
          setIsCorrectMessage(false);
        }, 2000);
      }
    } else {
      setMessage('Incorrect answer. Try again! No hint until you get it right!');
      setIsCorrectMessage(false);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Treasure Hunt: Nishan's Bachelor Party</h1>
        <p>Answer the questions to reveal the hints for the ultimate party!</p>
        <p className='hint'>With each hint you will get closer to your next location!</p>
      </header>
      <div className="content">
        {currentQuestionIndex < questions.length && (
          <>
            <p>{questions[currentQuestionIndex].question}</p>
            <input
              type="text"
              placeholder="Your answer"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
            />
            <button onClick={handleAnswerSubmission}>Submit</button>
          </>
        )}
        <p className={isCorrectMessage ? "success" : "error"}>{message}</p>
        <div className="grid-container">
          <div className="result-grid">
            {currentImage && (
              <img
                src={currentImage}
                alt={`Hint`}
                className="hint-image center-single"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
