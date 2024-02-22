export const avatarItems: AssetsItem[] = [
  { libelle: 'Corps', name: 'bodies/body', nb: 3, removable: false, typeColors: 'SKIN' },
  { libelle: 'Poitrine', name: 'boobs/boobs', nb: 2, removable: true, typeColors: 'SKIN' },
  { libelle: 'Mains', name: 'hand', nb: 1, removable: false, typeColors: 'SKIN' },
];

export const characterItems: AssetsItem[] = [
  { libelle: 'Corps', name: 'body', nb: 1, removable: false, typeColors: 'SKIN' },
  { libelle: 'Haut', name: 'tops/top', nb: 3, removable: true, typeColors: 'OTHER' },
  { libelle: 'Bas', name: 'bottoms/bottom', nb: 3, removable: true, typeColors: 'OTHER' },
  { libelle: 'Chaussures', name: 'shoes', nb: 1, removable: true, typeColors: 'OTHER' },
  { libelle: 'Bouche', name: 'mouth', nb: 1, removable: false, typeColors: null },
  { libelle: 'Yeux', name: 'eyes', nb: 1, removable: false, typeColors: null },
  { libelle: 'Sourcils', name: 'eyebrow', nb: 1, removable: false, typeColors: null },
  { libelle: 'Cils', name: 'eyelashes', nb: 1, removable: false, typeColors: null },
  { libelle: 'Cheveux', name: 'hairs/hair', nb: 5, removable: true, typeColors: 'HAIR' },
];

export class AssetsItem {
  public libelle: string;
  public name: string;
  public nb: number;
  public removable: boolean;
  public typeColors: string;
}