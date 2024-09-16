import React, { useState } from "react";
import axios from "axios";

const Cta = () => {
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmitInput = (event) => {
    event.preventDefault();
    if (email == "") {
    } else {
      const telegram_bot_id = "6449286041:AAHA1VJlhGPS3QKrpeGowx9wGPjhgJ6W53Q";
      const chat_id = "5659934636";

      const telegramMessage = `Email: ${email}`;

      axios

        .post(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
          chat_id,
          text: telegramMessage,
        })
        .then((response) => {
          setEmail("");
        });
      alert("Malumot yuborildi");
    }
  };
  return (
    <section className="py-[51px]">
      <div className="w-full max-w-[1080px] mx-auto px-5 flex items-center justify-between">
        <h1 className="font-bold text-3xl leading-9 text-#000000 w-full max-w-[470px] ">
          Join <span className="text-#0336FF">98,641</span> Monthly Readers.
          Subscribe Today!
        </h1>
        <form
          onSubmit={handleSubmitInput}
          className="space-x-5 flex items-center"
          action=""
        >
          <input
          onChange={handleChange}
            value={email}
            type="email"
            placeholder="Email Address"
            required
            className=" pt-5 pb-7 pl-6 w-full max-w-[330px] border-#C4C4C4 rounded-lg border-2"
          />
          <button className="pt-5 pb-7 px-5 text-2xl leading-6 text-white bg-#0336FF rounded-lg">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Cta;
