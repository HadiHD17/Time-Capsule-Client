import './styles/App.css';
import MyRoutes from './routes/MyRoutes';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <HomePage/>
      <MyRoutes/>
    </div>
  );
}

export default App;
