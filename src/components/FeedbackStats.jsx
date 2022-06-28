//rfce
import React from 'react'
// import PropTypes from 'prop-types'
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  //Вместо получения на вход функции отзывов они берутся в самой функции
  const {feedback} = useContext(FeedbackContext);

    //Подсчёт среднего рейтинга acc- аккумулятор cur - текущий элемент, дефолт для аккума - 0
    let average = feedback.reduce((acc, curr)=>{
        return acc+curr.rating
    }, 0) /feedback.length
    
    //убираем лишние знаки у среднего значения - 4.33333 затем регулярным выражением убираем[.,]0$/ ноль у целых
    average = average.toFixed(1).replace(/[.,]0$/, '');

    console.log(average);

  return (
    <div className='feedback-stats'>
      <h4>Количество отзывов: {feedback.length}</h4>
      {/* проеряем, если нет отзывов, выводим 0 вместо NaN */}
      <h4>Средний рейтинг: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

// FeedbackStats.propTypes = {
//     feedback: PropTypes.array.isRequired,
// }


export default FeedbackStats

