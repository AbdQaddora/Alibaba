import { nanoid } from "nanoid";

// images
import cloth1 from '../assets/images/cloth/1.png';
import cloth2 from '../assets/images/cloth/2.png';
import cloth3 from '../assets/images/cloth/3.png';
import cloth4 from '../assets/images/cloth/4.png';
import cloth5 from '../assets/images/cloth/5.png';
import cloth6 from '../assets/images/cloth/6.png';
import cloth7 from '../assets/images/cloth/7.png';

import book1 from '../assets/images/book/1.png';
import book2 from '../assets/images/book/2.png';
import book3 from '../assets/images/book/3.png';
import book4 from '../assets/images/book/4.png';
import book5 from '../assets/images/book/5.png';
import book6 from '../assets/images/book/6.png';
import book7 from '../assets/images/book/7.png';

import furniture1 from '../assets/images/furniture/1.png';
import furniture2 from '../assets/images/furniture/2.png';
import furniture3 from '../assets/images/furniture/3.png';
import furniture4 from '../assets/images/furniture/4.png';
import furniture5 from '../assets/images/furniture/5.png';
import furniture6 from '../assets/images/furniture/6.png';
import furniture7 from '../assets/images/furniture/7.png';

import tech1 from '../assets/images/tech/1.png';
import tech2 from '../assets/images/tech/2.png';
import tech3 from '../assets/images/tech/3.png';
import tech4 from '../assets/images/tech/4.png';
import tech5 from '../assets/images/tech/5.png';
import tech6 from '../assets/images/tech/6.png';
import tech7 from '../assets/images/tech/7.png';
import tech8 from '../assets/images/tech/8.png';
import tech9 from '../assets/images/tech/9.png';
import tech10 from '../assets/images/tech/10.png';
import tech11 from '../assets/images/tech/11.png';

import other1 from '../assets/images/other/1.png';
import other2 from '../assets/images/other/2.png';
import other3 from '../assets/images/other/3.png';
import other4 from '../assets/images/other/4.png';
import other5 from '../assets/images/other/5.png';
import other6 from '../assets/images/other/6.png';
import other7 from '../assets/images/other/7.png';
import other8 from '../assets/images/other/8.png';
import other9 from '../assets/images/other/9.png';
import other10 from '../assets/images/other/10.png';

import AE from '../assets/images/flags/AE.png';
import AU from '../assets/images/flags/AU.png';
import CN from '../assets/images/flags/CN.png';
import DK from '../assets/images/flags/DK.png';
import FR from '../assets/images/flags/FR.png';
import GB from '../assets/images/flags/GB.png';
import DE from '../assets/images/flags/DE.png';

const images = [
    cloth1, cloth2, cloth3, cloth4, cloth5, cloth6, cloth7,
    book1, book2, book3, book4, book5, book6, book7,
    furniture1, furniture2, furniture3, furniture4, furniture5, furniture6, furniture7,
    tech1, tech2, tech3, tech4, tech5, tech6, tech7, tech8, tech9, tech10, tech11,
    other1, other2, other3, other4, other5, other6, other7, other8, other9, other10
]

const getRandomImage = () => {
    return images[Math.floor(Math.random() * images.length)];
}

// names
const names = [
    "Canon Cmera EOS 2000, Black 10x zoom",
    "GoPro HERO6 4K Action Camera - Black",
    "Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle",
]

const getRandomName = () => {
    return names[Math.floor(Math.random() * names.length)];
}

// IDS
// const IDS = [...Array(images.length)].map(() => nanoid());
const IDS = [
    "Ymw8Jt6M3KAq4_9ZBI0Dh",
    "NVnQRlEhXacF9WuCO25Xs",
    "-A-zf-8QvyVSEGSMmZL14",
    "ivKw224klLTLGzTv6UNH7",
    "qZVsk9R5W0IAogjeqJZNo",
    "rxKXVra0UIvcq2mwbmZz3",
    "Wi1k-w3U35722YOpOKtRA",
    "qcJKN0PUpH4ohK2dz7Cq_",
    "uDiZwmpLANlF66rHqKZxH",
    "EOj76RtZ5sR3H0aHE_-Gi",
    "vdKswI5mZVOeB5zgBY2N5",
    "iWJasibLDHV0yV0Nmso27",
    "kICMXRAjjV3UroBX5UmLJ",
    "UZA9UgvOSiiiMJWxBE8_v",
    "01cPywO0QtzUi1S16b3eN",
    "d5ksAYbyVlQWM7sqv6XIc",
    "_j-CaqK0Aa8UweZanDDjn",
    "4jTV3TeN_xI6zI2FqSciX",
    "IedV3E6Eg_amEdfuOIxn8",
    "zLW6r69dsHTxV-0fYtnPF",
    "84fw-RMDVLsJogku8SRgG",
    "MbX8ljxyhwFIu4ct_6aIp",
    "2vofetIm28tM6LcQ5TVDp",
    "-5v-rK5cEFEy_Dkv2ABRg",
    "_EPbtN0uQ7SHTDE8QKmRP",
    "XJX2WB84xndAHxV-XpfxV",
    "zZMFbXYZze2U0DLvBpxSk",
    "UDarHaLSD20vXsi8NMNkH",
    "SuQ9i_k55Tb_Smw4ZMXU1",
    "L4T60S0DgvSYFhcFdcIuf",
    "zc3ETJhj3cvtNZklipcNw",
    "qF41oaYEa3i43i0eDbS8M",
    "MW68Wju2WtzVVnbX-MPJH",
    "vPc7MaGAxezdEk4YfDbu5",
    "zXvxoFLI-s2qLMYgPyfc6",
    "ieLX1CsuurSNR-QBC57mc",
    "_E-DxTN3e_4C2rGn3tSlr",
    "Np_LqqtDUhOlTsXCmqh9S",
    "kJ3f8G_AQtA_9hZHUi94F",
    "1hNL89VtbXgv8O_0hwkBS",
    "yRJA-C95o2XdbtxXJDgex",
    "LPNohFvEu7kPPQtaOf1U8"
]

const getRandomIds = (id) => {
    let random = IDS[Math.floor(Math.random() * IDS.length)];
    while (random === id) {
        random = IDS[Math.floor(Math.random() * IDS.length)];
    }
    return random;
}

const keywords = [
    "Huawei", "Pocco", "Lenovo", "Metallic", "Plastic cover", "8GB Ram",
    " Super power", "Large Memory", "Refurbished", "Brand new", "Old items"
]

const getRandomKeywords = () => {
    return keywords[Math.floor(Math.random() * keywords.length)];
}

const flags = [AE, AU, CN, DK, FR, GB, DE];


const getRandomFlag = () => {
    return flags[Math.floor(Math.random() * flags.length)];
}

const products = [...Array(IDS.length)].map((el, index) => {
    const price = Math.round(Math.random() * 1000);
    const id = IDS[index];
    const rate = Math.floor(Math.random() * 6);
    return {
        name: getRandomName(),
        id: id,
        mainImage: getRandomImage(),
        images: [...Array(Math.round(Math.random() * 6))].map(() => getRandomImage()),
        rate: rate,
        sold: Math.round(Math.random() * 1000),
        reviews: Math.round(Math.random() * 1000),
        price: price,
        supplier: {
            name: "Guanjoi Trading LLC",
            location: "Germany, Berlin",
            flag: getRandomFlag(),
            verified: true,
            shipper: "Worldwide shipping"
        },
        orders: Math.ceil(Math.random() * 250),
        shipping: ["FREE", Math.ceil(Math.random() * 250)][Math.floor(Math.random() * 2)],
        priceBeforeDisount: price + Math.round(Math.random() * 100),
        info: {
            Price: "Negotiable",
            Type: "Classic  shoes",
            Material: "Plastic material",
            Design: "Modern nice",
            Customization: "Customized logo and design custom packages",
            Protection: "Refund Policy",
            Warranty: "2 years full warranty"
        },
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `,
        descriptionTable: {
            Model: `#${nanoid()}`,
            Style: "Classic style",
            Certificate: "ISO-898921212",
            Size: "34mm x 450mm x 19mm",
            Memory: "36GB RAM",
        },
        features: [
            "Some great feature name here",
            "Lorem ipsum dolor sit amet, consectetur ",
            "Duis aute irure dolor in reprehenderit",
            "Some great feature name here",
        ],
        keywords: [...[...Array(Math.ceil(Math.random() * 6))].map(() => getRandomKeywords()), `rate_${rate}`],
        similar: [...Array(Math.ceil(Math.random() * 4))].map(() => getRandomIds(id)),
    }
});


export const getProductById = (id) => {
    return products.find(el => el.id === id);
}

export default products;