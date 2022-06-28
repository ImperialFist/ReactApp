

import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
// import FeedbackData from "./Data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'
//Для подключения маршрутов позволит переходить к "/about" вместо "/#about"
//Для # заменить "BrowserRouter" на "HashRouter"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AboutIconLink from './components/AboutIconLink'


function App () {
    // НЕ нужен с КОНТЕКСТОМ
    // //setFeedback - для всеъ манипуляций с отзывами - удалять, добавлять
    // const [feedback, setFeedback] = useState(FeedbackData);



    return(
        <FeedbackProvider>
            <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm />
                            <FeedbackStats />
                            {/* пробрасываем Delete в FeedbackList */}
                            <FeedbackList />
                            <AboutIconLink />
                        </>
                    }>
                    </Route>

                    {/* маршрут к стринице about */}
                    <Route path='/about' element={<AboutPage />} />
                </Routes>
            </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App