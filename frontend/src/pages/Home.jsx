import React from 'react'
import List from '../components/list/List'
import PostCard from '../components/postsCard/PostCard'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers, getFollowingUserPosts } from '../Actions/User'

const Home = () => {
  const dispatch = useDispatch();
  const {posts, loading, error}= useSelector((state)=> state.postOfFollowingUsers)

  const {users}= useSelector((state)=> state.allUsers)


  useEffect(() => {
    dispatch(getFollowingUserPosts())
    dispatch(getAllUsers())
  }, [dispatch])


  return (
    <div className="content grid grid-cols-4 grid-rows-5 gap-4 w-full">

      {/* User posts  */}
      <div className="post col-span-3 pt-5 overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3 text-center px-2 w-[700px] mx-auto">
        {
          posts && posts.length > 0 ? posts.map((post)=>(
            <PostCard key={post._id} post={post}/>
          )) : <h2>Post not found</h2>
        }
        </div>
      </div>


      <div className="userList col-start-4 bg-green-400 pt-5">
        {/* user list  */}
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-full rounded-xl bg-clip-border">
          <nav className="flex min-w-full flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
            {
              users && users.length > 0 ? users.map((user)=>(
                
                <List key={user._id} user={user}/>

              )): <h4>There are now user yet</h4>
            }
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Home
