const SDGs = {
  sdg1: 1,
  sdg2: 2,
  sdg3: 3,
  sdg4: 4,
  sdg5: 5,
  sdg6: 6,
  sdg7: 7,
  sdg8: 8,
  sdg9: 9,
  sdg10: 10,
  sdg11: 11,
  sdg12: 12,
  sdg13: 13,
  sdg14: 14,
  sdg15: 15,
  sdg16: 16,
  sdg17: 17,
};

// SDG Class
function SDG(name, desc, number, icon, color) {
  this.name = name;
  this.desc = desc;
  this.number = number;
  this.icon = icon;
  this.color = color;
}

function createSDG(sdgEnum) {
  switch (sdgEnum) {
    case SDGs.sdg1:
      return new SDG(
        "No Poverty",
        "End poverty in all its forms everywhere.",
        1,
        "../sdgs/E-WEB-Goal-01.png",
        "#E5243B"
      );
    case SDGs.sdg2:
      return new SDG(
        "Zero Hunger",
        "End hunger, achieve food security and improved nutrition, and promote sustainable agriculture.",
        2,
        "../sdgs/E-WEB-Goal-02.png",
        "#DDA63A"
      );
    case SDGs.sdg3:
      return new SDG(
        "Good Health and Well-being",
        "Ensure healthy lives and promote well-being for all at all ages.",
        3,
        "../sdgs/E-WEB-Goal-03.png",
        "#4C9F38"
      );
    case SDGs.sdg4:
      return new SDG(
        "Quality Education",
        "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
        4,
        "../sdgs/E-WEB-Goal-04.png",
        "#C5192D"
      );
    case SDGs.sdg5:
      return new SDG(
        "Gender Equality",
        "Achieve gender equality and empower all women and girls.",
        5,
        "../sdgs/E-WEB-Goal-05.png",
        "#FF3A21"
      );
    case SDGs.sdg6:
      return new SDG(
        "Clean Water and Sanitation",
        "Ensure availability and sustainable management of water and sanitation for all.",
        6,
        "../sdgs/E-WEB-Goal-06.png",
        "#26BDE2"
      );
    case SDGs.sdg7:
      return new SDG(
        "Affordable and Clean Energy",
        "Ensure access to affordable, reliable, sustainable, and modern energy for all.",
        7,
        "../sdgs/E-WEB-Goal-07.png",
        "#FCC30B"
      );
    case SDGs.sdg8:
      return new SDG(
        "Decent Work and Economic Growth",
        "Promote sustained, inclusive, and sustainable economic growth, full and productive employment, and decent work for all.",
        8,
        "../sdgs/E-WEB-Goal-08.png",
        "#A21942"
      );
    case SDGs.sdg9:
      return new SDG(
        "Industry, Innovation, and Infrastructure",
        "Build resilient infrastructure, promote inclusive and sustainable industrialization, and foster innovation.",
        9,
        "../sdgs/E-WEB-Goal-09.png",
        "#FD6925"
      );
    case SDGs.sdg10:
      return new SDG(
        "Reduced Inequality",
        "Reduce inequality within and among countries.",
        10,
        "../sdgs/E-WEB-Goal-10.png",
        "#DD1367"
      );
    case SDGs.sdg11:
      return new SDG(
        "Sustainable Cities and Communities",
        "Make cities and human settlements inclusive, safe, resilient, and sustainable.",
        11,
        "../sdgs/E-WEB-Goal-11.png",
        "#FD9D24"
      );
    case SDGs.sdg12:
      return new SDG(
        "Responsible Consumption and Production",
        "Ensure sustainable consumption and production patterns.",
        12,
        "../sdgs/E-WEB-Goal-12.png",
        "#BF8B2E"
      );
    case SDGs.sdg13:
      return new SDG(
        "Climate Action",
        "Take urgent action to combat climate change and its impacts.",
        13,
        "../sdgs/E-WEB-Goal-13.png",
        "#3F7E44"
      );
    case SDGs.sdg14:
      return new SDG(
        "Life Below Water",
        "Conserve and sustainably use the oceans, seas, and marine resources for sustainable development.",
        14,
        "../sdgs/E-WEB-Goal-14.png",
        "#0A97D9"
      );
    case SDGs.sdg15:
      return new SDG(
        "Life on Land",
        "Protect, restore, and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification and halt and reverse land degradation and halt biodiversity loss.",
        15,
        "../sdgs/E-WEB-Goal-15.png",
        "#56C02B"
      );
    case SDGs.sdg16:
      return new SDG(
        "Peace, Justice, and Strong Institutions",
        "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all, and build effective, accountable, and inclusive institutions at all levels.",
        16,
        "../sdgs/E-WEB-Goal-16.png",
        "#00689D"
      );
    case SDGs.sdg17:
      return new SDG(
        "Partnerships for the Goals",
        "Strengthen the means of implementation and revitalize the global partnership for sustainable development.",
        17,
        "../sdgs/E-WEB-Goal-17.png",
        "#19486A"
      );
    default:
      return null;
  }
}

// Static method to get color for SDG number
SDG.getColorForSDGNumber = function (sdgNumber) {
  let sdg = Object.values(SDGs).find(
    (value) => createSDG(value).number === sdgNumber
  );
  return sdg ? createSDG(sdg).color : "#000000"; // Default to black if not found
};

export default createSDG;
