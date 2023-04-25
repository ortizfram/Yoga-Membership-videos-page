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
        <div className="bg-login-image bg-cover bg-center w-full">
          <div className="mx-auto flex justify-center items-center p-4 h-screen">
            <SignIn />
          </div>
        </div>
      </SignedOut>
    </ClerkProvider>
  );
}
