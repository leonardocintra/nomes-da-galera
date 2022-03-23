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


  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido} />
      </Layout>
    </div>
  )
}
