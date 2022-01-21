import anecdotesService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  switch(action.type) {
  case 'INIT_ANECDOTES':
    return action.data
  case 'NEW_ANECDOTE':
    return [...state, action.data]
  case 'VOTE': {
    const id = action.data.id
    return state.map(anecdote =>
      anecdote.id !== id ? anecdote : action.data)
  }
  default:
    return state
  }
}

export const initAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdotesService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const vote = (content) => {
  return async dispatch => {
    const updatedAnecdote = await anecdotesService.update(content)
    dispatch({
      type: 'VOTE',
      data: updatedAnecdote
    })
  }
}

export default anecdoteReducer