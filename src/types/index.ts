export interface ILoginData {
  email: string;
  password: string;
}

export interface ILoginContext {
  token: string;
  logIn: (data: ILoginData) => Promise<void>;
  logOut: () => void;
}

export interface IColors {
  values: {
    hex: string;
    rgb: string;
  };
  title: string;
  _id: string;
}

export interface IPalette {
  colors: {
    values: {
      hex: string;
      rgb: string;
    };
    title: string;
    _id: string;
    createdAt: string;
    updatedAt: string;
  }[];
  ownerId: string;
  name: string;
  isPublic: boolean;
  createdAt: string;
  updatedAt: string;
  membersId: string[];
  authorizeChange: string[];
  _id: string;
}

export interface IAddPaletteData {
  name: string;
  isPublic: boolean;
}

export interface IRemovePalette {
  paletteId: string;
}

export interface IAddColor {
  data: {
    title?: string;
    values: {
      hex: string;
      rgb: string;
    };
  };
  paletteId: string;
}
export interface IRemoveColor {
  colorId: string;
  paletteId: string;
}
export interface IUserWithPalettes {
  _id: string;
  username: string;
  profilePicture: string;
  createdAt: string;
  palettes: IPalette[];
}

export interface AuthContextData {
  signed: boolean;
  token: string;
  user: object;
}

export interface IUserContext {
  profilePicture: string;
  userId: string;
  email: string;
  username: string;
  createdAt: string;
  palettes: IPalette[];
  addPalette: (data: IAddPaletteData) => void;
  removePalette: (data: IRemovePalette) => void;
  getUserPalettes: () => void;
}

export interface IEditPalette {
  name?: string;
  isPublic?: boolean;
  membersId?: string[];
  authorizeChange?: string[];
  paletteId: string;
}

export interface IPaletteContext {
  palette: IPalette;
  addColor: (data: IAddColor) => Promise<void>;
  editPalette: (data: IEditPalette) => Promise<void>;
  removeColor: (data: IRemoveColor) => Promise<void>;
}
