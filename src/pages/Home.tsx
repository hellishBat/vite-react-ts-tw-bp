// Home
import ContextProviders from '@/context/ContextProviders'
import Layout from '@/layouts/Layout'
import { LogoReact, LogoVite, LogoTS, LogoTW } from '@/assets'

const Home = () => {
  return (
    <ContextProviders>
      <Layout>
        <section className="py-16">
          <div className="container">
            <h1 className="flex items-center justify-center text-4xl font-medium">
              <LogoVite className="mr-2" /> Vite Boilerplate (<LogoReact className="mr-2" />
              React <LogoTS className="mx-2" /> TypeScript + <LogoTW className="mr-2" /> Tailwind
              CSS)
            </h1>
          </div>
        </section>
      </Layout>
    </ContextProviders>
  )
}

export default Home
