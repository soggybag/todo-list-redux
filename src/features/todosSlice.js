import { createSlice } from '@reduxjs/toolkit' // 1

// 2
const initialState = {
  value: [{ name: 'hello', priority: 'Normal'}],
}

// 3
export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			state.value.push(action.payload)
		},
		deleteTodo: (state, action) => {
			state.value.splice(action.payload, 1)
		}
	}
})

export const { addTodo, deleteTodo } = todosSlice.actions
export default todosSlice.reducer
