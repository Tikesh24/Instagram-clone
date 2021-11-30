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

    
    return (
        <div>
            {posts.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.data().username}
                    userImage={post.data().profileImg}
                    img={post.data().image}
                    caption={post.data().caption} />
            ))}
        </div>
    )
}

export default Posts
