export const characterItems: AssetsItem[] = [
  { libelle: 'Corps', name: 'body', nb: 1 },
  { libelle: 'Haut', name: 'tops/top', nb: 3 },
  { libelle: 'Bas', name: 'bottoms/bottom', nb: 3 },
  { libelle: 'Chaussures', name: 'shoes', nb: 1 },
  { libelle: 'Bouche', name: 'mouth', nb: 1 },
  { libelle: 'Yeux', name: 'eyes', nb: 1 },
  { libelle: 'Sourcils', name: 'eyebrow', nb: 1 },
  { libelle: 'Cils', name: 'eyelashes', nb: 1 },
  { libelle: 'Cheveux', name: 'hairs/hair', nb: 5 },
];

export const floorsItems: AssetsItem[] = [
  { libelle: 'Sol', name: 'grounds/ground', nb: 8 },
  { libelle: 'Fleurs', name: 'flowers/flowers', nb: 3 },
  { libelle: 'Détails', name: 'details/details', nb: 12 },
  { libelle: 'Lumières féériques', name: 'faery_lights/faery_lights', nb: 2 },
];

export class AssetsItem {
  public libelle: string;
  public name: string;
  public nb: number;
}