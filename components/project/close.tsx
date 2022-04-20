import Link from 'next/link';

const Close = (props: any) => {
  return (
    <Link href={props.link}>
      <a target={'_blank'} className='bg-purple-600 rounded-md overflow-hidden group relative h-64'>
        <img src={props.image} height='200px' width='100%' loading='lazy' className='object-cover h-full' alt='close' />
        <div className='bg-purple-700 bottom-0 h-0 absolute group-hover:h-36 w-full duration-500 text-white px-3'>
          <div className='mt-2'></div>
          {props.children}
        </div>
      </a>
    </Link>
  );
};

export default Close;
