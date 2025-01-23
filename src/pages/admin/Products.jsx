import React from 'react'
import Navigation from '../../components/navigation/Navigation'
import ProductCard from '../../components/products/ProductCard';

const Products = () => {
    const products = [
        { id: 1, name: 'Produit A', category: 'Catégorie A', description: 'Description du produit A', price: 20.5, imageUrl: 'https://placehold.co/600x400/png' },
        { id: 2, name: 'Produit B', category: 'Catégorie A', description: 'Description du produit B', price: 35, imageUrl: 'https://placehold.co/600x400/png' },
        { id: 3, name: 'Produit C', category: 'Catégorie A', description: 'Description du produit C', price: 15.99, imageUrl: 'https://placehold.co/600x400/png' },
        { id: 4, name: 'Produit D', category: 'Catégorie A', description: 'Description du produit D', price: 45.5, imageUrl: 'https://placehold.co/600x400/png' },
        { id: 5, name: 'Produit E', category: 'Catégorie A', description: 'Description du produit E', price: 12.5, imageUrl: 'https://placehold.co/600x400/png' },
        { id: 6, name: 'Produit F', category: 'Catégorie A', description: 'Description du produit F', price: 10.5, imageUrl: 'https://placehold.co/600x400/png' },
        { id: 7, name: 'Produit G', category: 'Catégorie A', description: 'Description du produit G', price: 30.5, imageUrl: 'https://placehold.co/600x400/png' },
        { id: 8, name: 'Produit H', category: 'Catégorie A', description: 'Description du produit H', price: 25.5, imageUrl: 'https://placehold.co/600x400/png' },
        { id: 9, name: 'Produit I', category: 'Catégorie A', description: 'Description du produit I', price: 50.5, imageUrl: 'https://placehold.co/600x400/png' },
        { id: 10, name: 'Produit J', category: 'Catégorie B', description: 'Description du produit J', price: 60.5, imageUrl: 'https://placehold.co/600x400/png' },
        { id: 11, name: 'Produit K', category: 'Catégorie B', description: 'Description du produit K', price: 70.5, imageUrl: 'https://placehold.co/600x400/png' },
        { id: 12, name: 'Produit L', category: 'Catégorie B', description: 'Description du produit L', price: 80.5, imageUrl: 'https://placehold.co/600x400/png' },
        { id: 13, name: 'Produit M', category: 'Catégorie B', description: 'Description du produit M', price: 90.5, imageUrl: 'https://placehold.co/600x400/png' },
        { id: 14, name: 'Produit N', category: 'Catégorie B', description: 'Description du produit N', price: 100.5, imageUrl: 'https://placehold.co/600x400/png' },
        { id: 15, name: 'Produit O', category: 'Catégorie B', description: 'Description du produit O', price: 110.5, imageUrl: 'https://placehold.co/600x400/png' },
        { id: 16, name: 'Produit P', category: 'Catégorie B', description: 'Description du produit P', price: 120.5, imageUrl: 'https://placehold.co/600x400/png' },
        { id: 17, name: 'Produit Q', category: 'Catégorie C', description: 'Description du produit Q', price: 130.5, imageUrl: 'https://placehold.co/600x400/png' },
        { id: 18, name: 'Produit R', category: 'Catégorie C', description: 'Description du produit R', price: 140.5, imageUrl: 'https://placehold.co/600x400/png' },
        { id: 19, name: 'Produit S', category: 'Catégorie C', description: 'Description du produit S', price: 150.5, imageUrl: 'https://placehold.co/600x400/png' },
        { id: 20, name: 'Produit T', category: 'Catégorie D', description: 'Description du produit T', price: 160.5, imageUrl: 'https://placehold.co/600x400/png' },
    ];

    // Trier les produits par catégorie
    const sortedProducts = products.sort((a, b) => a.category.localeCompare(b.category));

    // Grouper les produits par catégorie
    const groupedProducts = sortedProducts.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
    }, {});

    return (
        <div className="grid grid-cols-[300px,_1fr] gap-6 bg-gray-100 p-6 w-screen h-screen">
            <Navigation isActive="product" />

            <div className="bg-white p-6 rounded-lg">
                <h1 className="text-2xl mb-6">Liste des produits</h1>

                <div className="overflow-y-auto h-[83vh]">
                    {Object.keys(groupedProducts).map((category) => (
                        <div key={category}>
                            <h2 className="text-xl font-semibold mb-4 mt-10">{category}</h2>
                            <div className="grid grid-cols-6 gap-6">
                                {groupedProducts[category].map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products