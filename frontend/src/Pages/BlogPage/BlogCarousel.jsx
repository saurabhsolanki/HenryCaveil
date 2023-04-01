import Carousel from 'react-bootstrap/Carousel';
import './CSS/BlogCarousel.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BlogCarousel() {
  return (
    <div id="blogCarouselDiv">
        <h3>WHAT STUDENTS ARE SAYING ABOUT ODYSSEY INFORMATICS</h3>
   
    <Carousel variant="dark" >

      <Carousel.Item>
            <div className='blogCarouseldiv'>
                <img src="https://odysseymt.com/wp-content/uploads/2018/07/abhi-150x150-1.gif" alt="" />
                <h3>hello world</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum saepe natus quas odit assumenda provident dolores non, esse sapiente nulla qui porro corporis enim excepturi pariatur vero magnam. Quaerat iure officia consectetur animi.</p>
            </div>
      </Carousel.Item>

      <Carousel.Item>
            <div className='blogCarouseldiv'>
                <img src="https://odysseymt.com/wp-content/uploads/2018/07/IMG-8796-150x150-1.jpg" alt="" />
                <h3>hello world</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum saepe natus quas odit assumenda provident dolores non, esse sapiente nulla qui porro corporis enim excepturi pariatur vero magnam. Quaerat iure officia consectetur animi.</p>
            </div>
      </Carousel.Item>

      <Carousel.Item>
            <div className='blogCarouseldiv'>
                <img src="https://odysseymt.com/wp-content/uploads/2018/05/bfac961d-4fe0-4778-a763-041d84ca20c6-150x150-1.jpg" alt="" />
                <h3>hello world</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum saepe natus quas odit assumenda provident dolores non, esse sapiente nulla qui porro corporis enim excepturi pariatur vero magnam. Quaerat iure officia consectetur animi.</p>
            </div>
      </Carousel.Item>

      <Carousel.Item>
            <div className='blogCarouseldiv'>
                <img src="https://odysseymt.com/wp-content/uploads/2018/05/bfac961d-4fe0-4778-a763-041d84ca20c6-150x150-1.jpg" alt="" />
                <h3>hello world</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum saepe natus quas odit assumenda provident dolores non, esse sapiente nulla qui porro corporis enim excepturi pariatur vero magnam. Quaerat iure officia consectetur animi.</p>
            </div>
      </Carousel.Item>
    </Carousel>


    </div>
  );
}

export default BlogCarousel;