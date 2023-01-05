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
            text: "This item is from context",
            rating: 10
        },
        
    ])

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


    return <FeedbackContext.Provider
        value={{
            feedback,
            deleteFeedback,
            addFeedback,
        }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext