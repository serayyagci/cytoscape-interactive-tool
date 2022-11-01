// AUTOCOMPLETE SEARCH BOX FOR SEARCH NODES
$(document).ready(function() {
  var arrayOfOptions2 = [
      
    "NFKB1","RELA","TNF","TGFB1","ITGB1","PPARG","PPARA","IKBKB","AR","CASP3","MAPK8","TP53","MYC",
    "MAPK1","AKT1","CDKN1A","LYN","LCK","SREBF1","CDK2","JAK2","TYK2","MAPK9","CDK1","IRAK1","PRKACA","TBK1","CSNK2A1","PIM1","DAPK1","AURKA","AURKC","GSK3B"
    

  ];

  $("#searchDrugs").autocomplete({source: arrayOfOptions2, appendTo: ".drugs-search"});
});



// AUTOCOMPLETE SEARCH BOX FOR SEARCH NODES
$(document).ready(function() {
  var arrayOfOptions = [
      
 "TYK2",

 "RELA",

 "STAT3",

 "TIMP1",

 "AKT1",

 "HPSE",

 "CDK4",

 "SP1",

 "NFKB2",

 "SELP",

 "RBX1",

 "HSPB1",

 "ITGB2",

 "YWHAH",

 "PRKACA",

 "PRKCD",

 "GATA1",

 "HIF1A",

 "IKBKG",

 "CSK",

 "CD247",

 "PRKAR1B",

 "ILK",

 "GRB2",

 "GNA15",

 "FLNA",

 "IRF3",

 "HSPB6",

 "ITGB3",

 "MAPK1",

 "VASP",

 "CCND3",

 "CD40",

 "E2F1",

 "SPI1",

 "JAK3",

 "ALDOA",

 "ACTB",

 "TP53",

 "RAC1",

 "RHOA",

 "SHC1",

 "ITGB1",

 "TNF",

 "HDAC3",

 "MAPK3",

 "TGFB1",

 "SMAD3",

 "EGF",

 "PDGFA",

 "PTPN6",

 "TBK1",

 "DOK1",

 "FGF7",

 "NFKB1",

 "ESR1",

 "JUN",

 "SREBF1",

 "PPARG",

 "SRC",

 "PPARA",

 "PIM1",

 "CDKN1A",

 "MYC",

 "PRKACB",

 "MAPK9",

 "FOS",

 "JAK2",

 "CTNNB1",

 "LCK",

 "MAPK8",

 "MAPK14",

 "TRIM28",

 "LYN",

 "PRKCQ",

 "IRAK1",

 "CSNK2A2",

 "PTPRC",

 "CTTN",

 "IKBKB",

 "GSK3B",

 "DAPK1",

 "PKM",

 "PIN1",

 "RAF1",

 "YWHAQ",

 "CSNK2A1",

 "CDC34",

 "CDK2",

 "PRKAR1A",

 "CDK1",

 "CASP3",

 "AURKA",

 "AR",

  ];

  $("#searchNodes").autocomplete({source: arrayOfOptions, appendTo: ".autocompete-append-searchNode"});
});

// AUTOCOMPLETE SEARCH BOX FOR SEARCH NODE'S FIRST NEIGHBORS

$(document).ready(function() {
  var arrayOfOptions = [
      
 "TYK2",

 "RELA",

 "STAT3",

 "TIMP1",

 "AKT1",

 "HPSE",

 "CDK4",

 "SP1",

 "NFKB2",

 "SELP",

 "RBX1",

 "HSPB1",

 "ITGB2",

 "YWHAH",

 "PRKACA",

 "PRKCD",

 "GATA1",

 "HIF1A",

 "IKBKG",

 "CSK",

 "CD247",

 "PRKAR1B",

 "ILK",

 "GRB2",

 "GNA15",

 "FLNA",

 "IRF3",

 "HSPB6",

 "ITGB3",

 "MAPK1",

 "VASP",

 "CCND3",

 "CD40",

 "E2F1",

 "SPI1",

 "JAK3",

 "ALDOA",

 "ACTB",

 "TP53",

 "RAC1",

 "RHOA",

 "SHC1",

 "ITGB1",

 "TNF",

 "HDAC3",

 "MAPK3",

 "TGFB1",

 "SMAD3",

 "EGF",

 "PDGFA",

 "PTPN6",

 "TBK1",

 "DOK1",

 "FGF7",

 "NFKB1",

 "ESR1",

 "JUN",

 "SREBF1",

 "PPARG",

 "SRC",

 "PPARA",

 "PIM1",

 "CDKN1A",

 "MYC",

 "PRKACB",

 "MAPK9",

 "FOS",

 "JAK2",

 "CTNNB1",

 "LCK",

 "MAPK8",

 "MAPK14",

 "TRIM28",

 "LYN",

 "PRKCQ",

 "IRAK1",

 "CSNK2A2",

 "PTPRC",

 "CTTN",

 "IKBKB",

 "GSK3B",

 "DAPK1",

 "PKM",

 "PIN1",

 "RAF1",

 "YWHAQ",

 "CSNK2A1",

 "CDC34",

 "CDK2",

 "PRKAR1A",

 "CDK1",

 "CASP3",

 "AURKA",

 "AR",

  ];

  $("#searchNeighbors").autocomplete({source: arrayOfOptions, appendTo: ".autocompete-append-searchNeighbors"});
});


// AUTOCOMPLETE SEARCH BOX FOR SEARCH SHORTEST PATH FIRST NODE

$(document).ready(function() {
  var arrayOfOptions = [
      
 "TYK2",

 "RELA",

 "STAT3",

 "TIMP1",

 "AKT1",

 "HPSE",

 "CDK4",

 "SP1",

 "NFKB2",

 "SELP",

 "RBX1",

 "HSPB1",

 "ITGB2",

 "YWHAH",

 "PRKACA",

 "PRKCD",

 "GATA1",

 "HIF1A",

 "IKBKG",

 "CSK",

 "CD247",

 "PRKAR1B",

 "ILK",

 "GRB2",

 "GNA15",

 "FLNA",

 "IRF3",

 "HSPB6",

 "ITGB3",

 "MAPK1",

 "VASP",

 "CCND3",

 "CD40",

 "E2F1",

 "SPI1",

 "JAK3",

 "ALDOA",

 "ACTB",

 "TP53",

 "RAC1",

 "RHOA",

 "SHC1",

 "ITGB1",

 "TNF",

 "HDAC3",

 "MAPK3",

 "TGFB1",

 "SMAD3",

 "EGF",

 "PDGFA",

 "PTPN6",

 "TBK1",

 "DOK1",

 "FGF7",

 "NFKB1",

 "ESR1",

 "JUN",

 "SREBF1",

 "PPARG",

 "SRC",

 "PPARA",

 "PIM1",

 "CDKN1A",

 "MYC",

 "PRKACB",

 "MAPK9",

 "FOS",

 "JAK2",

 "CTNNB1",

 "LCK",

 "MAPK8",

 "MAPK14",

 "TRIM28",

 "LYN",

 "PRKCQ",

 "IRAK1",

 "CSNK2A2",

 "PTPRC",

 "CTTN",

 "IKBKB",

 "GSK3B",

 "DAPK1",

 "PKM",

 "PIN1",

 "RAF1",

 "YWHAQ",

 "CSNK2A1",

 "CDC34",

 "CDK2",

 "PRKAR1A",

 "CDK1",

 "CASP3",

 "AURKA",

 "AR",

  ];

  $("#first-node").autocomplete({source: arrayOfOptions, appendTo: ".autocomplete-append-firstNodePath"});
});


// AUTOCOMPLETE SEARCH BOX FOR SEARCH SHORTEST PATH SECOND NODE

$(document).ready(function() {
  var arrayOfOptions = [
      
 "TYK2",

 "RELA",

 "STAT3",

 "TIMP1",

 "AKT1",

 "HPSE",

 "CDK4",

 "SP1",

 "NFKB2",

 "SELP",

 "RBX1",

 "HSPB1",

 "ITGB2",

 "YWHAH",

 "PRKACA",

 "PRKCD",

 "GATA1",

 "HIF1A",

 "IKBKG",

 "CSK",

 "CD247",

 "PRKAR1B",

 "ILK",

 "GRB2",

 "GNA15",

 "FLNA",

 "IRF3",

 "HSPB6",

 "ITGB3",

 "MAPK1",

 "VASP",

 "CCND3",

 "CD40",

 "E2F1",

 "SPI1",

 "JAK3",

 "ALDOA",

 "ACTB",

 "TP53",

 "RAC1",

 "RHOA",

 "SHC1",

 "ITGB1",

 "TNF",

 "HDAC3",

 "MAPK3",

 "TGFB1",

 "SMAD3",

 "EGF",

 "PDGFA",

 "PTPN6",

 "TBK1",

 "DOK1",

 "FGF7",

 "NFKB1",

 "ESR1",

 "JUN",

 "SREBF1",

 "PPARG",

 "SRC",

 "PPARA",

 "PIM1",

 "CDKN1A",

 "MYC",

 "PRKACB",

 "MAPK9",

 "FOS",

 "JAK2",

 "CTNNB1",

 "LCK",

 "MAPK8",

 "MAPK14",

 "TRIM28",

 "LYN",

 "PRKCQ",

 "IRAK1",

 "CSNK2A2",

 "PTPRC",

 "CTTN",

 "IKBKB",

 "GSK3B",

 "DAPK1",

 "PKM",

 "PIN1",

 "RAF1",

 "YWHAQ",

 "CSNK2A1",

 "CDC34",

 "CDK2",

 "PRKAR1A",

 "CDK1",

 "CASP3",

 "AURKA",

 "AR",

  ];

  $("#last-node").autocomplete({source: arrayOfOptions, appendTo: ".autocomplete-append-lastNodePath"});
});


// AUTOCOMPLETE SEARCH BOX FOR SEARCH PATH TARGET NODE

$(document).ready(function() {
  var arrayOfOptions = [
      
 "TYK2",

 "RELA",

 "STAT3",

 "TIMP1",

 "AKT1",

 "HPSE",

 "CDK4",

 "SP1",

 "NFKB2",

 "SELP",

 "RBX1",

 "HSPB1",

 "ITGB2",

 "YWHAH",

 "PRKACA",

 "PRKCD",

 "GATA1",

 "HIF1A",

 "IKBKG",

 "CSK",

 "CD247",

 "PRKAR1B",

 "ILK",

 "GRB2",

 "GNA15",

 "FLNA",

 "IRF3",

 "HSPB6",

 "ITGB3",

 "MAPK1",

 "VASP",

 "CCND3",

 "CD40",

 "E2F1",

 "SPI1",

 "JAK3",

 "ALDOA",

 "ACTB",

 "TP53",

 "RAC1",

 "RHOA",

 "SHC1",

 "ITGB1",

 "TNF",

 "HDAC3",

 "MAPK3",

 "TGFB1",

 "SMAD3",

 "EGF",

 "PDGFA",

 "PTPN6",

 "TBK1",

 "DOK1",

 "FGF7",

 "NFKB1",

 "ESR1",

 "JUN",

 "SREBF1",

 "PPARG",

 "SRC",

 "PPARA",

 "PIM1",

 "CDKN1A",

 "MYC",

 "PRKACB",

 "MAPK9",

 "FOS",

 "JAK2",

 "CTNNB1",

 "LCK",

 "MAPK8",

 "MAPK14",

 "TRIM28",

 "LYN",

 "PRKCQ",

 "IRAK1",

 "CSNK2A2",

 "PTPRC",

 "CTTN",

 "IKBKB",

 "GSK3B",

 "DAPK1",

 "PKM",

 "PIN1",

 "RAF1",

 "YWHAQ",

 "CSNK2A1",

 "CDC34",

 "CDK2",

 "PRKAR1A",

 "CDK1",

 "CASP3",

 "AURKA",

 "AR",

  ];

  $("#source-node").autocomplete({source: arrayOfOptions, appendTo: ".source-node-cover"});
});


// AUTOCOMPLETE SEARCH BOX FOR SEARCH SHORTEST PATH SECOND NODE

$(document).ready(function() {
  var arrayOfOptions = [
      
 "TYK2",

 "RELA",

 "STAT3",

 "TIMP1",

 "AKT1",

 "HPSE",

 "CDK4",

 "SP1",

 "NFKB2",

 "SELP",

 "RBX1",

 "HSPB1",

 "ITGB2",

 "YWHAH",

 "PRKACA",

 "PRKCD",

 "GATA1",

 "HIF1A",

 "IKBKG",

 "CSK",

 "CD247",

 "PRKAR1B",

 "ILK",

 "GRB2",

 "GNA15",

 "FLNA",

 "IRF3",

 "HSPB6",

 "ITGB3",

 "MAPK1",

 "VASP",

 "CCND3",

 "CD40",

 "E2F1",

 "SPI1",

 "JAK3",

 "ALDOA",

 "ACTB",

 "TP53",

 "RAC1",

 "RHOA",

 "SHC1",

 "ITGB1",

 "TNF",

 "HDAC3",

 "MAPK3",

 "TGFB1",

 "SMAD3",

 "EGF",

 "PDGFA",

 "PTPN6",

 "TBK1",

 "DOK1",

 "FGF7",

 "NFKB1",

 "ESR1",

 "JUN",

 "SREBF1",

 "PPARG",

 "SRC",

 "PPARA",

 "PIM1",

 "CDKN1A",

 "MYC",

 "PRKACB",

 "MAPK9",

 "FOS",

 "JAK2",

 "CTNNB1",

 "LCK",

 "MAPK8",

 "MAPK14",

 "TRIM28",

 "LYN",

 "PRKCQ",

 "IRAK1",

 "CSNK2A2",

 "PTPRC",

 "CTTN",

 "IKBKB",

 "GSK3B",

 "DAPK1",

 "PKM",

 "PIN1",

 "RAF1",

 "YWHAQ",

 "CSNK2A1",

 "CDC34",

 "CDK2",

 "PRKAR1A",

 "CDK1",

 "CASP3",

 "AURKA",

 "AR",

  ];

  $("#target-node").autocomplete({source: arrayOfOptions, appendTo: ".target-node-cover"});
});
