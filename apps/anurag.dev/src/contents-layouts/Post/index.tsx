import { PropsWithChildren } from 'react';

import WithTableOfContents from '@/components/layouts/WithTableOfContents';
import Head from '@/components/meta/Head';
import SkipNavigation from '@/components/navigations/SkipNavigation';
import PageHeader from '@/components/PageHeader';





import type { TPostFrontMatter, TTableOfContents } from '@/types';

interface PostProps {
  frontMatter: TPostFrontMatter;
  tableOfContents: TTableOfContents;
}

function Post({
  frontMatter: { title, description, caption, category, date, lang, tags },
  tableOfContents,
  children = null,
}: PropsWithChildren<PostProps>) {
  // get og image urls


  // get structured data


  return (
    <>
      <Head
        title={title}
        description={description}
      
    
      />
      <SkipNavigation />
      <PageHeader title={title} description={description} caption={caption} />
      
      <WithTableOfContents tableOfContents={tableOfContents}>
        {children}
      
      </WithTableOfContents>

    </>
  );
}

export default Post;
