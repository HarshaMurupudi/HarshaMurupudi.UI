import React from 'react';

// import harshaImage from '/images/me/harsha.JPG';

const About = () => {
  return (
    <div className='px-10'>
      <div>
        <p>
          <span className='text-base lg:text-5xl text-gray-900 dark:text-white'>
            Sriharsha Murupudi
          </span>
          <span className='text-xs lg:text-base text-gray-900 dark:text-white m-4'>
            aka
          </span>
          <span className='text-base lg:text-3xl text-gray-900 dark:text-white'>
            Harsha
          </span>
        </p>
        <p className='text-base lg:text-3xl text-gray-600 dark:text-white'>
          Web Developer & Cartoonist
        </p>
      </div>

      <div className='mt-4 mb-4'>
        <p className='font-semibold'>A little context</p>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-6 place-content-center'>
          <div className='p-6 order-last lg:order-first'>
            <div>
            <p class='mb-3 font-normal text-gray-900 dark:text-gray-400'>
              Building applications to solve problems and simplify processes is what I do. My work fits under the umbrellas of fullstack web development.
            </p>
            <p class='mb-3 font-normal text-gray-900 dark:text-gray-400'>
              I'm currently working as application development contractor. I work with ReactJS on frontend and for the backend I use .NET.
            </p>
            <p class='mb-3 font-normal text-gray-900 dark:text-gray-400'>
              Cartooning is my hobby. I love to draw cartoons to explain and express my thoughts.
            </p>
            <p class='mb-3 text-gray-900 dark:text-gray-400 break-words'>
              You can contact me by email at
              <span className=' mx-1 text-sm italic font-semibold'>
                harsha.murupudi@gmail.com
              </span>
              to say hi! I always appreciate meeting new people.
            </p>
            </div>
            <div>
            <div className='mt-8'>
        <div class='flex justify-center space-x-2 text-neutral-700 dark:text-neutral-300'>
          {/* Github */}
          <a
            href='https://github.com/HarshaMurupudi'
            target='_blank'
            rel='noreferrer'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-5 w-5'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
            </svg>
          </a>
          {/* Pinterest */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='h-5 w-5'
            fill='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              d='M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z'
              fill-rule='evenodd'
              clip-rule='evenodd'
            />
          </svg>

          {/* Behance */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='h-5 w-5'
            fill='currentColor'
            viewBox='0 0 24 24'
          >
            <path d='M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z' />
          </svg>
          {/* Twitter */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='h-5 w-5'
            fill='currentColor'
            viewBox='0 0 24 24'
          >
            <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
          </svg>
          {/* Linkedin */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='h-5 w-5'
            fill='currentColor'
            viewBox='0 0 24 24'
          >
            <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
          </svg>
        </div>
      </div>
            </div>
          </div>
          <div className='p-1 lg:p-6'>
            <img
              className='h-auto w-2/3 rounded-lg ml-2'
              src={'/images/me/harsha.jpg'}
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
