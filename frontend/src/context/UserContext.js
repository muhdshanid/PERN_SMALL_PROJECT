import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ loggedIn: null });

  useEffect(()=>{
    fetch(`${process.env.REACT_APP_SERVER_URL}/account`,{credentials:"include"}).then(res => res.json())
    .then(data => {
      console.log(data);
      setUser({...data})
    })
  },[])
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
