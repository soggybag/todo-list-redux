import { useSelector } from 'react-redux'

function TodoList() { // Look no props! 
	const todos = useSelector(state => state.value)

	return (
		<>
		<ul>
			{
				todos.map(todo => 
					(<li key={todo.name}>
						<span>{todo.name}</span> - 
						<span>{todo.priority}</span></li>
					))
			}
		</ul>
		</>
	)
}

export default TodoList