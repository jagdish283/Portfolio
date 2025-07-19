import Image from 'next/future/image';
import Head from 'next/head';
import Link from 'next/link';

import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import {
  TwitterIcon,
  GitHubIcon,
  LinkedInIcon,
  StackOverflowIcon,
  BriefcaseIcon,
  EducationIcon,
  CertificateIcon,
} from '@/components/Icons';
import { generateRssFeed } from '@/lib/generateRssFeed';
import { getAllBlogs } from '@/lib/getAllBlogs';
import { formatDate } from '@/lib/formatDate';
import { CERTIFICATIONS, WORK } from '@/lib/constants';
import clsx from 'clsx';
import WinkImage from '@/images/photos/wink.png';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Blog({ blog }) {
  return (
    <Card as="blog">
      <Card.Title href={`/blogs/${blog.slug}`}>{blog.title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={blog.date} decorate>
        {formatDate(blog.date)}
      </Card.Eyebrow>
      <Card.Description>{blog.description}</Card.Description>
      <Card.Cta>Read blog</Card.Cta>
    </Card>
  );
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" target="_blank" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

function ResumeListItem({ role }) {
  return (
    <li>
      <Link
        href={role?.href || '#'}
        target={role?.href ? '_blank' : undefined}
        className={clsx(
          'flex gap-4',
          role?.href ? 'cursor-pointer' : 'cursor-auto'
        )}
      >
        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          {role.logo && (
            <Image
              src={role.logo}
              alt=""
              className="h-9 w-9 rounded-full"
              unoptimized
            />
          )}
        </div>
        <dl className="flex flex-auto flex-wrap gap-x-2">
          <dt className="sr-only">Company</dt>
          <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {role.company}
          </dd>
          <dt className="sr-only">Role</dt>
          <dd className="text-xs text-zinc-500 dark:text-zinc-400">
            {role.title}
          </dd>
          <dt className="sr-only">Date</dt>
          <dd
            className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
            aria-label={`${role.start.label ?? role.start} until ${
              role.end.label ?? role.end
            }`}
          >
            <time dateTime={role.start.dateTime ?? role.start}>
              {role.start.label ?? role.start}
            </time>{' '}
            <span aria-hidden="true">—</span>{' '}
            <time dateTime={role.end.dateTime ?? role.end}>
              {role.end.label ?? role.end}
            </time>
          </dd>
          {role?.credential && (
            <>
              <br />
              <dt className="sr-only">Credential</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                Credential ID: {role.credential}
              </dd>
            </>
          )}
        </dl>
      </Link>
    </li>
  );
}

function Resume({ resume, title, showDownload }) {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        {title === 'Work' ? (
          <BriefcaseIcon className="h-6 w-6 flex-none" />
        ) : (
          <CertificateIcon className="h-6 w-6 flex-none" />
        )}
        <span className="ml-3">{title}</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume?.map((role, roleIndex) => (
          <ResumeListItem key={roleIndex} role={role} />
        ))}
      </ol>
    </div>
  );
}

export default function Home({ blogs }) {
  return (
    <>
      <Head>
        <title>Jagdish Sutar</title>
        <meta name="description" content="Jagdish Sutar" />
      </Head>
      <Container className="mt-9">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I&apos;m a Cloud Engineer and Software Developer with a passion for
            data analytics, AI, and building innovative solutions as a budding
            entrepreneur.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Hello! I&apos;m Jagdish — a self-motivated and creative tech enthusiast
            from Bangalore, with a growing expertise in data analytics, cloud
            engineering, and AI. With a solid foundation in software development
            and a keen interest in solving real-world problems through
            technology, I specialize in building scalable data-driven
            applications and intelligent systems. My journey so far has been
            shaped by hands-on experience in Python, SQL, Snowflake, Power BI,
            and Informatica, along with a deep curiosity for AI, machine
            learning, and data engineering. I thrive in fast-paced,
            collaborative environments where I can learn, build, and innovate.
            Currently, I&apos;m also exploring the entrepreneurial path — turning
            ideas into impactful digital solutions that can make a difference.
            <Image
              style={{ display: 'inline', width: '20px' }}
              src={WinkImage}
              alt="wink"
            />{' '}
            I am proficient in GCP, Power BI, Github Copilot and hold
            Certifications.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/jagdish283"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/jagdish-sutar/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="/JagdishSutar_Resume.pdf" // Make sure the file is inside /public folder
              aria-label="Download Resume"
              icon={ArrowDownTrayIcon}
              download
            />
            {/* <SocialLink
                            href="https://stackoverflow.com/users/745350/somnath-pawar"
                            aria-label="Follow on Stackoverflow"
                            icon={StackOverflowIcon}
                        /> */}
          </div>
        </div>
      </Container>
      <Container className="md:mt-18 mt-16">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {blogs.map((blog) => (
              <Blog key={blog.slug} blog={blog} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume resume={CERTIFICATIONS} title="Certifications" />
            <Resume resume={WORK} showDownload title="Work" />
          </div>
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed();
  }

  return {
    props: {
      blogs: (await getAllBlogs())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  };
}
