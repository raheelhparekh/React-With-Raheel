import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header({ className }) {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  return (
    <header className={`bg-blue-950 text-white font-bold shadow-md h-16 flex items-center px-4 ${className}`}>
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo + Tippani Name */}
          <Link to="/" className="flex items-center gap-2">
            <Logo width="50px" />
            <h1 className="text-xl font-bold">Tippani</h1>
          </Link>

          {/* Navigation Items */}
          <ul className="flex space-x-6">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="px-6 py-2 rounded-full hover:bg-blue-100 hover:text-black transition"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && <LogoutBtn />}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;