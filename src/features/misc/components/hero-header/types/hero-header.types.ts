export type HeroHeaderAction = "link" | "button";

export type HeroHeaderItem<T extends HeroHeaderAction = HeroHeaderAction> = T extends "link" ? {
    to?: string;
    label: string;
    type: T;
} : {
    label: string;
    onClick: () => void;
    type: T;
};