import React, { ReactElement } from "react";

const Googlemap: React.FC = (): ReactElement => {
  ////style="border:0;"

  return (
    <section className="contact-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d755.3254404579259!2d-73.94621907080585!3d40.77737961426348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258b05a455555%3A0x9589a66f4cd6ad81!2sJUDY%20KIM%20MEDIA%20%26%20ENTERTAINMENT%20LLC!5e0!3m2!1sru!2skz!4v1570428211568!5m2!1sru!2skz"
        width="100%"
        height="500"
        frameBorder="0"
        allowFullScreen={false}
      ></iframe>
    </section>
  );
};

export default Googlemap;
