import { getMenuItems } from "@/service/navbarService";
import Link from "next/link";

const Navbar = async () => {
  const response = await getMenuItems();

  return (
    <>
      <nav className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <a href="#" className="text-lg font-bold">
                MiSitio
              </a>
            </div>

            <div className="md:flex space-x-6">
              {response &&
                response.items.map((item) => {
                  return (
                    <Link
                      href={item.url}
                      className="block px-4 py-2 text-sm hover:bg-blue-500"
                    >
                      {item.name}
                    </Link>
                  );
                })}
            </div>

            <div className="md:hidden">
              <button
                id="menu-btn"
                className="text-white hover:text-blue-300 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div id="mobile-menu" className="md:hidden hidden">
          <Link href="/" className="block px-4 py-2 text-sm hover:bg-blue-500">
            Home
          </Link>
          <Link
            href="/quienes-somos"
            className="block px-4 py-2 text-sm hover:bg-blue-500"
          >
            Quienes Somos
          </Link>
          <a
            href="#login"
            className="block px-4 py-2 text-sm hover:bg-blue-500"
          >
            Login
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
