import BaseLayout from '../../components/layouts/base'
import PostCatalog from '../../components/blog/post-catalog';
import { getAllPosts } from '../../lib/api/blog'

import Link from 'next/link'

import RadioGroup from '../../components/radio-group'

import { useMemo, useEffect, useState, useCallback } from 'react';


export default function Blog({ allPosts = [] }) {

    const [currentCatalog, setCurrentCatalog] = useState('all');

    const posts = useMemo(() => {
        return allPosts.filter(item => {
            return currentCatalog === 'all' || item.catalog.includes(currentCatalog);
        })

    }, [allPosts, currentCatalog]);

    return (
        <BaseLayout>
            <section className="container mx-auto px-5 md:px-6">
                <header className="sticky top-12 md:top-16 py-4 bg-apple-gray flex justify-between items-center md:block">
                    <h1 className="text-2xl md:mb-4">镜像站 Blog</h1>
                    <div className="flex  justify-between items-center">
                        <div className="flex-grow">
                            <RadioGroup
                                onChange={(value) => { setCurrentCatalog(value) }}
                                options={[
                                    {
                                        text: '全部',
                                        value: 'all'
                                    },
                                    {
                                        text: '公告',
                                        value: 'news'
                                    },
                                    {
                                        text: '技术',
                                        value: 'tech'
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </header>
                {
                    posts.map(
                        post => {
                            const { title, slug, date, catalog, excerpt } = post;
                            return (
                                <Link key={slug} href={`/blog/posts/${slug}`}>
                                    <a className="block bg-white mb-4 p-4 rounded-md hover:shadow-md">
                                        <div className="text-xs text-gray-700">
                                            {date}
                                            <PostCatalog catalog={catalog} />
                                        </div>
                                        <h2 className="text-lg py-2">{title}</h2>
                                        <div className="text-sm text-gray-700 ">{excerpt}</div>
                                    </a>
                                </Link>
                            )
                        }
                    )
                }
            </section>
        </BaseLayout>
    )
}

export async function getStaticProps() {
    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
        'catalog'
    ])
    return {
        props: { allPosts },
    }
}
