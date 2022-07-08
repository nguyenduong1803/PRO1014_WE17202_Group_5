export const covertText = (e) => {
  switch (e) {
    case "office":
      return "Việc làm khối văn phòng";
    case "inventory":
      return "Việc làm khối kinh doanh";
    case "south":
      return "Việc làm theo vị trí";
    case "factory":
      return "Việc làm khối sản xuất"; 
    default:
      return e;
  }
};
