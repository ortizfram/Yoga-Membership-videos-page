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
    posts {
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
  const { posts } = await hygraph.request(QUERY);

  return {
    props: {
      posts,
    },
  };
}

export default function Blog({ posts }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Filter the posts array based on the selected category
  const filteredPosts = selectedCategory
    ? posts.filter(({ categories }) =>
        categories.some(({ slug }) => slug === selectedCategory)
      )
    : posts;

  // Extract an array of all category slugs
  const categorySlugs = Array.from(
    new Set(
      posts.flatMap(({ categories }) => categories.map(({ slug }) => slug))
    )
  );

  return (
    <div className="bg-blog-image min-h-screen bg-center bg-cover">
      <Navbar />
      <MobileMenu />
      <div className="container mx-auto py-[20vh]">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <h2 className="grid font-bold text-6xl mb-8 text-white select-none">
            Clases
          </h2>
          <div className="grid md:p-2 gap-y-4  mb-4 justify-center">
            <h3 className="underline select-none font-bold text-white">
              Categorias
            </h3>
            <ul
              id="categories link"
              className="flex md:flex-row flex-col pb-4 ml-[-40px] p-1 bg-slate-100 rounded-md max-w-[34ch] text-center place-content-center"
            >
              {categorySlugs.map((slug) => (
                <li key={slug} className="mr-2">
                  <Link
                    href={`/category/${slug}`}
                    className={`hover:text-slate-500 text-slate-700 ${
                      slug === selectedCategory ? "underline font-bold" : ""
                    }`}
                    onClick={() => setSelectedCategory(slug)}
                  >
                    {slug}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map(({ id, title, slug, coverImage, categories }) => (
            <div
              key={id}
              className="text-center hover:bg-indigo-100 bg-white rounded-lg overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <Link href={`/post/${slug}`}>
                  <Image
                    src={coverImage.url}
                    alt="blog post cover image"
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
                <Link href={`/post/${slug}`}>{title}</Link>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
