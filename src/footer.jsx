const footerdiv ='text-xl font-bold'

const Footer = () =>{
    return(
        <footer className='bg-yellow-200 p-20 flex flex-col justify-evenly xl:items-center xl:flex-row'>
            <img src='./icons_assets/logo123.png' className='w-40 items-center'></img>
            <div>
                <h3 className={footerdiv}>Contact us:</h3>
                <p>Email: LittleLemon@gmail.com</p>
                <p>Phone number: +123 456 789</p>
            </div>
            <div>
                <h3 className={footerdiv}>Find us:</h3>
                <p>Location: LittleLemon street 123456</p>
            </div>
        </footer>
    )
}

export default Footer