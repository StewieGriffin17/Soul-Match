import { Link } from "react-router-dom";
const Header2 = () => {
    return (
        <header >
                <div className="navbar text-[#D42E5D]">
                  <div className="navbar-start">
                    <Link to="/">
                      <img
                        src="/logo3.png"
                        alt="Logo"
                        className="w-20 h-15 object-contain ml-5"
                      />
                    </Link>
                  </div>
                </div>
              </header>
    );
};

export default Header2;