import React from "react";

const Cta = () => {
  return (
    <section className="py-[51px]">
      <div className="w-full max-w-[1080px] mx-auto px-5 flex items-center justify-between">
        <h1 className="font-bold text-3xl leading-9 text-#000000 w-full max-w-[470px] ">
          Join <span className="text-#0336FF">98,641</span> Monthly Readers.
          Subscribe Today!
        </h1>
        <form className="space-x-5 flex items-center" action="">
          <input
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
