import Header from './users/_components/header'
import Footer from './users/_components/footer'

export default function Home() {
  return (
    <div>
      <div>
        <Header/>
      </div>
   
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6">
        <h1 className="text-4xl font-bold mb-4">Welcome to I Watch Malawi</h1>
        <p className="text-lg text-center max-w-md">
          Stay informed with real-time updates and insights on Malawi’s latest events.
        </p>
      </div>
      <Footer/>
    </div>
  );
}
