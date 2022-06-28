import React from 'react'
import {FaTimes} from 'react-icons/fa'
import {FaEdit} from 'react-icons/fa'
import { useContext } from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'
function FeedbackItem({item}) {
    // const [rating, setRating] = useState(7);
    // const [text, setText] = useState('This is an example of feedback item');

    // const handleClick = ()=>{
    //     setRating((prev)=>{
    //         return prev+1;
    //     });
    // }

  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

  return (
    <Card >
      <div className="num-display">{item.rating}</div>
      {/* тригерим нажатие удаления */}
      <button onClick={()=> deleteFeedback(item.id)} className="close">
        <FaTimes color='blue' />
      </button>
      <button onClick={()=> editFeedback(item)} className="edit">
        <FaEdit color='blue'/>
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
