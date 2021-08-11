import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import "./styles/stylefood.css";
// {/* <link rel="stylesheet" href="./stylefood.css" />; */}



const Foodscafecustomer = () => {
    const [promoscafe, setPromoscafe] = useState()
    useEffect(() => {
        axios.get("http://localhost:7781/promoscafe")
            .then(response => {
                console.log(response)
                setPromoscafe(response.data)
            })
            .catch(err => alert("Error in getting promos"))
    }, [])
    console.log(promoscafe)

    const history = useHistory()

    const pay =(e)=> {
        history.push({
            pathname:'/payment',
            state: [{ price: e }]
        }
        )
        // console.log(e)
       
    }


    return (
        <>
            <div className="food-search text-center">
                <div className="container">
                    <h2 className="promohead">Welcome to Butler Cafe</h2>
                </div>
            </div>

            <div className="food-menu">
                <div className="container">
                    <h2 className="text-center">Food Menu</h2>



                    {promoscafe?.map(promocafe => (
                        <div className="food-menu-box">
                            <div className="food-menu-img">
                                <img src="https://images.saymedia-content.com/.image/t_share/MTc4MTg2MTE1OTMxNzc2NjE2/chai-paratha.png"
                                    alt="Chicke Hawain Pizza" className="img-responsive img-curve" />
                            </div>

                            <div className="food-menu-desc">
                                <h4>{promocafe?.title}</h4>
                                <div className="card-price-wrapper">
                                    <span>RS: {promocafe?.afterprice}</span>
                                    <span className="card-price-old">RS: {promocafe?.beforeprice}</span>
                                </div>
                                {/* <p className="food-price"><span>{promo?.beforeprice}</span> <span> {promo?.afterprice}</span></p> */}
                                <p className="food-detail">
                                    Expiry Date: <br></br>
                                    {promocafe?.expirydate}
                                </p>


                                {/* <Link to="/payment"> */}

                                    <a onClick={()=>pay(promocafe.afterprice)} className="btn btn-primary">Order Now</a>
                                {/* </Link> */}
                            </div>
                        </div>
                    )

                    )}
                </div>
            </div>

        </>
    )


}

export default Foodscafecustomer;