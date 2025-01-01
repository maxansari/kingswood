"use strict";


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
                    <iframe className="w-[300px] h-[200px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4011.8123693297543!2d77.83219191155952!3d28.413417375684205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ca353589f1623%3A0xfec56659a5810cf9!2sKINGSWOOD%20PUBLIC%20SCHOOL!5e1!3m2!1sen!2sin!4v1731587925142!5m2!1sen!2sin" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
 
            </div>
      </section>
    </div>
    )
}

export default Footer