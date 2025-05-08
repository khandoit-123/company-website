import { Transition, Button } from '@headlessui/react'
import { useInView } from './Modules'
import Dropdown from './Dropdown'
import { useNavigate } from 'react-router-dom'
import Footer from './footer'

const transitionani = {enter: "transition ease-out duration-500",
    enterFrom: "opacity-0 translate-y-4",
    enterTo: "opacity-100 translate-y-0",}
const homediv ='flex flex-col items-center w-70 bg-gray-300 rounded-xl p-5 mb-10 hover:scale-110 animate-fade duration-500 transition-all'
const cft = 'text-4xl'
const cf ='text-xl text-gray-600'
const picsize = 'w-50 h-40 rounded-xl mb-5'

const MenuBeverage = () => {

    const navigate = useNavigate()

    const [ref, isInView] = useInView({
            threshold: 0.3})
    const [ref1, isInView1] = useInView({
            threshold: 0.3})
    const [ref2, isInView2] = useInView({
            threshold: 0.3})
    const [ref3, isInView3] = useInView({
            threshold: 0.3})
    const [ref4, isInView4] = useInView({
            threshold: 0.3})
    const [ref5, isInView5] = useInView({
            threshold: 0.3})

    return (
        <div>
            <h1 className="flex justify-center text-4xl xl:text-5xl italic font-serif m-5">Our Menu ~ Drinks</h1>
            <Dropdown></Dropdown>
            <Transition show={true} appear={true} {...transitionani}>
                <section className="font-serif mb-10 xl:px-30">
                    <div className='flex flex-col items-center xl:flex-row xl:mx-40 xl:justify-between'>
                        <div ref={ref} className={`xl:transform duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className={homediv}>
                                <img src="./icons_assets/limewater.jpeg" alt='limewater' className={picsize}></img>
                                <h3 className={cft}>Lime Juice</h3>
                                <p className={cf}>Cool, crisp, and naturally refreshing — our house-made lime water is crafted with freshly squeezed limes with chilled mineral water and served over ice.</p>
                            </div>
                        </div>
                        <div ref={ref1} className={`xl:transform duration-1500 ${isInView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className={homediv}>
                                <img src="./icons_assets/milk.jpeg" alt='milk' className={picsize}></img>
                                <h3 className={cft}>Milk</h3>
                                <p className={cf}>A simple classic — smooth, creamy, and served ice-cold. Perfect on its own or paired with cookies, desserts, or a hearty breakfast.</p>
                            </div>
                        </div>
                        <div ref={ref2} className={`xl:transform duration-2000 ${isInView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className={homediv}>
                                <img src="./icons_assets/orange.jpeg" alt='orange juice' className={picsize}></img>
                                <h3 className={cft}>Orange Juice</h3>
                                <p className={cf}>Freshly squeezed orange juice. Bursting with natural sweetness and tang, it's made from the juiciest, ripest and zestiest oranges.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center xl:flex-row xl:mx-40 xl:justify-between'>
                    <div ref={ref3} className={`xl:transform duration-1000 ${isInView3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className={homediv}>
                                <img src="./icons_assets/champagne.jpeg" alt='champagne' className={picsize}></img>
                                <h3 className={cft}>Champagne</h3>
                                <p className={cf}>Celebrate in style with our selection of exquisite champagnes, offering a perfect balance of effervescence and elegance.</p>
                            </div>
                        </div>
                        <div ref={ref4} className={`xl:transform duration-1500 ${isInView4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className={homediv}>
                                <img src="./icons_assets/chocolate.jpeg" alt='Iced Chocolate' className={picsize}></img>
                                <h3 className={cft}>Iced Chocolate</h3>
                                <p className={cf}>Velvety hot chocolate, made from the finest dark chocolate and blended to perfection with steamed milk. Topped with whipped cream and cocoa.</p>
                            </div>
                        </div>
                        <div ref={ref5} className={`xl:transform duration-2000 ${isInView5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className={homediv}>
                                <img src="./icons_assets/coffee.jpeg" alt='coffee' className={picsize}></img>
                                <h3 className={cft}>Coffee</h3>
                                <p className={cf}>Start your day with our expertly brewed coffee, made from freshly ground premium beans, crafted to deliver the perfect balance of flavor and aroma.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <Button className='text-3xl bg-yellow-400 p-2 rounded-xl hover:bg-yellow-200 hover:scale-110 duration-500 cursor-pointer flex' onClick={()=>navigate('/Order')}>Order Now!</Button>
                    </div>
                </section>
            </Transition>
            <Footer></Footer>
        </div>
    );
};

export default MenuBeverage