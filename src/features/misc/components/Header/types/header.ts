export type HeaderSearchAction = "link" | "button";

export type HeaderSearchItem<
  T extends HeaderSearchAction = HeaderSearchAction
> = T extends "link"
  ? {
      to?: string;
      label: string;
      type: T;
      icon: React.FC<any>;
    }
  : {
      label: string;
      onClick: () => void;
      type: T;
      icon: React.FC<any>;
    };
