

const Header = ({title, image, children}) => {
  return (
    <header className='header'>
        <div className="header_container">
            <div className="header_container-bg">
                <img src ={image} alt='Header BackgroundImage'/>
            </div>
            <div className="header_content">
                <h2>{title}</h2>
                <p> {children}</p>
            </div>
        </div>

    </header>
  )
}

export default Header