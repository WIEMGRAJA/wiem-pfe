import { faBars, faBook, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CourseImage1 from '../CourseImage/course-1.jpg';
import CourseImage2 from '../CourseImage/course-2.jpg';
import CourseImage3 from '../CourseImage/course-3.jpg';
import CourseImage4 from '../CourseImage/course-4.jpg';
import CourseImage5 from '../CourseImage/course-5.jpg';
import CourseImage6 from '../CourseImage/course-6.jpg';
import aboutImage2 from '../aboutImages/about-1.jpg';
import aboutImage1 from '../aboutImages/about.jpg';
import blogImage1 from "../blogImage/blog-1.jpg";
import blogImage2 from "../blogImage/blog-2.jpg";
import blogImage3 from "../blogImage/blog-3.jpg";
import contactImage from '../contactImage/contact.jpg';
import reviewImage1 from '../reviewImage/review-1.jpg';
import reviewImage2 from '../reviewImage/review-2.jpg';
import reviewImage3 from '../reviewImage/review-3.jpg';
import reviewImage4 from '../reviewImage/review-4.jpg';
import reviewImage5 from '../reviewImage/review-5.jpg';
import reviewImage6 from '../reviewImage/review-6.jpg';
import '../styles/leaner.css';
import subjectsImage1 from '../subjectsImage/subject-1.jpg';
import subjectsImage2 from '../subjectsImage/subject-2.jpg';
import subjectsImage3 from '../subjectsImage/subject-3.jpg';
import subjectsImage4 from '../subjectsImage/subject-4.jpg';
import teacherImage1 from '../teacherImage/teacher-1.jpg';
import teacherImage2 from '../teacherImage/teacher-2.jpg';
import teacherImage3 from '../teacherImage/teacher-3.jpg';
import teacherImage4 from '../teacherImage/teacher-4.jpg';


// Components
function Home() {
    return (
        <section className="home" id="home">
        <div className="content">
            <h3>The best courses you will find here</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo asperiores quia similique voluptatum ipsum maxime, deleniti dolores. A!</p>
            <a href="#" className="btn">
            <span className="text text-1">learn more</span>
            <span className="text text-2" aria-hidden="true">learn more</span>
            </a>
        </div>
        </section>
    );
    }
    
function About() {
  return (
    <section className="about" id="about">
      <h1 className="heading">about us</h1>
      <div className="container">
        <figure className="about-image">
          <img src={aboutImage1} alt="" height="500" />
          <img src={aboutImage2} alt="" className="about-img" />
        </figure>
        <div className="about-content">
          <h3>18 years of experience</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id molestiae
            incidunt ab porro distinctio illo? Non porro accusamus modi mollitia
            quia, dolor molestias sed, repellendus sit maiores esse ratione alias.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animi
            veritatis beatae dolorem neque, incidunt laboriosam repudiandae maiores
            voluptas saepe autem, ullam maxime ipsa aut doloribus!
          </p>
          <a href="#" className="btn">
            <span className="text text-1">read more</span>
            <span className="text text-2" aria-hidden="true">read more</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Subjects() {
  return (
    <section className="subjects">
      <h1 className="heading">our popular subjects</h1>
      <div className="box-container">
        <div className="box">
          <img src={subjectsImage1} alt="John Doe" />
          <h3>development</h3>
          <p>fun & challenging</p>
        </div>
        <div className="box">
          <img src={subjectsImage2} alt="John Doe" />
          <h3>mathematics</h3>
          <p>fun & challenging</p>
        </div>
        <div className="box">
          <img src={subjectsImage3} alt="John Doe" />
          <h3>graphic designing</h3>
          <p>fun & challenging</p>
        </div>
        <div className="box">
          <img src={subjectsImage4} alt="John Doe" />
          <h3>engineering</h3>
          <p>fun & challenging</p>
        </div>
      </div>
    </section>
  );
}

function Courses() {
  return (
    <section className="courses" id="courses">
      <h1 className="heading">Our Famous Courses</h1>
      <div className="box-container">
        <Course image={CourseImage1} name="Course 1" price="$49.99" updated="25/09/2021" stars={4.5} reviews={785} />
        <Course image={CourseImage2} name="Course 2" price="$49.99" updated="25/09/2021" stars={4.5} reviews={785} />
        <Course image={CourseImage3} name="Course 3" price="$49.99" updated="25/09/2021" stars={4.5} reviews={785} />
        <Course image={CourseImage4} name="Course 4" price="$49.99" updated="25/09/2021" stars={4.5} reviews={785} />
        <Course image={CourseImage5} name="Course 5" price="$49.99" updated="25/09/2021" stars={4.5} reviews={785} />
        <Course image={CourseImage6} name="Course 6" price="$49.99" updated="25/09/2021" stars={4.5} reviews={785} />
      </div>
    </section>
  );
}

function Course({ image, name, price, updated, stars, reviews }) {
  return (
    <div className="box">
      <div className="image shine">
        <img src={image} alt={name} />
        <h3>Basic</h3> {/* This seems to be a placeholder, adjust if needed */}
      </div>
      <div className="content">
        <h4>{price}</h4>
        <p>Updated {updated}</p>
        <h3>Frontend Development</h3> {/* Adjust the course name as needed */}
        <div className="stars">
          {Array.from({ length: Math.floor(stars) }, (_, index) => (
            <i key={index} className="fas fa-star"></i>
          ))}
          {stars % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
          <span>({reviews})</span>
        </div>
      </div>
      <div className="icons">
        <span><i className="far fa-bookmark"></i> 15 lessons</span>
        <span><i className="far fa-clock"></i> 8h 25m 9s</span>
      </div>
    </div>
  );
}

function Teachers() {
  return (
    <section className="teacher" id="teacher">
      <h1 className="heading">Our Expert Teachers</h1>
      <div className="box-container">
        <TeacherBox image={teacherImage1} name="John Doe" title="Instructor" />
        <TeacherBox image={teacherImage2} name="Jane Smith" title="Professor" />
        <TeacherBox image={teacherImage3} name="Alex Johnson" title="Educator" />
        <TeacherBox image={teacherImage4} name="Emily Brown" title="Teacher" />
      </div>
    </section>
  );
}

function TeacherBox({ image, name, title }) {
  return (
    <div className="box">
      <div className="image">
        <img src={image} alt={name} />
        <div className="share">
          <a href="#" className="fab fa-facebook-f" aria-label="Facebook"></a>
          <a href="#" className="fab fa-twitter" aria-label="Twitter"></a>
          <a href="#" className="fab fa-instagram" aria-label="Instagram"></a>
        </div>
      </div>
      <div className="content">
        <h3>{name}</h3>
        <span>{title}</span>
      </div>
    </div>
  );
}

function Review() {
    return (
        <section className="review" id="review">
          <h1 className="heading">Our Students Review</h1>
          <div className="swiper review-slider">
            <div className="swiper-wrapper review-wrapper">
              <div className="swiper-slide slide">
                <i className="fas fa-quote-right"></i>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio minus consectetur magni architecto cum iure dignissimos dolores facere doloremque, neque eveniet eius officia, ducimus, unde quis ullam provident. Architecto, nemo.</p>
                <div className="user">
                <img src={reviewImage1} alt="review 1" />
                  <div className="user-info">
                    <h3>John Doe</h3>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="swiper-slide slide">
                <i className="fas fa-quote-right"></i>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio minus consectetur magni architecto cum iure dignissimos dolores facere doloremque, neque eveniet eius officia, ducimus, unde quis ullam provident. Architecto, nemo.</p>
                <div className="user">
                <img src={reviewImage2} alt="review 2" />
                  <div className="user-info">
                    <h3>John Doe</h3>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
    
    
              <div className="swiper-slide slide">
                <i className="fas fa-quote-right"></i>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio minus consectetur magni architecto cum iure dignissimos dolores facere doloremque, neque eveniet eius officia, ducimus, unde quis ullam provident. Architecto, nemo.</p>
                <div className="user">
                <img src={reviewImage3} alt="review 3" />
                  <div className="user-info">
                    <h3>John Doe</h3>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="swiper-slide slide">
                <i className="fas fa-quote-right"></i>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio minus consectetur magni architecto cum iure dignissimos dolores facere doloremque, neque eveniet eius officia, ducimus, unde quis ullam provident. Architecto, nemo.</p>
                <div className="user">
                <img src={reviewImage4} alt="review 4" />
                  <div className="user-info">
                    <h3>John Doe</h3>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="swiper-slide slide">
                <i className="fas fa-quote-right"></i>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio minus consectetur magni architecto cum iure dignissimos dolores facere doloremque, neque eveniet eius officia, ducimus, unde quis ullam provident. Architecto, nemo.</p>
                <div className="user">
                <img src={reviewImage5} alt="review 5" />
                  <div className="user-info">
                    <h3>John Doe</h3>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="swiper-slide slide">
                <i className="fas fa-quote-right"></i>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio minus consectetur magni architecto cum iure dignissimos dolores facere doloremque, neque eveniet eius officia, ducimus, unde quis ullam provident. Architecto, nemo.</p>
                <div className="user">
                <img src={reviewImage6} alt="review 6" />
                  <div className="user-info">
                    <h3>John Doe</h3>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
    
            </div>
          </div>
        </section>
      );
    }

    function Blog() {
        return (
            <section className="blog" id="blog">
            <h1 className="heading">Our Blogs</h1>
            <div className="box-container">
                <div className="box">
                <div className="image shine">
                <img src={blogImage1} alt="blog 1" />
                    <h3>09 Dec 2022</h3>
                </div>
                <div className="content">
                    <div className="icons">
                    <a href="#"><i className="fas fa-user"></i>By Admin</a>
                    </div>
                    <h3>We Have Best Courses for You</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sunt recusandae dolores inventore id dolorum facere mollitia cupiditate! Doloribus vitae obcaecati sint molestiae repudiandae eligendi aliquid aspernatur ut, velit culpa.</p>
                    <a href="#" className="btn">
                    <span className="text text-1">Read More</span>
                    <span className="text text-2" aria-hidden="true">Read More</span>
                    </a>
                </div>
                </div>
        
                <div className="box">
                <div className="image shine">
                <img src={blogImage2} alt="blog 2" />
                    <h3>09 Dec 2022</h3>
                </div>
                <div className="content">
                    <div className="icons">
                    <a href="#"><i className="fas fa-user"></i>By Admin</a>
                    </div>
                    <h3>We Have Best Courses for You</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sunt recusandae dolores inventore id dolorum facere mollitia cupiditate! Doloribus vitae obcaecati sint molestiae repudiandae eligendi aliquid aspernatur ut, velit culpa.</p>
                    <a href="#" className="btn">
                    <span className="text text-1">Read More</span>
                    <span className="text text-2" aria-hidden="true">Read More</span>
                    </a>
                </div>
                </div>
        
                <div className="box">
                <div className="image shine">
                <img src={blogImage3} alt="blog 3" />
                    <h3>09 Dec 2022</h3>
                </div>
                <div className="content">
                    <div className="icons">
                    <a href="#"><i className="fas fa-user"></i>By Admin</a>
                    </div>
                    <h3>We Have Best Courses for You</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sunt recusandae dolores inventore id dolorum facere mollitia cupiditate! Doloribus vitae obcaecati sint molestiae repudiandae eligendi aliquid aspernatur ut, velit culpa.</p>
                    <a href="#" className="btn">
                    <span className="text text-1">Read More</span>
                    <span className="text text-2" aria-hidden="true">Read More</span>
                    </a>
                </div>
                </div>
            </div>
            </section>
        );
        }




function Footer() {
    return (
        <section className="footer">
          <div className="box-container">
            <div className="box">
              <h3>find us here</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio itaque eius, cumque maiores culpa, voluptatem voluptatibus eaque officiis expedita accusantium voluptas ad, saepe architecto veritatis vero commodi qui dicta? Voluptate.</p>
              <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
              </div>
            </div>
            <div className="box">
              <h3>contact us</h3>
              <p>+1234 587 1478</p>
              <a href="#" className="link">wiemgraja64@gmail.com</a>
            </div>
            <div className="box">
              <h3>localisation</h3>
              <p>230 points of the pines<br />
              colorado springs<br />
              united states</p>
            </div>
          </div>
          <div className="credit">created by <span>ninjashub | </span>all rights are reserved</div>
        </section>
      );
    }
    

function Header() {
  return (
    <header className="header">
      <a href="#" className="logo"><FontAwesomeIcon icon={faBook} />edu</a>
      <nav className="navbar">
        <a href="#home" className="hover-underline">Home</a>
        <a href="#about" className="hover-underline">About</a>
        <a href="#courses" className="hover-underline">Courses</a>
        <a href="#teacher" className="hover-underline">Teacher</a>
        <a href="#review" className="hover-underline">Review</a>
        <a href="#blog" className="hover-underline">Blog</a>
        <a href="#contact" className="hover-underline">Contact</a>
      </nav>
      <div className="icons">
        <div id="login-btn" className="fas fa-user"><FontAwesomeIcon icon={faUser} /></div>
        <div id="menu-btn" className="fas fa-bars"><FontAwesomeIcon icon={faBars} /></div>
      </div>
      
    </header>
  );
}

function Contact() {
    return (
        <section className="contact" id="contact">
        <h1 className="heading">contact us</h1>
        <div className="row">
            <div className="image">
            <img src={contactImage} alt="" className="contact-img" />
            </div>
            <form action="">
            <h3>send us a message</h3>
            <input type="text" placeholder="name" className="box" />
            <input type="email" placeholder="email" className="box" />
            <input type="number" placeholder="phone number" className="box" />
            <textarea placeholder="message" className="box" cols="30" rows="10"></textarea>
            <a href="#" className="btn">
                <span className="text text-1">send message</span>
                <span className="text text-1" aria-hidden="true">send message</span>
            </a>
            </form>
        </div>
        </section>
    );
    }


function HomeLeaner() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Subjects />
      <Courses />
      <Teachers />
      <Review />
      <Contact />
      <Footer />
      <Blog/>
    </div>
  );
}

export default HomeLeaner;
