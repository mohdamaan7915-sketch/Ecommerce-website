import {React} from 'react'
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';


const BestSeller=()=>{
    const[bestSeller,setBestSeller]=useState([]);
    const{products}=useContext(ShopContext)

    useEffect(()=>{
     const bestProduct=products.filter((item)=>item.bestSeller)
     setBestSeller(bestProduct.slice(0,5))
    },[products])


    return(
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLER'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Making the web more beautiful, fast, and open through great typography.</p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            {
                bestSeller.map((item,index)=>(
                 <ProductItem key={index} id={item._id} name={item.name} image={item.image}/>
                ))
            }

        </div>

    </div>
)
}
export default BestSeller
