import MobileMenu from "@/components/MobileMenu";
import Navbar from "@/components/Navbar";
import { GraphQLClient, gql } from "graphql-request";
import Image from "next/image"; // for covers and thumbnails
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
    <div>
      <Navbar />
      <MobileMenu />
      <div>
        <h2 className="font-bold text-6xl mb-8">Blog</h2>
      </div>
      <div>
        {posts.map(({ id, title, slug, coverImage }) => (
          <div key={id}>
            <div>
              <Image
                src={coverImage.url}
                alt="blog post cover image"
                width={150}
                height={150}
              />
            </div>
            <h2>
              <Link href={`/post/${slug}`}>{title}</Link>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
