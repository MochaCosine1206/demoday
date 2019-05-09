import React, { Component } from "react";
import { Row, Col } from "../Grid";
import Brand from "../Brand"
import Hero from "../Hero"
import Links from "../Links"
import "./style.css";


class MainContainer extends Component {
    state = {
        sites : [
            {
                url: "https://mochacosine1206.github.io/TriviaGame/",
                text: "Triv",
                style: {
                    backgroundColor: "pink",
                    fontFamily: "duos-paint, sans-serif",
                    fontSize: "67px",
                    color: "#406ddb",
                }
            },
            {
                url: "https://rocky-fjord-61195.herokuapp.com/",
                text: "Catfish",
                style: {
                    backgroundColor: "#4cccef",
                    fontFamily: "flood-std, sans-serif",
                    fontSize: "60px",
                    color: "yellow",
                }
            },
            {
                url: "https://cra-crowdsourced-news.herokuapp.com/",
                text: "crA",
                style: {
                    backgroundColor: "#ff0",
                    fontFamily: "chippewa-falls, sans-serif",
                    fontSize: "56px",
                    fontWeight: "400",
                    color: "purple",
                }
            },
        ]
    };


    render() {
          
        return (
            <div id="maincontainer">
                    <Row>
                        <Col size="xs-12 md-3">
                            <Brand />
                        </Col>
                        <Col size="xs-12 md-9">
                        <Hero />
                        {this.state.sites.map(site => (
                            <Links
                            key={site.url} 
                            url={site.url}
                            text={site.text}
                            style={site.style}
                            />
                        ))}
                        </Col>
                    </Row>
            </div>
        );
    }

}

export default MainContainer;