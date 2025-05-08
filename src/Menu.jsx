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

const MenuFood = () => {

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
            <h1 className="flex justify-center text-4xl xl:text-5xl italic font-serif m-5">Our Menu ~ Food</h1>
            <Dropdown></Dropdown>
            <Transition show={true} appear={true} {...transitionani}>
                <section className="font-serif mb-10 xl:px-30">
                    <div className='flex flex-col items-center xl:flex-row xl:mx-40 xl:justify-between'>
                        <div ref={ref} className={`xl:transform duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className={homediv}>
                                <img src="./icons_assets/greeksalad.jpg" alt='salad' className={picsize}></img>
                                <h3 className={cft}>Greek Salad</h3>
                                <p className={cf}>A crisp, refreshing mix of seasonal greens, cherry tomatoes, cucumbers, topped with crunchy croutons and your choice of dressing.</p>
                            </div>
                        </div>
                        <div ref={ref1} className={`xl:transform duration-1500 ${isInView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className={homediv}>
                                <img src="./icons_assets/lemonfood.jpg" alt='lemon cake'className={picsize}></img>
                                <h3 className={cft}>Lemon Cake</h3>
                                <p className={cf}>A light and fluffy sponge infused with fresh lemon zest, layered with tangy lemon curd. The perfect balance of sweet and citrusy.</p>
                            </div>
                        </div>
                        <div ref={ref2} className={`xl:transform duration-2000 ${isInView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className={homediv}>
                                <img src="./icons_assets/bread.jpg" alt='bread' className={picsize}></img>
                                <h3 className={cft}>Bruschetta</h3>
                                <p className={cf}>Crispy grilled artisan bread topped with a vibrant mix of vine-ripened tomatoes, fresh basil, garlic, and extra virgin olive oil.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center xl:flex-row xl:mx-40 xl:justify-between'>
                    <div ref={ref3} className={`xl:transform duration-1000 ${isInView3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className={homediv}>
                                <img src="./icons_assets/friedrice.jpg" alt='fried rice' className={picsize}></img>
                                <h3 className={cft}>Fried Rice</h3>
                                <p className={cf}>Aromatic jasmine rice stir-fried to perfection and your choice of chicken, or shrimp. Seasoned with garlic and a hint of sesame oil for a flavorful finish.</p>
                            </div>
                        </div>
                        <div ref={ref4} className={`xl:transform duration-1500 ${isInView4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className={homediv}>
                                <img src="./icons_assets/friedchicken.jpg" alt='fried chicken' className={picsize}></img>
                                <h3 className={cft}>Fried Chicken</h3>
                                <p className={cf}>Golden-brown chicken marinated in a blend of herbs and spices, then deep-fried to juicy perfection and served hot with a crunchy coating.</p>
                            </div>
                        </div>
                        <div ref={ref5} className={`xl:transform duration-2000 ${isInView5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className={homediv}>
                                <img src="./icons_assets/noodle.jpeg" alt='noodle' className={picsize}></img>
                                <h3 className={cft}>Noodles</h3>
                                <p className={cf}>Wok-tossed noodles with a medley of crisp vegetables, garlic, and your choice of chicken, beef, shrimp, or tofu, coated in a savory soy-based sauce.</p>
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

export default MenuFood