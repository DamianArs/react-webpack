import * as React from 'react'
import { StoreContext } from './StoreProvider'

export const Jeden = () => {
  const nowy = React.useContext(StoreContext)
  console.log(nowy);

  return(
    <h1>Jeden</h1>
  )
}