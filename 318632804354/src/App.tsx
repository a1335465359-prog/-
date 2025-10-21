import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import CategoryPage from "@/pages/CategoryPage";
import SheinGlobalPage from "@/pages/SheinGlobalPage";
import { useState } from "react";
import { AuthContext } from '@/contexts/authContext';
import BackgroundManager from '@/components/BackgroundManager';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      <BackgroundManager>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/shein-global" element={<SheinGlobalPage />} />
        </Routes>
      </BackgroundManager>
    </AuthContext.Provider>
  );
}
