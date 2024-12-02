import { collection, getDocs } from "firebase/firestore";
import { db } from "@/libs/firebase";

async function getTours() {
  const querySnapshot = await getDocs(collection(db, "tours"));
  const tours = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  console.log(tours);
}
