import { COLORS, SIZES } from "@constants/Theme.constant"

const Theme = {
  colors: Object.keys(COLORS).reduce(
    (acc, curr) => ({
      ...acc,
      [curr]: COLORS[curr],
    }),
    {}
  ),
  fonts: {
    primary: "'Livvic', sans-serif;",
    secondary: "'Acme', sans-serif;",
  },
  media: Object.keys(SIZES).reduce(
    (acc, item) => ({
      ...acc,
      [item]: `only screen (min-width: ${SIZES[item]})`,
    }),
    {}
  ),
  buttons: {
    primary: {
      bg: COLORS.primary,
      color: COLORS.light,
    },
    secondary: {
      bg: COLORS.tertiary,
      color: COLORS.white,
    },
    disabled: {
      bg: "#999895",
      color: "#686868",
    },
  },
}

export default Theme
