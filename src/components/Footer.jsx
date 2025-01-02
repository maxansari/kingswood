"use strict";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Map from './Map'



const Footer = () => {

    return (
        <div>
        <section className="spikes pb-6 text-white mt-8 flex justify-center">
            <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 z-[1000]">
                <div>
                    <h1>About KPS</h1>
                    <ul className="px-4">
                        <li className="hover:underline cursor-pointer">Faculty Members</li>
                        <li className="hover:underline cursor-pointer">Career</li>
                        <li className="hover:underline cursor-pointer">Photo Gallery</li>
                    </ul>
                </div>
                 <div>
                    <h1>Reach Us</h1>
                    <div className="px-4">
                    <p>Address:Kingswood Public School, 
                        Delhi Road,
                        Bulandshahr(UP)</p>
                    <p>Pin Code: 203001</p>
                    <p>Phone1: +918057373726</p>
                    <p>Phone2: +919758880880</p>
                    <p>Email: kingswoodpublicbsr@gmail.com</p>
                    </div>
                </div>
                 <div>
                    <h1>Location Map</h1>
                    <Map/>
                </div>
 
            </div>
      </section>
    </div>
    )
}

export default Footer