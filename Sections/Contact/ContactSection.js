import React, {useEffect, useRef} from "react";
import {useForm} from "@formspree/react";
import Container from "../../Components/Container/Container";
import {H2, H3, H4, P} from "../../styles/ShareStyles";
import StyledContactSection from "./StyledContactSection";
import {MdLocationPin} from "react-icons/md";
import {HiOutlineMail} from "react-icons/hi";
import {HiPhone} from "react-icons/hi";
import Button from "./../../Components/Button/Button";

const ContactSection = () => {
  const formRef = useRef();
  const [state, handleSubmit] = useForm("xgebwoqn");

  useEffect(() => {
    if (state.succeeded) {
      formRef.current.reset();
    }
  }, [state]);
  return (
    <StyledContactSection id="contact">
      <Container>
        <H4 className="sub__title">Contact</H4>
        <H2 className="title">I Want to Hear from You</H2>
        <div className="contact">
          <div className="address">
            <div className="address__item">
              <div className="address__icon">
                <MdLocationPin size={24} />
              </div>
              <div className="address__text">
                <H3 className="address__text__title">Address</H3>
                <P className="address__text__para">Dhaka, Bangladesh</P>
              </div>
            </div>

            <div className="address__item">
              <div className="address__icon">
                <HiOutlineMail size={24} />
              </div>
              <div className="address__text">
                <H3 className="address__text__title">Email</H3>
                <P className="address__text__para">hmsajibahmed7@gamil.com</P>
              </div>
            </div>

            <div className="address__item">
              <div className="address__icon">
                <HiPhone size={24} />
              </div>
              <div className="address__text">
                <H3 className="address__text__title">Phone</H3>
                <P className="address__text__para">+880 1740786762</P>
              </div>
            </div>
          </div>

          <form
            className="form"
            method="POST"
            onSubmit={handleSubmit}
            ref={formRef}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="form__input"
              name="name"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="form__input"
              name="email"
            />
            <input
              type="number"
              placeholder="Your Phone"
              className="form__input"
              name="number"
            />
            <input
              type="text"
              placeholder="Subject"
              className="form__input"
              name="subject"
            />
            <textarea
              placeholder="Write your message here"
              className="form__input form__textarea"
              name="message"
            ></textarea>

            <div className="btn">
              <Button className="btn" text="Submit Now" />
            </div>
          </form>
        </div>
      </Container>
    </StyledContactSection>
  );
};

export default ContactSection;
