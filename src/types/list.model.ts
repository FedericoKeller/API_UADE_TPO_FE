import { Film } from "./film.model";

export interface List {
    _id: string;
    title: string;
    films: Film[];
    canDelete?: boolean,
  }