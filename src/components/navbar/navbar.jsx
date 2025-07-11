import { Link } from 'react-router-dom';
import { navLinks } from '../../constants/index';
import { ShoppingBag } from 'lucide-react';

function Navbar() {
  return (
    <div className="w-full flex justify-around h-21 bg-[#C2EFD4] items-center">
      <div>
      <Link to={"/"}>
           <h1 className="text-[#224F34] font-bold text-[25px] ">
          GulchehraDrawer
        </h1>
      </Link>
      </div>
      <div className=" flex   justify-end items-center gap-8 space-x-4">
        <div className='flex justify-center gap-9  mr-[120px] items-center w-[700px]'>
          {navLinks.map((nav) => (

          <a href={nav.path} key={nav.slug} className="text-[#224F34] text-[20px] mr-[-8px] ml-[50px] font-bold hover:underline hover:text-gray-400">
            {nav.name}
          </a>
          
        ))}
        </div>
        
       <span className='flex justify-around  items-center  gap-6 '>
        <span className='text-green-700 text-[30px] mr-[-11px]'>|</span>
         <ShoppingBag className='text-green-800 mr-[40px] ml-[30px]'/>
      <button className='text-[17px]   font-bold rounded-sm border-3 border-green-900 w-[160px] h-[40px] text-[#224F34]'>Ro`yhatdan o`tish</button>
       </span>
      </div>
    </div>
  );
}

export default Navbar;
