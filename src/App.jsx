import './styles/App.css';
import MyRoutes from './routes/MyRoutes';
import HomePage from './pages/HomePage';
import { useLocation,Routes,Route } from 'react-router-dom';

const discluded = ["/Login", "/Register", "/Dashboard", "/Create"];

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {discluded.every((route) => route !== location.pathname) && 
      <Routes>
        <Route path="/Home" element={<HomePage/>}/> 
      </Routes>}
      <MyRoutes/>
    </div>
  );
}

export default App;
