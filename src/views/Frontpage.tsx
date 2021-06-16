import React from 'react';
import {HeaderAppBar} from "../components/HeaderAppBar";
import Landing from "../components/landing/Landing";
import AboutHome from "../components/AboutHome";

const Frontpage: React.FC = () => {
    return (
        <div style={{paddingBottom: "5em"}}>
            <HeaderAppBar facebooklink="http://facebook.com" twitterlink="http://twitter.com" youtubelink="http://youtube.com" />
            <Landing />
            <AboutHome />
        </div>
    )
}

export default Frontpage;
