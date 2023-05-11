import React from "react";
import { MdLocationOn } from "react-icons/md";
import Input from "../../components/input";
import Button from "../../components/button";
import { BsFillSendFill, BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
const Contact = () => {
  return (
    <div className="request_query">
      <div className="contact">
        <div className="container-fluid bg-grey bg_contact">
          <div className="row">
            <div className="col-sm-7 col-md-7 p-5">
              <div className="bg-light shadow p-5">
                <form>
                  <h5 className="text-primary my-4">HAVE QUESTIONS?</h5>
                  <h2 className="my-3">Send us a Message</h2>
                  <div className="row my-4">
                    <div className="col-sm-12">
                      <Input
                        type="text"
                        placeholder="Name*"
                        id="name"
                        width="100%"
                        padding="10px"
                        border="none"
                        bg="#eff2f5"
                        className="contact_input"
                        rounded="8px"
                      />
                    </div>
                  </div>
                  <div className="row my-4">
                    <div className="col-sm-6">
                      <Input
                        type="email"
                        placeholder="Email*"
                        id="email"
                        width="100%"
                        padding="10px"
                        border="none"
                        bg="#eff2f5"
                        className="contact_input"
                        rounded="8px"
                      />
                    </div>
                    <div className="col-sm-6">
                      <Input
                        type="number"
                        placeholder="Number*"
                        id="email"
                        width="100%"
                        padding="10px"
                        border="none"
                        bg="#eff2f5"
                        className="contact_input"
                        rounded="8px"
                      />
                    </div>
                  </div>
                  <div className=" row my-4">
                    <div className="col-sm-12 ">
                      <textarea
                        className="contact_input message_input "
                        placeholder="Message*"
                        id="message"
                      />
                    </div>
                  </div>
                  <div className="row my-4">
                    <div className="col-sm-12 text-center">
                      <Button
                        bg="#36BA24"
                        border="2px solid #36BA24"
                        rounded="8px"
                        padding="8px"
                        color="#ffffff"
                        width="200px"
                      >
                        Submit
                        <BsFillSendFill className="ms-2" />
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-sm-5 col-md-5 p-5">
              <h1>Contact Information</h1>
              <p>
                Got a question or suggestion? We'd love to hear from you! Get
                in touch with us.
              </p>
              <div className="d-flex align-items-center justify-content-start ">
                <div className="footer_icons">
                  <BsFillTelephoneFill />
                </div>
                <div className="ms-4">
                  <h4>Mobile</h4>
                  <p className="mb-0">+91 1234567890</p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-start my-5">
                <div className="footer_icons">
                  <MdLocationOn />
                </div>
                <div className="ms-4">
                  <h4>Our Location</h4>
                  <p className="mb-0">Ashiana Nagar Phase 1, Patna 700136</p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-start my-4">
                <div className="footer_icons">
                  <AiFillMail />
                </div>
                <div className="ms-4">
                  <h4>Official Mail</h4>
                  <p className="mb-0">prashant@avigna.biz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
