import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import FeedBackItem from './FeedBackItem'
import PropTypes from "prop-types"

function FeedBackList({ feedback, handleDelete }) {

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
            <FeedBackItem key={item.id} item={item} handleClick={handleDelete} /> 
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
FeedBackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  )

}

export default FeedBackList
