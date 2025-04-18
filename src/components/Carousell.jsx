import { Carousel } from "@material-tailwind/react";
const  CarouselSection=()=>{
    return(
        <div className="h-64 border border-black">
            <Carousel className>
                <img
                    src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                    alt="image 3"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://images.unsplash.com/photo-1744309327974-d7d195a36c3a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="image 3"
                    className="h-full w-full object-cover"
                />
            </Carousel>
        </div>
    )
}
export default CarouselSection ;