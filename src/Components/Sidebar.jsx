/* eslint-disable react/prop-types */
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import { GiBrain } from "react-icons/gi";
import { MdDataThresholding } from "react-icons/md";
import { FaRegNoteSticky } from "react-icons/fa6";
import { BsAlphabetUppercase } from "react-icons/bs";
import { GiThink } from "react-icons/gi";
import { FaThinkPeaks } from "react-icons/fa";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { SiBasicattentiontoken } from "react-icons/si";
import { Si365Datascience } from "react-icons/si";
import { IoNewspaperSharp } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { GiOfficeChair } from "react-icons/gi";
import { GiMechanicalArm } from "react-icons/gi";
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlineDonutLarge } from "react-icons/md";
import { GiTestTubes } from "react-icons/gi";
import { TbCircleLetterCFilled } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { RiCharacterRecognitionLine } from "react-icons/ri";
import { FaPeopleCarry } from "react-icons/fa";

const Sidebar = ({ open, toggleSidebar }) => {
    const menus = [
        { name: "Home", link: '/', icon: <IoIosHome /> },
        { name: "Arithmetic Aptitude", link: '/settings', icon:<GiBrain />, margin: true },
        { name: "Data Interpretation", link: '/profile', icon: <MdDataThresholding /> },
        { name: "Online Aptitude Test", link: '/messages', icon: <FaRegNoteSticky /> },
        { name: "Verbal Ability", link: '/analytics', icon: <BsAlphabetUppercase />, margin: true },
        { name: "Logical Reasoning", link: '/analytics', icon: <GiThink /> },
        { name: "Verbal Reasoning", link: '/analytics', icon: <FaThinkPeaks /> },
        { name: "Non Verbal Reasoning", link: '/analytics', icon: <AiOutlineFieldNumber />},
        { name: "Current Affairs", link: '/analytics', icon:<FaMoneyBillTrendUp />, margin: true },
        { name: "Basic General knowledge", link: '/analytics', icon:<SiBasicattentiontoken /> },
        { name: "General Science", link: '/analytics', icon: <Si365Datascience /> },
        { name: "Placement Papers", link: '/analytics', icon: <IoNewspaperSharp />, margin: true },
        { name: "Group Discussion", link: '/analytics', icon: <FaUserGroup /> },
        { name: "HR Interview", link: '/analytics', icon:<GiOfficeChair />},
        { name: "Mechanical Engineering", link: '/analytics', icon: <GiMechanicalArm />, margin: true },
        { name: "Civil Engineering", link: '/analytics', icon: <FaRegBuilding /> },
        { name: "ECE, EEE, CSE", link: '/analytics', icon: <MdOutlineDonutLarge />},
        { name: "Chemical Engineering", link: '/analytics', icon: <GiTestTubes /> },
        { name: "C Programming", link: '/analytics', icon: <TbCircleLetterCFilled />, margin: true },
        { name: "C++ Programming", link: '/analytics', icon: <TbCircleLetterCFilled /> },
        { name: "C# Programming", link: '/analytics', icon: <TbCircleLetterCFilled /> },
        { name: "Java Programming", link: '/analytics', icon: <FaJava/> },
        { name: "Aptitude Test", link: '/analytics', icon:<BsFillPersonLinesFill />, margin: true },
        { name: "Verbal Ability Test", link: '/analytics', icon: <RiCharacterRecognitionLine /> },
        { name: "Logical Reasoning Test", link: '/analytics', icon: <FaPeopleCarry /> },
    ];

    const [hoveredMenu, setHoveredMenu] = useState(null);

    return (
        <section className='flex font-Lato'>
            <div className={`bg-[#0e0e0e] min-h-screen fixed h-screen ${open ? 'w-72' : 'w-20'} duration-500 text-gray-100 px-4`}>
                <div className="py-3 flex justify-end">
                    {open ? (
                        <MdMenuOpen 
                            size={26} 
                            className="cursor-pointer" 
                            onClick={toggleSidebar} 
                        />
                    ) : (
                        <HiMenu 
                            size={26} 
                            className="cursor-pointer" 
                            onClick={toggleSidebar} 
                        />
                    )}
                </div>
                <div className="mt-4 flex flex-col gap-4 relative overflow-y-auto" style={{ maxHeight: 'calc(100vh - 80px)' }}>
                    {menus.map((menu, i) => (
                        <div key={i}>
                            {menu.margin && (
    <hr className="border-gray-700 my-2" />
)}
                            <Link 
                                to={menu.link} 
                                className="flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-700 rounded-md"
                                onMouseEnter={() => setHoveredMenu(menu.name)}
                                onMouseLeave={() => setHoveredMenu(null)}
                            >
                                <div className="flex items-center gap-4 font-medium text-lg">
                                    <div>{menu.icon}</div>
                                    <h2 
                                        className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}
                                    >
                                        {menu.name}
                                    </h2>
                                </div>
                                {/* Tooltip for collapsed menu */}
                                {!open && hoveredMenu === menu.name && (
                                    <h2 className="absolute left-20 bg-white font-semibold text-gray-900 rounded-md drop-shadow-lg px-2 py-1">
                                        {menu.name}
                                    </h2>
                                )}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sidebar;
