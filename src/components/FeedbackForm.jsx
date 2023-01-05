
import { useState, useContext, useEffect } from 'react'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import Card from './shared/Card'

import FeedbackContext from '../context/FeedBackContext'

function FeedbackForm() {

  const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [rating, setRating] = useState(10)
  const [message, setMessage] = useState('')

  useEffect(() => {

    if (feedbackEdit.edit === true) {

      setText(feedbackEdit.item.text)
      setBtnDisabled(false)
      setRating(feedbackEdit.item.rating)
    }

  }, [feedbackEdit])

  const handleTextChange = (e) => {

    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('O texto tem que ter pelo menos 10 caracteres')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(e.target.value)

  }

  function handleSubmit(e) {

    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {

        addFeedback(newFeedback)
      }
      setText('')
    }

  }
  return (
    <Card>

      <form onSubmit={handleSubmit}>
        <h2>O que você achou do aplicativo?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder='Escreva a sua opinião'
            value={text}
          />
          <Button isDisable={btnDisabled} type="submit">
            Enviar
          </Button>
        </div>
        <div>
          {message && <div className='message'> {message} </div>}
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm