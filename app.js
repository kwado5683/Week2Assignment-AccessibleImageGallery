console.log("hellow world");

// let fullImg = document.getElementsByClassName("thumb-image");

// console.log(fullImg);



//Step 1: Store your images data
//you can use local images or external images
//for simplicity, it might be easier this time to use external images
const images = [
    {
      url: "https://cdn.pixabay.com/photo/2025/05/04/17/47/dog-9578735_1280.jpg",
      alt: "A beautiful dog",
      // srcSet: ,
    },
  
  {url: "https://cdn.pixabay.com/photo/2025/05/02/15/58/flower-girl-9574211_1280.jpg",
  alt: "A beautiful girl",
  // srcSet: ,

},
{
    url:"https://cdn.pixabay.com/photo/2025/04/22/06/54/elephant-9549133_1280.jpg",
    alt: "An elephant"
},
{
    url:"https://cdn.pixabay.com/photo/2025/04/23/01/35/bird-9551361_1280.jpg",
    alt: "A Bird"
},
{
    url:"https://cdn.pixabay.com/photo/2023/04/24/16/51/bouquet-7948558_1280.jpg",
    alt: "Mother"
}];

// console.log(images);


//Step 2: Create the thumbnail images
// - Select the image containers from the DOM
// const mainContainer = document.getElementById("main-container");

const thumbnailContainer = document.getElementById('thumbnail-container');
const fullImageContainer = document.getElementById('fullImageContainer');
const fullPicture = document.getElementById("fullPicture");



    images.forEach(function(item){
        // console.log(item);
        const img = document.createElement('img')
        img.setAttribute("src",item.url);
        img.setAttribute("alt",item.alt);
        img.tabIndex = 0;
        img.setAttribute("role", "listitem")
        thumbnailContainer.appendChild(img)
   

// add an event listener to enlarge the pictures on click
        img.addEventListener('click',function(){
            fullPicture.src = img.src;
            fullPicture.alt = img.alt;
            fullImageContainer.classList.remove("fullImageHide");

        })

    });

    // add another event to hide the full picture on click
    fullImageContainer.addEventListener("click",function(){
        fullImageContainer.classList.add("fullImageHide");
    });


    //we need a loop to create our thumbnails efficiently --> forEach, for loop
    //in my loop, I have 4 steps:
    //create the dom element (img)
    //update the attribute values to be the values of our images stored int the array (img.src = / img.alt = / img.srcSet = /img.className = )
    //append the new imgs into the thumbnail container
    //add an event listener here (event handler / event listener --> img.addEventListener("click", function(){
    //   createFullscreenImage(img)}))
  