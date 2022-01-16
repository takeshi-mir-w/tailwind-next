import Link from "next/link";
import Layout from "../components/Layout";

function IndexPage() {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1>Hello Next.js 👋</h1>
      </div>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <p>
          <Link href="/about">
            <a>About</a>
          </Link>
        </p>
      </div>
    </Layout>
  );
}

export default IndexPage;
