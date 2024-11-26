import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createPost } from '../Actions/Post';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
    const dispatch = useDispatch();
    const [image, setImage] = useState(null);
    const [caption, setCaption] = useState("");
    const navigate = useNavigate();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader(); 

            reader.onload = () => {
                if (reader.readyState === 2) { 
                    setImage(reader.result); 
                }
            };

            reader.readAsDataURL(file); 
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        // Dispatch the createPost action with caption and image
        dispatch(createPost(caption, image)).then(() => {
          // Redirect to the home page on success
          navigate('/');
        });
      };
    return (
        <div className="mt-5">
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Captions</label>
                    <input type="text" id="text" value={caption} onChange={(e) => setCaption(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Your caption here" required />
                </div>
                <div className="flex flex-col items-start mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="user_avatar">Upload file</label>
                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" accept='image/*' onChange={handleImageChange} />
                    <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div>
                </div>
                {image && <img src={image} alt='' />}


                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Post</button>
            </form>

        </div>
    )
}

export default CreatePost
