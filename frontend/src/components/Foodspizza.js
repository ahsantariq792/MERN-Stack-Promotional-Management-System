import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {AiTwotoneDelete} from 'react-icons/ai'
import "./styles/stylefood.css";
// {/* <link rel="stylesheet" href="./stylefood.css" />; */}



const Foodspizza = () => {
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


    //Here

    const deleteItem = async (e) => {
        window.location.reload()
        console.log(e)
        try {
            const res = await fetch('http://localhost:7781/promospizza/' + e, {
                method: "DELETE",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                // credentials: "include"
            })
            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error;

            }
        } catch (error) {
            console.log(error)
        }
    }
    // Here


    return (
        <>
            <div className="food-search text-center">
                <div className="container">
                    <h2 className="promohead2">Pizza Point</h2>
                    <Link to="/promoform3">
                        <h4 className="addpromo">+ Add Promo</h4>
                    </Link>
                </div>
            </div>

            <div className="food-menu">
                <p className="restauranthead">Note: You are Loggined as Restaurant Manager, You can add &amp; delete Promos Form Here</p>

                <div className="container">
                    <h2 className="text-center">Food Menu</h2>



                    {promospizza?.map(promopizza => (
                        <div className="food-menu-box">
                            <div className="food-menu-img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx-YGyiXRcFR1qaF8pOnI2kf5nQiRXJUvsKL7YQtgTmAiVFciccN-pfmTMM8qBQdw_2yY&usqp=CAU"
                                    alt="Chicke Hawain Pizza" className="img-responsive img-curve" />
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


                                <a onClick={() => deleteItem(promopizza._id)} className="btn delbtn btn-primary">Delete<AiTwotoneDelete size="20"/></a>
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

export default Foodspizza;