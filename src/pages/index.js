import Logo from "@/icon/logo";

export default function Home() {
  return (
    <div className="w-full bg-[#2F6B4F] pt-[24px]">
      <navbar className="grid grid-cols-12 gap-x-[32px] max-w-[1210px] mx-auto items-center">
        <div className="col-start-1 col-end-3">
          <Logo />
        </div>
        <div className="col-span-7 col-end-13">
          <div className="max-w-[638px] w-full grid grid-cols-5 gap-x[40px] ml-auto text-white">
            <a href="">Home</a>
            <a href="">Our Services</a>
            <a href="">Portofolio</a>
            <a href="">Testimonial</a>
            <a href="">Contact Us</a>
          </div>
        </div>
      </navbar>
      <section
        id="hero"
        className="grid grid-cols-12 gap-x-[32px] max-w-[1210px] mx-auto mt-[100px]"
      >
        <h1 className="col-start-2 col-span-10 max-w-[999px] h-auto text-center font-sans text-[64px] text-white font-[700] leading-[87.16px] py-[32px]">
          Create Amazing Digital Product For Your Business
        </h1>

        <p className="col-start-3 col-span-8 max-w-[796px] text-center text-white font-[400] text-[18px] leading-[27px]">
          We are a professional digital agency that has been established since
          2016, we present a variety of digital services that can help you solve
          problems in your business
        </p>

        <div className="col-start-5 col-span-4 grid pt-[48px]">
          <button className="bg-white mx-auto px-[32px] py-[23px] text-[20px] text-center font-[700]">
            Get Started →
          </button>
        </div>

        <img src="/hero.png" className="col-span-full mt-[76px]" />
      </section>

      <section>
        <div className="grid grid-cols-12 gap-x-[32px] max-w-[1210px] mx-auto mt-[100px]">
          <div className="col-start-1">
            <div className="flex-col gap-[4px]">
              <h6>Our Portofolio's</h6>
              <h3>Recent Projects</h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-[32px] max-w-[1210px] mx-auto ">
          <div className="col-span-4">
            <div>
              <img src="/hospital.png" />
              <h4>Website My Hospital</h4>
              <p>
                Create a hospital website with patient, doctor, and drug
                logistics features that help hospital operations
              </p>
            </div>
          </div>
          <div className="col-span-4">
            <div>
              <img src="/hospital.png" />
              <h4>Website My Hospital</h4>
              <p>
                Create a hospital website with patient, doctor, and drug
                logistics features that help hospital operations
              </p>
            </div>
          </div>
          <div className="col-span-4">
            <div>
              <img src="/hospital.png" />
              <h4>Website My Hospital</h4>
              <p>
                Create a hospital website with patient, doctor, and drug
                logistics features that help hospital operations
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-12 gap-x-[32px] max-w-[1210px] mx-auto mt-[100px]">
        <div className="col-start-4 col-span-6">
          <div className="flex flex-col justify-center text-center">
            <h2>
              Have a project idea and want to make it come true?
            </h2>

            <p>
              Please contact us and we will discuss about your project, don't forget we are always here for you
            </p>

            <div className="">
              <button className="flex flex-row bg-white mx-auto px-[32px] py-[23px] text-[20px] text-center font-[700]">
                Get Started →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-12 gap-x-[32px] max-w-[1210px] mx-auto">
        <div className="col-span-6 flex flex-col">
          <div className="col-start-1 col-end-3">
            <Logo />
          </div>
          <div className="text-[18px]">
            <div>Introducing, We are Bubble Bash digital agency company with more than 6 years of experience. We are committed to serve with all our heart</div>
          </div>
          <div className="flex flex-row gap-x-[24px]">
            <div>Icon1</div>
            <div>Icon2</div>
            <div>Icon3</div>
          </div>
        </div>

        <div className="col-span-5 col-end-13">
          <div className="w-full grid grid-cols-3 ml-auto ">
            <div className="flex flex-col gap-y-[16px]">
              <div>Pages</div>
              <div>Text1</div>
              <div>Text1</div>
              <div>Text1</div>
              <div>Text1</div>
            </div>

            <div className="flex flex-col gap-y-[16px]">
              <div>Explore</div>
              <div>Text1</div>
              <div>Text1</div>
              <div>Text1</div>
              <div>Text1</div>
              <div>Text1</div>
            </div>

            <div className="flex flex-col gap-y-[16px] ">
              <div>Company</div>
              <div>Text1</div>
              <div>Text1</div>
              <div>Text1</div>
              <div>Text1</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
