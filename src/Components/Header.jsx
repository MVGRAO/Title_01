import { IoIosSearch } from "react-icons/io";
import { GrLogout } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
const Header = () => {
  const handleLogout = () => {
    // Logic for logout (e.g., clearing tokens, redirecting, etc.)
    console.log("Logged out");
  };

  return (
    <header className={`flex justify-between items-center p-4  shadow-md`}>
      <h1 className="text-2xl font-bold">Title</h1>
      <div className="flex items-center space-x-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className={`p-2 pl-10 border rounded-md focus:outline-none focus:ring focus:ring-slate-200 w-full max-sm:w-14 max-md:w-40`}
          />
          <IoIosSearch className="absolute left-2 top-3 w-5 h-5 text-gray-800" />
        </div>
        <GrLogout onClick={handleLogout} className="w-6 h-6 text-black cursor-pointer hover:text-gray-400" />
        <CgProfile className='w-fit h-8'/>
      </div>
    </header>
  );
};

export default Header;