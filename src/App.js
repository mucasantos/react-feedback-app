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

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm/>
        <FeedBackStats  feedback={feedback}/>
        <FeedBackList feedback={feedback} handleDelete={deleteFeedBack} />
      </div>
    </>
  );
}

export default App;
