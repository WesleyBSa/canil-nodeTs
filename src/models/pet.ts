type PetType = 'dog' | 'cat' | 'other';

type Pet = {
    type: PetType,
    image: string,
    name: string,
    color: string,
    sex: 'Macho' | 'Femea'
}

const data: Pet[] = [
    {
        type: 'dog',
        image: 'pastor-alemao.jpg',
        name: 'Pastor-alemão',
        color: 'Amarelo e Preto',
        sex: 'Macho'
    },
    {
        type: 'dog',
        image: 'labrador.jpg',
        name: 'Labrador-retriever',
        color: 'Branco',
        sex: 'Macho'
    },
    {
        type: 'dog',
        image: 'zwergspitz.jpg',
        name: 'Zwergspitz',
        color: 'Amarelo',
        sex: 'Femea'
    },
    {
        type: 'dog',
        image: 'husky.jpg',
        name: 'Husky Siberiano',
        color: 'Branco e Preto',
        sex: 'Macho'
    },
    {
        type: 'dog',
        image: 'golden.jpg',
        name: 'Golden Retriever',
        color: 'Amarelo',
        sex: 'Macho'
    },
    {
        type: 'dog',
        image: 'poodle.jpg',
        name: 'Poodle',
        color: 'Branco',
        sex: 'Femea'
    },
    {
        type: 'dog',
        image: 'bulldog.jpg',
        name: 'Bulldog',
        color: 'Branco e Amarelo',
        sex: 'Macho'
    },
    {
        type: 'cat',
        image: 'persa.jpg',
        name: 'Persa',
        color: 'Amarelo',
        sex: 'Macho'
    },
    {
        type: 'cat',
        image: 'mainecoon.jpg',
        name: 'Maine Coon',
        color: 'Preto e Branco',
        sex: 'Macho'
    },
    {
        type: 'cat',
        image: 'bengal.jpg',
        name: 'Bengal',
        color: 'Branco, Preto e Amarelo',
        sex: 'Femea'
    },
    {
        type: 'cat',
        image: 'siames.jpg',
        name: 'Siamês',
        color: 'Amarelo e Preto',
        sex: 'Macho'
    },
    {
        type: 'cat',
        image: 'sphynx.jpg',
        name: 'Sphynx',
        color: 'Branco',
        sex: 'Macho'
    },
    {
        type: 'other',
        image: 'neon.jpg',
        name: 'Tetra Neon',
        color: 'Vermelho e Azul',
        sex: 'Macho'
    },
    {
        type: 'other',
        image: 'matogrosso.jpg',
        name: 'Mato Grosso',
        color: 'Laranja',
        sex: 'Macho'
    },
    {
        type: 'other',
        image: 'limpavidro.jpg',
        name: 'Limpa Vidro',
        color: 'Verde e Branco',
        sex: 'Macho'
    },
    {
        type: 'other',
        image: 'tanictis.jpg',
        name: 'Tanictis',
        color: 'Vermelho',
        sex: 'Macho'
    },
    {
        type: 'other',
        image: 'acara.jpg',
        name: 'Acará Bandeira',
        color: 'Preto',
        sex: 'Macho'
    },
    {
        type: 'other',
        image: 'coelholaranja.jpg',
        name: 'Coelho',
        color: 'Laranja',
        sex: 'Macho'
    },
    {
        type: 'other',
        image: 'coelhobranco.jpg',
        name: 'Coelho',
        color: 'Branco',
        sex: 'Macho'
    },
    {
        type: 'other',
        image: 'coelhomarrom.jpg',
        name: 'Coelho',
        color: 'Marrom',
        sex: 'Macho'
    },
    {
        type: 'other',
        image: 'porquinhodaindia.jpg',
        name: 'Porquinho da índia',
        color: 'Preto e Marrom',
        sex: 'Macho'
    }

]


export const Pet = {
    getAll: (): Pet[] => {
        return data;
    },
    getFromType: (type: PetType): Pet[] => {
        return data.filter(item => item.type === type);
    },
    getFromName: (name: string): Pet[] => {
        return data.filter(item => 
            item.name.toLowerCase().indexOf(name.toLowerCase()) > -1
        );
    }
};