import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import FeedBackList from './components/FeedBackList';
import Header from './components/Header'
import { useState } from 'react';
import FeedbackData from './data/FeedbackData';
import FeedBackStats from './components/FeedBackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedBack = (id) => {

    if (window.confirm('Are you shure you want to delete?')) {
      setFeedback(
        feedback.filter((item) => item.id !== id)
      )
    }
  }

  const handleFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <Router>
      <Header />
      <AboutIconLink />
      <div className="container">
        <Routes>
          <Route path='/'
            element={
              <>
                <FeedbackForm handleAdd={handleFeedback} />
                <FeedBackStats feedback={feedback} />
                <FeedBackList feedback={feedback} handleDelete={deleteFeedBack} />
              </>
            }
          >
          </Route>
          <Route path='/about' element={<AboutPage />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
