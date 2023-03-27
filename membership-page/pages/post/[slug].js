import MobileMenu from "@/components/MobileMenu";
import Navbar from "@/components/Navbar";
import { GraphQLClient, gql } from "graphql-request";
import Image from "next/image";
import sanitizeHtml from "sanitize-html";

const hygraph = new GraphQLClient(
  "https://api-sa-east-1.hygraph.com/v2/clf4izifj4o1a01t7f0c3e6m0/master"
);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      slug
      coverImage {
        url
      }
      title
      description
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

export const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

// make it dynamic
export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await hygraph.request(QUERY, { slug });
  const post = data.post;

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const { posts } = await hygraph.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: "blocking",
  };
}

export default function Post({ post }) {
  const sanitizedHtml = sanitizeHtml(post.content.html, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ["src", "alt"],
    },
  });

  return (
    <div>
      <Navbar />
      <MobileMenu />
      <div className="p-10">
        <div className="pt-[100px]">
          <h2 className="text-4xl font-extrabold">{post.title}</h2>
        </div>
        <div>
          <Image src={post.author.photo} />
          <p className="mb-4">{post.author.name}</p>
          {/* display sanitized HTML */}
          <div>
            <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
          </div>
        </div>
      </div>
    </div>
  );
}
