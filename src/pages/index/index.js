import Head from 'next/head'

import BaseLayout from '../../components/layouts/base'
import RadioGroup from '../../components/radio-group'
import Mirror from '../../components/mirrors/mirror'
import { debounce } from 'lodash';
import { getAllPosts } from '../../lib/api'

import Link from 'next/link'


import got from 'got';
import { useMemo, useEffect, useState, useCallback } from 'react';

export default function Home({ mirrorsData = [], latestNews = [] }) {
  const [currentCatalog, setCurrentCatalog] = useState('all');
  const [currentSearchValue, setCurrentSearchValue] = useState('');
  const mirrors = useMemo(() => {
    return mirrorsData.filter(item => {
      const { name, displayName, msg } = item;
      // 分类筛选
      const catalogFilter = currentCatalog === 'all' || item.catalog.includes(currentCatalog);
      // 搜索筛选
      const searchFilter = currentSearchValue === '' || [name, displayName, msg].some(text => text.includes(currentSearchValue));
      return catalogFilter && searchFilter;
    })

  }, [mirrorsData, currentCatalog, currentSearchValue]);

  const handleSearch = useCallback(
    debounce((value) => {
      setCurrentSearchValue(value)
    }, 200),
    [setCurrentSearchValue]
  );

  return (
    <BaseLayout>
      <main className="container mx-auto md:flex justify-between py-4 px-6">
        <section className="flex-grow ">
          <header className="sticky top-12 md:top-16 py-4 bg-apple-gray flex justify-between items-center md:block">
            <h1 className="text-2xl md:mb-4">镜像列表</h1>
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
                      text: '系统',
                      value: 'os'
                    },
                    {
                      text: '软件',
                      value: 'software'
                    },
                  ]}
                />
              </div>
              <input
                onChange={
                  (event) => { handleSearch(event.target.value) }
                }
                className="bg-white hidden md:block focus:outline-none border border-gray-300 rounded-sm py-1 px-3 block appearance-none leading-normal"
                placeholder="输入关键词筛选" />
            </div>
          </header>
          {
            mirrors.length > 0 ?
              (<section className="py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                  mirrors.map(mirrorInfo => (
                    <Mirror key={mirrorInfo.name} mirrorInfo={mirrorInfo} />
                  ))
                }
              </section>) :

              (
                <section className="w-full text-xl text-gray-500 text-center py-16">
                  没有符合条件的镜像
                </section>
              )

          }
        </section>
        <aside className=" sticky top-16 flex-grow-0 flex-shrink-0 pt-8 md:ml-10 w-full md:w-1/4">
          <section className="">
            <header className="text-xl mb-3">
              最新公告
            </header>
            <ul className="w-full p-3 bg-white">
              {
                latestNews.map(news => {
                  return (
                    <li className="py-3" key="news.title">
                      <Link href={`/blog/posts/${news.slug}`}>
                        <a className="block flex items-center">
                          <span className="text-sm">{news.date}</span>
                          <span className="flex-1 ml-3">{news.title}</span>
                        </a>
                      </Link>
                    </li>
                  )
                })
              }

              <li className="pt-3 text-center border-t border-gray-300 text-sm text-blue-400"><Link href="/blog"><a>查看全部 ></a></Link></li>
            </ul>
          </section>
        </aside>
      </main>
    </BaseLayout>

  )
}

export async function getStaticProps(context) {
  const res = await got('https://res.devcloud.huaweicloud.com/obsdevui/cn-north-1/mirror/8.2.4.001/frameworks/assets/mirrors.json').json()

  const latestNews = getAllPosts([
    'title',
    'date',
    'slug',
    'catalog'
  ]).filter(item => {
    return item.catalog === 'news'
  }).slice(0, 5)
  return {
    props: {
      mirrorsData: res,
      latestNews: latestNews
    }, // will be passed to the page component as props
  }
}