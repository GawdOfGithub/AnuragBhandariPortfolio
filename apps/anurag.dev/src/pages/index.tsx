import Head from '@/components/meta/Head';

import IndexContents from '@/contents/index';


function Index() {
  return (
    <>
      <Head
        title="Anurag Bhandari · Front-End Developer"
        description="An online portfolio featuring a showcase of my projects and some thoughts as a Front-End Developer who loves intuitive, clean and modern UI design."
        
        overrideTitle
      />
      <IndexContents />
    </>
  );
}

export default Index;
