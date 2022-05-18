import logo from './logo.svg';
import './App.css';
import questions from './questions';
import {useState} from 'react'

function App() {
  const [questionidx, setQuestionidx] = useState(0);
  const[score,setScore] =useState(0);
  const [showScore,setShowScore]=useState(false);
  const currQuestion = questions[questionidx]
  const selectoption =(idx) =>{
console.log(idx)
if(currQuestion.answer === idx){
  setScore(score+1)
  
}
  const nextQ = questionidx+1;
  if(nextQ < questions.length){
    setQuestionidx(questionidx+1);
  }
  else{
   setShowScore(true)
  }


  }
  const reset =() =>{
    setQuestionidx(0);
    setScore(0);
setShowScore(false)
  }
  return (
    <div className="container">
      {
        showScore ? (
        <>
        <h1>Your score is:
         {score}</h1><button onClick={reset}>Restart Quiz</button> 
         </>): (
          <div className='quiz-container'>
          <p>{currQuestion.question}</p>
          <div className="quiz-option">
          <ul className="quiz-container-ul">
            {currQuestion.options.map((option,i) =>{
              return <li className="quiz-container-li" onClick={()=> selectoption(i)}>{option}</li>
           })}
          
          </ul>
          </div>
   
        </div>
        )
      }
    
    </div>
  );
}

export default App;
