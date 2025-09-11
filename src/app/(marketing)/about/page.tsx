import React from 'react';
import MaxWidthWrapper from '@/components/global/max-width-wrapper';
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Particles from "@/components/ui/particles";

const AboutUsPage = () => {
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
            🎉 <span className="mx-2">Introducing DEVMONIX</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <PageHeaderHeading>About DEVMONIX</PageHeaderHeading>
          <PageHeaderDescription>
            At DEVMONIX, we are passionate about crafting innovative software solutions that empower businesses and individuals to thrive in the digital age. With a focus on cutting-edge technologies and a commitment to excellence, we deliver bespoke software development, robust web applications, and intuitive mobile experiences.
          </PageHeaderDescription>
          <Button asChild>
            <Link href="/contact">
              Contact Us
            </Link>
          </Button>
        </PageHeader>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission</h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Our mission is to transform complex challenges into elegant, user-friendly software solutions. We believe in the power of technology to simplify, connect, and innovate, and we are dedicated to helping our clients achieve their goals through exceptional software.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Values</h2>
                <ul className="mt-4 space-y-4 text-muted-foreground md:text-xl">
                  <li>
                    <span className="font-semibold text-foreground">Innovation:</span> We constantly explore new technologies and methodologies to deliver forward-thinking solutions.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Quality:</span> We are committed to delivering high-quality, reliable, and scalable software.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Collaboration:</span> We work closely with our clients, fostering a partnership approach to achieve shared success.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Integrity:</span> We operate with transparency, honesty, and a strong ethical compass.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-muted animate-image-glowring-1 bg-transparent">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Team</h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Our team comprises experienced software engineers, designers, and project managers who are passionate about technology and dedicated to delivering exceptional results. We foster a collaborative environment that encourages creativity, continuous learning, and mutual support.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-4xl font-bold">
                      JD
                    </div>
                    <h3 className="mt-4 text-xl font-semibold">John Doe</h3>
                    <p className="text-muted-foreground">CEO</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-4xl font-bold">
                      JS
                    </div>
                    <h3 className="mt-4 text-xl font-semibold">Jane Smith</h3>
                    <p className="text-muted-foreground">Lead Developer</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-4xl font-bold">
                      AM
                    </div>
                    <h3 className="mt-4 text-xl font-semibold">Alex Miller</h3>
                    <p className="text-muted-foreground">UI/UX Designer</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Us?</h2>
                <ul className="mt-4 space-y-4 text-muted-foreground md:text-xl">
                  <li>
                    <span className="font-semibold text-foreground">Expertise:</span> Deep knowledge in various programming languages, frameworks, and platforms.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Custom Solutions:</span> Tailored software that perfectly aligns with your business needs.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Reliability:</span> A proven track record of delivering projects on time and within budget.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Support:</span> Comprehensive post-development support and maintenance.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </div>
  );
};

export default AboutUsPage;