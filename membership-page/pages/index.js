import Login from "@/components/Login";
import Navbar from "@/components/Navbar";
import Acerca from "./Acerca";
import Contact from "./Contact";
import Hero from "./Hero";
//
import { useSession, getSession } from "next-auth/react";
import MobileMenu from "@/components/MobileMenu";

export default function Home() {
  // ___ if not session, return Login page
  const { data: session } = useSession();
  if (!session) return <Login />;

  return (
    <>
      <main className="bg-white">
        <Navbar />
        <MobileMenu />
        <div>
          {/* HOMEPAGE */}
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
