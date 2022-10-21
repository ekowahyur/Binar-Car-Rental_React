import React from 'react';
import ImgTesti1 from './assets/img_testi_1.png';
import ImgTesti2 from './assets/img_testi_2.png';
import Rate from './assets/star.svg';
import './style.css';

const Testimonial = () => {
  return (
    <section className="testimonial" id="testimonial">
      <div className="container">
        <div className="testi-head">
          <h3>Testimonial</h3>
          <h4>Berbagai review positif dari para pelanggan kami</h4>
        </div>
        <div className="owl-carousel">
          <div className="row">
            <div className="col-lg-12">
              <div className="card-item">
                <div className="card-body">
                  <div className="col-3">
                    <img src={ImgTesti1} alt="" />
                  </div>
                  <div className="col-9">
                    <div className="rate">
                      <img src={Rate} alt="" />
                      <img src={Rate} alt="" />
                      <img src={Rate} alt="" />
                      <img src={Rate} alt="" />
                      <img src={Rate} alt="" />
                    </div>
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing
                      elit, sed do eiusmod”</p>
                    <h4>John Dee 32, Bromo</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="card-item">
                <div className="card-body">
                  <div className="col-3">
                    <img src={ImgTesti2} alt="" />
                  </div>
                  <div className="col-9">
                    <div className="rate">
                      <img src={Rate} alt="" />
                      <img src={Rate} alt="" />
                      <img src={Rate} alt="" />
                      <img src={Rate} alt="" />
                      <img src={Rate} alt="" />
                    </div>
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing
                      elit, sed do eiusmod”</p>
                    <h4>John Dee 32, Bromo</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="card-item">
                <div className="card-body">
                  <div className="col-3">
                    <img src={ImgTesti2} alt="" />
                  </div>
                  <div className="col-9">
                    <div className="rate">
                      <img src={Rate} alt="" />
                      <img src={Rate} alt="" />
                      <img src={Rate} alt="" />
                      <img src={Rate} alt="" />
                      <img src={Rate} alt="" />
                    </div>
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing
                      elit, sed do eiusmod”</p>
                    <h4>John Dee 32, Bromo</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial;