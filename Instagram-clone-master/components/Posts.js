import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import Post from "./Post"
import {useState, useEffect} from "react"
import {db, storage} from "../firebase";

function Posts() {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        return onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
            setPosts(snapshot.docs);
        });
    }, [db])

    console.log(posts)
    return (
        <div>
            {posts.map((post) => (
                <Post
                    key={post.id}
                    username={post.username}
                    userImage={post.userImage}
                    img={post.img}
                    caption={post.caption} />
            ))}
        </div>
    )
}

export default Posts
