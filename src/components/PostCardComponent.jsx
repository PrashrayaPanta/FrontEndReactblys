const PostCardComponent = ({ post }) => {
  return (
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <div class="p-4">
        <h2 class="font-bold text-xl mb-2">{post.title}</h2>
        <p class="text-gray-700 text-base">{post.description}</p>
      </div>
    </div>
  );
};

export default PostCardComponent;
