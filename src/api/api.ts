export interface ProductItemsConfig {
  id: string;
  category: string;
  title: string;
  sku: string;
  price: number;
  oldprice: number;
  description: string;
  waight: number;
  available: number;
  demention: string;
  score: number;
  color?: string;
  review: {
    name: string;
    score: number;
    text: string;
  }[];
}

export const productsList: ProductItemsConfig[] = [
  {
    id: "DIME039", //
    category: "furniture",
    title: "Belham Living Carlisle", // название
    sku: "DIME039", // какой то id
    price: 237.79, // новая цена
    oldprice: 279.75, // старая цена
    description:
      "Even small entryways become big-time storage spaces with the Carlisle Mini Mission Hall Tree. Crafted with ash veneers over engineered wood and particle board, this smartly sized hall tree is finished with mission-style details and a warm, welcoming oak tone. Two double hooks finished in antique bronze, a central full-length mirror, and a storage bench base make this piece the ultimate coat rack. Perch a few collectibles on the wide top shelf, and stash seasonal items in the flip-top bench below. Pine feet at the bottom are solid supports.", // описание
    waight: 40, // вес
    available: 5, // доступное количество
    demention: "24L x 18W x 72.5H in.", // размеры
    score: 4.7, // рейтинг
    review: [
      {
        name: "name",
        score: 5,
        text: "review"
      }
    ] // массив обектов отзыввов
  },
  {
    id: "DIME008", //
    category: "furniture",
    title: "Belham Living Grayson", // название
    sku: "DIME008", // какой то id
    price: 166.8, // новая цена
    oldprice: 185.64, // старая цена
    description:
      "There are so many bulky, overbuilt ottomans on the market that it's nice to see the Belham Living Grayson Tufted Coffee Table Ottoman and know that somewhere out there, somebody is really thinking about giving us what we need and leaving out the stuff we don't. The no-nonsense chic of this piece comes from the classic look of a plump button-tufted top over a simple and open frame of powder-coated square-tube metal. Powder-coated metal won't rust and is easier to clean than raw metal. The neutral linen fabric that covers the thick cushion is accommodating enough to fit right in with your existing home decor scheme. Complete your living room with the other items in Belham Living's Grayson collection.", // описание
    waight: 25, // вес
    available: 5, // доступное количество
    demention: "34L x 34W x 18H in.", // размеры
    color: "Linen",
    score: 4.7, // рейтинг
    review: [
      {
        name: "name",
        score: 5,
        text: "review"
      }
    ] // массив обектов отзыввов
  },
  {
    id: "DIME008", //
    category: "furniture",
    title: "Belham Living Grayson", // название
    sku: "DIME008", // какой то id
    price: 166.8, // новая цена
    oldprice: 185.64, // старая цена
    description:
      "There are so many bulky, overbuilt ottomans on the market that it's nice to see the Belham Living Grayson Tufted Coffee Table Ottoman and know that somewhere out there, somebody is really thinking about giving us what we need and leaving out the stuff we don't. The no-nonsense chic of this piece comes from the classic look of a plump button-tufted top over a simple and open frame of powder-coated square-tube metal. Powder-coated metal won't rust and is easier to clean than raw metal. The neutral linen fabric that covers the thick cushion is accommodating enough to fit right in with your existing home decor scheme. Complete your living room with the other items in Belham Living's Grayson collection.", // описание
    waight: 25, // вес
    available: 5, // доступное количество
    demention: "34L x 34W x 18H in.", // размеры
    color: "Linen",
    score: 4.7, // рейтинг
    review: [
      {
        name: "name",
        score: 5,
        text: "review"
      }
    ] // массив обектов отзыввов
  },
  {
    id: "DIME016", //
    category: "furniture",
    title: "Remmington", // название
    sku: "DIME016", // какой то id
    price: 120.9, // новая цена
    oldprice: 120.9, // старая цена
    description:
      "The Remmington Heavy Duty Bookcase - Cherry’ s clean lines will clean up your office, living room, or bedroom in more ways than one.Classically styled and crafted with durable MDF wood and veneers that resist warping, this trim, cherry - finished bookcase boasts sturdy reinforced shelves that hold up to 150 lbs.each.Choose from several heights with varying numbers of shelves– most feature adjustable shelves so you can store bulky and small items alike.Assembly required. ", // описание
    waight: 25, // вес
    available: 5, // доступное количество
    demention: "32W x 12D x 84H in.", // размеры
    color: "Cherry",
    score: 4.7, // рейтинг
    review: [
      {
        name: "name",
        score: 5,
        text: "review"
      }
    ] // массив обектов отзыввов
  },
  {
    id: "STIP018", //
    category: "furniture",
    title: "Remmington", // название
    sku: "STIP018", // какой то id
    price: 77.1, // новая цена
    oldprice: 77.1, // старая цена
    description:
      "The sophisticated 6 Cube Bookcase– Espresso is an attractive storage solution that makes any room feel complete.This modern - style bookcase features six spacious compartments with interior honeycomb construction and an MDF and melamine surface that 's easy to clean. The bookcase is lightweight and incredibly durable, and it balances its functionality with a distinctively modern look that makes it a fashionable addition to any decor. This particular unit is available in a deep espresso finish that serves as a rich accent to any decor and ensures your office space looks professional, yet inviting.", // описание
    waight: 25, // вес
    available: 5, // доступное количество
    demention: "43.1W x 11.6D x 29.6H in.", // размеры
    color: "Espresso",
    score: 4.7, // рейтинг
    review: [
      {
        name: "name",
        score: 5,
        text: "review"
      }
    ] // массив обектов отзыввов
  },
  {
    id: "STIP003", //
    category: "furniture",
    title: "Hudson", // название
    sku: "STIP003", // какой то id
    price: 103.3, // новая цена
    oldprice: 103.3, // старая цена
    description:
      "From the office and living area to the kids' room, the 6 Cube Bookcase – Gray solves all your storage and display needs. This contemporary bookcase features six spacious compartments with interior honeycomb construction and an MDF and melamine surface that's easy to clean. The bookcase is lightweight and incredibly durable, and it balances functionality with a distinctively modern look that makes it a fashionable addition to any decor. This particular unit is available in a neutral gray finish that complements its surroundings beautifully while still looking professional in the workplace.", // описание
    waight: 25, // вес
    available: 5, // доступное количество
    demention: "43.10L x 11.6D x 29.6H in.", // размеры
    color: "Gray",
    score: 4.7, // рейтинг
    review: [
      {
        name: "name",
        score: 5,
        text: "review"
      }
    ] // массив обектов отзыввов
  },
  {
    id: "RN1816", //
    category: "furniture",
    title: "Belham", // название
    sku: "RN1816", // какой то id
    price: 308.2, // новая цена
    oldprice: 308.2, // старая цена
    description:
      "Enhance your bedroom with the rustic, industrial beauty of the Belham Living Merced Platform Cart Bed. This Hayneedle exclusive stunner is available in your choice of available size. Made of iron, it has been hand painted to give it a realistic walnut finish with edgy nailhead trim. It sits on casters to reiterate the industrial vibe. A walnut-colored finish ensures this piece will suit any décor and bedding. It can function as a daybed or platform bed.", // описание
    waight: 25, // вес
    available: 5, // доступное количество
    demention: "62.38W x 84.5L x 12H in.", // размеры
    color: "Walnut",
    score: 4.5, // рейтинг
    review: [
      {
        name: "name",
        score: 5,
        text: "review"
      }
    ] // массив обектов отзыввов
  },
  {
    id: "WALM7658", //
    category: "lighting",
    title: "Wood", // название
    sku: "WALM7658", // какой то id
    price: 95.5, // новая цена
    oldprice: 120.0, // старая цена
    description:
      "For the moments when you look at your space and wonder what's missing, the Wood Floor Lamp with Velvet Shade by Drew Barrymore Flower Home provides the finishing touch with soft light and a simple yet statement-making design. A round base supports the slim wood lamp. It's topped with a round drum shade that's made of plush velvet fabric. Choose from the available shade colors to best coordinate with your living area or bedroom style. The on/off switch easily flips on to illuminate your side of the sofa, then off to darken the room. It's equipped with a 5-foot black and white chevron cord to reach nearly any corner of your home. For a cohesive look, pair this floor lamp with other items by Drew Barrymore Flower Home.", // описание
    waight: 5.7, // вес
    available: 5, // доступное количество
    demention: "16 diam. x 57.5H in.", // размеры
    color: "Brown",
    score: 4.5, // рейтинг
    review: [
      {
        name: "name",
        score: 5,
        text: "review"
      }
    ] // массив обектов отзыввов
  },
  {
    id: "ADO820", //
    category: "lighting",
    title: "Adesso", // название
    sku: "ADO820", // какой то id
    price: 135.0, // новая цена
    oldprice: 135.0, // старая цена
    description:
      "The gracefully arched Adesso Bowery Arc Floor Lamp is available in select finish options and grounded by a white marble base.The single fabric drum shade comes in a color to match.This floor lamp requires one 100 - watt incandescent bulb(not included).", // описание
    waight: 24, // вес
    available: 5, // доступное количество
    demention: "48W x 73.5H in.", // размеры
    color: "White & Cream",
    score: 4.5, // рейтинг
    review: [
      {
        name: "name",
        score: 5,
        text: "review"
      }
    ] // массив обектов отзыввов
  },
  {
    id: "CRYS1055", //
    category: "lighting",
    title: "Crystorama", // название
    sku: "CRYS1055", // какой то id
    price: 707.0, // новая цена
    oldprice: 707.0, // старая цена
    description:
      "Where other chandeliers are stuffy and stodgy, the Crystorama 7526-DT Shelby Chandelier - 28W in. - Distressed Twilight is stylish and sleek. It's all thanks to the distressed twilight finish and open scrollwork design - whether you're going for a transitional or traditional effect, this chandelier has it. Six lights sit atop the extended scrolls, and golden shadow hand cut crystals, which are darker than standard clear crystals, complete the look. You'll get 72 inches of chain and 144 inches of supply wire with this chandelier, and it requires six 60-watt candelabra bulbs (not included).", // описание
    waight: 24, // вес
    available: 5, // доступное количество
    demention: "28W x 30H in.", // размеры
    color: "White & Cream",
    score: 4.5, // рейтинг
    review: [
      {
        name: "name",
        score: 5,
        text: "review"
      }
    ] // массив обектов отзыввов
  },
  {
    id: "WTIF589", //
    category: "lighting",
    title: "Warehouse", // название
    sku: "WTIF589", // какой то id
    price: 257.11, // новая цена
    oldprice: 257.11, // старая цена
    description:
      "The eccentric Warehouse of Tiffany RL8049 Edwards Crystal Chandelier illuminates your abode stunningly.The cage - like experience of this chandelier features an antique bronze hue that surrounds a candle - like design.Cascading crystals accent this piece catching and reflecting its warm light.Bulb(s) not included.", // описание
    waight: 22, // вес
    available: 5, // доступное количество
    demention: "24 diam. x 24H in.", // размеры
    color: "Bronze",
    score: 4.0, // рейтинг
    review: [
      {
        name: "name",
        score: 5,
        text: "review"
      }
    ] // массив обектов отзыввов
  },
  {
    id: "ARTC204", //
    category: "lighting",
    title: "Warehouse", // название
    sku: "ARTC204", // какой то id
    price: 831.0, // новая цена
    oldprice: 831.0, // старая цена
    description:
      "The Artcraft Organic JA14028 Chandelier features a movable arm design that can be changed at a moment's notice to create a new look. This piece comes with multiple rods and is designed for use on both flat and sloped ceilings.", // описание
    waight: 20, // вес
    available: 5, // доступное количество
    demention: "40W x 40D x 46H in.", // размеры
    color: "Black",
    score: 4.0, // рейтинг
    review: [
      {
        name: "name",
        score: 5,
        text: "review"
      }
    ] // массив обектов отзыввов
  },
  {
    id: "MUR1217", //
    category: "lighting",
    title: "Feiss", // название
    sku: "MUR1217", // какой то id
    price: 498.5, // новая цена
    oldprice: 498.5, // старая цена
    description:
      "Formerly known as Murray Feiss, the Feiss company prides itself as the foremost designer and manufacturer of interior and exterior lighting and home decor in the industry. Founded three generations ago, Feiss features an award-winning in-house design team that includes industrial, graphic, and interior designers, all working in conjunction with engineers, draftsmen, color forecasters, and quality control experts to bring you only the finest in home lighting and decor solutions. ", // описание
    waight: 10.69, // вес
    available: 5, // доступное количество
    demention: "24.75 diam. x 20H in.", // размеры
    color: "Bronze",
    score: 4.0, // рейтинг
    review: [
      {
        name: "name",
        score: 5,
        text: "review"
      }
    ] // массив обектов отзыввов
  },
  {
    id: "HMS769", //
    category: "lighting",
    title: "Home", // название
    sku: "HMS769", // какой то id
    price: 823.49, // новая цена
    oldprice: 823.49, // старая цена
    description:
      "Not only does the Home Styles Stone Harbor Mosaic Outdoor Dining Set create a welcoming al fresco dining space, it also ensures your outdoor furniture stands out from the rest with its unique look and exquisite beauty. With its timeless charm and upscale appeal, this set, which includes a mosaic dining table and choice of four Cambria, Laguna, or Newport dining chairs, makes a great addition, not only to your al fresco dining area, but to your sunroom or indoor dining space as well.", // описание
    waight: 60, // вес
    available: 5, // доступное количество
    demention: "23.25W x 22.25D x 36H in.", // размеры
    color: "Brown",
    score: 4.0, // рейтинг
    review: [
      {
        name: "name",
        score: 5,
        text: "review"
      }
    ] // массив обектов отзыввов
  },
  {
    id: "HMS769", //
    category: "lighting",
    title: "Belham", // название
    sku: "HMS769", // какой то id
    price: 890.8, // новая цена
    oldprice: 890.8, // старая цена
    description:
      "From a weekend patio brunch with family to a cozy outdoor dinner party with friends, the Belham Living Boca Vista Outdoor Wood Dining Set is the perfect gathering spot for your alfresco festivities. Each piece in this set is constructed of Forest Stewardship Council (FSC) eucalyptus wood, which is harvested from a forest or managed reforestation area in a way that’s ecologically appropriate, socially beneficial, and economically practicable.", // описание
    waight: 80, // вес
    available: 5, // доступное количество
    demention: "76W x 39D x 30H in.", // размеры
    color: "Brown",
    score: 4.0, // рейтинг
    review: [
      {
        name: "name",
        score: 5,
        text: "review"
      }
    ] // массив обектов отзыввов
  },
  {
    id: "HONG064", //
    category: "lighting",
    title: "Coral Coast", // название
    sku: "HONG064", // какой то id
    price: 251.6, // новая цена
    oldprice: 251.6, // старая цена
    description:
      "Spruce up your outdoor bar or dining area with the Coral Coast Brisbane All-Weather Wicker Balcony Bar Stool - Set of 2. Sturdy resin wicker in a dark brown finish creates a durable seat that's sure to last for years to come, while the intricately-woven seat back and convenient stackable design create the perfect marriage of style and function. Unlike traditional wicker, all-weather resin wicker is UV, mold and water-resistant for years of outdoor use without fading, warping, or splintering. For easy cleaning, this durable plastic and metal material need only be wiped down with a damp cloth or sprayed off with a garden hose.", // описание
    waight: 25, // вес
    available: 5, // доступное количество
    demention: "18.11W x 20.66D x 40.55H in.", // размеры
    color: "Brown",
    score: 4.0, // рейтинг
    review: [
      {
        name: "name",
        score: 5,
        text: "review"
      }
    ] // массив обектов отзыввов
  },
  {
    id: "PW303", //
    category: "lighting",
    title: "Coral Coast", // название
    sku: "PW303", // какой то id
    price: 422.99, // новая цена
    oldprice: 422.99, // старая цена
    description:
      "The Polywood Vineyard Recycled Plastic 5 ft.Porch Swing is perfect for your taste.We tend to believe that a front porch just isn 't complete until there's a good, sturdy porch swing hanging in its proper place.If you 're looking to buy a porch swing, you may as well go with one that offers comfort, lasting quality, and no maintenance. This recycled plastic is top-of-the-line. It's not the cheap stuff you could buy at a sidewalk sale at your corner drugstore.You 'll never need to do anything to this swing except sit back, relax, and start swinging. The seat is contoured and the backrest is slightly reclined for comfort. This product is manufactured with 90% recycled plastic. Swing dimensions: 60.5L x 24W x 23.25H inches. Includes 5 foot hanging chains.", // описание
    waight: 55, // вес
    available: 5, // доступное количество
    demention: "60.5L x 24W x 23.25H in.", // размеры
    color: "white",
    score: 4.0, // рейтинг
    review: [
      {
        name: "name",
        score: 5,
        text: "review"
      }
    ] // массив обектов отзыввов
  },
  {
    id: "HWD039", //
    category: "lighting",
    title: "Coral Coast", // название
    sku: "HWD039", // какой то id
    price: 440.99, // новая цена
    oldprice: 440.99, // старая цена
    description:
      "The highwood® Recycled Plastic Lehigh Porch Swing has the classic good looks of a traditional porch swing yet is made of maintenance-free, eco-friendly recycled plastic. It has the look of natural wood, comes in a variety of color options, and includes stainless steel hardware plus 9 ft. hanging chains. Choose from the available size options.", // описание
    waight: 38, // вес
    available: 5, // доступное количество
    demention: "52L x 24W x 22H in.", // размеры
    color: "white",
    score: 4.0, // рейтинг
    review: [
      {
        name: "name",
        score: 5,
        text: "review"
      }
    ] // массив обектов отзыввов
  }
];
