export const sum = (args: number[]) => {
  return args.reduce((result, arg) => result + arg, 0);
};

export const calculateAverage = (args: number[]) => {
  return sum(args) / args.length;
};
