import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaBrain, FaUserGraduate, FaGlobe, FaComments, FaCog, FaCode, FaClipboardList, FaFileAlt } from "react-icons/fa"; 

const data = [
  {
    title: 'General Aptitude',
    items: ['Arithmetic Aptitude', 'Data Interpretation', 'Online Aptitude Test', 'Data Interpretation Test'],
    icon: <FaBrain />
  },
  {
    title: 'Verbal and Reasoning',
    items: ['Verbal Ability', 'Logical Reasoning', 'Verbal Reasoning', 'Non Verbal Reasoning'],
    icon: <FaUserGraduate />
  },
  {
    title: 'Current Affairs & GK',
    items: ['Current Affairs', 'Basic General Knowledge', 'General Science', 'Read more...'],
    icon: <FaGlobe />
  },
  {
    title: 'Interview',
    items: ['Placement Papers', 'Group Discussion', 'HR Interview', 'Read more...'],
    icon: <FaComments />
  },
  {
    title: 'Engineering',
    items: ['Mechanical Engineering', 'Civil Engineering', 'ECE, EEE, CSE', 'Chemical Engineering'],
    icon: <FaCog />
  },
  {
    title: 'Programming',
    items: ['C Programming', 'C++ Programming', 'C# Programming', 'Java Programming'],
    icon: <FaCode />
  },
  {
    title: 'Online Tests',
    items: ['Aptitude Test', 'Verbal Ability Test', 'Logical Reasoning Test', 'C Programming Test'],
    icon: <FaClipboardList />
  },
  {
    title: 'Technical MCQs',
    items: ['Networking Questions', 'Database Questions', 'Basic Electronics', 'Digital Electronics'],
    icon: <FaFileAlt />
  },
  {
    title: 'Technical Short Answers',
    items: ['Software Testing', 'The C Language Basics', 'SQL Server', 'Networking'],
    icon: <FaFileAlt />
  },
];

const DashboardGrid = () => {
  return (
    <div className="grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((section, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-4 relative flex flex-col items-start"
        >
          <div className="flex items-center gap-10">
            <div className="max-md:text-sm">
              <h3 className="text-xl font-semibold text-gray-600">{section.title}</h3>
              <ul className="mt-2 space-y-1 text-gray-700 flex flex-col font-Barlow">
                {section.items.map((item, idx) => (
                  <div key={idx} className="flex gap-2 items-center group">
                    <MdOutlineKeyboardArrowRight 
                      className="transition-transform duration-200 transform group-hover:translate-x-2" 
                    />
                    <li className="hover:underline cursor-pointer">{item}</li>
                  </div>
                ))}
              </ul>
            </div>
            <div className="text-8xl text-gray-400 mb-2 opacity-50 max-sm:text-2xl max-md:text-4xl">
              {section.icon}
            </div> 
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardGrid;
