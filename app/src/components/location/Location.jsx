import "./Location.css";

const Location = () => {
  return (
    <section id="location" className="location">
      <p>DINO LUZZI ENERGY DRINK</p>
      <h1>STORE LOCATOR</h1>
      <iframe
      title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.524614839569!2d-82.35590152301066!3d29.646547437310822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e8a30cfbe49275%3A0x206fe0de143d9886!2sUniversity%20of%20Florida!5e0!3m2!1sen!2sus!4v1711259981944!5m2!1sen!2sus"
        width="1000"
        height="650"
        style={{border: 0}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      {/* <MapEmbed /> */}
    </section>
  );
};

export default Location;
