import './styles/App.css';
import MyRoutes from './routes/MyRoutes';
import HomePage from './pages/HomePage';
import { useLocation } from 'react-router-dom';

const discluded = ["/Login", "/Register", "/Dashboard"];

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {discluded.every((route) => route !== location.pathname) && <HomePage/>}
      <MyRoutes/>
    </div>
  );
}

export default App;
