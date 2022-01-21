const anecdoteReducer = (state = [], action) => {
  switch(action.type) {
  case 'INIT_ANECDOTES':
    return action.data
  case 'VOTE': {
    const id = action.data.id
    const anecdoteToVote = state.find(a => a.id === id)
    const changedAnecdote = {
      ...anecdoteToVote,
      votes: anecdoteToVote.votes + 1
    }
    return state.map(anecdote =>
      anecdote.id !== id ? anecdote : changedAnecdote)
  }
  case 'NEW_ANECDOTE':
    return [...state, action.data]
  default:
    return state
  }
}

export const initAnecdotes = (data) => {
  return {
    type: 'INIT_ANECDOTES',
    data,
  }
}

export const vote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const createAnecdote = (data) => {
  return {
    type: 'NEW_ANECDOTE',
    data,
  }
}

export default anecdoteReducer