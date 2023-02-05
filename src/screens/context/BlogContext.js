import React, { createContext, useState } from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  //export default bilerek demedim
  const [blogPosts, setBlogPost] = useState([]);
  const addBlogPost = () => {
    setBlogPost([
      ...blogPosts,
      { title: `Blog Post # ${blogPosts.length + 1}` }, //her bir ekleme için yeni bir nesne oluşturup onu renderlıyoruz
    ]);
  };
  // aşağıdaki şekilde aktarcağım verileri bu şekilde 1 den fazla şekilde gönderebilirim
  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost: addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
