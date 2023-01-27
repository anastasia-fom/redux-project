import SinglePost from "../SinglePost/index.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchPosts} from "../../../../features/posts/postsSlice.js";
import Loader from "../../../Loader/Loader.jsx";
const PostsList = () => {
    const { posts } = useSelector((store) => store.posts);
    const { status } = useSelector((store) => store.posts);

    const dispatch = useDispatch();

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchPosts());
        }
    }, [status, dispatch]);

    console.log(posts);
    return (
        <div className="posts_list">
            {status === "loading" && <Loader/>}
            {status === "succeeded" &&
                posts.map((post,index) => {
                    return(
                        <SinglePost
                            key={post.id+index}
                            name={post.name}
                            pantone={post.pantone_value}
                            year={post.year}
                            color={post.color}
                        />
                    )
                })
            }
        </div>
    )
}

export default PostsList;