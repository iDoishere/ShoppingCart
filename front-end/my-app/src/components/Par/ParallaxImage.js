import React from "react";
import { Parallax } from 'react-scroll-parallax';
 
const ParallaxImage = () => (
    <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
        <img src="http://www.w3schools.com/howto/img_parallax.jpg" />
    </Parallax>
);
export default ParallaxImage;