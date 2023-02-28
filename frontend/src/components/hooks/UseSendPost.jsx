import { useMutation,useQueryClient } from "react-query";


const UseSendPost = () => {
    const queryClient = useQueryClient();
    return useMutation(
        post => fetch(`${process.env.REACT_APP_SERVER_URL}/new-post`,{
            body:JSON.stringify(post),
            method:'POST',
            credentials:"include",
            headers:{
                "Content-Type": "application/json"
            }
        }),
        {
            onSuccess:() => {
                queryClient.refetchQueries("feed")
                queryClient.refetchQueries("my-posts")
            }
        }
    )
}

export default UseSendPost