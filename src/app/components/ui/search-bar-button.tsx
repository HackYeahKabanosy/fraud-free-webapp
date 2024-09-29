'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import DialogUi from './dialog'; // Import the custom dialog
import { Button } from './moving-border';

export default function SearchBarButton() {
  const [input, setInput] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Control the visibility of the dialog
  const [showDialog, setShowDialog] = useState(false); // Additional state to force render the dialog
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();


  const checkIsMobile = () => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 640); // You can customize this breakpoint
    }
  };

  // This useEffect will listen for changes in `isDialogOpen` and force a re-render
  useEffect(() => {
    checkIsMobile(); // Initial check
    window.addEventListener('resize', checkIsMobile); // Add event listener for resize

    return () => {
      window.removeEventListener('resize', checkIsMobile); // Cleanup event listener on component unmount
    };
  }, []);

  // This useEffect will listen for changes in `isDialogOpen` and force a re-render
  useEffect(() => {
    if (isDialogOpen) {
      setShowDialog(true); // Trigger the dialog when `isDialogOpen` is true
    } else {
      setShowDialog(false); // Hide the dialog when `isDialogOpen` is false
    }
  }, [isDialogOpen]);

  const handleSearch = async () => {
    const domainPattern = /^[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/; // Regular expression for domain validation

    if (domainPattern.test(input)) {
      router.push(`/detail/${input}`); // Navigate to a search results page with the domain input
    } else {
      setIsDialogOpen(true); // Show dialog if the input is invalid
    }
  };

  return (
    <div className="w-full max-w-lg lg:max-w-xs">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          id="search"
          name="search"
          className="block w-full h-12 rounded-md border-0 bg-gray-100 text-gray-400 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 dark:bg-gray-700 dark:text-gray-300 placeholder:dark:text-gray-400 focus:dark:bg-white focus:dark:text-gray-900 py-1.5 pl-10 pr-3 focus:ring-0 sm:text-sm sm:leading-6"
          placeholder="Search by website address: allegro.pl"
          type="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()} // Trigger search on Enter key press
        />
      </div>

      {/* Mobile Button for Searching */}
      {
        isMobile ?  
        <div className="mt-3 sm:hidden">
          <Button
            borderRadius="0.7rem"
            as="button"
            className="w-full"
            onClick={handleSearch}
          >
            Search
          </Button>
        </div>
        : null
      }

      {/* Conditionally render the DialogUi component when showDialog is true */}
      {showDialog && (
        <DialogUi
          title="Invalid Input"
          description="Please enter a valid website URL, e.g., allegro.pl."
          buttonText="Got it"
          type="danger" // This will display the dialog with error styling
          onClose={() => setIsDialogOpen(false)} // Close the dialog when user clicks the button
        />
      )}
    </div>
  );
}
