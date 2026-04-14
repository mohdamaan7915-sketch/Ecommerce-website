import React from 'react'
import {ShopContext} from '../context/ShopContext'
import { assets, products } from '../assets/assets'
import CartTotal from '../components/CartTotal'
const Cart = () => {
  const[cartData,setCartData,updateQuantity,navigate]=useState([])
  useEffect(()=>{
    const tempData=[];
    for (const items in cartItem){ 
        for (const item in cartItem[item]){
            if (cartItem[items][item]>0){
                tempData.push({
                    _id:items,
                    size:item,
                    quantity:cartItem[items][item]
                })
            }
        }
    }
    setCartData(tempData)
  },[cartItem])
  return (
    <div className='border-t pt-14'>
        <div className='text-2xl mb-3'>
            <Title text1={'YOUR'} text2={'CART'}/>
        </div>
        <div>
            {
                cartData.map((item,index)=>{
              const productData=products.find((product)=>product._id===item._id);
              return(
                <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-col'>
                    <div className='flex items-start gap-6'>
                        <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
                        <div>
                            <p className='w-16 sm:w-20'>{productData.name}</p>
                            <div className='flex items-center gap-5 mt-2'>
                                <p>{currency}{productData.price}</p>
                                <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                            </div>

                        </div>

                    </div>
                   <input onChange={(e)=>e.target.value==='0'?null:updateQuantity(item._id,item.size,Number(e.target.value))}    className='border max-w-20 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={item.quantity}/>
                   <img onClick={()=>updateQuantity(item._id,item.size,0)}className='w-4 mr-4 cursor-pointer' src={assets.bin_icon} alt="" />
                </div>
              )
                })
            }
        </div>
    
       
      <div className='flex justify-end my-20'>
         <div className='w-full sm;w-[450px]'>
          <CartTotal/>
          <div className='w-full text-end'>
            <button onClick={()=>navigate('/place-order')}className='bg-black text-white text-sm my-8px-8 py-3'>PROCEED TO PAY</button> 
         </div>
         </div>
      </div>
    </div>
  )
}

export default Cart
