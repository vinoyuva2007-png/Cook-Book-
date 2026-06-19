/* ============ MOCK DATA ============ */
const CUISINES = ["All","South Indian","North Indian","Chinese","Biryani","Pizza","Desserts","Healthy","Mexican","Seafood","Mediterranean","Burgers"];

const RESTAURANTS = [
  {
    id:1, name:"Murugan Idli Shop", cuisine:"South Indian", rating:4.5, time:"25-30 min",
    img:"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&q=70&auto=format&fit=crop",
    menu:[
      {id:101, name:"Soft Idli (4 pcs)", veg:true, price:80, desc:"Steamed rice cakes served with sambar and two chutneys.", img:"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=200&q=60&auto=format&fit=crop"},
      {id:102, name:"Masala Dosa", veg:true, price:120, desc:"Crisp rice crepe filled with spiced potato masala.", img:"https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=200&q=60&auto=format&fit=crop"},
      {id:103, name:"Pongal", veg:true, price:90, desc:"Rice and lentils slow-cooked with pepper and ghee.", img:"https://images.unsplash.com/photo-1589301773859-bb024d3f48de?w=200&q=60&auto=format&fit=crop"},
      {id:104, name:"Filter Coffee", veg:true, price:40, desc:"Strong decoction coffee with frothed milk, served in a tumbler.", img:"https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=200&q=60&auto=format&fit=crop"},
      {id:105, name:"Rava Dosa", veg:true, price:130, desc:"Lacy, crisp semolina crepe with a golden, paper-thin crunch.", img:"https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=200&q=60&auto=format&fit=crop"},
      {id:106, name:"Medu Vada (3 pcs)", veg:true, price:70, desc:"Crisp fried lentil doughnuts served with coconut chutney.", img:"https://images.unsplash.com/photo-1589301773859-bb024d3f48de?w=200&q=60&auto=format&fit=crop"},
      {id:107, name:"Curd Rice", veg:true, price:80, desc:"Cooling rice mixed with yoghurt, tempered with curry leaves.", img:"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=200&q=60&auto=format&fit=crop"},
      {id:108, name:"Mysore Pak", veg:true, price:60, desc:"Rich, ghee-laden gram flour fudge with a melt-in-mouth texture.", img:"https://images.unsplash.com/photo-1601303516361-bcf2ce85d932?w=200&q=60&auto=format&fit=crop"}
    ]
  },
  {
    id:2, name:"Punjab Grill House", cuisine:"North Indian", rating:4.3, time:"35-40 min",
    img:"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=70&auto=format&fit=crop",
    menu:[
      {id:201, name:"Butter Chicken", veg:false, price:320, desc:"Tandoori chicken simmered in a velvety tomato-butter gravy.", img:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=200&q=60&auto=format&fit=crop"},
      {id:202, name:"Paneer Tikka", veg:true, price:260, desc:"Char-grilled cottage cheese marinated in yoghurt and spices.", img:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200&q=60&auto=format&fit=crop"},
      {id:203, name:"Garlic Naan", veg:true, price:60, desc:"Tandoor-baked flatbread brushed with garlic butter.", img:"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200&q=60&auto=format&fit=crop"},
      {id:204, name:"Dal Makhani", veg:true, price:220, desc:"Black lentils slow-simmered overnight with cream.", img:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=200&q=60&auto=format&fit=crop"},
      {id:205, name:"Tandoori Chicken (Half)", veg:false, price:280, desc:"Charred, smoky chicken marinated overnight in yoghurt and spices.", img:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=200&q=60&auto=format&fit=crop"},
      {id:206, name:"Chole Bhature", veg:true, price:160, desc:"Spiced chickpea curry with a fluffy, deep-fried bread.", img:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=200&q=60&auto=format&fit=crop"},
      {id:207, name:"Lassi", veg:true, price:70, desc:"Thick, chilled yoghurt drink, sweetened and topped with malai.", img:"https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=200&q=60&auto=format&fit=crop"},
      {id:208, name:"Lachha Paratha", veg:true, price:50, desc:"Multi-layered, flaky whole-wheat flatbread cooked on the tawa.", img:"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200&q=60&auto=format&fit=crop"}
    ]
  },
  {
    id:3, name:"Golden Dragon Wok", cuisine:"Chinese", rating:4.1, time:"30-35 min",
    img:"https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600&q=70&auto=format&fit=crop",
    menu:[
      {id:301, name:"Veg Hakka Noodles", veg:true, price:180, desc:"Wok-tossed noodles with julienned vegetables and soy.", img:"https://images.unsplash.com/photo-1612927601601-6638404737ce?w=200&q=60&auto=format&fit=crop"},
      {id:302, name:"Chilli Chicken", veg:false, price:260, desc:"Crisp-fried chicken tossed in a sweet-spicy chilli glaze.", img:"https://images.unsplash.com/photo-1582878826629-29b7ad1cdd43?w=200&q=60&auto=format&fit=crop"},
      {id:303, name:"Veg Manchurian", veg:true, price:200, desc:"Fried vegetable dumplings in a tangy ginger-garlic sauce.", img:"https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=200&q=60&auto=format&fit=crop"},
      {id:304, name:"Honey Chilli Potato", veg:true, price:180, desc:"Crispy potato fingers glazed in a sweet, spicy honey sauce.", img:"https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=200&q=60&auto=format&fit=crop"},
      {id:305, name:"Schezwan Fried Rice", veg:true, price:200, desc:"Wok-fried rice tossed in a fiery schezwan chilli paste.", img:"https://images.unsplash.com/photo-1612927601601-6638404737ce?w=200&q=60&auto=format&fit=crop"},
      {id:306, name:"Spring Rolls (4 pcs)", veg:true, price:150, desc:"Crisp-fried rolls filled with shredded cabbage and carrot.", img:"https://images.unsplash.com/photo-1548340748-6d2b7d7da280?w=200&q=60&auto=format&fit=crop"}
    ]
  },
  {
    id:4, name:"Nawab's Biryani House", cuisine:"Biryani", rating:4.6, time:"40-45 min",
    img:"https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=70&auto=format&fit=crop",
    menu:[
      {id:401, name:"Hyderabadi Chicken Biryani", veg:false, price:280, desc:"Long-grain basmati layered with slow-cooked spiced chicken.", img:"https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200&q=60&auto=format&fit=crop"},
      {id:402, name:"Mutton Biryani", veg:false, price:340, desc:"Tender mutton dum-cooked with saffron rice and fried onions.", img:"https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=200&q=60&auto=format&fit=crop"},
      {id:403, name:"Veg Dum Biryani", veg:true, price:220, desc:"Mixed vegetables and basmati rice sealed and slow-cooked.", img:"https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=200&q=60&auto=format&fit=crop"},
      {id:404, name:"Raita", veg:true, price:40, desc:"Cooling yoghurt with cucumber, mint, and roasted cumin.", img:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200&q=60&auto=format&fit=crop"},
      {id:405, name:"Egg Biryani", veg:false, price:200, desc:"Fragrant dum-cooked rice layered with spiced boiled eggs.", img:"https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200&q=60&auto=format&fit=crop"},
      {id:406, name:"Chicken 65", veg:false, price:240, desc:"Deep-fried, spice-crusted chicken bites with a fiery kick.", img:"https://images.unsplash.com/photo-1582878826629-29b7ad1cdd43?w=200&q=60&auto=format&fit=crop"},
      {id:407, name:"Mirchi Ka Salan", veg:true, price:120, desc:"Tangy, peanut-sesame curry with whole green chillies.", img:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=200&q=60&auto=format&fit=crop"}
    ]
  },
  {
    id:5, name:"Napoli Pizza Co.", cuisine:"Pizza", rating:4.4, time:"30-35 min",
    img:"https://images.unsplash.com/photo-1564936281291-294551497d81?w=600&q=70&auto=format&fit=crop",
    menu:[
      {id:501, name:"Margherita", veg:true, price:240, desc:"San Marzano tomato, fresh mozzarella, and basil.", img:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=200&q=60&auto=format&fit=crop"},
      {id:502, name:"Pepperoni", veg:false, price:320, desc:"Classic pepperoni with mozzarella on a hand-stretched base.", img:"https://images.unsplash.com/photo-1628840042765-356cda07504e?w=200&q=60&auto=format&fit=crop"},
      {id:503, name:"Farmhouse", veg:true, price:280, desc:"Bell peppers, onion, mushroom, and sweet corn.", img:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&q=60&auto=format&fit=crop"},
      {id:504, name:"BBQ Chicken Pizza", veg:false, price:340, desc:"Smoky barbecue chicken, red onion, and mozzarella.", img:"https://images.unsplash.com/photo-1628840042765-356cda07504e?w=200&q=60&auto=format&fit=crop"},
      {id:505, name:"Garlic Breadsticks", veg:true, price:140, desc:"Oven-baked dough sticks brushed with garlic butter and herbs.", img:"https://images.unsplash.com/photo-1619531040576-f9416740661b?w=200&q=60&auto=format&fit=crop"},
      {id:506, name:"Tiramisu", veg:true, price:160, desc:"Layered espresso-soaked sponge with mascarpone cream.", img:"https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=200&q=60&auto=format&fit=crop"}
    ]
  },
  {
    id:6, name:"The Sweet Spoon", cuisine:"Desserts", rating:4.7, time:"20-25 min",
    img:"https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=70&auto=format&fit=crop",
    menu:[
      {id:601, name:"Gulab Jamun (4 pcs)", veg:true, price:90, desc:"Soft milk dumplings soaked in rose-cardamom syrup.", img:"https://images.unsplash.com/photo-1601303516361-bcf2ce85d932?w=200&q=60&auto=format&fit=crop"},
      {id:602, name:"Chocolate Lava Cake", veg:true, price:140, desc:"Warm cake with a molten dark chocolate centre.", img:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=200&q=60&auto=format&fit=crop"},
      {id:603, name:"Mango Kulfi", veg:true, price:80, desc:"Dense, creamy frozen dessert made with real mango pulp.", img:"https://images.unsplash.com/photo-1629385697093-9ad8c1671141?w=200&q=60&auto=format&fit=crop"},
      {id:604, name:"Rasmalai (2 pcs)", veg:true, price:100, desc:"Soft cheese discs soaked in saffron-cardamom milk.", img:"https://images.unsplash.com/photo-1601303516361-bcf2ce85d932?w=200&q=60&auto=format&fit=crop"},
      {id:605, name:"New York Cheesecake", veg:true, price:180, desc:"Dense, creamy baked cheesecake on a buttery biscuit base.", img:"https://images.unsplash.com/photo-1567171466295-4afa63d45416?w=200&q=60&auto=format&fit=crop"},
      {id:606, name:"Brownie with Ice Cream", veg:true, price:150, desc:"Warm fudge brownie topped with a scoop of vanilla ice cream.", img:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=200&q=60&auto=format&fit=crop"}
    ]
  },
  {
    id:7, name:"Green Bowl Kitchen", cuisine:"Healthy", rating:4.2, time:"25-30 min",
    img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=70&auto=format&fit=crop",
    menu:[
      {id:701, name:"Quinoa Power Bowl", veg:true, price:220, desc:"Quinoa, roasted chickpeas, greens, and a lemon-tahini dressing.", img:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&q=60&auto=format&fit=crop"},
      {id:702, name:"Grilled Chicken Salad", veg:false, price:260, desc:"Grilled chicken breast over greens with a light vinaigrette.", img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&q=60&auto=format&fit=crop"},
      {id:703, name:"Sprout Chaat", veg:true, price:140, desc:"Sprouted moong and chickpeas tossed with onion and tamarind.", img:"https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=200&q=60&auto=format&fit=crop"},
      {id:704, name:"Avocado Toast", veg:true, price:180, desc:"Smashed avocado on toasted multigrain, chilli flakes, lime.", img:"https://images.unsplash.com/photo-1525351484163-7529414344d8?w=200&q=60&auto=format&fit=crop"},
      {id:705, name:"Greek Yoghurt Parfait", veg:true, price:160, desc:"Layered yoghurt, granola, and fresh seasonal berries.", img:"https://images.unsplash.com/photo-1488477181946-6428a0291777?w=200&q=60&auto=format&fit=crop"},
      {id:706, name:"Cold-Pressed Detox Juice", veg:true, price:120, desc:"Cucumber, spinach, apple, and mint, cold-pressed fresh.", img:"https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=200&q=60&auto=format&fit=crop"}
    ]
  },
  {
    id:8, name:"Sichuan Street", cuisine:"Chinese", rating:4.0, time:"30-35 min",
    img:"https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=70&auto=format&fit=crop",
    menu:[
      {id:801, name:"Dan Dan Noodles", veg:false, price:240, desc:"Sichuan-spiced minced pork over chewy wheat noodles.", img:"https://images.unsplash.com/photo-1612927601601-6638404737ce?w=200&q=60&auto=format&fit=crop"},
      {id:802, name:"Mapo Tofu", veg:true, price:200, desc:"Silken tofu in a fiery fermented bean and chilli sauce.", img:"https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=200&q=60&auto=format&fit=crop"},
      {id:803, name:"Kung Pao Chicken", veg:false, price:260, desc:"Wok-fried chicken, peanuts, and dried chillies in a tangy glaze.", img:"https://images.unsplash.com/photo-1582878826629-29b7ad1cdd43?w=200&q=60&auto=format&fit=crop"},
      {id:804, name:"Wonton Soup", veg:false, price:180, desc:"Clear broth with delicate pork-and-prawn dumplings.", img:"https://images.unsplash.com/photo-1547592180-85f173990554?w=200&q=60&auto=format&fit=crop"}
    ]
  },
  {
    id:9, name:"Casa Mexicana", cuisine:"Mexican", rating:4.3, time:"30-35 min",
    img:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=70&auto=format&fit=crop",
    menu:[
      {id:901, name:"Chicken Tacos (3 pcs)", veg:false, price:220, desc:"Soft corn tortillas with grilled chicken, salsa, and lime.", img:"https://images.unsplash.com/photo-1551504734-1a4c63c6c8f1?w=200&q=60&auto=format&fit=crop"},
      {id:902, name:"Veg Burrito Bowl", veg:true, price:200, desc:"Rice, black beans, grilled peppers, corn, and guacamole.", img:"https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?w=200&q=60&auto=format&fit=crop"},
      {id:903, name:"Nachos Supreme", veg:true, price:180, desc:"Crisp tortilla chips loaded with cheese, jalapeños, and salsa.", img:"https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=200&q=60&auto=format&fit=crop"},
      {id:904, name:"Quesadilla", veg:true, price:190, desc:"Grilled tortilla folded over melted cheese and peppers.", img:"https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=200&q=60&auto=format&fit=crop"},
      {id:905, name:"Churros", veg:true, price:110, desc:"Cinnamon-sugar dusted fried dough sticks with chocolate dip.", img:"https://images.unsplash.com/photo-1624371414361-e670edf4898d?w=200&q=60&auto=format&fit=crop"}
    ]
  },
  {
    id:10, name:"Coastal Catch", cuisine:"Seafood", rating:4.5, time:"35-40 min",
    img:"https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&q=70&auto=format&fit=crop",
    menu:[
      {id:1001, name:"Malabar Fish Curry", veg:false, price:300, desc:"Tangy, coconut-rich curry with fresh kingfish and curry leaves.", img:"https://images.unsplash.com/photo-1626508035297-0d1d4574bf63?w=200&q=60&auto=format&fit=crop"},
      {id:1002, name:"Grilled Prawns", veg:false, price:380, desc:"Butter-garlic grilled prawns finished with lemon and herbs.", img:"https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=200&q=60&auto=format&fit=crop"},
      {id:1003, name:"Fish and Chips", veg:false, price:280, desc:"Beer-battered fried fish fillet with crisp, golden fries.", img:"https://images.unsplash.com/photo-1579208030886-b937da0925dc?w=200&q=60&auto=format&fit=crop"},
      {id:1004, name:"Crab Masala", veg:false, price:420, desc:"Whole crab simmered in a fiery coastal masala gravy.", img:"https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=200&q=60&auto=format&fit=crop"}
    ]
  },
  {
    id:11, name:"Olive & Thyme", cuisine:"Mediterranean", rating:4.4, time:"30-35 min",
    img:"https://images.unsplash.com/photo-1544510808-5c0c2e0d5b3e?w=600&q=70&auto=format&fit=crop",
    menu:[
      {id:1101, name:"Chicken Shawarma Wrap", veg:false, price:220, desc:"Spit-roasted chicken wrapped with garlic sauce and pickles.", img:"https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=200&q=60&auto=format&fit=crop"},
      {id:1102, name:"Falafel Plate", veg:true, price:200, desc:"Crisp chickpea falafel with hummus, pita, and tahini.", img:"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200&q=60&auto=format&fit=crop"},
      {id:1103, name:"Greek Salad", veg:true, price:180, desc:"Tomato, cucumber, olives, and feta with an oregano dressing.", img:"https://images.unsplash.com/photo-1540420773420-3366772f4999?w=200&q=60&auto=format&fit=crop"},
      {id:1104, name:"Hummus with Pita", veg:true, price:150, desc:"Creamy chickpea hummus drizzled with olive oil, warm pita.", img:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=200&q=60&auto=format&fit=crop"},
      {id:1105, name:"Baklava (3 pcs)", veg:true, price:130, desc:"Layered filo pastry with crushed pistachios and honey syrup.", img:"https://images.unsplash.com/photo-1601303516361-bcf2ce85d932?w=200&q=60&auto=format&fit=crop"}
    ]
  },
  {
    id:12, name:"Smokestack Burgers", cuisine:"Burgers", rating:4.2, time:"25-30 min",
    img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=70&auto=format&fit=crop",
    menu:[
      {id:1201, name:"Classic Cheeseburger", veg:false, price:200, desc:"Grilled beef patty, cheddar, lettuce, and house sauce.", img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&q=60&auto=format&fit=crop"},
      {id:1202, name:"Crispy Veg Burger", veg:true, price:170, desc:"Crumb-fried vegetable patty with mayo and fresh greens.", img:"https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=200&q=60&auto=format&fit=crop"},
      {id:1203, name:"BBQ Chicken Burger", veg:false, price:220, desc:"Grilled chicken breast glazed in smoky barbecue sauce.", img:"https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=200&q=60&auto=format&fit=crop"},
      {id:1204, name:"Loaded Cheese Fries", veg:true, price:160, desc:"Crisp fries piled with melted cheese and jalapeños.", img:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=200&q=60&auto=format&fit=crop"},
      {id:1205, name:"Choco Milkshake", veg:true, price:140, desc:"Thick, cold chocolate shake topped with whipped cream.", img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&q=60&auto=format&fit=crop"}
    ]
  }
];

/* ============ STATE ============ */
let activeCuisine = "All";
let searchTerm = "";
let cart = {}; // itemId -> {item, qty, restaurantId, restaurantName}
let currentRestaurant = null;
let orderState = null; // {restaurantName, total, items, stepIndex, ticketId}

/* ============ ELEMENTS ============ */
const cuisineRail = document.getElementById('cuisineRail');
const restaurantGrid = document.getElementById('restaurantGrid');
const resultCount = document.getElementById('resultCount');
const gridHeading = document.getElementById('gridHeading');
const searchInput = document.getElementById('searchInput');

const menuOverlay = document.getElementById('menuOverlay');
const modalRestName = document.getElementById('modalRestName');
const modalRestMeta = document.getElementById('modalRestMeta');
const modalMenuItems = document.getElementById('modalMenuItems');
const closeModalBtn = document.getElementById('closeModalBtn');

const cartDrawer = document.getElementById('cartDrawer');
const drawerOverlay = document.getElementById('drawerOverlay');
const drawerBody = document.getElementById('drawerBody');
const closeDrawerBtn = document.getElementById('closeDrawerBtn');
const openCartBtn = document.getElementById('openCartBtn');
const cartCount = document.getElementById('cartCount');

const toast = document.getElementById('toast');

/* ============ RENDER: CUISINE RAIL ============ */
function renderCuisineRail(){
  cuisineRail.innerHTML = CUISINES.map(c => `
    <button class="ticket-chip ${c===activeCuisine?'active':''}" role="tab" aria-selected="${c===activeCuisine}" data-cuisine="${c}">${c}</button>
  `).join('');
  cuisineRail.querySelectorAll('.ticket-chip').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      activeCuisine = btn.dataset.cuisine;
      renderCuisineRail();
      renderGrid();
    });
  });
}

/* ============ RENDER: RESTAURANT GRID ============ */
function renderGrid(){
  let list = RESTAURANTS.filter(r=>{
    const matchesCuisine = activeCuisine==="All" || r.cuisine===activeCuisine;
    const term = searchTerm.trim().toLowerCase();
    const matchesSearch = !term || r.name.toLowerCase().includes(term) || r.cuisine.toLowerCase().includes(term) || r.menu.some(m=>m.name.toLowerCase().includes(term));
    return matchesCuisine && matchesSearch;
  });

  gridHeading.textContent = activeCuisine==="All" ? "Open kitchens near you" : activeCuisine+" kitchens";
  resultCount.textContent = list.length + (list.length===1 ? " place" : " places");

  if(list.length===0){
    restaurantGrid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--ink-soft);">
      <div style="font-size:2rem;margin-bottom:10px;">🍽️</div>
      Nothing matches that search. Try a different dish or cuisine.
    </div>`;
    return;
  }

  restaurantGrid.innerHTML = list.map(r=>`
    <div class="r-card" data-id="${r.id}" tabindex="0" role="button" aria-label="View menu for ${r.name}">
      <img class="r-img" src="${r.img}" alt="${r.name}" loading="lazy" onerror="this.onerror=null;this.src='data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27600%27 height=%27300%27%3E%3Crect width=%27600%27 height=%27300%27 fill=%27%23F1EAE0%27/%3E%3Ctext x=%2750%25%27 y=%2750%25%27 font-family=%27sans-serif%27 font-size=%2728%27 fill=%27%236B635A%27 text-anchor=%27middle%27 dominant-baseline=%27middle%27%3E🍽️%3C/text%3E%3C/svg%3E';">
      <div class="r-body">
        <h3>${r.name}</h3>
        <div class="r-cuisine">${r.cuisine}</div>
        <div class="r-meta">
          <span class="rating">★ ${r.rating}</span>
          <span>${r.time}</span>
        </div>
      </div>
    </div>
  `).join('');

  restaurantGrid.querySelectorAll('.r-card').forEach(card=>{
    const open = ()=> openRestaurant(parseInt(card.dataset.id));
    card.addEventListener('click', open);
    card.addEventListener('keydown', e=>{ if(e.key==='Enter' || e.key===' '){ e.preventDefault(); open(); } });
  });
}

searchInput.addEventListener('input', e=>{
  searchTerm = e.target.value;
  renderGrid();
});

/* ============ RESTAURANT MODAL ============ */
function openRestaurant(id){
  currentRestaurant = RESTAURANTS.find(r=>r.id===id);
  modalRestName.textContent = currentRestaurant.name;
  modalRestMeta.textContent = `${currentRestaurant.cuisine} · ★ ${currentRestaurant.rating} · ${currentRestaurant.time}`;
  renderMenuItems();
  menuOverlay.classList.add('open');
  document.body.style.overflow='hidden';
}

function closeRestaurant(){
  menuOverlay.classList.remove('open');
  document.body.style.overflow='';
}
closeModalBtn.addEventListener('click', closeRestaurant);
menuOverlay.addEventListener('click', e=>{ if(e.target===menuOverlay) closeRestaurant(); });

function renderMenuItems(){
  modalMenuItems.innerHTML = currentRestaurant.menu.map(item=>{
    const qty = cart[item.id] ? cart[item.id].qty : 0;
    return `
    <div class="menu-item">
      <div class="menu-item-info">
        <div class="name-row">
          <span class="veg-dot" style="${item.veg?'':'border-color:var(--terracotta);'}"></span>
          <h4>${item.name}</h4>
        </div>
        <p class="desc">${item.desc}</p>
        <div class="price">₹${item.price}</div>
        <div class="add-row" data-item="${item.id}">
          ${qty===0 ? `<button class="add-btn" data-add="${item.id}">ADD</button>` : qtyStepperHTML(item.id, qty)}
        </div>
      </div>
      <img class="menu-item-img" src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.onerror=null;this.src='data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2788%27 height=%2788%27%3E%3Crect width=%2788%27 height=%2788%27 fill=%27%23F1EAE0%27/%3E%3Ctext x=%2750%25%27 y=%2750%25%27 font-family=%27sans-serif%27 font-size=%2722%27 fill=%27%236B635A%27 text-anchor=%27middle%27 dominant-baseline=%27middle%27%3E🍲%3C/text%3E%3C/svg%3E';">
    </div>`;
  }).join('');

  modalMenuItems.querySelectorAll('[data-add]').forEach(btn=>{
    btn.addEventListener('click', ()=> addToCart(parseInt(btn.dataset.add)));
  });
  attachStepperHandlers(modalMenuItems);
}

function qtyStepperHTML(itemId, qty){
  return `<div class="qty-stepper">
    <button data-dec="${itemId}" aria-label="Remove one">−</button>
    <span>${qty}</span>
    <button data-inc="${itemId}" aria-label="Add one">+</button>
  </div>`;
}

function attachStepperHandlers(container){
  container.querySelectorAll('[data-inc]').forEach(btn=>{
    btn.addEventListener('click', ()=> addToCart(parseInt(btn.dataset.inc)));
  });
  container.querySelectorAll('[data-dec]').forEach(btn=>{
    btn.addEventListener('click', ()=> removeFromCart(parseInt(btn.dataset.dec)));
  });
}

/* ============ CART LOGIC ============ */
function addToCart(itemId){
  // prevent mixing restaurants
  const restKeys = Object.values(cart);
  if(restKeys.length > 0 && restKeys[0].restaurantId !== currentRestaurant.id){
    showToast("Your ticket has items from another kitchen. Clear it first, or finish that order.");
    return;
  }
  const item = currentRestaurant.menu.find(m=>m.id===itemId);
  if(!cart[itemId]){
    cart[itemId] = {item, qty:1, restaurantId:currentRestaurant.id, restaurantName:currentRestaurant.name};
  } else {
    cart[itemId].qty++;
  }
  refreshCartUI();
  renderMenuItems();
}

function removeFromCart(itemId){
  if(!cart[itemId]) return;
  cart[itemId].qty--;
  if(cart[itemId].qty<=0) delete cart[itemId];
  refreshCartUI();
  if(currentRestaurant) renderMenuItems();
}

function cartTotalQty(){
  return Object.values(cart).reduce((sum,c)=>sum+c.qty, 0);
}
function cartSubtotal(){
  return Object.values(cart).reduce((sum,c)=>sum+c.qty*c.item.price, 0);
}

function refreshCartUI(){
  const total = cartTotalQty();
  cartCount.textContent = total;
  cartCount.classList.add('bump');
  setTimeout(()=>cartCount.classList.remove('bump'), 200);
  if(cartDrawer.classList.contains('open')) renderCartDrawer();
}

/* ============ CART DRAWER ============ */
function openDrawer(){
  cartDrawer.classList.add('open');
  drawerOverlay.classList.add('open');
  document.body.style.overflow='hidden';
  renderCartDrawer();
}
function closeDrawer(){
  cartDrawer.classList.remove('open');
  drawerOverlay.classList.remove('open');
  document.body.style.overflow='';
}
openCartBtn.addEventListener('click', openDrawer);
closeDrawerBtn.addEventListener('click', closeDrawer);
drawerOverlay.addEventListener('click', closeDrawer);

function renderCartDrawer(){
  const entries = Object.values(cart);

  if(orderState){
    renderTrackingView();
    return;
  }

  if(entries.length===0){
    drawerBody.innerHTML = `<div class="empty-cart">
      <span class="icon">🧾</span>
      Your ticket is empty.<br>Add something from a kitchen to start one.
    </div>`;
    return;
  }

  const restName = entries[0].restaurantName;
  const subtotal = cartSubtotal();
  const deliveryFee = subtotal > 0 ? 35 : 0;
  const taxes = Math.round(subtotal*0.05);
  const grandTotal = subtotal + deliveryFee + taxes;

  drawerBody.innerHTML = `
    <div class="cart-restaurant-label">From ${restName}</div>
    ${entries.map(e=>`
      <div class="cart-line">
        <span class="l-name">${e.item.name} <span class="l-qty">×${e.qty}</span></span>
        <span class="l-price">₹${e.qty*e.item.price}</span>
      </div>
    `).join('')}
    <div class="cart-summary">
      <div class="summary-row"><span>Subtotal</span><span>₹${subtotal}</span></div>
      <div class="summary-row"><span>Delivery fee</span><span>₹${deliveryFee}</span></div>
      <div class="summary-row"><span>Taxes</span><span>₹${taxes}</span></div>
      <div class="summary-row total"><span>Total</span><span>₹${grandTotal}</span></div>
    </div>
    <div style="margin-top:24px;">
      <button class="back-link" id="toCheckoutBtn" style="background:none;border:none;width:100%;text-align:left;cursor:pointer;">
      </button>
    </div>
    <div id="checkoutSection"></div>
  `;

  renderCheckoutPrompt(grandTotal, restName, entries);
}

function renderCheckoutPrompt(grandTotal, restName, entries){
  const section = document.getElementById('checkoutSection');
  section.innerHTML = `<button class="btn-primary" id="goCheckoutBtn" style="margin-top:4px;">Checkout · ₹${grandTotal}</button>`;
  document.getElementById('goCheckoutBtn').addEventListener('click', ()=> renderCheckoutForm(grandTotal, restName, entries));
}

/* ============ CHECKOUT FORM ============ */
let selectedPayment = "Cash on Delivery";

function renderCheckoutForm(grandTotal, restName, entries){
  drawerBody.innerHTML = `
    <button class="back-link" id="backToCartBtn">← Back to ticket</button>
    <h3 style="margin:0 0 4px;font-size:1.1rem;">Delivery details</h3>
    <p style="font-size:0.82rem;color:var(--ink-soft);margin:0 0 18px;">From ${restName}</p>

    <div class="field">
      <label for="custName">Full name</label>
      <input type="text" id="custName" placeholder="e.g. Arun Kumar" autocomplete="name">
    </div>
    <div class="field">
      <label for="custPhone">Phone number</label>
      <input type="tel" id="custPhone" placeholder="e.g. 98765 43210" autocomplete="tel">
    </div>
    <div class="field">
      <label for="custAddress">Delivery address</label>
      <input type="text" id="custAddress" placeholder="House no, street, area" autocomplete="street-address">
    </div>

    <div class="field">
      <label>Payment method</label>
      <div class="pay-options" id="payOptions">
        <button type="button" class="pay-opt selected" data-pay="Cash on Delivery">💵 Cash on Delivery</button>
        <button type="button" class="pay-opt" data-pay="UPI">📱 UPI</button>
        <button type="button" class="pay-opt" data-pay="Card">💳 Card</button>
      </div>
    </div>

    <div class="cart-summary">
      <div class="summary-row total"><span>Total to pay</span><span>₹${grandTotal}</span></div>
    </div>

    <button class="btn-primary" id="placeOrderBtn" style="margin-top:18px;">Place order · ₹${grandTotal}</button>
    <p id="formError" style="color:var(--terracotta);font-size:0.8rem;margin-top:10px;display:none;"></p>
  `;

  document.getElementById('backToCartBtn').addEventListener('click', renderCartDrawer);

  document.querySelectorAll('.pay-opt').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.pay-opt').forEach(b=>b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedPayment = btn.dataset.pay;
    });
  });

  document.getElementById('placeOrderBtn').addEventListener('click', ()=>{
    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const address = document.getElementById('custAddress').value.trim();
    const errEl = document.getElementById('formError');

    if(!name || !phone || !address){
      errEl.textContent = "Fill in your name, phone, and address to place the order.";
      errEl.style.display = 'block';
      return;
    }
    if(!/^\d{7,15}$/.test(phone.replace(/\s+/g,''))){
      errEl.textContent = "Enter a valid phone number.";
      errEl.style.display = 'block';
      return;
    }

    placeOrder(grandTotal, restName, entries);
  });
}

/* ============ ORDER TRACKING ============ */
const STAGES = [
  {key:'placed', label:'Order placed', icon:'🧾'},
  {key:'preparing', label:'Kitchen is preparing your food', icon:'🔥'},
  {key:'out', label:'Out for delivery', icon:'🛵'},
  {key:'delivered', label:'Delivered', icon:'✅'}
];

function placeOrder(total, restName, entries){
  orderState = {
    ticketId: '#'+Math.floor(1000+Math.random()*9000),
    restaurantName: restName,
    total,
    items: entries.map(e=>({name:e.item.name, qty:e.qty, price:e.item.price})),
    stepIndex: 0,
    placedAt: new Date()
  };
  cart = {};
  refreshCartUI();
  renderTrackingView();
  showToast("Order placed! Your ticket is in the kitchen.");
  advanceOrderAutomatically();
}

function advanceOrderAutomatically(){
  const delays = [3500, 6000, 6000]; // ms between stage advances
  let i = 0;
  function step(){
    if(!orderState || orderState.stepIndex >= STAGES.length-1) return;
    setTimeout(()=>{
      if(!orderState) return;
      orderState.stepIndex++;
      if(cartDrawer.classList.contains('open')) renderTrackingView();
      showToast(STAGES[orderState.stepIndex].icon + " " + STAGES[orderState.stepIndex].label);
      i++;
      if(i < delays.length) step();
    }, delays[i]);
  }
  step();
}

function renderTrackingView(){
  const o = orderState;
  const eta = new Date(o.placedAt.getTime() + 35*60000);
  const etaStr = eta.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});

  drawerBody.innerHTML = `
    <div class="track-wrap">
      <div class="order-ticket">
        <div class="t-head">
          <div>
            <div class="t-id">${o.ticketId}</div>
            <div style="font-size:0.8rem;color:var(--ink-soft);">${o.restaurantName}</div>
          </div>
          <div class="t-eta">
            Arriving by<br><strong>${o.stepIndex===3 ? 'Delivered' : etaStr}</strong>
          </div>
        </div>
        <div class="stamp-track">
          ${STAGES.map((s,i)=>{
            const done = i < o.stepIndex;
            const active = i === o.stepIndex;
            return `<div class="stamp-step ${done?'done':''} ${active?'active':''}">
              <div class="stamp-circle">${done ? '✓' : s.icon}</div>
              <div class="stamp-text">
                <div class="label">${s.label}</div>
                ${active ? `<div class="time">In progress…</div>` : (done ? `<div class="time">Done</div>` : '')}
              </div>
            </div>`;
          }).join('')}
        </div>
      </div>

      <div class="order-summary-mini">
        <h3>Ticket contents</h3>
        ${o.items.map(it=>`
          <div class="cart-line">
            <span class="l-name">${it.name} <span class="l-qty">×${it.qty}</span></span>
            <span class="l-price">₹${it.qty*it.price}</span>
          </div>
        `).join('')}
        <div class="cart-summary">
          <div class="summary-row total"><span>Total paid</span><span>₹${o.total}</span></div>
        </div>
      </div>

      ${o.stepIndex===3 ? `<button class="btn-primary" id="newOrderBtn" style="margin-top:20px;">Start a new order</button>` : ''}
    </div>
  `;

  const newBtn = document.getElementById('newOrderBtn');
  if(newBtn){
    newBtn.addEventListener('click', ()=>{
      orderState = null;
      renderCartDrawer();
    });
  }
}

/* ============ TOAST ============ */
let toastTimer;
function showToast(msg){
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> toast.classList.remove('show'), 2800);
}

/* ============ ESC key closes overlays ============ */
document.addEventListener('keydown', e=>{
  if(e.key==='Escape'){
    if(menuOverlay.classList.contains('open')) closeRestaurant();
    if(cartDrawer.classList.contains('open')) closeDrawer();
  }
});

/* ============ INIT ============ */
renderCuisineRail();
renderGrid();
