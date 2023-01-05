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

import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

useEffect(()=>{
  fetchFeedback()
},[])


// Fetch feedback

const fetchFeedback = async ()=> {
  const response = await fetch('http://localhost:5000/feedback')

  const data = await response.json()

  setFeedback(data)
  setIsLoading(false)

}

  const deleteFeedback = (id) => {

    if (window.confirm('Are you shure you want to delete?')) {
      setFeedback(
        feedback.filter((item) => item.id !== id)
      )
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  //Set item to be edit
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  //update feedbackItem

  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item) => item.id === id
      ? { ...item, ...updItem }
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