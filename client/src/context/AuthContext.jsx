import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const local = localStorage.getItem("CareerUser");
    return local ? JSON.parse(local) : null;
  });

  let logoutTimer;

  const login = (data) => {
    localStorage.setItem("CareerUser", JSON.stringify(data));
    localStorage.setItem("logoutTime", Date.now() + 3 * 60 * 60 * 1000); // 3 hours
    setUser(data);

    // Set logout timer
    logoutTimer = setTimeout(() => {
      logout();
      alert("⏰ Session expired. Please log in again.");
    }, 3 * 60 * 60 * 1000);
  };

  const logout = () => {
    localStorage.removeItem("CareerUser");
    localStorage.removeItem("logoutTime");
    setUser(null);
    if (logoutTimer) clearTimeout(logoutTimer);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("CareerUser");
    const logoutTime = localStorage.getItem("logoutTime");

    if (storedUser && logoutTime) {
      if (Date.now() < parseInt(logoutTime)) {
        setUser(JSON.parse(storedUser));
        const remaining = parseInt(logoutTime) - Date.now();

        // Reset timer on reload
        logoutTimer = setTimeout(() => {
          logout();
          alert("⏰ Session expired. Please log in again.");
        }, remaining);
      } else {
        logout(); // Session expired
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
