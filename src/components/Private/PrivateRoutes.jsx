import { Navigate, Outlet } from "react-router-dom"

const PrivateRoutes = () => {
    let auth = {session : sessionStorage.getItem('sess')}
  return (
    auth.session ? <Outlet/> : <Navigate to={'/'} />
  )
}

export default PrivateRoutes 