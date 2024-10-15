import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../Actions/User';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link, useLoaderData } from 'react-router-dom'
import PostCard from '../components/postsCard/PostCard';
const Profile = () => {
  const otherUser = useLoaderData();
  const location = useLocation()
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const currentUser = location.pathname == "/profile" ? user : otherUser.user;
  console.log(currentUser);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser())
    navigate('/');
    isAuthenticated = false;
  }
  return (
    <div>
      <div className="h-[300px] w-full" style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1624396963238-df0e48367ff7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGNvdmVyJTIwcGhvdG98ZW58MHx8MHx8fDA%3D')", backgroundRepeat: "no-repeat", backgroundSize: 'cover', backgroundAttachment:'fixed',
      }}></div>
      <div className="grid grid-cols-4 h-full bg-transparent">
        <div className="container mx-auto">
          <div className="w-full sticky top-[30px]">
            <div className="bg-white rounded-lg shadow-lg text-center overflow-hidden">
              <img className="w-full h-64 object-cover" src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww" alt="Profile Image" />
              <div className="p-6">
                <h2 className="font-bold text-xl text-gray-800">{currentUser.name}</h2>
                <p className="text-gray-500">@johndoedesigner</p>
                <p className="text-sm text-gray-600 mt-4 mb-6">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="font-semibold text-gray-500 text-[11px]">TWEETS</p>
                    <h4 className="font-bold text-xl text-gray-700">1300</h4>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500 text-[11px]">FOLLOWERS</p>
                    <h4 className="font-bold text-xl text-gray-700">250</h4>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500 text-[11px]">FOLLOWING</p>
                    <h4 className="font-bold text-xl text-gray-700">168</h4>
                  </div>
                </div>
              </div>
              <div className="w-full p-5 pt-0">
                <h3 className='text-[14px] font-medium pb-3 text-black text-left'>Contact</h3>
                <hr />
                <ul className="flex justify-around mt-3">
                  <li className='p-3 bg-slate-300 rounded-full'><a href=""><FaFacebookF /></a></li>
                  <li className='p-3 bg-slate-300 rounded-full'><a href=""><FiInstagram /></a></li>
                  <li className='p-3 bg-slate-300 rounded-full'><a href=""><FiInstagram /></a></li>
                  <li className='p-3 bg-slate-300 rounded-full'><a href=""><FiInstagram /></a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
        <div className='col-span-2 px-5 backdrop-blur bg-transparent'>
          <div className="flex flex-col gap-5">
            {/* about card  */}
            <div className="w-full bg-white p-4 rounded">
              <div className="flex justify-between items-center">
                <h3 className='text-[15px] font-bold text-black'>About</h3>
                <div className="flex gap-4">
                  <button className='py-1 px-4 bg-transparent border rounded-[40px] border-pink-600 text-pink-700 text-[14px] font-medium select-none'>Follow</button>
                  <button className='py-1 px-4 bg-pink-700 border rounded-[40px] border-pink-600 text-white text-[14px] font-medium select-none'>Message</button>
                </div>
              </div>
              <p className='pt-5 font-normal text-[14px] leading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cupiditate veritatis et odit eligendi, illum blanditiis nisi distinctio? Architecto reiciendis eum cum neque, ipsam cumque dicta id nostrum dolores aspernatur corporis eligendi? Nesciunt sapiente animi, aspernatur modi officiis voluptas consectetur!</p>
            </div>
            <div className="flex flex-col gap-2">
              {
                currentUser ? currentUser.posts.map((post) => (
                  <PostCard key={post._id} post={post} />
                )) : <h2>Post not found</h2>
              }
            </div>
          </div>
        </div>
        <div className='bg-white rounded p-5'>
          <div className=" sticky top-[70px]">
          <h3 className='text-[15px] font-bold text-black pb-5'>Manage Account</h3>
          <button onClick={handleLogout} className='py-1 px-4 bg-pink-700 border rounded-[40px] border-pink-600 text-white text-[14px] font-medium select-none'>Logout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
