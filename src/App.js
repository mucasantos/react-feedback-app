import {v4 as uuidv4} from 'uuid'

import FeedBackList from './components/FeedBackList';
import Header from './components/Header'
import { useState } from 'react';
import FeedbackData from './data/FeedbackData';
import FeedBackStats from './components/FeedBackStats';
import FeedbackForm from './components/FeedbackForm';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedBack = (id) => {

    if (window.confirm('Are you shure you want to delete?')) {
      setFeedback(
        feedback.filter((item) => item.id !== id)
      )
    }
  }

  const handleFeedback = (newFeedback) => 

  {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm  handleAdd = {handleFeedback}/>
        <FeedBackStats  feedback={feedback}/>
        <FeedBackList feedback={feedback} handleDelete={deleteFeedBack} />
      </div>
    </>
  );
}

export default App;
