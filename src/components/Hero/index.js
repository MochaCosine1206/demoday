import React from "react";
import { Row } from "../Grid";
import "./style.css";


export function Hero() {
    return (
        <div id="Hero">
            <Row id="qrCodes">
            <a href="https://www.linkedin.com/in/steven-parrott-95925235/">
            <div id="linkedIn">
            </div>
            </a>
            <a href="https://docs.google.com/document/d/1_zKT2shGdPWuUMrVt3WxCwzECjjG3_91k1zyEEb4cmo/edit?usp=sharing">
            <div id="resume">
            </div>
            </a>
            </Row>
            <h1>Steven Parrott</h1>
        </div>

    );
}


export default Hero