import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todosSlice'
import TodoCount from './TodoCount'

function TodoForm() { // Look no props!
  const [name, setName] = useState('')
	const [priority, setPriority] = useState('Normal')
	const dispatch = useDispatch()
 
  return (
    <div>
			<label>
				Name:
				<input 
					type="text"
					onChange={(e) => setName(e.target.value)}
					value={name}
				/>
			 </label>
			 <label>
				Priority
				<select 
					value={priority}
					onChange={e => setPriority(e.target.value)}
				>
					<option value="Low">Low</option>
					<option value="Normal">Normal</option>
					<option value="Important">Important</option>
				</select>
			 </label>
			 <button
			 	onClick={() => dispatch( addTodo({ name, priority } ))}
			 >Create</button>
			 <TodoCount />
      </div>
   )
}

export default TodoForm