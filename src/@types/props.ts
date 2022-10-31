type BaseProps = {
  id?: string | number;
  className?: string;
  key?: string;
};

export type CardDto = {
  name: string;
  description: string;
};

// interface ExampleProps {}

// interface NewProps extends ExampleProps {}

export type CustomCardProps = BaseProps &
  Partial<CardDto> & {
    deleteHandler?: (data?: any) => void;
    edit?: (data?: any) => void;
    type?: "add" | "update";
  };
