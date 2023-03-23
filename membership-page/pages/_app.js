import { SessionProvider } from "next-auth/react"
import '@/styles/globals.scss'
import React, { useState, useEffect } from 'react'
import {Layout} from '../components'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}
