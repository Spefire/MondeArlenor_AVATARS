export class ETypeColors {
  public static Hair = 'HAIR';
  public static Skin = 'SKIN';
  public static Other = 'OTHER';
}

export class ETypeCategory {
  public static Body = 'Corps';
  public static Head = 'Tête';
  public static Hair = 'Cheveux';
  public static Details = 'Détails';
}

export const avatarItems: AssetsItem[] = [
  { category: ETypeCategory.Details, libelle: 'Queue', name: 'tails/tail', nb: 7, removable: true, typeColors: ETypeColors.Other },
  { category: ETypeCategory.Hair, libelle: 'Cheveux arrière', name: 'back_hairs/back_hair', nb: 13, removable: true, typeColors: '' },
  { category: ETypeCategory.Body, libelle: 'Corps', name: 'bodies/body', nb: 3, removable: false, typeColors: ETypeColors.Skin },
  { category: ETypeCategory.Body, libelle: 'Mains', name: 'hand', nb: 1, removable: false, typeColors: ETypeColors.Skin },
  { category: ETypeCategory.Body, libelle: 'Poitrine', name: 'boobs/boobs', nb: 2, removable: true, typeColors: ETypeColors.Skin },
  { category: ETypeCategory.Details, libelle: 'Magie', name: 'magic_elems/magic_elem', nb: 10, removable: true, typeColors: ETypeColors.Other },

  { category: ETypeCategory.Hair, libelle: 'Mèche droite', name: 'meches_back/meche_back', nb: 8, removable: true, typeColors: ETypeColors.Hair },
  { category: ETypeCategory.Head, libelle: 'Tête', name: 'heads/head', nb: 6, removable: false, typeColors: ETypeColors.Skin },
  { category: ETypeCategory.Hair, libelle: 'Cheveux', name: 'hairs/hair', nb: 9, removable: true, typeColors: ETypeColors.Hair },
  { category: ETypeCategory.Head, libelle: 'Oreilles', name: 'ears/ears', nb: 9, removable: true, typeColors: ETypeColors.Skin },
  { category: ETypeCategory.Hair, libelle: 'Mèche gauche', name: 'meches/meche', nb: 8, removable: true, typeColors: ETypeColors.Hair },
  { category: ETypeCategory.Hair, libelle: 'Cheveux avant', name: 'front_hairs/front_hair', nb: 13, removable: true, typeColors: ETypeColors.Hair },
];

export class AssetsItem {
  public category: string;
  public libelle: string;
  public name: string;
  public nb: number;
  public removable: boolean;
  public typeColors: string;
}
