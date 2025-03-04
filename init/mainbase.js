const samplecars = [
    {
        title: "Rolls-Royce Phantom",
        description: "The pinnacle of luxury sedans with unmatched comfort.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/2019_Rolls-Royce_Phantom_V12_Automatic_6.75.jpg/1200px-2019_Rolls-Royce_Phantom_V12_Automatic_6.75.jpg",
        price: 450000
    },
    {
        title: "Toyota Corolla",
        description: "A reliable and fuel-efficient sedan with modern features.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Toyota_Corolla_Hybrid_%28E210%29_IMG_4338.jpg/420px-Toyota_Corolla_Hybrid_%28E210%29_IMG_4338.jpg",
        price: 22000
    },
    {
        title: "Honda Civic",
        description: "A stylish and powerful sedan with advanced safety features.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Honda_Civic_e-HEV_Sport_%28XI%29_%E2%80%93_f_30062024.jpg/420px-Honda_Civic_e-HEV_Sport_%28XI%29_%E2%80%93_f_30062024.jpg",
        price: 25000
    },
    {
        title: "Lamborghini Huracan",
        description: "A high-performance supercar with an aggressive look.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/2015_Lamborghini_Huracan_5.2.jpg/420px-2015_Lamborghini_Huracan_5.2.jpg",
        price: 350000
    },
    {
        title: "Ford Mustang",
        description: "A classic American muscle car with a V8 engine.",
        image: "https://static.toiimg.com/thumb/msid-102895289,width-1280,height-720,resizemode-4/102895289.jpg",
        price: 45000
    },
    {
        title: "Chevrolet Camaro",
        description: "A sporty coupe with an aggressive design and great performance.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/2019_Chevrolet_Camaro_2SS_6.2L_front_3.16.19.jpg/420px-2019_Chevrolet_Camaro_2SS_6.2L_front_3.16.19.jpg",
        price: 42000
    },
    {
        title: "Tesla Model 3",
        description: "An electric sedan with cutting-edge technology and autopilot.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/2019_Tesla_Model_3_Performance_AWD_Front.jpg/420px-2019_Tesla_Model_3_Performance_AWD_Front.jpg",
        price: 39000
    },
    {
        title: "BMW X5",
        description: "A luxury SUV with top-tier comfort and performance.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2019_BMW_X5_M50d_Automatic_3.0.jpg/420px-2019_BMW_X5_M50d_Automatic_3.0.jpg",
        price: 65000
    },
    {
        title: "Audi Q7",
        description: "A premium SUV with a spacious interior and powerful engine.",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
        price: 70000
    },
    {
        title: "Mercedes-Benz C-Class",
        description: "A luxurious sedan with high-end features and smooth ride.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Mercedes-Benz_W206_IMG_6380.jpg/420px-Mercedes-Benz_W206_IMG_6380.jpg",
        price: 55000
    },
    {
        title: "Hyundai Elantra",
        description: "A budget-friendly sedan with great fuel efficiency.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Hyundai_Avante_CN7_white_%2810%29_%28cropped%29.jpg/420px-Hyundai_Avante_CN7_white_%2810%29_%28cropped%29.jpg",
        price: 20000
    },
    {
        title: "Kia Seltos",
        description: "A compact SUV with stylish looks and advanced features.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Kia_Seltos_SP2_PE_Snow_White_Pearl_%286%29_%28cropped%29.jpg/420px-Kia_Seltos_SP2_PE_Snow_White_Pearl_%286%29_%28cropped%29.jpg",
        price: 25000
    },
    {
        title: "Jeep Wrangler",
        description: "An off-road beast with rugged capabilities and iconic design.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2018_Jeep_Wrangler_Sahara_Unlimited_Multijet_2.1_Front.jpg/420px-2018_Jeep_Wrangler_Sahara_Unlimited_Multijet_2.1_Front.jpg",
        price: 50000
    },
    {
        title: "Nissan Altima",
        description: "A comfortable and efficient midsize sedan.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/2023_Nissan_Altima_SR_in_Brilliant_Silver_Metallic%2C_front_right.jpg/420px-2023_Nissan_Altima_SR_in_Brilliant_Silver_Metallic%2C_front_right.jpg",
        price: 24000
    },
    {
        title: "Volkswagen Passat",
        description: "A European-style sedan with a spacious cabin.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Volkswagen_Passat_Variant_B9_1X7A1960.jpg/420px-Volkswagen_Passat_Variant_B9_1X7A1960.jpg",
        price: 28000
    },
    {
        title: "Mazda CX-5",
        description: "A stylish and sporty compact SUV.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/2024_Mazda_CX-5_2.5_S_Select_in_Platinum_Quartz_Metallic%2C_front_right.jpg/420px-2024_Mazda_CX-5_2.5_S_Select_in_Platinum_Quartz_Metallic%2C_front_right.jpg",
        price: 32000
    },
    {
        title: "Subaru Outback",
        description: "A rugged crossover with all-wheel drive and adventure-ready.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/2023_Subaru_Outback_Premium%2C_front_right%2C_09-09-2023.jpg/420px-2023_Subaru_Outback_Premium%2C_front_right%2C_09-09-2023.jpg",
        price: 34000
    },
    {
        title: "Porsche 911",
        description: "An iconic luxury sports car with breathtaking performance.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Porsche_911_No_1000000%2C_70_Years_Porsche_Sports_Car%2C_Berlin_%281X7A3888%29.jpg/420px-Porsche_911_No_1000000%2C_70_Years_Porsche_Sports_Car%2C_Berlin_%281X7A3888%29.jpg",
        price: 120000
    },
    {
        title: "Lexus RX",
        description: "A premium SUV with luxury interiors and smooth ride.",
        image: "https://www.livemint.com/lm-img/img/2023/04/20/original/2_1681986353615.jpg",
        price: 60000
    },
    {
        title: "Ferrari 488",
        description: "An ultra-fast supercar with stunning design and power.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/2017_Ferrari_488_GTB_Automatic_3.9.jpg/420px-2017_Ferrari_488_GTB_Automatic_3.9.jpg",
        price: 300000
    },
    {
        title: "McLaren 720S",
        description: "A futuristic supercar with blistering speed and aerodynamics.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/2018_McLaren_720S_V8_S-A_4.0.jpg/420px-2018_McLaren_720S_V8_S-A_4.0.jpg",
        price: 400000
    },
    {
        title: "Dodge Charger",
        description: "A muscular sedan with a powerful V8 engine.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Dodge_Charger_SE.jpg/420px-Dodge_Charger_SE.jpg",
        price: 38000
    },
  
];


module.exports = {data:samplecars};