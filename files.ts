export const avatarItems: AssetsItem[] = [
  { libelle: 'Queue', name: 'tails/tail', nb: 7, removable: true, typeColors: 'OTHER' },
  { libelle: 'Cheveux arrière', name: 'back_hairs/back_hair', nb: 13, removable: true, typeColors: 'HAIR' },
  { libelle: 'Corps', name: 'bodies/body', nb: 3, removable: false, typeColors: 'SKIN' },
  { libelle: 'Poitrine', name: 'boobs/boobs', nb: 2, removable: true, typeColors: 'SKIN' },
  { libelle: 'Mains', name: 'hand', nb: 1, removable: false, typeColors: 'SKIN' },
  { libelle: 'Oreilles', name: 'ears/ears', nb: 9, removable: true, typeColors: 'SKIN' },
  { libelle: 'Magie', name: 'magic_elems/magic_elem', nb: 10, removable: true, typeColors: 'OTHER' },
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