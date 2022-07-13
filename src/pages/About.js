import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faLinesLeaning } from '@fortawesome/free-solid-svg-icons';
import useTitle from '../useTitle';
function About() {
  useTitle("About")
  return (
    <>
    <div className="img-container container-fluid">
      <div className="overlay">
        <div className="about-text">
          <div className="row d-flex flex-column align-items-center justify-content-center text-center">
            <div className='col-lg-5 container-citation '>
              <div className='hr-about my-3' />
              <q className=' '>
                Grande è la fortuna di colui che 
                possiede una buona bottiglia, un buon libro, un buon amico.
              </q>
              <div className='hr-about my-3' />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <section className='about-project container-fluid'>
      <h2 className='text-center'>Il nostro progetto</h2>
      <div className="msg-promo row flex-sm-column align-items-sm-center align-items-lg-start flex-lg-row mt-5">
        
        <div className="single-project d-flex flex-column justify-content-center justify-content-lg-start col-12 col-lg-3 ">
          <h4>Educare</h4>
          <FontAwesomeIcon className='icon-single-project'  icon={faGraduationCap} />
          <p>
            Pickled hashtag portland pork belly cred selvage viral retro prism lomo narwhal cray selfies vegan lyft
          </p>
        </div>
        <div className="single-project d-flex flex-column justify-content-center justify-content-lg-start col-12 col-lg-3 ">
          <h4>Insegnare</h4>
          <FontAwesomeIcon className='icon-single-project'  icon={faUserGroup} />
          <p>
            iPhone banh mi you probably haven't heard of them fanny pack marfa four loko freegan. XOXO salvia twee whatever post-ironic blog
          </p>
        </div>
        <div className="single-project d-flex flex-column justify-content-center justify-content-lg-start col-12 col-lg-3 ">
          <h4>Centralizzare</h4>
          <FontAwesomeIcon className='icon-single-project'  icon={faLinesLeaning} />
          <p>
            Tilde post-ironic celiac franzen sustainable, vinyl polaroid direct trade tattooed vaporware kogi health goth cray echo park organic.
          </p>
        </div>
      </div>
      
    </section>
    <section className='about-team'>

    </section>
    <section className='about-staff container my-5'>
      <h2 className='text-center'>Il nostro team</h2>
      <div className="staff row">
        <div className="single-staff col-12 col-lg-3">
          <h4>Dennis Rodman</h4>
          <h5>CEO & Founder</h5>
          <img src="https://sportnews.snai.it/wp-content/uploads/2020/05/GettyImages-625824450.jpg" alt="" />
        </div>
        <div className="single-staff col-12 col-lg-3">
          <h4>Tatyana Doglieva</h4>
          <h5>CTO</h5>
          <img src="https://i1.wp.com/alabanza.ru/wp-content/uploads/2018/04/Instagram-i-Vikipediya-Tatyany-Dogilevoj-foto.jpg" alt="" />
        </div>
        <div className="single-staff col-12 col-lg-3">
          <h4>Charlie Sheen</h4>
          <h5>Stakeholder & Testimonial</h5>
          <img src="https://www.ecodelcinema.com/wp-content/uploads/2013/10/Charlie-Sheen.png" alt="" />
        </div>
        <div className="single-staff col-12 col-lg-3">
          <h4>Shia Lebeouf</h4>
          <h5>Creative Director</h5>
          <img src="https://www.corriere.it/methode_image/2021/01/15/Moda/Foto%20Moda/8%20shia%20labeouf.jpg" alt="" />
        </div>
      </div>
    </section> 
    </>
  )
}

export default About