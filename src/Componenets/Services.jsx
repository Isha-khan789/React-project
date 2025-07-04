import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import serviceImg1 from "../assets/service1.webp";
import serviceImg2 from "../assets/service2.webp";
import serviceImg3 from "../assets/service3.webp";
import serviceImg4 from "../assets/service4.webp";

const Services = () => {
  return (
    <div id="services" className="bg-[#f7f8fc]">
      <div className="pt-28 px-4 container mx-auto">
        <div className="text-center space-x-5">
          <h2 className="text-4xl font-bold font-secondary text-herobg">
            What can we do together
          </h2>
          <p className="md:w-1/2 mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
            reiciendis facere doloremque unde quia velit inventore itaque, error
            nisi cupiditate veritatis accusantium natus nam nesciunt mollitia
            architecto nostrum saepe et.
          </p>
        </div>
        <div className="py-12 md:w-4/5 mx-auto">
          <Tabs>
            <TabList className="flex flex-wrap justify-between items-center md:gap-8">
              <Tab>Couple Counselling</Tab>
              <Tab>Parenting Skills</Tab>
              <Tab>Feeling stuck</Tab>
              <Tab>Self Confidence</Tab>
            </TabList>

            <TabPanel>
              <div className=" flex flex-col md:flex-row gap-8 mt-8">
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h2 className="text-3xl font-semibold text-primary mb-4">
                    Couple Counselling
                  </h2>
                  <p className="mb-8">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nesciunt ipsam repellendus porro at non cum, repudiandae
                    iste eveniet fugit consequuntur ab deserunt magni odit
                    molestiae a explicabo assumenda dolores perspiciatis?
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li> Understanding relationship Dynamics</li>
                    <li>Understanding relationship Dynamics</li>
                    <li>Understanding relationship Dynamics</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={serviceImg1}
                    className="w-full h-auto rounded-2xl object-cover"
                    alt=""
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className=" flex flex-col md:flex-row gap-8 mt-8">
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h2 className="text-3xl font-semibold text-primary mb-4">
                    Parenting Skills
                  </h2>
                  <p className="mb-8">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nesciunt ipsam repellendus porro at non cum, repudiandae
                    iste eveniet fugit consequuntur ab deserunt magni odit
                    molestiae a explicabo assumenda dolores perspiciatis?
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li> Understanding relationship Dynamics</li>
                    <li>Understanding relationship Dynamics</li>
                    <li>Understanding relationship Dynamics</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={serviceImg2}
                    className="w-full h-auto rounded-2xl object-cover md:h[446px]"
                    alt=""
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className=" flex flex-col md:flex-row gap-8 mt-8">
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h2 className="text-3xl font-semibold text-primary mb-4">
                    Feeling stuck
                  </h2>
                  <p className="mb-8">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nesciunt ipsam repellendus porro at non cum, repudiandae
                    iste eveniet fugit consequuntur ab deserunt magni odit
                    molestiae a explicabo assumenda dolores perspiciatis?
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li> Understanding relationship Dynamics</li>
                    <li>Understanding relationship Dynamics</li>
                    <li>Understanding relationship Dynamics</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={serviceImg3}
                    className="w-full h-auto rounded-2xl object-cover"
                    alt=""
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className=" flex flex-col md:flex-row gap-8 mt-8">
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary">
                  <h2 className="text-3xl font-semibold text-primary mb-4">
                    Self Confidence
                  </h2>
                  <p className="mb-8">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nesciunt ipsam repellendus porro at non cum, repudiandae
                    iste eveniet fugit consequuntur ab deserunt magni odit
                    molestiae a explicabo assumenda dolores perspiciatis?
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li> Understanding relationship Dynamics</li>
                    <li>Understanding relationship Dynamics</li>
                    <li>Understanding relationship Dynamics</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={serviceImg4}
                    className="w-full h-auto rounded-2xl object-cover"
                    alt=""
                  />
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Services;
