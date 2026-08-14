import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

function Home() {
    return (
        <main className="pt-20">
            <section className="flex min-h-screen items-center justify-center">
                <h1 className="text-5xl font-light tracking-widest">KAZOKU</h1>
            </section>
        </main>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
