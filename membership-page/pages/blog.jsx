import MobileMenu from "@/components/MobileMenu";
import Navbar from "@/components/Navbar";
import { GraphQLClient, gql } from "graphql-request";
import Image from "next/image";
import Link from "next/link";

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
  return (
    <div className="bg-blog-image min-h-screen bg-center bg-cover">
      <Navbar />
      <MobileMenu />
      <div className="container mx-auto py-[20vh]">
        <h2 className="font-bold text-6xl mb-8 text-white">Clases</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map(({ id, title, slug, coverImage }) => (
            <div key={id} className="text-center">
              <div>
                <div className="flex flex-col items-center">
                  <Link href={`/post/${slug}`}>
                    <Image
                      src={coverImage.url}
                      alt="blog post cover image"
                      width={300}
                      height={300}
                      className="transition-opacity hover:opacity-75 rounded-t-[26px]"
                    />
                  </Link>
                </div>
                <h2 className="text-2xl text-gray-700">
                  <Link href={`/post/${slug}`}>{title}</Link>
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
