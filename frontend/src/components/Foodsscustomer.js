import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import "./styles/stylefood.css";
// {/* <link rel="stylesheet" href="./stylefood.css" />; */}



const Foodsscustomer = () => {
    const [promosshaheen, setPromosshaheen] = useState()
    useEffect(() => {
        axios.get("http://localhost:7781/promosshaheen")
            .then(response => {
                console.log(response)
                setPromosshaheen(response.data)
            })
            .catch(err => alert("Error in getting promos"))
    }, [])
    console.log(promosshaheen)

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
                    <h2 className="promohead">Welcome to Shaheen Shinwari</h2>
                </div>
            </div>

            <div className="food-menu">
                <div className="container">
                    <h2 className="text-center">Food Menu</h2>



                    {promosshaheen?.map(promoshaheen => (
                        <div className="food-menu-box">
                            <div className="food-menu-img">
                                <img src="https://recipe52.com/wp-content/uploads/2020/07/Lamb-karahi-3-500x500.jpg"
                                 alt="Chicke Hawain Pizza" className="img-responsive img-curve" />
                            </div>

                            <div className="food-menu-desc">
                                <h4>{promoshaheen?.title}</h4>
                                <div className="card-price-wrapper">
                                    <span>RS: {promoshaheen?.afterprice}</span>
                                    <span className="card-price-old">RS: {promoshaheen?.beforeprice}</span>
                                </div>
                                {/* <p className="food-price"><span>{promo?.beforeprice}</span> <span> {promo?.afterprice}</span></p> */}
                                <p className="food-detail">
                                    Expiry Date: <br></br>
                                    {promoshaheen?.expirydate}
                                </p>


                                {/* <Link to="/payment"> */}

                                    <a onClick={()=>pay(promoshaheen.afterprice)} className="btn btn-primary">Order Now</a>
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

export default Foodsscustomer;