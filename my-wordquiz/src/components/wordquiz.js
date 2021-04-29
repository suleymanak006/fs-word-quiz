
 import React, { useState } from 'react';

 export default function Quiz() {
	 const questions = [
		{
			question: 'Tisch',
			answerOptions: [
				{ answer: 'Desk', isCorrect: false },
				{ answer: 'Wall', isCorrect: false },
				{ answer: 'Table', isCorrect: true },
				{ answer: 'Hause', isCorrect: false },
			],
		},
		{
			question: 'Tur',
			answerOptions: [
				{ answer: 'Forest', isCorrect: false },
				{ answer: 'Door', isCorrect: true },
				{ answer: 'Window', isCorrect: false },
				{ answer: 'Bed', isCorrect: false },
			],
		},
		{
			question: 'Kopf',
			answerOptions: [
				{ answer: 'Head', isCorrect: true },
				{ answer: 'Eye', isCorrect: false },
				{ answer: 'Ear', isCorrect: false },
				{ answer: 'Chin', isCorrect: false },
			],
		},
		{
			question: 'Drei',
			answerOptions: [
				{ answer: 'Thirteen', isCorrect: false },
				{ answer: 'Thirty', isCorrect: false },
				{ answer: 'Two', isCorrect: false },
				{ answer: 'Three', isCorrect: true },
			],
		},
        {
			question: 'Damen',
			answerOptions: [
				{ answer: 'Ladies', isCorrect: true },
				{ answer: 'Girls', isCorrect: false },
				{ answer: 'Sisters', isCorrect: false },
				{ answer: 'Parents', isCorrect: false },
			 ],
		 },
	 ];
 
	 const [currentQuestion, setCurrentQuestion] = useState(0);
	 const [showScore, setShowScore] = useState(false);
	 const [score, setScore] = useState(0);
 
	 const handleAnswerOptionClick = (isCorrect) => {
		 if (isCorrect) {
			 setScore(score + 1);
		 }
 
		 const nextQuestion = currentQuestion + 1;
		 if (nextQuestion < questions.length) {
			 setCurrentQuestion(nextQuestion);
		 } else {
			 setShowScore(true);
		 }
	 };
	 return (
		 <div className='quiz'>
			 {showScore ? (
				 <div className='score-section'>
					 You scored {score} out of {questions.length}
				 </div>
			 ) : (
				 <>
					 <div className='question-section'>
						 <div className='question-count'>
							 <span>Question {currentQuestion + 1}</span>/{questions.length}
						 </div>
						 <div className='question-text'>{questions[currentQuestion].question}</div>
					 </div>
					 <div className='answer-section'>
						 {questions[currentQuestion].answerOptions.map((answerOption) => (
							 <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answer}</button>
						 ))}
					 </div>
				 </>
			 )}
		 </div>
	 );
 }