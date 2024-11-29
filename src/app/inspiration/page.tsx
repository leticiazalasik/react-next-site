'use client'; // Indica que este componente é do lado do cliente (React)

import { useEffect, useState } from "react"; // Importa hooks para manipulação do estado e efeito colateral
import { Quote } from "@/lib/api"; // Importa a interface Quote para tipar as cotações que recebemos da API

export default function InspirationPage() {
  // Definindo os estados para armazenar dados da citação, controle de carregamento e erro
  const [quote, setQuote] = useState<Quote | null>(null); // Armazena a citação recebida ou null inicialmente
  const [loading, setLoading] = useState(true); // Controla o estado de carregamento da citação
  const [error, setError] = useState<string | null>(null); // Controla o estado de erro, caso ocorra durante a requisição

  // useEffect é chamado quando o componente é montado e é utilizado para buscar dados da API
  useEffect(() => {
    // Função assíncrona para fazer a requisição à API
    async function fetchQuote() {
      try {
        // Faz a requisição para o proxy configurado em localhost (ajuda a evitar problemas de CORS)
        const response = await fetch(`http://localhost:3000/proxy/api/random?${Date.now()}`);
        
        // Converte a resposta para JSON
        const data = await response.json();

        // Se a resposta da API for bem-sucedida, define a citação no estado
        if (response.ok) {
          setQuote(data[0]); // Como a API retorna uma lista, pegamos o primeiro item
        } else {
          // Se a resposta não for bem-sucedida, lança um erro
          throw new Error('Erro ao buscar citação');
        }
      } catch (error) {
        // Se ocorrer algum erro na requisição, configura o erro no estado
        setError("Erro ao carregar citação. Tente novamente mais tarde.");
      } finally {
        // Finaliza o carregamento, independentemente do sucesso ou erro
        setLoading(false);
      }
    }

    fetchQuote(); // Chama a função de requisição assim que o componente é montado
  }, []); // O array vazio [] garante que o useEffect será executado apenas uma vez, quando o componente for montado

  // Exibe uma mensagem de carregamento enquanto a citação está sendo buscada
  if (loading) {
    return <p>Carregando citação...</p>;
  }

  // Exibe uma mensagem de erro, caso algo tenha dado errado
  if (error) {
    return <p>{error}</p>;
  }

  // Se tudo estiver certo, exibe a citação recebida da API
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4">Inspire-se!</h1>
      <div className="mb-4 p-4 border rounded-md shadow-md">
        {/* Exibe a citação aleatória */}
        <p className="text-xl">"{quote?.q}"</p> {/* Exibe o texto da citação */}
        <p className="text-gray-500 text-sm">- {quote?.a}</p> {/* Exibe o autor da citação */}
      </div>
    </div>
  );
}
