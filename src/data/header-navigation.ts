import { NavigationLink } from '../app/shared/interfaces/navigation-link';

export const navigation: NavigationLink[] = [
    {label: 'Home', url: './', menu: {
        type: 'menu',
        items: [
            {label: 'Home 1', url: '/classic'},
            {label: 'Home 2', url: '/compact'}
        ]
    }},
    {label: 'Menu', url: './shop', menu: {
        type: 'megamenu',
        size: 'nl',
        columns: [
            {size: 6, items: [
                {label: 'Eletrônicos', url: './shop', items: [
                    {label: 'Gravadores', url: './shop'},
                    {label: 'Ipads', url: './shop'},
                    {label: 'Celulares', url: './shop'},
                    {label: 'Notebooks', url: './shop'},
                    {label: 'Fones de Ouvido', url: './shop'}
                ]},
                {label: 'Casa', url: './shop', items: [
                    {label: 'Mesas', url: './shop'},
                    {label: 'Cozinha', url: './shop'},
                    {label: 'Ferramentas', url: './shop'},
                    {label: 'Quarto', url: './shop'},
                    {label: 'Sala', url: './shop'},
                ]},
              
            ]},

            {size: 6, items: [
                {label: 'Jardinagem', url: './shop', items: [
                    
                ]},
                {label: 'Automóveis', url: './shop', items: [
                    
                ]},
                {label:'Calabresa', url: './shop', items:[{}]}
                
            ]}
        ]
    }},
    {label: 'Loja', url: './shop', menu: {
        type: 'menu',
        items: [
            {label: 'Grade', url: './shop', items: [
                {label: '', url: './shop/category-grid-3-columns-sidebar'},
                {label: '',    url: './shop/category-grid-4-columns-full'},
                {label: '',    url: './shop/category-grid-5-columns-full'}
            ]},
            {label: 'Lista', url: './shop/category-list'},
            {label: 'Loja', url: './shop/category-right-sidebar'},
            {label: 'Produto', url: './shop/product', items: [
                {label: 'Produto 1', url: './shop/product'},
                {label: 'Produto 2', url: './shop/product-columnar'},
                {label: 'Produto 3', url: './shop/product-sidebar'}
            ]},
            {label: 'Carrinho', url: './shop/cart'},
            {label: 'Pagamento', url: './shop/checkout'},
            {label: 'Lista de Pedidos', url: './shop/wishlist'},
            {label: 'Comparar', url: './shop/compare'},
            {label: 'Rastrear Pedido', url: './shop/track-order'},
        ]
    }},
    {label: 'Conta', url: './account', menu: {
        type: 'menu',
        items: [
            {label: 'Login',           url: './account/login'},
            {label: 'Informações da Conta',       url: './account/dashboard'},
            {label: 'Editar Perfil',    url: './account/profile'},
            {label: 'Hitórico de Pedidos',   url: './account/orders'},
            {label: 'Endereços',    url: './account/addresses'},
            {label: 'Alterar Senha', url: './account/password'}
        ]
    }},
    {label: 'Blog', url: './blog', menu: {
        type: 'menu',
        items: [
            {label: 'Blog Classic',         url: './blog/category-classic'},
            {label: 'Blog Grid',            url: './blog/category-grid'},
            {label: 'Blog List',            url: './blog/category-list'},
            {label: 'Blog Left Sidebar',    url: './blog/category-left-sidebar'},
            {label: 'Post Page',            url: './blog/post-classic'},
            {label: 'Post Without Sidebar', url: './blog/post-full'}
        ]
    }},
    {label: 'Paginas', url: './site', menu: {
        type: 'menu',
        items: [
            {label: 'Sobre Nós',             url: './site/about-us'},
            {label: 'Contato 1',           url: './site/contact-us'},
            {label: 'Contato 2',       url: './site/contact-us-alt'},
            {label: '404',                  url: './site/not-found'},
            {label: 'Termos e Condições', url: './site/terms'},
            {label: 'FAQ',                  url: './site/faq'},
            {label: 'Componentes',           url: './site/components'},
            {label: 'Tipografia',           url: './site/typography'}
        ]
    }},
];
