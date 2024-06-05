import "./images.css";
import { useEffect } from "react"
import { useState } from "react"
import { getAllImages } from "../services/ImageService"
import { Button, Card, CardBody, CardSubtitle } from "reactstrap"
import { Link } from "react-router-dom"


export const ImageGallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        getAllImages().then((imageArray) => {
            setImages(imageArray)
        })
    }, []);
    
    return (
        <>
        <div className="button">
                <Link to="/newImage"><button>Add New Image</button></Link>
        </div>
        <div className="images">
            <div className="single-image">
                <Card style={{ 
                    width: '18rem'
                    }}
                >
                    {images.map((image) => {
                        return (
                            <img key={image.id} className="img-thumbnail" src={image.url} alt="" />
                        )
                    })}
                <CardBody>
                    {images.map((image) => {
                        return (
                            <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                            key={image.id}
                            >
                            {image.caption}
                            </CardSubtitle>
                        )
                    })}
                    <Button color="info" size="sm">
                    Edit
                    </Button>
                    <Button color="danger" size="sm">
                    Delete
                    </Button>
                </CardBody>
                </Card>
            </div>
        </div>
        </>
    )
}         

