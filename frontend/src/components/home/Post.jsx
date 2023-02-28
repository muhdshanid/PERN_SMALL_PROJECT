import React from 'react'
import { StyledHeader, StyledPost } from '../styled/Feed.Styled'

const Post = React.memo(({post}) => {
  return (
    <StyledPost>
        <StyledHeader>
            <img src={post.img} alt="profile" />
            <h2>{post.username}</h2>
        </StyledHeader>
        <p>
            {post.body}
        </p>
    </StyledPost>
  )
})

export default Post