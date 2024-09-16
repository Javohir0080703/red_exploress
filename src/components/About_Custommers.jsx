import React from "react";

const About_Custommers = () => {
  const data = [
    {
      title:"Joy Kim",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus.",
      type:"explorer"
    },
    {
      title:"Joy Kim",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus.",
      type:"explorer"
    },
    {
      title:"Joy Kim",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus.",
      type:"explorer"
    },
  ]
  return (
    <section className="pt-24 pb-[220px]">
      <div className="containerb">
        <div className="flex items-center justify-between mb-[105px]">
          <h1 className="text-[40px] leading-[46px] text-#14142B tracking-[-2%] ">
          What 
            <span className="text-black whitespace-nowrap">Customer says</span>{" "}
            <br />
            About us?{" "}
            <span className="text-#FFA500 whitespace-nowrap">About Us.</span>
          </h1>
          <p className="font-bold text-lg leading-10 text-#000000 w-full max-w-[590px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mor
            mattis nec etiam ac. Bibendum tellus mi imperdiet amet maecenas
            magna tortor nulla. Nec tortor ut cursus ornare nibh vivamus. Quam
            elementum at velit viverra mattis. <br /> Eleifend enim, praesent
            eu, leo semper quis et. Nisl neque malesuada arcu, felis, vitae
            rhoncus morbi volutpat ante. Adipiscing mauris{" "}
          </p>
        </div>
        <ul className="flex items-center flex-wrap justify-between">
          {
            data.map((e, index)=>{
              return(
                <li key={index} className="pt-[61px] pb-[52px] pl-8 px-12 shadow-2xl w-full max-w-[350px] rounded-[30px]">
                  <p className="font-bold text-lg leading-10 text-#000000 mb-4">{e.text}</p>
                  <h3 className="font-bold text-2xl leading-5 text-#000000 mb-3">{e.title}</h3>
                  <p className="font-bold text-lg leading-5 text-#000000 ">{e.type}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
  );
};

export default About_Custommers;
