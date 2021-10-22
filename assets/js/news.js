import {getNews} from './helper.js'
// images
const renderCarousel = async () => {
  const elCarousel = document.querySelector("#carouselS");
  const carouselInner = document.createElement("div");
  carouselInner.classList.add("carousel-inner");

  const news = await getNews()
  let dataArticle = news.articles



  // Array.from(dataArticle).forEach(data => {
    
  //   console.log(data.urlToImage);
    
  // })

  for (let i = 0; i < dataArticle.length; i++) {
    // console.log(images[i]);

    const carouselItem = document.createElement("div");

    carouselItem.classList.add("carousel-item");

    if (i == 0) {
      carouselItem.classList.add("active");
    }

    const image = document.createElement("img");
    image.classList.add("w-100", "d-block","img-fluid");
    image.setAttribute("src", dataArticle[i].urlToImage);
    const aLink = document.createElement('a')
    aLink.setAttribute("href",dataArticle[i].url)
    aLink.setAttribute("target","_blank")
    aLink.appendChild(image)


    // <div class="carousel-caption d-none d-md-block">
    //     <h5>Second slide label</h5>
    //     <p>Some representative placeholder content for the second slide.</p>
    //   </div>

    const elCarCap = document.createElement('div')
    elCarCap.classList.add('carousel-caption','d-none','d-md-block')
    const elCarCapTi = document.createElement('h3')
    elCarCapTi.innerHTML = dataArticle[i].title
    elCarCap.appendChild(elCarCapTi)

    console.log(dataArticle[i].title);
    // elCarCapTi.innerHTML()

    

    carouselItem.appendChild(elCarCap)

    carouselItem.appendChild(aLink);



    carouselInner.appendChild(carouselItem);
  }

  elCarousel.appendChild(carouselInner);
};

const Render = async () => {
  const images = [
    "https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80",
    "https://media.istockphoto.com/photos/mount-hood-oregon-picture-id1268487061?s=612x612",
    "https://media.istockphoto.com/photos/mount-hood-reflecting-in-trillium-lake-at-sunset-in-mount-hood-picture-id1284156839?s=612x612",
  ];

  // let news = await getNews()
  // news.map(async(value)=>{
  //   renderCarousel(value.urlToImage)
  // })

  

  
  // renderCarousel(images);
  // const news = await getNews()
  // let dataArticle = news.articles



  // Array.from(dataArticle).forEach(data => {
    
  //   console.log(data.urlToImage);
    
  // })
  

  await renderCarousel()
  


  

}



Render();
