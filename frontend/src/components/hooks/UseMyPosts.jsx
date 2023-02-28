import { useInfiniteQuery } from "react-query";



const UseMyPosts = () => useInfiniteQuery("my-posts",async ({pageParam = 0}) => {
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/my-posts?cursor=${pageParam}`,{
        credentials:"include"
    })
    if(!res.ok){
        throw new Error("something went wrong server side ...!")
    }
    return res.json()
},{
    refetchInterval:1000 * 10,
    getNextPageParam:(lastPage)=>(
        lastPage.posts.length >= 5 ? lastPage.cursor : undefined
    )
})

export default UseMyPosts