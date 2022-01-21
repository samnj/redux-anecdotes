import React from 'react'
import { connect } from 'react-redux'
import { filterAnecdotes } from '../reducers/filterReducer'


const Filter = ({ filterAnecdotes }) => {
  const handleChange = (e) => {
    const filter = e.target.value.toLowerCase()
    filterAnecdotes(filter)
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default connect(
  null,
  { filterAnecdotes }
)(Filter)