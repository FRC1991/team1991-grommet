import React from 'react';
import fs from 'fs'
import path from 'path';
import matter from 'gray-matter';

const Post  = ({contents, data}) => {
  return <div>contents below
    <h1>{data.title}</h1>
    <h2>{data.date}</h2>
    <h3>{data.description}</h3>
    <pre>{contents}</pre>
  </div>;
};

export const getStaticPaths = async () => {

  const staticPaths = fs.readdirSync('./pages');
  const paths = staticPaths.map(filename => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({params: {slug}}) => {

  const markdownWithMetaData = fs.readFileSync(path.join('./pages', slug + '.md'), 'utf8');

  const parsedMarkdown = matter(markdownWithMetaData);

  return {
    props: {
      contents: parsedMarkdown.content,
      data: parsedMarkdown.data
    }
  }
}
export default Post;