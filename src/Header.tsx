import codologlogo from './assets/codologlogo.jpeg'
import searchIcon from './assets/searchicon.svg'
import homeicon from './assets/homeicon.svg'
import arrowup from './assets/arrowup.svg'
import cpuchip from './assets/cpuchip.svg'
import mapicon from './assets/mapicon.svg'
import capicon from './assets/capicon.svg'

export function Header() {
  return (
    <div className="bg-white p-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Logo + Branding */}
        <div className="flex items-center flex-shrink-0">
          <img
            src={codologlogo}
            alt="Codolog Logo"
            className="w-[100px] h-[100px] object-contain"
          />
          <div className="ml-3 flex flex-col leading-tight">
            <strong className="text-4xl text-gray-800">Codolog</strong>
            <span className="text-sm text-gray-600">Always learn Unique</span>
          </div>
        </div>

        {/* Search + Icons + Explore Button */}
        <div className="flex items-center flex-wrap gap-6 justify-end flex-grow">
          {/* Search Box */}
          <div className="relative w-[300px] max-w-sm">
            <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <img src={searchIcon} alt="Search Icon" className="h-6 w-6" />
            </span>
            <input
              type="text"
              placeholder="What do you want to learn?"
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Icon Buttons */}
          {[homeicon, arrowup, cpuchip, mapicon, capicon].map((icon, index) => (
            <button key={index} className="p-2 rounded-full hover:bg-gray-100 transition">
              <img src={icon} alt={`Icon ${index + 1}`} className="h-6 w-6" />
            </button>
          ))}

          {/* Explore Courses Button */}
          <button className="px-6 py-2 border border-black text-black text-sm font-semibold rounded-lg hover:bg-gray-100 transition duration-200">
            Explore Courses
          </button>
        </div>
      </div>
    </div>
  )
}