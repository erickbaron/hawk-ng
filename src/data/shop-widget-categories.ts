import { Category } from '../app/shared/interfaces/category';

export const categories: Category[] = [
    {name: 'Power Tools', url: '../', children: [
        {name: 'Engravers', url: '../'},
        {name: 'Drills', url: '../'},
        {name: 'Wrenches', url: '../'},
        {name: 'Plumbing', url: '../'},
        {name: 'Wall Chaser', url: '../'},
        {name: 'Pneumatic Tools', url: '../'},
        {name: 'Milling Cutters', url: '../'}
    ]},
    {name: 'Hand Tools', url: '../', children: [
        {name: 'Screwdrivers', url: '../'},
        {name: 'Handsaws', url: '../'},
        {name: 'Knives', url: '../'},
        {name: 'Axes', url: '../'},
        {name: 'Multitools', url: '../'},
        {name: 'Paint Tools', url: '../'}
    ]},
    {name: 'Garden Equipment', url: '../', children: [
        {name: 'Motor Pumps', url: '../'},
        {name: 'Chainsaws', url: '../'},
        {name: 'Electric Saws', url: '../'},
        {name: 'Brush Cutters', url: '../'}
    ]},
    {name: 'Machine Tools', url: '../', children: [
        {name: 'Thread Cutting', url: '../'},
        {name: 'Chip Blowers', url: '../'},
        {name: 'Sharpening Machines', url: '../'},
        {name: 'Pipe Cutters', url: '../'},
        {name: 'Slotting machines', url: '../'},
        {name: 'Lathes', url: '../'}
    ]},
    {name: 'Instruments', url: '../', children: [
        {name: 'Welding Equipment', url: '../'},
        {name: 'Power Tools', url: '../'},
        {name: 'Hand Tools', url: '../'},
        {name: 'Measuring Tool', url: '../'}
    ]},
    {name: 'Workbenches', url: '../'},
    {name: 'Presses', url: '../'},
    {name: 'Spray Guns', url: '../'},
    {name: 'Riveters', url: '../'}
];
