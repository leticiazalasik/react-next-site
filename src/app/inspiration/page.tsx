'use client';

import { useEffect, useState } from "react";
import { Quote } from "@/lib/api"; // Importando a interface Quote para tipagem

export default function InspirationPage() {
  const [quote, setQuote] = useState<Quote | null>(null); // Estado para armazenar uma citação
  const [loading, setLoading] = useState(true); // Estado para controle de carregamento
  const [error, setError] = useState<string | null>(null); // Estado para controle de erro

  // Função para buscar a citação
  useEffect(() => {
    // Função para buscar a citação aleatória
    async function fetchQuote() {
      try {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random?${Date.now()}`); // Passando o timestamp para evitar cache
        const data = await response.json();
        
        if (response.ok) {
          setQuote(data[0]); // Configura o estado com a citação recebida
        } else {
          throw new Error('Erro ao buscar citação');
        }
      } catch (error) {
        setError("Erro ao carregar citação. Tente novamente mais tarde.");
      } finally {
        setLoading(false); // Marca o carregamento como concluído
      }
    }

    fetchQuote(); // Chama a função de requisição da citação
  }, []); // O useEffect é executado apenas uma vez quando o componente é montado

  // Exibe o carregamento ou o erro, caso necessário
  if (loading) {
    return <p>Carregando citação...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4">Inspire-se!</h1>
      <div className="mb-4 p-4 border rounded-md shadow-md">
        {/* Exibe a citação aleatória */}
        <p className="text-xl">"{quote?.q}"</p>
        <p className="text-gray-500 text-sm">- {quote?.a}</p>
      </div>
    </div>
  );
}
