import { OccasionData } from '../types';

export const occasionsData: Record<string, OccasionData> = {
  festivals: {
    name: 'Festivals',
    description: 'Traditional and vibrant outfits perfect for celebrating cultural festivals',
    maleOutfits: [
      {
        name: 'Sherwani',
        description: 'A traditional long coat-like garment with intricate embroidery, perfect for grand celebrations',
        accessories: ['Mojari shoes', 'Turban or pagri', 'Kada (bracelet)', 'Pocket watch'],
        maleImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJKtKubDu195G2vEWHGmUj_6TS4Ksw1Z0Cgw&s',
        femaleImage: '',
        tips: ['Choose rich fabrics like silk or brocade', 'Opt for gold or silver embroidery', 'Ensure proper fit for elegant silhouette']
      },
      {
        name: 'Kurta Pajama',
        description: 'Comfortable traditional wear suitable for any festive occasion',
        accessories: ['Leather sandals', 'Nehru jacket', 'Traditional watch', 'Tilak'],
        maleImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-OZtCbbNg8sh_vNfGvMJ7xG2esGLRNKJJ9w&s',
        femaleImage: '',
        tips: ['Choose cotton or silk fabric', 'Pair with contrasting pajama', 'Add a dupatta for formal occasions']
      },
      {
        name: 'Bandhgala Suit',
        description: 'A formal Indian suit with high collar, perfect for upscale celebrations',
        accessories: ['Oxford shoes', 'Cufflinks', 'Pocket square', 'Traditional brooch'],
        maleImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnAmsWm5ooKT-0hukNcxISynxKUdKNpNt2APXDcH-kcM4Qa5QO5MLH8_vjk17a301irVk&usqp=CAU',
        femaleImage: '',
        tips: ['Ensure perfect tailoring', 'Choose dark colors for evening events', 'Keep accessories minimal and elegant']
      },
      {
        name: 'Kurta Dhoti Set',
        description: 'Traditional combination perfect for cultural celebrations',
        accessories: ['Traditional footwear', 'Angavastram', 'Tilak', 'Traditional jewelry'],
        maleImage: 'https://medias.utsavfashion.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/c/o/contrast-trim-art-silk-dhoti-kurta-in-beige-v1-mmq1068.jpg',
        femaleImage: '',
        tips: ['Practice draping dhoti properly', 'Choose comfortable fabrics', 'Coordinate colors well']
      },
      {
        name: 'Pathani Suit',
        description: 'Comfortable and stylish traditional wear',
        accessories: ['Kolhapuri chappals', 'Traditional cap', 'Watch', 'Scarf'],
        maleImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ8UC6j0t-CtXQPPvMuvNGTHF9xsPPLBsBiQ&s',
        femaleImage: '',
        tips: ['Choose breathable fabrics', 'Ensure proper fit', 'Add traditional accessories']
      },
      {
        name: 'Jodhpuri Suit',
        description: 'Royal and elegant traditional formal wear',
        accessories: ['Dress shoes', 'Pocket square', 'Cufflinks', 'Traditional brooch'],
        maleImage: 'https://manyavar.scene7.com/is/image/manyavar/CTSD1235_311-Pista+Green.6285_12-01-2024-13-30:650x900?&dpr=on,2',
        femaleImage: '',
        tips: ['Ensure perfect tailoring', 'Choose rich colors', 'Add royal accessories']
      }
    ],
    femaleOutfits: [
      {
        name: 'Saree',
        description: 'Timeless elegance in a draped garment perfect for any celebration',
        accessories: ['Blouse', 'Petticoat', 'Jewelry set', 'Clutch purse', 'Traditional footwear'],
        maleImage: '',
        femaleImage: 'https://i.pinimg.com/736x/5f/33/bf/5f33bf471d13735ea9a45dd7e2a5a3a5.jpg',
        tips: ['Choose silk for formal occasions', 'Master the draping style', 'Coordinate blouse with saree border']
      },
      {
        name: 'Lehenga Choli',
        description: 'A vibrant three-piece ensemble perfect for grand celebrations',
        accessories: ['Statement jewelry', 'Dupatta', 'Embellished footwear', 'Clutch', 'Hair accessories'],
        maleImage: '',
        femaleImage: 'https://assets0.mirraw.com/images/12220862/7060_HotPink_(1)_zoom.jpg?1706594794',
        tips: ['Choose based on body type', 'Coordinate colors carefully', 'Ensure comfort for dancing']
      },
      {
        name: 'Anarkali Suit',
        description: 'Flowy and graceful, perfect for festive occasions',
        accessories: ['Churidar', 'Dupatta', 'Jhumkas', 'Bangles', 'Flat sandals'],
        maleImage: '',
        femaleImage: 'https://pictures.kartmax.in/live/inside/800x800/sites/9s145MyZrWdIAwpU0JYS/product-images/cream_tissue_silk_anarkali_suit_for_women_1746517693a1142_1(5700).jpg',
        tips: ['Choose empire waist for flattering fit', 'Opt for lighter fabrics for comfort', 'Accessorize with traditional jewelry']
      },
      {
        name: 'Sharara Suit',
        description: 'Elegant flared pants with kurta, perfect for celebrations',
        accessories: ['Statement earrings', 'Dupatta', 'Bangles', 'Embellished shoes'],
        maleImage: '',
        femaleImage: 'https://assets0.mirraw.com/images/12379399/koskii-ranipink-zariwork-georgette-designer-salwar-suit-ssrm0029576_rani_pink_3_1800x1800_zoom.jpg?1712409729',
        tips: ['Choose flowing fabrics', 'Ensure proper fit at waist', 'Add traditional accessories']
      },
      {
        name: 'Half Saree',
        description: 'Traditional fitted pants with flared bottoms',
        accessories: ['Heavy jewelry', 'Dupatta', 'Traditional footwear', 'Clutch'],
        maleImage: '',
        femaleImage: 'https://5.imimg.com/data5/SELLER/Default/2022/1/QS/FI/HD/69377180/whatsapp-image-2022-01-25-at-7-59-37-pm-1--500x500.jpeg',
        tips: ['Choose rich fabrics', 'Ensure proper tailoring', 'Add statement jewelry']
      },
      {
        name: 'Chaniya Choli',
        description: 'Traditional Gujarati outfit perfect for festivals',
        accessories: ['Mirror work dupatta', 'Traditional jewelry', 'Mojari', 'Hair accessories'],
        maleImage: '',
        femaleImage: 'https://cdn.vibecity.in/providers/6496f744617db20d8ee2748c/bad1b209-8c44-459c-b0d9-0841f77a01d6_d79c4058-4917-4cf3-86a6-4996a1586b27-3X.png',
        tips: ['Choose vibrant colors', 'Add mirror work details', 'Ensure comfort for dancing']
      }
    ]
  },
  graduation: {
    name: 'Graduation',
    description: 'Professional and celebratory attire for this important milestone',
    maleOutfits: [
      {
        name: 'Suit and Tie',
        description: 'Classic formal wear perfect for graduation ceremonies',
        accessories: ['Dress shoes', 'Belt', 'Pocket square', 'Watch', 'Tie clip'],
        maleImage: 'https://cdn.suitdirect.co.uk/upload/siteimages/medium/0079246_170_b.jpg',
        femaleImage: '',
        tips: ['Choose navy or charcoal for versatility', 'Ensure proper fit', 'Keep colors conservative']
      },
      {
        name: 'Formal Pants and Shirt',
        description: 'Smart casual option for comfortable celebration',
        accessories: ['Leather shoes', 'Belt', 'Watch', 'Blazer (optional)'],
        maleImage: 'https://i.pinimg.com/736x/e7/0d/54/e70d5404ce21e5096aee7c5b156f281b.jpg',
        femaleImage: '',
        tips: ['Iron for crisp appearance', 'Choose neutral colors', 'Ensure comfort for long ceremony']
      },
      {
        name: 'Suit with Statement Tie',
        description: 'Professional look with personality through tie choice',
        accessories: ['Dress shoes', 'Belt', 'Cufflinks', 'Watch', 'Pocket square'],
        maleImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIjLRlYCg6YblaQAYbiarHI6Pp7h8PRH9njg&s',
        femaleImage: '',
        tips: ['Choose bold but appropriate tie', 'Keep suit classic', 'Balance colors well']
      }
    ],
    femaleOutfits: [
      {
        name: 'Professional Dress',
        description: 'Elegant and appropriate for the formal occasion',
        accessories: ['Closed-toe shoes', 'Cardigan or blazer', 'Simple jewelry', 'Clutch'],
        maleImage: '',
        femaleImage: 'https://m.media-amazon.com/images/I/71+Y5ZFswdL._UY1100_.jpg',
        tips: ['Choose knee-length or longer', 'Opt for conservative necklines', 'Consider the weather']
      },
      {
        name: 'Pantsuit',
        description: 'Professional and powerful look for the big day',
        accessories: [ 'Dress shoes', 'Minimal jewelry', 'Structured handbag'],
        maleImage: '',
        femaleImage: 'https://m.media-amazon.com/images/I/7174BfftcWL._UY1000_.jpg',
        tips: ['Ensure proper tailoring', 'Choose coordinating pieces', 'Keep accessories professional']
      },
      {
        name: 'Jumpsuit or Romper',
        description: 'Modern and comfortable alternative for graduation',
        accessories: ['Blazer', 'Heels or flats', 'Simple jewelry', 'Clutch'],
        maleImage: '',
        femaleImage: 'https://storage.googleapis.com/windsor-cms/media/2022/08/99fc81a0-black-long-sleeve-sweetheart-neck-jumpsuit.jpg',
        tips: ['Choose appropriate length', 'Add blazer for formality', 'Keep it professional']
      },
      {
        name: 'cropped blazers and trousers',
        description: 'Classic professional combination',
        accessories: ['Dress shoes', 'Belt', 'Simple jewelry', 'Blazer'],
        maleImage: '',
        femaleImage: 'https://www.lemon8-app.com/seo/image?item_id=7117585442895036930&index=1&sign=57daf72e26c1af20b5cd94ed421e0c99',
        tips: ['Choose well-fitted pieces', 'Coordinate colors', 'Keep it polished']
      }
    ]
  },
  'family-gatherings': {
    name: 'Family Gatherings',
    description: 'Comfortable yet stylish outfits perfect for family celebrations',
    maleOutfits: [
      {
        name: 'Classic Polo Shirt',
        description: 'Versatile and comfortable for family events',
        accessories: ['Chinos or khakis', 'Casual shoes', 'Watch', 'Belt'],
        maleImage: 'https://classicpolos.com/cdn/shop/files/1_6d575555-dc06-49d3-b4a4-f4f703b85cc0.jpg?v=1735975544',
        femaleImage: '',
        tips: ['Choose solid colors or subtle patterns', 'Ensure comfortable fit', 'Pair with well-fitted pants']
      },
      {
        name: 'Blazer with Button-Down',
        description: 'Smart casual look that\'s both comfortable and polished',
        accessories: ['Dress pants', 'Leather shoes', 'Watch', 'Belt'],
        maleImage: 'https://rukminim3.flixcart.com/image/850/1000/xif0q/blazer/s/4/c/44-pnkz-a1-trulyfeb-original-imagtj5z5pwwp3j6.jpeg?q=90&crop=false',
        femaleImage: '',
        tips: ['Choose unstructured blazer for comfort', 'Roll sleeves for casual touch', 'Coordinate colors']
      },
      {
        name: 'Formal Wear',
        description: 'Traditional formal wear perfect for family celebrations',
        accessories: ['Dress shoes', 'Pocket square', 'Watch', 'Traditional accessories'],
        maleImage: 'https://cdn.shopify.com/s/files/1/0162/2116/files/Formal_outfit_ideas_for_men_16.jpg?v=1512106528',
        femaleImage: '',
        tips: ['Choose comfortable fabrics', 'Ensure proper fit', 'Add traditional touch']
      },
      {
        name: 'Waistcoat',
        description: 'Stylish layered look for family events',
        accessories: ['Dress shirt', 'Trousers', 'Dress shoes', 'Watch'],
        maleImage: 'https://imagescdn.allensolly.com/img/app/product/3/39708237-14578584.jpg?auto=format&w=390',
        femaleImage: '',
        tips: ['Choose coordinating colors', 'Ensure proper fit', 'Keep it comfortable']
      }
    ],
    femaleOutfits: [
      {
        name: 'Midi Dress',
        description: 'Perfect balance of casual and dressy for family events',
        accessories: ['Cardigan', 'Comfortable shoes', 'Simple jewelry', 'Crossbody bag'],
        maleImage: '',
        femaleImage: 'https://www.bullionknot.com/cdn/shop/files/Hazelmin_9.jpg?v=1712987104',
        tips: ['Choose comfortable fabrics', 'Consider the season', 'Keep accessories simple']
      },
      {
        name: 'Jumpsuit',
        description: 'Stylish one-piece that\'s both trendy and comfortable',
        accessories: ['Belt', 'Statement earrings', 'Flats or low heels', 'Light jacket'],
        maleImage: '',
        femaleImage: 'https://i.ytimg.com/vi/yn6lLQKd_oo/maxresdefault.jpg',
        tips: ['Choose flattering cut', 'Add belt to define waist', 'Layer appropriately']
      },
      {
        name: 'Kurta with Palazzo Pants',
        description: 'Comfortable traditional wear for family gatherings',
        accessories: ['Dupatta', 'Traditional jewelry', 'Flat sandals', 'Clutch'],
        maleImage: '',
        femaleImage: 'https://www.bhamadesigns.com/cdn/shop/files/BHKS332_1_ec4104e2-1606-4bfa-b000-ca137cf04ad5.png?v=1748543395',
        tips: ['Choose breathable fabrics', 'Coordinate colors', 'Keep it comfortable']
      },
      {
        name: 'Anarkali',
        description: 'Elegant traditional dress for family celebrations',
        accessories: ['Churidar', 'Dupatta', 'Traditional jewelry', 'Flat shoes'],
        maleImage: '',
        femaleImage: 'https://www.bhamadesigns.com/cdn/shop/files/2779-0100_3_64190971-8b8e-4b41-960f-df76cbe6249d.jpg?v=1748542292',
        tips: ['Choose flowing fabrics', 'Ensure comfortable fit', 'Add traditional accessories']
      }
    ]
  },
  'casual-outing': {
    name: 'Casual Outing',
    description: 'Relaxed and comfortable outfits for everyday adventures',
    maleOutfits: [
      {
        name: 'Polo Shirt and Chinos',
        description: 'Smart casual combination perfect for outings',
        accessories: ['Casual shoes', 'Watch', 'Sunglasses', 'Light jacket'],
        maleImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT99JtxFQb66ORiTlasXJ9aNsi5ambaO8D2jA&s',
        femaleImage: '',
        tips: ['Choose breathable fabrics', 'Ensure comfortable fit', 'Add layers for versatility']
      },
      {
        name: 'T-shirt and Jeans',
        description: 'Classic casual combination for any outing',
        accessories: ['Sneakers', 'Baseball cap', 'Watch', 'Backpack'],
        maleImage: 'https://image-marketing.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/07/03130744/0-2.jpg',
        femaleImage: '',
        tips: ['Choose well-fitted jeans', 'Opt for quality t-shirts', 'Coordinate colors']
      },
      {
        name: 'Henley Shirt with Jeans',
        description: 'Comfortable and stylish casual wear',
        accessories: ['Casual shoes', 'Watch', 'Light jacket', 'Sunglasses'],
        maleImage: 'https://i.pinimg.com/736x/9c/ea/7a/9cea7a4263e435e40bda494cbf28742b.jpg',
        femaleImage: '',
        tips: ['Choose comfortable fit', 'Layer appropriately', 'Keep it simple']
      },
      {
        name: 'Denim Jacket with T-shirt',
        description: 'Layered casual look perfect for outings',
        accessories: ['Jeans', 'Sneakers', 'Watch', 'Backpack'],
        maleImage: 'https://i.pinimg.com/736x/33/50/7c/33507c7fe1a957baec6e0316f1f02bdc.jpg',
        femaleImage: '',
        tips: ['Mix denim shades', 'Keep it comfortable', 'Add personal style']
      }
    ],
    femaleOutfits: [
      {
        name: 'T-shirt Dress',
        description: 'Comfortable and effortless for casual outings',
        accessories: ['Sneakers or sandals', 'Denim jacket', 'Simple jewelry', 'Crossbody bag'],
        maleImage: '',
        femaleImage: 'https://stylebyanumeha.wordpress.com/wp-content/uploads/2020/07/denim-shirt-for-women.jpg',
        tips: ['Choose comfortable fabrics', 'Layer for weather', 'Keep accessories minimal']
      },
      {
        name: 'Sundress',
        description: 'Light and breezy perfect for daytime outings',
        accessories: ['Sandals', 'Sun hat', 'Sunglasses', 'Crossbody bag'],
        maleImage: '',
        femaleImage: 'https://images.meesho.com/images/products/538596629/ur9gi_512.webp',
        tips: ['Choose breathable fabrics', 'Consider sun protection', 'Add comfortable footwear']
      },
      {
        name: 'Maxi Dress',
        description: 'Flowing and comfortable for casual adventures',
        accessories: ['Flat sandals', 'Light cardigan', 'Simple jewelry', 'Tote bag'],
        maleImage: '',
        femaleImage: 'https://www.vastranand.in/cdn/shop/files/3_8c33c035-00d4-4389-94fa-83236c661831.jpg?v=1743074408',
        tips: ['Choose appropriate length', 'Layer for comfort', 'Keep it casual']
      },
      {
        name: 'Cardigan with Top and Jeans',
        description: 'Layered casual look perfect for any outing',
        accessories: ['Sneakers or flats', 'Simple jewelry', 'Crossbody bag', 'Scarf'],
        maleImage: '',
        femaleImage: 'https://glaminati.com/wp-content/uploads/2024/05/popular-casual-outfits-blue-cardigan-converse-683x1024.jpg',
        tips: ['Mix textures and colors', 'Layer appropriately', 'Choose comfortable footwear']
      }
    ]
  },
  'job-interview': {
    name: 'Job Interview',
    description: 'Professional attire to make the best first impression',
    maleOutfits: [
      {
        name: 'Business Suit',
        description: 'Professional and polished for formal interviews',
        accessories: ['Dress shoes', 'Conservative tie', 'Belt', 'Watch', 'Portfolio'],
        maleImage: 'https://i.pinimg.com/564x/a7/08/c2/a708c23573ab3c00bb35ab572990f766.jpg',
        femaleImage: '',
        tips: ['Choose navy or charcoal', 'Ensure perfect fit', 'Keep colors conservative']
      },
      {
        name: 'Dress Shirt and Trousers',
        description: 'Smart professional look for business casual interviews',
        accessories: ['Leather shoes', 'Belt', 'Watch', 'Optional blazer'],
        maleImage: 'https://fashionsuggest.in/wp-content/uploads/casual_2-225x300.jpg',
        femaleImage: '',
        tips: ['Iron for crisp appearance', 'Choose neutral colors', 'Ensure proper fit']
      }
    ],
    femaleOutfits: [
      {
        name: 'Formal Top and Skirt',
        description: 'Professional and confident look for important interviews',
        accessories: ['Closed-toe shoes', 'Blouse', 'Minimal jewelry', 'Structured handbag'],
        maleImage: '',
        femaleImage: 'https://qph.cf2.quoracdn.net/main-qimg-263c25c1bb4a75dbd91c632a076203a4.webp',
        tips: ['Choose conservative colors', 'Ensure proper tailoring', 'Keep accessories minimal']
      },
      {
        name: 'Professional Dress',
        description: 'Elegant and appropriate for formal interviews',
        accessories: ['Blazer', 'Closed-toe shoes', 'Simple jewelry', 'Professional bag'],
        maleImage: '',
        femaleImage: 'https://i.pinimg.com/236x/3a/95/a4/3a95a43c274a80621f2d601f1ec8f602.jpg',
        tips: ['Choose knee-length or longer', 'Opt for conservative necklines', 'Ensure comfort']
      }
    ]
  },
  wedding: {
    name: 'Wedding',
    description: 'Elegant and celebratory attire for this special occasion',
    maleOutfits: [
      {
        name: 'Kurta Pajama',
        description: 'Traditional and elegant for wedding celebrations',
        accessories: ['Mojari shoes', 'Dupatta', 'Traditional watch', 'Tilak'],
        maleImage: 'https://i.pinimg.com/originals/fd/a8/0c/fda80cbec2e44fa10444a35b6aee0717.jpg',
        femaleImage: '',
        tips: ['Choose silk or premium cotton', 'Coordinate with wedding colors', 'Ensure comfort for long events']
      },
      {
        name: 'Jodhpuri Suit',
        description: 'Royal and elegant formal wear for weddings',
        accessories: ['Dress shoes', 'Pocket square', 'Cufflinks', 'Traditional brooch'],
        maleImage: 'https://suvidhafashion.com/cdn/shop/files/05-_E6814-D.jpg?v=1739269693&width=600',
        femaleImage: '',
        tips: ['Choose rich colors', 'Ensure perfect tailoring', 'Add royal accessories']
      },
      {
        name: 'Bandhgala Suit',
        description: 'Sophisticated traditional formal wear',
        accessories: ['Oxford shoes', 'Pocket square', 'Cufflinks', 'Watch'],
        maleImage: 'https://asukacouture.com/cdn/shop/articles/Untitled_design_5.jpg?v=1732612023',
        femaleImage: '',
        tips: ['Choose dark colors for evening', 'Ensure perfect fit', 'Keep accessories elegant']
      },
      {
        name: 'Formal Suit',
        description: 'Classic formal wear perfect for wedding ceremonies',
        accessories: ['Dress shoes', 'Pocket square', 'Cufflinks', 'Watch'],
        maleImage: 'https://www.sainly.com/cdn/shop/files/menselegantweddingsuit_62.png?v=1688627698',
        femaleImage: '',
        tips: ['Avoid white or cream', 'Choose appropriate colors', 'Ensure perfect fit']
      }
    ],
    femaleOutfits: [
      {
        name: 'Saree',
        description: 'Timeless elegance perfect for wedding celebrations',
        accessories: ['Blouse', 'Jewelry set', 'Clutch purse', 'Traditional footwear'],
        maleImage: '',
        femaleImage: 'https://i.pinimg.com/736x/08/68/93/0868939bd1cfd544fcfee7ce9b64fdff.jpg',
        tips: ['Choose rich fabrics', 'Coordinate with wedding theme', 'Master the draping']
      },
      {
        name: 'Lehenga',
        description: 'Stunning traditional wear for special celebrations',
        accessories: ['Statement jewelry', 'Dupatta', 'Embellished shoes', 'Clutch'],
        maleImage: '',
        femaleImage: 'https://5.imimg.com/data5/SELLER/Default/2022/6/NC/MH/KM/144511250/josh7304-0001-98cb0088-d935-42d1-500x500.jpg',
        tips: ['Choose based on body type', 'Avoid white unless specified', 'Ensure comfortable fit']
      },
      {
        name: 'Salwar Suit',
        description: 'Elegant traditional wear perfect for weddings',
        accessories: ['Dupatta', 'Traditional jewelry', 'Embellished shoes', 'Clutch'],
        maleImage: '',
        femaleImage: 'https://m.media-amazon.com/images/I/81SLSxMpV5L._UY1100_.jpg',
        tips: ['Choose rich fabrics', 'Coordinate colors well', 'Add traditional accessories']
      },
      {
        name: 'Gown',
        description: 'Elegant western formal wear for wedding celebrations',
        accessories: ['Heels', 'Statement jewelry', 'Clutch', 'Wrap or shawl'],
        maleImage: '',
        femaleImage: 'https://cdn.shopify.com/s/files/1/0049/3649/9315/files/GNRM0043430_NAVY_BLUE_7_large.jpg?v=1742543644',
        tips: ['Choose appropriate length', 'Avoid white unless specified', 'Ensure comfort']
      }
    ]
  },
  parties: {
    name: 'Parties',
    description: 'Stylish and fun outfits perfect for social celebrations',
    maleOutfits: [
      {
        name: 'suit',
        description: 'Sophisticated look for upscale parties',
        accessories: ['Dress shoes', 'Statement tie', 'Pocket square', 'Watch'],
        maleImage: 'https://www.andrew-brookes.com/wp-content/uploads/2024/10/AOB0655-sharpened-min.jpg',
        femaleImage: '',
        tips: ['Choose darker colors for evening', 'Add personal style touches', 'Ensure comfortable fit']
      },
      {
        name: 'Dress Pants',
        description: 'Smart casual look perfect for most parties',
        accessories: ['Leather shoes', 'Dress shirt', 'Watch', 'Belt'],
        maleImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4HyOTwn0zGZLEObRcDEi8ZtE_MDAhHIM7EQ&s',
        femaleImage: '',
        tips: ['Mix textures and colors', 'Choose quality fabrics', 'Keep it stylish yet comfortable']
      },
      {
        name: 'Dress Shirt',
        description: 'Clean and polished look for party occasions',
        accessories: ['Dress pants', 'Dress shoes', 'Watch', 'Belt'],
        maleImage: 'https://images.squarespace-cdn.com/content/v1/62879968c4e7ab7d3ddc2b33/93f9710b-06a0-4d28-b3b4-c0b4776123a3/07c07487ca8bee3ce17625b9445524b3.jpg',
        femaleImage: '',
        tips: ['Choose quality fabrics', 'Ensure proper fit', 'Keep it crisp and clean']
      }
    ],
    femaleOutfits: [
      {
        name: 'A-line Dress',
        description: 'Flattering and versatile for various party types',
        accessories: ['Heels', 'Statement jewelry', 'Clutch', 'Light jacket'],
        maleImage: '',
        femaleImage: 'https://images-cdn.ubuy.co.in/6791e1eb8213542f644f00d9-prom-dresses-long-a-line-with-pockets.jpg',
        tips: ['Choose based on party type', 'Consider the venue', 'Add personal style elements']
      },
      {
        name: 'Jumpsuit',
        description: 'Modern and chic alternative to dresses',
        accessories: ['Heels', 'Statement earrings', 'Belt', 'Clutch'],
        maleImage: '',
        femaleImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4fLRUt8-vUOjWnKH3lEbX9O8gTJ6qDW_PPsfSJ2JXIjUwsXxjieTzpECLdCCDnu7dJts&usqp=CAU',
        tips: ['Choose flattering cut', 'Add belt for definition', 'Accessorize appropriately']
      },
      {
        name: 'Skirt and Top',
        description: 'Versatile combination perfect for parties',
        accessories: ['Heels', 'Statement jewelry', 'Clutch', 'Light jacket'],
        maleImage: '',
        femaleImage: 'https://www.indiabazaaronline.com/image/cache//catalog/products/11/striking-satin-cape-sleeve-dhoti-skirt-for-birthday-party-wj36112-1080x1440.jpg',
        tips: ['Mix textures and colors', 'Choose flattering fits', 'Coordinate pieces well']
      }
    ]
  }
};