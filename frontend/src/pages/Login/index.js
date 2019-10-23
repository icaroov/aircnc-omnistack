import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {
    const [email, setEmail] = useState('');

  async function handleSubmit(event){
    event.preventDefault();

    const response = await api.post('/sessions', { email });

    const { _id } = response.data; //pegar o id do data

    localStorage.setItem('user', _id); //banco de dados do browser

    history.push('/dashboard');
  }

    return (
    <>
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para a sua empresa
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>

          <input 
          type="email" 
          id="email" 
          placeholder="Seu melhor e-mail..." 
          value={email}
          onChange={event => setEmail(event.target.value)} //pegar o email
          />

          <button 
          className="btn" 
          type="submit">Entrar
          </button>
        </form>
    </>
    )
}