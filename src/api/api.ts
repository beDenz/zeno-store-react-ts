/*
interface ProductItemsConfig {
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

const productsList: ProductItemsConfig[] = [
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
    score: 4, // рейтинг
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
    category: "outdoor",
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
    category: "outdoor",
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
    category: "outdoor",
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
    category: "outdoor",
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
    category: "outdoor",
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
  },
  {
    id: "RENW2088", //
    category: "lighting",
    title: "Ren-Wil Clemente", // название
    sku: "RENW2088", // какой то id
    price: 653.64, // новая цена
    oldprice: 768.99, // старая цена
    description:
      "Enhance your lighting décor with the Ren-Wil Clemente LPC4095 Pendant Light. This unconventional pendant light features a crisscross pattern of six metal canes suspended from a single stem. Each baton is capped with a silver shade and bulb (not included).", // описание
    waight: 10, // вес
    available: 5, // доступное количество
    demention: "40 diam. x 36H in.", // размеры
    color: "black",
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
    id: "ELEG134", //
    category: "lighting",
    title: "Toureg 8000", // название
    sku: "ELEG134", // какой то id
    price: 130.0, // новая цена
    oldprice: 130.0, // старая цена
    description:
      "Light up bedrooms and hallways in contemporary elegance with this Elegant Furniture & Lighting Toureg 8000 Flush Mount Light. Its overscaled, faceted crystal spheres come in a variety of styles. Finish and size options make this flush mounted light yours. It requires 40-watt candelabra base bulbs (not included).", // описание
    waight: 10, // вес
    available: 5, // доступное количество
    demention: "19L x 19W x 14H in.", // размеры
    color: "cristal",
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
    id: "PROR1390", //
    category: "lighting",
    title: "Progress Lighting Mingle", // название
    sku: "PROR1390", // какой то id
    price: 173.5, // новая цена
    oldprice: 173.5, // старая цена
    description:
      "The square and circle dot design on the Progress Lighting Mingle Square/Circle Pattern LED Flush Mount Light's steel frame will add interest to your ceiling. The pattern of the frame allows the drum shaped shade to peek through. The frame is finished in brushed nickel and the shade is an off-white. Choose from the available sizes to find the flush mount light that fits into your space. This light fixture requires one 17-watt LED bulb that is included.", // описание
    waight: 10, // вес
    available: 5, // доступное количество
    demention: "14 diam. x 5.75H in.", // размеры
    color: "cristal",
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
    id: "KOUB066", //
    category: "lighting",
    title: "Kouboo LLC Bamboori", // название
    sku: "KOUB066", // какой то id
    price: 145.0, // новая цена
    oldprice: 145.0, // старая цена
    description:
      "The outer walls of the Kouboo LLC Bamboori 1050077 Pendant Light are crafted from natural fibers in an open design that allows you to see inside. This pendant light's core features a tightly woven column that stretches from top to bottom. Hand-crafted from a combination of buri and bamboo, this pendant light lends natural charm to your home. A single bulb at the center of the light radiates a warm glow to give your space a soothing and casual touch.", // описание
    waight: 10, // вес
    available: 5, // доступное количество
    demention: "26 diam. x 15H in.", // размеры
    color: "cristal",
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
    id: "NN681", //
    category: "decor",
    title: "Mini Cedar Pine Tree", // название
    sku: "NN681", // какой то id
    price: 38.36, // новая цена
    oldprice: 38.36, // старая цена
    description:
      "Capture the spirit of the forest with this remarkable mini cedar pine tree. This diminutive 2 foot tree will whisk owners to a more natural state of mind with vibrant green colors and delicate foliage. It's ideal for display anywhere, indoors or outdoors, home, garden, or even the office. Makes a great gift too.", // описание
    waight: 10, // вес
    available: 5, // доступное количество
    demention: "13W x 11D x 24H in. ", // размеры
    color: "Black Green",
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
    id: "BSHD3381", //
    category: "decor",
    title: "Mini Cedar Pine Tree", // название
    sku: "BSHD3381", // какой то id
    price: 157.46, // новая цена
    oldprice: 195.3, // старая цена
    description:
      "If you find yourself stopping to admire the Best Selling Home Elaina Circular Wall Mirror - 36 diam. in., you may as well check yourself out, too. This contemporary design features a frame of interlocking glass wedges for an elegant, yet playful look. Hang in the living room to create some extra depth or as a focal point in the entryway.", // описание
    waight: 10, // вес
    available: 5, // доступное количество
    demention: "36W x 2.8D x 36H in.", // размеры
    color: "Black Green",
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
    id: "NN684", //
    category: "decor",
    title: "Double Boxwood Ball Topiary", // название
    sku: "NN684", // какой то id
    price: 90.87, // новая цена
    oldprice: 90.87, // старая цена
    description:
      "Man has been taking trimmers and clippers to Boxwoods for years. That's because this lovely shrub is one of nature's most hardy specimens, and does very well when shaped. This classic \"double ball\" Topiary captures the elegance of curving foliage, while retaining the lovely green color that makes the boxwood such a favorite. Plus, you'll never have to re-trim it! Comes complete with a pot.", // описание
    waight: 10, // вес
    available: 5, // доступное количество
    demention: "13 diam. x 35H in.", // размеры
    color: "Black Green",
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
    id: "RIZ2499", //
    category: "decor",
    title: "Rizzy Home Pillow", // название
    sku: "RIZ2499", // какой то id
    price: 27.7, // новая цена
    oldprice: 27.7, // старая цена
    description:
      "      Instantly add a touch of Halloween to your home with the Rizzy Home Witch Cotton Decorative Pillow’s witch design. This spooky accent pillow features a springy fill of soft polyester and a durable cotton cover. A zip closure at the side lets you slip off the cover for spot cleaning when needed.", // описание
    waight: 10, // вес
    available: 5, // доступное количество
    demention: "20L x 20W in.", // размеры
    color: "White",
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
    id: "SYR5460", //
    category: "decor",
    title: "Surya Pillow", // название
    sku: "SYR5460", // какой то id
    price: 65.0, // новая цена
    oldprice: 65.0, // старая цена
    description:
      'Treat your living room, deck, or patio to the Surya Boo Trick or Treat Outdoor Pillow. This pillow offers a "couldn\'t be easier" way to get ready for Halloween. Several fashionable Halloween colors are offered (subject to availability), and the message comes through loud and clear in a spooky font: "Trick or Treat!" Use this cushy, fluffy pillow indoors or outside. Spot clean. Made in the USA.', // описание
    waight: 10, // вес
    available: 5, // доступное количество
    demention: "20W x 4D x 20H in.", // размеры
    color: "White",
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
    id: "SYR4987", //
    category: "decor",
    title: "Surya Blooming Pillow", // название
    sku: "SYR4987", // какой то id
    price: 29.54, // новая цена
    oldprice: 29.54, // старая цена
    description:
      "A stylized floral pattern in smart color options make this Surya Blooming Buds Decorative Pillow a modern choice for dressing your bed or sofa. Choose from select, premium fill options, too.", // описание
    waight: 10, // вес
    available: 5, // доступное количество
    demention: "20L x 20W x 5H in.", // размеры
    color: "White",
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
    id: "WALM6907", //
    category: "decor",
    title: "MoDRN Velvet", // название
    sku: "WALM6907", // какой то id
    price: 29.54, // новая цена
    oldprice: 29.54, // старая цена
    description:
      "The MoDRN Velvet Round Decorative Floor Pillow perfectly combines elements of modern and retro design. This plush, oversized circular floor pillow features a stunning look and soft texture. A removable cover in easy-care polyester makes spot cleaning a breeze, and a poly fill ensures a plump, full shape.", // описание
    waight: 10, // вес
    available: 5, // доступное количество
    demention: "24 diam. in.", // размеры
    color: "White",
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
    id: "LL276", //
    category: "decor",
    title: "River City Clocks", // название
    sku: "LL276", // какой то id
    price: 29.54, // новая цена
    oldprice: 29.54, // старая цена
    description:
      "Introduce impeccable craftsmanship into your home with the River City Clocks Eight Day Musical Cuckoo Clock with Moving Barmaid Beer Drinkers and Waterwheel. This heirloom piece is hand-carved by master craftsmen in the Black Forest of Germany and features all-brass mechanical movements. The moving pieces include a barmaid, beer drinkers, and a moving waterwheel. It cuckoos every half hour and at the top of the hour, plus alternates between playing Edelweiss and The Happy Wonderer.", // описание
    waight: 10, // вес
    available: 5, // доступное количество
    demention: "13W x 7D x 14H in.", // размеры
    color: "White",
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
    id: "WALM7472", //
    category: "furniture",
    title: "MoDRN Glam Marion Desk", // название
    sku: "WALM7472", // какой то id
    price: 329.0, // новая цена
    oldprice: 329.0, // старая цена
    description:
      "The perfect antidote to that dreaded mid-afternoon work slump? Try the MoDRN Glam Marion Desk, whose gleaming, brass-plated metal shines even more brightly against the wood's rich walnut veneers. Its fully finished back and sides allow for versatile placement anywhere in your home office. Storage drawers (with fully finished interiors) rest on smooth ball-bearing slides, giving you easy access to your important files and office supplies. The legs, arranged in an eye-catching, Art Deco-inspired shape, come with plastic glides to protect your floors from unsightly scratches and scrapes. For care, wipe the desktop clean with a damp cloth - no harsh cleaners or chemicals required.", // описание
    waight: 10, // вес
    available: 5, // доступное количество
    demention: "52W x 24D x 29H in.", // размеры
    color: "White",
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
    id: "BHI1318", //
    category: "furniture",
    title: "MoDRN Glam Marion Desk", // название
    sku: "BHI1318", // какой то id
    price: 343.76, // новая цена
    oldprice: 343.76, // старая цена
    description:
      "Whether it's placed in a corner or in the middle of a room, the Bush Buena Vista 60 in. L-Shaped Desk - Madison Cherry will look right at home. With plenty of workspace you'll be able to spread your work out and still have room for a computer, printer, and other office equipment.", // описание
    waight: 10, // вес
    available: 5, // доступное количество
    demention: "59.49W x 59.49D x 66.18H in.", // размеры
    color: "White",
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
    id: "MEIY053", //
    category: "chair",
    title: "Belham Chair", // название
    sku: "MEIY053", // какой то id
    price: 343.76, // новая цена
    oldprice: 343.76, // старая цена
    description:
      "Whether it's placed in a corner or in the middle of a room, the Bush Buena Vista 60 in. L-Shaped Desk - Madison Cherry will look right at home. With plenty of workspace you'll be able to spread your work out and still have room for a computer, printer, and other office equipment.", // описание
    waight: 10, // вес
    available: 5, // доступное количество
    demention: "59.49W x 59.49D x 66.18H in.", // размеры
    color: "Green",
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
    id: "ALZ1176", //
    category: "chair",
    title: "Belham Living Burton", // название
    sku: "ALZ1176", // какой то id
    price: 263.0, // новая цена
    oldprice: 263.0, // старая цена
    description:
      "With its slatted sides and flat armrests, the Belham Living Burton Mission Arm Chair was clearly inspired by classic Craftsman furniture. This arm chair boasts a quality wood frame in a handsome oak finish. Its thick seat and back cushions are upholstered in dark brown bonded leather for comfort and style.", // описание
    waight: 10, // вес
    available: 5, // доступное количество
    demention: "32.75W x 33.75D x 34.50H in.", // размеры
    color: "Green",
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
    id: "BOR039", //
    category: "chair",
    title: "Boraam Magellan", // название
    sku: "BOR039", // какой то id
    price: 92.4, // новая цена
    oldprice: 92.4, // старая цена
    description:
      "Sure to be the seat you'll always want to take, the Boraam 29-Inch Magellan Backless Swivel Bar Stool - Brandy features a versatile backless design that's ideal for any room in the house with a bar-height table or counter. If sitting still isn't your thing, you're in luck: the Boraam's swiveling seat is made with a durable steel mechanism that's designed to last. Speaking of made-to-last, this bar stool is constructed from solid hardwood with a welcoming, warm brandy finish. The square legs slightly taper at the bottom for a tasteful touch, and the full footrest adds stability ... and a home for tired feet. For your comfort and peace of mind, the seat cushion is made of fire-resistant foam upholstered in faux leather. You can easily slide this bar stool out the way when it's not in use. Measures: 18W x 29H inches. Some assembly requried.", // описание
    waight: 10, // вес
    available: 5, // доступное количество
    demention: "18W x 18D x 29H in.", // размеры
    color: "Green",
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
    id: "BOR010", //
    category: "chair",
    title: "Boraam Palmetto", // название
    sku: "BOR010", // какой то id
    price: 92.4, // новая цена
    oldprice: 92.4, // старая цена
    description:
      "Ideal for a bar or dining area, the Boraam 29-Inch Palmetto Swivel Bar Stool attracts attention. This ultra-stylish and comfortable bar stool is the perfect height for tall countertops. Built of solid hardwood, the Palmetto Swivel Bar Stool features a fully-swiveling seat covered in lush black vinyl for a contemporary look. Fine construction and craftsmanship ensures that this stool will withstand daily use and remain a favorite part of your seating arrangements. Some assembly is required", // описание
    waight: 10, // вес
    available: 5, // доступное количество
    demention: "18W x 18D x 29H in.", // размеры
    color: "Cherry",
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
    id: "DWLL292", //
    category: "chair",
    title: "Allegro Side Chair", // название
    sku: "DWLL292", // какой то id
    price: 92.4, // новая цена
    oldprice: 92.4, // старая цена
    description:
      "Side Chair Description Add interest and color to your decor with the Allegro Side Chair - Gray/Yellow Hex. Its kiln-dried hardwood frame is made to last and finished in espresso to create a warm, inviting look. Featuring a modern hex pattern in yellow, gray, and white, this chair is the perfect accent piece whether you place it in your living room, study, foyer, or bedroom. Its streamlined look and transitional style complements a wide variety of decors while the high-density foam seating ensures you’ll be comfortable whether you’re reading, watching TV, playing games, or spending time with friends. Some minor assembly is required.", // описание
    waight: 10, // вес
    available: 5, // доступное количество
    demention: "18W x 18D x 29H in.", // размеры
    color: "Cherry",
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
    id: "KINF020", //
    category: "chair",
    title: "Tufted Storage Ottoman", // название
    sku: "KINF020", // какой то id
    price: 67.15, // новая цена
    oldprice: 67.15, // старая цена
    description:
      "The velvety Kinfine USA Large Round Button-tufted Storage Ottoman looks even better in person. From the solid wood legs to the piping trim and button-tufted top, you'll be impressed with the attention to detail that goes into this round, upholstered ottoman. Lift the lid, and you'll discover a roomy storage space that's perfect for concealing throws, pillows, or your child or grandchild's toys!", // описание
    waight: 10, // вес
    available: 5, // доступное количество
    demention: "19.5L x 19.5D x 18.5H in.", // размеры
    color: "Cherry",
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
    id: "REDU083", //
    category: "chair",
    title: "Upholstered Dining Chair", // название
    sku: "REDU083", // какой то id
    price: 209.50, // новая цена
    oldprice: 209.50, // старая цена
    description:
      "The posh and comfortable Belham Living Carter Mid Century Modern Upholstered Dining Chair - Set of 2 adds a kick of mid-century modern style to your dining room. Designed to complement any decor, this set comes in your choice of available fabric colors so you can create the perfect look for your dining room. Exposed rubberwood bases and tapered legs in a walnut finish, along with the slightly curved back, enhance the mid-century appeal. Plus, with its plush seating, these chairs also give you the perfect place to relax as you enjoy drinks, good food, and fun times with friends. Beautifully crafted to elevate the style of your home, these chairs can also be used as accent pieces in your living room, loft, or home office.", // описание
    waight: 10, // вес
    available: 5, // доступное количество
    demention: "20W x 23.5D x 35.5H in.", // размеры
    color: "Cherry",
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
*/
export interface blogPostConfig {
  authorName: string;
  path: string;
  date: string;
  title: string;
  text: string;
}

export let blogPost: blogPostConfig[] = [
  {
    authorName: "Laura Green",
    path: "photo-1506730447-7683abca8434",
    date: "January 14, 2019 ",
    title: "Modern & Contemporary Adult Bedroom",
    text: "blog text"
  },
  {
    authorName: "Laura Green",
    path: "photo-1549488344-cbb6c34cf08b",
    date: "January 14, 2019 ",
    title: "Explore Shoppable Styles Hand-Picked",
    text: "blog text"
  },
  {
    authorName: "Laura Green",
    path: "photo-1487015307662-6ce6210680f1",
    date: "January 14, 2019 ",
    title: "Shop the Look Cottage Country Living Room",
    text: "blog text"
  },
  {
    authorName: "Laura Green",
    path: "photo-1502005097973-6a7082348e28",
    date: "January 14, 2019 ",
    title: "Modern & Contemporary Adult Bedroom",
    text: "blog text"
  },
  {
    authorName: "Laura Green",
    path: "photo-1502005229762-cf1b2da7c5d6",
    date: "January 14, 2019 ",
    title: "Explore Shoppable Styles Hand-Picked",
    text: "blog text"
  },
  {
    authorName: "Laura Green",
    path: "photo-1505433329165-09624aec350e",
    date: "January 14, 2019 ",
    title: "Shop the Look Cottage Country Living Room",
    text: "blog text"
  },
  {
    authorName: "Laura Green",
    path: "photo-1505577058444-a3dab90d4253",
    date: "January 14, 2019 ",
    title: "Modern & Contemporary Adult Bedroom",
    text: "blog text"
  },
  {
    authorName: "Laura Green",
    path: "photo-1511974212900-b42a18e19eb8",
    date: "January 14, 2019 ",
    title: "Explore Shoppable Styles Hand-Picked",
    text: "blog text"
  },
  {
    authorName: "Laura Green",
    path: "photo-1530153739137-cafe11da39aa",
    date: "January 14, 2019 ",
    title: "Shop the Look Cottage Country Living Room",
    text: "blog text"
  }
];
