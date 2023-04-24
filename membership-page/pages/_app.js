import React, { useState, useEffect } from "react";
import {
  ClerkProvider,
  SignIn,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "../styles/globals.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <ClerkProvider>
      <SignedIn>
        <Component {...pageProps} />
      </SignedIn>
      <SignedOut>
        <SignIn />
      </SignedOut>
    </ClerkProvider>
  );
}
