import { Cast, Crew, Genre, Movie } from "tmdb-ts";

export type Film = Movie & { genres: Genre[], cast: Cast[], crew: Crew[] };