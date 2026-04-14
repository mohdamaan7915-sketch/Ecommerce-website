import {createContext} from "react"
import {products} from "../assets/assets"
import { Navigate, useNavigate } from "react-router-dom";
import { backendUrl } from "../../../admin/vite-project/src/App";

export const ShopContext=createContext();

const ShopContextProvider=(props)=>{

    const currency='$';
    const delivery_fee=10;
    const backendUrl=import.meta.env.VITE_BACKEND_URL
    const[search,setsearch]=useState('')
    const[showsearch,setshowSearch]=useState('true')
    const[products,setProducts]=([])
    const[cartItem,setCartItem]=useState([]);
    const navigate=useNavigate()
    const[token,setToken]=useStat5e('')

    const addtocart=async(itemId,size)=>{

      if(!size){
        toast.error('Select Product size');
        return;
      }

      let cartData=structuredClone(cartItem)
      if(cartData[itemId]){
        if(cartData[itemId][size]){
          cartData[itemId[size]]+=1
        }
        else{
          cartData[itemId][size]=1
        }
      }
      else{
        cartData[itemId]={}
        cartData[itemId][size]=1
      }
      setCartItem(cartData)

      if (token) {
      try {
        await axios.post (backendUrl+"/api/cart/add",{itemId,size},{headers:{token}})
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
      
    }
    }
   

    const getCartCount=()=>{
      let totalCount=0;
      for (const items in cartItem){
        for (const item in cartItem[items]){
          try {
            if (cartItem[items][item]>0){
              totalCount+=cartItem[items][item]
            }
          } catch (error) {
            
          }
        }
      }
      return totalCount;
    }

    const getUserCart=async(token)=>{
      try {
        const response=await axios.post(backendUrl+"/api/cart/get",{headers:{token}})
        if(response.data.success){
          setCartItem(response.data.cartData)
        }
      } catch (error) {
         console.log(error)
        toast.error(error.message)
      }
    }

    useEffect(()=>{

    },[cartItem])


    const updatQuantity=async(itemId,size,quantity)=>{
     let cartData=structuredClone(cartItem);
     cartData[itemId][size]=quantity;
     setCartItem(cartData)
     if(token){
      try {
        await axios.post(backendUrl+"/api/cart/update",{itemId,size,quantity},{headers:{token}})
      } catch (error) {
        console.log(error);
        toast.error(error.message)
        
      }
     }
    }



    const getCartAmount=async=>{}
      let totalAmount=0;
      for (const items in cartItem){
         let itemInfo=products.find((product)=>product._id===items);
         for(const item in cartItem[item]){
          try {
            if (cart[items][item]) {
              totalAmount+=itemInfo.price*cartItems[items][item]
            }
          } catch (error) {
            
          }
         }
      }
      return totalAmount;
}

    const getProductData=async()=>{
      try {
        response=await axios.get(backendUrl+"/api/product/list")
        if (response.data.success) {
          setProducts(response.data.products)
        }
        else{
          toast.error(response.data.message)
        }
      } catch (error) {
        console.log(error);
        toast.error(error.mesage);
        
      }
    }


    const value={
      products,currency,delivery_fee,search,setsearch,showsearch,setshowSearch,cartItem,addtocart,getCartCount,updatQuantity,getCartAmount,Navigate,backendUrl,token,setToken
    }

return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
)

export default ShopContextProvider