import React from "react";

function Content() {
  return (
    <div>
      <section class="">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="Images/pwanmaxhome1.jpeg"
                alt="First slide"
                style={{ height: "80vh" }}
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 "
                src="Images/pwanmaxpeople.jpeg"
                alt="Second slide"
                style={{ height: "80vh" }}
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="Images/pwanmaxpromo.png"
                alt="Third slide"
                style={{ height: "80vh" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section class="bg-light" id="about">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12">
              <h3 class="text-center mt-4 text-secondary extend">
                Know about us
              </h3>
            </div>
          </div>
          <div class="row">
            <p class="mt-4 mb-5">
              Pwan Max property and Business Solutions is a subsidiary of PWAN
              GROUP LTD, based in Lekki, Lagos Nigeria. ‘PWAN’ is an acronym for
              ‘ Property World Africa Network (PWAN) and we exist to make Home
              ownership dream a reality for all in Nigeria, Africa and beyond.
              Pwan Max is a real estate marketing, investment, management and
              development company with a drive to providing choice classic
              serene, luxury homes within workable budget for our clients. We
              are real estate professionals with a ‘Service first’ approach to
              covering all aspects of residential and commercial properties and
              truly dedicated to providing superior service that results in the
              best value for our clients.
            </p>
          </div>
        </div>
      </section>

      <section class="" id="destinations">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12">
              <h3 class="text-center mt-4 text-secondary extend">
                Our Projects and Services
              </h3>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 mb-5">
              <div class="card mt-4">
                <img
                  class="card-img-top"
                  src="Images/pwanmax-Real-Estate-Development.jpeg"
                  alt=""
                />
                <div class="card-body">
                  <h4 class="card-title text-secondary">
                    Real Estate Development
                  </h4>
                  <p class="card-text text-secondary">
                    As a real estate development firm, we are involved in
                    construction and development processes from start to finish
                    by providing real estate development solutions to our
                    clients. We work at always to ensure we deliver within
                    budget and time, without compromising on quality be it
                    residential or commercial, we guarantee to meet the
                    individual needs of our clients.
                  </p>
                </div>
                <div class="card-footer">
                  <a
                    href="https://pwanmax.com/services/real-estate-development/"
                    class="btn btn-primary"
                  >
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-4 mb-5">
              <div class="card mt-4">
                <img
                  class="card-img-top"
                  src="Images/consultancy.jpeg"
                  alt=""
                />
                <div class="card-body">
                  <h4 class="card-title text-secondary">
                    Real Estate Management
                  </h4>
                  <p class="card-text text-secondary">
                    Investments without proper monitoring and management are
                    simply nothing but waste – literally throwing away hard
                    earned resources into the winds. We effectively handle real
                    estate/property management to produce best results and value
                    for our clients. We will surely help you manage your
                    business needs and give you the best of advice.
                  </p>
                </div>
                <div class="card-footer">
                  <a
                    href="https://pwanmax.com/services/real-estate-management/"
                    class="btn btn-primary"
                  >
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-4 mb-5">
              <div class="card mt-4">
                <img
                  class="card-img-top"
                  src="Images/pwanmax-Seminars-and-Trainings.jpeg"
                  alt=""
                />
                <div class="card-body">
                  <h4 class="card-title text-secondary">
                    Seminars and Trainings
                  </h4>
                  <p class="card-text text-secondary">
                    We conduct seminars and trainings relating to real estate
                    and information marketing. We use such seminars to educate
                    the public on the need for them to own properties and
                    develop these properties as a means to creating wealth for
                    themselves and generations after them.
                  </p>
                </div>
                <div class="card-footer">
                  <a
                    href="https://pwanmax.com/services/seminars-and-trainings/"
                    class="btn btn-primary"
                  >
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="" id="mission">
        <div class="container">
          <div class="col-sm-12 col-md-12 mb-4">
            <h3 class="text-center text-secondary mt-4 extend">Mission</h3>
            <p>
              Presently, we are offering a range of property options to
              individuals as well as corporate organisations desirous of
              maximising staff potentials by acquiring land for Staff Housing
              Purposes.
            </p>
            <p>
              Our objectives Is to engage efficiently, responsibly and
              profitably in Real Estate and other selected businesses We
              participate in the search for and development of property to meet
              evolving client’s needs and the country’s growing demand for
              properties.
            </p>
          </div>
          <div class="accordion" id="accordionExample">
            <div class="card">
              <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    OUR VISION
                  </button>
                </h2>
              </div>

              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  To make home ownership dream a reality.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingTwo">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    OUR MISSION
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  To discover affordable land in fast developing areas and make
                  these known to you and also show how you can make money to buy
                  land and build your own home.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingThree">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    OUR CORE VALUES
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  A – ACCOUNTABILITY R – RESPONSIBILITY I – INTEGRITY S –
                  SERVICE E – EXCELLENCE
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-light mt-5" id="tourist">
        <div class="container">
          <div class="row text-center">
            <div class="col-sm-12 col-md-12 mb-4">
              <h3 class="text-center mt-4 text-secondary">
                Board of Directors
              </h3>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="Images/chairmanpwan.jpeg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  DR. AUGUSTINE OZIOMA ONWUMERE
                </h4>
                <h6 class="font-weight-bold blue-text my-3">
                  Chairman, PWAN Group
                </h6>
                <p class="font-weight-normal dark-grey-text">
                  Dr. Augustine Ozioma Onwumere is a Co-Founder of the PWAN
                  GROUP. He sits as the Chairman of the PWAN Group which is the
                  largest and widest Real Estate Network in Nigeria with Estates
                  and Offices spread across several States of the
                  federation...Lagos, Ogun State, Abuja, Owerri in Imo State,
                  Port Harcourt in Rivers State, Asaba and Warri in Delta State,
                  Awka in Anambra State with Enugu opening soon. He is also the
                  CEO of Five (5) service and product Companies in Lagos, Abuja,
                  Asaba and Port Harcourt.
                </p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="Images/gmdpwan.jpeg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  DR. JAYNE OBIOMA ONWUMERE
                </h4>
                <h6 class="font-weight-bold blue-text my-3">
                  Group Managing Director, PWAN GROUP
                </h6>
                <p class="font-weight-normal dark-grey-text">
                  Dr. Jayne Obioma Onwumere is the Group Managing Director of
                  The PWAN GROUP. PWAN is an acronym for Property World Africa
                  Network. She leads a team of 12 Managing Directors with 110
                  direct Staff spread across 12 Affiliate Companies that make up
                  the PWAN Group and over 30 thousand Independent Real Estate
                  Professionals generally called Consultants.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="Images/Dr-Julius-Oyedemi.jpeg"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  DR. JULIUS OYEDEMI
                </h4>
                <h6 class="font-weight-bold blue-text my-3">
                  Chairman Board of Directors of PWAN Perfection
                </h6>
                <p class="font-weight-normal dark-grey-text">
                  DR. JULIUS OYEDEMI is one of Nigeria’s youngest, brightest,
                  innovative and highly versatile real estate experts. He
                  oversees one of the fastest growing affiliates of the PWAN
                  Group (Africa’s foremost Real Estate & Network Marketing
                  Company) – PWAN PLUS, as the Chief Executive Officer and
                  Managing Director. He also sits as a Director on the Board of
                  Folkland Property Development Company Ltd- the construction
                  arm of the PWAN Group.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
