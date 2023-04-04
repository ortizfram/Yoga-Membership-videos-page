import { GraphQLClient, gql } from "graphql-request";
import Image from "next/image";
import sanitizeHtml from "sanitize-html";
import Navbar from "@/components/Navbar";
import MobileMenu from "@/components/MobileMenu";

const hygraph = new GraphQLClient(
  "https://api-sa-east-1.hygraph.com/v2/clf4izifj4o1a01t7f0c3e6m0/master"
);

const QUERY = gql`
  query Taller($slug: String!) {
    taller(where: { slug: $slug }) {
      author {
        name
        bio
        photo {
          url
        }
      }
      description
      coverImage {
        url
      }
      categories {
        name
      }
      content {
        html
      }
      uploadedDate
    }
  }
`;

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await hygraph.request(QUERY, { slug });
  const taller = data.taller;

  return {
    props: {
      taller,
    },
  };
}

export async function getStaticPaths() {
  const { tallers } = await hygraph.request(`
    {
      tallers {
        slug
      }
    }
  `);

  return {
    paths: tallers.map((taller) => ({ params: { slug: taller.slug } })),
    fallback: "blocking",
  };
}

export default function Taller({ taller }) {
  const sanitizedHtml = sanitizeHtml(taller.content.html, {
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
      <div className="p-10 bg-indigo-100">
        <div className="pt-20">
          <h2 className="text-4xl font-extrabold text-center mb-8 text-indigo-700">
            {taller.title}
          </h2>
        </div>
        <div className="max-w-2xl mx-auto text-gray-700">
          <div className="flex items-center mb-6">
            <Image
              src={taller.author.photo}
              width={50}
              height={50}
              className="rounded-full mr-4"
            />
            <p className="text-lg font-bold text-indigo-500">
              {taller.author.name}
            </p>
          </div>
          {/* display sanitized HTML */}
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
          />
        </div>
      </div>
    </div>
  );
}
