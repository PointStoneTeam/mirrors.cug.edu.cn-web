import Head from 'next/head'

import BaseLayout from '../../components/layouts/base'

import styles from './style.module.scss'

export default function Home() {
  return (

    <BaseLayout mainClass={styles.homepage}>
      <section>
        主要区域
      </section>
      <aside>
        侧边栏
      </aside>
    </BaseLayout>
  )
}
