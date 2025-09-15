import React from 'react';
import MaxWidthWrapper from '@/components/global/max-width-wrapper';
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Particles from "@/components/ui/particles";

const PortfolioPage = () => {
  return (
    <div className="overflow-x-hidden scrollbar-hide size-full relative">
      <Particles
        className="absolute inset-0 -z-10"
        quantity={100}
        ease={80}
        size={0.5}
        staticity={30}
        color="#ffffff"
      />
      <MaxWidthWrapper>
        <PageHeader>
          <Link
            href=""
            target="_blank"
            className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
          >
            🎉 <span className="mx-2">Discover Our Work</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <PageHeaderHeading>Our Diverse Portfolio</PageHeaderHeading>
          <PageHeaderDescription>
            Explore a selection of our successful projects, showcasing our expertise in various domains and technologies. Each project reflects our commitment to innovation, quality, and delivering tangible results for our clients.
          </PageHeaderDescription>
          <Button asChild>
            <Link href="/contact">
              Start Your Project
            </Link>
          </Button>
        </PageHeader>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Project Alpha: Enterprise CRM</h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Developed a comprehensive CRM system for a large enterprise, streamlining their customer management, sales, and marketing processes. Features include lead tracking, sales automation, reporting, and integration with existing systems.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Project Beta: E-commerce Platform</h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Built a scalable e-commerce platform with a custom storefront, secure payment gateway integration, inventory management, and personalized user experiences. Optimized for high traffic and seamless transactions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-transparent">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Project Gamma: Mobile Fitness App</h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Designed and developed a cross-platform mobile application for fitness enthusiasts, featuring workout tracking, personalized plans, nutrition logging, and social sharing. Integrated with wearable devices for real-time data.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Project Delta: Data Analytics Dashboard</h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Created an interactive data analytics dashboard for a marketing agency, providing real-time insights into campaign performance, customer behavior, and market trends. Utilized advanced data visualization techniques.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Project Epsilon: AI-Powered Chatbot</h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Implemented an AI-powered chatbot for customer support, capable of handling complex queries, providing instant responses, and escalating issues to human agents when necessary. Improved customer satisfaction and reduced support costs.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Project Zeta: Secure Document Management</h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Developed a secure document management system for a legal firm, ensuring data privacy, version control, and easy access to critical documents. Implemented robust encryption and access control mechanisms.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Project Omega: E-Commerce Platform</h2>

                <p className="mt-4 text-muted-foreground md:text-xl">
                  Implemented an The E-Commerce Analytics Platform is designed to provide real-time insights into customer behavior, sales trends, and inventory management for an online retail business. This project leverages the strengths of Amazon Web Services AWS, Microsoft Azure, and Google Cloud Platform GCP to create a robust, scalable, and efficient solution.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Project Tetra: DevOps Automation Pipeline</h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Developed The DevOps Automation Pipeline project aims to streamline the development, testing, and deployment processes for a web application. By implementing a continuous integration and continuous deployment CI/CD pipeline, the project enhances collaboration between development and operations teams, reduces deployment times, and improves software quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Project FishEye: 24/7 Monitoring System </h2>

                <p className="mt-4 text-muted-foreground md:text-xl">
                  The 24/7 Monitoring System project is designed to ensure the continuous availability and performance of a cloud-based infrastructure for a financial services application. This project implements a comprehensive monitoring solution that tracks system health, application performance, and security events, enabling proactive incident management and rapid response to issues.
                </p>
              </div>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </div>
  );
};

export default PortfolioPage;