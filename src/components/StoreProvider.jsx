import * as React from 'react'
import { request } from '../helpers/request'

export const StoreContext = React.createContext(null)

export const StoreProvider = ({children}) => {
  const[courses, setCourses] = React.useState([])
  const[user, setUser] = React.useState(false)
  
  const fetch = async() =>{
    const data = await request.get('/users')
  
    setCourses(data.data)
    
  }

  React.useEffect(()=>{
    fetch()
  },[])
  return(
    <StoreContext.Provider value={{courses, user}}>
      {children}
    </StoreContext.Provider>
  )
}