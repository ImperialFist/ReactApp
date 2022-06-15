// раньше нужно было подключать всегда
//React.createElement('div',{className='container'})
//import React from 'react'
import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./Data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"

function App () {
    const [feedback, setFeedback] = useState(FeedbackData);
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
                <FeedbackStats feedback={feedback}/>
                {/* пробрасываем Delete в FeedbackList */}
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
            </div>
        </>
    )
}

export default App