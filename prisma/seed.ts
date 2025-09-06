import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Create material categories
  const paintCategory = await prisma.materialCategory.upsert({
    where: { name: 'Paint & Colors' },
    update: {},
    create: {
      name: 'Paint & Colors',
      description: 'Interior and exterior paints, primers, and color solutions',
      icon: '🎨',
    },
  });

  const tilesCategory = await prisma.materialCategory.upsert({
    where: { name: 'Tiles & Flooring' },
    update: {},
    create: {
      name: 'Tiles & Flooring',
      description: 'Ceramic, marble, hardwood, and other flooring materials',
      icon: '🏠',
    },
  });

  const furnitureCategory = await prisma.materialCategory.upsert({
    where: { name: 'Furniture' },
    update: {},
    create: {
      name: 'Furniture',
      description: 'Customizable furniture templates and home decor items',
      icon: '🪑',
    },
  });

  const lightingCategory = await prisma.materialCategory.upsert({
    where: { name: 'Lighting' },
    update: {},
    create: {
      name: 'Lighting',
      description: 'Indoor and outdoor lighting fixtures and solutions',
      icon: '💡',
    },
  });

  const washroomCategory = await prisma.materialCategory.upsert({
    where: { name: 'Washroom Fittings' },
    update: {},
    create: {
      name: 'Washroom Fittings',
      description: 'Bathroom fixtures, faucets, and washroom accessories',
      icon: '🚿',
    },
  });

  console.log('📦 Created material categories');

  // Create sample materials
  const sampleMaterials = [
    // Paint & Colors
    {
      name: 'Premium Latex Paint - Warm White',
      description: 'High-quality latex paint perfect for living rooms and bedrooms',
      price: 45.99,
      unit: 'gallon',
      brand: 'ColorMax Pro',
      color: 'Warm White',
      finish: 'Satin',
      material: 'latex',
      categoryId: paintCategory.id,
      imageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8a1f1cba-046e-407b-8285-f8593dee6cd5.png',
      rating: 4.8,
      reviews: 124,
    },
    {
      name: 'Accent Wall Paint - Deep Navy Blue',
      description: 'Bold navy blue paint ideal for accent walls and modern designs',
      price: 52.99,
      unit: 'gallon',
      brand: 'ColorMax Pro',
      color: 'Navy Blue',
      finish: 'Matte',
      material: 'latex',
      categoryId: paintCategory.id,
      imageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8e18e81d-81aa-4238-8d9c-45ee46ffa615.png',
      rating: 4.6,
      reviews: 89,
    },
    // Tiles & Flooring
    {
      name: 'Italian Marble Tiles - Carrara White',
      description: 'Luxurious Carrara marble tiles with natural veining patterns',
      price: 24.50,
      unit: 'sqft',
      brand: 'MarbleCraft',
      color: 'White with Gray Veins',
      finish: 'Polished',
      material: 'marble',
      categoryId: tilesCategory.id,
      imageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/51e72b5b-2bd0-4532-8ddb-6ab28f46e891.png',
      rating: 4.9,
      reviews: 156,
    },
    {
      name: 'Oak Hardwood Flooring - Natural Finish',
      description: 'Premium oak hardwood flooring with natural grain patterns',
      price: 89.99,
      unit: 'sqft',
      brand: 'WoodCraft Premium',
      color: 'Natural Oak',
      finish: 'Natural',
      material: 'oak hardwood',
      categoryId: tilesCategory.id,
      imageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1674304b-e11b-4fbb-8f21-37c81b6ccb45.png',
      rating: 4.7,
      reviews: 203,
    },
    // Furniture
    {
      name: 'Modern Sectional Sofa - Charcoal Gray',
      description: 'Comfortable L-shaped sectional sofa perfect for modern living rooms',
      price: 1299.99,
      unit: 'piece',
      brand: 'ComfortLiving',
      color: 'Charcoal Gray',
      finish: 'Fabric Upholstery',
      material: 'fabric and wood frame',
      categoryId: furnitureCategory.id,
      imageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f1a70fb0-3983-453d-ac73-e2e75f49f424.png',
      rating: 4.5,
      reviews: 87,
    },
    {
      name: 'Dining Table Set - Walnut Wood',
      description: 'Elegant 6-seater dining table set with walnut finish',
      price: 899.99,
      unit: 'set',
      brand: 'DiningCraft',
      color: 'Walnut Brown',
      finish: 'Natural Wood',
      material: 'walnut wood',
      categoryId: furnitureCategory.id,
      imageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2bf93431-e15b-4f7f-b56f-6ef6f52d9873.png',
      rating: 4.8,
      reviews: 112,
    },
    // Lighting
    {
      name: 'LED Pendant Light - Brass Finish',
      description: 'Modern pendant light fixture with warm brass finish',
      price: 199.99,
      unit: 'piece',
      brand: 'IlluminaCraft',
      color: 'Brass Gold',
      finish: 'Brushed Brass',
      material: 'brass and glass',
      categoryId: lightingCategory.id,
      imageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/66aa8c1f-4ddb-4008-893a-7a28b0547f8f.png',
      rating: 4.6,
      reviews: 94,
    },
    {
      name: 'Crystal Chandelier - Chrome Finish',
      description: 'Elegant crystal chandelier perfect for dining rooms and entryways',
      price: 649.99,
      unit: 'piece',
      brand: 'CrystalLux',
      color: 'Chrome',
      finish: 'Polished Chrome',
      material: 'crystal and chrome',
      categoryId: lightingCategory.id,
      imageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c37e3a7f-119d-410b-ac65-84ebcd11674f.png',
      rating: 4.9,
      reviews: 67,
    },
    // Washroom Fittings
    {
      name: 'Rainfall Shower Head - Stainless Steel',
      description: 'Large rainfall shower head with multiple spray settings',
      price: 149.99,
      unit: 'piece',
      brand: 'AquaFlow',
      color: 'Stainless Steel',
      finish: 'Brushed Steel',
      material: 'stainless steel',
      categoryId: washroomCategory.id,
      imageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/213d0c63-3a9f-4717-b3fe-176561e0e176.png',
      rating: 4.7,
      reviews: 134,
    },
    {
      name: 'Bathroom Vanity - White Marble Top',
      description: 'Double-sink bathroom vanity with white marble countertop',
      price: 1199.99,
      unit: 'piece',
      brand: 'VanityCraft',
      color: 'White',
      finish: 'Marble and Wood',
      material: 'marble and wood',
      categoryId: washroomCategory.id,
      imageUrl: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/91a2ee7a-82b2-48bc-bfea-bec1cac7db74.png',
      rating: 4.8,
      reviews: 76,
    },
  ];

  console.log('🏗️ Creating sample materials...');
  for (const material of sampleMaterials) {
    await prisma.material.create({
      data: material,
    });
  }

  console.log('✅ Database seeded successfully!');
  console.log(`📊 Created ${sampleMaterials.length} materials across 5 categories`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });