import "./images.css";
import { useEffect } from "react";
import { useState } from "react";
import { deleteImage, getAllImages } from "../services/ImageService";
import { Button, Card, CardBody, CardSubtitle, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";


export const ImageGallery = ({ currentUser }) => {
    const [images, setImages] = useState([]);
    const [myImages, setMyImages] = useState([]);

    useEffect(() => {
        getAllImages().then((imageArray) => {
            setImages(imageArray)
        })
    }, []);

    useEffect(() => {
        const foundImages = images.filter((image) => image.userId === currentUser.id)
        setMyImages(foundImages)
     },[images])

    {/* Delete Image Button Function */}
    const handleDelete = (image) => {
        deleteImage(image.id).then(() => {
        getAllImages().then((imageArray) => {
            setImages(imageArray)
        })})
    }

    return (
        <>
        <div>
                <Link to={`/images/newImage`}><button className="button">Add New Image</button></Link>
        </div>
        <div className="images">
            <div>
                <Row>
                
                {myImages.map((image) => {
                        return (
                <Col key={image.id}>
                <Card style={{ 
                    width: '12rem',
                    padding: '1em',
                    margin: 5,
                    }}
                >
                    
                    <img src={image.url} alt="" />
                    
                <CardBody>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {image.caption}
                    </CardSubtitle>
                    <Link to={`/editImages/${image.id}`}>
                        <Button color="primary" size="sm">
                            Edit
                        </Button>
                    </Link>
                    <Button color="danger" size="sm"
                        onClick={() => handleDelete(image)}
                    >
                        Delete
                    </Button>
                </CardBody>
                </Card>
                </Col>
                )
                })}
                
                </Row>
            </div>
        </div>
        </>
    )
}         

