import React from "react";
import { Form, Field } from "react-final-form";
import axios from "axios";

const ContactForm = () => {
  const handleSubmit = (values, form) => {
    const { Fname, Lname, Email, Subject, Message } = values;
    const telegram_bot_id = "6449286041:AAHA1VJlhGPS3QKrpeGowx9wGPjhgJ6W53Q";
    const chat_id = "5659934636";
    const telegramMessage = `First Name: ${Fname}\nLast Name: ${Lname}\nEmail : ${Email}\nSubject: ${Subject}\nMessage: ${Message}`;

    axios
      .post(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
        chat_id,
        text: telegramMessage,
      })
      .then((response) => {
        console.log("Message sent successfully", response);
        form.reset(); // Input maydonlarini bo'shatish
      })
      .catch((err) => {
        console.log("Error sending message", err);
      });
  };

  const handleValidate = () => {};

  return (
    <section className="py-24">
      <div className="containerb">
        <h1 className="font-medium text-base leading-3 text-[#000000]/[80%] mb-14 text-center">
          PLEASE, FEEL YOURSELF COMFORTABLE TO FILL IN OUR CONTACT FORM
        </h1>
        <div className="w-full max-w-[850px] mx-auto px-5">
          <Form
            onSubmit={handleSubmit}
            validate={handleValidate}
            render={({ handleSubmit, form }) => (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-x-6 gap-y-9 mb-8">
                  <Field name="Fname">
                    {({ input, meta }) => (
                      <div>
                        <input
                          className="py-5 pl-6 w-full max-w-[410px] border-[#DDE2E5] border rounded-lg text-base leading-5"
                          type="text"
                          required
                          {...input}
                          placeholder="First Name"
                        />
                        {meta.touched && meta.error && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  <Field name="Lname">
                    {({ input, meta }) => (
                      <div>
                        <input
                          className="py-5 pl-6 w-full max-w-[410px] border-[#DDE2E5] border rounded-lg text-base leading-5 "
                          type="text"
                          required
                          {...input}
                          placeholder="Last Name"
                        />
                        {meta.touched && meta.error && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  <Field name="Email">
                    {({ input, meta }) => (
                      <div>
                        <input
                          className="py-5 pl-6 w-full max-w-[410px] border-[#DDE2E5] border rounded-lg text-base leading-5"
                          type="email"
                          required
                          {...input}
                          placeholder="Email"
                        />
                        {meta.touched && meta.error && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  <Field name="Subject">
                    {({ input, meta }) => (
                      <div>
                        <input
                          className="py-5 pl-6 w-full max-w-[410px] border-[#DDE2E5] border rounded-lg text-base leading-5"
                          type="text"
                          required
                          {...input}
                          placeholder="Subject"
                        />
                        {meta.touched && meta.error && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                </div>
                <Field name="Message">
                  {({ input, meta }) => (
                    <div>
                      <textarea
                        className="py-5 pl-6 w-full border-[#DDE2E5] border rounded-lg text-base leading-5 h-[212px] max-h-[212px] min-h-[212px] mb-9"
                        type="text"
                        {...input}
                        placeholder="Message"
                      />
                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <div className="flex items-center justify-center">
                  <button
                    className="py-2 px-9 bg-[#0336FF] font-medium text-base leading-5 text-center text-white rounded-lg"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
