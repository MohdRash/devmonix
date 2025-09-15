'use client';
import dynamic from 'next/dynamic';
import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { BentoCard, BentoGrid, CARDS } from "@/components/ui/bento-grid";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import MagicCard from "@/components/ui/magic-card";
import { COMPANIES, PROCESS } from "@/utils";
import { REVIEWS } from "@/utils/constants/misc";
import { ArrowRightIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Particles from "@/components/ui/particles";

// Dynamic imports for better performance
const KubernatesHomePage = dynamic(() => import('./components/KubernatesHomePage'), {
    ssr: false,
    loading: () => <div className="h-96 bg-gradient-to-b from-purple-500 via-purple-600 to-purple-800 animate-pulse" />
});

const HomePage = async () => {

    return (
        <div className="overflow-x-hidden scrollbar-hide size-full">
            <Particles
                className="absolute inset-0 -z-10"
                quantity={100}
                ease={80}
                size={0.5}
                staticity={30}
                color="#ffffff"
            />
            {/* Hero Section */}
            <MaxWidthWrapper>
                <div className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-t from-background">
                    <AnimationContainer className="flex flex-col items-center justify-center w-full text-center">
                        <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                            <span>
                                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                            </span>
                            <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
                            <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/20"></span>
                            <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1">
                                ✨ We will create the best solution for you
                                
                            </span>
                        </button>
                        <h1 className="text-foreground text-center py-6 text-5xl font-medium tracking-normal text-balance sm:text-6xl md:text-7xl lg:text-8xl !leading-[1.15] w-full font-heading">
                            Innovative Softwares with <span className="text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text inline-bloc">
                                Precision
                            </span>
                        </h1>
                        <p className="mb-12 text-lg tracking-tight text-muted-foreground md:text-xl text-balance">
                            Crafting cutting-edge software solutions tailored to your needs.
                            <br className="hidden md:block" />
                            <span className="hidden md:block">From concept to deployment, we build the future, today.</span>
                        </p>
                        <div className="flex items-center justify-center whitespace-nowrap gap-4 z-50">
                            <Button asChild>
                                <Link href="/contact" className="flex items-center">
                                    Get a Free Consultation
                                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                        </div>
                        
                    </AnimationContainer>

                    <AnimationContainer delay={0.2} className="relative pt-20 pb-20 md:py-32 px-2 bg-transparent w-full">
                        <div className="absolute md:top-[10%] left-1/2 gradient w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[5rem] animate-image-glow"></div>
                        <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
                            <BorderBeam
                                size={250}
                                duration={12}
                                delay={9}
                            />
                            <Image
                                src="/assets/dashboard-dark.svg"
                                alt="Dashboard"
                                width={1200}
                                height={1200}
                                quality={100}
                                style={{ opacity: 0.6 }}
                                className="rounded-md lg:rounded-xl bg-foreground/10 ring-1 ring-border"
                            />
                            <div className="absolute -bottom-4 inset-x-0 w-full h-1/2 bg-gradient-to-t from-background z-40"></div>
                            <div className="absolute bottom-0 md:-bottom-8 inset-x-0 w-full h-1/4 bg-gradient-to-t from-background z-50"></div>
                        </div>
                    </AnimationContainer>
                </div>
            </MaxWidthWrapper >

            {/* Companies Section
            <MaxWidthWrapper>
                <AnimationContainer delay={0.4}>
                    <div className="py-14">
                        <div className="mx-auto px-4 md:px-8">
                            <h2 className="text-center text-sm font-medium font-heading text-neutral-400 uppercase">
                                Trusted by the best in the industry
                            </h2>
                            <div className="mt-8">
                                <ul className="flex flex-wrap items-center gap-x-6 gap-y-6 md:gap-x-16 justify-center">
                                    {COMPANIES.map((company) => (
                                        <li key={company.name}>
                                            <Image
                                                src={company.logo}
                                                alt={company.name}
                                                width={80}
                                                height={80}
                                                quality={100}
                                                className="w-28 h-auto"
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper> */}

            {/* Features Section */}
            <MaxWidthWrapper className="pt-10">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col w-full items-center lg:items-center justify-center py-8">
                        <MagicBadge title="Features" />
                        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            Innovate with Our Software Solutions
                        </h2>
                        <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                            We provide comprehensive software development services, from custom applications to robust enterprise solutions.
                        </p>
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.2}>
                    <BentoGrid className="py-8">
                        {CARDS.map((feature, idx) => (
                            <BentoCard key={idx} {...feature} />
                        ))}
                    </BentoGrid>
                </AnimationContainer>
            </MaxWidthWrapper>

            {/* Process Section */}
            <MaxWidthWrapper className="py-10">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
                        <MagicBadge title="The Process" />
                        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            Our Streamlined Development Process
                        </h2>
                        <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                            We follow a clear and efficient process to deliver high-quality software solutions.
                        </p>
                       
                    </div>
                </AnimationContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full py-8 gap-4 md:gap-8">
                    {PROCESS.map((process, id) => (
                        <AnimationContainer delay={0.2 * id} key={id}>
                            <MagicCard className="group md:py-8">
                                <div className="flex flex-col items-start justify-center w-full">
                                    <process.icon strokeWidth={1.5} className="w-10 h-10 text-foreground" />
                                    <div className="flex flex-col relative items-start">
                                        <span className="absolute -top-6 right-0 border-2 border-border text-foreground font-medium text-2xl rounded-full w-12 h-12 flex items-center justify-center pt-0.5">
                                            {id + 1}
                                        </span>
                                        <h3 className="text-base mt-6 font-medium text-foreground">
                                            {process.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            {process.description}
                                        </p>
                                    </div>
                                </div>
                            </MagicCard>
                        </AnimationContainer>
                    ))}
                </div>
            </MaxWidthWrapper>

            {/* Reviews Section */}
            <MaxWidthWrapper className="py-10">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
                        <MagicBadge title="Our Customers" />
                        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            What Our Clients Say About Our Solutions
                        </h2>
                        <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                            Hear from businesses that have transformed with our software development expertise.
                        </p>
                       
                    </div>
                </AnimationContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 place-items-start gap-4 md:gap-8 py-10">
                    <div className="flex flex-row-3 items-start h-min gap-6">
                        {REVIEWS.slice(0, 3).map((review, index) => (
                            <AnimationContainer delay={0.2 * index} key={index}>
                                <MagicCard key={index} className="md:p-0">
                                    <Card className="flex flex-col w-full border-none h-min">
                                        <CardHeader className="space-y-0">
                                            <CardTitle className="text-lg font-medium text-muted-foreground">
                                                {review.name}
                                            </CardTitle>
                                            <CardDescription>
                                                {review.username}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4 pb-4">
                                            <p className="text-muted-foreground">
                                                {review.review}
                                            </p>
                                        </CardContent>
                                        <CardFooter className="w-full space-x-1 mt-auto">
                                            {Array.from({ length: review.rating }, (_, i) => (
                                                <StarIcon key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                            ))}
                                        </CardFooter>
                                    </Card>
                                </MagicCard>
                            </AnimationContainer>
                        ))}
                    </div>
                    <div className="flex flex-col items-start h-min gap-6">
                        {REVIEWS.slice(3, 6).map((review, index) => (
                            <AnimationContainer delay={0.2 * index} key={index}>
                                <MagicCard key={index} className="md:p-0">
                                    <Card className="flex flex-col w-full border-none h-min">
                                        <CardHeader className="space-y-0">
                                            <CardTitle className="text-lg font-medium text-muted-foreground">
                                                {review.name}
                                            </CardTitle>
                                            <CardDescription>
                                                {review.username}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4 pb-4">
                                            <p className="text-muted-foreground">
                                                {review.review}
                                            </p>
                                        </CardContent>
                                        <CardFooter className="w-full space-x-1 mt-auto">
                                            {Array.from({ length: review.rating }, (_, i) => (
                                                <StarIcon key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                            ))}
                                        </CardFooter>
                                    </Card>
                                </MagicCard>
                            </AnimationContainer>
                        ))}
                    </div>
                    <div className="flex flex-col items-start h-min gap-6">
                        {REVIEWS.slice(6, 9).map((review, index) => (
                            <AnimationContainer delay={0.2 * index} key={index}>
                                <MagicCard key={index} className="md:p-0">
                                    <Card className="flex flex-col w-full border-none h-min">
                                        <CardHeader className="space-y-0">
                                            <CardTitle className="text-lg font-medium text-muted-foreground">
                                                {review.name}
                                            </CardTitle>
                                            <CardDescription>
                                                {review.username}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4 pb-4">
                                            <p className="text-muted-foreground">
                                                {review.review}
                                            </p>
                                        </CardContent>
                                        <CardFooter className="w-full space-x-1 mt-auto">
                                            {Array.from({ length: review.rating }, (_, i) => (
                                                <StarIcon key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                            ))}
                                        </CardFooter>
                                    </Card>
                                </MagicCard>
                            </AnimationContainer>
                        ))}
                    </div>
                </div>
            </MaxWidthWrapper>

            {/* Technologies Section */}
            <MaxWidthWrapper className="py-10">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
                        <MagicBadge title="Technologies" />
                        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            Technologies We Specialize In
                        </h2>
                        <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                            We leverage a diverse stack of cutting-edge technologies to build robust and scalable solutions.
                        </p>
                    </div>
                </AnimationContainer>
                <div className="flex flex-wrap justify-center gap-4 py-8">
                    
                    <Image className="border-2 border-border" style={{borderRadius: 10, opacity: 0.8, height:40}} src="/icons/technologies/threejs.svg" alt="Three.js" width={100} height={25} />
                    <Image className="border-2 border-border" style={{borderRadius: 10, opacity: 0.8, height:40}} src="/icons/technologies/typescrript.svg" alt="TypeScript" width={100} height={25} />
                    <Image className="border-2 border-border" style={{borderRadius: 10, opacity: 0.8, height:40}} src="/icons/technologies/react.svg" alt="React" width={100} height={25} />
                    
                    <Image className="border-2 border-border" style={{borderRadius: 10, opacity: 0.8, height:40}} src="/icons/technologies/nodejs.svg" alt="Node.js" width={100} height={25} />
                    <Image className="border-2 border-border" style={{borderRadius: 10, opacity: 0.8, height:40}} src="/icons/technologies/python.svg" alt="Python" width={100} height={25} />
                    <Image className="border-2 border-border" style={{borderRadius: 10, opacity: 0.8, height:40}} src="/icons/technologies/nextjs.svg" alt="Next.js" width={100} height={25} />
                    <Image className="border-2 border-border" style={{borderRadius: 10, opacity: 0.8, height:40}} src="/icons/technologies/docker.svg" alt="Docker" width={100} height={25} /> 
                    <Image className="border-2 border-border" style={{borderRadius: 10, opacity: 0.8, height:40}} src="/icons/technologies/aws.svg" alt="AWS" width={100} height={25} />
                    <Image className="border-2 border-border" style={{borderRadius: 10, opacity: 0.8, height:40}} src="/icons/technologies/kubernetes.svg" alt="Kubernetes" width={100} height={25} />
                    <Image className="border-2 border-border" style={{borderRadius: 10, opacity: 0.8, height:40}} src="/icons/technologies/azure.svg" alt="Azure" width={100} height={25} />
                    <Image className="border-2 border-border" style={{borderRadius: 10, opacity: 0.8, height:40}} src="/icons/technologies/anaconda.svg" alt="Anaconda" width={100} height={25} />
                    <Image className="border-2 border-border" style={{borderRadius: 10, opacity: 0.8, height:40}} src="/icons/technologies/angular.svg" alt="Angular" width={100} height={25} />
                    <Image className="border-2 border-border" style={{borderRadius: 10, opacity: 0.8, height:40}} src="/icons/technologies/bootstrap.svg" alt="Boostrap" width={100} height={25} />
                    <Image className="border-2 border-border" style={{borderRadius: 10, opacity: 0.8, height:40}} src="/icons/technologies/cloudflare.svg" alt="Cloudflare" width={100} height={25} />
                    <Image className="border-2 border-border" style={{borderRadius: 10, opacity: 0.8, height:40}} src="/icons/technologies/contaxtapi.svg" alt="Contaxtapi" width={100} height={25} />
                    <Image className="border-2 border-border" style={{borderRadius: 10, opacity: 0.8, height:40}} src="/icons/technologies/docker.svg" alt="Docker" width={100} height={25} />
                    <Image className="border-2 border-border" style={{borderRadius: 10, opacity: 0.8, height:40}} src="/icons/technologies/electronjs.svg" alt="Electron.js" width={100} height={25} />
                    <Image className="border-2 border-border" style={{borderRadius: 10, opacity: 0.8, height:40}} src="/icons/technologies/express.svg" alt="Express.js" width={100} height={25} />
                    <Image className="border-2 border-border" style={{borderRadius: 10, opacity: 0.8, height:40}} src="/icons/technologies/firebase.svg" alt="Firebase" width={100} height={25} />
                    <Image className="border-2 border-border" style={{borderRadius: 10, opacity: 0.8, height:40}} src="/icons/technologies/haandlebbars.svg" alt="Handlebars" width={100} height={25} />
                    <Image className="border-2 border-border" style={{borderRadius: 10, opacity: 0.8, height:40}} src="/icons/technologies/javascript.svg" alt="JavaScript" width={100} height={25} />
                    <Image className="border-2 border-border" style={{borderRadius: 10, opacity: 0.8, height:40}} src="/icons/technologies/prisma.svg" alt="Prisma" width={100} height={25} />
                    <Image className="border-2 border-border" style={{borderRadius: 10, opacity: 0.8, height:40}} src="/icons/technologies/solidity.svg" alt="Solidity" width={100} height={25} />
                    <Image className="border-2 border-border" style={{borderRadius: 10, opacity: 0.8, height:40}} src="/icons/technologies/svelte.svg" alt="Svelte" width={100} height={25} />
                    <Image className="border-2 border-border" style={{borderRadius: 10, opacity: 0.8, height:40}} src="/icons/technologies/vite.svg" alt="Vite" width={100} height={25} />
                    <Image className="border-2 border-border" style={{borderRadius: 10, opacity: 0.8, height:40}} src="/icons/technologies/vue.svg" alt="Vue.js" width={100} height={25} />



                </div>
           
                
            </MaxWidthWrapper>
            <AnimationContainer delay={0.2} className="relative pt-20 pb-20 md:py-32 px-2 bg-transparent w-full">
                        <div className="absolute md:top-[10%] left-1/2 gradient w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[5rem] animate-image-glow"></div>
                        <div className="-m-2 rounded-xl p-0.5 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
                            <BorderBeam
                                size={250}
                                duration={12}
                                delay={9}
                            />
                            <KubernatesHomePage />
                            <div className="absolute -bottom-4 inset-x-0 w-full h-1/2 bg-gradient-to-t from-background z-40"></div>
                            <div className="absolute bottom-0 md:-bottom-8 inset-x-0 w-full h-1/4 bg-gradient-to-t from-background z-50"></div>
                        </div>
                    </AnimationContainer>


            {/* <KubernatesHomePage /> */}

            {/* CTA Section */}
            <MaxWidthWrapper className="mt-20 max-w-[100vw] overflow-x-hidden scrollbar-hide">
                <AnimationContainer delay={0.1}>
                    <LampContainer>
                        <div className="flex flex-col items-center justify-center relative w-full text-center">
                            <h2 className="bg-gradient-to-b from-neutral-200 to-neutral-400 py-4 bg-clip-text text-center text-4xl md:text-7xl !leading-[1.15] font-medium font-heading tracking-tight text-transparent mt-8">
                                Ready to Transform Your Business with Software?
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                                Partner with us to build innovative, scalable, and efficient software solutions that drive growth and success.
                            </p>
                            <div className="mt-6">
                                <Button asChild>
                                    <Link href="/contact" className="flex items-center">
                                        Start Your Project Today
                                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </LampContainer>
                </AnimationContainer>
            </MaxWidthWrapper>

        </div>
    );
};

export default HomePage;