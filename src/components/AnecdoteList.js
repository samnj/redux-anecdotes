import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  const sortFn = (a, b) => {
    return b.votes - a.votes
  }

  const visibleAnecdotes = () => {
    if (filter === '') {
      return anecdotes
    }

    return anecdotes.filter(a =>
      a.content.toLowerCase().includes(filter))
  }

  const voteHandler = (anecdote) => {
    dispatch(vote(anecdote.id))
    const message = `you voted '${anecdote.content}'`
    dispatch(setNotification(message))
    setTimeout(() => {
      dispatch(removeNotification(message))
    }, 5000)
  }

  return (
    <div>
      {visibleAnecdotes()
        .sort(sortFn)
        .map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => voteHandler(anecdote)}>vote</button>
            </div>
          </div>
        )}
    </div>
  )
}

export default AnecdoteList