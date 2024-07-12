//function that changes the top image and caption when a bottom image is clicked on
function changeToBiggerImage(newSourceImage, newFigcaption){ //2 parameters for the new image and new figure caption
    //changes the source image that has the id biggerImage
    document.getElementById("biggerImage").src = newSourceImage;

    //changes the the text under the id figcaption
    document.getElementById("figcaption").textContent = newFigcaption;
}
