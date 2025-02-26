import { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";
import { useSelector } from "react-redux";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const userData = useSelector((state) => state.auth.userData);
  useEffect(() => {
    if (!userData || !userData.$id) return;
    appwriteService.getPosts(userData.$id, [])  // Pass userId directly
      .then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      })
      .catch((error) => {
        console.log("Error getting posts:", error);
      });
  }, [userData]);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts
            // .filter((post) => post.document.userId === authStatus.userId)
            .map((post) => (
              <div
                key={post.$id}
                className="p-2 w-1/4 hover:scale-105 transition-transform duration-300"
              >
                <PostCard {...post} />
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
