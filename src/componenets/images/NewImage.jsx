import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Label } from "reactstrap";

export const NewImage = () => {
    const [newImage, setNewImage] = useState({
        url: "",
        caption: "",
    });

    const navigate = useNavigate()

    return (
        <div className="form">
            <Form>
                <FormGroup>
                    <Label for="exampleUrl">
                        Url
                    </Label>
                    <Input
                        id="exampleUrl"
                        name="url"
                        placeholder="Enter image url here"
                        type="url"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">
                        Image Caption
                    </Label>
                    <Input
                        id="exampleText"
                        name="text"
                        type="textarea"
                    />
                </FormGroup>
            </Form>
        </div>
    )
}

