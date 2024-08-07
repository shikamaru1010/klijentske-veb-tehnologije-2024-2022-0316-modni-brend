class Product {
    id: number;
    name: string;
    price: number;
    category: string;

    constructor(id: number, name: string, price: number, category: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Metoda za ažuriranje cene proizvoda
    updatePrice(newPrice: number): void {
        this.price = newPrice;
    }

    // Metoda za ažuriranje kategorije proizvoda
    updateCategory(newCategory: string): void {
        this.category = newCategory;
    }

    // Metoda za dobijanje informacija o proizvodu
    getInfo(): { id: number; name: string; price: number; category: string } {
        return {
            id: this.id,
            name: this.name,
            price: this.price,
            category: this.category
        };
    }
}

export default Product;
