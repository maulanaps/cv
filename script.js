var intervalID = 0
var width = 150

// CLOUD ANIMATION
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


// NAVBAR ITEM ACTIVE CLASS
navItem = document.querySelectorAll('.navbar-item')
for (i = 0; i < navItem.length; i++){
    navItem[i].addEventListener('click', function () {
        update(this)    // Passing 'this' element
    })
}
console.log(navItem)

function update(item){
    if (!item.classList.contains('active')){
        item.classList.add('active')
    }

    for (i = 0; i < navItem.length; i++){
        if (navItem[i] != item){
            navItem[i].classList.remove('active')
        }
    }
}


