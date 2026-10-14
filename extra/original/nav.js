import logo_shii from "../extra/logo_shii.png";

export default function PageIntro() {
  return (
    <div>
      <div className="bg-custom-blue m-4 rounded-2xl">
        <div className="nav flex justify-between items-center borde px-6 py-2">
          <div className="">
            <img className="h-10 w-auto object-contain" src={logo_shii} />
          </div>
          
          <div className="border rounded-full p-1 mb-5 font-medium ml-64">
            <p>Creative Design Studio</p>
          </div>
          <div className="flex justify-between items-center gap-6 font-medium text-[17px]">
            <p>About Us</p>
            <p>Work</p>
            <p>Service</p>
            <a className="text-custom-blue bg-black py-4 px-6 rounded-2xl text-[19px] leading-4.75 ">To collaborate</a>
          </div>
        </div>
      </div>
    </div>
  );
}





<div>
        <div className="text-center font-extrabold text-[95px] leading-21.25 text-midnight ">
          <p>Built to grow</p>
          <p>& designed </p>
          <p>to stand out</p>
        </div>
        <div>
          <p className="text-center text-plum-gray text-[20px] leading-7 font-medium mx-82.5 mt-6 pb-2">
            Standing out isn't luck, it's craftsmanship. We combine executive
            support, product management, and brand design to help your business
            thrive from positioning to launch.
          </p>
        </div>
</div>