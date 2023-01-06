/**
 * Criando contexto para gerenciar melhor o estado
 * 
 * 1. importar createContext e useState
 * 2. Para criar o contexto, iniciar numa vaviável
 * 3. Criar um provider
 * 4. O provider recebe a children
 * 5. O que precisamos passar, usamos o value
 * 6. Envolver o app (onde tem todos os componentes)
 * com o Provider criado
 * 7. No componente que precisamos utilizar o estado,
 * importamos o Context e o useContext
 * 8. Extraimos o que precisamos do contexto
 * 
 */

import { createContext, useState, useEffect } from "react";

//import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {

  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    fetchFeedback()
  }, [])


  // Fetch feedback

  const fetchFeedback = async () => {
    const response = await fetch('/feedback')

    const data = await response.json()

    setFeedback(data)
    setIsLoading(false)

  }

  const deleteFeedback = async (id) => {

    if (window.confirm('Are you shure you want to delete?')) {

      await fetch(`/feedback/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },

      })
      setFeedback(
        feedback.filter((item) => item.id !== id)
      )
    }
  }

  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFeedback)
    })

    const data = await response.json()

    // newFeedback.id = uuidv4()
    setFeedback([data, ...feedback])
  }

  //Set item to be edit
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  //update feedbackItem

  const updateFeedback = async (id, updItem) => {

    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updItem)

    })

    const data = await response.json()

    setFeedback(feedback.map((item) => item.id === id
      ? { ...item, ...data }
      : item))
  }

  return <FeedbackContext.Provider
    value={{
      feedback,
      feedbackEdit,
      isLoading,
      deleteFeedback,
      addFeedback,
      editFeedback,
      updateFeedback,

    }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext