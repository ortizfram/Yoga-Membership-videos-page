import Navbar from "../components/Navbar.jsx";
import Acerca from "./Acerca";
import Contact from "./Contact";
import Hero from "./Hero";
import MobileMenu from "../components/MobileMenu";
import Head from "next/head";
import { ClerkProvider, useSession } from "@clerk/clerk-react";

export default function Home() {
  const { session } = useSession();

  if (!session) {
    return null; // Return a loading state or redirect to a login page
  }

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
      </Head>
      <main className="bg-white">
        <Navbar />
        <MobileMenu />
        <div>
          {/* HOMEPAGE */}
          {/*  */}
          <Hero />
          <Acerca />
          <Contact />
        </div>
      </main>
    </>
  );
}
