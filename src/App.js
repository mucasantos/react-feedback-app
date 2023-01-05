import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import FeedBackList from './components/FeedBackList';
import Header from './components/Header'

import FeedBackStats from './components/FeedBackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedBackContext';

import AboutIconLink from './components/AboutIconLink';

function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <AboutIconLink />
        <div className="container">
          <Routes>
            <Route path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedBackStats />
                  <FeedBackList />
                </>
              }
            >
            </Route>
            <Route path='/about' element={<AboutPage />} />
          </Routes>

        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
