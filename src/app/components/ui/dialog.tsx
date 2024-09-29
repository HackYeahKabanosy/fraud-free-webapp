'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { CheckIcon, ExclamationTriangleIcon, InformationCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'

export default function DialogUi({
  title = 'Notification',
  description = 'This is a message.',
  buttonText = 'Got it',
  onClose,
  type = 'info' // Default to 'info'
}: {
  title?: string,
  description?: string,
  buttonText?: string,
  onClose: () => void,
  type?: 'success' | 'info' | 'warning' | 'danger' // Define types
}) {
  const [open, setOpen] = useState(true);

  // Define icon and styles based on the type
  const getIconAndStyle = () => {
    switch (type) {
      case 'success':
        return {
          icon: <CheckIcon aria-hidden="true" className="h-6 w-6 text-green-600" />,
          iconBg: 'bg-green-100',
          buttonBg: 'bg-green-600 hover:bg-green-500',
        };
      case 'warning':
        return {
          icon: <ExclamationTriangleIcon aria-hidden="true" className="h-6 w-6 text-yellow-600" />,
          iconBg: 'bg-yellow-100',
          buttonBg: 'bg-yellow-600 hover:bg-yellow-500',
        };
      case 'danger':
        return {
          icon: <XCircleIcon aria-hidden="true" className="h-6 w-6 text-red-600" />,
          iconBg: 'bg-red-100',
          buttonBg: 'bg-red-600 hover:bg-red-500',
        };
      case 'info':
      default:
        return {
          icon: <InformationCircleIcon aria-hidden="true" className="h-6 w-6 text-blue-600" />,
          iconBg: 'bg-blue-100',
          buttonBg: 'bg-blue-600 hover:bg-blue-500',
        };
    }
  };

  const { icon, iconBg, buttonBg } = getIconAndStyle();

  return (
    <Dialog open={open} onClose={() => { setOpen(false); onClose(); }} className="relative z-10">
      <Dialog.Backdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
            <div>
              <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${iconBg}`}>
                {icon}
              </div>
              <div className="mt-3 text-center sm:mt-5">
                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                  {title}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    {description}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6">
              <button
                type="button"
                onClick={() => { setOpen(false); onClose(); }}
                className={`inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${buttonBg}`}
              >
                {buttonText}
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}
