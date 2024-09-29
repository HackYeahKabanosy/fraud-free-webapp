import { ArrowLeftIcon, ShieldCheckIcon, ShieldExclamationIcon, AdjustmentsVerticalIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/navigation';
import AlertSection from '../../ui/alert';


export default function WebsiteDetail({ data }: { data: any }) {
  const router = useRouter();

  const {
    url,
    status,
    scamProbability,
    scale,
    conclusion,
    keypoints,
    customerReviews
  } = data;

  // Function to determine the icon and color based on the status
  const getRiskIcon = (status: string) => {
    switch (status) {
      case 'Safe':
        return <ShieldCheckIcon className="h-6 w-6 text-green-500 inline-block" />;
      case 'Ok':
        return <ShieldCheckIcon className="h-6 w-6 text-blue-500 inline-block" />;
      case 'Warning':
        return <ShieldExclamationIcon className="h-6 w-6 text-orange-500 inline-block" />;
      case 'Danger':
        return <ShieldExclamationIcon className="h-6 w-6 text-red-500 inline-block" />;
      default:
        return <ShieldExclamationIcon className="h-6 w-6 text-gray-500 inline-block" />; // Default to gray if no status is available
    }
  };

  // Determine the status and pass it to the AlertSection
  const getAlertStatus = (status: string) => {
    switch (status) {
      case 'Safe':
        return 'Safe';
      case 'Ok':
        return 'Ok';
      case 'Warning':
        return 'Warning';
      case 'Danger':
        return 'Danger';
      default:
        return 'Warning'; // Default to Warning if no valid status
    }
  };

  const getProgressBarColor = (probability: number) => {
    if (probability <= 1) {
      return 'bg-green-500'; // Safe
    } else if (probability <= 3) {
      return 'bg-blue-500'; // Ok
    } else if (probability <= 5) {
      return 'bg-yellow-500'; // Warning
    } else {
      return 'bg-red-500'; // Danger
    }
  };

  const displayProbability = scamProbability === 0 ? 0.1 : scamProbability;

  return (
    <div>
      <h1 className="text-3xl font-semibold leading-7 text-gray-900 dark:text-gray-300 mb-6">
        <a onClick={() => router.back()} className="text-blue-500 dark:text-blue-400 cursor-pointer">
          <ArrowLeftIcon className="h-5 w-5 inline-block mr-2" />
        </a>
        Analysis: {url || 'Not available'}
      </h1>

      <div className="overflow-hidden bg-white dark:bg-gray-800 shadow sm:rounded-lg p-3 mb-9">
        {/* Create two separate blocks for Risk and Scam Probability */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 py-6 sm:px-6">
          {/* Risk Block */}
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-2">Risk</h3>
            <p className="text-gray-500 dark:text-gray-300 flex items-center">
              {getRiskIcon(status)} <span className="ml-2">{status || 'Not available'}</span>
            </p>
          </div>

          {/* Scam Probability Block */}
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200 mb-2 flex items-center">
              <AdjustmentsVerticalIcon className="h-6 w-6 text-gray-900 dark:text-gray-200 mr-2" />
              Scam Probability
            </h3>

            <p className="text-gray-500 dark:text-gray-300 mb-2">
              {scamProbability ?? 'Not available'} / {scale || '10'}
            </p>

            {/* Progress Bar representing Scam Probability */}
            {displayProbability && (
              <div className="relative pt-1">
                <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-gray-200 dark:bg-gray-700">
                  <div
                    style={{ width: `${(displayProbability / 10) * 100}%` }}
                    className={`flex flex-col text-center whitespace-nowrap text-white justify-center ${getProgressBarColor(scamProbability)}`}
                  ></div>
                </div>
              </div>
            )}

            {!displayProbability && <p className="text-gray-500 dark:text-gray-300">No probability data available</p>}
          </div>
        </div>

        {/* Use the AlertSection for the conclusion */}
        <div className="mt-6">
          <AlertSection
            status={getAlertStatus(status)} // Pass the risk status
            title="Conclusion"
            description={conclusion || 'Not available'} // Pass the conclusion from the data
          />
        </div>
      </div>

      <div className="overflow-hidden bg-white dark:bg-gray-800 shadow sm:rounded-lg p-3 mb-9">
        <div>
          <div className="px-4 py-6 sm:px-6">
            <h1 className="text-3xl font-semibold leading-7 text-gray-900 dark:text-gray-300 mb-6">
              Cybersecurity Check
            </h1>
          </div>
          <dl className="border-t border-gray-200 dark:border-gray-900 divide-y divide-gray-200 dark:divide-gray-900">
            {keypoints && (
              <>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-900 dark:text-gray-300">Domain Age and Registration</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-200 sm:col-span-2 sm:mt-0">
                    {keypoints['Domain Age and Registration'] || 'Not available'}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-900 dark:text-gray-300">Registrar Information</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-200 sm:col-span-2 sm:mt-0">
                    {keypoints['Registrar Information'] || 'Not available'}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-900 dark:text-gray-300">WHOIS Information</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-200 sm:col-span-2 sm:mt-0">
                    {keypoints['WHOIS Information'] || 'Not available'}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-900 dark:text-gray-300">Reputation Score</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-200 sm:col-span-2 sm:mt-0">
                    {keypoints['Reputation Score'] || 'Not available'}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-900 dark:text-gray-300">Domain Status</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-200 sm:col-span-2 sm:mt-0">
                    {keypoints['Domain Status'] || 'Not available'}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-900 dark:text-gray-300">Recent Updates</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-200 sm:col-span-2 sm:mt-0">
                    {keypoints['Recent Updates'] || 'Not available'}
                  </dd>
                </div>
              </>
            )}
          </dl>
        </div>
      </div>

      <div className="overflow-hidden bg-white dark:bg-gray-800 shadow sm:rounded-lg p-3 mb-9">
        <div>
          <div className="px-4 py-6 sm:px-6">
            <h1 className="text-3xl font-semibold leading-7 text-gray-900 dark:text-gray-300 mb-6">
              Customer Experience
            </h1>
          </div>
          <dl className="border-t border-gray-200 dark:border-gray-900 divide-y divide-gray-200 dark:divide-gray-900">
            {customerReviews && (
              <>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-900 dark:text-gray-300">Company Name</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-200 sm:col-span-2 sm:mt-0">
                    {customerReviews.companyName || 'Not available'}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-900 dark:text-gray-300">Total Reviews</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-200 sm:col-span-2 sm:mt-0">
                    {customerReviews.totalReviews || 'Not available'}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-900 dark:text-gray-300">Trust Score</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-200 sm:col-span-2 sm:mt-0">
                    {customerReviews.trustScore || 'Not available'}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-900 dark:text-gray-300">Rating Description</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-200 sm:col-span-2 sm:mt-0">
                    {customerReviews.ratingDescription || 'Not available'}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-900 dark:text-gray-300">Rating</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 dark:text-gray-200 sm:col-span-2 sm:mt-0">
                    {customerReviews.rating || 'Not available'}
                  </dd>
                </div>
              </>
            )}
          </dl>
        </div>
      </div>
    </div>
  );
}
