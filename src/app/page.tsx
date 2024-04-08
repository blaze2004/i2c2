import { cn } from '@/lib/utils';
import styles from '@/components/styles/hero.module.css';
import { Button } from '@/components/ui/button';
import ShareButton from '@/components/share-button';
import About from '@/components/about-hackathon';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import Challenges from '@/components/challenges';
import Faq from '@/components/faq';
import Footer from '@/components/footer';
import { ChevronRightIcon } from '@radix-ui/react-icons';

export default function Home() {
  return (
    <main>
      <div className={cn(
        "flex justify-center items-center w-full min-h-screen",
        styles.hero
      )}>
        <div className='max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10'>

          <div className='flex justify-center'>
            <a className="inline-flex items-center gap-x-2 text-sm p-1 ps-3 rounded-full transition bg-gray-800 border border-gray-700 hover:border-gray-600 text-gray-200"
              href='https://discord.io/i2c2-hackathon'
              target='_blank'
              rel='noopener,noreferrer'
            >
              Join us on Discord
              <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full font-semibold text-sm bg-gray-700 text-gray-400">
                <ChevronRightIcon className="flex-shrink-0 size-4" />
              </span>
            </a>
          </div>

          <div className="mt-5 text-center mx-auto">
            <h1 className="block font-bold font-display text-5xl md:text-7xl lg:text-9xl">I2C2
              <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">{" "}2.0</span>
            </h1>

            <p className="mt-5 text-lg text-muted-foreground">
              Join us for the second season of I2C2 and let&apos;s make it great together.
              Ideate and propose innovative solutions for today&apos;s problems with code and compete with others to be the best.
            </p>
          </div>

          <div className="mt-8 gap-3 flex flex-col sm:flex-row justify-center">
            <Button className='bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 text-white'>
              Register Now
              <ChevronRightIcon className="flex-shrink-0 size-4 ml-2 my-4" />
            </Button>
            <ShareButton />
          </div>
        </div>
      </div>
      <About />

      <div className='min-h-screen flex flex-col items-center justify-center p-8'>
        <div>
          <h1 className='scroll-m-20 text-6xl text-center sm:text-left font-extrabold tracking-tight sm:text-7xl lg:text-9xl bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent'>Why join Us</h1>
          <HoverEffect
            className='mt-20'
            items={[
              {
                title: "Informative & Interactive Session",
                description: "",
              },
              {
                title: "Mentorship Support",
                description: "",
              },
              {
                title: "NFT's, Certificates  & Swags",
                description: "",
              },
              {
                title: "Project Building Experience",
                description: "",
              },
              {
                title: "Learn, Build & Participate",
                description: ""
              },
              {
                title: "Internship & PPO Opportunities",
                description: ""
              }
            ]} />
        </div>
      </div>

      <Challenges />

      <div className='min-h-screen flex flex-col items-center justify-center p-8 gap-3 bg-secondary'>
        <h1 className='scroll-m-20 text-6xl text-center font-extrabold tracking-tight sm:text-7xl lg:text-9xl bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent'>Rewards</h1>
        <p className="mt-5 text-lg text-center text-muted-foreground">To be announced soon.</p>
      </div>
      <div className='min-h-screen flex flex-col items-center justify-center p-8 gap-3 bg-secondary'>
        <h1 className='scroll-m-20 text-6xl text-center font-extrabold tracking-tight sm:text-7xl lg:text-9xl bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent'>Schedule</h1>
        <p className="mt-5 text-lg text-center text-muted-foreground">To be announced soon.</p>
      </div>
      <div className='min-h-screen flex flex-col items-center justify-center p-8 gap-3 bg-secondary'>
        <h1 className='scroll-m-20 text-6xl text-center font-extrabold tracking-tight sm:text-7xl lg:text-9xl bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent'>Sponsors</h1>
        <p className="mt-5 text-lg text-center text-muted-foreground">To be announced soon.</p>
      </div>
      <div className='min-h-screen flex flex-col items-center justify-center p-8 gap-3 bg-secondary'>
        <h1 className='scroll-m-20 text-6xl text-center font-extrabold tracking-tight sm:text-7xl lg:text-9xl bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent'>Speakers & Mentors</h1>
        <p className="mt-5 text-lg text-center text-muted-foreground">To be announced soon.</p>
      </div>

      <Faq />
      <Footer />
    </main>
  );
}
