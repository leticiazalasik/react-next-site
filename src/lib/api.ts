import axios from "axios"

// Usando a API do JSONPlaceholder como exemplo
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
})

export interface Post {
  id: number
  title: string
  body: string
  userId: number
}

export async function getPosts(): Promise<Post[]> {
  const response = await api.get<Post[]>("/posts")
  return response.data
}

export async function getPost(id: number): Promise<Post> {
  const response = await api.get<Post>(`/posts/${id}`)
  return response.data
}

// Outra API
// src/services/api.ts

const apiQuotes = axios.create({
  baseURL: 'https://api.allorigins.win/raw?url=https://zenquotes.io/api/random',
});

export interface Quote {
  id: number;
  q: string;
  a: string;
}

export async function getQuotes(): Promise<Quote[]> {
  try {
    const response = await apiQuotes.get('/quotes'); // Verifique se o endpoint está correto
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar citações:', error);
    throw new Error('Não foi possível obter citações. Tente novamente mais tarde.');
  }
}


export async function getQuote(id: number): Promise<Quote> {
  const response = await api.get<Quote>(`/quotes/${id}`)
  return response.data
}