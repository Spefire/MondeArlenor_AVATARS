export class ETypeColors {
  public static Hair = 'HAIR';
  public static Skin = 'SKIN';
  public static Other = 'OTHER';
}

export const characterItems: AssetsItem[] = [
  { category: null, libelle: 'Corps', name: 'body', nb: 1, removable: false, typeColors: ETypeColors.Skin },
  { category: null, libelle: 'Haut', name: 'tops/top', nb: 3, removable: true, typeColors: ETypeColors.Other },
  { category: null, libelle: 'Bas', name: 'bottoms/bottom', nb: 3, removable: true, typeColors: ETypeColors.Other },
  { category: null, libelle: 'Chaussures', name: 'shoes', nb: 1, removable: true, typeColors: ETypeColors.Other },
  { category: null, libelle: 'Bouche', name: 'mouth', nb: 1, removable: false, typeColors: null },
  { category: null, libelle: 'Yeux', name: 'eyes', nb: 1, removable: false, typeColors: null },
  { category: null, libelle: 'Sourcils', name: 'eyebrow', nb: 1, removable: false, typeColors: null },
  { category: null, libelle: 'Cils', name: 'eyelashes', nb: 1, removable: false, typeColors: null },
  { category: null, libelle: 'Cheveux', name: 'hairs/hair', nb: 5, removable: true, typeColors: ETypeColors.Hair },
];

export class AssetsItem {
  public category: string;
  public libelle: string;
  public name: string;
  public nb: number;
  public removable: boolean;
  public typeColors: string;
}
