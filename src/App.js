// раньше нужно было подключать всегда
//React.createElement('div',{className='container'})
//import React from 'react'
//Для генерации ID-шников npm i uuid
import {v4 as uuidv4} from 'uuid'
import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./Data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"

function App () {
    //setFeedback - для всеъ манипуляций с отзывами - удалять, добавлять
    const [feedback, setFeedback] = useState(FeedbackData);

    const addFeedback = (newFeedback)=>{
        newFeedback.id = uuidv4();
        //создаём копию массива с отзывами, на первое место новый, остальные в конец
        setFeedback([newFeedback, ...feedback]);
    }

    const deleteFeedback = (id)=>{
        if(window.confirm('Вы действительно хотите удалить отзыв?')){
            // Формируем новый массив БЕЗ того коммента, id которого удалили
            setFeedback(feedback.filter((item)=>item.id !==id))
        }
    }

    return(
        <>
          <Header />
          <div className="container">
            <FeedbackForm handleAdd={addFeedback}/>
            <FeedbackStats feedback={feedback}/>
            {/* пробрасываем Delete в FeedbackList */}
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
          </div>
        </>
    )
}

export default App