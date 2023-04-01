import { useSelector } from "react-redux";
import { fetchPosts, isPostsLoading, removePost, selectAllPosts } from "../../slices/post/postsSlice";
import { useAppDispatch } from "../../store";
import Box from "../Box";

const Posts = () => {
    const disptach = useAppDispatch();
    const posts = useSelector(selectAllPosts);
    const isLoading = useSelector(isPostsLoading);

    if(isLoading) {
        return(
            <Box title="Posts">
                Loading...
            </Box>
        )
    }

    if(!posts.length) {
        return(
            <Box title="Posts">
                <button onClick={() => {disptach(fetchPosts())}}>Load posts</button>
            </Box>
        )
    }

    return(
        <Box title="Posts">
            {posts.map((post) => {
                return <div key={post.id}>
                    {post.title}
                    <button onClick={() => {disptach(removePost(post.id))}}>Delete</button>
                </div>
            })}
        </Box>
    )
};

export default Posts;