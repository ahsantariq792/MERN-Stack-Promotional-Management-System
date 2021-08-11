import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';

import "./styles/stylefood.css";
// {/* <link rel="stylesheet" href="./stylefood.css" />; */}



const Foodsjcustomer = () => {
    const [promosjawaid, setPromosjawaid] = useState()
    useEffect(() => {
        axios.get("http://localhost:7781/promosjawaid")
            .then(response => {
                console.log(response)
                setPromosjawaid(response.data)
            })
            .catch(err => alert("Error in getting promos"))
    }, [])
    console.log(promosjawaid)

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
                    <h2 className="promohead"> Welcome to Jawaid Nehari</h2>
                </div>
            </div>

            <div className="food-menu">
                <div className="container">
                    <h2 className="text-center">Food Menu</h2>



                    {promosjawaid?.map(promojawaid => (
                        <div className="food-menu-box">
                            <div className="food-menu-img">
                                <img src="https://recipe52.com/wp-content/uploads/2019/08/Chicken-Nihari-Recipe-instagram-500x500.jpg"
                                    alt="image" className="img-responsive img-curve" />
                            </div>

                            <div className="food-menu-desc">
                                <h4>{promojawaid?.title}</h4>
                                <div className="card-price-wrapper">
                                    <span>RS: {promojawaid?.afterprice}</span>
                                    <span className="card-price-old">RS: {promojawaid?.beforeprice}</span>
                                </div>
                                {/* <p className="food-price"><span>{promo?.beforeprice}</span> <span> {promo?.afterprice}</span></p> */}
                                <p className="food-detail">
                                    Expiry Date: <br></br>
                                    {promojawaid?.expirydate}
                                </p>


                                {/* <Link to="/payment"> */}

                                    <a onClick={()=>pay(promojawaid.afterprice)} className="btn btn-primary">Order Now</a>
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

export default Foodsjcustomer;