type TPosition = {
  title: string;
  description: string;
  isOnGoing?: boolean;
  duration: {
    from: string;
    to: string;
  };
};

export type TWork = {
  company: string;
  positions: TPosition[];
};
