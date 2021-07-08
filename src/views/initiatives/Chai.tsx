import React from 'react';
import {HeaderAppBar} from "../../components/HeaderAppBar";

import CwCLogo from '../../components/initiatives/CwCLogo';


const Chai: React.FC = () => {
    return (
        <div style={{paddingBottom: "5em"}}>
            <HeaderAppBar facebooklink="http://facebook.com" twitterlink="http://twitter.com" youtubelink="http://youtube.com" appbartype="fixed" />
            <HeaderAppBar facebooklink="http://facebook.com" twitterlink="http://twitter.com" youtubelink="http://youtube.com" appbartype="static" />    
            <CwCLogo />    
        </div>  
    )
}

export default Chai;