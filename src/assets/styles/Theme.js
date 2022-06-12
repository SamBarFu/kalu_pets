const sizes = {
  mobileSmall: "375px",
  mobile: "575px",
  tablet: "960px",
  laptop: "1024px",
  laptopLarge: "1440px",
  desktop: "2560px",
}

const Theme = {
  colors: {
    primary: "#1f1301",
    secondary: "#ffa800",
    tertiary: "#5a3908",
    quaternary: "#9d5a0b",
    grey: "#26252b",
    light: "#f7f7f7",
  },
  media: Object.keys(sizes).reduce(
    (acc, item) => ({
      ...acc,
      [item]: `only screen (min-width: ${sizes[item]})`,
    }),
    {}
  ),
}

export default Theme
