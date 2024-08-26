import React, { useState } from 'react';

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
        <div className="bg-gray-900 border-2 border-indigo-500 rounded-lg p-6 mx-auto max-w-4xl mt-10">
            <h1 className="text-3xl sm:text-2xl lg:text-2xl font-extrabold text-white text-center mb-8 underline decoration-clone decoration-indigo-500">
                <span className="text-indigo-600">Your opinion</span> matters to us
            </h1>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mx-auto">
                {/* Trainer's Photo */}
                <div className="lg:w-1/3 w-full p-4">
                    <img
                        src="/src/assets/Comment.png" // Replace with actual trainer photo path
                        alt="Trainer"
                        className="w-full h-auto rounded-xl"
                    />
                </div>

                {/* Comment Form */}
                <div className="lg:w-1/2 w-full p-4">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            className="w-full p-3 rounded-lg shadow-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-800 text-white"
                            placeholder="Full Name..."
                        />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 rounded-lg shadow-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-800 text-white"
                            placeholder="example@gmail.com"
                        />
                        <textarea
                            className="w-full p-3 rounded-lg shadow-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-800 text-white"
                            placeholder="Write your comment here..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            {/* Comments Carousel */}
            {comments.length > 0 && (
                <div className="mt-10">
                    <h2 className="text-xl text-center text-white mb-4">What others are saying:</h2>
                    <div className="flex overflow-x-auto space-x-4 p-4">
                        {comments.map((comment, index) => (
                            <div key={index} className="bg-gray-800 text-white p-4 rounded-lg shadow-md min-w-[300px]">
                                <p className="font-semibold">{comment.fullname}</p>
                                <p className="text-sm text-gray-400">{comment.email}</p>
                                <p>{comment.comment}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Comment;
