export class ETypeColors {
  public static Hair = 'HAIR';
  public static Skin = 'SKIN';
  public static Other = 'OTHER';
}

export const characterItems: AssetsItem[] = [
  { libelle: 'Bodies', name: 'bodies/body', nb: 4, typeColors: ETypeColors.Skin },
  { libelle: 'Body (add-ons)', name: 'body_addons/addons', nb: 3, typeColors: ETypeColors.Other },
  { libelle: 'Tatoos', name: 'tatoo', nb: 10, typeColors: null },
  { libelle: 'Tops', name: 'tops/top', nb: 3, typeColors: ETypeColors.Other },
  { libelle: 'Bottoms', name: 'bottoms/bottom', nb: 3, typeColors: ETypeColors.Other },
  { libelle: 'Shoes', name: 'shoes', nb: 1, typeColors: ETypeColors.Other },
  { libelle: 'Mouth', name: 'mouth', nb: 1, typeColors: null },
  { libelle: 'Eyes', name: 'eyes', nb: 1, typeColors: null },
  { libelle: 'Eyebrows', name: 'eyebrows', nb: 1, typeColors: null },
  { libelle: 'Eyelashes', name: 'eyelashes', nb: 1, typeColors: null },
  { libelle: 'Horns', name: 'horns/horns', nb: 7, typeColors: ETypeColors.Other },
  { libelle: 'Tails', name: 'tails/tails', nb: 3, typeColors: ETypeColors.Other },
  { libelle: 'Wings', name: 'wings/wings', nb: 2, typeColors: ETypeColors.Other },
  { libelle: 'Hairs', name: 'hairs/hair', nb: 5, typeColors: ETypeColors.Hair },
];

export const floorsItems: AssetsItem[] = [
  { libelle: 'Grounds', name: 'grounds/ground', nb: 8, typeColors: ETypeColors.Other },
  { libelle: 'Flowers', name: 'flowers/flowers', nb: 3, typeColors: ETypeColors.Other },
  { libelle: 'Details', name: 'details/details', nb: 12, typeColors: ETypeColors.Other },
  { libelle: 'Faery lights', name: 'faery_lights/faery_lights', nb: 2, typeColors: ETypeColors.Other },
];

export class AssetsItem {
  public libelle: string;
  public name: string;
  public nb: number;
  public typeColors: string;
}