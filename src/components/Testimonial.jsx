import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

const Testimonial = ({ name, role, comment }) => (
  <div className="testimonial">
    <p className="testimonial-comment">{comment}</p>
    <div className="testimonial-author">
      <p className="testimonial-name">{name}</p>
      <p className="testimonial-role">{role}</p>
    </div>
  </div>
);

Testimonial.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  showStar: PropTypes.bool,
};

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Alan Sears",
      comment:
        "My gold ring was stuck on my finger and the finger was swollen; the staff helped me out and adjusted the ring accordingly. Very helpful brother. Thank you very much brother.Such a humble , reasonable and nice service.",
    },
    {
      name: "Alan Sears",
      comment:
        "My gold ring was stuck on my finger and the finger was swollen; the staff helped me out and adjusted the ring accordingly. Very helpful brother. Thank you very much brother.Such a humble , reasonable and nice service.",
    },
    {
      name: "Alan Sears",
      comment:
        "My gold ring was stuck on my finger and the finger was swollen; the staff helped me out and adjusted the ring accordingly. Very helpful brother. Thank you very much brother.Such a humble , reasonable and nice service.",
    },
  ];

  return (
    <>
      <div className="main-heading">Client Testimonials</div>
      <div className="testimonial-section">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            {...testimonial}
            className="item"
            showStar={true}
          />
        ))}
        <FaStar color="gold" size={24} />
        <FaStar color="gold" size={24} />
        <FaStar color="gold" size={24} />
        <FaStar color="gold" size={24} />
        <FaStar color="gold" size={24} />
        <div className="star-icon">
          <FaStar color="gold" size={24} />
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;
