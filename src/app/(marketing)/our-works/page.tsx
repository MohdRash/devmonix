"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';


const OurWorksPage = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      client: 'Fashion Retailer',
      description: 'Built a scalable e-commerce solution with custom CMS integration',
      technologies: ['Next.js', 'Node.js', 'MongoDB'],
      image: '/assets/blog1.jpg'
    },
    {
      id: 2,
      title: 'Healthcare Portal',
      client: 'Medical Group',
      description: 'Developed a secure patient portal with appointment scheduling',
      technologies: ['React', 'Firebase', 'Stripe'],
      image: '/assets/blog2.jpg'
    },
    {
      id: 3,
      title: 'Education Platform',
      client: 'Online Academy',
      description: 'Created an interactive learning management system with video courses',
      technologies: ['Vue.js', 'Laravel', 'AWS'],
      image: '/assets/blog3.jpg'
    },
    {
      id: 4,
      title: 'Mobile Banking App',
      client: 'Financial Institution',
      description: 'Developed a secure and user-friendly mobile banking application',
      technologies: ['React Native', 'Node.js', 'PostgreSQL'],
      image: '/assets/blog4.jpg'
    },
    {
      id: 5,
      title: 'AI-Powered Chatbot',
      client: 'Customer Service Provider',
      description: 'Implemented an intelligent chatbot for automated customer support',
      technologies: ['Python', 'TensorFlow', 'Flask'],
      image: '/assets/blog1.jpg'
    },
    {
      id: 6,
      title: 'Real Estate CRM',
      client: 'Property Management',
      description: 'Custom CRM solution for managing properties, leads, and client interactions',
      technologies: ['Angular', 'Django', 'MySQL'],
      image: '/assets/blog2.jpg'
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <PageHeader>
          <Link
            href=""
            target="_blank"
            className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
          >
            🎉 <span className="mx-2">Our Works</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <PageHeaderHeading>Check Out Our Amazing Projects</PageHeaderHeading>
          <PageHeaderDescription>
            Have a project in mind or a question for our team? We love to hear from you. Fill out the form below or reach out to us directly.
          </PageHeaderDescription>
        </PageHeader>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {projects.map((project) => (
          <div key={project.id} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            {project.image && <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />}
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-2">Client: {project.client}</p>
            <p className="text-gray-700 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-gray-200 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default OurWorksPage;