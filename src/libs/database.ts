// Import API Firebase versi modular
import { getFirestore, collection, getDocs, DocumentData } from 'firebase/firestore';
import { app } from './firebase';

// Konfigurasi Firebase Anda
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Inisialisasi Firebase
const db = getFirestore(app);  // Mendapatkan instance Firestore

// Fungsi untuk mengambil data wisata dari Firestore
export const getTourism = async (): Promise<DocumentData[]> => {
  try {
    // Mengakses koleksi 'tourism' di Firestore
    const tourismCollection = collection(db, 'tourism');
    const tourismSnapshot = await getDocs(tourismCollection);

    // Mendapatkan data dari dokumen dan mengubahnya menjadi array
    const tourismList = tourismSnapshot.docs.map(doc => doc.data());
    return tourismList;
  } catch (error) {
    console.error('Error fetching tourism data:', error);
    return []; // Kembalikan array kosong jika terjadi error
  }
};
