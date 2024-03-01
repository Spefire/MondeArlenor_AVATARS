export class ETypeColors {
  public static Hair = 'HAIR';
  public static Skin = 'SKIN';
  public static Other = 'OTHER';
}

export const characterItems: AssetsItem[] = [
  { libelle: 'Corps', name: 'body', nb: 1, typeColors: ETypeColors.Skin },
  { libelle: 'Haut', name: 'tops/top', nb: 3, typeColors: ETypeColors.Other },
  { libelle: 'Bas', name: 'bottoms/bottom', nb: 3, typeColors: ETypeColors.Other },
  { libelle: 'Chaussures', name: 'shoes', nb: 1, typeColors: ETypeColors.Other },
  { libelle: 'Bouche', name: 'mouth', nb: 1, typeColors: null },
  { libelle: 'Yeux', name: 'eyes', nb: 1, typeColors: null },
  { libelle: 'Sourcils', name: 'eyebrow', nb: 1, typeColors: null },
  { libelle: 'Cils', name: 'eyelashes', nb: 1, typeColors: null },
  { libelle: 'Cheveux', name: 'hairs/hair', nb: 5, typeColors: ETypeColors.Hair },
];

export const floorsItems: AssetsItem[] = [
  { libelle: 'Sol', name: 'grounds/ground', nb: 8, typeColors: ETypeColors.Other },
  { libelle: 'Fleurs', name: 'flowers/flowers', nb: 3, typeColors: ETypeColors.Other },
  { libelle: 'Détails', name: 'details/details', nb: 12, typeColors: ETypeColors.Other },
  { libelle: 'Lumières féériques', name: 'faery_lights/faery_lights', nb: 2, typeColors: ETypeColors.Other },
];

export class AssetsItem {
  public libelle: string;
  public name: string;
  public nb: number;
  public typeColors: string;
}