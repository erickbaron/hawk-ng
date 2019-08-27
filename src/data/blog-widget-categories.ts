import { Category } from '../app/shared/interfaces/category';

export const categories: Category[] = [
    {name: 'Latest News', url: '../'},
    {name: 'Special Offers', url: '../', children: [
        {name: 'Spring Sales', url: '../'},
        {name: 'Summer Sales', url: '../'},
        {name: 'Autumn Sales', url: '../'},
        {name: 'Christmas Sales', url: '../'},
        {name: 'Other Sales', url: '../'}
    ]},
    {name: 'New Arrivals', url: '../'},
    {name: 'Reviews', url: '../'},
    {name: 'Drills and Mixers', url: '../'},
    {name: 'Cordless Screwdrivers', url: '../'},
    {name: 'Screwdrivers', url: '../'},
    {name: 'Wrenches', url: '../'}
];
