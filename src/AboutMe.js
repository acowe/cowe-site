import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom"
import myFace from "./my_face.jpeg";

function AboutMe(){
    return (
        <Row className={"justify-content-center"}>
            <Col className={"col-10"}>
                <div className={"fs-5 fw-normal"}>
                    <h2 className={"mb-3"}>More About Me</h2>
                    <p>
                        As someone who's into all things visual and interactive, I'm drawn to various topics in CS including but not limited to: </p>
                    <ul>
                        <li>UI/UX design and development</li>
                        <li>interactive visualizations</li>
                        <li>human-computer interaction</li>
                        <li>computer graphics</li>
                    </ul>
                    <p>
                        In the past, I've designed and developed several full-stack web-applications for visualizing information,
                        from school assignment schedules to volumetric combustion data. I've also conducted research in the fields of
                        computer architecture, machine learning, and cybersecurity. In addition, I'm passionate about teaching others in CS and math topics, ranging from calculus to
                        algorithms. This actually inspired me to start a YouTube channel called Algomations, where I combine CS and math with imaginative illustrations to
                        create educational animations that are (hopefully) as easy to understand as they are fun to watch.
                    </p>
                    <p>
                        In pursuing my Master's, and any other opportunity along the way, I hope learn more about the topics outlined above and, more importantly, develop engaging yet effective visual
                        software to make complex computations, technologies, and information more accessible to a wider audience of users.
                    </p>
                    <p className={"mb-4"}>In my free time, I enjoy drawing as well as immersing myself in video games, graphic novels, and animated series/works from other independent creators.</p>
                </div>
            </Col>
        </Row>
    )
}
export default AboutMe
