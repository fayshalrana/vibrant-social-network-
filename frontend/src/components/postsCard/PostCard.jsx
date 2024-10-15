import React, { useState, useEffect, useRef } from 'react';
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { BiCommentMinus } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { addComment, likePost } from '../../Actions/Post';
import { getFollowingUserPosts } from '../../Actions/User';
import CreatedTime from '../../hooks/createdTime/CreatedTime';

const PostCard = ({ post }) => {
    const [commentValue, setCommentValue] = useState("")
    const { likes = [], _id } = post; // Default likes to an empty array
    const { user } = useSelector((state) => state.user || {}); // Default user to an empty object
    const dispatch = useDispatch();
    const [like, setLike] = useState(false);
    const [commentToggle, setCommentToggle] = useState(false);
    const modalRef = useRef();

    const handleLike = (id) => {
        dispatch(likePost(id));
        setLike(!like);
        dispatch(getFollowingUserPosts());
    };

    useEffect(() => {
        if (likes && user) {
            likes.forEach(element => {
                if (element._id === user._id) {
                    setLike(true);
                }
            });
        }
    }, [likes, user]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setCommentToggle(false);
            }
        };
        if (commentToggle) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [commentToggle]);

    const handleAddComment = (e) => {
        e.preventDefault();
        dispatch(addComment(_id, commentValue))
        dispatch(getFollowingUserPosts());
        setCommentValue("")
    }

    return (
        <article className="bg-white p-6 mb-6 shadow transition duration-300 group border">
            <div className="relative mb-4 rounded-2xl">
                <img
                    className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                    src="https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                />
                <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 text-red-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                    <span className="ml-1 text-sm text-slate-400">2</span>
                </div>
            </div>
            <div className="flex justify-between items-center w-full pb-4 mb-auto">
                <div className="flex items-center">
                    <div className="pr-3">
                        <img
                            className="h-12 w-12 rounded-full object-cover"
                            src="https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt=""
                        />
                    </div>
                    <div className="flex flex-1">
                        <div className="flex flex-col items-start">
                            <p className="text-sm font-semibold capitalize">{post.owner.name}</p>
                            <p className="text-sm text-gray-500">Published on 19/03/2024</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="text-sm flex items-center text-gray-500">
                    {<CreatedTime createdAt={post.createdAt} />}
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <h3 className="font-medium text-xl leading-8 text-left text-black">
                {post.caption}
            </h3>
            <div className='mt-5'>
                <ul className='flex w-full gap-8'>
                    <li className='text-3xl'>
                        <button onClick={() => handleLike(_id)} className='px-2 py-1 shadow-md flex gap-1 items-center rounded-md'>
                            {!like ? <IoIosHeartEmpty /> : <IoMdHeart className='text-red-600' />}
                            <span className='text-sm'>{post.likes.length}</span>
                        </button>
                    </li>
                    <li className='text-3xl'>
                        <button onClick={() => setCommentToggle(true)} className='px-2 py-1 shadow-md flex gap-1 items-center rounded-md'>
                            <BiCommentMinus />
                            <span className='text-sm'>{post.comments.length}</span>
                        </button>
                    </li>
                    <li className='text-3xl'>
                        <button className='px-2 py-1 shadow-md flex gap-1 items-center rounded-md'>
                            <AiOutlineDelete />
                        </button>
                    </li>
                </ul>
            </div>
            {commentToggle && (
                <div className="w-full absolute h-full bg-black/30 flex justify-center items-center top-0 left-0 z-50">
                    <div ref={modalRef} className="w-[30rem] h-[30rem] bg-white p-4 rounded-lg">
                        <form onSubmit={handleAddComment} className="flex items-center gap-4 justify-between">
                            <input type="text" value={commentValue} onChange={(e) => setCommentValue(e.target.value)} placeholder="Type here" className="input input-bordered w-full max-w-lg flex-1" required />
                            <button type='submit' className="btn btn-outline btn-info">Info</button>
                        </form>
                        <div className="mt-2 flex flex-col gap-2">
                           {
                            post.comments.map(item =>(
                                <div key={item._id} role="button"
                                className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                                <div className="grid mr-4 place-items-center">
                                    <img alt="emma" src="https://docs.material-tailwind.com/img/face-3.jpg"
                                        className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center" />
                                </div>
                                <div>
                                    <h6
                                        className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                       {item.user.name}
                                    </h6>
                                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                                      {
                                        item.comment
                                      }
                                    </p>
                                </div>
                            </div>
                            ))
                           }
                        </div>
                    </div>
                </div>
            )}
        </article>
    );
}

export default PostCard;
