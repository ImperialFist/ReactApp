import React from 'react'
import {FaTimes} from 'react-icons/fa'
import Card from './shared/Card'
import PropTypes from 'prop-types'

function FeedbackItem({item, handleDelete}) {
    // const [rating, setRating] = useState(7);
    // const [text, setText] = useState('This is an example of feedback item');

    // const handleClick = ()=>{
    //     setRating((prev)=>{
    //         return prev+1;
    //     });
    // }



  return (
    <Card >
      <div className="num-display">{item.rating}</div>
      {/* тригерим нажатие удаления */}
      <button onClick={()=> handleDelete(item.id)} className="close">
        <FaTimes color='blue' />
      </button>
      <div className="text-display">{item.text}</div>
        {/* <button onClick={handleClick}>Click me</button> */}
    </Card>
  )
}


//проверка типов отзыва
FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}



export default FeedbackItem
