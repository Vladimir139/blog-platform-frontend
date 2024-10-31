import { styled } from "@/shared/lib/styles";

export const GridItem = styled("div", {
  position: "relative",
  padding: "20px",
  textAlign: "center",

  display: "flex",
  alignItems: "center",
  justifyContent: "start",

  width: "100%",

  // Вспомогательные элементы для бордеров и точек
  "& .border-top, & .border-right, & .border-bottom, & .border-left": {
    position: "absolute",
    backgroundColor: "#7EA3FF73",
  },

  // Верхняя граница
  "& .border-top": {
    top: 0,
    left: 0,
    right: 0,
    height: "1px",
  },

  // Правая граница
  "& .border-right": {
    top: 0,
    right: 0,
    bottom: 0,
    width: "1px",
  },

  // Нижняя граница
  "& .border-bottom": {
    bottom: 0,
    left: 0,
    right: 0,
    height: "1px",
  },

  // Левая граница
  "& .border-left": {
    top: 0,
    left: 0,
    bottom: 0,
    width: "1px",
  },

  // Вспомогательные элементы для точек
  "& .dot-top-left, & .dot-top-right, & .dot-bottom-right, & .dot-bottom-left": {
    position: "absolute",
    width: "3px", // Диаметр точки
    height: "3px",
    backgroundColor: "#6E98FF",
    borderRadius: "9999px", // Скругление для круговой точки
  },

  // Верхний левый угол
  "& .dot-top-left": {
    top: 0,
    left: 0,
    transform: "translate(-50%, -50%)",
  },

  // Верхний правый угол
  "& .dot-top-right": {
    top: 0,
    right: 0,
    transform: "translate(50%, -50%)",
  },

  // Нижний правый угол
  "& .dot-bottom-right": {
    bottom: 0,
    right: 0,
    transform: "translate(50%, 50%)",
  },

  // Нижний левый угол
  "& .dot-bottom-left": {
    bottom: 0,
    left: 0,
    transform: "translate(-50%, 50%)",
  },
});
