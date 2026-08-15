import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import MenuCategory from './pages/menu/MenuCategory';
import Menu from './pages/menu/Menu';

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/menu/:category" element={<MenuCategory />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
