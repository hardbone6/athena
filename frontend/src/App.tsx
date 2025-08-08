import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import FormPage from './pages/FormPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}> 
        <Route index element={<Dashboard />} />
        <Route path="form" element={<FormPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
