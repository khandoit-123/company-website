import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

function Checkout({state, resetOrderState}) {
  const [isOpen, setIsOpen] = useState(false)

  function close() {
    setIsOpen(false)
  }

  let subtotal = 0

  const prices = {
    milk: 2,
    coffee: 2,
    hot_chocolate: 3,
    champagne: 5,
    orange_juice: 3,
    lime_water: 1,
    salad: 8,
    cake: 4,
    bruschetta: 10,
    noodle: 18,
    fried_rice: 15,
    fried_chicken: 20,
  };

  const [tablenumber, setTablenumber] = useState('')

  function checktable () {
    if (tablenumber === '' || Number(tablenumber)>20 || Number(tablenumber) <= 0){
      alert('Please input a valid table number')
    }
    else{
      close()
      alert('Your order has been sent!')
      resetOrderState()
    }
  }

    return (
        <div>
          <FontAwesomeIcon onClick={() => setIsOpen(!isOpen)} icon={faCartShopping} 
          className="hover:text-gray-700 text-gray-900 fixed bottom-4 right-4 text-4xl bg-gray-400 p-3 rounded-4xl hover:scale-110 duration-400 cursor-pointer"></FontAwesomeIcon>
          <Dialog open={isOpen} className="relative z-10 text-white" onClose={close}>  
            <DialogPanel className="flex flex-col justify-center items-center bg-gray-400/90 fixed inset-y-0 w-full xl:w-1/4 xl:right-0">
              <Button className="rounded-md bg-red-700 px-3 py-1.5 text-sm/6 font-semibold absolute top-4 right-4 cursor-pointer hover:bg-red-900" onClick={close}>Close</Button>
              <DialogTitle className="text-2xl bg-gray-700 px-3 py-1.5 rounded-md font-semibold">Checkout</DialogTitle>
              <p className="text-sm/6 mt-4 bg-gray-700 px-3 py-1.5 rounded-t-md font-semibold">Your Order</p>
              <div className="text-sm/6 bg-gray-700 px-3 py-1.5 rounded-md font-semibold w-7/8">
              {Object.entries(state).filter(([_, qty]) => qty > 0).length === 0 ? (
                <p className="text-center">No items selected.</p>
              ) : (
                <ul className="list-disc pl-4">
                    {Object.entries(state)
                      .filter(([_, qty]) => qty > 0)
                      .map(([item, qty]) => {
                        const price = prices[item]
                        const total = (qty * price)
                        subtotal += total
                        return (
                          <div>
                            <li>
                              <div className="flex justify-between">
                                <span>
                                  {item
                                    .split('_')
                                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                    .join(' ')} x {qty}
                                </span>
                                <span>${total}</span>
                              </div>
                            </li>
                          </div>
                        )
                      })}
                      <div className="flex justify-center">
                        <p>Your total is ${subtotal}</p>
                      </div>
                </ul>
              )}
              </div>
              <input onChange={(e) => setTablenumber(e.target.value)}type="number" value={tablenumber} className="my-4 text-sm/6 mt-4 bg-gray-700 px-3 py-1.5 rounded-md font-semibold" placeholder="Input your table number"></input>
              <Button className="rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold hover:cursor-pointer hover:bg-gray-900" onClick={checktable}>Checkout!</Button>
            </DialogPanel>
          </Dialog>        
        </div>
      )
}

export default Checkout