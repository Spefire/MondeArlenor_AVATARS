export const avatarItems: AvatarItem[] = [
  { libelle: 'Corps', name: 'bodies/body', nb: 3, removable: false, typeColors: 'SKIN' },
  { libelle: 'Poitrine', name: 'boobs/boobs', nb: 2, removable: true, typeColors: 'SKIN' },
  { libelle: 'Mains', name: 'hand', nb: 1, removable: false, typeColors: 'SKIN' },
];

class AvatarItem {
  public libelle: string;
  public name: string;
  public nb: number;
  public removable: boolean;
  public typeColors: string;
}