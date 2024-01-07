import {Row} from "react-bootstrap";

function Error404(){
    return(
        <Row className={"text-center"}>
            <div className={"mt-5"}>
                <h1> Error 404 </h1>
                <p className={"mt-3"}> (Sorry, there's nothin' round these parts...)</p>
                <p className={"mt-3"}> Take me back! </p>
            </div>
        </Row>
    )
}
export default Error404
