import emailjs from "emailjs-com";

export const sendEmail = (e , form) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_akgcr6v",
        "template_x7w5jij",
        form.current,
        "_UXQfXUfp_oeJ2wWf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };