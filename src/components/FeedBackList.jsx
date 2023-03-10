import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import FeedBackItem from './FeedBackItem'

import { useContext } from 'react'
import FeedbackContext from '../context/FeedBackContext'

function FeedBackList() {
  const { feedback, } = useContext(FeedbackContext)
  if (!feedback || feedback.length === 0) {
    return <p>No Feedbacks yet</p>
  }
  return (
    <div className='feedback-list'>

      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedBackItem key={item.id}
              item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )

  /*
    return (
      <div className='feedback-list'>
        {feedback.map((item) => {
          return <FeedBackItem key={item.id} item={item} handleClick = {handleDelete} > </FeedBackItem>
        })}
  
      </div>
    )
  
  */

}

export default FeedBackList
