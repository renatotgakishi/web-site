import configPromise from '@payload-config'
import { getPayload } from 'payload'
import Link from 'next/link'
import { Media } from '@/components/Media'
import './styles.css'

type Props = {
  titulo?: string
}

export const BlogBlock = async ({ titulo }: Props) => {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    where: { _status: { equals: 'published' } },
    sort: '-publishedAt',
    limit: 3,
    depth: 1,
  })

  if (posts.docs.length === 0) return null

  return (
    <section id="blog" className="blog">
      <div className="heading">
        <h2>{titulo || 'Últimos Posts'}</h2>
        <p>Novidades do blog</p>
      </div>
      <div className="content">
        {posts.docs.map((post: any) => (
          <Link key={post.id} href={`/posts/${post.slug}`} className="blogBx">
            <div className="imgBx">
              {post.heroImage ? (
                <Media resource={post.heroImage} imgClassName="img" />
              ) : (
                <div className="img" style={{ background: '#222' }} />
              )}
            </div>
            <div className="text">
              <h3>{post.title}</h3>
              <span>Ler mais →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
