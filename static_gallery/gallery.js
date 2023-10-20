const photoFileName = [
    ["halloween-party", "halloween-party-thumbnail"],
    ["halloween-party1", "halloween-party1-thumbnail"],
    ["halloween-party", "halloween-party-thumbnail"],
    ["halloween-party1", "halloween-party1-thumbnail"],
    ["halloween-party", "halloween-party-thumbnail"],
    ["halloween-party1", "halloween-party1-thumbnail"],

]


const imgFolder = "static_gallery/img_gallery/";
const imgFolderThumb = "static_gallery/img_gallery/thumbnails/";
let photo = "";
// let photoThumb ="";

photoFileName.map((fileName) => {
    const imgSrc = imgFolder + fileName[0];
    const thumbSrc = imgFolderThumb + fileName[1];

    photo += `<figure><a href="${imgSrc}.jpg" data-fancybox=data-caption=""><img src="${thumbSrc}.jpg" width="250" height="250"></a></figure>`

})

const photoGallery = document.querySelector('#gallery-container');
photoGallery.innerHTML += photo