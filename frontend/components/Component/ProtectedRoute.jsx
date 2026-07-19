import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children, auth }) {
  if (!auth) {
    return <Navigate to='/owner/login' replace />
  }

  return children
}
export default ProtectedRoute;