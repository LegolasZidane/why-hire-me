
function PImageCarousel() {
   
    return (
        <div className="PImageCarousel">
            <div id="carouselExampleIndicators" className="carousel slide">
                <ol className="carousel-indicators">
                    <li type="button" data-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                    <li type="button" data-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="/ftt.png" alt="First slide"/>
                        <div class="carousel-caption d-none d-md-block">
                            <h2>First slide label</h2>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="/k.png" alt="Second slide"/>
                        <div class="carousel-caption d-none d-md-block">
                            <h2>Second slide label</h2>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    ); 
    
}

export default PImageCarousel;
