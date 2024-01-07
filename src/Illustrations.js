import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {useEffect} from "react";
import { FaYoutube } from "react-icons/fa";
import myFace from "./my_face.jpg";
import myFace2 from "./my_face.jpg";

const images = require.context('./illustrations', true);
const imageList = images.keys().map(image => images(image));

function Illustrations(){
    console.log(imageList)
    useEffect(() => {
        let tabs= document.getElementsByClassName("nav-custom")
        for (let t of tabs){
            t.classList.remove("selected_text", "text-secondary", "text-dark")
            if(t.id !== "nav_header"){
                console.log(t.id)
                t.classList.add("text-secondary")
            }
            else{
                t.classList.add("text-dark")
            }
        }
        let selected = document.getElementById("illustrations")
        selected.classList.add("selected_text", "text-dark")
        console.log(selected)
    });
    return (
        <Container fluid className={"p-0"}>
            <Row className={"justify-content-center pt-4 mb-5"}>
                <Col className={"col-2 my-auto"}>
                    <h2 className={"mb-3"}>A bit about the artist</h2>
                    <p>I am a self-taught hobby artist who's been drawing over the past 15 years.
                        Here are some of my highlights.
                    </p>
                </Col>
                <Col className={"col-4 my-auto text-end"}>
                    <img src={myFace2} alt="" className="img-fluid" style={{height: "300px"}}/>
                </Col>
            </Row>
            <Row className={"justify-content-center mb-5"}>
                <div className={"text-center"}>
                    {imageList.map((image, index) => (
                        <img key={index} src={image} alt={`image-${index}`}  style={{height: "500px"}} />
                    ))}
                </div>
            </Row>




        </Container>
    )
}
export default Illustrations
