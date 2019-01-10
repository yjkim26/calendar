export interface IThemeProps {
  color: {
    black: string;
    background: string;
  };
  font: {
    family: string;
    base: string;
  };
}

const theme: IThemeProps = {
  color: {
    black: "#212121",
    background: "#ffffff"
  },
  font: {
    family: `'Noto Sans KR', sans-serif`,
    base: "14px"
  }
};

export default theme;
