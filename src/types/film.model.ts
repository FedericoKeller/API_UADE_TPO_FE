import { Cast, Crew, Genre, Movie } from "tmdb-ts";

export type Film = Movie & { _id: string; genres: Genre[], cast: Cast[], crew: Crew[] };