import React,{ createContext,useState } from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(()=>{
        const local = localStorage.getItem('CareerUser');
        return local ? JSON.parse(local) : null;
    });
    const login = (data) =>{
        localStorage.setItem("CareerUser", JSON.stringify(data));
        setUser(data);
    }
    const logout = () => {
        localStorage.removeItem("CareerUser");
        setUser(null);
    }
  return (
    <AuthContext.Provider value={{ user,login,logout }}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext