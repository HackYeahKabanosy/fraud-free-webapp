import { CloudArrowUpIcon, ServerIcon } from '@heroicons/react/20/solid'
import { IconBrandTailwind } from '@tabler/icons-react'

export default function Example() {
  return (
    <div className="relative">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">About The Project</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700 dark:text-gray-100">
                <strong>FraudFree</strong> is a cutting-edge platform dedicated to enhancing e-commerce security by providing real-time store verification. Our mission is to empower consumers with reliable tools to detect and avoid fraudulent online stores, protecting them from financial loss and data theft.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 dark:bg-gray-100 shadow-xl dark:shadow-2xl ring-1 ring-gray-400/10 dark:ring-gray-100/10 sm:w-[57rem]"
            src="/application.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 dark:text-gray-100 lg:max-w-lg">
              <p>
                <strong>FraudFree</strong> leverages advanced algorithms, machine learning, and data aggregation from multiple reputable sources to assess the trustworthiness of online stores. Whether through our browser plugin or web-based verification tool, users can instantly verify if an e-commerce site is legitimate, helping them make informed decisions.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600 dark:text-gray-300">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-sky-600 dark:text-sky-300" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900 dark:text-gray-200">Instant Verification.</strong> Real-time analysis of websites as users browse, offering immediate feedback on store legitimacy.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <IconBrandTailwind className="mt-1 h-5 w-5 flex-none text-sky-600 dark:text-sky-300" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900 dark:text-gray-200">Advanced Machine Learning.</strong> Detect subtle patterns and anomalies with AI-powered fraud detection, improving over time.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon className="mt-1 h-5 w-5 flex-none text-sky-600 dark:text-sky-300" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900 dark:text-gray-200">Comprehensive Data Analysis.</strong> Aggregate data from domain registries, SSL certificates, review platforms, and social media to generate accurate trust scores.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                <strong>FraudFree</strong> is designed with scalability in mind, using Next.js, TailwindCSS for the frontend, and MongoDB for data management. Its user-friendly interface ensures that even non-technical users can easily verify online stores and protect themselves from scams.
              </p>

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-300">Real-Time E-commerce Verification</h2>
              <p className="mt-6">
                FraudFree offers a unique experience by analyzing several critical factors:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Domain Age</strong>: Spot newly created scam sites by analyzing how long a domain has been registered.</li>
                <li><strong>SSL Certificate Validity</strong>: Ensures secure connections by verifying SSL certificates and their issuers.</li>
                <li><strong>User Reviews</strong>: Gathers feedback from trusted review sites to assess the store&apos;s reputation.</li>
                <li><strong>Social Media Presence</strong>: Evaluates social media activity to confirm the authenticity of the store.</li>
                <li><strong>Payment Methods</strong>: Checks for secure and reliable payment gateways.</li>
              </ul>
              
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-300">Why Choose FraudFree?</h2>
              <p className="mt-6">
                FraudFree sets itself apart with real-time, on-page alerts that provide instant feedback, enhanced data sources, and advanced AI-driven trust scoring. Our browser plugin seamlessly integrates into the browsing experience, and our web-based tool ensures that users without the plugin can still manually verify any website they visit.
              </p>

              <p className="mt-6">
                By empowering users with clear and actionable insights, FraudFree not only protects consumers but also helps legitimate businesses stand out in a sea of fraud. Join the community in reporting and defending against scams with our user-friendly platform.
              </p>

              <p className="mt-6">
                Explore <strong>FraudFree</strong> on GitHub: <a href="https://github.com/HackYeahKabanosy/fraudfree" className="text-blue-500 hover:text-blue-600">FraudFree Repository</a>.
              </p>

              <p className="mt-6">
                Help us build a safer online shopping experience—contribute to the <strong>FraudFree</strong> project today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
