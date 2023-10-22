const photoFileName = [
    ["halloween3", "halloween3-thumbnail"],
    ["halloween7", "halloween7-thumbnail"],
    ["halloween-party", "halloween-party-thumbnail"],
    ["halloween6", "halloween6-thumbnail"],
    ["halloween5", "halloween5-thumbnail"],
    ["halloween4", "halloween4-thumbnail"],
    ["halloween2", "halloween2-thumbnail"],
    ["halloween-party1", "halloween-party1-thumbnail"],
]


const imgFolder = "assets/images/img_gallery/";
const imgFolderThumb = "assets/images//img_gallery/thumbnails/";
let photo = "";
// let photoThumb ="";

photoFileName.map((fileName) => {
    const imgSrc = imgFolder + fileName[0];
    const thumbSrc = imgFolderThumb + fileName[1];

    photo += `<figure><a href="${imgSrc}.jpg" data-fancybox=data-caption=""><img src="${thumbSrc}.jpg" class="gallery-img" width="250" height="250"></a></figure>`

})

const photoGallery = document.querySelector('#gallery-container');
photoGallery.innerHTML += photo