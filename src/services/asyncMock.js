function getData() {
    // 1. Generamos la promise
    // 2. Simulamos los retardos con setTimeout
    // 3. Resolvemos los productos con "resolve"
    // 4. Retornamos la Promise

    return new Promise((resolve, reject) => {
        const productos = [{
            title: "MOUSE GAMER CORSAIR SABRE PRO CHAMPION SERIES",
            id: 1,
            stock: 4,
            img: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mouse-gamer-corsair-sabre-pro-champion-series-0.jpg",
            precio: 32000
        },
        {
            title: "MOUSE LOGITECH G PRO X SUPERLIGHT WHITE",
            id: 2,
            stock: 5,
            img: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mouse-logitech-g-pro-x-superlight-white-910005941-0.jpg",
            precio: 77000
        },
        {
            title: "MOUSE LOGITECH G305 LIGHTSPEED WIRELESS WHITE",
            id: 3,
            stock: 5,
            img: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mouse-logitech-g305-lightspeed-wireless-white-910005290-0.jpg",
            precio: 24000
        },
        {
            title: "TECLADO HP HYPERX ALLOY ORIGINS CORE TKL BLUE SWITCH",
            id: 4,
            stock: 3,
            img: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/teclado-hp-hyperx-alloy-origins-core-tkl-blue-switch-english-0.jpg",
            precio: 58000
        },
        {
            title: "TECLADO MECANICO LOGITECH WIRELESS G715 TKL AURORA WHITE RGB",
            id: 5,
            stock: 4,
            img: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/teclado-mecanico-logitech-wireless-g715-tkl-aurora-white-rgb-0.jpg",
            precio: 143000
        },
        {
            title: "TECLADO EVGA Z20 RGB OPTICAL MECHANICAL GAMING",
            id: 6,
            stock: 5,
            img: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/teclado-evga-z20-rgb-optical-mechanical-gaming-0.jpg",
            precio: 46000
        },
        {
            title: "AURICULAR C/MIC WIRELESS LOGITECH G735 WHITE",
            id: 7,
            stock: 6,
            img: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/auricular-cmic-wireless-logitech-g735-white-981001082-0.jpg",
            precio: 134000
        },
        {
            title: "AURICULAR CORSAIR HS55 SURROUND 7.1 CARBON",
            id: 8,
            stock: 7,
            img: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/auricular-corsair-hs55-surround-71-carbon-0.jpg",
            precio: 37000
        },
        {
            title: "AURICULAR C/MICROFONO LOGITECH G335 MINT",
            id: 9,
            stock: 5,
            img: "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/auricular-cmicrofono-logitech-g335-mint-981001023-0.jpg",
            precio: 34000
        }];
    
        setTimeout (() =>{
            const date = new Date().toLocaleDateString;
            resolve({productos, date})
        },2000)
    })
}

export default {productos};