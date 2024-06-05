import "./images.css";
import { useEffect } from "react";
import { useState } from "react";
import { deleteImage, getAllImages } from "../services/ImageService";
import { Button, Card, CardBody, CardSubtitle } from "reactstrap";
import { Link } from "react-router-dom";


export const ImageGallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        getAllImages().then((imageArray) => {
            setImages(imageArray)
        })
    }, []);

    {/* Delete Ticket Button Function */}
    const handleDelete = () => {
        deleteImage(image.id).then(() => {
        setImage()
        })
    }

    
    return (
        <>
        <div className="button">
                <Link to={`/images/newImage`}><button>Add New Image</button></Link>
        </div>
        <div className="images">
            <div className="single-image">
                {images.map((image) => {
                        return (
                <Card style={{ 
                    width: '12rem',
                    padding: '1em',
                    }}
                    key={image.id}
                >
                    
                    <img src={image.url} alt="" />
                    
                <CardBody>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {image.caption}
                    </CardSubtitle>
                    <Link to={`/notImages/${image.id}`}>
                        <Button color="primary" size="sm">
                            Edit
                        </Button>
                    </Link>
                    <Button color="danger" size="sm">
                        Delete
                    </Button>
                </CardBody>
                </Card>
                )
                })}
            </div>
        </div>
        </>
    )
}         

