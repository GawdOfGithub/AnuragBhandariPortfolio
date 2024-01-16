import clsx from 'clsx';
import { useState } from 'react';

import { GitHubIcon} from '@/components/Icons';
import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';
import AppWindow from '@/components/wireframes/AppWindow';
import GitHubWireframe from '@/components/wireframes/GitHub';

function ProjectsContents() {
  const [currentState, setCurrentState] = useState<'npm' | 'github'>('github');

  return (
    <>
    <div className='mb-10'>
      <SectionTitle
        title="Superior StackOverFLow"
        caption="Bug-Hunter"
        description="A Stack Over Flow like app but better which I created using bleeding-edge tech stack which consists of Next.JS,ServerActions,Clerk and MONGODB as the database."
        button={{
          title: 'Watch In Action',
          href: 'https://hunt-the-bug.vercel.app/',
        }}
      />
      </div>
      <div className='mb-10'>
      <SectionTitle
        title="Apni Vidya"
        caption="Apni-Vidya"
        description="A full stack web app which is a real world application that connects home tutors with students which I created using bleeding-edge tech stack which consists of Next.JS,ServerActions,Razorpay and MONGODB as the database."
        button={{
          title: 'Watch In Action',
          href: 'https://www.apnividya.in/',
        }}
      />
      </div>
      <div className='mb-10' >
        <SectionTitle
        title="React Fast Pizza."
        caption="Fast-Pizza"
        description="A food delivery app created using React,React Router and Redux Toolkit"
        button={{
          title: 'Watch In Action',
          href: 'https://omni-food-blush.vercel.app/',
        }}
      />
      </div>
       <SectionTitle
        title="Eloquent Pizza."
        caption="Pizza Delivery App"
        description="A food delivery app with eloquent UI that priortises design and user experience "
        button={{
          title: 'Watch In Action',
          href: '/docs/tailwindcss-accent',
        }}
      />
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}>
            <div className={clsx('flex flex-col gap-3')}>
              <SectionButton
                title="Available on GitHub"
                icon={<GitHubIcon className={clsx('my-2 h-16 w-16')} />}
                description="Access powerful and flexible package on GitHub with MIT license."
                active={currentState === 'github'}
                onClick={() => setCurrentState('github')}
              />
             
            </div>
          </div>
          <div className={clsx('w-full', 'lg:w-auto')}>
            <div className={clsx('-mt-[41px]')}>
              <div className={clsx('w-full', 'lg:h-[400px] lg:w-[600px]')}>
                <AppWindow
                  type="browser"
                  browserTabs={[
                    {
                      icon: <GitHubIcon className="h-4 w-4" />,
                      title: 'GawdOfGithub/BugHunt',
                      isActive: currentState === 'github',
                    },
                   
                  ]}
                >
                  {currentState === 'github' && (
                    <GitHubWireframe
                      author="GawdOfGithub"
                      license="MIT"
                      repository="Bug Hunt"
                      description="Hunt your development bugs with this bleeding edge tech stack"
                    />
                  )}
                  
                </AppWindow>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default ProjectsContents;
