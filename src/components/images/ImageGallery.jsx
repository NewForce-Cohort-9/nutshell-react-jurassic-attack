import { useEffect } from "react"
import { useState } from "react"
import { getAllImages } from "../services/ImageService"
import { Button, Card } from "reactstrap"


export const ImageGallery = () => {
    const [images, setImages] = useState([])

    useEffect(() => {
        getAllImages().then((imageArray) => {
            setImages(imageArray)
        })
    }, []);
    
    return (
        <div class="container text-center">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                <div class="col">
                    <Card style={{ 
                        width: '18rem'
                        }}
                    >
                        <img src={images.url} class="img-fluid" alt={images.caption} />
                    <CardBody>
                        <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                        >
                        ${images.caption}
                        </CardSubtitle>
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
        </div>
    )
}               

