'use client';
import React from 'react';
import MaxWidthWrapper from '@/components/global/max-width-wrapper';
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Particles from "@/components/ui/particles";

const ServicesPage = () => {
  return (
    <MaxWidthWrapper>
      <PageHeader>
        <Link
          href=""
          target="_blank"
          className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
        >
          🎉 <span className="mx-2">Explore Our Services</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
        <PageHeaderHeading>Our Comprehensive Software Services</PageHeaderHeading>
        <PageHeaderDescription>
          At DEVMONIX, we offer a wide range of software development services designed to meet the unique needs of your business. From custom application development to robust web solutions and intuitive mobile apps, our expertise ensures your vision becomes a reality.
        </PageHeaderDescription>
        <Button asChild>
          <Link href="/contact">
            Get a Quote
          </Link>
        </Button>
      </PageHeader>

      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Custom Software Development</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                We build tailor-made software solutions that perfectly align with your business processes and objectives. Whether you need a complex enterprise system or a specialized tool, our team delivers scalable and efficient applications.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Web Application Development</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                From dynamic e-commerce platforms to interactive web portals, we create high-performance and secure web applications using the latest frameworks and technologies. Our focus is on delivering exceptional user experiences and robust backend functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32 bg-transparent">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mobile App Development</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Reach your customers on the go with our intuitive and feature-rich mobile applications for iOS and Android. We design and develop native and cross-platform apps that provide seamless performance and engaging user interfaces.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Cloud Solutions & Consulting</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Leverage the power of the cloud with our expert consulting and development services. We help you design, deploy, and manage scalable cloud infrastructures, ensuring optimal performance, security, and cost-efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">UI/UX Design</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Our design team crafts stunning and user-friendly interfaces that enhance user engagement and satisfaction. We focus on creating intuitive experiences that are both aesthetically pleasing and highly functional.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Maintenance & Support</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                We provide ongoing maintenance and support services to ensure your software remains up-to-date, secure, and performs optimally. Our team is always ready to assist with any issues or enhancements you may need.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="overflow-x-hidden scrollbar-hide size-full">
      
          <Particles
              className="absolute inset-0 -z-10"
              quantity={100}
              ease={80}
              size={0.5}
              staticity={30}
              color="#ffffff"
          />
          </div>
          {/* Hero Section */}
    </MaxWidthWrapper>
  );
};

export default ServicesPage;