import Image from 'next/image';

export default async function NotFound() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Erro: Page not Found</h1>
      <Image
        src="/not-found-gato.jpg" // Caminho da imagem
        alt="gato-triste"
        width={370} // Definindo a largura da imagem
        height={150} // Definindo a altura da imagem
      />
    </div>
  );
}
