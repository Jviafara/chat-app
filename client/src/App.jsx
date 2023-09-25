import { Route, Routes } from 'react-router-dom';
import ChatsPage from './Pages/ChatsPage';
import HomePage from './Pages/HomePage';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/chats" element={<ChatsPage />} />
            </Routes>
        </div>
    );
}

export default App;
