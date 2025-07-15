import './styles/App.css';
import MyRoutes from './routes/MyRoutes';
import HomePage from './pages/HomePage';
import { useLocation,Routes,Route } from 'react-router-dom';

const discluded = ["/Login", "/Register", "/Dashboard", "/Public"];

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {discluded.every((route) => route !== location.pathname) && 
      <Routes>
        <Route path="/" element={<HomePage/>}/> 
      </Routes>}
      <MyRoutes/>
    </div>
  );
}

export default App;
