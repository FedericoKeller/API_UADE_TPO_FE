import { Film } from "./film.model";

export interface List {
    id: number;
    title: string;
    films: Film[];
  }