import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import "./styles/stylefood.css";
// {/* <link rel="stylesheet" href="./stylefood.css" />; */}



const Foodspcustomer = () => {
    const [promospizza, setPromospizza] = useState()
    useEffect(() => {
        axios.get("http://localhost:7781/promospizza")
            .then(response => {
                console.log(response)
                setPromospizza(response.data)
            })
            .catch(err => alert("Error in getting promos"))
    }, [])
    console.log(promospizza)

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
                    <h2 className="promohead"> Welcome to Pizza Point</h2>
                </div>
            </div>

            <div className="food-menu">
                <div className="container">
                    <h2 className="text-center">Food Menu</h2>



                    {promospizza?.map(promopizza => (
                        <div className="food-menu-box">
                            <div className="food-menu-img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx-YGyiXRcFR1qaF8pOnI2kf5nQiRXJUvsKL7YQtgTmAiVFciccN-pfmTMM8qBQdw_2yY&usqp=CAU"
                                 className="img-responsive img-curve" />
                            </div>

                            <div className="food-menu-desc">
                                <h4>{promopizza?.title}</h4>
                                <div className="card-price-wrapper">
                                    <span>RS: {promopizza?.afterprice}</span>
                                    <span className="card-price-old">RS: {promopizza?.beforeprice}</span>
                                </div>
                                {/* <p className="food-price"><span>{promo?.beforeprice}</span> <span> {promo?.afterprice}</span></p> */}
                                <p className="food-detail">
                                    Expiry Date: <br></br>
                                    {promopizza?.expirydate}
                                </p>

                                {/* <Link to="/payment"> */}

                                    <a onClick={()=>pay(promopizza.afterprice)} className="btn btn-primary">Order Now</a>
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

export default Foodspcustomer;