
import React from 'react'
import StickyFooter from 'react-sticky-footer';

import './Footer.css'
 const Footer = () => {
    return (
        <div>
    <StickyFooter
    bottomThreshold={50}
    normalStyles={{
    backgroundColor: "#999999",
    padding: "2rem"
    }}
    stickyStyles={{
    backgroundColor: "rgba(255,255,255,.8)",
    padding: "2rem"
    }}
>
Designed By Ido Cohen
</StickyFooter>
        </div>
    )
}
export default Footer