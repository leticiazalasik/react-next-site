import Image from "next/image"
import { getPost } from "@/lib/api"
import Link from "next/link"

export default async function PostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPost(parseInt(params.slug))

  return (
    <article className="max-w-3xl mx-auto">
      <div className="relative mb-8">
        <Image
          src={`https://picsum.photos/seed/${post.id}/800/600`}
          alt="Post cover"
          width={800}
          height={400}
          className="object-cover w-full h-[400px] rounded-lg"
          priority
        />
      </div>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="prose lg:prose-xl">
        <p>{post.body}</p>
        
        <div className="text-blue-600 hover:text-blue-800 font-medium">
  <a href="javascript:history.back()" className="inline-block text-blue-600 hover:text-blue-800">
    ← VOLTAR
  </a>
</div>



      </div>
    </article>
  )
}