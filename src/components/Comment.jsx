import React, { useState } from 'react';
import { FaStar, FaThumbsUp, FaHeart } from 'react-icons/fa';

function Comment() {
    const [comments, setComments] = useState([]);
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [newComment, setNewComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim() && fullname.trim() && email.trim()) {
            setComments([...comments, { fullname, email, comment: newComment }]);
            setFullname('');
            setEmail('');
            setNewComment('');
        }
    };

    return (
        <>
        <div className="relative bg-gradient-to-r from-indigo-500 p-8 rounded-lg mx-auto max-w-4xl mt-20">
            <div className="absolute inset-0 bg-opacity-40 backdrop-blur-md rounded-lg"></div>
            <div className="relative z-10">
                <h1 className="text-4xl font-extrabold text-white text-center mb-8">
                    <span className="text-yellow-300">Your opinion</span> matters to us
                </h1>
                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mx-auto">
                    {/* Trainer's Photo */}
                    <div className="lg:w-1/3 w-full p-8">
                        <img
                            src="src/assets/L.png" // Replace with actual trainer photo path
                            alt="Trainer"
                            className="w-full h-auto rounded-full "
                        />
                    </div>

                    {/* Comment Form */}
                    <div className="lg:w-1/2 w-full p-4">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                value={fullname}
                                onChange={(e) => setFullname(e.target.value)}
                                className="w-full p-3 rounded-lg shadow-md border border-transparent bg-gray-700 text-white focus:ring-2 focus:ring-yellow-500"
                                placeholder="Full Name..."
                            />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 rounded-lg shadow-md border border-transparent bg-gray-700 text-white focus:ring-2 focus:ring-yellow-500"
                                placeholder="example@gmail.com"
                            />
                            <textarea
                                className="w-full p-3 rounded-lg shadow-md border border-transparent bg-gray-700 text-white focus:ring-2 focus:ring-yellow-500"
                                placeholder="Write your comment here..."
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="w-full bg-indigo-700 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            >
                                <FaStar className="inline-block mr-2" /> Submit
                            </button>
                        </form>
                    </div>
                </div>

                {/* Comments Carousel */}
                {comments.length > 0 && (
                    <div className="mt-10 relative overflow-hidden">
                        <h2 className="text-xl text-center text-white mb-4">
                            What others are saying:
                        </h2>
                        <div className="relative">
                            <div className="flex animate-slide-left-to-right space-x-4 p-4">
                                {comments.concat(comments).map((comment, index) => (
                                    <div key={index} className="bg-gray-800 text-white p-4 rounded-lg shadow-md min-w-[300px] mx-2 relative">
                                        <p className="font-semibold">{comment.fullname}</p>
                                        <p className="text-sm text-gray-400">{comment.email}</p>
                                        <p>{comment.comment}</p>
                                        <div className="absolute top-2 right-2 flex space-x-2 text-yellow-400">
                                            <FaThumbsUp className="hover:text-yellow-300" />
                                            <FaHeart className="hover:text-red-400" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
       
</>
    );
}

export default Comment;
