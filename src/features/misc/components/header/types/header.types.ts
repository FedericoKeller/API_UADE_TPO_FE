export type HeaderSearchAction = "link" | "button";

export type HeaderSearchItem<T extends HeaderSearchAction = HeaderSearchAction> = T extends "link" ? {
    to?: string;
    label: string;
    type: T;
} : {
    label: string;
    onClick: () => void;
    type: T;
};

