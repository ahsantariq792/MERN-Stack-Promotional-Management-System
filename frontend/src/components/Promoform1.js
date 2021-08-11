import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

import "./styles/style.css";

function Promoform1() {
    const history = useHistory();
    const [title, setTitle] = useState()
    const [type, setType] = useState()
    const [promocode, setPromocode] = useState()
    const [restaurant, setRestaurant] = useState()
    const [beforeprice, setBeforeprice] = useState()
    const [afterprice, setAfterprice] = useState()
    const [expirydate, setExpirydate] = useState()
    const onAdd = (e) => {
        e.preventDefault();
        // if(password !== confirmPassword){
        //     alert("Password must be same")
        //     return
        // }

        const payload = {
            title,
            type,
            promocode,
            restaurant,
            afterprice,
            beforeprice,
            expirydate
        }
        axios.post("http://localhost:7781/promos/setpromo", payload)
        .then(response => history.push('/foods'))
        .catch(err => alert("Error in creating restaurant"))
    }
    
    return (
        <>
            <div class="containerformpromo">
                <div class="promo-box">
                    <h1>Add Promo</h1>
                    <div>
                        <form onSubmit={(e) => onAdd(e)}>
                            <label for="name">Title</label>
                            <input type="text" name="name" placeholder="" required onChange={(e) => setTitle(e.target.value) }/>
                            <label for="type">Type</label>
                            <input type="text" name="type" placeholder="" required onChange={(e) => setType(e.target.value) }/>
                            <label for="promocode">Promocode</label>
                            <input type="text" name="promocode" placeholder="" required onChange={(e) => setPromocode(e.target.value) }/>
                            <label for="restaurant">Restaurant</label>
                            <input type="text" name="restaurant" placeholder="" required onChange={(e) => setRestaurant(e.target.value) }/>
                            <label for="beforeprice">beforeprice</label>
                            <input type="number" name="beforeprice" placeholder="" required onChange={(e) => setBeforeprice(e.target.value) }/>
                            <label for="afterprice">afterprice</label>
                            <input type="number" name="afterprice" placeholder="" required onChange={(e) => setAfterprice(e.target.value) }/>
                            <label for="expirydate">expirydate</label>
                            <input type="text" name="expirydate" placeholder="" required onChange={(e) => setExpirydate(e.target.value) }/>
                            <button class="btn1" type="submit">Add Promo</button>
                            {/* <input class="btn" type="submit" value="Sign-up">  */}
                        </form>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Promoform1;