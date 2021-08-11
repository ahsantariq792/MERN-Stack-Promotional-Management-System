import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import {AiTwotoneDelete} from 'react-icons/ai'
import "./styles/stylefood.css";
// {/* <link rel="stylesheet" href="./stylefood.css" />; */}



const Foodsjawaid = () => {
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


    //Here
    const deleteItem = async (e) => {
        window.location.reload()
        console.log(e)
        try {
            const res = await fetch('http://localhost:7781/promosjawaid/' + e, {
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
                    <h2 className="promohead2">Jawaid Nehari</h2>
                    <Link to="/promoform2">
                        <h4 className="addpromo">+ Add Promo</h4>
                    </Link>
                </div>
            </div>

            <div className="food-menu">
            <p className="restauranthead">Note: You are Loggined as Restaurant Manager, You can add &amp; delete Promos Form Here</p>
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


                                <a onClick={()=>deleteItem(promojawaid._id)} className="btn delbtn btn-primary">Delete<AiTwotoneDelete size="20"/></a>
                            </div>
                        </div>
                    )

                    )}
                </div>
            </div>

        </>
    )


}

export default Foodsjawaid;