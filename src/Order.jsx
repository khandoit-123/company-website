import { Transition } from "@headlessui/react"
import { useReducer } from "react"
import Checkout from "./checkout"

const transitionani = {enter: "transition ease-out duration-500",
    enterFrom: "opacity-0 translate-y-4",
    enterTo: "opacity-100 translate-y-0",}
const homediv ='flex flex-col items-center w-70 bg-gray-300 rounded-xl p-5 mb-10 hover:scale-110 animate-fade duration-500 transition-all'
const cft = 'text-2xl'
const picsize = 'w-50 h-40 rounded-xl mb-5'
const titlef = 'flex justify-center text-4xl xl:text-5xl italic font-serif m-5'
const buttonf = 'bg-yellow-400 hover:bg-yellow-200 hover:cursor-pointer w-20 rounded-xl m-3'
const initialState = {milk: 0, coffee: 0, choco: 0, champagne: 0, orange_juice: 0, lime_water: 0, salad: 0, cake: 0, bruschetta: 0, noodle: 0, fried_rice: 0, fried_chicken: 0, }

function reducer(state, action) {
    switch (action.type) {
        case 'add_milk':
            return { ...state, milk: state.milk + 1 };
        case 'minus_milk':
            return { ...state, milk: Math.max(0, state.milk - 1) };
        case 'add_coffee':
            return { ...state, coffee: state.coffee + 1 };
        case 'minus_coffee':
            return { ...state, coffee: Math.max(0, state.coffee - 1) };
        case 'add_lime_water':
            return { ...state, lime_water: state.lime_water + 1 };
        case 'minus_lime_water':
            return { ...state, lime_water: Math.max(0, state.lime_water - 1) };
        case 'add_orange_juice':
            return { ...state, orange_juice: state.orange_juice + 1 };
        case 'minus_orange_juice':
            return { ...state, orange_juice: Math.max(0, state.orange_juice - 1) };
        case 'add_champagne':
            return { ...state, champagne: state.champagne + 1 };
        case 'minus_champagne':
            return { ...state, champagne: Math.max(0, state.champagne - 1) };
        case 'add_choco':
            return { ...state, choco: state.choco + 1 };
        case 'minus_choco':
            return { ...state, choco: Math.max(0, state.choco - 1) };
        case 'add_salad':
            return { ...state, salad: state.salad + 1 };
        case 'minus_salad':
            return { ...state, salad: Math.max(0, state.salad - 1) };
        case 'add_cake':
            return { ...state, cake: state.cake + 1 };
        case 'minus_cake':
            return { ...state, cake: Math.max(0, state.cake - 1) };
        case 'add_bruschetta':
            return { ...state, bruschetta: state.bruschetta + 1 };
        case 'minus_bruschetta':
            return { ...state, bruschetta: Math.max(0, state.bruschetta - 1) };
        case 'add_noodle':
            return { ...state, noodle: state.noodle + 1 };
        case 'minus_noodle':
            return { ...state, noodle: Math.max(0, state.noodle - 1) };
        case 'add_fried_rice':
            return { ...state, fried_rice: state.fried_rice + 1 };
        case 'minus_fried_rice':
            return { ...state, fried_rice: Math.max(0, state.fried_rice - 1) };
        case 'add_fried_chicken':
            return { ...state, fried_chicken: state.fried_chicken + 1 };
        case 'minus_fried_chicken':
            return { ...state, fried_chicken: Math.max(0, state.fried_chicken - 1) };
        default:
            return state;
        }
      }

const Order = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <div>
            <Checkout state={state}></Checkout>
            <Transition show={true} appear={true} {...transitionani}>
                <div>                       
                    <section >
                        <h1 className={titlef}>Drinks Menu</h1>
                        <div className='flex flex-col items-center xl:flex-row xl:mx-40 xl:justify-between font-serif xl:px-30'>
                            <div className={homediv}>
                                <img src="/icons_assets/champagne.jpeg" alt='champagne' className={picsize}></img>
                                <h3 className={cft}>Champagne ($5)</h3>
                                <div className="flex space-x-2">
                                    <button className={buttonf} onClick={() => dispatch({ type: 'minus_champagne' })}>-</button>
                                    <button className={buttonf} onClick={() => dispatch({ type: 'add_champagne' })}>+</button>
                                </div>
                                <p>Count: {state.champagne}</p>
                            </div>
                            <div className={homediv}>
                                <img src="/icons_assets/chocolate.jpeg" alt='Iced Chocolate' className={picsize}></img>
                                <h3 className={cft}>Iced Chocolate ($3)</h3>
                                <div className="flex space-x-2">
                                    <button className={buttonf} onClick={() => dispatch({ type: 'minus_choco' })}>-</button>
                                    <button className={buttonf} onClick={() => dispatch({ type: 'add_choco' })}>+</button>
                                </div>                  
                                <p>Count: {state.choco}</p>
                            </div>
                            <div className={homediv}>
                                <img src="/icons_assets/coffee.jpeg" alt='coffee' className={picsize}></img>
                                <h3 className={cft}>Coffee ($2)</h3>
                                <div className="flex space-x-2">
                                    <button className={buttonf} onClick={() => dispatch({ type: 'minus_coffee' })}>-</button>
                                    <button className={buttonf} onClick={() => dispatch({ type: 'add_coffee' })}>+</button>
                                </div>
                                <p>Count: {state.coffee}</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center xl:flex-row xl:mx-40 xl:justify-between font-serif mb-10 xl:px-30'>
                            <div className={homediv}>
                                <img src="/icons_assets/limewater.jpeg" alt='lime water' className={picsize}></img>
                                <h3 className={cft}>Lime Water ($1)</h3>
                                <div className="flex space-x-2">
                                    <button className={buttonf} onClick={() => dispatch({ type: 'minus_lime_water' })}>-</button>
                                    <button className={buttonf} onClick={() => dispatch({ type: 'add_lime_water' })}>+</button>
                                </div>
                                <p>Count: {state.lime_water}</p>
                            </div>
                            <div className={homediv}>
                                <img src="/icons_assets/milk.jpeg" alt='milk' className={picsize}></img>
                                <h3 className={cft}>Milk ($2)</h3>
                                <div className="flex space-x-2">
                                    <button className={buttonf} onClick={() => dispatch({ type: 'minus_milk' })}>-</button>
                                    <button className={buttonf} onClick={() => dispatch({ type: 'add_milk' })}>+</button>
                                </div>
                                <p>Count: {state.milk}</p>
                            </div>
                            <div className={homediv}>
                                <img src="/icons_assets/orange.jpeg" alt='orange juice' className={picsize}></img>
                                <h3 className={cft}>orange Juice($3)</h3>
                                <div className="flex space-x-2">
                                    <button className={buttonf} onClick={() => dispatch({ type: 'minus_orange_juice' })}>-</button>
                                    <button className={buttonf} onClick={() => dispatch({ type: 'add_orange_juice' })}>+</button>
                                </div>
                                <p>Count: {state.orange_juice}</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h1 className={titlef}>Food Menu</h1>
                        <div className='flex flex-col items-center xl:flex-row xl:mx-40 xl:justify-between font-serif xl:px-30'>
                            <div className={homediv}>
                                <img src="/icons_assets/greeksalad.jpg" alt='salad' className={picsize}></img>
                                <h3 className={cft}>Greek Salad ($8)</h3>
                                <div className="flex space-x-2">
                                    <button className={buttonf} onClick={() => dispatch({ type: 'minus_salad' })}>-</button>
                                    <button className={buttonf} onClick={() => dispatch({ type: 'add_salad' })}>+</button>
                                </div>
                                <p>Count: {state.salad}</p>
                            </div>  
                            <div className={homediv}>
                                <img src="/icons_assets/lemonfood.jpg" alt='lemon cake'className={picsize}></img>
                                <h3 className={cft}>Lemon Cake ($4)</h3>
                                <div className="flex space-x-2">
                                    <button className={buttonf} onClick={() => dispatch({ type: 'minus_cake' })}>-</button>
                                    <button className={buttonf} onClick={() => dispatch({ type: 'add_cake' })}>+</button>
                                </div>
                                <p>Count: {state.cake}</p>
                            </div>    
                            <div className={homediv}>
                                <img src="/icons_assets/bread.jpg" alt='bread' className={picsize}></img>
                                <h3 className={cft}>Bruschetta ($10)</h3>
                                <div className="flex space-x-2">
                                    <button className={buttonf} onClick={() => dispatch({ type: 'minus_bruschetta' })}>-</button>
                                    <button className={buttonf} onClick={() => dispatch({ type: 'add_bruschetta' })}>+</button>
                                </div>
                                <p>Count: {state.bruschetta}</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center xl:flex-row xl:mx-40 xl:justify-between font-serif xl:px-30'>            
                            <div className={homediv}>
                                <img src="/icons_assets/friedrice.jpg" alt='fried rice' className={picsize}></img>
                                <h3 className={cft}>Fried Rice ($15)</h3>
                                <div className="flex space-x-2">
                                    <button className={buttonf} onClick={() => dispatch({ type: 'minus_fried_rice' })}>-</button>
                                    <button className={buttonf} onClick={() => dispatch({ type: 'add_fried_rice' })}>+</button>
                                </div>
                                <p>Count: {state.fried_rice}</p>
                            </div>
                            <div className={homediv}>
                                <img src="/icons_assets/friedchicken.jpg" alt='fried chicken' className={picsize}></img>
                                <h3 className={cft}>Fried Chicken ($20)</h3>
                                <div className="flex space-x-2">
                                    <button className={buttonf} onClick={() => dispatch({ type: 'minus_fried_chicken' })}>-</button>
                                    <button className={buttonf} onClick={() => dispatch({ type: 'add_fried_chicken' })}>+</button>
                                </div>
                                <p>Count: {state.fried_chicken}</p>
                            </div>
                            <div className={homediv}>
                                <img src="/icons_assets/noodle.jpeg" alt='noodle' className={picsize}></img>
                                <h3 className={cft}>Noodles ($18)</h3>
                                <div className="flex space-x-2">
                                    <button className={buttonf} onClick={() => dispatch({ type: 'minus_noodle' })}>-</button>
                                    <button className={buttonf} onClick={() => dispatch({ type: 'add_noodle' })}>+</button>
                                </div>
                                <p>Count: {state.noodle}</p>
                            </div>
                        </div>
                    </section>
                </div> 
            </Transition>
        </div>
    )
} 

export default Order