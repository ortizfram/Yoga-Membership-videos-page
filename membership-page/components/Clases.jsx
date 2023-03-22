import React from "react";
import { PostCard, Categories, PostWidget } from "../components";

const posts = [
  { title: "Testinbg asssssssssssssss", excerpt: "yxyxyxyyx aaaaaaaaaa" },
  { title: "Wo Wop react", excerpt: "uiuiuiuiuiuiuiiu asdasd" },
];

const Clases = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {/* Render post */}
          {posts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clases;
