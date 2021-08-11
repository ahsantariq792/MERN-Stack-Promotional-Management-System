import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import {AiTwotoneDelete} from 'react-icons/ai'
import "./styles/stylefood.css";
// {/* <link rel="stylesheet" href="./stylefood.css" />; */}



const Foodskhan = () => {
    const [promoskhan, setPromoskhan] = useState([])
    // console.log(promoskhan)

    useEffect(() => {
        axios.get("http://localhost:7781/promoskhan")
            .then(response => {
                // console.log(response)
                setPromoskhan(response.data)
            })
            .catch(err => alert("Error in getting promos"))
    }, [])
    // console.log(promoskhan)


//Here
    const deleteItem = async (e) => {
        window.location.reload()
        console.log(e)
        try {
            const res = await fetch('http://localhost:7781/promoskhan/' + e, {
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
                    <h2 className="promohead2">Khan Broast</h2>
                    <Link to="/promoform">
                        <h4 className="addpromo">+ Add Promo</h4>
                    </Link>
                </div>
            </div>



            <div className="food-menu">
                <p className="restauranthead">Note: You are Loggined as Restaurant Manager, You can add &amp; delete Promos Form Here</p>
                <div className="container">
                    <h2 className="text-center">Food Menu</h2>
                    <hr className="xs"></hr>



                    {promoskhan?.map(promokhan => (
                        <div className="food-menu-box">
                            <div className="food-menu-img">
                                <img src="https://images.unsplash.com/photo-1572448862527-d3c904757de6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1cmdlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                                 alt="Chicke Hawain Pizza" className="img-responsive img-curve" />
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

                                {/* <p>{promokhan._id}</p> */}
                                <a onClick={()=>deleteItem(promokhan._id)} className="btn delbtn btn-primary">Delete <AiTwotoneDelete size="20"/></a>
                            </div>
                        </div>
                    )

                    )}
                    {/* <div className="clearfix"></div> */}
                </div>
            </div>

        </>
    )


}

export default Foodskhan;