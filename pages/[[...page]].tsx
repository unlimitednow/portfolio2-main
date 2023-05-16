import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { BuilderComponent, Builder, builder } from '@builder.io/react';
import DefaultErrorPage from 'next/error';
import Head from 'next/head';
import Box from './cobe';
import Hero 		from '../components/sections/index/hero'
import Looking 		from '../components/sections/index/looking'
import About 		from '../components/sections/index/about'
import Technical 	from '../components/sections/index/technical'
import Career 		from '../components/sections/index/career'
import FeaturedProjects	from '../components/sections/projects/featured'

import Color 		from '../components/utils/page.colors.util'

import colors 		from '../content/index/_colors.json'
export async function getStaticProps({ params }: GetStaticPropsContext<{ page: string[] }>) {
  const page = await builder
    .get('page', {
      userAttributes: {
        urlPath: '/' + (params?.page?.join('/') || ''),
      },
    })
    .toPromise();

  return {
    props: {
      page: page || null,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 5 seconds
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  const pages = await builder.getAll('page', {
    options: { noTargeting: true },
    omit: 'data.blocks',
  });

  return {
    paths: pages.map(page => `${page.data?.url}`),
    fallback: true,
  };
}

export default function Page({ page }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  const isLive = !Builder.isEditing && !Builder.isPreviewing;
  if (!page && isLive) {
    return (
      <>
        <Head>
       
      </Head>
        <DefaultErrorPage statusCode={404} />
      </>
    );
  }

  return (
 
             <>      <Head>
             {/* maximum-scale 1 meta tag need to prevent ios input focus auto zooming */}
             <meta
               name="viewport"
               content="width=device-width, initial-scale=1 maximum-scale=1"
             />
             <title>Unlimit Potential®</title>
             <meta
               name="description"
               content="Designed to help you manage the bigger picture. Unlimited Now   "
             />
           </Head>			<Color colors={colors} />
<BuilderComponent model="page" content={page} />     <FeaturedProjects />
			<About />
			<Technical />
</>
  );
}
