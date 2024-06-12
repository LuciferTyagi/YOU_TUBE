import React, { useEffect, useState } from 'react';
import { fetchComments } from './CommentApi';
import { useSelector } from 'react-redux';
import { USER_IMG } from '../Utils/Constant';

const YouTubeComments = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    
    const videoId = useSelector((state) => state.video.videoId);

    useEffect(() => {
        const loadComments = async () => {
            const fetchedComments = await fetchComments(videoId);
            setComments(fetchedComments);
        };
    
        if (videoId) {
            loadComments();
        }
    }, [videoId]);
    

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim()) {
            setComments([{ text: newComment, author: 'User', timestamp: new Date().toISOString(), avatar: USER_IMG }, ...comments]);
            setNewComment('');
        }
    };

    return (
        <div className="w-full ">
            <form className="flex items-center py-4 border-b border-gray-300" onSubmit={handleCommentSubmit}>
                <img className="rounded-full mr-4 w-10" src={USER_IMG} alt="User Avatar" />
                <input
                    type="text"
                    className="flex-grow border-none border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-gray-500"
                    placeholder="Add a public comment..."
                    value={newComment}
                    onChange={handleCommentChange}
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 ml-4 rounded text-sm hover:bg-blue-600"
                >
                    Comment
                </button>
            </form>
            <div className="py-4">
                {comments.map((comment, index) => (
                    <div key={index} className="flex mb-4">
                        <img className="rounded-full mr-4 w-6 h-6" src={comment.avatar} alt="User Avatar" />
                        <div>
                            <div className="font-bold text-sm">{comment.author}</div>
                            <div className="text-sm">{comment.text}</div>
                            <div className="text-gray-500 text-xs">{new Date(comment.timestamp).toLocaleString()}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default YouTubeComments;
