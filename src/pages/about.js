import React from 'react';
import { Typography, Card, CardBody, Avatar, Tooltip, Button } from '@material-tailwind/react';
import { FaCheckCircle } from 'react-icons/fa';

import { DefaultSidebar } from './sidebar';

const AboutUsPage = () => {
  const features = [
    'Powerful analytics and reporting tools',
    'Seamless team collaboration',
    'Robust security and compliance',
    'Scalable and reliable infrastructure',
    'Dedicated customer support',
  ];

  return (
    <div className='flex'>
         <DefaultSidebar />
    <div className="bg-base-200 py-20">
   
      <div className="container mx-auto px-4">
        <Typography variant="h2" className="mb-8 text-center">
          About Our SaaS Solution
        </Typography>
        <Typography variant="lead" className="mb-12 text-center">
          Learn how our software can help your business grow and succeed.
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Card className="bg-base-100 shadow-lg">
              <CardBody>
                <Typography variant="h4" className="mb-4">
                  Our Mission
                </Typography>
                <Typography variant="paragraph" className="mb-6">
                  At [Company Name], our mission is to provide innovative and powerful software solutions that empower businesses to streamline their operations, enhance productivity, and drive growth. We are committed to delivering exceptional value through continuous innovation and unwavering customer support.
                </Typography>
                <Button color="purple" ripple="light">
                  Learn More
                </Button>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="bg-base-100 shadow-lg">
              <CardBody>
                <Typography variant="h4" className="mb-4">
                  Key Features
                </Typography>
                <ul className="list-none">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center mb-3">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <Typography variant="paragraph">{feature}</Typography>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUsPage;