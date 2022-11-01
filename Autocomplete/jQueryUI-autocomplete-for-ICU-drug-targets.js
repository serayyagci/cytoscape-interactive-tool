// AUTOCOMPLETE SEARCH BOX FOR SEARCH NODES
$(document).ready(function() {
  var arrayOfOptions = [

         "Lithium carbonate",

         "Lithium citrate",


         "Pralsetinib",

         "Fedratinib",

         "Entrectinib",

         "Baricitinib",

         "Tofacitinib",


         "Ruxolitinib",


         "Omega-3-acid ethyl esters",


         "Zanubrutinib",


         "Nintedanib",

         "Ponatinib",

         "Bosutinib",


         "Dasatinib",

         "Turpentine",


         "Isoprenaline",

         "Nadroparin",


         "Zinc sulfate, unspecified form",

         "Zinc chloride",

         "Zinc acetate",

         "Zinc",

         "Minocycline",


         "Pamidronic acid",

         "Segesterone acetate",

         "Testosterone undecanoate",

         "Testosterone enanthate",

         "Testosterone cypionate",

         "Esculin",

         "Darolutamide",

         "Clascoterone",

         "Apalutamide",

         "Gestrinone",

         "Enzacamene",

         "Homosalate",

         "Norgestrel",

         "Norethynodrel",

         "Dienogest",

         "Eugenol",

         "Enzalutamide",

         "Ulipristal",

         "Nandrolone decanoate",

         "Stanozolol",

         "Norelgestromin",

         "Methyltestosterone",

         "Oxymetholone",

         "Cyproterone acetate",

         "Periciazine",

         "Oxybenzone",

         "Testosterone propionate",

         "Danazol",

         "Drospirenone",

         "Fluoxymesterone",

         "Bicalutamide",

         "Acetophenazine",

         "Ketoconazole",

         "Nandrolone phenpropionate",

         "Norgestimate",

         "Norethisterone",

         "Tamoxifen",

         "Nilutamide",

         "Estrone",

         "Mitotane",

         "Testosterone",

         "Fluphenazine",

         "Oxandrolone",

         "Flutamide",

         "Spironolactone",

         "Progesterone",

         "Levonorgestrel",


         "Diethylstilbestrol",

         "Fostamatinib",

         "Acetylcysteine",

         "Arsenic trioxide",

         "Auranofin",

         "Acetylsalicylic acid",


         "Myrrh",

         "Soybean oil",

         "Ciprofibrate",

         "Palmitic Acid",

         "Stearic acid",

         "Lauric acid",

         "Prasterone",

         "Gemfibrozil",

         "Fenofibrate",

         "Clofibrate",


         "Fish oil",

         "Fenofibric acid",

         "Curcumin",

         "Omega-3 fatty acids",

         "Dexibuprofen",

         "Cannabidiol",

         "Triclosan",

         "Oleic Acid",

         "Doconexent",

         "Flufenamic acid",

         "Bezafibrate",

         "Pioglitazone",

         "Amiodarone",

         "Glipizide",

         "Ibuprofen",

         "Balsalazide",

         "Telmisartan",

         "Repaglinide",

         "Clofazimine",

         "Sulfasalazine",

         "Nateglinide",

         "Fenoprofen",

         "Rosiglitazone",

         "Indomethacin",

         "Valproic acid",

         "Mesalazine",

         "Troglitazone",

         "Icosapent",


         "alpha-Linolenic acid",


         "Antithymocyte immunoglobulin (rabbit)",

         "Hyaluronidase",

         "Hyaluronidase (human recombinant)",

         "Terazosin",


         "Hyaluronidase (ovine)",

         "Glycyrrhizic acid",

         "Binimetinib",

         "Foreskin keratinocyte (neonatal)",

         "Foreskin fibroblast (neonatal)",

         "Pomalidomide",

         "Certolizumab pegol",

         "Golimumab",

         "Amrinone",

         "Clenbuterol",

         "Glucosamine",

         "Epinephrine",

         "Chloroquine",

         "Infliximab",

         "Adalimumab",


         "Etanercept",


         "Dimethyl fumarate",

         "Triflusal",

         "Thalidomide",


         "Pseudoephedrine",


  ];

  $("#searchNeighbors").autocomplete({source: arrayOfOptions, appendTo: ".node-search-box"});
});
