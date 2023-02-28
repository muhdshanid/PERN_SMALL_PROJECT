import React from 'react'
import UseMyPosts from '../hooks/UseMyPosts'
import { LoadMoreButton, StyledFeed } from '../styled/Feed.Styled';
import Post from './Post';

const Account = () => {
  
  const {data,fetchNextPage,hasNextPage,isFetchingNextPage} = UseMyPosts();

  return (
    <StyledFeed>
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

export default Account