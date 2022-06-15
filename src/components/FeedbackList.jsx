import React from 'react'
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types'


function FeedbackList({feedback, handleDelete}) {
    //проверка на пустой список отзывов
    if(!feedback || feedback.length === 0){
        return <p>No feedback yet</p>
    }
    
    return (
        <div className='feedback-list'>
            {/* Пробрасываем Delete в FeedbackItem */}
            {feedback.map((item)=>(
                <FeedbackItem key={item.id} item={item} handleDelete ={handleDelete}  />
            ))}
        </div>
    )
   
}

FeedbackList.propTypes = {
    //Можно просто указать array, но можно детально типы данных для каждого объекта
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired, 
            rating: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        })
    )
}


export default FeedbackList
