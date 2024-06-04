export const getAllImages = () => {
    return fetch("http://localhost:8088/images").then(allImages => allImages.json)
}