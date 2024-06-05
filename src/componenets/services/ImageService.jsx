export const getAllImages = () => {
    return fetch("http://localhost:8088/images").then(allImages => allImages.json())
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