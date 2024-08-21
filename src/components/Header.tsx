import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full px-10 lg:px-20 shadow-md">
      <div className="w-full max-w-[1280px] mx-auto h-16 flex items-center">
        <Link to="/" className="font-bold text-2xl text-primary">
          Chairs
        </Link>
      </div>
    </div>
  );
};

export default Header;
