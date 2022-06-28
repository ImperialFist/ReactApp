import { createContext, useState } from "react"; 
//Для генерации ID-шников npm i uuid
import {v4 as uuidv4} from 'uuid'   


const FeedbackContext = createContext();

export const FeedbackProvider = ({children})=>{
    
    const [feedback, setFeedback] = useState([
        {
            id:1,
            text: 'This item is from context',
            rating: 10,
        },
        {
            id: 2,
            rating: 9,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quos repellat ipsum quam ducimus facilis perspiciatis eum, aperiam aut asperiores cupiditate magni aliquam fuga culpa, dolores rem quis in non?",
        },
        {
            id: 3,
            rating: 6,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quos repellat ipsum quam ducimus facilis perspiciatis eum, aperiam aut asperiores cupiditate magni aliquam fuga culpa, dolores rem quis in non?",
        },


    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item:{},
        edit: false,
    })

    // Удаляет комментарий
    const deleteFeedback = (id)=>{
        if(window.confirm('Вы действительно хотите удалить отзыв?')){
            // Формируем новый массив БЕЗ того коммента, id которого удалили
            setFeedback(feedback.filter((item)=>item.id !==id))
        }
    }

    // Добавляет комментарий
    const addFeedback = (newFeedback)=>{
        newFeedback.id = uuidv4();
        //создаём копию массива с отзывами, на первое место новый, остальные в конец
        setFeedback([newFeedback, ...feedback]);
    }

    // задаёт комментарию статус "На изменениее"
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
    } 

    //Обновить данные
    const updateFeedback= (id, updItem)=>{
        setFeedback(
            feedback.map((item)=>item.id===id?{
            ...item, ...updItem} : item
        ))
    }

    
    return <FeedbackContext.Provider value={{
        feedback,
        //то что хранит и будет передавать данные нажатия
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        //функция обработчик нажатия на Edit
        editFeedback,
        //функция обновляет содержимое отзыва
        updateFeedback

    }}>
        {children};
    </FeedbackContext.Provider>


}


export default FeedbackContext