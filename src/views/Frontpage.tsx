import React from 'react';
import {HeaderAppBar} from "../components/HeaderAppBar";
import Landing from "../components/landing/Landing";
import PictureBanner from "../components/PictureBanner";
import Policies from '../components/policies/Policies';

import Santiago from '../assets/img/santiago.jpg';


const Frontpage: React.FC = () => {
    return (
        <div style={{paddingBottom: "5em"}}>
            <HeaderAppBar facebooklink="http://facebook.com" twitterlink="http://twitter.com" youtubelink="http://youtube.com" appbartype="fixed" />
            <HeaderAppBar facebooklink="http://facebook.com" twitterlink="http://twitter.com" youtubelink="http://youtube.com" appbartype="static" />
            <Landing />
            <PictureBanner
                title= "With working families struggling and our planet under threat, we can’t just wait around for progressive change. It’s time for us to act."
                description= "Our campaign is fighting for a powerful set of policies that will reshape our economy, minimize inequality and reverse the effects of climate change. Through a Green New Deal, we will eliminate our greenhouse gas emissions and guarantee a high-wage job to everyone who wants one. And we’re not stopping there⁠—our platform calls for federal limits on rent increases, transformative criminal justice reform, Medicare for All and tuition-free public college. The time for half measures is over. We need solutions that are big enough to match the crises we face."
                image={Santiago}
            />
            <Policies />
        </div>
    )
}

export default Frontpage;
