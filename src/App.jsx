import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './routes/PrivateRoute';
import RootLayouts from './Layout/RootLayouts';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayouts />}>
       
        <Route
          index
          element={
            <div className="mt-10">
              <h1 className="text-2xl font-bold mb-2">
                URL Shortener
              </h1>
              <p className="text-sm text-gray-600">
                Login or register to manage your short URLs.
              </p>
            </div>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
