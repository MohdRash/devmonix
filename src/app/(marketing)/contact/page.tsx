import React from 'react';
import MaxWidthWrapper from '@/components/global/max-width-wrapper';
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Particles from "@/components/ui/particles";

const ContactPage = () => {
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
            🎉 <span className="mx-2">Connect With Us</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <PageHeaderHeading>Get in Touch with DEVMONIX</PageHeaderHeading>
          <PageHeaderDescription>
            Have a project in mind or a question for our team? We love to hear from you. Fill out the form below or reach out to us directly.
          </PageHeaderDescription>
          <Button asChild>
            <Link href="mailto:devmonixtechnologies@gmail.com">
              Email Us
            </Link>
          </Button>
        </PageHeader>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Information</h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Feel free to reach out to us through any of the following channels:
                </p>
                <ul className="mt-4 space-y-4 text-muted-foreground md:text-xl">
                  <li>
                    <span className="font-semibold text-foreground">Email:</span> devmonixtechnologies@gmail.com
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Phone:</span> +1 (555) 123-4567
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Address:</span> 123 Tech Lane, Innovation City, TX 78701
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Send Us a Message</h2>
                <form className="mt-4 space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your Name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@example.com" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Subject of your message" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message here" rows={5} />
                  </div>
                  <Button type="submit">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </div>
  );
};

export default ContactPage;