// Product list — Unsplash CDN
const products = [
  {
    "id": "p1",
    "name": "Organic Bananas (1kg)",
    "category": "Fruits",
    "price": 69,
    "rating": 4.6,
    "image": "https://img.freepik.com/premium-photo/bunch-raw-organic-bananas-ready-eat_762785-123599.jpg",
    "description": "Sweet ripe organic bananas, perfect for snacks and smoothies.",
    "badge": "Bestseller"
  },
  {
    "id": "p2",
    "name": "Fresh Tomatoes (500g)",
    "category": "Vegetables",
    "price": 49,
    "rating": 4.3,
    "image": "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=800&q=80",
    "description": "Juicy red tomatoes, farm-fresh and flavorful."
  },
  {
    "id": "p3",
    "name": "Organic Brown Rice (1kg)",
    "category": "Grains",
    "price": 129,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=800&q=80",
    "description": "Premium long-grain brown rice \u2014 wholesome and nutritious."
  },
  {
    "id": "p4",
    "name": "Organic Milk (1L)",
    "category": "Dairy",
    "price": 59,
    "rating": 4.4,
    "image": "https://tse2.mm.bing.net/th/id/OIP.a4NpcsLGm8k9tL7KFJVm9QHaFj?pid=Api&P=0&h=180",
    "description": "Fresh A2 organic milk from grass-fed cows."
  },
  {
    "id": "p5",
    "name": "Healthy Granola (400g)",
    "category": "Snacks",
    "price": 199,
    "rating": 4.7,
    "image": "https://tse4.mm.bing.net/th/id/OIP.gxJO5H1u21LE9z7qxBTaCwHaE8?pid=Api&P=0&h=180",
    "description": "Crunchy granola with oats, nuts and dried fruits.",
    "badge": "Organic"
  },
  {
    "id": "p6",
    "name": "Reusable Cotton Bag",
    "category": "Eco",
    "price": 149,
    "rating": 4.2,
    "image": "https://printo-s3.dietpixels.net/site/20220811_121946474900_fd4f8c_Eco-friendly-Cotton-carry-bag.jpg?quality=70&format=webp&w=1200",
    "description": "Eco-friendly cotton carry bag \u2014 durable and washable."
  },
  {
    "id": "p7",
    "name": "Organic Apples (1kg)",
    "category": "Fruits",
    "price": 159,
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=800&q=80",
    "description": "Crisp and juicy apples, perfect for snacking.",
    "badge": "Bestseller"
  },
  {
    "id": "p8",
    "name": "Leafy Spinach (250g)",
    "category": "Vegetables",
    "price": 39,
    "rating": 4.5,
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "description": "Fresh organic spinach full of vitamins."
  },
  {
    "id": "p9",
    "name": "Quinoa (500g)",
    "category": "Grains",
    "price": 249,
    "rating": 4.6,
    "image": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    "description": "Protein-rich quinoa \u2014 great for salads and bowls.",
    "badge": "Organic"
  },
  {
    "id": "p10",
    "name": "A2 Ghee (500g)",
    "category": "Dairy",
    "price": 499,
    "rating": 4.8,
    "image": "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80",
    "description": "Pure A2 cow ghee, rich aroma and taste."
  },
  {
    "id": "p11",
    "name": "Almonds (250g)",
    "category": "Snacks",
    "price": 299,
    "rating": 4.7,
    "image": "https://img.freepik.com/premium-photo/almonds_121826-2238.jpg",
    "description": "Premium raw almonds for healthy snacking."
  },
  {
    "id": "p12",
    "name": "Bamboo Toothbrush",
    "category": "Eco",
    "price": 99,
    "rating": 4.1,
    "image": "https://cdn.fcglcdn.com/brainbees/images/products/zoom/16189522a.webp",
    "description": "Sustainable bamboo toothbrush with soft bristles."
  },
  {
    "id": "p13",
    "name": "Mango (1kg)",
    "category": "Fruits",
    "price": 199,
    "rating": 4.9,
    "image": "https://tse1.mm.bing.net/th/id/OIP.yS1gTfxt_CKXCHudX0vmGAHaHa?pid=Api&P=0&h=180",
    "description": "Sweet seasonal mangoes, aromatic and juicy.",
    "badge": "Bestseller"
  },
  {
    "id": "p14",
    "name": "Broccoli (500g)",
    "category": "Vegetables",
    "price": 129,
    "rating": 4.4,
    "image": "https://png.pngtree.com/thumb_back/fw800/background/20220318/pngtree-broccoli-hd-photography-material-image_1022172.jpg",
    "description": "Fresh broccoli heads, perfect steamed or roasted."
  },
  {
    "id": "p15",
    "name": "Millet Flour (1kg)",
    "category": "Grains",
    "price": 159,
    "rating": 4.3,
    "image": "https://tse2.mm.bing.net/th/id/OIP.95vwd6XswK66IUUNCm8qDgHaHa?pid=Api&P=0&h=180",
    "description": "Nutritious millet flour for rotis and baking."
  },
  {
    "id": "p16",
    "name": "Greek Yogurt (500g)",
    "category": "Dairy",
    "price": 129,
    "rating": 4.6,
    "image": "https://img.freepik.com/premium-photo/website-layout-greek-yogurt-packaging-traditional-with-blue-white-palet-poster-flyer-design_655090-2028955.jpg",
    "description": "Creamy Greek yogurt \u2014 ideal for breakfast."
  },
  {
    "id": "p17",
    "name": "Organic Cookies (200g)",
    "category": "Snacks",
    "price": 129,
    "rating": 4.2,
    "image": "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80",
    "description": "Baked organic cookies with less sugar.",
    "badge": "Organic"
  },
  {
    "id": "p18",
    "name": "Beeswax Wraps (3pcs)",
    "category": "Eco",
    "price": 399,
    "rating": 4.5,
    "image": "https://images.squarespace-cdn.com/content/v1/5d5469bb5e4598000122b755/1696456299526-GX4PX0KQT8XEOZ4G0NFZ/Beeswax+wraps+collection-+Large+.jpeg",
    "description": "Reusable beeswax wraps for food storage."
  },
  {
    "id": "p19",
    "name": "Strawberries (250g)",
    "category": "Fruits",
    "price": 149,
    "rating": 4.8,
    "image": "https://img.freepik.com/premium-photo/ripe-red-strawberries-growing-branch-field-sunset-branch-with-natural-strawberries-blurred-background-strawberry-field-golden-hour-ai-generated_538213-3757.jpg",
    "description": "Fresh red strawberries, sweet and tangy.",
    "badge": "Bestseller"
  },
  {
    "id": "p20",
    "name": "Bell Peppers (500g)",
    "category": "Vegetables",
    "price": 99,
    "rating": 4.4,
    "image": "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80",
    "description": "Colorful bell peppers \u2014 great for salads and stir-fries."
  },
  {
    "id": "p21",
    "name": "Paneer (250g)",
    "category": "Dairy",
    "price": 149,
    "rating": 4.5,
    "image": "https://tiimg.tistatic.com/fp/6/007/974/natural-chemical-and-gluten-free-healthy-delicious-white-soya-paneer-896.jpg",
    "description": "Fresh cottage cheese made from organic milk.",
    "badge": "Organic"
  },
  {
    "id": "p22",
    "name": "Trail Mix (200g)",
    "category": "Snacks",
    "price": 219,
    "rating": 4.6,
    "image": "https://tse4.mm.bing.net/th/id/OIP.OSDWoEb9ciJXreEm7vEXywHaE8?pid=Api&P=0&h=180",
    "description": "Trail mix with nuts and dried fruits."
  },
  {
    "id": "p23",
    "name": "Recycled Paper Notebook",
    "category": "Eco",
    "price": 89,
    "rating": 4.0,
    "image": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/27230723346331.563226daa4b0a.JPG",
    "description": "Handmade recycled paper notebook for notes."
  },
  {
    "id": "p24",
    "name": "Pears (1kg)",
    "category": "Fruits",
    "price": 179,
    "rating": 4.3,
    "image": "https://thumbs.dreamstime.com/b/ripe-pear-tree-growing-pears-175324713.jpg",
    "description": "Juicy pears, sweet and ready to eat."
  },
  {
    "id": "p25",
    "name": "Organic Turmeric Powder (200g)",
    "category": "Grains",
    "price": 129,
    "rating": 4.7,
    "image": "https://tse1.mm.bing.net/th/id/OIP.JVFtZlUeQnhLWwHrKePZdAHaHa?pid=Api&P=0&h=180",
    "description": "Aromatic organic turmeric powder.",
    "badge": "Bestseller"
  },
  {
    "id": "p26",
    "name": "Olive Oil (500ml)",
    "category": "Dairy",
    "price": 599,
    "rating": 4.6,
    "image": "https://tse2.mm.bing.net/th/id/OIP.MNTOfWiVIxVrkejYdeR0YQHaHa?pid=Api&P=0&h=180",
    "description": "Cold-pressed extra virgin olive oil."
  },
  {
  "id": "p27",
  "name": "Coconut Water (1L)",
  "category": "Beverages",
  "price": 89,
  "rating": 4.6,
  "image": "https://tse2.mm.bing.net/th/id/OIP.w-wX-uH8XyuL9r2bTUZ-xQHaHa?pid=Api&P=0&h=180",
  "description": "Refreshing tender coconut water — natural hydration drink.",
  "badge": "Organic"
},
{
  "id": "p28",
  "name": "Avocado (500g)",
  "category": "Fruits",
  "price": 249,
  "rating": 4.8,
  "image": "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80",
  "description": "Ripe creamy avocados rich in healthy fats.",
  "badge": "Bestseller"
},
{
  "id": "p29",
  "name": "Organic Honey (250g)",
  "category": "Condiments",
  "price": 199,
  "rating": 4.9,
  "image": "https://tse2.mm.bing.net/th/id/OIP.ydX8BQ1uxA05aAQ6vKS0oAHaHa?pid=Api&P=0&h=180",
  "description": "Pure wild forest honey with rich golden texture.",
  "badge": "Organic"
},
{
  "id": "p30",
  "name": "Herbal Green Tea (100g)",
  "category": "Beverages",
  "price": 179,
  "rating": 4.5,
  "image": "https://tse2.mm.bing.net/th/id/OIP._FygEfNLzN5BXJFp-aVjHQHaG-?pid=Api&P=0&h=180",
  "description": "Refreshing blend of green tea with herbs and antioxidants."
},
{
  "id": "p31",
  "name": "Organic Peanut Butter (500g)",
  "category": "Snacks",
  "price": 299,
  "rating": 4.7,
  "image": "https://tse4.mm.bing.net/th/id/OIP.HnI-RDC1Y5OGPceJEpp84QHaEQ?pid=Api&P=0&h=180",
  "description": "Creamy unsweetened peanut butter made from roasted peanuts.",
  "badge": "Bestseller"
},
{
  "id": "p32",
  "name": "Compostable Food Wraps (Pack of 10)",
  "category": "Eco",
  "price": 249,
  "rating": 4.4,
  "image": "https://i.pinimg.com/564x/44/c7/09/44c709e3e3158f24b3744a222c707673.jpg",
  "description": "Eco-safe compostable wraps made from plant materials.",
  "badge": "Eco-Friendly"
},
{
  "id": "p33",
  "name": "Organic Chia Seeds (250g)",
  "category": "Grains",
  "price": 189,
  "rating": 4.7,
  "image": "https://images.unsplash.com/photo-1590080875832-98e65cbf2e26?auto=format&fit=crop&w=900&q=80",
  "description": "High-fiber chia seeds rich in omega-3 and antioxidants.",
  "badge": "Superfood"
},
{
  "id": "p34",
  "name": "Cold Pressed Coconut Oil (500ml)",
  "category": "Condiments",
  "price": 349,
  "rating": 4.8,
  "image": "https://images.unsplash.com/photo-1604587633093-60a6e7e2ad64?auto=format&fit=crop&w=900&q=80",
  "description": "Pure cold-pressed coconut oil for cooking, hair, and skincare.",
  "badge": "Organic"
},
{
  "id": "p35",
  "name": "Organic Carrots (500g)",
  "category": "Vegetables",
  "price": 59,
  "rating": 4.5,
  "image": "https://images.unsplash.com/photo-1506807803488-8eafc15316c9?auto=format&fit=crop&w=900&q=80",
  "description": "Crisp and fresh organic carrots — rich in beta-carotene.",
  "badge": "Farm Fresh"
},
{
  "id": "p36",
  "name": "Organic Basil Leaves (50g)",
  "category": "Herbs",
  "price": 79,
  "rating": 4.6,
  "image": "https://images.unsplash.com/photo-1624469189559-8cb7f7bffb77?auto=format&fit=crop&w=900&q=80",
  "description": "Fragrant organic basil leaves for seasoning and sauces."
},
{
  "id": "p37",
  "name": "Whole Wheat Pasta (500g)",
  "category": "Grains",
  "price": 149,
  "rating": 4.4,
  "image": "https://images.unsplash.com/photo-1601050690597-1e55f4bdb851?auto=format&fit=crop&w=900&q=80",
  "description": "Nutritious whole wheat pasta — healthy and delicious."
},
{
  "id": "p38",
  "name": "Organic Herbal Shampoo (250ml)",
  "category": "Personal Care",
  "price": 259,
  "rating": 4.5,
  "image": "https://images.unsplash.com/photo-1619694379368-03e3a1d8b6b2?auto=format&fit=crop&w=900&q=80",
  "description": "Herbal shampoo with aloe vera and hibiscus — gentle and natural.",
  "badge": "Eco-Friendly"
},
{
  "id": "p39",
  "name": "Eco-Friendly Laundry Detergent (1L)",
  "category": "Eco",
  "price": 299,
  "rating": 4.3,
  "image": "https://images.unsplash.com/photo-1624469189863-f38e4180a531?auto=format&fit=crop&w=900&q=80",
  "description": "Biodegradable plant-based detergent — safe for skin and fabrics."
},
{
  "id": "p40",
  "name": "Organic Jaggery Powder (1kg)",
  "category": "Grains",
  "price": 129,
  "rating": 4.8,
  "image": "https://images.unsplash.com/photo-1605027990123-3a472c6cc63d?auto=format&fit=crop&w=900&q=80",
  "description": "Pure unrefined jaggery powder — natural and mineral-rich.",
  "badge": "Natural"
},
{
  "id": "p41",
  "name": "Organic Lemons (500g)",
  "category": "Fruits",
  "price": 59,
  "rating": 4.5,
  "image": "https://images.unsplash.com/photo-1622202229744-bf2a55f8f3f1?auto=format&fit=crop&w=900&q=80",
  "description": "Juicy, tangy organic lemons packed with Vitamin C.",
  "badge": "Fresh Pick"
},
{
  "id": "p42",
  "name": "Compost Bin (5L)",
  "category": "Eco",
  "price": 499,
  "rating": 4.4,
  "image": "https://images.unsplash.com/photo-1576765607924-3a97a747ee48?auto=format&fit=crop&w=900&q=80",
  "description": "Compact compost bin — turn kitchen waste into nutrient-rich compost.",
  "badge": "Eco-Friendly"
},
{
  "id": "p43",
  "name": "Organic Coconut Sugar (500g)",
  "category": "Condiments",
  "price": 229,
  "rating": 4.7,
  "image": "https://images.unsplash.com/photo-1626339247356-fdbd7f7cf4c2?auto=format&fit=crop&w=900&q=80",
  "description": "Low glycemic coconut sugar made from palm nectar — naturally sweet.",
  "badge": "Organic"
},
{
  "id": "p44",
  "name": "Reusable Water Bottle (750ml)",
  "category": "Eco",
  "price": 399,
  "rating": 4.5,
  "image": "https://images.unsplash.com/photo-1593759608139-3b0b90b63c8b?auto=format&fit=crop&w=900&q=80",
  "description": "Durable stainless steel bottle — keeps drinks hot or cold for hours.",
  "badge": "Eco-Friendly"
}


];

export default products;
