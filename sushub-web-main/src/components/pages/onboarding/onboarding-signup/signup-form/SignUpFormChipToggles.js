export const toggleSdgChip = (chip, setSelectedSdgChips) => {
    setSelectedSdgChips((chipList) => {
      if (chipList.includes(chip)) {
        return chipList.filter((item) => item !== chip);
      } else {
        return [...chipList, chip];
      }
    });
  };

export const toggleOrgChip = (chip, setSelectedOrgChip) => {
    setSelectedOrgChip((chipList) => {
      if (chipList.includes(chip)) {
        return chipList.filter((item) => item !== chip);
      } else {
        return [...chipList, chip];
      }
    });
  };