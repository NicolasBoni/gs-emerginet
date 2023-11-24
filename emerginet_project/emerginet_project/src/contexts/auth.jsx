import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userToken = sessionStorage.getItem("user_token");
    const usersStorage = sessionStorage.getItem("users_bd");

    if (userToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage)?.filter(
        (user) => user.email === JSON.parse(userToken).email 
      );

      if (hasUser) setUser(hasUser[0]);
    }
  }, []);

 const getUser = async (email, nome) => {
  try {
    const url = `http://localhost:3001/users?email=${encodeURIComponent(email)}&nome=${encodeURIComponent(nome)}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Falha ao buscar dados do usuário');
    }

    const userData = await response.json();
    return userData;

  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    return null;
  }
};

  const signin = (email, password) => {
    const usersStorage = JSON.parse(sessionStorage.getItem("users_bd"));
  
    const hasUser = usersStorage?.find((user) => user.email === email);
  
    if (hasUser) {
      if (hasUser.email === email && hasUser.password === password) {
        const token = Math.random().toString(36).substring(2);
        sessionStorage.setItem("user_token", JSON.stringify({ email, token }));
        // Atualiza o estado do usuário com as informações relevantes, incluindo o nome
        setUser({ email, password, nome: hasUser.nome });
        return;
      } else {
        return "E-mail ou senha incorretos";
      }
    } else {
      return "Usuário não cadastrado";
    }
  };
  const signup = (email, password, nome) => {
    const usersStorage = JSON.parse(sessionStorage.getItem("users_bd"));

    const hasUser = usersStorage?.filter((user) => user.email === email);

    if (hasUser?.length) {
      return "Já tem uma conta com esse E-mail";
    }

    let newUser;

    if (usersStorage) {
      newUser = [...usersStorage, { email, password , nome}];
    } else {
      newUser = [{ email, password , nome }];
    }

    sessionStorage.setItem("users_bd", JSON.stringify(newUser));

    return;
  };

  const signout = () => {
    setUser(null);
    sessionStorage.removeItem("user_token")
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout, getUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
