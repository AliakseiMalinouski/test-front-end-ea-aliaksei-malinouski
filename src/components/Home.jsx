import React from "react";
import { Hero } from "./Hero";
import Events from "./Events";
import { Contact } from "./Contact";

function Home () {
    return (
        <div className="Home">
            <Hero/>
            <Contact/>
            <Events/>
        </div>
    )
}

export default Home;