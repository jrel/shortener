import React from 'react'
import Home from './Home'
import Head from 'next/head'

const Page: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Jrel Shortener</title>
        <meta name="description" content="Jrel Shortener "></meta>
      </Head>
      <Home />
    </div>
  )
}

export default Page
