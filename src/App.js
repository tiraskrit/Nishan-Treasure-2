import React, { useState } from 'react';
import './App.css';

const App = () => {
  const questions = [
    { question: 'When was Nishan born?', answer: '1993' },
    { question: 'When was Uttam born?', answer: '1991' },
    { question: 'When was Sanjaya born?', answer: '1992' },
    { question: 'When was Ananta born?', answer: '1992' },
    { question: 'When was Kushal born?', answer: '1992' },
  ];

  const images = [
    'https://lp-cms-production.imgix.net/2021-08/shutterstockRF_345802901.jpg?w=1920&h=640&fit=crop&crop=faces%2Cedges&auto=format&q=75',
    'https://www.anekdotique.com/wp-content/uploads/2014/08/East_Side_Gallery_Sunset.jpg',
    'https://cdn.wallstoxx.com/media/15/cf/b7/1664442978/731823_thumb1.png',
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/81/58/8d/caption.jpg?w=1200&h=-1&s=1',
    'https://berlinwallmap.info/wp-content/uploads/2015/11/berlin-wall-800x494.jpg',
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
    if (userAnswer === questions[currentQuestionIndex].answer) {
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
        <h1>Treasure Hunt: Bachelor Edition</h1>
        <p>Answer the questions to reveal the hints for the ultimate party!</p>
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
