import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Users from './pages/Users';
import ProtectedRoute from './components/ProtectedRoute '; // Adjust the import path as necessary

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        
        {/* Protecting the Dashboard and Users routes */}
        <Route 
          path='/Dashboard' 
          element={
            <ProtectedRoute component={Dashboard} />
          }
        />
        <Route 
          path='/users' 
          element={
            <ProtectedRoute component={Users} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
