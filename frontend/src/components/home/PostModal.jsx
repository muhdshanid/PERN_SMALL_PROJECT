import React, { useRef, useState } from 'react'
import UseSendPost from '../hooks/UseSendPost'
import { PostModalForm, PostModalHeader, StyledPostModal } from '../styled/PostModel.Styled'

const PostModal = ({setModalOpen}) => {
    const [state, setState] = useState({post:""})
    const {mutate:sendPost} = UseSendPost();
    const backgroundRef = useRef()
    const handleSubmit = e => {
        e.preventDefault()
        if(state.post.length > 0){
            sendPost({post:state.post})
            setModalOpen(false)
        }
        setState({post:""})
    }
  return (
    <StyledPostModal ref={backgroundRef} onClick={(e) => {
        if(e.target === backgroundRef.current) setModalOpen(false)
    }}>
        <PostModalForm onSubmit={handleSubmit}>
            <PostModalHeader>
                <h1>New Post</h1>
            </PostModalHeader>
                <textarea value={state.post}
                maxLength={255}
                 onChange={(e)=>setState({[e.target.name]:e.target.value})} name="post"/>
                 <sub>Characters left : {255 - state.post.length}</sub>
                <button  type='submit'>
                    <p>Create Post</p>
                </button>
        </PostModalForm>
    </StyledPostModal>
  )
}

export default PostModal