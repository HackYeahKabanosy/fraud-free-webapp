import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query;

  // Validate that `url` is a string
  if (typeof url !== 'string') {
    return res.status(400).json({ error: 'URL must be a string.' });
  }

  try {
    // Make the GET request to the external API with the given `url` parameter
    const response = await axios.get(`https://fraud-free-api.onrender.com/Conclusion`, {
      params: { url }, // Pass the `url` query param (e.g., amazon.com)
      headers: {
        Accept: '*/*',
      },
    });

    // Send the response back to the client with the external API data
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching data from the external API:', error);

    // Handle any errors that occurred during the request
    res.status(500).json({ error: 'Failed to fetch data from the external API.' });
  }
}
