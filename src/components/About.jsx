import React from "react"

function About({about,image="https://via.placeholder.com/215"}){

    return(
    <div>
        <aside>
            <img src={image} alt="blog logo" />
            <React.Fragment>
                <p>{about}</p>
                {/* <p>{about}</p> */}
            </React.Fragment>
        </aside>
    </div>
)}

export default About