import React from "react";
import { Link } from "react-router-dom";
import HighlightsSection from "../../components/HighlightsSection";

const Contact = () => {
  return (
    <>
      <section className="page-title pt_20 pb_18">
        <div className="large-container">
          <ul className="bread-crumb clearfix">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Contact</li>
          </ul>
        </div>
      </section>

      <section className="contact-info-section pb_50">
        <div className="large-container">
          <div className="sec-title centred pb_2">
            <h2>Contact Information</h2>
          </div>
          <div className="row clearfix">
            <div className="col-xl-3 col-lg-6 col-md-12 info-column">
              <div className="info-block-one">
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-50"></i>
                  </div>
                  <h4>Corporate Office</h4>
                  <p>0233 Brisbane Cir. Shiloh, Australia 81063</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-12 info-column">
              <div className="info-block-one">
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-50"></i>
                  </div>
                  <h4>Main Warehouse</h4>
                  <p>0233 Brisbane Cir. Shiloh, Australia 81063</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-12 info-column">
              <div className="info-block-one">
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-51"></i>
                  </div>
                  <h4>Email Address</h4>
                  <p>
                    <Link href="mailto:contact@example.com">
                      contact@example.com
                    </Link>
                    <br />
                    <Link href="mailto:support@example.com">
                      support@example.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-12 info-column">
              <div className="info-block-one">
                <div className="inner-box">
                  <div className="icon-box">
                    <i className="icon-52"></i>
                  </div>
                  <h4>Phone Number</h4>
                  <p>
                    Emergency Cases <br />
                    <Link href="tel:2085440142">+(208) 544 -0142</Link>
                    (24/7)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section pb_80">
        <div className="large-container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="form-inner">
                <form
                  method="post"
                  action="https://html.tonatheme.com/2025/nexmart/sendemail.php"
                  id="contact-form"
                >
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        name="username"
                        placeholder=""
                        required
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <label>E-mail</label>
                      <input
                        type="email"
                        name="email"
                        placeholder=""
                        required
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <label>Phone</label>
                      <input type="text" name="phone" placeholder="" required />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <label>Subject</label>
                      <input
                        type="text"
                        name="subject"
                        placeholder=""
                        required
                      />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <label>Write Message *</label>
                      <textarea name="message" placeholder=""></textarea>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                      <button
                        type="submit"
                        className="theme-btn"
                        name="submit-form"
                      >
                        Send Message<span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 map-column">
              <div className="map-inner">
                <iframe
                  title="Google Map showing New York, USA"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55945.16225505631!2d-73.90847969206546!3d40.66490264739892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1601263396347!5m2!1sen!2sbd"
                  width="100%"
                  height="500"
                  frameBorder="0"
                  style={{ border: 0, width: "100%" }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HighlightsSection />
    </>
  );
};

export default Contact;


// import React from "react";
// import { Link } from "react-router-dom";
// import HighlightsSection from "../../components/HighlightsSection";

// const Contact = () => {
//   return (
//     <>
//       {/* Page Title */}
//       <section className="page-title pt_20 pb_18">
//         <div className="large-container">
//           <ul className="bread-crumb clearfix">
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>Contact</li>
//           </ul>
//         </div>
//       </section>

//       {/* Contact Info */}
//       <section className="contact-info-section pb_50">
//         <div className="large-container">
//           <div className="sec-title centred pb_2">
//             <h2>Contact Information</h2>
//           </div>

//           <div className="row clearfix">
//             <div className="col-xl-3 col-lg-6 col-md-12 info-column">
//               <div className="info-block-one">
//                 <div className="inner-box">
//                   <div className="icon-box">
//                     <i className="icon-50"></i>
//                   </div>
//                   <h4>Corporate Office</h4>
//                   <p>0233 Brisbane Cir. Shiloh, Australia 81063</p>
//                 </div>
//               </div>
//             </div>

//             <div className="col-xl-3 col-lg-6 col-md-12 info-column">
//               <div className="info-block-one">
//                 <div className="inner-box">
//                   <div className="icon-box">
//                     <i className="icon-50"></i>
//                   </div>
//                   <h4>Main Warehouse</h4>
//                   <p>0233 Brisbane Cir. Shiloh, Australia 81063</p>
//                 </div>
//               </div>
//             </div>

//             <div className="col-xl-3 col-lg-6 col-md-12 info-column">
//               <div className="info-block-one">
//                 <div className="inner-box">
//                   <div className="icon-box">
//                     <i className="icon-51"></i>
//                   </div>
//                   <h4>Email Address</h4>
//                   <p>
//                     <a href="mailto:contact@example.com">
//                       contact@example.com
//                     </a>
//                     <br />
//                     <a href="mailto:support@example.com">
//                       support@example.com
//                     </a>
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="col-xl-3 col-lg-6 col-md-12 info-column">
//               <div className="info-block-one">
//                 <div className="inner-box">
//                   <div className="icon-box">
//                     <i className="icon-52"></i>
//                   </div>
//                   <h4>Phone Number</h4>
//                   <p>
//                     Emergency Cases <br />
//                     <a href="tel:2085440142">+(208) 544 -0142</a> (24/7)
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Form */}
//       <section className="contact-section pb_80">
//         <div className="large-container">
//           <div className="row clearfix">
//             <div className="col-lg-6 col-md-12 col-sm-12 content-column">
//               <div className="form-inner">
//                 <form
//                   method="post"
//                   action="https://html.tonatheme.com/2025/nexmart/sendemail.php"
//                   id="contact-form"
//                 >
//                   <div className="row clearfix">
//                     <div className="col-lg-6 col-md-6 col-sm-12 form-group">
//                       <label>Name</label>
//                       <input type="text" name="username" required />
//                     </div>

//                     <div className="col-lg-6 col-md-6 col-sm-12 form-group">
//                       <label>E-mail</label>
//                       <input type="email" name="email" required />
//                     </div>

//                     <div className="col-lg-6 col-md-6 col-sm-12 form-group">
//                       <label>Phone</label>
//                       <input type="text" name="phone" required />
//                     </div>

//                     <div className="col-lg-6 col-md-6 col-sm-12 form-group">
//                       <label>Subject</label>
//                       <input type="text" name="subject" required />
//                     </div>

//                     <div className="col-lg-12 col-md-12 col-sm-12 form-group">
//                       <label>Write Message *</label>
//                       <textarea name="message"></textarea>
//                     </div>

//                     <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
//                       <button
//                         type="submit"
//                         className="theme-btn"
//                         name="submit-form"
//                       >
//                         Send Message
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                       </button>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>

//             {/* Google Map */}
//             <div className="col-lg-6 col-md-12 col-sm-12 map-column">
//               <div className="map-inner">
//                 <iframe
//                   title="Google Map"
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55945.16225505631!2d-73.90847969206546!3d40.66490264739892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1601263396347!5m2!1sen!2sbd"
//                   height="500"
//                   style={{ border: 0, width: "100%" }}
//                   allowFullScreen
//                   loading="lazy"
//                 ></iframe>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <HighlightsSection />
//     </>
//   );
// };

// export default Contact;
