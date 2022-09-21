import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'
import './gallery.css'

const Gallery= () => {
  const galleryLength=10;
  const images=[];

  for (let i=1; i<galleryLength; i++){
    images.push(require(`../../images/gallery${i}.jpg`))
  }
  console.log(images);

  return (
    <>

     <Header title="We Belive" image={HeaderImage}>
      We host dozens of classes every day, from deadlifting and HIIT to yoga and pilates.
       We also have different classes for varying levels of ability.
       Check out our individual class pages to see what’s on when, and stop on by for a chat if you want to see how we do things.
     </Header>

     <section className="gallery">
      <div className="container gallery_container">
        {
          images.map((image, index)=>{
            return <article key={index}>
              <img src={image} alt={`GalleryImage ${index + 1}`}/>
            </article>
          })
        }
      </div>
     </section>
     </>
    
    
  )
}

export default Gallery