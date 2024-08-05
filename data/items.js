const items = [
    {
        id: '001',
        image: 'images/1.jpg',
        company: 'Nike',
        item_name: "Men's Nike Navy Team Hoodie",
        original_price: 100,
        current_price: 74.99,
        get discount_percentage() {
            return parseFloat(((this.original_price - this.current_price) / this.original_price * 100).toFixed(1));
        },
        return_period: 14,
        get delivery_date() {
            const today = new Date();
            const deliveryDate = new Date(today);
            deliveryDate.setDate(today.getDate() + 7);
            return deliveryDate.toDateString();
        },
        rating: {
            stars: 4.5,
            count: 1400
        }
    },
    {
        id: '002',
        image: 'images/2.jpg',
        company: 'U.S. Polo Assn.',
        item_name: "Men's Short Sleeve V-Neck Tee",
        original_price: 8,
        current_price: 5,
        get discount_percentage() {
            return parseFloat(((this.original_price - this.current_price) / this.original_price * 100).toFixed(1));
        },
        return_period: 4,
        get delivery_date() {
            const today = new Date();
            const deliveryDate = new Date(today);
            deliveryDate.setDate(today.getDate() + 7);
            return deliveryDate.toDateString();
        },
        rating: {
            stars: 4.3,
            count: 24
        }
    },
    {
        id: '003',
        image: 'images/3.jpg',
        company: 'Levis',
        item_name: "Men's Flex Slim Fit Jeans",
        original_price: 50,
        current_price: 40,
        get discount_percentage() {
            return parseFloat(((this.original_price - this.current_price) / this.original_price * 100).toFixed(1));
        },
        return_period: 1,
        get delivery_date() {
            const today = new Date();
            const deliveryDate = new Date(today);
            deliveryDate.setDate(today.getDate() + 7);
            return deliveryDate.toDateString();
        },
        rating: {
            stars: 4.1,
            count: 249
        }
    },
    {
        id: '004',
        image: 'images/4.jpg',
        company: 'Apple',
        item_name: 'Apple Watch SE (2nd Gen)',
        original_price: 249,
        current_price: 189,
        get discount_percentage() {
            return parseFloat(((this.original_price - this.current_price) / this.original_price * 100).toFixed(1));
        },
        return_period: 14,
        get delivery_date() {
            const today = new Date();
            const deliveryDate = new Date(today);
            deliveryDate.setDate(today.getDate() + 7);
            return deliveryDate.toDateString();
        },
        rating: {
            stars: 5.0,
            count: 10
        }
    },
    {
        id: '005',
        image: 'images/5.jpg',
        company: 'Apple',
        item_name: 'AirPods (2nd Generation)',
        original_price: 129,
        current_price: 79.99,
        get discount_percentage() {
            return parseFloat(((this.original_price - this.current_price) / this.original_price * 100).toFixed(1));
        },
        return_period: 1,
        get delivery_date() {
            const today = new Date();
            const deliveryDate = new Date(today);
            deliveryDate.setDate(today.getDate() + 7);
            return deliveryDate.toDateString();
        },
        rating: {
            stars: 4.2,
            count: 3500
        }
    },
    {
        id: '006',
        image: 'images/6.jpg',
        company: 'Apple',
        item_name: 'Macbook Pro',
        original_price: 699,
        current_price: 649,
        get discount_percentage() {
            return parseFloat(((this.original_price - this.current_price) / this.original_price * 100).toFixed(1));
        },
        return_period: 14,
        get delivery_date() {
            const today = new Date();
            const deliveryDate = new Date(today);
            deliveryDate.setDate(today.getDate() + 7);
            return deliveryDate.toDateString();
        },
        rating: {
            stars: 0.0,
            count: 0
        }
    },
    {
        id: '007',
        image: 'images/7.jpg',
        company: 'Sketchers',
        item_name: 'Men Shoes',
        original_price: 100,
        current_price: 60,
        get discount_percentage() {
            return parseFloat(((this.original_price - this.current_price) / this.original_price * 100).toFixed(1));
        },
        return_period: 14,
        get delivery_date() {
            const today = new Date();
            const deliveryDate = new Date(today);
            deliveryDate.setDate(today.getDate() + 7);
            return deliveryDate.toDateString();
        },
        rating: {
            stars: 4.2,
            count: 388
        }
    },
    {
        id: '008',
        image: 'images/8.jpg',
        company: 'Perry Ellis',
        item_name: 'Women Blazer',
        original_price: 60,
        current_price: 55,
        get discount_percentage() {
            return parseFloat(((this.original_price - this.current_price) / this.original_price * 100).toFixed(1));
        },
        return_period: 14,
        get delivery_date() {
            const today = new Date();
            const deliveryDate = new Date(today);
            deliveryDate.setDate(today.getDate() + 7);
            return deliveryDate.toDateString();
        },
        rating: {
            stars: 4.2,
            count: 5200
        }
    },
    {
        id: '009',
        image: 'images/9.jpg',
        company: 'Time and Tru',
        item_name: 'Men Fresh Deodorant 150ml',
        original_price: 25,
        current_price: 20,
        get discount_percentage() {
            return parseFloat(((this.original_price - this.current_price) / this.original_price * 100).toFixed(1));
        },
        return_period: 4,
        get delivery_date() {
            const today = new Date();
            const deliveryDate = new Date(today);
            deliveryDate.setDate(today.getDate() + 7);
            return deliveryDate.toDateString();
        },
        rating: {
            stars: 4.2,
            count: 5200
        }
    },
    {
        id: '010',
        image: 'images/10.jpg',
        company: 'No Boundaries',
        item_name: 'Henley Tank and Maxi Skirt Set',
        original_price: 20,
        current_price: 16,
        get discount_percentage() {
            return parseFloat(((this.original_price - this.current_price) / this.original_price * 100).toFixed(1));
        },
        return_period: 14,
        get delivery_date() {
            const today = new Date();
            const deliveryDate = new Date(today);
            deliveryDate.setDate(today.getDate() + 7);
            return deliveryDate.toDateString();
        },
        rating: {
            stars: 4.2,
            count: 5200
        }
    }
];