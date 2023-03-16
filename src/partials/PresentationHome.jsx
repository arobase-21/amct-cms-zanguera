import React from "react";
import FacadeCms from '../images/facade-cms.jpg';

function PresentationHome(){
    return(
        <section className= "relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <img  src={FacadeCms} className="object-cover mt-20" />
            </div>
            

        </section>
    )

}

export default PresentationHome;