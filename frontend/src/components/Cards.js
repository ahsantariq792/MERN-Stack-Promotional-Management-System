// import react from 'react'
// import {useHistory} from 'react-router-dom'
import '../index.css';
<link rel="stylesheet" href="index.css" />


function Cards(props) {
    // const history = useHistory()
    // const load = ()=>{
    //     history.push('./javaid')
    // }

    return (
        <>
            
            <section>
                <div className="cards">
                    <div className="card">
                        <img className="cimg" src={props.imgsrc} alt="Title" />
                    </div>
                    <div className="card-info">
                        <h3 className="card-title">{props.title}</h3>
                        <div className="card-category">{props.category}</div>
                        <a href={props.link}>
                            <button> Visit </button>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cards;