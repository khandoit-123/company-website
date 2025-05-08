import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

function Checkout({state}) {
    const [isOpen, setIsOpen] = useState(false)

    function close() {
      setIsOpen(false)
    }

    function open() {
      setIsOpen(true)
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
              <div className="text-sm/6 bg-gray-700 px-3 py-1.5 rounded-md font-semibold">
              {Object.entries(state).filter(([_, qty]) => qty > 0).length === 0 ? (
                <p className="text-center">No items selected.</p>
              ) : (
                <ul className="list-disc pl-4">
                  {Object.entries(state)
                    .filter(([_, qty]) => qty > 0)
                    .map(([item, qty]) => (
                      
                      <li>
                        {item.charAt(0).toUpperCase() + item.slice(1)}: {qty}
                      </li>
                    ))}
                </ul>
              )}
              </div>
              <Button className="rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold" onClick={close}>Checkout!</Button>
            </DialogPanel>
          </Dialog>        
        </div>
      )
}

export default Checkout