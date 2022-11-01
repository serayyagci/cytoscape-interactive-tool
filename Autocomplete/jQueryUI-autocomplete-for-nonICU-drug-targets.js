// AUTOCOMPLETE SEARCH BOX FOR SEARCH DRUG TARGETS
$(document).ready(function() {
  var arrayOfOptions = [

         "Etanercept",


         "Adalimumab",

         "Infliximab",

         "Chloroquine",

         "Epinephrine",

         "Pseudoephedrine",

         "Thalidomide",

         "Glucosamine",

         "Clenbuterol",

         "Amrinone",

         "Golimumab",

         "Certolizumab pegol",

         "Pomalidomide",

         "Foreskin fibroblast (neonatal)",

         "Foreskin keratinocyte (neonatal)",

         "Binimetinib",

         "Glycyrrhizic acid",

         "Hyaluronidase (ovine)",


         "Terazosin",

         "Hyaluronidase (human recombinant)",

         "Hyaluronidase",

         "Adenosine phosphate",


         "Naloxone",

         "alpha-Linolenic acid",


         "Icosapent",

         "Troglitazone",

         "Mesalazine",

         "Valproic acid",

         "Indomethacin",

         "Rosiglitazone",

         "Fenoprofen",

         "Nateglinide",

         "Sulfasalazine",

         "Clofazimine",

         "Repaglinide",

         "Telmisartan",

         "Balsalazide",

         "Ibuprofen",

         "Glipizide",

         "Amiodarone",

         "Pioglitazone",

         "Bezafibrate",

         "Flufenamic acid",

         "Doconexent",

         "Oleic Acid",

         "Triclosan",

         "Cannabidiol",

         "Dexibuprofen",

         "Omega-3 fatty acids",

         "Curcumin",

         "Fenofibric acid",

         "Fish oil",

         "Flunisolide",


         "Diflorasone",

         "Alclometasone",

         "Medrysone",

         "Amcinonide",

         "Fluorometholone",

         "Megestrol acetate",

         "Levonorgestrel",

         "Beclomethasone dipropionate",

         "Progesterone",

         "Spironolactone",

         "Betamethasone",

         "Desoximetasone",

         "Fluticasone propionate",

         "Fluocinolone acetonide",

         "Ulobetasol",

         "Triamcinolone",

         "Prednisone",

         "Flumethasone",

         "Fludrocortisone",

         "Norethisterone",

         "Hydrocortisone",

         "Hydrocortamate",

         "Mifepristone",

         "Clocortolone",

         "Flurandrenolide",

         "Prednisolone",

         "Rimexolone",

         "Methylprednisolone",

         "Clobetasol propionate",

         "Fluocinonide",

         "Prednicarbate",

         "Fluoxymesterone",

         "Budesonide",

         "Dexamethasone",

         "Desonide",

         "Cortisone acetate",

         "Drospirenone",

         "Ciclesonide",

         "Difluprednate",

         "Ulipristal",

         "Fluticasone furoate",

         "Tixocortol",

         "Difluocortolone",

         "Gestrinone",

         "Deflazacort",

         "Clobetasone",

         "Fluticasone",

         "Mometasone furoate",

         "Hydrocortisone acetate",

         "Hydrocortisone butyrate",

         "Hydrocortisone cypionate",

         "Hydrocortisone phosphate",

         "Hydrocortisone probutate",

         "Hydrocortisone valerate",

         "Segesterone acetate",

         "Loteprednol etabonate",

         "Prednisolone phosphate",

         "Dexamethasone acetate",

         "Betamethasone phosphate",

         "Prednisolone acetate",

         "Diethylstilbestrol",


         "Flutamide",

         "Oxandrolone",

         "Fluphenazine",

         "Testosterone",

         "Mitotane",

         "Estrone",

         "Nilutamide",

         "Tamoxifen",

         "Norgestimate",

         "Nandrolone phenpropionate",

         "Ketoconazole",

         "Acetophenazine",

         "Bicalutamide",

         "Danazol",

         "Testosterone propionate",

         "Oxybenzone",

         "Periciazine",

         "Prasterone",

         "Cyproterone acetate",

         "Oxymetholone",

         "Methyltestosterone",

         "Norelgestromin",

         "Stanozolol",

         "Nandrolone decanoate",

         "Enzalutamide",

         "Eugenol",

         "Dienogest",

         "Norethynodrel",

         "Norgestrel",

         "Homosalate",

         "Enzacamene",

         "Apalutamide",

         "Clascoterone",

         "Darolutamide",

         "Esculin",

         "Testosterone cypionate",

         "Testosterone enanthate",

         "Testosterone undecanoate",



         "Triflusal",

         "Acetylsalicylic acid",


         "Zinc",

         "Zinc acetate",

         "Zinc chloride",

         "Zinc sulfate, unspecified form",


         "Nadroparin",

         "Isoprenaline",



         "Arsenic trioxide",

         "Turpentine",

         "Dasatinib",


         "Citric acid",

         "Tirbanibulin",

         "Bosutinib",

         "Ponatinib",

         "Nintedanib",

         "Fostamatinib",

         "Ruxolitinib",


         "Tofacitinib",

         "Baricitinib",

         "Entrectinib",

         "Fedratinib",

         "Zanubrutinib",

         "Pralsetinib",

         "Dimethyl fumarate",




  ];

  $("#searchNeighbors").autocomplete({source: arrayOfOptions, appendTo: ".node-search-box"});
});
