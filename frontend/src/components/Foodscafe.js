import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./styles/stylefood.css";
import { AiTwotoneDelete } from 'react-icons/ai'
// {/* <link rel="stylesheet" href="./stylefood.css" />; */}



const Foodscafe = () => {
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


    //Here
    const deleteItem = async (e) => {
        window.location.reload()
        console.log(e)
        try {
            const res = await fetch('http://localhost:7781/promoscafe/' + e, {
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
                    <h2 className="promohead2">Butler Cafe</h2>
                    <Link to="/promoform5">
                        <h4 className="addpromo">+ Add Promo</h4>
                    </Link>
                </div>
            </div>

            <div className="food-menu">
                <p className="restauranthead">Note: You are Loggined as Restaurant Manager, You can add &amp; delete Promos Form Here</p>
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


                                <a onClick={() => deleteItem(promocafe._id)} className="btn delbtn btn-primary" >Delete<AiTwotoneDelete size="20" /></a>
                            </div>
                        </div>
                    )

                    )}

                </div>
            </div>

        </>
    )


}

export default Foodscafe;