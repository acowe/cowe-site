import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProfileCard() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="./my_face.jpeg" />
            <Card.Body>
                <Card.Title>Arisa Cowe</Card.Title>
                <Card.Text>
                    <p>Current Master's Student at UC Davis</p>
                    <ul>
                            <li>
                                arcowe12@gmail.com
                            </li>
                            <li>
                                GitHub
                            </li>
                            <li>
                                LinkedIn
                            </li>
                            <li>
                                ORCHID
                            </li>
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ProfileCard;