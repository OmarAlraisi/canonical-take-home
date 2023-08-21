import './App.scss';

import { useState, useEffect } from 'react';
import { Row } from '@canonical/react-components';

import BlogPostCard from './components/blogPostCard';
import { IPost } from './interfaces';
import { fetchPost } from './services/apiService';

function App() {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    (async () => {
      const posts = await fetchPost();
      setPosts(posts);
    })();
  }, []);

  return (
    <Row className="u-equal-height">
      {posts.length ? (
        posts.map((post) => {
          return (
            <BlogPostCard
              key={`blog-post--${post.id}`}
              author={post.authorName}
              title={post.title}
              featuredMedia={post.featuredMedia}
              date={post.date}
              link={post.link}
              authorLink={post.authorUrl}
            />
          );
        })
      ) : (
        <h1 className="is-accent">No Posts Available</h1>
      )}
    </Row>
  );
}

export default App;
