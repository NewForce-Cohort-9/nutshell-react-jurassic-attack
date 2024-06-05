import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { getByImageId, updateImage } from "../services/ImageService";

export const UpdateImage = ({ currentUser }) => {
    const [image, setImage] = useState({});
    const [updatedImage, setUpdatedImage] = useState({
        url: "",
        caption: "",
    });

    const {imageId} = useParams()

    useEffect(() => {
        getByImageId(imageId).then((imageArray) => {
            setImage(imageArray)
        })
    }, []);

    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const stateCopy = { ...updatedImage }
        stateCopy[event.target.name] = event.target.value
        setUpdatedImage(stateCopy)
      }

    const handleSave = (event) => {
        event.preventDefault()
    
        const image = {
            url: updatedImage.url,
            caption: updatedImage.caption
        }
        updateImage(image).then(() => {
            navigate("/images")
        })
    
      }

    return (
        <div className="form">
        
                <Form className="article-form">
                <h2>Edit Image</h2>
                <FormGroup>
                    <Input
                        id="exampleUrl"
                        name="url"
                        placeholder={image.url}
                        type="url"
                        onChange={handleInputChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        id="exampleText"
                        name="text"
                        placeholder={image.caption}
                        type="textarea"
                        onChange={handleInputChange}
                    />
                </FormGroup>
                </Form>
    
            <Button color="primary" onClick={handleSave}>
                Save Image
            </Button>
        </div>
    )
}

