import * as React from 'react'
import '../App.scss'
import { StoreContext } from './StoreProvider'

export const Header = () => {
  const Context = React.useContext(StoreContext)
  const {courses, user} = Context
  console.log('ddd', courses);
  return(
    <div className='header'>
      <h1>Super kursy dla programistów</h1>
      <button>{user ? 'Wyloguj' : 'Zaloguj'}</button>
    </div>
  )
}