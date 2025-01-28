const friday = () => {
  const getFridays = (month: number, year: number) => {
    const fridays: Record<string, any> = {};
    const daysInMonth = new Date(year, month, 0).getDate(); // Get total days in the month

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month - 1, day); // Month is zero-indexed
      if (date.getDay() === 5) {
        const dateString = date.toISOString().split("T")[0];
        fridays[dateString] = {
          marked: true,
          dotColor: "green", // Customize color for Fridays
          customStyles: {
            container: {
              backgroundColor: "#FFDDC1", // Highlight color for Fridays
            },
            text: {
              color: "black", // Friday text color
            },
          },
        };
      }
    }
    return fridays;
  };

  return friday;
};

export default friday;
