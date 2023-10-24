import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../reducer/action_post';

function Posts({ posts, isLoading, error, fetchPosts }) {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  
  return (
    <div>
    {isLoading ? (
      <p>Loading...</p>
    ) : error ? (
      <p>Error: {error}</p>
    ) : posts ? (
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    ) : null}
  </div>
  );
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    isLoading: state.isLoading,
    error: state.error
  };
}

const mapDispatchToProps = {
  fetchPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);