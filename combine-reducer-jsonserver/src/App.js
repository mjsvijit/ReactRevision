
import './App.css';
import { Counter } from './components/Counter/Counter';
import Todo from './components/Todos/Todo';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <Todo />
      
    </div>
  );
}

export default App;
