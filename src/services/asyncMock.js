const productos = [{
    title: "MOUSE GAMER CORSAIR SABRE PRO CHAMPION SERIES",
    id: 1,
    stock: 4,
    img: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mouse-gamer-corsair-sabre-pro-champion-series-0.jpg",
    precio: 32000,
    category: "mouse"
},
{
    title: "MOUSE LOGITECH G PRO X SUPERLIGHT WHITE",
    id: 2,
    stock: 5,
    img: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mouse-logitech-g-pro-x-superlight-white-910005941-0.jpg",
    precio: 77000,
    category: "mouse"
},
{
    title: "MOUSE LOGITECH G305 LIGHTSPEED WIRELESS WHITE",
    id: 3,
    stock: 5,
    img: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mouse-logitech-g305-lightspeed-wireless-white-910005290-0.jpg",
    precio: 24000,
    category: "mouse"
},
{
    title: "TECLADO HP HYPERX ALLOY ORIGINS CORE TKL BLUE SWITCH",
    id: 4,
    stock: 3,
    img: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/teclado-hp-hyperx-alloy-origins-core-tkl-blue-switch-english-0.jpg",
    precio: 58000,
    category: "teclados"
},
{
    title: "TECLADO MECANICO LOGITECH WIRELESS G715 TKL AURORA WHITE RGB",
    id: 5,
    stock: 4,
    img: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/teclado-mecanico-logitech-wireless-g715-tkl-aurora-white-rgb-0.jpg",
    precio: 143000,
    category: "teclados"
},
{
    title: "TECLADO EVGA Z20 RGB OPTICAL MECHANICAL GAMING",
    id: 6,
    stock: 5,
    img: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/teclado-evga-z20-rgb-optical-mechanical-gaming-0.jpg",
    precio: 46000,
    category: "teclados"
},
{
    title: "AURICULAR C/MIC WIRELESS LOGITECH G735 WHITE",
    id: 7,
    stock: 6,
    img: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/auricular-cmic-wireless-logitech-g735-white-981001082-0.jpg",
    precio: 134000,
    category: "auriculares"
},
{
    title: "AURICULAR CORSAIR HS55 SURROUND 7.1 CARBON",
    id: 8,
    stock: 7,
    img: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/auricular-corsair-hs55-surround-71-carbon-0.jpg",
    precio: 37000,
    category: "auriculares"
},
{
    title: "AURICULAR C/MICROFONO LOGITECH G335 MINT",
    id: 9,
    stock: 5,
    img: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/auricular-cmicrofono-logitech-g335-mint-981001023-0.jpg",
    precio: 34000,
    category: "auriculares"
}];

function getData() {

    return new Promise((resolve, reject) => {

        const productos = [{
            title: "MOUSE GAMER CORSAIR SABRE PRO CHAMPION SERIES",
            id: 1,
            stock: 4,
            img: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mouse-gamer-corsair-sabre-pro-champion-series-0.jpg",
            precio: 32000,
            category: "mouse"
        },
        {
            title: "MOUSE LOGITECH G PRO X SUPERLIGHT WHITE",
            id: 2,
            stock: 5,
            img: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mouse-logitech-g-pro-x-superlight-white-910005941-0.jpg",
            precio: 77000,
            category: "mouse"
        },
        {
            title: "MOUSE LOGITECH G305 LIGHTSPEED WIRELESS WHITE",
            id: 3,
            stock: 5,
            img: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mouse-logitech-g305-lightspeed-wireless-white-910005290-0.jpg",
            precio: 24000,
            category: "mouse"
        },
        {
            title: "TECLADO HP HYPERX ALLOY ORIGINS CORE TKL BLUE SWITCH",
            id: 4,
            stock: 3,
            img: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/teclado-hp-hyperx-alloy-origins-core-tkl-blue-switch-english-0.jpg",
            precio: 58000,
            category: "teclados"
        },
        {
            title: "TECLADO MECANICO LOGITECH WIRELESS G715 TKL AURORA WHITE RGB",
            id: 5,
            stock: 4,
            img: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/teclado-mecanico-logitech-wireless-g715-tkl-aurora-white-rgb-0.jpg",
            precio: 143000,
            category: "teclados"
        },
        {
            title: "TECLADO EVGA Z20 RGB OPTICAL MECHANICAL GAMING",
            id: 6,
            stock: 5,
            img: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/teclado-evga-z20-rgb-optical-mechanical-gaming-0.jpg",
            precio: 46000,
            category: "teclados"
        },
        {
            title: "AURICULAR C/MIC WIRELESS LOGITECH G735 WHITE",
            id: 7,
            stock: 6,
            img: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/auricular-cmic-wireless-logitech-g735-white-981001082-0.jpg",
            precio: 134000,
            category: "auriculares"
        },
        {
            title: "AURICULAR CORSAIR HS55 SURROUND 7.1 CARBON",
            id: 8,
            stock: 7,
            img: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/auricular-corsair-hs55-surround-71-carbon-0.jpg",
            precio: 37000,
            category: "auriculares"
        },
        {
            title: "AURICULAR C/MICROFONO LOGITECH G335 MINT",
            id: 9,
            stock: 5,
            img: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/auricular-cmicrofono-logitech-g335-mint-981001023-0.jpg",
            precio: 34000,
            category: "auriculares"
        }];

        setTimeout (() =>{
            resolve({productos})
        },2000)
    })
}

export function getProductData(idURL) {
    return new Promise((resolve, reject) => {
      const productRequested = productos.find(
        (item) => item.id === Number(idURL)
      );
  
      setTimeout(() => {
        resolve(productRequested);
      }, 2000);
    });
  }
    


export function getCategoryData(categoryURL){
    return new Promise ((resolve, reject) => {
        const categoryRequested = productos.filter( 
        (item) => {return item.category.toLowerCase() === categoryURL.toLowerCase()
        });
        
        setTimeout (() =>{
            resolve({categoryRequested})
        },2000)
    })
}

export default getData;