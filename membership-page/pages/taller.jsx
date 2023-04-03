import MobileMenu from "@/components/MobileMenu";
import Navbar from "@/components/Navbar";
import { GraphQLClient, gql } from "graphql-request";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const hygraph = new GraphQLClient(
  "https://api-sa-east-1.hygraph.com/v2/clf4izifj4o1a01t7f0c3e6m0/master"
);

const QUERY = gql`
  {
    tallers {
      title
      description
      slug
      coverImage {
        url
      }
      content {
        html
      }
      author {
        name
        photo {
          url
        }
        bio
      }
      categories {
        name
        slug
      }
    }
  }
`;

export async function getStaticProps() {
  const { tallers } = await hygraph.request(QUERY);

  return {
    props: {
      tallers,
    },
  };
}

export default function Taller({ tallers }) {
  return (
    <div className="bg-taller-image min-h-screen bg-center bg-cover">
      <Navbar />
      <MobileMenu />

      <div className="container mx-auto py-[20vh]">
        <div className="mx-auto text-left  mb-8">
          <h2 className="grid font-bold text-4xl md:text-6xl text-white select-none">
            🌌 Talleres Presenciales
          </h2>
          <p className="text-white  max-w-[80ch] text-lg">
            Para acceder a este contenido debes ser
            <Link href={"#"} className="underline m-2">
              miembro premium
            </Link>
            .Accedes a beneficios como ver antiguos talleres y participar de
            nuevos. Además de der totalmente personalizados
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tallers.map(({ id, title, slug, coverImage, categories }) => (
            <div
              key={id}
              className="text-center hover:bg-indigo-100 bg-white rounded-lg overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <Link href={`/taller/${slug}`}>
                  <Image
                    src={coverImage.url}
                    alt="blog taller cover image"
                    width={300}
                    height={300}
                    ty-75
                    object-cover
                    w
                    className="object-cover  transition-opacity  h-full w-full rounded-t-[26px] transform scale-125 duration-500"
                  />
                </Link>
              </div>
              <h2 className="text-2xl text-gray-700 px-4 py-2">
                <Link href={`/taller/${slug}`}>{title}</Link>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
