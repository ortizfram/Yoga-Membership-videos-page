import { Login } from "../components/Login.jsx";
import Navbar from "../components/Navbar.jsx";
import Acerca from "./Acerca";
import Contact from "./Contact";
import Hero from "./Hero";
//
import { useSession, getSession } from "next-auth/react";
import MobileMenu from "../components/MobileMenu";
import Head from "next/head";
//

export default function Home() {
  // ___ if not session, return Login page
  const { data: session } = useSession();
  if (!session) return <Login />;

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

// session setup
export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
