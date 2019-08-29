import { NavigationLink } from '../app/shared/interfaces/navigation-link';

export const navigation: NavigationLink[] = [
    {
        label: 'Home', url: './', menu: {
            type: 'menu',
            items: [
                { label: 'Home 1', url: '/classic' },
                { label: 'Home 2', url: '/compact' }
            ]
        }
    },
    {
        label: 'Megamenu', url: './shop', menu: {
            type: 'megamenu',
            size: 'nl',
            columns: [
                {
                    size: 6, items: [
                        {
                            label: 'Eletrônicos', url: './shop', items: [
                                { label: 'Gravadores', url: './shop' },
                                { label: 'Ipads', url: './shop' },
                                { label: 'Celulares', url: './shop' },
                                { label: 'Notebooks', url: './shop' }
                            ]
                        },
                        {
                            label: 'Casa', url: './shop', items: [
                                { label: 'Mesas', url: './shop' },
                                { label: 'Cozinha', url: './shop' },
                                { label: 'Ferramentas', url: './shop' },
                                { label: 'Quarto', url: './shop' },
                                { label: 'Sala', url: './shop' },
                                { label: 'Sala2', url: './shop' }
                            ]
                        }
                    ]
                },
                {
                    size: 6, items: [
                        {
                            label: 'Hand Tools', url: './shop', items: [
                                { label: 'Screwdrivers', url: './shop' },
                                { label: 'Handsaws', url: './shop' },
                                { label: 'Knives', url: './shop' },
                                { label: 'Axes', url: './shop' },
                                { label: 'Multitools', url: './shop' },
                                { label: 'Paint Tools', url: './shop' }
                            ]
                        },
                        {
                            label: 'Garden Equipment', url: './shop', items: [
                                { label: 'Motor Pumps', url: './shop' },
                                { label: 'Chainsaws', url: './shop' },
                                { label: 'Electric Saws', url: './shop' },
                                { label: 'Brush Cutters', url: './shop' }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        label: 'Shop', url: './shop', menu: {
            type: 'menu',
            items: [
                {
                    label: 'Shop Grid', url: './shop', items: [
                        { label: '3 Columns Sidebar', url: './shop/category-grid-3-columns-sidebar' },
                        { label: '4 Columns Full', url: './shop/category-grid-4-columns-full' },
                        { label: '5 Columns Full', url: './shop/category-grid-5-columns-full' }
                    ]
                },
                { label: 'Lista', url: './shop/category-list' },
                { label: 'Loja', url: './shop/category-right-sidebar' },
                {
                    label: 'Product', url: './shop/product', items: [
                        { label: 'Product', url: './shop/product' },
                        { label: 'Product Alt', url: './shop/product-columnar' },
                        { label: 'Product Sidebar', url: './shop/product-sidebar' }
                    ]
                },
                { label: 'Carrinho', url: './shop/cart' },
                { label: 'Pagamento', url: './shop/checkout' },
                { label: 'Lista de pedidos', url: './shop/wishlist' },
                { label: 'Comparar', url: './shop/compare' },
                { label: 'Rastrear', url: './shop/track-order' },
            ]
        }
    },
    {
        label: 'Conta', url: './account', menu: {
            type: 'menu',
            items: [
                { label: 'Login', url: './account/login' },
                { label: 'Informações', url: './account/dashboard' },
                { label: 'Editar Perfil', url: './account/profile' },
                { label: 'Histórico de compras', url: './account/orders' },
                { label: 'Endereços', url: './account/addresses' },
                { label: 'Mudar Senha', url: './account/password' }
            ]
        }
    },
    {
        label: 'Blog', url: './blog', menu: {
            type: 'menu',
            items: [
                { label: 'Blog Classic', url: './blog/category-classic' },
                { label: 'Blog Grid', url: './blog/category-grid' },
                { label: 'Blog List', url: './blog/category-list' },
                { label: 'Blog Left Sidebar', url: './blog/category-left-sidebar' },
                { label: 'Post Page', url: './blog/post-classic' },
                { label: 'Post Without Sidebar', url: './blog/post-full' }
            ]
        }
    },
    {
        label: 'Pages', url: './site', menu: {
            type: 'menu',
            items: [
                { label: 'About Us', url: './site/about-us' },
                { label: 'Contact Us', url: './site/contact-us' },
                { label: 'Contact Us Alt', url: './site/contact-us-alt' },
                { label: '404', url: './site/not-found' },
                { label: 'Terms And Conditions', url: './site/terms' },
                { label: 'FAQ', url: './site/faq' },
                { label: 'Components', url: './site/components' },
                { label: 'Typography', url: './site/typography' }
            ]
        }
    },
    { label: 'Buy Theme', url: 'https://themeforest.net/item/stroyka-tools-store-angular-7-template/23523630', external: true }
];