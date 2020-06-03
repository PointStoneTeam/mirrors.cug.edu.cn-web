import { useRouter } from 'next/router'

import ErrorPage from 'next/error'
import PostCatalog from '../../components/blog/post-catalog';


import BaseLayout from '../../components/layouts/base';

import { getDocBySlug, getAllDocs } from '../../lib/api/docs';
import DocContent from '../../components/docs/doc-content.js';

import MarkdownIt from 'markdown-it';

import MarkdonwItAnchor from 'markdown-it-anchor';

import Link from 'next/link'


export default function Doc({ doc, allDocs }) {
  return (
    <BaseLayout>
      <section className="container mx-auto px-2 py-2 md:py-4 md:px-6">
        <main className="flex">
          <aside className="hidden md:block mr-6 flex-shrink-0 flex-grow-0">
            <ul>
              {allDocs.map(item => (
                <li
                  className={`py-2 px-3 text-gray-700  ${item.slug === 'overview' ? 'mb-4' : ''}  rounded-l-md ${item.slug === doc.slug ? 'bg-indigo-200 text-indigo-500 border-r-4 border-indigo-400' : 'hover:text-indigo-500'}`}
                  key={item.slug}>
                  {item.slug === doc.slug ? (<a className="cursor-default">{item.title}</a>) : (
                    <Link href={`/docs/${item.slug}`}>
                      <a>{item.title}</a>
                    </Link>
                  )
                  }

                </li>
              ))
              }
            </ul>
          </aside>
          <section className="bg-white p-6 w-full md:w-auto md:flex-grow">
            <DocContent content={doc.content} />
          </section>
        </main>
      </section>
    </BaseLayout>
  )
}

export async function getStaticProps({ params }) {
  const doc = getDocBySlug(params.slug, ['slug', 'title', 'content']);

  const content = new MarkdownIt().use(MarkdonwItAnchor).render(doc.content || '')

  const allDocs = getAllDocs(['slug', 'title']).filter(item => item.slug !== "overview");
  allDocs.unshift({
    slug: 'overview',
    title: 'Overview'
  })

  return {
    props: {
      doc: {
        ...doc,
        content
      },
      allDocs
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: getAllDocs(['slug']).map((doc) => {
      return {
        params: {
          slug: doc.slug
        },
      }
    }),
    fallback: false,
  }
}
