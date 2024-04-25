import React, { useState } from "react";
import Chatbot from "../components/Chatbot";

// Community post component
const CommunityPost = ({ post }) => {
  // Format timestamp to be more human-readable
  const formattedTimestamp = new Date(post.timestamp).toLocaleString();

  return (
    <div className="bg-sidebar-bg p-4 rounded-md shadow-md mb-4">
      <div className="flex items-center mb-2">
        <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center mr-2">
          {/* Placeholder avatar */}
          <span className="text-gray-600 text-sm">{post.user[0]}</span>
        </div>
        <p className="font-semibold text-text-clr">{post.user}</p>
      </div>
      <p className="text-light-text-clr">{post.content}</p>
      <p className="text-sm text-light-text-clr mt-2">{formattedTimestamp}</p>
    </div>
  );
};

// Community component
const Community = () => {
  // Dummy community posts data
  const [communityPosts, setCommunityPosts] = useState([
    { id: 1, user: 'User 1', content: 'The reports i receiving ', timestamp: '2024-02-20T10:00:00' },
    { id: 2, user: 'User 2', content: 'Consectetur adipiscing elit.', timestamp: '2024-02-21T11:00:00' },
    { id: 3, user: 'User 3', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', timestamp: '2024-02-22T12:00:00' },
    // Add more dummy community posts data as needed
  ]);

  // State for new question
  const [newQuestion, setNewQuestion] = useState("");

  // Function to handle submitting a new question
  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    if (newQuestion.trim() !== "") {
      const timestamp = new Date().toISOString();
      const user = "User"; // You can replace this with the actual username
      const id = communityPosts.length + 1;
      const updatedPosts = [...communityPosts, { id, user, content: newQuestion, timestamp }];
      setCommunityPosts(updatedPosts);
      setNewQuestion(""); // Clear the input field
    }
  };

  return (
    <div className="bg-main-bg p-6 rounded-lg shadow-md main-container">
      <h2 className="text-lg font-semibold text-text-clr mb-4">Community</h2>

      {/* Form to submit a new question */}
      <form onSubmit={handleSubmitQuestion} className="mb-6">
        <textarea
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          className="w-full p-2 border border-text-clr rounded-md mb-2 focus:outline-none text-white bg-sidebar-bg"
          rows="4"
          placeholder="Ask a question..."
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Post Question
        </button>
      </form>

      {/* Community posts */}
      <div>
        {communityPosts.map(post => (
          <CommunityPost key={post.id} post={post} />
        ))}
      </div>

      {/* <div>
        <Chatbot />
      </div> */}
    </div>
  );
};

export default Community;
