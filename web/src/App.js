import React, { useState, useEffect } from 'react';
import api from './services/api'

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevForm from './components/DevItem/DevForm'
import DevItem from './components/DevItem'
//Compononetes: bloco isolado de html,css e js , o qual nao interfere no restante da aplicação 
//Estado: 
//Propriedade: informação que um componente PAI passa para o componenete Filho


function App() {
  const [devs, setDevs] = useState([])



  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data)
    }
    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data)


    setDevs([...devs, response.data]);

  }


  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>

        <DevForm onsubmit={handleAddDev} />

      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
