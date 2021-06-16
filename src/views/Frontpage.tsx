import React from 'react';
import {HeaderAppBar} from "../components/HeaderAppBar";
import Landing from "../components/landing/Landing";


const Frontpage: React.FC = () => {
    return (
        <div>
            <HeaderAppBar facebooklink="http://facebook.com" twitterlink="http://twitter.com" youtubelink="http://youtube.com" />
            <Landing />
        </div>
    )
}

export default Frontpage;
