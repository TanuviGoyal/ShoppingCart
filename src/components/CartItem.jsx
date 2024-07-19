import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {toast} from 'react-hot-toast';
import {remove} from '../redux/Slices/cartSlice'

const CartItem = ({item,itemIndex}) => {

  const dispatch=useDispatch();

  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.error("Item removed");
  }
  return (
    <div className="flex flex-col mx-auto justify-between">
       <div className="flex justify-between space-x-10">
        <div className="h-[180px]">
          <img src={item.image} className="h-full w-full"></img>
        </div>
        <div className="w-[120px]">
          <h1 className="text-gray-700 font-semibold text-lg text-left w-40 mt-1">
          {item.title}</h1>
          <h1 className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {item.description}</h1>
          <div className="flex">
            <p>{item.price}</p>
            <div onClick={removeFromCart}>
            <AiFillDelete />
            </div>
          </div>
        </div>

       </div>
    </div>
  );
};

export default CartItem;
