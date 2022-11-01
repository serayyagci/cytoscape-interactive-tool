// AUTOCOMPLETE SEARCH BOX FOR SEARCH DRUGS
$(document).ready(function() {
  var arrayOfOptions1 = [
    "TNF","TGFB1","CREB1","PPARG","NR3C1","AR","MAPK8","NFKB1","TP53","MYC","MAPK1","SRC","FYN","CDK2","JAK2","RELA","PRKACA","CSNK2A1","PIM1","DAPK1"

  ];

  $("#searchDrugs").autocomplete({source: arrayOfOptions1, appendTo: ".drugs-search"});
});


// AUTOCOMPLETE SEARCH BOX FOR SEARCH NODES
$(document).ready(function() {
  var arrayOfOptions = [
    
"E2F1",

"RELA",

"TP53",

"TIMP1",

"SPI1",

"TBXA2R",

"GATA1",

"RAC1",

"ITGB1",

"RHOA",

"PRKAR1B",

"PDGFA",

"HSPB1",

"STAT3",

"HPSE",

"PRKACA",

"AKT1",

"GNA15",

"SP1",

"ALDOA",

"TNF",

"MAPK3",

"MAPK14",

"TXN",

"TGFB1",

"SMAD3",

"WT1",

"HIF1A",

"SRC",

"PPP2CA",

"MAPK1",

"NR3C1",

"STAT1",

"PPARG",

"PIM1",

"PRKCD",

"EIF2AK2",

"IRF9",

"FOS",

"ESR1",

"NFKB1",

"MYC",

"CREBBP",

"GAPDH",

"CSK",

"MAPK8",

"JAK2",

"JAK3",

"FYN",

"GATA2",

"PIN1",

"DAPK1",

"CTNNB1",

"CSNK2A1",

"TRIM28",

"HDAC3",

"CREB1",

"CDK2",

"KDR",

"IRF3",


  ];

  $("#searchNodes").autocomplete({source: arrayOfOptions, appendTo: ".autocompete-append-searchNode"});
});

// AUTOCOMPLETE SEARCH BOX FOR SEARCH NODE'S FIRST NEIGHBORS

$(document).ready(function() {
  var arrayOfOptions = [
      
"E2F1",

"RELA",

"TP53",

"TIMP1",

"SPI1",

"TBXA2R",

"GATA1",

"RAC1",

"ITGB1",

"RHOA",

"PRKAR1B",

"PDGFA",

"HSPB1",

"STAT3",

"HPSE",

"PRKACA",

"AKT1",

"GNA15",

"SP1",

"ALDOA",

"TNF",

"MAPK3",

"MAPK14",

"TXN",

"TGFB1",

"SMAD3",

"WT1",

"HIF1A",

"SRC",

"PPP2CA",

"MAPK1",

"NR3C1",

"STAT1",

"PPARG",

"PIM1",

"PRKCD",

"EIF2AK2",

"IRF9",

"FOS",

"ESR1",

"NFKB1",

"MYC",

"CREBBP",

"GAPDH",

"CSK",

"MAPK8",

"JAK2",

"JAK3",

"FYN",

"GATA2",

"PIN1",

"DAPK1",

"CTNNB1",

"CSNK2A1",

"TRIM28",

"HDAC3",

"CREB1",

"CDK2",

"KDR",

"IRF3",


  ];

  $("#searchNeighbors").autocomplete({source: arrayOfOptions, appendTo: ".autocompete-append-searchNeighbors"});
});


// AUTOCOMPLETE SEARCH BOX FOR SEARCH SHORTEST PATH FIRST NODE

$(document).ready(function() {
  var arrayOfOptions = [
      
"E2F1",

"RELA",

"TP53",

"TIMP1",

"SPI1",

"TBXA2R",

"GATA1",

"RAC1",

"ITGB1",

"RHOA",

"PRKAR1B",

"PDGFA",

"HSPB1",

"STAT3",

"HPSE",

"PRKACA",

"AKT1",

"GNA15",

"SP1",

"ALDOA",

"TNF",

"MAPK3",

"MAPK14",

"TXN",

"TGFB1",

"SMAD3",

"WT1",

"HIF1A",

"SRC",

"PPP2CA",

"MAPK1",

"NR3C1",

"STAT1",

"PPARG",

"PIM1",

"PRKCD",

"EIF2AK2",

"IRF9",

"FOS",

"ESR1",

"NFKB1",

"MYC",

"CREBBP",

"GAPDH",

"CSK",

"MAPK8",

"JAK2",

"JAK3",

"FYN",

"GATA2",

"PIN1",

"DAPK1",

"CTNNB1",

"CSNK2A1",

"TRIM28",

"HDAC3",

"CREB1",

"CDK2",

"KDR",

"IRF3",


  ];

  $("#first-node").autocomplete({source: arrayOfOptions, appendTo: ".autocomplete-append-firstNodePath"});
});


// AUTOCOMPLETE SEARCH BOX FOR SEARCH SHORTEST PATH SECOND NODE

$(document).ready(function() {
  var arrayOfOptions = [
      
"E2F1",

"RELA",

"TP53",

"TIMP1",

"SPI1",

"TBXA2R",

"GATA1",

"RAC1",

"ITGB1",

"RHOA",

"PRKAR1B",

"PDGFA",

"HSPB1",

"STAT3",

"HPSE",

"PRKACA",

"AKT1",

"GNA15",

"SP1",

"ALDOA",

"TNF",

"MAPK3",

"MAPK14",

"TXN",

"TGFB1",

"SMAD3",

"WT1",

"HIF1A",

"SRC",

"PPP2CA",

"MAPK1",

"NR3C1",

"STAT1",

"PPARG",

"PIM1",

"PRKCD",

"EIF2AK2",

"IRF9",

"FOS",

"ESR1",

"NFKB1",

"MYC",

"CREBBP",

"GAPDH",

"CSK",

"MAPK8",

"JAK2",

"JAK3",

"FYN",

"GATA2",

"PIN1",

"DAPK1",

"CTNNB1",

"CSNK2A1",

"TRIM28",

"HDAC3",

"CREB1",

"CDK2",

"KDR",

"IRF3",


  ];

  $("#last-node").autocomplete({source: arrayOfOptions, appendTo: ".autocomplete-append-lastNodePath"});
});


// AUTOCOMPLETE SEARCH BOX FOR SEARCH PATH TARGET NODE

$(document).ready(function() {
  var arrayOfOptions = [
      
"E2F1",

"RELA",

"TP53",

"TIMP1",

"SPI1",

"TBXA2R",

"GATA1",

"RAC1",

"ITGB1",

"RHOA",

"PRKAR1B",

"PDGFA",

"HSPB1",

"STAT3",

"HPSE",

"PRKACA",

"AKT1",

"GNA15",

"SP1",

"ALDOA",

"TNF",

"MAPK3",

"MAPK14",

"TXN",

"TGFB1",

"SMAD3",

"WT1",

"HIF1A",

"SRC",

"PPP2CA",

"MAPK1",

"NR3C1",

"STAT1",

"PPARG",

"PIM1",

"PRKCD",

"EIF2AK2",

"IRF9",

"FOS",

"ESR1",

"NFKB1",

"MYC",

"CREBBP",

"GAPDH",

"CSK",

"MAPK8",

"JAK2",

"JAK3",

"FYN",

"GATA2",

"PIN1",

"DAPK1",

"CTNNB1",

"CSNK2A1",

"TRIM28",

"HDAC3",

"CREB1",

"CDK2",

"KDR",

"IRF3",


  ];

  $("#source-node").autocomplete({source: arrayOfOptions, appendTo: ".source-node-cover"});
});


// AUTOCOMPLETE SEARCH BOX FOR SEARCH SHORTEST PATH SECOND NODE

$(document).ready(function() {
  var arrayOfOptions = [
      
"E2F1",

"RELA",

"TP53",

"TIMP1",

"SPI1",

"TBXA2R",

"GATA1",

"RAC1",

"ITGB1",

"RHOA",

"PRKAR1B",

"PDGFA",

"HSPB1",

"STAT3",

"HPSE",

"PRKACA",

"AKT1",

"GNA15",

"SP1",

"ALDOA",

"TNF",

"MAPK3",

"MAPK14",

"TXN",

"TGFB1",

"SMAD3",

"WT1",

"HIF1A",

"SRC",

"PPP2CA",

"MAPK1",

"NR3C1",

"STAT1",

"PPARG",

"PIM1",

"PRKCD",

"EIF2AK2",

"IRF9",

"FOS",

"ESR1",

"NFKB1",

"MYC",

"CREBBP",

"GAPDH",

"CSK",

"MAPK8",

"JAK2",

"JAK3",

"FYN",

"GATA2",

"PIN1",

"DAPK1",

"CTNNB1",

"CSNK2A1",

"TRIM28",

"HDAC3",

"CREB1",

"CDK2",

"KDR",

"IRF3",


  ];

  $("#target-node").autocomplete({source: arrayOfOptions, appendTo: ".target-node-cover"});
});
