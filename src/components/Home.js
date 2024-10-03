import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" className="home-image" />

                <div className="home-row">
                    <Product 
                        id = {122322}
                        title="Apple IPhone 16 Series(2024)" 
                        price = {1999.99}
                        image="https://www.macworld.com/wp-content/uploads/2024/10/iphone-16-vs-16-pro-2.jpg?quality=50&strip=all"
                        rating={5}
                        author="by IOS"
                        subtitle="iPhone 16 Pro is built for Apple Intelligence, the personal intelligence system that helps you write, express yourself, and get things done effortlessly."

                    />
                    <Product 
                        id = {122323}

                        title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver" 
                        price = {364.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
                        rating={4}
                        author="by Acer"

                    />
                </div>

                <div className="home-row">
                <Product 
                        id = {122325}
                        title="SAMSUNG 75-inch Class QLED Q70T Series - 4K UHD Dual LED Quantum HDR Smart TV with Alexa Built-in (QN75Q70TAFXZA, 2020 Model)" 
                        price = {100.29}
                        image="https://images-na.ssl-images-amazon.com/images/I/51d1lfcMIaL._AC_SL1000_.jpg"
                        rating={4}
                        author="by Samsung"
                        
                />
                <Product 
                        id = {122326}
                        title="OtterBox Defender Series Case for iPad Pro 11(1st Gen) - Retail Packaging - Black" 
                        price = {11.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51o%2ByhvbK-L._AC_SL1000_.jpg"
                        rating={5}
                        author="by OtterBox Store"
                        subtitle="OtterBox Defender Series tablet case covers your entire device with three layers of trusted rugged protection."

                    />
                <Product 
                        id = {122321}
                        title="Samsung Gear S3 Frontier Smartwatch (Bluetooth), SM-R760NDAAXAR" 
                        price = {9.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61GcJ2DDvIL._AC_SL1000_.jpg"
                        rating={3}
                        author="by Samsung Electronics Store"
                        subtitle="The Gear S3 is Bluetooth connected, so you can receive texts, emails, and alerts without reaching for your phone. With a built-in speaker and microphone."

                    />
                </div>

                <div className="home-row">
                    <Product 
                        id = {122327}
                        title="LG 65UN7300PUF Alexa Built-In UHD 73 Series 65 4K Smart UHD TV (2020)" 
                        price = {300.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81ZcNYPYthL._AC_SL1500_.jpg"
                        rating={5}
                        author="by LG Store"
                        subtitle="See a Clear Difference. Picture performance at the next level. LG UHD TV features realistic, accurate color, enhanced contrast, clarity and detail."

                    />
                </div>
            </div>
        </div>
    )
}

export default Home;


