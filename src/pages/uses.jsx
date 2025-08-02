import Head from 'next/head';

import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { SimpleLayout } from '@/components/SimpleLayout';
import { ExternalLinkIcon } from '@/components/Icons';
import { TOOLS_AND_TECH } from '@/lib/constants';

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  );
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
        {href && <ExternalLinkIcon className="ml-2 inline h-4 w-4" />}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Jagdish Sutar</title>
        <meta
          name="description"
          content="Tech Stack & Tools I Use "
        />
      </Head>
      <SimpleLayout
        title="Tech Stack & Tools I Use "
        intro="I thoughtfully curated list of the technologies, tools, and platforms I use daily to design, develop, and deploy software. From code editors to cloud platforms, these are the essentials that power my productivity and creativity."
      >
        <div className="space-y-20">
          {TOOLS_AND_TECH.map((section) => (
            <ToolsSection key={`section${section?.id}`} title={section.title}>
              {section.technologies.map((tool) => (
                <Tool
                  title={tool.title}
                  key={`tool${tool.id}`}
                  href={tool.href}
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: tool.description,
                    }}
                  />
                </Tool>
              ))}
            </ToolsSection>
          ))}
        </div>
      </SimpleLayout>
    </>
  );
}
