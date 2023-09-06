import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Trending from '../pages/trending/Trending';
import Details from '../pages/details/Details';
import PageLayout from '../pages/pageLayout';
import Login from '../pages/Logon/Login';
import Singup from '../pages/singup/Singup';

const Router = () => {

    return(
        <div>
          <BrowserRouter>
            <PageLayout>
            <Routes>
            <Route path="/" element={<Trending/>} />
            <Route path="/signup" element={<Singup/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/movie/:id" element={<Details/>} />
            </Routes>
            </PageLayout>
          </BrowserRouter>
        </div>
    )
}

export default Router;

