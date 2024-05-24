import React, {useEffect, useState , useRef}  from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
// import 'bootstrap/dist/css/bootstrap.min.css';
import WOW from "wowjs";

// import './App.css';
import { HashLink } from 'react-router-hash-link';
import img2 from './images/logo (3).png'
import img3 from './images/W icon.svg'
import img4 from './images/G icon.svg'
import img5 from './images/grape icon.svg'
import img6 from './images/table.svg'
import img7 from './images/system1.svg'
import img8 from './images/wave.svg'
import img9 from './images/Mobile.svg'
import img10 from './images/Stats.svg'
import img11 from './images/women.svg'
import axios from "axios"
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Footer from "./Footer";

const Home = () => {

  const [projects , setproject] = useState([])
  const form = useRef();
useEffect(() =>{
axios.get("data.json")
.then((res)=>{

  setproject(res.data.projects)
}
)
},[])
const sendEmail = (e) => {
  alert("message sent successfully")
  e.preventDefault();
  emailjs.sendForm('service_t017r4e', 'template_gavkupn', form.current, 'rnbbd9bsoXc8q4ocp')  
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
  e.target.reset()
};
  return (
    <>
      <section className='bannar'>
        <Container>
          <Row>
            <Col md={7} sm={12} className="bannartext wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
              <p>WEB DESIGN <span>//</span> WEBFLOW DEVELOPMENT <span>//</span> SEO</p>
              <h1> Mohamed Ayman Portfolio .</h1>
              <h5>We build marketing websites that help you sell on autopilot.</h5>
              <HashLink to="/#contact"><button>Let's talk</button></HashLink>
            </Col>







            <Col md={5} sm={12} className="bannarimgs  wow slideInRight" data-wow-duration="2s" data-wow-delay="0.1s" >
              <img src={img8} alt="" className="waves" />
              <img src={img2} alt="" className="laptop" />
              <div className="imgbox gimg">
                <img src={img4} alt="" />
              </div>
              <div className="imgbox uimg">
                <img src={img5} alt="" />
              </div>
              <div className="imgbox wimg">
                <img src={img3} alt="" />
              </div>
            </Col>
          </Row>
        </Container>

      </section>



       {/* start second section */}
       <section className="homesec2">
        <Container>
          <Row>
            <Col md={6} sm={12} className="wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
              <div className="secimgs">
              <img src={img8} alt="" className="waves" />
                <img src={img6} alt="" className="people" />
              </div>
            </Col>
            <Col md={6} sm={12} className="sec2text wow slideInRight" data-wow-duration="2s" data-wow-delay="0.1s">
              <button>the dream</button>
              <p>Imagine having your sales team on the job 24/7,<br/> interacting with an endless stream of ready-to-buy <br/> visitors.</p>
            </Col>
          </Row>
        </Container>
      </section>
      {/* end second section  */}
       {/* start third section  */}
      <section className="homesec3" id="latest">
        <div className="sectext wow fadeIn" data-wow-duration="2s" data-wow-delay="0.1s">
          <h3>Latest builds.</h3>
          <Link to="/Projects">View Projects</Link>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s"
        >
          {projects.slice(1, 6).map((project) => (
            <SwiperSlide key={project.id}><a href={project.link} target="_blank"><img src={project.photo} alt="" /></a></SwiperSlide>
          ))}
        </Swiper>
      </section>
      
      {/* end third section */}
          {/* start fourth section  */}
          <section className="homesec4" id="process">
        <h3>How it's done.</h3>
        <img src={img8} alt="" className="waves" />
        <div className="divLeft wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.1s">
          <img src={img5} alt="" />
          <div>
            <h5>UX/UI Design</h5>
            <p>Where concepts turn into a strategic user-experience.</p>
          </div>
        </div>
        <div className="divRight wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
          <img src={img3} alt="" />
          <div>
            <h5>Webflow Development</h5>
            <p>Where design turns into code.</p>
          </div>
        </div>
        <div className="divLeft wow fadeInUp" data-wow-duration="2s" data-wow-delay="1s">
          <img src={img7} alt="" />
          <div>
            <h5>System Automation</h5>
            <p>Where busywork gets delegated.</p>
          </div>
        </div>
        <div className="divRight wow fadeInUp" data-wow-duration="2s" data-wow-delay="1.5s">
          <img src={img4} alt="" />
          <div>
            <h5>SEO</h5>
            <p>Where customers come flooding in.</p>
          </div>
        </div>
      </section>
      {/* end fourth section  */}
        {/* start fifth section  */}
        <section className="homesec5" id="service">
        <h2 className=" wow fadeIn" data-wow-duration="2s" data-wow-delay="0.1s">Why Webflow.</h2>
        <img src="images/6179978654e4d77bdbc81721/623506fac432155edb494f48_Topology-2%20(1).svg" alt="" />
        <Container>
          <Row>
            <Col md={4} sm={12} className="divRight wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.1s">
              <div>
                <h5>REASON 1</h5>
                <h3>Next-Level Storytelling</h3>
                <img src={img9} alt="" />
                <p>Unleash the best visuals and experiences that modern web design has to offer. Webflow turns your wildest of ideas into strategic customer-experiences.</p>
              </div>
            </Col>
            <Col md={4} sm={12}>
              <div className="divRight wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                <h5>REASON 2</h5>
                <h3>Unbelievable Performance</h3>
                <img src={img10} alt="" />
                <p>Hosted on an ultra-fast global CDN, Webflow goes full steam ahead with load speed, uptime, asset optimization, and SEO. All without ever needing to install a patch or upload a server configuration.</p>
              </div>
            </Col>
            <Col md={4} sm={12}>
              <div className="divRight wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                <h5>REASON 3</h5>
                <h3>Developer-Free Tweaks</h3>
                <img src={img11} alt="" />
                <p>Webflow’s ‘Editor Mode’ allows any team member to update content as they please without wreaking havoc or paying people like us to fix it.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* end fifth section  */}
       {/* start sixth section  */}
       <section className="homesec6" id="contact">
        <Container>
          <h3 className="wow fadeIn" data-wow-duration="2s" data-wow-delay="0.1s">Contact Us</h3>
          <Row className="align-items-center">
            <Col md={6} sm={12} className="wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
              <div>
                <p><span>Email:</span> info@gmail.com</p>
                <p><span>Phone:</span> 0121133133131</p>
                <p><span>Address:</span> 23 street newyork</p>
              </div>
            </Col>
            <Col md={6} sm={12} className="wow bounceInRight" data-wow-duration="2s" data-wow-delay="0.3s">
              <div>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="d-flex">
                    <input type="text" name="name" placeholder="Name" />
                    <input type="text" name="company" placeholder="Company" />
                  </div>
                  <div className="d-flex">
                    <input type="text" name="email" placeholder="Email" />
                    <input type="text" name="phone" placeholder="Phone" />
                  </div>
                  <textarea name="message" placeholder="Message"></textarea>
                  <button type="submit">Send Message</button>
                </form>
              </div>
            </Col>

          </Row>
        </Container>
      </section>
      {/* end sixth section  */}
      <Footer/>
    </>

  )
}
export default Home
