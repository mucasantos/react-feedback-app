
import { useState } from 'react'
import Button from './shared/Button'
import Card from './shared/Card'

function FeedbackForm() {

  const [text, setText] = useState('')

  const handleTextChange = (e) =>{

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
          <Button type="submit" >Enviar </Button>
        </div>
      </form>

    </Card>
  )
}

export default FeedbackForm