import React from 'react'
//для анимаци
import {motion ,AnimatePresence} from 'framer-motion';
import { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
// import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext';


function FeedbackList() {
    const {feedback} = useContext(FeedbackContext);

    //проверка на пустой список отзывов
    if(!feedback || feedback.length === 0){
        return <p>No feedback yet</p>
    }
    
    return (
        <div className='feedback-list'>
            <AnimatePresence>
            {/* Пробрасываем Delete в FeedbackItem */}
            {feedback.map((item)=>(
                <motion.div 
                    key={item.id}
                    initial={{
                        x: -100,
                        scale: 0.5,
                        opacity:0,
                    }}
                    animate={{
                        x: 0,
                        scale: 1,
                        opacity:1
                    }}
                    exit={{
                        x: 100,
                        opacity:0,
                        scale: 0.5,
                    }}
                    transition={{ duration: 0.5 }}
                >
                    <FeedbackItem key={item.id} item={item}  />
                </motion.div>
            ))}
            </AnimatePresence>
        </div>
    )

    // без анимации
    // return (
    //     <div className='feedback-list'>
    //         {/* Пробрасываем Delete в FeedbackItem */}
    //         {feedback.map((item)=>(
    //             <FeedbackItem key={item.id} item={item} handleDelete ={handleDelete}  />
    //         ))}
    //     </div>
    // )
   
}

// FeedbackList.propTypes = {
//     //Можно просто указать array, но можно детально типы данных для каждого объекта
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired, 
//             rating: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired,
//         })
//     )
// }


export default FeedbackList
