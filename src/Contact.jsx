import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2201.361104333562!2d89.87152463634965!3d24.46357236917228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdf3ff845eefdf%3A0x71da427dbf236e69!2sShahin%20Chasma%20Ghar!5e0!3m2!1sen!2sbd!4v1664550468700!5m2!1sen!2sbd"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xpznrwgj"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              name="username"
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Enter Email"
              required
            />
            <textarea
              name="Massage"
              cols="30"
              rows="10"
              autoComplete="off"
              placeholder="Enter your massage..."
            ></textarea>
            <input type="submit" value="sent" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

export default Contact;
