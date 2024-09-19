import './App.css';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import ChatPage from './Pages/ChatPage';
import HomePage from './Pages/HomePage';


function App() {
  return (
    <div className="App">
      <Route path="/" component={HomePage}/>
       <Route path="/chats" component={ChatPage} /> 
    </div>
  );
}

export default App;
