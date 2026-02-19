const classList = {
  submit:"w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition duration-200 font-medium cursor-pointer",
  delete:"w-full bg-gray-300 text-red-600 py-2.5 rounded-lg hover:bg-black-700 transition duration-200 font-medium cursor-pointer",
};
const Button = ({ className,variant = "submit", ...props }: React.ComponentProps<"button"> & {variant:keyof typeof classList}) => {
  const Comp = "button";
  const ListOfClass = {};
  const getClass = (variant: keyof typeof classList) => {
    return classList[variant];
  };
  return <Comp data-slot="button" className={className?className:getClass(variant)} {...props} />;
};
export default Button;
