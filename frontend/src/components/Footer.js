import react from 'react';
import {FaFacebook} from "react-icons/fa";
import {AiFillTwitterCircle} from "react-icons/ai";
import {AiOutlineInstagram} from "react-icons/ai";
import {TiSocialLinkedinCircular} from "react-icons/ti"
import "./styles/footer.css";

function Footer() {
    return (
        <>
            <div class="footer">
                <div class="containerfoot">
                    <div class="row">
                        <div class="footer-col">
                            <h4>Popular searches</h4>
                            <ul>
                                <li><a href="#">Pizza Point</a></li>
                                <li><a href="#">Jawaid Nehari</a></li>
                                <li><a href="#">Khan Broast</a></li>
                                <li><a href="#">Butler Cafe</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Popular Categories</h4>
                            <ul>
                                <li><a href="#">Fast Food</a></li>
                                <li><a href="#">Desi Items</a></li>
                                <li><a href="#">Healthy</a></li>
                                <li><a href="#">Continental</a></li>
                                <li><a href="#">Italian</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Trending Searches</h4>
                            <ul>
                                <li><a href="#">Burger</a></li>
                                <li><a href="#">Pizza</a></li>
                                <li><a href="#">Karahi</a></li>
                                <li><a href="#">Nehari</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>follow us</h4>
                            <div class="social-links">
                                <a href="#"><FaFacebook size="30"/></a>
                                <a href="#"><AiFillTwitterCircle size="30"/></a>
                                <a href="#"><AiOutlineInstagram size="30"/></a>
                                <a href="#"><TiSocialLinkedinCircular size="40"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;