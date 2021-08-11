import { Carousel } from 'react-bootstrap'

function Slider() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://ae01.alicdn.com/kf/HTB1pazNKVXXXXcHXFXXq6xXFXXXV/201380146/HTB1pazNKVXXXXcHXFXXq6xXFXXXV.jpg?size=144740&height=404&width=1000&hash=28ab98156dafcc73c709779da493b69a"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://theburgershack.pk/img/slider/slider-1.jpg"
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1515467410840-96a3cf21dbea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=890&q=80"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider;