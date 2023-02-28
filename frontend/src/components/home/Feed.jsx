import React from 'react'
import UseFeed from '../hooks/UseFeed'
import { LoadMoreButton, StyledFeed } from '../styled/Feed.Styled';
import Post from './Post';

const Feed = () => {
  const {data,fetchNextPage,hasNextPage,isFetchingNextPage} = UseFeed();
  return (
    <StyledFeed>
      <h1>Recent Posts</h1>
    {
      data?.pages?.map(page => page.posts.map(post => {
        return  <Post  post={post}/>
      }))
    }
    <LoadMoreButton>
    {
      hasNextPage && !isFetchingNextPage && 
      <button onClick={()=>fetchNextPage()}>Load More</button>
    }
    </LoadMoreButton>
    </StyledFeed>
  )
}

export default Feed