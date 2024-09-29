import {
  ShieldCheckIcon,
  ShieldExclamationIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/20/solid';

export default function AlertSection({
  status = 'Warning',
  title = 'Attention needed',
  description = 'This is an important message. Please pay attention.',
}: {
  status?: 'Safe' | 'Ok' | 'Warning' | 'Danger';
  title?: string;
  description?: string;
}) {
  // Function to return the icon and color based on the status
  const getIconAndColor = (status: string) => {
    switch (status) {
      case 'Safe':
        return {
          icon: <ShieldCheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />,
          bgColor: 'bg-green-50',
          textColor: 'text-green-800',
          descColor: 'text-green-700',
        };
      case 'Ok':
        return {
          icon: <ShieldCheckIcon className="h-5 w-5 text-blue-500" aria-hidden="true" />,
          bgColor: 'bg-blue-50',
          textColor: 'text-blue-800',
          descColor: 'text-blue-700',
        };
      case 'Danger':
        return {
          icon: <ShieldExclamationIcon className="h-5 w-5 text-red-500" aria-hidden="true" />,
          bgColor: 'bg-red-50',
          textColor: 'text-red-800',
          descColor: 'text-red-700',
        };
      case 'Warning':
      default:
        return {
          icon: <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />,
          bgColor: 'bg-yellow-50',
          textColor: 'text-yellow-800',
          descColor: 'text-yellow-700',
        };
    }
  };

  const { icon, bgColor, textColor, descColor } = getIconAndColor(status);

  return (
    <div className={`rounded-md p-4 ${bgColor}`}>
      <div className="flex">
        <div className="flex-shrink-0">{icon}</div>
        <div className="ml-3">
          <h3 className={`text-sm font-medium ${textColor}`}>{title}</h3>
          <div className={`mt-2 text-sm ${descColor}`}>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
