import React, { useEffect, useState } from 'react';
import './App.css'


function App() {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    // Requisição GET para listar usuários
    fetch('http://localhost:8080/usuarios')
      .then(response => response.json()) // converte a resposta para JSON
      .then(data => setUsuarios(data))    // armazena os dados no estado
      .catch(error => console.error('Erro ao buscar usuários:', error));
  }, []); // O useEffect roda apenas uma vez quando o componente é montado


  return (
    <>
      <div>
        <h1>Lista de Usuários</h1>
        <ul>
          {usuarios.map(usuario => (
            <li key={usuario.id}>{usuario.nome}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
