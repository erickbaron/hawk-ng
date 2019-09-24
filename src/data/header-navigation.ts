import { NavigationLink } from '../app/shared/interfaces/navigation-link';
import { MobileMenuItem } from '../app/shared/interfaces/mobile-menu-item';

export const navigation: NavigationLink[] = [
    {
        label: 'Categoria', url: './shop', menu: {
            type: 'megamenu',
            size: 'sm',
            columns: [
                {
                    size: 10, items: [
                        {
                            label: 'Eletrônicos', url: './shop', items: [
                                { label: 'Gravadores', url: './shop' },
                                { label: 'Ipads', url: './shop' },
                                { label: 'Celulares', url: './shop' },
                                { label: 'Notebooks', url: './shop' }
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

];