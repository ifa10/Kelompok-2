// src/pages/api/tourism.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import * as tourismService from '@/libs/database';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const { name, description, location, price } = req.body;
      if (!name || !description || !location || !price) {
        return res.status(400).json({ message: 'All fields are required' });
      }

      const newTourism = await tourismService.createTourism({ name, description, location, price });
      return res.status(201).json(newTourism);
    } else if (req.method === 'GET') {
      const tourismList = await tourismService.getTourism();
      return res.status(200).json(tourismList);
    } else if (req.method === 'PUT') {
      const { id, name, description, location, price } = req.body;
      if (!id || !name || !description || !location || !price) {
        return res.status(400).json({ message: 'All fields are required' });
      }

      const updatedTourism = await tourismService.updateTourism(id, { name, description, location, price });
      return res.status(200).json(updatedTourism);
    } else if (req.method === 'DELETE') {
      const { id } = req.body;
      if (!id) {
        return res.status(400).json({ message: 'Tourism ID is required' });
      }

      const result = await tourismService.deleteTourism(id);
      return res.status(200).json(result);
    } else {
      res.setHeader('Allow', ['POST', 'GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
