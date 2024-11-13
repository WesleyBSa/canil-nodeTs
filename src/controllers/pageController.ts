import { Request, Response } from 'express';
import { title } from 'process';
import { Pet } from '../models/pet'
import { createMenuObject } from '../helpers/createMenuObject';

export const home = (req: Request, res: Response) => {
    let list = Pet.getAll();

    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
        title: 'Todos os animais',
        background: 'allanimals.png'
       },
       list
    });
}
export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog');

    res.render('pages/page', {
        menu: createMenuObject('dog'),
        banner: {
         title: 'Cachorros',
         background: 'banner_dog.jpg'
        },
        list 
     });
}
export const cats = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat');

    res.render('pages/page', {
        menu: createMenuObject('cat'),
        banner: {
         title: 'Gatos',
         background: 'banner_cat.jpg'
        },
        list 
     });
}
export const fishes = (req: Request, res: Response) => {
    let list = Pet.getFromType('other');

    res.render('pages/page', {
        menu: createMenuObject('other'),
        banner: {
         title: 'Outros',
         background: 'banner_fish.jpg'
        },
        list 
     });
}