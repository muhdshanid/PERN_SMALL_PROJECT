import React, { useState } from 'react'
import { StyledHome } from '../styled/Home.Styled'
import Navbar from './Navbar'
import {Route,Routes} from 'react-router-dom'
import Account from './Account'
import Feed from './Feed'
import PostModal from './PostModal'
import {QueryClientProvider,QueryClient} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
const queryClient = new QueryClient()
const Home = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
   <QueryClientProvider client={queryClient}>
     <StyledHome>
        <Navbar setModalOpen={setModalOpen}/>
        <Routes>
          <Route path='/feed' element={<Feed/>}/> 
          <Route path='/account' element={<Account/>}/> 
        </Routes>
       {modalOpen && <PostModal setModalOpen={setModalOpen}/>}
    </StyledHome>
    <ReactQueryDevtools position='bottom-right' initialIsOpen={false}/>
   </QueryClientProvider>
  )
}

export default Home