import { useState, useEffect } from 'react';
import * as tourismService from '@/libs/database'; 
import { useRouter } from 'next/router';

type Wisata = {
  id: string;
  nama: string;
  deskripsi: string;
  lokasi: string;
  harga: number;
  ketersediaan: boolean;
};

const AdminPage = () => {
  const [authorized, setAuthorized] = useState<boolean | null>(null);
  const [tourismList, setTourismList] = useState<Wisata[]>([]);
  const [form, setForm] = useState({
    id: '',
    name: '',
    description: '',
    location: '',
    price: '',
    availability: '', // Availability as a string, will convert to boolean
  });

  const router = useRouter();
}

export default AdminPage