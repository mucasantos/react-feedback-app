
import { useState } from 'react'
import Button from './shared/Button'
import Card from './shared/Card'

function FeedbackForm() {

  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const handleTextChange = (e) => {

    if (text === ''){
      setBtnDisabled(true)
      setMessage(null)
    }else if (text !== '' && text.trim().length <=10){
      setMessage('O texto tem que ter pelo menos 10 caracteres')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(e.target.value)

  }
  return (
    <Card>

      <form>
        <h2>O que você achou do aplicativo?</h2>
        {/* @todo - rating select component*/}

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