import orderModel from "../models/orderModel";
import userModel from "../models/userModel";


//Placing orders using cod
const placeOrder=async(req,res)=>{
  try {
    const{userId,items,amount,address}=req.body;
    const orderData={
      userId,
      items,
      address,
      amount,
      paymentMethod:"COD",
      data:Date.now()
    }
    const newOrder=new orderModel(orderData)
    await newOrder.save()

    await userModel.findByIdAndUpdate(userId,{cartData:{}})
  } catch (error) {
    console.log(error)
  }
}

//Placing orders using Stripe method
const placeOrderStripe=async(req,res)=>{

}

//Placing orders using razorpay method
const placeOrderRazorpay=async(req,res)=>{

}

//All Orders data for admin panel
const allOrders=async(req,res)=>{

}

//User Order data for Frontend
const userOrders=async(req,res)=>{

}

//update order status from Admin Panel
const updateStatus=async(req,res)=>{

}

export {placeOrder,placeOrderStripe,placeOrderRazorpay,allOrders,userOrders,updateStatus}