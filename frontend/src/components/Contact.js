import react from 'react'
import "./styles/contact.css";


function Contact() {
    return (
        <>
            <div className="contact">

                <div class="content">
                    <h2>Contact Us</h2>
                    <p>Food Hunter is food ordering website that helps the user to find their favorite restaurants
                        with discounts and can also place an order from their favorite restaurant.
                    </p>
                </div>


                <div class="containerabout">

                    <div class="contactInfo">

                        <div class="boxabout">

                            <div class="text">
                                <h3>Address</h3>
                                <p>
                                    Karachi Road, FB Area, Block 12,
                                </p>

                            </div>

                            <div class="text">
                                <h3>Phone</h3>
                                <p>+9280089725 </p>
                                <p>+9209009056</p>
                            </div>

                            <div class="text">
                                <h3>Email</h3>
                                <p>ahsantariq122@gmail.com </p>
                                <p>ahmasnayyer89@gamil.com</p>
                            </div>

                        </div>

                        <div class="contactform">
                            <div class="fields">
                                <h2>Send Message</h2>
                                <div class="inputbox">
                                    <input type="text" name="" required />
                                    <span>Full Name</span>
                                </div>
                                <div class="inputbox">
                                    <input type="text" name="" required />
                                    <span>Email</span>
                                </div>
                                <div class="inputbox">
                                    <textarea required="required"></textarea>
                                    <span>Type Your Message...</span>
                                </div>
                                <button className="contactbtn">Send</button>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

        </>
    )
}

export default Contact;