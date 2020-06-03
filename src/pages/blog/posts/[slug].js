import { useRouter } from 'next/router'

import ErrorPage from 'next/error'
import PostCatalog from '../../../components/blog/post-catalog';


import BaseLayout from '../../../components/layouts/base';

import { getPostBySlug, getAllPosts } from '../../lib/api/blog';
import PostContent from '../../../components/blog/post-content';

import MarkdownIt from 'markdown-it';

import MarkdonwItAnchor from 'markdown-it-anchor';


export default function Post({ post = {} }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <BaseLayout>
      <section className="container mx-auto px-2 py-2 md:py-4 md:px-6 ">
        <main className="p-8 bg-white">

          <header className="mb-6 pb-5 border-b border-gray-400">
            <div className="text-sm">
              <span className="mr-3">{post.date}</span><PostCatalog catalog={post.catalog} />
            </div>
            <h1 className="text-3xl ">{post.title}</h1>
            <div>
              <span className="text-sm text-gray-700">Author:</span> {post.author.name}
            </div>
          </header>
          <PostContent content={post.content} />
        </main>
      </section>
    </BaseLayout>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'catalog',
    'coverImage',
  ])
  const content = new MarkdownIt().use(MarkdonwItAnchor).render(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])
  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}
