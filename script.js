var intervalID = 0
var width = 150

document.querySelector('.top-cloud').addEventListener('mouseover', function() {
    clearInterval(intervalID)
    intervalID = setInterval(zoomIn, 10)
    cloud = this
})
document.querySelector('.top-cloud').addEventListener('mouseout', function() {
    clearInterval(intervalID)
    intervalID = setInterval(zoomOut, 10)
    cloud = this
})
document.querySelector('.bot-cloud').addEventListener('mouseover', function() {
    clearInterval(intervalID)
    intervalID = setInterval(zoomIn, 10)
    cloud = this
})
document.querySelector('.bot-cloud').addEventListener('mouseout', function() {
    clearInterval(intervalID)
    intervalID = setInterval(zoomOut, 10)
    cloud = this
})


function zoomIn(){
    if (width < 175) {
        width = width + 2
        cloud.width = width
    }
    else {
        clearInterval(intervalID)
    }
}

function zoomOut(){
    if (width > 150) {
        width = width - 2
        cloud.width = width
    }
    else {
        clearInterval(intervalID)
    }
}