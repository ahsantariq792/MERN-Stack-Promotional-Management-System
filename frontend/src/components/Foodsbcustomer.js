import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import "./styles/stylefood.css";
// {/* <link rel="stylesheet" href="./stylefood.css" />; */}



const Foodsbcustomer = () => {
    const [promos, setPromos] = useState()
    useEffect(() => {
        axios.get("http://localhost:7781/promos")
            .then(response => {
                console.log(response)
                setPromos(response.data)
            })
            .catch(err => alert("Error in getting promos"))
    }, [])
    console.log(promos)

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
                    <h2 className="promohead">Welcome to Biryani Chowk</h2>
                </div>
            </div>

            <div className="food-menu">
                <div className="container">
                    <h2 className="text-center">Available Promos</h2>
                    <br></br>


                    {promos?.map(promo => (
                        <div className="food-menu-box">
                            <div className="food-menu-img">
                                <img src="https://i.pinimg.com/originals/34/42/97/344297c854b1ed48ad208702edd31c59.jpg"
                                    alt="image" className="img-responsive img-curve" />
                            </div>

                            <div className="food-menu-desc">
                                <h4>{promo?.title}</h4>
                                <div className="card-price-wrapper">
                                    <span className="after">RS: {promo?.afterprice}</span>
                                    <span className="card-price-old">RS: {promo?.beforeprice}</span>
                                </div>
                                {/* <p className="food-price"><span>{promo?.beforeprice}</span> <span> {promo?.afterprice}</span></p> */}
                                <p className="food-detail">
                                    Expiry Date:
                                    {promo?.expirydate}
                                </p>

                                {/* <Link to="/payment"> */}

                                    <a onClick={()=>pay(promo.afterprice)} className="btn btn-primary">Order Now</a>
                                {/* </Link> */}
                            </div>
                        </div>
                    )

                    )}

                    <div className="clearfix"></div>
                </div>
            </div>

        </>
    )


}

export default Foodsbcustomer;