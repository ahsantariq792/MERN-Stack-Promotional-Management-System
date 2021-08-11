import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../index.css';
import Footer from './Footer';
import Cards from './Cards'
import Sdata from '../Sdata'
import Slider from './Slider';

function ncards(val) {
    return (
        <Cards
            imgsrc={val.imgsrc}
            category={val.category}
            title={val.title}
            link={val.link}
        />
    )
}


const Home = () => {
    const history = useHistory()
    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn')
        console.log(isLoggedIn)
        // if(isLoggedIn){
        //     return
        // }
        // else{
        //     history.push('/')
        // }
    }, [])
    return (
        <>
            <div className="mainbox">
                <Slider />
                <br></br><br></br>
                <h1 className="chead">CHOOSE YOUR FAVOURITE</h1>
                <hr></hr>
                <br></br><br></br>
                <div className="mainbox2">
                    <div className="container">
                        {Sdata.map(ncards)}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Home;