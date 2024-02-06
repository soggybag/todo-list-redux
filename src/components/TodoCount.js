import { useSelector } from 'react-redux'

function TodoCount() {
	const todosCount = useSelector(state => state.value.length)
	return (
		<p>Todos: {todosCount}</p>
	)
}

export default TodoCount