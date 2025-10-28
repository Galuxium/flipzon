// pages/index.tsx

import React from 'react';

interface FeatureProps {
  title: string;
  description: string;
}

const Feature = ({ title, description }: FeatureProps) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

interface TestimonialProps {
  name: string;
  title: string;
  quote: string;
}

const Testimonial = ({ name, title, quote }: TestimonialProps) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6">
      <p className="text-gray-600">{quote}</p>
      <div className="mt-4">
        <h4 className="text-lg font-bold text-gray-800">{name}</h4>
        <p className="text-gray-600">{title}</p>
      </div>
    </div>
  );
};

interface PricingPlanProps {
  name: string;
  price: string;
  features: string[];
}

const PricingPlan = ({ name, price, features }: PricingPlanProps) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg mt-6 text-center">
      <h4 className="text-2xl font-bold text-gray-800">{name}</h4>
      <p className="text-4xl font-bold text-gray-800 mt-2">{price}</p>
      <ul className="list-inside space-y-2 mt-6">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-600">
            {feature}
          </li>
        ))}
      </ul>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-6 hover:bg-blue-600">
        Buy Now
      </button>
    </div>
  );
};

const Home = () => {
  const features = [
    {
      title: 'Easy to Use',
      description:
        'Our platform is designed to be user-friendly, making it easy for you to manage your online store.',
    },
    {
      title: 'Powerful Features',
      description:
        'Our ecommerce store comes with powerful features to help you grow your business.',
    },
    {
      title: '24/7 Support',
      description:
        'Our dedicated support team is always available to help you with any issues you may have.',
    },
  ];

  const testimonials = [
    {
      name: 'John Doe',
      title: 'CEO, Acme Inc.',
      quote:
        'This ecommerce store has helped us increase our sales by 300%. I highly recommend it!',
    },
    {
      name: 'Jane Smith',
      title: 'Founder, Jane LLC.',
      quote:
        'I love how easy it is to use this platform. It has made managing my online store a breeze.',
    },
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$9.99/month',
      features: [
        'Unlimited products',
        'Up to 100 orders per month',
        'Basic reporting',
        'Email support',
      ],
    },
    {
      name: 'Pro',
      price: '$29.99/month',
      features: [
        'Unlimited products',
        'Up to 500 orders per month',
        'Advanced reporting',
        'Priority email support',
        'Live chat support',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Contact Us',
      features: [
        'Unlimited products',
        'Unlimited orders',
        'Advanced reporting',
        'Dedicated account manager',
        'Phone support',
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="hero">
        <h1 className="text-5xl font-bold text-gray-800">
          The Best Ecommerce Store for Your Business
        </h1>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-6 hover:bg-blue-600">
          Get Started
        </button>
      </div>
      <div className="features mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
      <div className="testimonials mt-12">
        <h2 className="text-4xl font-bold text-gray-800">
          What Our Customers Are Saying
        </h2>
        <div className="testimonial-cards mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
      <div className="pricing mt-12">
        <h2 className="text-4xl font-bold text-gray-800">
          Choose the Right Plan for Your Business
        </h2>
        <div className="pricing-plans mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <PricingPlan key={index} {...plan} />
          ))}
        </div>
      </div>
      <div className="cta mt-12">
        <h2 className="text-4xl font-bold text-gray-800">
          Ready to Get Started?
        </h2>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-6 hover:bg-blue-600">
          Sign Up Now
        </button>
      </div>
    </div>
  );
};

export default Home;