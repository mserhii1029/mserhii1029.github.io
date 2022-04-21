import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import LessSkills from '@/components/skils/less';
import useOnScreen from '@/lib/useOnScreen';
import MoreSkills from '@/components/skils/more';
import Layout from '@/components/Layout';
import Link from 'next/link';
import Close from '@/components/project/close';
import OpenSource from '@/components/project/open';
import dataTest from '@/lib/project/openSource.json';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  //* set show more skills
  const [showMore, setShowMore] = useState(true);
  const [open, setOpen] = useState(false);

  const setShowLessSkill = () => {
    if (showMore == true) {
      setShowMore(false);
    } else {
      setShowMore(true);
      skillsScroll();
    }
  };

  //? skills
  const skills: any = useRef(null);
  const skillsScroll = () => skills?.current.scrollIntoView({ behavior: 'smooth' });
  const skillisVisible = useOnScreen(skills);

  //? about
  const about: any = useRef(null);
  const aboutScroll: any = () => about?.current.scrollIntoView({ behavior: 'smooth' });
  const aboutisVisible = useOnScreen(about);

  //? project
  const project: any = useRef(null);
  const projectScroll: any = () => project?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const projectisVisible = useOnScreen(project);

  //? contact
  const contact: any = useRef(null);
  const contactScroll: any = () => contact?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const contactisVisible = useOnScreen(contact);
  library.add(fab, fas);

  return (
    <Layout>
      <div className='parallax_layer parallax_layer_4 text-center mt-40'>
        <h1 className='text-7xl font-mochiy'>
          Hi! I am Serhii Muzyka{' '}
          <span className='wave-emoji'>
            <img alt='👋' draggable='false' src='https://twemoji.maxcdn.com/2/72x72/1f44b.png'></img>
          </span>
        </h1>
        <div className='mt-5 text-center font-mochiy'>I code and I love what I do.</div>
      </div>
      <div className='parallax_layer parallax_layer_3'>
        <img className='img' src='/images/layer4.png' alt='layer4' />
      </div>
      <div className='parallax_layer parallax_layer_2'>
        <img className='img' src='/images/layer3.png' alt='layer3' />
      </div>
      <div className='parallax_layer parallax_layer_1'>
        <img className='img' src='/images/layer2.png' alt='layer2' />
      </div>
      <div className='parallax_layer parallax_layer_0'>
        <img className='img' src='/images/layer1.png' alt='layer1' />
      </div>
      <div className='parallax_cover z-100 overflow-x-visible'>
        <nav id='navbar' className='psitck text-white bg-main pb-1 sm:pb-3 sm:pt-3 pt-1 z-100'>
          <div className='max-w-screen-xl mx-auto px-2 xs:px-0 flex justify-between'>
            <h2 className='rounded-md py-2' onClick={() => console.log('')}>
              HELLO
            </h2>
            <ul className='hidden sm:flex space-x-5'>
              <li>
                <button className={`hover:bg-purple-800 ${aboutisVisible && 'bg-purple-800'} rounded-md px-4 py-2`} onClick={aboutScroll}>
                  About
                </button>
              </li>
              <li>
                <button className={`hover:bg-purple-800 ${!aboutisVisible && skillisVisible && 'bg-purple-800'} rounded-md px-4 py-2`} onClick={skillsScroll}>
                  Skills
                </button>
              </li>
              <li>
                <button
                  className={`hover:bg-purple-800 ${!aboutisVisible && !skillisVisible && projectisVisible && 'bg-purple-800'} rounded-md px-4 py-2`}
                  onClick={projectScroll}
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  className={`hover:bg-purple-800 ${
                    !aboutisVisible && !skillisVisible && !projectisVisible && contactisVisible && 'bg-purple-800'
                  } rounded-md px-4 py-2`}
                  onClick={contactScroll}
                >
                  Contact
                </button>
              </li>
            </ul>
            <button className='md:hidden rounded-lg focus:outline-none focus:shadow-outline' onClick={() => setOpen(!open)}>
              <svg fill='currentColor' viewBox='0 0 20 20' className='w-8 h-8'>
                <path
                  visibility={open ? 'hidden' : 'visible'}
                  fillRule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
                  clipRule='evenodd'
                ></path>
                <path
                  visibility={!open ? 'hidden' : 'visible'}
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${open ? 'h-56' : 'h-0'} overflow-hidden flex flex-col flex-grow md:pb-0 md:flex md:justify-end md:flex-row bg-main px-3 duration-300`}
          >
            <ul className='space-y-2 w-full'>
              <li>
                <button className={`hover:bg-purple-800 ${aboutisVisible && 'bg-purple-800'} rounded-md px-4 py-2 w-full`} onClick={aboutScroll}>
                  About
                </button>
              </li>
              <li>
                <button
                  className={`hover:bg-purple-800 ${!aboutisVisible && skillisVisible && 'bg-purple-800'} rounded-md px-4 py-2 w-full`}
                  onClick={skillsScroll}
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  className={`hover:bg-purple-800 ${!aboutisVisible && !skillisVisible && projectisVisible && 'bg-purple-800'} rounded-md px-4 py-2 w-full`}
                  onClick={projectScroll}
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  className={`hover:bg-purple-800 ${
                    !aboutisVisible && !skillisVisible && !projectisVisible && contactisVisible && 'bg-purple-800'
                  } rounded-md px-4 py-2 w-full`}
                  onClick={contactScroll}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <div className='max-w-screen-xl mx-auto mt-3 px-2 xs:px-0 text-white text-lg'>
          <div className='text-center'>
            <h2 id='about' ref={about} className='text-3xl'>
              Hi, I’m Serhii Muzyka. Nice to meet you.
            </h2>
            <p className='mt-3 text-gray-400 w-3/4 m-auto'>
              Senior Software Engineer 🚀 Experience building web, mobile applications with cool libraries and frameworks.
            </p>
          </div>
          <br />
          <div ref={skills} id='skills' className='grid sm:grid-cols-7 grid-cols-1 gap-4 mt-10'>
            <div className='col-span-3 sm:order-1 order-2'>
              <img src='/images/whatido.png' alt='' />
            </div>
            <div className='sm:order-2 col-span-4 order-1'>
              <h2 className='text-3xl'>What I do</h2>
              {showMore ? <LessSkills /> : <MoreSkills />}
              <div className='text-center mt-5'>
                <button onClick={setShowLessSkill} className='bg-orange-600 px-5 py-2 rounded-lg focus:outline outline-offset-1 outline-orange-900'>
                  {showMore ? (
                    <FontAwesomeIcon className='mr-2 down-animation' size='lg' icon={['fas', 'arrow-down']} />
                  ) : (
                    <FontAwesomeIcon className='mr-2 down-animation' size='lg' icon={['fas', 'arrow-up']} />
                  )}{' '}
                  {showMore ? 'Show more' : 'Show less'}
                </button>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div ref={project} id='project'>
            <h2 className='text-3xl'>Projects</h2>

            {/* <h3 className='text-2xl mt-5 border-b-2 pb-2 border-purple-500 w-14 whitespace-nowrap'>Closed Source</h3> */}

            <div className='grid sm:grid-cols-3 grid-cols-1 gap-4 mt-4'>
              <Close link='https://play.google.com/store/apps/details?id=com.forexrates' image='/assets/ForexRates.png'>
                <h2>ForexRates</h2>
                <p className='text-sm mt-1'>
                  Forex rates is a react native mobile application developed for Android and IOS. This application is used to get the foreign exchange rates and
                  historical exchange rates with ease.
                </p>
              </Close>

              <Close link='https://github.com/mserhii1029/photos-collage' image='/assets/photos-collage.png'>
                <h2>Photos collage</h2>
                <p className='text-sm mt-1'>
                  I thought about cloning Layout app by Instagram as it contains a lot of gestures handling and animations and I knew that I should focus on
                  those topics as they are very important in mobile development.
                </p>
              </Close>

              <Close link='https://github.com/mserhii1029/productivity-app' image='/assets/productivity-app.png'>
                <h2>Productivity App</h2>
                <p className='text-sm mt-1'>
                  It is a time tracking tool inspired by article 100 Blocks a Day by Tim Urban. Your 24 hours is divided into 10 minute blocks and track what
                  you did in that block of time.
                </p>
              </Close>

              <Close link='https://github.com/mserhii1029/slack-clone' image='/assets/slack-clone.png'>
                <h2>Slack - Messaging App</h2>
                <p className='text-sm mt-1'>
                  It is a clone of Slack which a messaging app for business that connects people to the information that they need. By bringing people together
                  to work as one unified team.
                </p>
              </Close>

              <Close link='https://github.com/mserhii1029/CoinFlip-ETH' image='/assets/coinflip.png'>
                <h2>Ethereum CoinFlip Game</h2>
                <p className='text-sm mt-1'>
                  An Ethereum blockchain game where 2 players can bet an ERC20 token I created with each other. The winner of the randomized coin flip wins the
                  whole bet amount and can withdraw their earnings at any time to their wallet.
                </p>
              </Close>

              <Close link='https://github.com/mserhii1029/eCommerce-Store' image='/assets/ecommerce.png'>
                <h2>eCommerce Store</h2>
                <p className='text-sm mt-1'>
                  An eCommerce website built & designed completely from scratch using Commerce.js's REST API to handle the population of the products. I used
                  Redux to store the state of the shopping cart, saved items, & render the proper UI components based on the user's actions.
                </p>
              </Close>

              {/* <div className='bg-gray-900 rounded-md overflow-hidden flex group h-64'>
                <div className='m-auto text-center'>
                  <div className='group-hover:top-0 text-2xl'>Others</div>
                  <div className='group-hover:h-48 h-0 duration-500 overflow-hidden mt-5'>
                    <div className='mb-2'>
                      <Link href='https://wallss.net'>
                        <a target='_blank' className='border-2 rounded-md px-3 mt-7 hover:bg-white hover:text-black duration-200'>
                          Wallss.net
                        </a>
                      </Link>
                    </div>
                    <div className='mb-2'>
                      <Link href='https://loadmp.com'>
                        <a target='_blank' className='border-2 rounded-md px-3 mt-7 hover:bg-white hover:text-black duration-200'>
                          Loadmp.com
                        </a>
                      </Link>
                    </div>
                    <div className='mb-2'>
                      <Link href='https://www.youtube.com/watch?v=cXt49bKnEXY'>
                        <a target='_blank' className='border-2 rounded-md px-3 mt-7 hover:bg-white hover:text-black duration-200'>
                          Movie Script
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>

            {/* <h2 className='text-2xl mt-5 border-b-2 pb-2 border-purple-500 w-14 whitespace-nowrap'>Open Source</h2>
            <div className='grid sm:grid-cols-3 grid-cols-1 gap-4 mt-4'>
              {dataTest.map((data: any, i: any) => (
                <OpenSource key={i} color={data.color} detail={data.detail} name={data.name} lang={data.lang} link={data.link} />
              ))}
            </div> */}

            <div className='text-center mt-6'>
              <Link href='https://github.com/mserhii1029?tab=repositories'>
                <a target={'_blank'} className='bg-purple-600 px-5 py-3 rounded-lg focus:outline outline-offset-1 outline-purple-900'>
                  More Porjects
                </a>
              </Link>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div ref={contact} id='contact'>
            <h2 className='text-3xl mt-5 border-b-2 pb-2 border-purple-500 w-14 whitespace-nowrap'>Contact</h2>
            <Contact />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </Layout>
  );
}
