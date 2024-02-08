import { NextApiRequest, NextApiResponse } from 'next';
import { getLinkedinPage } from '@/utils'; // Ensure this path correctly points to where your function is defined.

async function handler(req: NextApiRequest, res: any) {
  if (req.method === 'POST') {
    try {
      const { url } = req.body;
      console.log("url:", url);

      // Extract the LinkedIn handle from URL
      const handle = url;
      console.log("Handle:", handle);

      // Use getLinkedinPage to fetch all profile information
      const profile = await getLinkedinPage(handle);
      if (!profile) { // Adjusted to check profile directly
        res.status(404).json({ error: 'Profile not found' });
        return;
      }
      // Return the fetched profile
      res.status(200).json(profile);
    } catch (error) {
        console.error('Error fetching LinkedIn profile:', error);
        if (error instanceof Error && error.message === 'Profile not found') {
          res.status(404).json({ error: 'Profile not found' });
        } else {
          res.status(400).json({ error: 'Invalid request' });
        }
      }
  } else {
    // Only accept POST requests
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default handler;

