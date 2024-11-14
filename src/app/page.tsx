import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';
import { PricingSection } from '@/features/pricing/components/pricing-section';

export default async function HomePage() {
  return (
    <div className='flex flex-col gap-16 pb-16 lg:gap-32 lg:pb-32'>
      <HeroSection />
      <ExamplesSection />
      <PricingSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className='relative overflow-hidden pt-16 lg:overflow-visible lg:pt-24'>
      <Container className='relative'>
        <div className='mx-auto flex max-w-[980px] flex-col items-center gap-8 text-center'>
          <h1 className='text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]'>
            Your Compelling Hero Title
            <span className='bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent'>
              {' '}
              Goes Here
            </span>
          </h1>
          
          <p className='text-lg text-muted-foreground sm:text-xl'>
            A clear and concise description of your product or service. Make it compelling
            and focused on the value proposition.
          </p>

          <div className='flex flex-col gap-4 sm:flex-row sm:gap-6'>
            <Button size='lg' asChild>
              <Link href='/get-started'>
                Get Started <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>
            <Button size='lg' variant='outline'>
              Learn More
            </Button>
          </div>

          <div className='flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground'>
            {['Feature One', 'Feature Two', 'Feature Three'].map((feature) => (
              <div key={feature} className='flex items-center gap-2'>
                <CheckCircle2 className='h-4 w-4 text-primary' />
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div className='mt-16 flex justify-center'>
          <div className='relative aspect-[16/9] w-full max-w-[1200px] overflow-hidden rounded-lg border bg-muted/50 shadow-xl'>
            <Image
              src='/path-to-your-hero-image.png'
              alt='Product preview'
              fill
              className='object-cover'
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function ExamplesSection() {
  return (
    <section className='relative'>
      <Container>
        <div className='mx-auto flex max-w-[980px] flex-col items-center gap-8 text-center'>
          <h2 className='text-3xl font-bold leading-tight tracking-tighter md:text-4xl'>
            See it in Action
          </h2>
          
          <p className='text-lg text-muted-foreground'>
            Showcase your product's key features and benefits through examples.
          </p>

          <div className='mt-8 grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {[1, 2, 3].map((example) => (
              <div
                key={example}
                className='group relative overflow-hidden rounded-lg border bg-card p-6 transition-colors hover:bg-accent'
              >
                <div className='flex h-full flex-col gap-4'>
                  <div className='aspect-video w-full overflow-hidden rounded-lg bg-muted'>
                    <Image
                      src={`/path-to-example-${example}.png`}
                      alt={`Example ${example}`}
                      width={400}
                      height={225}
                      className='object-cover transition-transform duration-300 group-hover:scale-105'
                    />
                  </div>
                  <h3 className='text-xl font-semibold'>Example {example}</h3>
                  <p className='text-sm text-muted-foreground'>
                    Brief description of this example and how it benefits users.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
