import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../model/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Ana', 23, '1'),
    new Cliente('Maria', 25, '1'),
    new Cliente('Juliana', 43, '1'),
    new Cliente('Ronaldo', 13, '1')
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.nome)
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente)
  }

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')


  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" onClick={() => setVisivel('form')}>
                Novo cliente
              </Botao>
            </div>
            <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido} />
          </>
        ) : (
          <Formulario 
            cliente={clientes[1]}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')} />
        )}
      </Layout>
    </div>
  )
}
