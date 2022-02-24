import React,{ createContext, useState, useEffect } from 'react'

const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({
      isAuthenticated:false,
      text:'www'
  })
  const [currentPage,setPage] = useState({
      pageIndex:2,
  })


  const setPageIndex = (index) => {
    console.log(typeof index)
    let int_value=+index
    setPage({pageIndex:int_value})
  }
  

  return (
    <Context.Provider
      value={{
        user,
        currentPage,
        setPageIndex,
        
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
