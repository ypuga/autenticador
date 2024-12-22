import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../../Auth/Pages/LoginPage'
import LoadingSystemPage from '../../Auth/Pages/LoadingSystemPage'
import { useSelector } from 'react-redux'

const AuthRoutes = () => {

    const {isCheckingAuth} = useSelector(state=>state.sistema);

  return (
    <Routes>
        {isCheckingAuth ?
        <>
            <Route path='/*' element={<LoadingSystemPage/>}/>
        </>
        :
        <>
            <Route path='/*' element={<LoginPage/>}/>
        </>
        }
    </Routes>
  )
}

export default AuthRoutes
