import React from 'react'
import { MovieList } from '../components'

export default function Movie({ movieList, isLoading }) {
  return (
    <div>
        <MovieList movieList={movieList} isLoading={isLoading} />
    </div>
  )
}
