export const getAllImages = () => {
    return fetch("http://localhost:8088/images").then(allImages => allImages.json())
}

export const getByImageId = (imageId) => {
    return fetch(`http://localhost:8088/images/${imageId}`).then(allImages => allImages.json())
}

export const createImage = (image) => {
    return fetch(`http://localhost:8088/images`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(image)
    })
}

export const updateImage = (image) => {
    return fetch(`http://localhost:8088/images/${image.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(image)
    })
}

export const deleteImage = (imageId) => {
    return fetch(`http://localhost:8088/images/${imageId}`, {
        method: "DELETE"
    })
}