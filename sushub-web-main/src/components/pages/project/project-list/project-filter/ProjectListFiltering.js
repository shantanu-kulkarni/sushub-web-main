function projectListFilters(projects, selectedChips, selectedSDGChips) {
  const today = new Date().getTime();

  const upcomingProjects = projects.filter(
    (project) => project && project.project_endDate.seconds * 1000 > today
  );

  const archivedProjects = projects.filter(
    (project) => project && project.project_isArchived
  );

  const otherChips = selectedChips.filter(
    (chip) => chip !== "Upcoming" && chip !== "Archived"
  );

  const filterAdditional = (projectList) =>
    otherChips.length === 0
      ? projectList
      : projectList.filter((project) =>
          project.project_filtering.some((filter) =>
            otherChips.includes(filter)
          )
        );

  const filterBySDGs = (projectList) =>
    selectedSDGChips.length === 0
      ? projectList
      : projectList.filter((project) =>
          project.project_sdgs.some((sdg) =>
            selectedSDGChips.includes(sdg)
          )
        );

  let updatedProjectsList = [];
  if (
    selectedChips.includes("Upcoming") &&
    selectedChips.includes("Archived")
  ) {
    updatedProjectsList = filterAdditional([
      ...upcomingProjects,
      ...archivedProjects,
    ]);
  } else if (selectedChips.includes("Upcoming")) {
    updatedProjectsList = filterAdditional(upcomingProjects);
  } else if (selectedChips.includes("Archived")) {
    updatedProjectsList = filterAdditional(archivedProjects);
  } else if (otherChips.length > 0) {
    updatedProjectsList = filterAdditional(projects);
  }

  if (selectedChips.length === 0) {
    updatedProjectsList = projects;
  }

  updatedProjectsList = filterBySDGs(updatedProjectsList);

  return updatedProjectsList;
}

export default projectListFilters;
