'use client';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm('manylqnp');
  if (state.succeeded) {
    return <p>Mensagem enviada! Retornaremos assim que possível.</p>;
  }
  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Contato</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center space-x-4">
          <label htmlFor="email" className="w-24 text-gray-700">
            E-mail:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="flex-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite seu e-mail"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 mb-2">
            Mensagem:
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite sua mensagem"
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default function Page() {
  return <ContactForm />;
}
