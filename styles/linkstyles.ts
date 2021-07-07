import { darken, whiten, mode } from "@chakra-ui/theme-tools";
export const linkStyles = {
  // style object for base or default style
  // baseStyle: (props) => ({
  // 	color: mode("primary", "secondary")(props),
  // }),
  baseStyle: {
    color: "primary",
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: () => ({
      _hover: {
        color: mode(darken("primary", 40), whiten("primary", 40)),
      },
    }),
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: "",
    variant: "",
  },
};
