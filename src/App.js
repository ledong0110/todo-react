import { useRef } from 'react'
import { useStore, actions } from './store'
import './App.css'

function App() {

  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;
  const inputRef = useRef();
    //console.log(state);
  
  const handleAdd = () => {

    if (!todoInput)
    {
      alert('Well, please submit a job !!!')
    }
    else
    {
      dispatch(actions.setTodoAdd(todoInput));
      
      dispatch(actions.setTodoInput(''));
      inputRef.current.focus();
    }
  }
  const handleDelete = (idx) => {
    console.log(idx);
    dispatch(actions.setTodoDelete(idx));
  }

  return (
    <>
      <h1 className='center-red'>Simple Todo List</h1>
      <div style={{padding: 20}}>
        <input
          ref={inputRef} 
          type='text'
          className='center-block'
          value={todoInput}
          placeholder="Enter todo..."
          onChange = {e => {
            dispatch(actions.setTodoInput(e.target.value))
          }}
        />
        <button className='btn center-block' onClick={handleAdd}>Add</button>
        <ul className='todo'>
          {todos.map((todo, idx) => (
            
            <li key={idx}>{todo} <span className='btn-delete' onClick={() => handleDelete(idx)}>&times;</span></li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
