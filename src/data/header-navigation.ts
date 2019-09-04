import { NavigationLink } from '../app/shared/interfaces/navigation-link';

export const navigation: NavigationLink[] = [
    {
        label: 'Home', url: './', menu: {
            type: 'menu',
            items: [
                { label: 'Home', url: '/compact' }
            ]
        }
    },
    {
        label: 'Menu', url: './shop', menu: {
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
        label: 'Loja', url: './shop', menu: {
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
                { label: 'Produtos Favoritos', url: './shop/produtos-favoritos' },
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
        label: 'Paginas', url: './site', menu: {
            type: 'menu',
            items: [
                { label: 'Sobre Nós', url: './site/about-us' },
                { label: 'Contate-nos', url: './site/contact-us-alt' },
                { label: '404', url: './site/not-found' },
                { label: 'Termos e Condições', url: './site/terms' },
                { label: 'FAQ', url: './site/faq' },
                { label: 'Componentes', url: './site/components' },
            ]
        }
    },

    {
        label: 'Administrador', url: './site', menu: {
            type: 'menu',
            items: [
                { label: 'Finanças', url: './site/financas' },
                { label: 'Cadastrar Produtos', url: './site/cadastrar-produtos' },
                { label: 'Editar Produtos', url: './site/editar-produtos' },
                { label: 'Estoque', url: './site/estoque' },
                { label: 'Lista de Produtos', url: './site/lista-produtos' },
            ]
        }
    },
];