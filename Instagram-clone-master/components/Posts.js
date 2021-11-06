import Post from "./Post"

const posts = [
    {
        id: "123",
        username: "sunnySanga",
        userImage: "https://cdn.fakercloud.com/avatars/woodsman001_128.jpg",
        img: "https://cdn.fakercloud.com/avatars/woodsman001_128.jpg",
        caption: "SUBSCRIBE THE CHANNEL"
    }, {
        id: "123",
        username: "sunnySanga",
        userImage: "https://cdn.fakercloud.com/avatars/woodsman001_128.jpg",
        img: "https://cdn.fakercloud.com/avatars/woodsman001_128.jpg",
        caption: "SUBSCRIBE THE CHANNEL"
    }, {
        id: "123",
        username: "sunnySanga",
        userImage: "https://cdn.fakercloud.com/avatars/woodsman001_128.jpg",
        img: "https://cdn.fakercloud.com/avatars/woodsman001_128.jpg",
        caption: "SUBSCRIBE THE CHANNEL"
    }, {
        id: "123",
        username: "sunnySanga",
        userImage: "https://cdn.fakercloud.com/avatars/woodsman001_128.jpg",
        img: "https://cdn.fakercloud.com/avatars/woodsman001_128.jpg",
        caption: "SUBSCRIBE THE CHANNEL"
    }, {
        id: "123",
        username: "sunnySanga",
        userImage: "https://cdn.fakercloud.com/avatars/woodsman001_128.jpg",
        img: "https://cdn.fakercloud.com/avatars/woodsman001_128.jpg",
        caption: "SUBSCRIBE THE CHANNEL"
    },
]
function Posts() {
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
