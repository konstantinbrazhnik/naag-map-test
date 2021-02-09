var simplemaps_usmap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#607182",
    background_transparent: "yes",
    border_color: "white",
    popups: "detect",
    state_description: "",
    state_color: "#213446",
    state_hover_color: "#607182",
    state_url: "",
    border_size: "1",
    all_states_inactive: "no",
    all_states_zoomable: "no",
    popup_nocss: "yes",
    
    //Location defaults
    location_description: "Add location markers using latitude and longitude!",
    location_color: "#2041D4",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#fff",
    label_hover_color: "#fff",
    label_size: "14",
    label_font: "DM Sans",
    hide_labels: "no",
    hide_eastern_labels: "no",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "yes",
    images_directory: "/static/lib/simplemaps/map_images/",
    fade_time: 0.1,
    import_labels: "no",
    link_text: "View Website",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    HI: {
      name: "Hawaii",
      description: "<strong>Clare Connors <span class='ng-map--party'>Democrat</span></strong><br>In Office Since 2019"
    },
    AK: {
      name: "Alaska",
      color: "#5C1A18",
      hover_color: "#8c504e",
      description: "<strong>Ed Sniffen <span class='ng-map--party'>Republican</span></strong><br>In Office Since 2020"
    },
    FL: {
      name: "Florida",
      color: "#5C1A18",
      hover_color: "#8c504e",
      description: "<strong>Ashley Moody <span class='ng-map--party'>Republican</span></strong><br>In Office Since 2019"
    },
    NH: {
      name: "New Hampshire",
      color: "#5C1A18",
      hover_color: "#8c504e",
      description: "<strong>Gordon McDonald <span class='ng-map--party'>Republican</span></strong><br>In Office Since 2017"
    },
    VT: {
      name: "Vermont",
      description: "<strong>T.J. Donovan <span class='ng-map--party'>Democrat</span></strong><br>In Office Since 2017"
    },
    ME: {
      name: "Maine",
      description: "<strong>Aaron Frey <span class='ng-map--party'>Democrat</span></strong><br>In Office Since 2019"
    },
    RI: {
      name: "Rhode Island",
      description: "<strong>Peter Neronha <span class='ng-map--party'>Democrat</span></strong><br>In Office Since 2017",
      hide: "no",
      inactive: "no"
    },
    NY: {
      name: "New York",
      description: "<strong>Leticia James <span class='ng-map--party'>Democrat</span></strong><br>In Office Since 2019"
    },
    PA: {
      name: "Pennsylvania",
      description: "<strong>Josh Shapiro <span class='ng-map--party'>Democrat</span></strong><br>In Office Since 2017"
    },
    NJ: {
      name: "New Jersey",
      description: "<strong>Gurbir Grewal <span class='ng-map--party'>Democrat</span></strong><br>In Office Since 2018"
    },
    DE: {
      name: "Delaware",
      description: "<strong>Kathleen Jennings <span class='ng-map--party'>Democrat</span></strong><br>In Office Since 2019"
    },
    MD: {
      name: "Maryland",
      description: "<strong>Brian Frosh <span class='ng-map--party'>Democrat</span></strong><br>In Office Since 2015"
    },
    VA: {
      name: "Virginia",
      description: "<strong>Mark Herring <span class='ng-map--party'>Democrat</span></strong><br>In Office Since 2014"
    },
    WV: {
      name: "West Virginia",
      color: "#5C1A18",
      hover_color: "#8c504e",
      description: "<strong>Patrick Morrisey <span class='ng-map--party'>Republican</span></strong><br>In Office Since 2013"
    },
    OH: {
      name: "Ohio",
      color: "#5C1A18",
      hover_color: "#8c504e",
      description: "<strong>Dave Yost <span class='ng-map--party'>Republican</span></strong><br>In Office Since 2019"
    },
    IN: {
      name: "Indiana",
      color: "#5C1A18",
      hover_color: "#8c504e",
      description: "<strong>Curtis Hill Jr. <span class='ng-map--party'>Republican</span></strong><br>In Office Since 2017"
    },
    IL: {
      name: "Illinois",
      description: "<strong>Kwame Raoul <span class='ng-map--party'>Democrat</span></strong><br>In Office Since 2019"
    },
    CT: {
      name: "Connecticut",
      description: "<strong>William Tong <span class='ng-map--party'>Democrat</span></strong><br>In Office Since 2019"
    },
    WI: {
      name: "Wisconsin",
      description: "<strong>Josh Kaul <span class='ng-map--party'>Democrat</span></strong><br>In Office Since 2019"
    },
    NC: {
      name: "North Carolina",
      description: "<strong>Josh Stein <span class='ng-map--party'>Democrat</span></strong><br>In Office Since 2017"
    },
    DC: {
      name: "District of Columbia",
      description: "<strong>Karl Racine <span class='ng-map--party'>Democrat</span></strong><br>In Office Since 2015"
    },
    MA: {
      name: "Massachusetts",
      description: "<strong>Maura Healey <span class='ng-map--party'>Democrat</span></strong><br>In Office Since 2015"
    },
    TN: {
      name: "Tennessee",
      color: "#5C1A18",
      hover_color: "#8c504e",
      description: "<strong>Herbert Slatery <span class='ng-map--party'>Republican</span></strong><br>In Office Since 2015"
    },
    AR: {
      name: "Arkansas",
      color: "#5C1A18",
      hover_color: "#8c504e",
      description: "<strong>Leslie Rutledge <span class='ng-map--party'>Republican</span></strong><br>In Office Since 2015"
    },
    MO: {
      name: "Missouri",
      color: "#5C1A18",
      hover_color: "#8c504e",
      description: "<strong>Eric Schmitt <span class='ng-map--party'>Republican</span></strong><br>In Office Since 2015"
    },
    GA: {
      name: "Georgia",
      color: "#5c1a18",
      hover_color: "#8c504e",
      description: "<strong>Chris Carr <span class='ng-map--party'>Republican</span></strong><br>In Office Since 2017"
    },
    SC: {
      name: "South Carolina",
      color: "#5C1A18",
      hover_color: "#8c504e",
      description: "<strong>Alan Wilson <span class='ng-map--party'>Republican</span></strong><br>In Office Since 2011"
    },
    KY: {
      name: "Kentucky",
      color: "#5C1A18",
      hover_color: "#8c504e",
      description: "<strong>Daniel Cameron <span class='ng-map--party'>Republican</span></strong><br>In Office Since 2019"
    },
    AL: {
      name: "Alabama",
      color: "#5C1A18",
      hover_color: "#8c504e",
      description: "<strong>Steve Marshall <span class='ng-map--party'>Republican</span></strong><br>In Office Since 2017"
    },
    LA: {
      name: "Louisiana",
      color: "#5C1A18",
      hover_color: "#8c504e",
      description: "<strong>Jeff Landry <span class='ng-map--party'>Republican</span></strong><br>In Office Since 2016"
    },
    MS: {
      name: "Mississippi",
      color: "#5C1A18",
      hover_color: "#8c504e",
      description: "<strong>Lynn Fitch <span class='ng-map--party'>Republican</span></strong><br>In Office Since 2020"
    },
    IA: {
      name: "Iowa",
      description: "<strong>Tom Miller <span class='ng-map--party'>Democrat</span></strong><br>In Office Since 1979"
    },
    MN: {
      name: "Minnesota",
      description: "<strong>Keith Ellison <span class='ng-map--party'>Democrat</span></strong><br>In Office Since 2019"
    },
    OK: {
      name: "Oklahoma",
      color: "#5C1A18",
      hover_color: "#8c504e",
      description: "<strong>Mike Hunter <span class='ng-map--party'>Republican</span></strong><br>In Office Since 2017"
    },
    TX: {
      name: "Texas",
      color: "#5C1A18",
      hover_color: "#8c504e",
      description: "<strong>Ken Paxton <span class='ng-map--party'>Republican</span></strong><br>In Office Since 2015"
    },
    NM: {
      name: "New Mexico",
      description: "<strong>Hector Balderas <span class='ng-map--party'>Democrat</span></strong><br>In Office Since 2015"
    },
    KS: {
      name: "Kansas",
      color: "#5C1A18",
      hover_color: "#8c504e",
      description: "<strong>Derek Schmidt <span class='ng-map--party'>Republican</span></strong><br>In Office Since 2011"
    },
    NE: {
      name: "Nebraska",
      color: "#5C1A18",
      hover_color: "#8c504e",
      description: "<strong>Doug Petersen <span class='ng-map--party'>Republican</span></strong><br>In Office Since 2015"
    },
    SD: {
      name: "South Dakota",
      color: "#5C1A18",
      hover_color: "#8c504e",
      description: "<strong>Jason Ravnsborg <span class='ng-map--party'>Republican</span></strong><br>In Office Since 2019"
    },
    ND: {
      name: "North Dakota",
      color: "#5C1A18",
      hover_color: "#8c504e",
      description: "<strong>Wayne Stenehjem <span class='ng-map--party'>Republican</span></strong><br>In Office Since 2001"
    },
    WY: {
      name: "Wyoming",
      color: "#5C1A18",
      hover_color: "#8c504e",
      description: "<strong>Bridget Hill <span class='ng-map--party'>Republican</span></strong><br>In Office Since 2019"
    },
    MT: {
      name: "Montana",
      color: "#5C1A18",
      hover_color: "#8c504e",
      description: "<strong>Tim Fox <span class='ng-map--party'>Republican</span></strong><br>In Office Since 2013"
    },
    CO: {
      name: "Colorado",
      description: "<strong>Phil Weiser <span class='ng-map--party'>Democrat</span></strong><br>In Office Since 2019"
    },
    UT: {
      name: "Utah",
      color: "#5C1A18",
      hover_color: "#8c504e",
      description: "<strong>Sean Reyes <span class='ng-map--party'>Republican</span></strong><br>In Office Since 2014"
    },
    AZ: {
      name: "Arizona",
      color: "#5C1A18",
      hover_color: "#8c504e",
      description: "<strong>Mark Brnovich <span class='ng-map--party'>Republican</span></strong><br>In Office Since 2015"
    },
    NV: {
      name: "Nevada",
      description: "<strong>Aaron Ford <span class='ng-map--party'>Democrat</span></strong><br>In Office Since 2019"
    },
    OR: {
      name: "Oregon",
      description: "<strong>Ellen Rosenblum <span class='ng-map--party'>Democrat</span></strong><br>In Office Since 2013"
    },
    WA: {
      name: "Washington",
      description: "<strong>Bob Ferguson <span class='ng-map--party'>Democrat</span></strong><br>In Office Since 2013"
    },
    CA: {
      name: "California",
      description: "<strong>Xavier Becerra <span class='ng-map--party'>Democrat</span></strong><br>In Office Since 2017"
    },
    MI: {
      name: "Michigan",
      description: "<strong>Dana Nessel <span class='ng-map--party'>Democrat</span></strong><br>In Office Since 2019"
    },
    ID: {
      name: "Idaho",
      color: "#5C1A18",
      hover_color: "#8c504e",
      description: "<strong>Lawrence Wasden <span class='ng-map--party'>Republican</span></strong><br>In Office Since 2003"
    },
    GU: {
      name: "Guam",
      hide: "no",
      inactive: "no",
      description: "<strong>Leevin Camacho <span class='ng-map--party'>Independent or Other</span></strong><br>In Office Since 2019",
      color: "#027860",
      hover_color: "#3eaa94"
    },
    VI: {
      name: "Virgin Islands",
      hide: "no",
      inactive: "no",
      description: "<strong>Denise George <span class='ng-map--party'>Democrat</span></strong><br>In Office Since 2019"
    },
    PR: {
      name: "Puerto Rico",
      hide: "no",
      inactive: "no",
      description: "<strong>InÃ©s Carrau MartÃ­nez <span class='ng-map--party'>Democrat</span></strong><br>In Office Since 2017"
    },
    MP: {
      name: "Northern Mariana Islands",
      hide: "no",
      inactive: "no",
      description: "<strong>Edward Manibusan <span class='ng-map--party'>Democrat</span></strong><br>In Office Since 2015"
    },
    AS: {
      name: "American Samoa",
      hide: "no",
      inactive: "no",
      description: "<strong>Mitzie Jessop Taas <span class='ng-map--party'>Independent or Other</span></strong><br>In Office Since 2020",
      color: "#027860",
      hover_color: "#3eaa94"
    }
  },
  locations: {},
  labels: {
    "0": {
      x: "300",
      y: "180",
      parent_id: "WY"
    },
    "1": {
      x: "280",
      y: "95",
      parent_id: "MT"
    },
    "2": {
      x: "320",
      y: "275",
      parent_id: "CO"
    },
    "3": {
      x: "223",
      y: "260",
      parent_id: "UT"
    },
    "4": {
      x: "205",
      y: "360",
      parent_id: "AZ"
    },
    "5": {
      x: "140",
      y: "235",
      parent_id: "NV"
    },
    "6": {
      x: "100",
      y: "120",
      parent_id: "OR"
    },
    "7": {
      x: "130",
      y: "55",
      parent_id: "WA"
    },
    "8": {
      x: "200",
      y: "150",
      parent_id: "ID"
    },
    "9": {
      x: "79",
      y: "285",
      parent_id: "CA"
    },
    "10": {
      x: "663",
      y: "185",
      parent_id: "MI"
    },
    "11": {
      x: "620",
      y: "545",
      parent_id: "PR",
      pill: "yes"
    },
    "12": {
      x: "550",
      y: "540",
      parent_id: "GU",
      pill: "yes"
    },
    "13": {
      x: "680",
      y: "519",
      parent_id: "VI",
      pill: "yes"
    },
    "14": {
      x: "570",
      y: "575",
      parent_id: "MP",
      pill: "yes"
    },
    "15": {
      x: "665",
      y: "580",
      parent_id: "AS",
      pill: "yes"
    },
    NH: {
      parent_id: "NH",
      x: "932",
      y: "183",
      width: 45,
      display: "all",
      pill: "yes"
    },
    VT: {
      parent_id: "VT",
      x: "883",
      y: "243",
      width: 45,
      display: "all",
      pill: "yes"
    },
    RI: {
      parent_id: "RI",
      x: "932",
      y: "273",
      width: 45,
      display: "all",
      pill: "yes"
    },
    NJ: {
      parent_id: "NJ",
      x: "883",
      y: "273",
      width: 45,
      display: "all",
      pill: "yes"
    },
    DE: {
      parent_id: "DE",
      x: "883",
      y: "303",
      width: 45,
      display: "all",
      pill: "yes"
    },
    MD: {
      parent_id: "MD",
      x: "932",
      y: "303",
      width: 45,
      display: "all",
      pill: "yes"
    },
    DC: {
      parent_id: "DC",
      x: "884",
      y: "332",
      width: 45,
      display: "all",
      pill: "yes"
    },
    MA: {
      parent_id: "MA",
      x: "932",
      y: "213",
      width: 45,
      display: "all",
      pill: "yes"
    },
    CT: {
      parent_id: "CT",
      x: "932",
      y: "243",
      width: 45,
      display: "all",
      pill: "yes"
    },
    HI: {
      parent_id: "HI",
      x: 305,
      y: 565,
      pill: "yes"
    },
    AK: {
      parent_id: "AK",
      x: "113",
      y: "495"
    },
    FL: {
      parent_id: "FL",
      x: "773",
      y: "510"
    },
    ME: {
      parent_id: "ME",
      x: "893",
      y: "85"
    },
    NY: {
      parent_id: "NY",
      x: "815",
      y: "158"
    },
    PA: {
      parent_id: "PA",
      x: "786",
      y: "210"
    },
    VA: {
      parent_id: "VA",
      x: "790",
      y: "282"
    },
    WV: {
      parent_id: "WV",
      x: "744",
      y: "270"
    },
    OH: {
      parent_id: "OH",
      x: "700",
      y: "240"
    },
    IN: {
      parent_id: "IN",
      x: "650",
      y: "250"
    },
    IL: {
      parent_id: "IL",
      x: "600",
      y: "250"
    },
    WI: {
      parent_id: "WI",
      x: "575",
      y: "155"
    },
    NC: {
      parent_id: "NC",
      x: "784",
      y: "326"
    },
    TN: {
      parent_id: "TN",
      x: "655",
      y: "340"
    },
    AR: {
      parent_id: "AR",
      x: "548",
      y: "368"
    },
    MO: {
      parent_id: "MO",
      x: "548",
      y: "293"
    },
    GA: {
      parent_id: "GA",
      x: "718",
      y: "405"
    },
    SC: {
      parent_id: "SC",
      x: "760",
      y: "371"
    },
    KY: {
      parent_id: "KY",
      x: "680",
      y: "300"
    },
    AL: {
      parent_id: "AL",
      x: "655",
      y: "405"
    },
    LA: {
      parent_id: "LA",
      x: "550",
      y: "435"
    },
    MS: {
      parent_id: "MS",
      x: "600",
      y: "405"
    },
    IA: {
      parent_id: "IA",
      x: "525",
      y: "210"
    },
    MN: {
      parent_id: "MN",
      x: "506",
      y: "124"
    },
    OK: {
      parent_id: "OK",
      x: "460",
      y: "360"
    },
    TX: {
      parent_id: "TX",
      x: "425",
      y: "435"
    },
    NM: {
      parent_id: "NM",
      x: "305",
      y: "365"
    },
    KS: {
      parent_id: "KS",
      x: "445",
      y: "290"
    },
    NE: {
      parent_id: "NE",
      x: "420",
      y: "225"
    },
    SD: {
      parent_id: "SD",
      x: "413",
      y: "160"
    },
    ND: {
      parent_id: "ND",
      x: "416",
      y: "96"
    }
  },
  regions: {}
};
