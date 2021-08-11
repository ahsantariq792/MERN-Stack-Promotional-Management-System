import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom';
import "./styles/stylefood.css";



const Foodskcustomer = () => {
    const [promoskhan, setPromoskhan] = useState()
    useEffect(() => {
        axios.get("http://localhost:7781/promoskhan")
            .then(response => {
                console.log(response)
                setPromoskhan(response.data)
            })
            .catch(err => alert("Error in getting promos"))
    }, [])
    console.log(promoskhan)
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
                    <h2 className="promohead">Welcome to Khan Broast</h2>

                </div>
            </div>

            <div className="food-menu">
                <div className="container">
                    <h2 className="text-center">Food Menu</h2>
                    <hr className="xs"></hr>



                    {promoskhan?.map(promokhan => (
                        <div className="food-menu-box">
                            <div className="food-menu-img">
                                <img src="https://static.toiimg.com/thumb/75675148.cms?width=573&height=430" className="img-responsive img-curve" />
                            </div>

                            <div className="food-menu-desc">
                                <h4>{promokhan?.title}</h4>
                                <div className="card-price-wrapper">
                                    <span>RS: {promokhan?.afterprice}</span>
                                    <span className="card-price-old">RS: {promokhan?.beforeprice}</span>
                                </div>
                                {/* <p className="food-price"><span>{promo?.beforeprice}</span> <span> {promo?.afterprice}</span></p> */}
                                <p className="food-detail">
                                    Expiry Date  :
                                    {promokhan?.expirydate}
                                </p>

                                {/* <Link to="/payment"> */}
                                    <a onClick={()=>pay(promokhan.afterprice)} className="btn btn-primary">Order Now</a>
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

export default Foodskcustomer;