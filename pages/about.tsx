import Layout from '../components/Layout';

function AboutPage() {
  return (
    <Layout title='About | Next.js + TypeScript Example'>
      <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-bold leading-tight text-gray-900'>
          About
        </h1>
      </div>
      <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
        <p>This is the about page</p>
      </div>
    </Layout>
  );
}

export default AboutPage;
