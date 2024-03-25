
const CommunityPost = ({ post }) => {
  return (
    <div className="bg-sidebar-bg p-4 rounded-md mb-4">
      <p className="font-semibold text-text-clr">{post.user}</p>
      <p className="text-light-text-clr">{post.content}</p>
      <p className="text-sm text-light-text-clr">{post.timestamp}</p>
    </div>
  );
};

const Community = () => {
  // Dummy community posts data
  const communityPosts = [
    { id: 1, user: 'User 1', content: 'Lorem ipsum dolor sit amet.', timestamp: '2024-02-20 10:00 AM' },
    { id: 2, user: 'User 2', content: 'Consectetur adipiscing elit.', timestamp: '2024-02-21 11:00 AM' },
    { id: 3, user: 'User 3', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', timestamp: '2024-02-22 12:00 PM' },
    // Add more dummy community posts data as needed
  ];

  return (
    <div className="bg-main-bg p-6 rounded-lg shadow-md main-container">
      <h2 className="text-lg font-semibold text-text-clr mb-4">Community</h2>
      <div>
        {communityPosts.map(post => (
          <CommunityPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Community;
