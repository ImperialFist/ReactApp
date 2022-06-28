
//Для генерации ID-шников npm i uuid
import {v4 as uuidv4} from 'uuid'
import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./Data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'
//Для подключения маршрутов позволит переходить к "/about" вместо "/#about"
//Для # заменить "BrowserRouter" на "HashRouter"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AboutIconLink from './components/AboutIconLink'


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
        <Router>
          <Header />
          <div className="container">
            <Routes>
                <Route exact path='/' element={
                    <>
                        <FeedbackForm handleAdd={addFeedback}/>
                        <FeedbackStats feedback={feedback}/>
                        {/* пробрасываем Delete в FeedbackList */}
                        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
                        <AboutIconLink />
                    </>
                }>
                </Route>

                {/* маршрут к стринице about */}
                <Route path='/about' element={<AboutPage />} />
            </Routes>
          </div>
        </Router>
    )
}

export default App