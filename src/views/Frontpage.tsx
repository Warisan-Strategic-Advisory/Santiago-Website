import React from 'react';
import {HeaderAppBar} from "../components/HeaderAppBar";
import Landing from "../components/landing/Landing";
import AboutHome from "../components/AboutHome";
import Policies from '../components/policies/Policies';

const Frontpage: React.FC = () => {
    return (
        <div style={{paddingBottom: "5em"}}>
            <HeaderAppBar facebooklink="http://facebook.com" twitterlink="http://twitter.com" youtubelink="http://youtube.com" />
            <Landing />
            <AboutHome />
            <Policies />
        </div>
    )
}

export default Frontpage;
