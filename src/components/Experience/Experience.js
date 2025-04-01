import React from 'react'
import { FaCode } from 'react-icons/fa';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

const Experience = () => {
  return (
    
    <div
      name="internships"
      className="inline border-b-4 border-gray-500 pt-10 bg-black w-full h-screen pt-50 pb-50"
    >
      
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white pb-50">
        <div className="relative text-left text-justify">
          <div className="absolute inset-0.5 bg-blue-600 rounded-lg blur-xl leading-none"></div>
          <br />
          <br />

          <VerticalTimeline lineColor="#fff">
            {/** Experience Items **/}
            {[
              {
                date: 'October 2024',
                title: 'University of Michigan – Ann Arbor',
                role: 'Research Assistant',
                details: [
                  'Focusing on Augmented and Virtual Reality technologies to aid humans in improving task efficiency under Professor Amelia Warden.',
                  'Creating objects in a Virtual environment and performing Human-Subject Experiments for different types of cues to test their reliability, thus ensuring better Human-Machine Interaction.'
                ]
              },
              {
                date: 'August 2024 to December 2024',
                title: 'Michigan Medicine',
                role: 'Operations Engineering Consultant',
                details: [
                  'Leveraged optimization to improve performance by system automation using Linear Programming integrated with MS Excel & Python and developed an Automated Tool for Staffing Optimization.',
                  'Streamlined the process of manually creating schedules to enhance efficiency and reduce delays while incorporating dynamic and real-time constraints by ensuring optimal staff utilization.'
                ]
              },
              {
                date: 'June 2023 to July 2023',
                title: 'Jawaharlal Nehru Port Authority (JNPA)',
                role: 'Project Intern',
                details: [
                  'Focusing on logistics and supply chain efficiency, developed a Tool to Optimize Storage and Retrieval using K-means clustering using Cargo data to streamline operations at Main Stores at JNPA.',
                  'Focused on Artificial Intelligence, Operations Research, and Project & Vessel Management contributing to faster processing and better decision-making in port operations.'
                ]
              },
              {
                date: 'December 2022 to January 2023',
                title: 'Bhabha Atomic Research Centre (BARC)',
                role: 'Research Intern',
                details: [
                  'Led a team concentrating on quality control in manufacturing, to develop an Automated weld Defect Identification tool using AIML.',
                  'Used X-ray Radiography to scan welds and worked on a Supervised Learning model for automated defect identification enabling more accurate and reliable quality inspections in critical processes.',
                  'Additionally, I learned about Remote Handling and Robotics for Nuclear Items, Spectroscopy, and Radiotracers.'
                ]
              },
              {
                date: 'August 2021 to September 2021',
                title: 'BMW India – Infinity Cars Private Limited',
                role: 'Automobile Technician and Service Advisor',
                details: [
                  'Diagnosed performance vehicles using AI-based Predictive Maintenance and gained hands-on experience in Automotive Maintenance & Inventory control.',
                  'Analyzed vehicle data to anticipate potential failures, enhance reliability, and minimize downtime.',
                  'Studied the Quality Standards of BMW to enhance my skills in Automotive Engineering.'
                ]
              }
            ].map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--education text-left text-justify"
                iconStyle={{ background: '#000', color: '#fff' }}
                icon={<FaCode />}
                date={experience.date}
              >
                <h2 className='text-black font-bold'>{experience.title}</h2>
                <h3 className='text-black'>{experience.role}</h3>
                <p className='text-black'>
                  <ul>
                    {experience.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Experience;
