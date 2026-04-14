import React from 'react'
import { assets } from '../assets/assets'
import {useLocation} from 'react-roter-dom'

const Searchbar = () => {
     const{search,setsearch,showSearch,setShowSearch}=useContext(ShopContext)
     const location=useLocation();
     const[visible,setVisible]=useState();

     useEffect(()=>{
       if (location.pathname.includes('collection')) {
        setVisible(true);
       }
       else{
        setVisible(false);
       }
     },[location])

  return showSearch&&visible?(
    <div className='border-t boder-b bg-gray-50 text-center'>
        <div className='inline-flex items-center justify-center border border-gray-400'>
        <input value={search} onChange={(e)=>setsearch(e.target.value)}type="text" placeholder="Search" className='flex-1 outline-none bg-inherit text-sm '/>
        <img className='w-4' src={assets.search_icon} alt="" />
        </div>
     <img onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer' src={assets.cross_icon} alt="" />
    </div>
  ):null
}

export default Searchbar
