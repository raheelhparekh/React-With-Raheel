import { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";
import { useSelector } from "react-redux";
import { Button } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    let isMounted = true;

    appwriteService.getPosts()
      .then((posts) => {
        if (isMounted && posts) {
          setPosts(posts.documents);
        }
      })
      .catch((error) => {
        console.error("Error getting posts:", error);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false; // Cleanup function
    };
  }, []);

  return (
    <div className="w-full">
      <section className="h-screen flex flex-col items-center justify-center text-center bg-blue-50 text-white px-6">
        <h1 className="text-5xl text-blue-950 font-bold">Welcome to Tippani</h1>
        <p className="text-lg text-blue-950  mt-4 max-w-xl">
          Share your &quot;Tippani&quot; – thoughts, ideas, and inspirations,
          just like thoughts in a pot!
        </p>
        <Button
          onClick={() =>
            document
              .getElementById("posts-section")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="mt-6 hover:bg-blue-600 transition rounded-lg text-lg"
        >
          Explore Blogs
        </Button>
      </section>

      {!authStatus && (
        <div className="w-full py-8 mt-4 text-center">
          <Container>
            <h1 className="text-2xl font-bold text-blue-950">
              Please login to view your posts
            </h1>
          </Container>
        </div>
      )}

      {/* Blog Posts Section */}
      <section id="posts-section" className="w-full py-8">
        <Container>
          {loading ? (
            <div className="text-center py-10">
              <h1 className="text-2xl font-bold text-blue-950">
                Loading posts...
              </h1>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-10">
              <h1 className="text-2xl font-bold text-blue-950">
                No posts to show
              </h1>
            </div>
          ) : (
            <div className="flex flex-wrap">
              {posts.map((post) => (
                <div
                  key={post.$id}
                  className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                >
                  <PostCard {...post} />
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}

export default Home;
