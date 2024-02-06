import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'
import './App.css';

function App() {
  // No state 
  return (
    <div className="App">
      <header className="App-header">
        <TodoForm />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
