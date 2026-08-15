import appetizerData from './appetizer.json';
import dessertData from './dessert.json';
import drinksData from './drinks.json';
import lunchData from './lunchMenu.json';
import mainData from './mainDish.json';
import sushiData from './sushi.json';

export interface OptionItem {
    Label: string;
    Note?: string | null;
    Price?: string | null;
}

export interface MenuItem {
    Title: string;
    Note?: string | null;
    Description?: string | null;
    Price?: string | null;
    Icon?: string | null;
    Options?: OptionItem[] | null;
}

export interface MenuCategoryGroup {
    Category?: string | null;
    Note?: string | null;
    Description?: string | null;
    Price?: string | null;
    Icon?: string | null;
    Items: MenuItem[];
}

export interface MenuCategory {
    id: string;
    label: string;
    icon: string;
    path: string;
    data: MenuCategoryGroup[];
}

export const menuCategories: MenuCategory[] = [
    {
        id: 'vorspeise',
        label: 'VORSPEISE',
        icon: '🥢',
        path: '/menu/vorspeise',
        data: appetizerData as unknown as MenuCategoryGroup[],
    },
    {
        id: 'mittagsmenue',
        label: 'MITTAGSMENÜ',
        icon: '🍱',
        path: '/menu/mittagsmenue',
        data: lunchData as unknown as MenuCategoryGroup[],
    },
    {
        id: 'hauptspeise',
        label: 'HAUPTSPEISE',
        icon: '🍜',
        path: '/menu/hauptspeise',
        data: mainData as unknown as MenuCategoryGroup[],
    },
    {
        id: 'sushi',
        label: 'SUSHI',
        icon: '🍣',
        path: '/menu/sushi',
        data: sushiData as unknown as MenuCategoryGroup[],
    },
    {
        id: 'dessert',
        label: 'DESSERT',
        icon: '🍨',
        path: '/menu/dessert',
        data: dessertData as unknown as MenuCategoryGroup[],
    },
    {
        id: 'drinks',
        label: 'DRINKS',
        icon: '🍹',
        path: '/menu/drinks',
        data: drinksData as unknown as MenuCategoryGroup[],
    },
];