import { Transition, Button } from '@headlessui/react'
import { useInView } from './Modules'
import { useNavigate } from 'react-router-dom'
import Footer from './footer'

const picsize = 'w-50 h-40 rounded-xl mb-5'
const cft = 'text-4xl'
const cf ='text-xl text-gray-600'
const homediv ='flex flex-col items-center w-70 bg-gray-300 rounded-xl p-5 my-10 hover:scale-110 animate-fade duration-500 transition-all'
const transitionani = {enter: "transition duration-500", enterFrom: "opacity-0 translate-y-4", enterTo: "opacity-100 translate-y-0"}


const Home = () => {

    const [ref, isInView] = useInView({
        threshold: 0.3})
    const [ref1, isInView1] = useInView({
        threshold: 0.3})
    const [ref2, isInView2] = useInView({
        threshold: 0.3})
    const navigate = useNavigate()

    return(
        <Transition show={true} appear={true} {...transitionani}>
            <div>
                <section className="justify-between items-center p-20 mb-20 italic font-serif bg-yellow-200 overflow-visible xl:flex xl:py-0">
                    <div>
                        <h1 className="text-5xl mb-5">Little Lemon</h1>
                        <p className="ml-10 text-2xl">"A mediterranean restaurant that focuses on quality and comfort"</p>
                    </div>
                    <div className="flex relative justify-center pt-10 xl:-mb-15 xl:pr-20">
                        <img src="/icons_assets/food.jpg" className="rounded-xl h-75 xl:h-100 w-80" alt='food'></img>
                    </div>
                </section>
                <section className="font-serif m-10 xl:mx-30">
                    <h2 className="italic stroke-text text-5xl">Our Specials...</h2>
                    <div className='flex flex-col items-center xl:flex-row xl:mx-40 xl:justify-between'>
                        <div ref={ref} className={`cursor-pointer xl:transform duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className= {homediv} onClick={()=>navigate('Menu-Food')}>
                                <img src="/icons_assets/greeksalad.jpg" className={picsize}></img>
                                <h3 className={cft}>Greek Salad</h3>
                                <p className={cf}>A crisp, refreshing mix of seasonal greens, cherry tomatoes, cucumbers, topped with crunchy croutons and your choice of dressing.</p>
                            </div>
                        </div>
                        <div ref={ref1} className={`cursor-pointer xl:transform duration-1500 ${isInView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className={homediv} onClick={()=>navigate('Menu-Food')}>
                                <img src="/icons_assets/lemonfood.jpg" className={picsize}></img>
                                <h3 className={cft}>Lemon Cake</h3>
                                <p className={cf}>A light and fluffy sponge infused with fresh lemon zest, layered with tangy lemon curd. The perfect balance of sweet and citrusy.</p>
                            </div>
                        </div>
                        <div ref={ref2} className={`cursor-pointer xl:transform duration-2000 ${isInView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <div className={homediv} onClick={()=>navigate('Menu-Food')}>
                                <img src="/icons_assets/bread.jpg" className={picsize}></img>
                                <h3 className={cft}>Bruschetta</h3>
                                <p className={cf}>Crispy grilled artisan bread topped with a vibrant mix of vine-ripened tomatoes, fresh basil, garlic, and extra virgin olive oil.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-end'>
                        <h2 className='italic stroke-text text-5xl mr-20 mb-5'>Hungry?</h2>
                        <Button className='mr-10 text-3xl bg-yellow-400 p-2 rounded-xl hover:bg-yellow-200 hover:scale-110 duration-500 cursor-pointer' onClick={()=>{navigate('/Order'); window.scroll(0,0)}}>Order Now!</Button>
                    </div>
                </section>
                <Footer></Footer>
            </div>
        </Transition>
    )
}

export default Home