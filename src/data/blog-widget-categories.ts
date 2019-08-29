import { Category } from '../app/shared/interfaces/category';

export const categories: Category[] = [
    {name: 'Últimas Notícias', url: '../'},
    {name: 'Ofertas Especiais', url: '../', children: [
        {name: 'Promoção de Primavera', url: '../'},
        {name: 'Promoção de Verão', url: '../'},
        {name: 'Promoção de Outono', url: '../'},
        {name: 'Promoção de Natal', url: '../'},
        {name: 'Outras Promoções', url: '../'}
    ]},
    {name: 'Produtos ', url: '../'},
    {name: 'Avaliações', url: '../'},
    {name: 'Furadeiras', url: '../'},
    {name: 'Parafusadeira Sem Fio', url: '../'},
    {name: 'Parafusadeira', url: '../'},
    {name: 'Chave Inglesa', url: '../'}
];
