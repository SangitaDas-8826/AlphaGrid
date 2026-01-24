import mongoose from "mongoose";
import Product from "./models/productModel.js";
import "dotenv/config";

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");


    // ❗ Clear old data
    await Product.deleteMany();

    const products = [
      {
        name: "Vivo V29 5G",
        price: 79999,
        category: "MOBILE",
        brand: "Vivo",
        quality:
          "8 GB RAM | 256 GB ROM | 6.1 inch Full HD+ Display | 50MP + 10MP + 12MP Camera | 3900 mAh Battery | Snapdragon 8 Gen 2",
        image: "http://localhost:5000/upload/phone.jpeg",
        images: [
          "http://localhost:5000/upload/phone.jpeg",
          "http://localhost:5000/upload/vivo1.jpeg",
           "http://localhost:5000/upload/vivo2.jpeg",
            "http://localhost:5000/upload/vivo3.jpeg",
        ],
        description:
          "The latest iPhone 15 with A16 Bionic chip, stunning display, and advanced camera features.The latest iPhone 15 with A16 Bionic chip, stunning display, and advanced camera features.",
        countInStock: 15,
      },
       {
        name: "Vivo T4 5G",
        price: 24999,
        category: "MOBILE",
        brand: "Vivo",
        quality:
          "8 GB RAM | 256 GB ROM | Snapdragon 7s Gen 3 5G | Octa Core Processor | 50MP (OIS) + 2MP Rear Camera | 32MP Front Camera | 6.77 inch Quad Curved AMOLED 120 Hz Display | 7300 mAh Battery | Brightest Quad Curved AMOLED Display in The Segment",
        image: "http://localhost:5000/upload/phone.jpeg",
        images: [
          "http://localhost:5000/upload/phone.jpeg",
          "http://localhost:5000/upload/vivo1.jpeg",
           "http://localhost:5000/upload/vivo2.jpeg",
            "http://localhost:5000/upload/vivo3.jpeg",
        ],
        description:
          "India’s Biggest Battery Ever: Equipped with India’s biggest-ever 7300mAh ultra-capacity battery. Despite its size, the device remains ultra-slim at just 0.789cm and light at 199g. With 90W FlashCharge technology, power up in no time and enjoy longer usage without the wait.Brightest Display: Enjoy an ultra-vivid viewing experience on the Flagship level Quad-Curved AMOLED display, reaching up to 5000 nits local peak brightness. Built tough, the Z10 is also military-grade certified for durability, combining beauty with resilience.Exceptional Performance: The fastest* processor in the segment powered by Snapdragon 7s Gen3 mobile platform , built on a 4nm TSMC process, and delivering an impressive 820K+ AnTuTu score. The 12GB RAM variant doubles its memory with an additional 12GB of extended RAM for seamless multitasking.Next-Level AI Camera: Capture every detail with the 50MP Sony IMX882 OIS camera, record in 4K at 30fps, and take stunning selfies with the 32MP wide-angle front camera. Powered by AI, features include AI Erase, AI Photo Enhance, AI Super Documents, AI Note Assist, AI Live Text, and the intuitive Circle to Search with Google.",
        countInStock: 15,
      },
      {
        name: "Vivo Y19 Series 5G",
        price: 8999,
        category: "MOBILE",
        brand: "Vivo",
        quality:
          "Vivo Y19e (Majestic Green, 4GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers | with Charger",
        image: "http://localhost:5000/upload/phone.jpeg",
        images: [
          "http://localhost:5000/upload/phone.jpeg",
          "http://localhost:5000/upload/vivo1.jpeg",
           "http://localhost:5000/upload/vivo2.jpeg",
            "http://localhost:5000/upload/vivo3.jpeg",
        ],
        description:
          "Dual 13MP + 0.08MP Rear Camera | 5MP Selfie Camera17.1196 cm (6.74 inches)Memory & SIM: 4GB RAM | 64GB internal memory 15W fast charging with 5500 mAh battery Processor: Unisoc T7225 Cellular Technology : 4G",
        countInStock: 15,
      },
      {
        name: "Vivo V60",
        price: 38999,
        category: "MOBILE",
        brand: "Vivo",
        quality:
          "Vivo V60 5G (Mist Gray, 8GB RAM, 256GB Storage) with No Cost EMI | Funtouch OS 15 | RAM Memory Installed Size	8 GB | CPU Model	Others | CPU Speed	1.8, 2.4, 2.8 GHz",
        image: "http://localhost:5000/upload/phone.jpeg",
        images: [
          "http://localhost:5000/upload/phone.jpeg",
          "http://localhost:5000/upload/vivo1.jpeg",
           "http://localhost:5000/upload/vivo2.jpeg",
            "http://localhost:5000/upload/vivo3.jpeg",
        ],
        description:
          " Rear Camera: 50 MP Zeiss OIS Main Camera: OIS; f/1.88; FOV 84°; 6P lens, 50 MP Zeiss Super Telephoto Camera: AF; OIS, f/2.65, FoV 33.1°, 4P lens 10X Telephoto Stage Portrait, 8 MP ZEISS Ultra Wide-Angle camera: f2.0, FoV 120° ± 3, 5P lens | Front Camera: 50 MP ZEISS Group Selfie Camera: AF, f/2.2, FoV 92° ± 3°, 5P lens | 4K/1080P/720P Video Recording Resolution.",
        countInStock: 15,
      },
      {
      name: "Vivo V60e",
        price: 31998,
        category: "MOBILE",
        brand: "Vivo",
        quality:
          "Vivo V60 5G (Noble Gold, 8GB RAM, 256GB Storage) with No Cost EMI | Funtouch OS 15 | RAM Memory Installed Size	8 GB | CPU Model	Others | CPU Speed	1.8, 2.4, 2.8 GHz",
        image: "http://localhost:5000/upload/phone.jpeg",
        images: [
          "http://localhost:5000/upload/phone.jpeg",
          "http://localhost:5000/upload/vivo1.jpeg",
           "http://localhost:5000/upload/vivo2.jpeg",
            "http://localhost:5000/upload/vivo3.jpeg",
        ],
        description:
          "7.20 cm (6.77″) Slim Quad Curved AMOLED Capacitive multi-touch Display | P3 wide colour gamut | 387 PPI high pixel density with 1600 nits peak local brightness | 120Hz refresh rate | 2392 × 1080 resolution | Motion Blur delivers enhanced fluidity of dynamic effects | Customizable Lock Screen.6500 mAh battery | Li-ion battery.AI Personal Assistant (AI Captions & AI Smart Call Assistant) | Gemini- Connected Apps & Gemini Live" ,
        countInStock: 15,
      },
      {
      name: "Oppo Reno15 5G",
        price: 53999,
        category: "MOBILE",
        brand: "Oppo",
        quality:
          "Oppo Reno15 5G (Glacier White, 12GB RAM, 512GB Storage) with No Cost EMI",
        image: "http://localhost:5000/upload/phone.jpeg",
        images: [
          "http://localhost:5000/upload/phone.jpeg",
          "http://localhost:5000/upload/vivo1.jpeg",
           "http://localhost:5000/upload/vivo2.jpeg",
            "http://localhost:5000/upload/vivo3.jpeg",
        ],
        description:
          "The OPPO Reno 15 features the stunning Dancing Aurora Design. When you move the phone, flowing light patterns move like water across its shaped glass back. Inspired by the northern lights in the sky, the colors change smoothly, making every phone look one-of-a-kind. It has a premium and artistic look that grabs your attention" ,
        countInStock: 15,
      }, 
      {
      name: "Oppo A6 Pro 5G",
        price: 23999,
        category: "MOBILE",
        brand: "Oppo",
        quality:
          "Oppo A6 Pro 5G (Brown, 8GB RAM, 256GB Storage) with No Cost EMI",
        image: "http://localhost:5000/upload/phone.jpeg",
        images: [
          "http://localhost:5000/upload/phone.jpeg",
          "http://localhost:5000/upload/vivo1.jpeg",
           "http://localhost:5000/upload/vivo2.jpeg",
            "http://localhost:5000/upload/vivo3.jpeg",
        ],
        description:
          "Enjoy all-day power with a large battery and get hours of usage in minutes thanks to ultra-fast 80W charging.Wired reverse charging uses a C-to-C data cable to take the phone's charging port as the output port for charging other devices",
        countInStock: 15,
      }, 
      {
      name: "Oppo K13x 5G",
        price: 23999,
        category: "MOBILE",
        brand: "Oppo",
        quality:
          "OPPO K13x 5G 6000mAh and 45W SUPERVOOC Charger & AI (Breeze Blue, 128 GB) (6 GB RAM)",
        image: "http://localhost:5000/upload/phone.jpeg",
        images: [
          "http://localhost:5000/upload/phone.jpeg",
          "http://localhost:5000/upload/vivo1.jpeg",
           "http://localhost:5000/upload/vivo2.jpeg",
            "http://localhost:5000/upload/vivo3.jpeg",
        ],
        description:
          "Enjoy all-day power with a large battery and get hours of usage in minutes thanks to ultra-fast 80W charging.Wired reverse charging uses a C-to-C data cable to take the phone's charging port as the output port for charging other devices",
        countInStock: 15,
      }, 
      {
      name: "Oppo A38 ",
        price: 9890,
        category: "MOBILE",
        brand: "Oppo",
        quality:
          "OPPO A38 (Glowing Black, 4GB RAM, 128GB Storage) | 5000 mAh Battery and 33W SUPERVOOC ",
        image: "http://localhost:5000/upload/phone.jpeg",
        images: [
          "http://localhost:5000/upload/phone.jpeg",
          "http://localhost:5000/upload/vivo1.jpeg",
           "http://localhost:5000/upload/vivo2.jpeg",
            "http://localhost:5000/upload/vivo3.jpeg",
        ],
        description:
          "Big 5000 mAh Battery with 33W SUPERVOOC Charging | 50MP + 2MP Rear AI Camera | 5MP Front Camera BRILLIANT DISPLAY — Stunning 15.40 cm (6.1″) Super Retina XDR display. Ceramic Shield front, tougher than any smartphone glass.Get quick, customisable access to your favourite apps and features, or use visual intelligence to learn about your surroundings.",
        countInStock: 15,
      }, 
      {
      name: "iPhone 16e ",
        price: 59900,
        category: "MOBILE",
        brand: "Apple",
        quality:
          "iPhone 16e 128 GB: Built for Apple Intelligence, A18 Chip, Supersized Battery Life, 48MP Fusion. Camera, 15.40 cm (6.1″) Super Retina XDR Display",
        image: "http://localhost:5000/upload/phone.jpeg",
        images: [
          "http://localhost:5000/upload/phone.jpeg",
          "http://localhost:5000/upload/vivo1.jpeg",
           "http://localhost:5000/upload/vivo2.jpeg",
            "http://localhost:5000/upload/vivo3.jpeg",
        ],
        description:
        "BUILT FOR APPLE INTELLIGENCE — Personal, private, powerful. Write, express yourself and get things done effortlessly. A18 chip empowers Apple Intelligence, gaming and iOS updates for years to come.Text, browse and binge movies and shows with up to 26 hours of video playback — the best battery life in a 6.1″ iPhone.The 2-in-1 camera system has a 48MP Fusion camera for super-high-resolution photos and a 2x optical-quality Telephoto. Take incredible selfies with the 12MP front camera.BRILLIANT DISPLAY — Stunning 15.40 cm (6.1″) Super Retina XDR display. Ceramic Shield front, tougher than any smartphone glass.",
        countInStock: 15,
      }, 
       {
      name: "iPhone 16 Pro Max ",
        price: 174900,
        category: "MOBILE",
        brand: "Apple",
        quality:
         "iPhone 16 Pro Max 1 TB: 5G Mobile Phone with Camera Control, 4K 120 fps Dolby Vision and a Huge Leap in Battery Life. Works with AirPods; Desert Titanium",
        image: "http://localhost:5000/upload/phone.jpeg",
        images: [
          "http://localhost:5000/upload/phone.jpeg",
          "http://localhost:5000/upload/vivo1.jpeg",
           "http://localhost:5000/upload/vivo2.jpeg",
            "http://localhost:5000/upload/vivo3.jpeg",
        ],
        description:"Phone 16 Pro Max has a strong and light titanium design with a larger 17.43 cm (6.9″) Super Retina XDR display. It’s remarkably durable with the latest-generation Ceramic Shield material that’s 2x tougher than any smartphone glass.Apple Intelligence is the personal intelligence system that helps you write, express yourself and get things done effortlessly. With groundbreaking privacy protections, it gives you peace of mind that no one else can access your data — not even Apple.Camera Control gives you an easier way to quickly access camera tools, like zoom or depth of field, so you can take the perfect shot in record time.",
       countInStock: 15,
      }, 
      {
      name: "iPhone 17 Pro  ",
        price: 154900,
        category: "MOBILE",
        brand: "Apple",
        quality:
        "iPhone 17 Pro 512 GB: 15.93 cm (6.3″) Display with Promotion up to 120Hz, A19 Pro Chip, Breakthrough Battery Life, Pro Fusion Camera System with Center Stage Front Camera; Cosmic Orange",
        image: "http://localhost:5000/upload/phone.jpeg",
        images: [
          "http://localhost:5000/upload/phone.jpeg",
          "http://localhost:5000/upload/vivo1.jpeg",
           "http://localhost:5000/upload/vivo2.jpeg",
            "http://localhost:5000/upload/vivo3.jpeg",
        ],
        description:"Heat-forged aluminium unibody enclosure for the most powerful iPhone ever made.Ceramic Shield protects the back of iPhone 17 Pro Max, making it 4x more resistant to cracks. And the new Ceramic Shield 2 on the front has 3x better scratch resistance.With all 48MP rear cameras and 8x optical-quality zoom — the longest zoom ever on an iPhone. It’s the equivalent of 8 pro lenses in your pocket.Flexible ways to frame your shot. Smarter group selfies, Dual Capture video for simultaneous front and rear recording, and more.LIGHTNING FAST — A19 Pro is the most powerful iPhone chip yet, delivering up to 40% better sustained performance.The unibody design creates massive additional battery capacity, for up to 31 hours of video playback. Charge up to 50% in 20 minutes.",
       countInStock: 15,
      }, 
      {
      name: "iPhone Air   ",
        price: 92499,
        category: "MOBILE",
        brand: "Apple",
        quality:
         "iPhone Air 256 GB: Thinnest iPhone Ever, 16.63 cm (6.5″) Display with Promotion up to 120Hz, Powerful A19 Pro Chip, Center Stage Front Camera, All-Day Battery Life",
        image: "http://localhost:5000/upload/phone.jpeg",
        images: [
          "http://localhost:5000/upload/phone.jpeg",
          "http://localhost:5000/upload/vivo1.jpeg",
           "http://localhost:5000/upload/vivo2.jpeg",
            "http://localhost:5000/upload/vivo3.jpeg",
        ],
        description:" The thinnest iPhone ever, with the power of a pro chip inside. At 5.6 mm, iPhone Air is so impossibly thin and light that it nearly disappears in your hand.Ultralight titanium frame. Ceramic Shield protects the back of iPhone Air, making it 4x more resistant to cracks. And the new Ceramic Shield 2 on the front has 3x better scratch resistance.Flexible ways to frame your shot. Smarter group selfies, Dual Capture video for simultaneous front and rear recording, and more.48MP Fusion camera system with 2x Telephoto. Effortlessly frame the perfect shot from right where you are.A19 Pro is the most efficient iPhone chip yet. Gives you pro performance in a breakthrough thin and light design.Start with up to 27 hours of video playback and add up to 13 more hours when you snap on the MagSafe Battery accessory.",
       countInStock: 15,
      }, 
      {
        name: "iPhone 17 Pro Max",
        price: 149900,
        category: "MOBILE",
        brand: "Apple",
        quality:
       "iPhone 17 Pro Max 256 GB: 17.42 cm (6.9″) Display with Promotion, A19 Pro Chip, Best Battery Life in Any iPhone Ever, Pro Fusion Camera System, Center Stage Front Camera",
        image: "http://localhost:5000/upload/phone.jpeg",
        images: [
          "http://localhost:5000/upload/phone.jpeg",
          "http://localhost:5000/upload/vivo1.jpeg",
           "http://localhost:5000/upload/vivo2.jpeg",
            "http://localhost:5000/upload/vivo3.jpeg",
        ],
        description:"Heat-forged aluminium unibody enclosure for the most powerful iPhone ever made.Ceramic Shield protects the back of iPhone 17 Pro Max, making it 4x more resistant to cracks. And the new Ceramic Shield 2 on the front has 3x better scratch resistance.Flexible ways to frame your shot. Smarter group selfies, Dual Capture video for simultaneous front and rear recording, and more.A19 Pro is the most powerful iPhone chip yet, delivering up to 40% better sustained performance.The unibody design creates massive additional battery capacity, for up to 37 hours of video playback. Charge up to 50% in 20 minutes.",
       countInStock: 15,
      }, 
      
      {
        name: "ASUS VivoBook Go 14",
        price: 32031,
        category: "LAPTOP",
        brand: "ASUS",
        quality: "ASUS Vivobook Go 14, AMD Ryzen 3 7320U, 8GB RAM, 512GB SSD, FHD 14, Windows 11, Office Home 2024, Mixed Black, 1.38 kg, E1404FA-NK3325WS, AMD Radeon iGPU, M365 Basic (1Year)*, Thin & Light Laptop",
        image: "http://localhost:5000/upload/headphone.jpeg",
       images: [
          "http://localhost:5000/upload/phone.jpeg",
          "http://localhost:5000/upload/vivo1.jpeg",
           "http://localhost:5000/upload/vivo2.jpeg",
            "http://localhost:5000/upload/vivo3.jpeg",
        ],
        description:
        "AMD Ryzen 3 7320U Processor 2.4GHz (6MB Cache, up to 4.1GHz, 4 cores, 8 Threads).14.0-inch, FHD (1920 x 1080) 16:9 aspect ratio, 60Hz refresh rate, 250nits Brightness | Keyboard : Chiclet Keyboard.Intergrated AMD Radeon Graphics.【Software : Microsoft 365 Basic with 100GB Cloud Storage for 1 Year + Office Home 2024 with lifetime validity | Operating System : Windows 11 Home】.map(item => item)",
        countInStock: 25,
      },
      {
        name: "HP 15",
        price: 56990,
        category: "LAPTOP",
        brand: "HP",
        quality: "HP 15, 13th Gen Intel Core i5-1334U (16GB DDR4, 1TB SSD) FHD, Anti-Glare, Micro-Edge, 15.6''/39.6cm, Win11, M365(1yr) Office24, Silver, 1.59kg, FD0552TU, Iris Xe, FHD Camera w/Shutter",
         image: "http://localhost:5000/upload/headphone.jpeg",
       images: [
          "http://localhost:5000/upload/phone.jpeg",
          "http://localhost:5000/upload/vivo1.jpeg",
           "http://localhost:5000/upload/vivo2.jpeg",
            "http://localhost:5000/upload/vivo3.jpeg",
        ],
        description:
      "Processor, Memory & Storage: Intel Core i5-1334U (up to 4.6 GHz with Intel Turbo Boost Technology, 12 MB L3 cache, 10 cores, 12 threads)| Memory: 16 GB DDR4-3200 MT/s (2 x 8 GB) | Storage: 1 TB PCIe Gen4 NVMe M.2 SSD.Operating System & Preinstalled Software: Windows 11 Home Single Language | MS Office Home 2024 |1 year Microsoft 365 Basic Free|.1 USB Type-C 5Gbps signaling rate (supports data transfer only and does not support charging or external monitors); 2 USB Type-A 5Gbps signaling rate; 1 AC smart pin; 1 HDMI 1.4b; 1 headphone/microphone combo| Connectivity: Realtek Wi-Fi 6 (1x1) and Bluetooth 5.3 wireless card",
        countInStock: 25,
      },
       {
        name: "Neopticon BrowseBook 14.1",
        price: 12190,
        category: "LAPTOP",
        brand: "Nepticon",
        quality: "Neopticon BrowseBook 14.1 FHD IPS Laptop | Best Student & Office Work Laptop | Celeron N4020 | 4GB RAM | 128GB SSD | Windows 11 | 38Wh | 1.3kg ",
        image: "http://localhost:5000/upload/headphone.jpeg",
       images: [
          "http://localhost:5000/upload/phone.jpeg",
          "http://localhost:5000/upload/vivo1.jpeg",
           "http://localhost:5000/upload/vivo2.jpeg",
            "http://localhost:5000/upload/vivo3.jpeg",
        ],
        description:
          "Full HD IPS Display: The 14.1-inch screen with 1920x1080 resolution delivers sharp and vibrant visuals, making it ideal for watching videos, browsing, and working on documents.38Wh Long-Lasting Battery: The 5000mAh battery provides extended usage time, allowing you to work or enjoy entertainment for hours without needing to recharge frequently.Smooth Performance: Powered by the Intel Celeron N4020 processor clocked up to 2.8GHz, along with 4GB RAM and a 128GB SSD, this laptop ensures quick multitasking and fast program loading.Multiple Ports: Equipped with USB 3.0, Type-C, Mini HDMI, a Micro SD card slot, and a 3.5mm audio jack, it offers versatile connectivity options for all your devices and accessories.Built for Daily Use: Lightweight at just 1.3kg, it features a webcam, stereo speakers, Bluetooth, and WiFi, making it perfect for everyday tasks, video calls, and entertainment on the go.",
        countInStock: 25,
      },
      {
        name: "HP Smartchoice Victus",
        price: 68990,
        category: "LAPTOP",
        brand: "HP",
        quality: "HP Smartchoice Victus, AMD Ryzen 7 7445HS, 6GB RTX 3050, 16GB DDR5(Upgradeable) 512GB SSD, FHD, 144Hz, 300 nits, 15.6''/39.6cm, Win 11, M365* Office24, Blue, 2.29kg, fb3134AX/3120ax, Gaming Laptop",
        image: "http://localhost:5000/upload/headphone.jpeg",
       images: [
          "http://localhost:5000/upload/phone.jpeg",
          "http://localhost:5000/upload/vivo1.jpeg",
           "http://localhost:5000/upload/vivo2.jpeg",
            "http://localhost:5000/upload/vivo3.jpeg",
        ],
        description:
          "Processor, Memory & Storage: AMD Ryzen 7 7445HS (up to 4.7 GHz max boost clock, 16 MB L3 cache, 6 cores, 12 threads) | Memory: 16 GB DDR5-5600 MT/s (1 x 16 GB) | Storage: 512 GB PCIe Gen4 NVMe M.2 SSD.Operating System & Preinstalled Software: Windows 11 Home | MS Office Home 2024 + MISC PC Game Pass DA 3M| 1 year Microsoft 365 Basic Free.Display & Graphics: 39.6 cm (15.6) diagonal, FHD (1920 x 1080), 144 Hz, IPS, micro-edge, anti-glare, 300 nits, 62.5% sRGB| Graphics: NVIDIA GeForce RTX 3050 Laptop GPU (6 GB GDDR6 dedicated) Ports & Connectivity : 1 USB Type-A 5Gbps signaling rate (HP Sleep and Charge); 1 USB Type-A 5Gbps signaling rate; 1 AC smart pin; 1 HDMI-out 2.1; 1 headphone/microphone combo; 1 RJ-45; 1 USB Type-C 5Gbps signaling rate (USB Power Delivery 3.1, DisplayPort 1.4a, HP Sleep and Charge)|",
        countInStock: 25,
      },
      {
        name: "Apple 2025 MacBook Air",
        price: 85990,
        category: "LAPTOP",
        brand: "Apple",
        quality: "Apple 2025 MacBook Air (13-inch, Apple M4 chip with 10-core CPU and 8-core GPU, 16GB Unified Memory, 256GB) - Midnight",
        image: "http://localhost:5000/upload/headphone.jpeg",
       images: [
          "http://localhost:5000/upload/phone.jpeg",
          "http://localhost:5000/upload/vivo1.jpeg",
           "http://localhost:5000/upload/vivo2.jpeg",
            "http://localhost:5000/upload/vivo3.jpeg",
        ],
        description:
       " MacBook Air with the M4 chip lets you blaze through work and play. With Apple Intelligence,* up to 18 hours of battery life,* and an incredibly portable design, you can take on anything, anywhere.The Apple M4 chip brings even more speed and fluidity to everything you do, like working between multiple apps, editing videos or playing graphically demanding games.BUILT FOR APPLE INTELLIGENCE — Apple Intelligence is the personal intelligence system that helps you write, express yourself and get things done effortlessly. With groundbreaking privacy protections, it gives you peace of mind that no one else can access your.UP TO 18 HOURS OF BATTERY LIFE — MacBook Air delivers the same incredible performance whether it’s running on battery or plugged in.*The 34.46 cm (13.6″) Liquid Retina display supports 1 billion colours.* Photos and videos pop with rich contrast and sharp detail, and text appears super crisp.Everything looks and sounds amazing with a 12MP Center Stage camera, three mics and four speakers with Spatial Audio.",
        countInStock: 25,
      },
      {
        name: "Sony Headphones",
        price: 9999,
        category: "HEADPHONE",
        brand: "Sony",
        quality: "Noise Cancellation | Wireless | 30 Hours Battery",
        image: "http://localhost:5000/upload/headphone.jpeg",
        
       images: [
          "http://localhost:5000/upload/phone.jpeg",
          "http://localhost:5000/upload/vivo1.jpeg",
           "http://localhost:5000/upload/vivo2.jpeg",
            "http://localhost:5000/upload/vivo3.jpeg",
        ],
        description:
          "High-quality Sony headphones with noise cancellation and superior sound clarity.",
        countInStock: 25,
      },
      {
        name: "boAt 2025 Launch Rockerz 421",
        price: 1299,
        category: "HEADPHONE",
        brand: "boAt",
        quality: "boAt 2025 Launch Rockerz 421, 40H Battery, Low Latency(40Ms), 40Mm Drivers, Enx Tech, Stream Ad Free Music via App Support, Bluetooth Headphones, Wireless Over Ear Headphone with Mic ",
        image: "http://localhost:5000/upload/headphone.jpeg",
        
       images: [
          "http://localhost:5000/upload/phone.jpeg",
          "http://localhost:5000/upload/vivo1.jpeg",
           "http://localhost:5000/upload/vivo2.jpeg",
            "http://localhost:5000/upload/vivo3.jpeg",
        ],
        description:
          "40 hours of Playback: Groove more without frequent charging. boAt Rockerz 421 Bluetooth Headphones feature a huge playtime of up to 40 hours for uninterrupted audio fun.40 mm Drivers boAt Signature Sound: Boasting high-quality 40 mm drivers that pump out bass-heavy boAt Signature Sound, these headphones enhance your audio immersion.ENx Technology: Answer calls in noisy areas from a busy room, public transport, or café. The integrated ENx tech-enabled mic ensures noise-free conversations no matter where you are.Bluetooth v5.4: Breeze through your watchlist or even call your contacts with wireless comfort thanks to Bluetooth v5.4. Connect these headphones wirelessly and unlock seamless listening.",
        countInStock: 25,
      },
      {
        name: "pTron Studio Evo",
        price: 759,
        category: "HEADPHONE",
        brand: "pTron",
        quality: "pTron Studio Evo 70hrs Playtime Wireless Over Ear Headphones with HD Mic, Low-Latency Game/Movie/Music Modes, Punchy Bass, BT5.3, Dual Device Pairing, Voice Assistant & Type-C Fast Charging",
        image: "http://localhost:5000/upload/headphone.jpeg",
        
       images: [
          "http://localhost:5000/upload/phone.jpeg",
          "http://localhost:5000/upload/vivo1.jpeg",
           "http://localhost:5000/upload/vivo2.jpeg",
            "http://localhost:5000/upload/vivo3.jpeg",
        ],
        description:
          "Studio Evo comes with an Ergonomic Design & Soft Ear cups, our Over-Ear Bluetooth Headphones Ensure All-day Listening Comfort | Adjustable Head beam to Position the Earcups Exactly Over Your Ears.70 Hours of Playtime on a Single Full Charge | 40mm Dynamic Drivers for Rich & Powerful Stereo Sound Quality | Built-in HD Mic for Handsfree Calls | Just 2 hours charge Time via Type-C Charging",
        countInStock: 25,
      },
          {
        name: "ZEBRONICS Thunder Bluetooth 5.3 ",
        price: 699,
        category: "HEADPHONE",
        brand: "Sony",
        quality: "ZEBRONICS Thunder Bluetooth 5.3 Wireless Headphones with 60H Backup, Gaming Mode, Dual Pairing, ENC, AUX, Micro SD, Voice Assistant, Comfortable Earcups, Call Function",
        image: "http://localhost:5000/upload/headphone.jpeg",
        
       images: [
          "http://localhost:5000/upload/phone.jpeg",
          "http://localhost:5000/upload/vivo1.jpeg",
           "http://localhost:5000/upload/vivo2.jpeg",
            "http://localhost:5000/upload/vivo3.jpeg",
        ],
        description:
          "Comfortable Design: Beat the workday blues with music on Zeb-Thunder wireless headphone that comes in an ergonomic design a perfect fit and design for long hours use. Sensitivity : -113dB ±3dB. Microphone impedance : 1.2k Ω.Soft & comfortable earcups: Listen to music, podcasts and more for long hours with soft ear cups making it super comfortable for daily wear, All this with long playback time of 60 hours in BT mode.Adjustable headband: Adust your headband to your comfortable best while you work or listen to music",
        countInStock: 25,
      },
      {
        name: "Sony WH-CH520 ",
        price: 3789,
        category: "HEADPHONE",
        brand: "Sony",
        quality: "Sony WH-CH520 Wireless Bluetooth Headphones On Ear with Mic, Up to 50Hrs Battery, Quick Charge, DSEE Upscale, Multipoint Connectivity, Voice Assistant",
        image: "http://localhost:5000/upload/headphone.jpeg",
        
       images: [
          "http://localhost:5000/upload/phone.jpeg",
          "http://localhost:5000/upload/vivo1.jpeg",
           "http://localhost:5000/upload/vivo2.jpeg",
            "http://localhost:5000/upload/vivo3.jpeg",
        ],
        description:
          "With up to 50-hour battery life and quick charging, you’ll have enough power for multi-day road trips and long festival weekends.Great sound quality customizable to your music preference with EQ Custom on the Sony | Headphones Connect App.",
        countInStock: 25,
      },
      {
        name: "boAt Rockerz 480",
        price: 1499,
        category: "HEADPHONE",
        brand: "boAt",
        quality: "boAt Rockerz 480, RGB LEDs,6 Light Modes, 40mm Drivers,Beast Mode, 60H Battery, ENx Tech, Stream Ad Free Music via App Support, Bluetooth Headphones, Wireless Over Ear Headphone with Mic",
        image: "http://localhost:5000/upload/headphone.jpeg",
        
       images: [
          "http://localhost:5000/upload/phone.jpeg",
          "http://localhost:5000/upload/vivo1.jpeg",
           "http://localhost:5000/upload/vivo2.jpeg",
            "http://localhost:5000/upload/vivo3.jpeg",
        ],
        description:
         "Blazing RGB LEDs with 6 Modes: Amp your audio corner with the striking design of the boAt Rockerz 480 Bluetooth Headphones. The blazing RGB LEDs on these headphones are integrated with 6 modes that can be modified as per your preference.60 hours of Playback: Charge less and enjoy more with the massive playtime of these headphones. Tune into your playlist or podcasts uninterrupted without charging these headphones for up to 60 hours.",
        countInStock: 25,
      },
    ];

    await Product.insertMany(products);
    console.log("✅ Products successfully stored in MongoDB");

    process.exit();
  } catch (error) {
    console.error("❌ Error seeding products:", error);
    process.exit(1);
  }
};

seedProducts();
