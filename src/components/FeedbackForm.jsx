import { useState } from 'react'
import Card from './shared/Card'

function FeedbackForm() {

    const [text, setText] = useState('')
  return (
    <Card>

<form>
    <h2>O que você achou do aplicativo?</h2>
    {/* @todo - rating select component*/}

    <div className="input-group">
        <input type="text" placeholder='Escreva a sua opinião'/>
        <button type="submit">Enviar</button>
    </div>
</form>

    </Card>
  )
}

export default FeedbackForm