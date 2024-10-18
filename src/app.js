document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            { id: 1, name: 'Robusta Berazil', img: '1.jpg', price: 20000},
            { id: 2, name: 'Arabic Blend', img: '2.jpg', price: 30000},
            { id: 3, name: 'Primo Passo', img: '3.jpg', price: 40000},
            { id: 4, name: 'Aceh Gayo', img: '4.jpg', price: 50000},
            { id: 5, name: 'Sumatra Mandheling', img: '5.jpg', price: 55000},
        ],
    }));
});