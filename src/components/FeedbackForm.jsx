import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm({handleAdd}) {

    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const [glowError, setGlowError] = useState(false);

    const handleTextChange = (e)=>{
        if(text===''){
            setBtnDisabled(true);
            setMessage(null)
        }else if(text !== '' && text.trim().length<=10){
            setGlowError(true);
            setBtnDisabled(true);
            setMessage('Комментарий должен быть не меньше 10 символов');
            // setText(e.target.value);
        } else {
            setGlowError(false);
            setMessage(null);
            setBtnDisabled(false);
        }
            setText(e.target.value);
        
    }
    //Перехват введённых данных в форму
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(text.trim().length>10){
            const newFeedback= {
                text,
                rating
            }
            handleAdd(newFeedback);
            setText('');
        }
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>
                Как вы оцените наш сервис?
            </h2>
            <RatingSelect select={(rating)=>{setRating(rating)}}/>
            <div className={`input-group ${glowError && 'glow-error'}`}>
                <input 
                    className='input-field'
                    onChange={handleTextChange} 
                    type="text" 
                    placeholder='Оставьте отзыв' 
                    value={text}
                />
           
                    <Button type='submit' isDisabled={btnDisabled} >
                        Send
                    </Button>
            </div>
            {message && <p className='message'>{message}</p>}
        </form>

    </Card>
  )
}



export default FeedbackForm
