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

import { createContext, useState } from "react";

import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: "1",
      text: "This is feedback item 01",
      rating: 10
    },
    {
      id: "2",
      text: "This is feedback item 02",
      rating: 6
    },
    {
      id: "3",
      text: "This is feedback item 03",
      rating: 7
    },

  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

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
      deleteFeedback,
      addFeedback,
      editFeedback,
      updateFeedback,

    }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext