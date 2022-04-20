import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
const Header = (props: any) => {
  const router = useRouter();
  return (
    <NextSeo
      title={props.title ? `${props.title} | Serhii Muzyka` : 'Serhii Muzyka'}
      description={
        props.des
          ? props.des
          : 'Hi, I’m Serhii Muzyka. Nice to meet you. Senior Software Engineer 🚀 Experience building web, mobile applications with cool libraries and frameworks.'
      }
      canonical={`https://mserhii1029.github.io${router.asPath}`}
      openGraph={{
        type: 'website',
        locale: 'en_EN',
        title: props.title ? `${props.title} | Serhii Muzyka` : 'Serhii Muzyka',
        description: props.des
          ? props.des
          : 'Hi, I’m Serhii Muzyka. Nice to meet you. Senior Software Engineer 🚀 Experience building web, mobile applications with cool libraries and frameworks.',
        images: [
          {
            url: props.image == undefined || props.image.length == 0 ? 'https://mserhii1029.github.io/main.jpg' : props.image,
          },
        ],
        url: `https://mserhii1029.github.io${router.asPath}`,
        site_name: 'Serhii Portfolio',
      }}
      twitter={{
        handle: '@mserhii1029',
        site: '@mserhii1029',
        cardType: 'summary_large_image',
      }}
    />
  );
};

export default Header;
