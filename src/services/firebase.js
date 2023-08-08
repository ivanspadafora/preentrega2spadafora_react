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
    addDoc,
    setDoc
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
  

async function getCategoryData(){
    const productsRef = collection(db, "productos");
    const q = query(productsRef, where("category" ,"in", ["mouse", "teclados", "auriculares"]));
    const documentsSnapshot = await getDocs(q)
    
    const documents = documentsSnapshot.docs;
    
    return documents.map((item) => ({ ...item.data(), id: item.id }));
}

async function createOrder(orderData){
    const collectionRef = collection(db, "orders")
    const docCreated = await addDoc(collectionRef, orderData)
  
    return(docCreated.id)
  }

async function getOrder(id){
    const docRef = doc(db, "orders",id);
    const docSnapshot = await getDoc(docRef);

    return { ...docSnapshot.data(), id: docSnapshot.id };
}

async function exportProducts(){
    const productos = [{
        title: "MOUSE GAMER CORSAIR SABRE PRO CHAMPION SERIES",
        id: 1,
        stock: 4,
        img: "https://i.postimg.cc/vZkZW3Cv/prod1.jpg",
        precio: 32000,
        category: "mouse"
    },
    {
        title: "MOUSE LOGITECH G PRO X SUPERLIGHT WHITE",
        id: 2,
        stock: 5,
        img: "https://i.postimg.cc/YSFq8QHB/prod2.jpg",
        precio: 77000,
        category: "mouse"
    },
    {
        title: "MOUSE LOGITECH G305 LIGHTSPEED WIRELESS WHITE",
        id: 3,
        stock: 5,
        img: "https://i.postimg.cc/BQwS0mZG/prod3.jpg",
        precio: 24000,
        category: "mouse"
    },
    {
        title: "TECLADO HP HYPERX ALLOY ORIGINS CORE TKL BLUE SWITCH",
        id: 4,
        stock: 3,
        img: "https://i.postimg.cc/ZRhYQ0bB/prod4.jpg",
        precio: 58000,
        category: "teclados"
    },
    {
        title: "TECLADO MECANICO LOGITECH WIRELESS G715 TKL AURORA WHITE RGB",
        id: 5,
        stock: 4,
        img: "https://i.postimg.cc/G2J3nrtM/prod5.jpg",
        precio: 143000,
        category: "teclados"
    },
    {
        title: "TECLADO EVGA Z20 RGB OPTICAL MECHANICAL GAMING",
        id: 6,
        stock: 5,
        img: "https://i.postimg.cc/Y2R2XpJ0/prod6.jpg",
        precio: 46000,
        category: "teclados"
    },
    {
        title: "AURICULAR C/MIC WIRELESS LOGITECH G735 WHITE",
        id: 7,
        stock: 6,
        img: "https://i.postimg.cc/Kj0Z4NnB/prod7.jpg",
        precio: 134000,
        category: "auriculares"
    },
    {
        title: "AURICULAR CORSAIR HS55 SURROUND 7.1 CARBON",
        id: 8,
        stock: 7,
        img: "https://i.postimg.cc/QC88XPWj/prod8.jpg",
        precio: 37000,
        category: "auriculares"
    },
    {
        title: "AURICULAR C/MICROFONO LOGITECH G335 MINT",
        id: 9,
        stock: 5,
        img: "https://i.postimg.cc/qM7JSPTL/prod9.jpg",
        precio: 34000,
        category: "auriculares"
    }];
}

async function exportProductsWithBatch(){
    const productos = [{
        title: "MOUSE GAMER CORSAIR SABRE PRO CHAMPION SERIES",
        id: 1,
        stock: 4,
        img: "https://i.postimg.cc/vZkZW3Cv/prod1.jpg",
        precio: 32000,
        category: "mouse"
    },
    {
        title: "MOUSE LOGITECH G PRO X SUPERLIGHT WHITE",
        id: 2,
        stock: 5,
        img: "https://i.postimg.cc/YSFq8QHB/prod2.jpg",
        precio: 77000,
        category: "mouse"
    },
    {
        title: "MOUSE LOGITECH G305 LIGHTSPEED WIRELESS WHITE",
        id: 3,
        stock: 5,
        img: "https://i.postimg.cc/BQwS0mZG/prod3.jpg",
        precio: 24000,
        category: "mouse"
    },
    {
        title: "TECLADO HP HYPERX ALLOY ORIGINS CORE TKL BLUE SWITCH",
        id: 4,
        stock: 3,
        img: "https://i.postimg.cc/ZRhYQ0bB/prod4.jpg",
        precio: 58000,
        category: "teclados"
    },
    {
        title: "TECLADO MECANICO LOGITECH WIRELESS G715 TKL AURORA WHITE RGB",
        id: 5,
        stock: 4,
        img: "https://i.postimg.cc/G2J3nrtM/prod5.jpg",
        precio: 143000,
        category: "teclados"
    },
    {
        title: "TECLADO EVGA Z20 RGB OPTICAL MECHANICAL GAMING",
        id: 6,
        stock: 5,
        img: "https://i.postimg.cc/Y2R2XpJ0/prod6.jpg",
        precio: 46000,
        category: "teclados"
    },
    {
        title: "AURICULAR C/MIC WIRELESS LOGITECH G735 WHITE",
        id: 7,
        stock: 6,
        img: "https://i.postimg.cc/Kj0Z4NnB/prod7.jpg",
        precio: 134000,
        category: "auriculares"
    },
    {
        title: "AURICULAR CORSAIR HS55 SURROUND 7.1 CARBON",
        id: 8,
        stock: 7,
        img: "https://i.postimg.cc/QC88XPWj/prod8.jpg",
        precio: 37000,
        category: "auriculares"
    },
    {
        title: "AURICULAR C/MICROFONO LOGITECH G335 MINT",
        id: 9,
        stock: 5,
        img: "https://i.postimg.cc/qM7JSPTL/prod9.jpg",
        precio: 34000,
        category: "auriculares"
    }];

const batch = writeBatch(db);

productos.forEach( producto => {
    const newId = producto.id
    delete producto.id;
    const newDoc = doc(db, "products", `1${newId}`)
    batch.set(newDoc, producto);    
  })

  const data = await batch.commit();
}

export { getData, getProductData, getCategoryData, getOrder, createOrder, exportProducts, exportProductsWithBatch };