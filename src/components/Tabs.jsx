import { ThemeProvider, Tabs as _Tabs, Tab } from "@mui/material";

export default function Tabs({
  theme,
  tabList = ["전체", "화장품", "주류", "향수", "전자제품"],
  currentIndex,
  setCurrentIndex,
}) {
  const handleChangeIndex = (_, next) => {
    setCurrentIndex(next);
  };

  return (
    <ThemeProvider theme={theme}>
      <_Tabs
        value={currentIndex}
        onChange={handleChangeIndex}
        variant="scrollable"
      >
        {tabList.map((tab, idx) => (
          <Tab key={idx} label={tab} />
        ))}
      </_Tabs>
    </ThemeProvider>
  );
}
