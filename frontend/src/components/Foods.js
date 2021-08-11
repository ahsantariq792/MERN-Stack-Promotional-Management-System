import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import {AiTwotoneDelete} from 'react-icons/ai'
import "./styles/stylefood.css";
// {/* <link rel="stylesheet" href="./stylefood.css" />; */}



const Foods = () => {
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

    //Here
    const deleteItem = async (e) => {
        window.location.reload()
        console.log(e)
        try {
            const res = await fetch('http://localhost:7781/promos/' + e, {
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

    //Here


    return (
        <>
            <div className="food-search text-center">
                <div className="container">
                    <h2 className="promohead2"> Biryani Chowk</h2>
                    <Link to="/promoform1">
                        <h4 className="addpromo">+ Add Promo</h4>
                    </Link>
                </div>

            </div>


            <div className="food-menu">
                <p className="restauranthead">Note: You are Loggined as Restaurant Manager, You can add &amp; delete Promos Form Here</p>

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


                                <a onClick={() => deleteItem(promo._id)} className="btn delbtn btn-primary">Delete<AiTwotoneDelete size="20"/></a>
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

export default Foods;