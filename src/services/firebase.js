import { initializeApp } from "firebase/app";
import { 
    getFirestore, 
    collection, 
    getDocs, 
    doc, 
    getDoc,
    where,
    query,
    writeBatch,
    addDoc
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAMMcjyZFgCg6WZAscx1LVc7jlOA-4ftyA",
  authDomain: "prigsjs.firebaseapp.com",
  projectId: "prigsjs",
  storageBucket: "prigsjs.appspot.com",
  messagingSenderId: "991000177537",
  appId: "1:991000177537:web:ebcbce282e8a456ba49680"
};

const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase)

async function getData(){
  const productsRef = collection(db, "productos")
  const documentsSnapshot = await getDocs(productsRef)
  const documents = documentsSnapshot.docs;
  const docsData = documents.map ((item) => {return { ...item.data(), id: item.id }}
  );
  return docsData;
  }
  
  async function getProductData(id) {
    const docRef = doc(db, "productos", id);
    const docSnapshot = await getDoc(docRef);
  
    if (docSnapshot.exists()) {
      return { ...docSnapshot.data(), id: docSnapshot.id };
    } else {
      throw new Error("No se encontró el producto.");
    }
  }
  
async function getCategoryData(categoryID){
    const productsRef = collection(db, "productos");
    const q = query(productsRef, where("category" ,"==", categoryID));
    const documentsSnapshot = await getDocs(q)
    const documents = documentsSnapshot.docs;
    
    return documents.map((item) => ({ ...item.data(), id: item.id }));
}

async function createOrder(orderData){
    const docRef = await addDoc(collection(db,"orders"), orderData);
  
    return docRef.id;
  } 

async function getOrder(id){
    const docRef = doc(db, "orders",id);
    const docSnapshot = await getDoc(docRef);

    return { ...docSnapshot.data(), id: docSnapshot.id };
}

export { getData, getProductData, getCategoryData, getOrder, createOrder };