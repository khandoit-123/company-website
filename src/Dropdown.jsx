import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/16/solid'
import { Link } from 'react-router-dom'
const Dropdown = () =>{
    return(
        <div className='flex my-5 justify-center'>
            <Menu as="div" className="relative inline-block text-left">
                {({ open }) => (
                <div>
                    <MenuButton className={`w-50 inline-flex items-center bg-gray-700 p-2 text-gray-200 ${open ? 'rounded-t-xl' :'rounded-xl'}`}>Choice of items<ChevronUpIcon className={`size-4 fill-white duration-500 ${open ? 'rotate-180 ' :''}`} /></MenuButton>
                    <MenuItems anchor="bottom" className='outline-none' >
                        <MenuItem className="w-50 items-center bg-gray-700 p-2">
                            <Link className="block data-focus:bg-gray-500 gap-2 text-gray-200" to="/Menu-Food">Food</Link>
                        </MenuItem>
                        <MenuItem className="w-50 items-center bg-gray-700 p-2 ">
                            <Link className="block data-focus:bg-gray-500 text-gray-200 rounded-b-xl" to="/Menu-Beverage">Drinks</Link>
                        </MenuItem>
                    </MenuItems>
                </div>
                )}
            </Menu>
        </div>
    )
}

export default Dropdown