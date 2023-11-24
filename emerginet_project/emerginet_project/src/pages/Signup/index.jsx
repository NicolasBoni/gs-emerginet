import React, { useState } from "react";
import Input from "../../components/Input/index";
import Button from "../../components/Button/index";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = async () => {
    if (!id || !nome || !email || !emailConf || !senha) {
      setError("Todos os campos devem ser preenchidos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }
  
    const res = signup(email, senha, nome);
  
    if (res) {
      setError(res);
      return;
    }
  
    // Adiciona o usuário ao JSON Server
    try {
      const newUser = { id, nome, email, senha };
      const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
  
      if (!response.ok) {
        throw new Error('Erro ao salvar os dados no servidor');
      }
  
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    } catch (error) {
      setError("Erro ao cadastrar: " + error.message);
    }
  };

  return (
    <C.Container>
      
      <C.Content>
      <C.Label>SISTEMA DE REGISTRO</C.Label>
        <Input
          type="text"
          placeholder="Digite um ID"
          value={id}
          onChange={(e) => { setId(e.target.value); setError(""); }}
        />
        <Input
          type="text"
          placeholder="Digite seu Nome"
          value={nome}
          onChange={(e) => { setNome(e.target.value); setError(""); }}
        />
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setError(""); }}
        />
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => { setEmailConf(e.target.value); setError(""); }}
        />
        <Input
          type="password"
          placeholder="Digite uma Senha"
          value={senha}
          onChange={(e) => { setSenha(e.target.value); setError(""); }}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Inscrever-se" onClick={handleSignup} />
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;