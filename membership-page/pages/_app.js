import { SessionProvider } from "next-auth/react"
import '@/styles/globals.scss'
import React, { useState, useEffect } from 'react'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
        <Component {...pageProps} />
    </SessionProvider>
  )
}
