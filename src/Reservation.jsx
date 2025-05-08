import { Transition, Input, Field, Button } from "@headlessui/react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const transitionani = {enter: "transition ease-out duration-500",
    enterFrom: "opacity-0 translate-y-4",
    enterTo: "opacity-100 translate-y-0",}
const formdesc = 'bg-gray-700 py-5 border m-2 w-60 text-white rounded-xl text-center'

const Reservation = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Form has been submitted!");
        }
    const [date, setDate] = useState(null)

    return(

        <div>
            <Transition show={true} appear={true} {...transitionani}>
                <section>
                    <h1 className="flex justify-center text-5xl italic font-serif m-5">Reservation</h1>
                    <form className='flex justify-center' onSubmit={handleSubmit}>
                        <Field className='flex flex-col items-center bg-[url("/icons_assets/chairs.jpeg")] bg-cover bg-center p-4 rounded-md w-[80vw]'>
                            <Input required type="text" name='name' className={formdesc} placeholder="Enter your full name"></Input>
                            <Input required type="tel" name='number' className={formdesc} placeholder="Enter your number"></Input>
                            <Input required type="email" name='email' className={formdesc} placeholder="Enter your email"></Input>
                            <Input required type="number" min={0}  max={20} name='people' className={formdesc} placeholder="Amount of people"></Input>
                            <DatePicker selected={date} onChange={(date) => setDate(date)} placeholderText="Select a date" className={formdesc} dateFormat="yyyy-MM-dd"></DatePicker>
                            <Button type="submit" className={`${formdesc} hover:cursor-pointer bg-red-700 hover:bg-red-500 active:bg-red-600`}>Submit</Button>
                        </Field>
                    </form>
                </section>
            </Transition>
        </div>
    )
} 

export default Reservation