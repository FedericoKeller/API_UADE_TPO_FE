import { Film } from "./film.model";

export interface List {
    _id: number;
    title: string;
    films: Film[];
    canDelete?: boolean,
  }