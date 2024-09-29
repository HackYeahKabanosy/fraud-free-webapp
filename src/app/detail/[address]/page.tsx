
'use client';

import WebsiteDetail from '@/app/components/details/ecommerce/data';
import React, { useEffect, useState } from 'react';

export default function TransactionPage({ params }: { params: { address: string } }) {
  const [addressDetail, setAddressDetail] = useState<any>(null);
  const { address } = params; 

  useEffect(() => {
    if (!address) return; // Exit if the hash is not yet available
    const fetchWalletData = async () => {
      if (typeof address === 'string') { // Ensure hash is a string
        const response = await fetch(`/api/detail/${address}`);
        const data = await response.json();
        console.log(data)
        setAddressDetail({
          ...data
        });
      }
    };
    fetchWalletData();
  }, [address]); // Re-run the effect if the hash changes

  if (!addressDetail) {
    return <div>Loading...</div>;
  }

  return (
    <WebsiteDetail data={addressDetail} />
  );
};
