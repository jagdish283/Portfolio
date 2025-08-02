import Image from 'next/future/image';
import Head from 'next/head';
import Link from 'next/link';
import clsx from 'clsx';
import { ArrowDownTrayIcon  } from '@heroicons/react/24/outline';


import { Container } from '@/components/Container';
import {
  TwitterIcon,
  StackOverflowIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
} from '@/components/Icons';
import portraitImage from '../images/avatar.png';

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-amber-600 dark:text-zinc-200 dark:hover:text-amber-600"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-amber-600" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Jagdish Sutar</title>
        <meta
          name="description"
          content="Hi, I&apos;m Jagdish Sutar — a passionate Cloud Engineer and AI enthusiast based in Bangalore, India."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 sm:rotate-0 md:rotate-3"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&apos;m Jagdish Sutar — a passionate Cloud Engineer and AI
              enthusiast based in Bangalore, India.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I&apos;ve been passionate about creating and exploring technology for
                as long as I can remember. I wrote my first program in BASIC,
                and that early curiosity led me into the world of cloud, AI, and
                data.
              </p>
              <p>
                I enjoy working on modern tech solutions that solve real-world
                problems. Outside of work, I love long drives, reading books,
                and spending quality time with friends and family. I&apos;m a social
                person who values learning and meaningful connections.
              </p>
              <p>
                Professionally, I&apos;m building my career around cloud
                technologies, data platforms, and AI-driven tools. I&apos;m certified
                in Google Cloud Platform (GCP), Power BI, and GitHub Copilot,
                and I&apos;m currently upskilling with tools like Snowflake and other
                modern data solutions.
              </p>
              <p>
                This portfolio showcases my journey, skills, and the projects
                I&apos;m proud of. Thanks for visiting — let&apos;s connect!
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://github.com/jagdish283"
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/jagdish-sutar/"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="\JagdishSutar_Resume.pdf"
                aria-label="Get My Resume"
                icon={ArrowDownTrayIcon} // You can use any appropriate icon
                className="mt-4"
                download
              >
                Get My Resume
              </SocialLink>

              <SocialLink
                href="mailto:jagadishsutar20@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                jagadishsutar20@gmail.com
              </SocialLink>
              <SocialLink
                href="tel:+919503946138"
                icon={PhoneIcon}
                className="mt-4"
              >
                (+91) 950-394-6138
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}
