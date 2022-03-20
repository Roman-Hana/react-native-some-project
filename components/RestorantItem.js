import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestorants = [
  {
    location_id: "20908890",
    name: "Selo i Liudy",
    latitude: "50.436813",
    longitude: "30.345572",
    num_reviews: "10",
    timezone: "Europe/Kiev",
    location_string: "Petropavlivska Borshchahivka, Kiev Oblast",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/1b/53/40/35/getlstd-property-photo.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/1b/53/40/35/getlstd-property-photo.jpg",
          height: "50",
        },
        original: {
          width: "1280",
          url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/53/40/35/getlstd-property-photo.jpg",
          height: "855",
        },
        large: {
          width: "1024",
          url: "https://media-cdn.tripadvisor.com/media/photo-w/1b/53/40/35/getlstd-property-photo.jpg",
          height: "684",
        },
        medium: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/1b/53/40/35/getlstd-property-photo.jpg",
          height: "367",
        },
      },
      is_blessed: true,
      uploaded_date: "2020-05-15T09:11:46-0400",
      caption: "getlstd_property_photo",
      id: "458440757",
      helpful_votes: "1",
      published_date: "2020-05-15T09:11:46-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/20908890",
    awards: [],
    doubleclick_zone: "eu.ukraine",
    preferred_map_engine: "default",
    raw_ranking: "3.2093613147735596",
    ranking_geo: "Petropavlivska Borshchahivka",
    ranking_geo_id: "12545534",
    ranking_position: "1",
    ranking_denominator: "4",
    ranking_category: "restaurant",
    ranking: "#1 of 7 Restaurants in Petropavlivska Borshchahivka",
    distance: "0.029839674868555793",
    distance_string: "157 ft",
    bearing: "northeast",
    rating: "4.5",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    price_level: "$$ - $$$",
    price: "$49 - $169",
    description:
      '"SELO & LIUDY" is not just a restaurant, this is a place that citizens are proud of and a place that is a must visit guests Kyiv, the real attraction on the gastronomic map of the city. Restaurant with national flavor, where unique dishes from all regions of Ukraine are collected. We serve favorite dumplings, potato pancakes, borscht and bograch… Of course, nowhere without a cutlet "from Kiev" and to consolidate the effect of national cuisine, we recommend trying branded tinctures: horseradish, cranberry, cherry or sea buckthorn tastes. In the yard, along the river, there are wooden gazebos with a capacity of 10-12 guests, which are heated even in winter for the comfort of guests. From Wednesday to Sunday we invite you on evenings with live instrumental music. The atmosphere of the real Ukrainian village near the center of the capital!',
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g12545534-d20908890-Reviews-Selo_i_Liudy-Petropavlivska_Borshchahivka_Kiev_Oblast.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g12545534-d20908890-Selo_i_Liudy-Petropavlivska_Borshchahivka_Kiev_Oblast.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Petropavlivska Borshchahivka",
        abbrv: null,
        location_id: "12545534",
      },
      {
        subcategory: [
          {
            key: "province",
            name: "Province",
          },
        ],
        name: "Kiev Oblast",
        abbrv: null,
        location_id: "2693129",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Ukraine",
        abbrv: null,
        location_id: "294473",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "sit_down",
        name: "Sit down",
      },
    ],
    parent_display_name: "Petropavlivska Borshchahivka",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+380 73 212 1314",
    website: "https://www.facebook.com/restoran.SeloiLiydy/",
    email: "seloiliydy@gmail.com",
    address_obj: {
      street1: "Soborna St., 18A, Kiev",
      street2: null,
      city: "Petropavlivska Borshchahivka",
      state: null,
      country: "Ukraine",
      postalcode: "08310",
    },
    address:
      "Soborna St., 18A, Kiev, Petropavlivska Borshchahivka 08310 Ukraine",
    hours: {
      week_ranges: [
        [
          {
            open_time: 600,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1440,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1440,
          },
        ],
      ],
      timezone: "Europe/Kiev",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10654",
        name: "European",
      },
      {
        key: "10668",
        name: "Grill",
      },
      {
        key: "10770",
        name: "Ukrainian",
      },
      {
        key: "10742",
        name: "Eastern European",
      },
    ],
    dietary_restrictions: [],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "21340127",
    name: "Nice Food",
    latitude: "50.433514",
    longitude: "30.33148",
    num_reviews: "1",
    timezone: "Europe/Kiev",
    location_string: "Petropavlivska Borshchahivka, Kiev Oblast",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/1c/2e/31/2c/10.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/1c/2e/31/2c/10.jpg",
          height: "50",
        },
        original: {
          width: "1024",
          url: "https://media-cdn.tripadvisor.com/media/photo-w/1c/2e/31/2c/10.jpg",
          height: "768",
        },
        large: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/1c/2e/31/2c/10.jpg",
          height: "413",
        },
        medium: {
          width: "250",
          url: "https://media-cdn.tripadvisor.com/media/photo-f/1c/2e/31/2c/10.jpg",
          height: "188",
        },
      },
      is_blessed: true,
      uploaded_date: "2020-10-15T09:35:53-0400",
      caption:
        "Вы можете провести время в бистро или забрать свой заказ с собой, получив скидку -10% ",
      id: "472789292",
      helpful_votes: "0",
      published_date: "2020-10-15T09:35:53-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/21340127",
    awards: [],
    doubleclick_zone: "eu.ukraine",
    preferred_map_engine: "default",
    raw_ranking: "3.0384199619293213",
    ranking_geo: "Petropavlivska Borshchahivka",
    ranking_geo_id: "12545534",
    ranking_position: "4",
    ranking_denominator: "4",
    ranking_category: "restaurant",
    ranking: "#4 of 7 Restaurants in Petropavlivska Borshchahivka",
    distance: "0.6322972754459164",
    distance_string: "0.6 mi",
    bearing: "west",
    rating: "5.0",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    price_level: "$",
    price: "$36 - $189",
    description: "",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g12545534-d21340127-Reviews-Nice_Food-Petropavlivska_Borshchahivka_Kiev_Oblast.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g12545534-d21340127-Nice_Food-Petropavlivska_Borshchahivka_Kiev_Oblast.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Petropavlivska Borshchahivka",
        abbrv: null,
        location_id: "12545534",
      },
      {
        subcategory: [
          {
            key: "province",
            name: "Province",
          },
        ],
        name: "Kiev Oblast",
        abbrv: null,
        location_id: "2693129",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Ukraine",
        abbrv: null,
        location_id: "294473",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "sit_down",
        name: "Sit down",
      },
    ],
    parent_display_name: "Petropavlivska Borshchahivka",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+380 98 593 2727",
    website: "http://nicefood-dostavka.site",
    email: "ametistnf@gmail.com",
    address_obj: {
      street1: "Sadova St., 1B",
      street2: null,
      city: "Petropavlivska Borshchahivka",
      state: null,
      country: "Ukraine",
      postalcode: "08130",
    },
    address: "Sadova St., 1B, Petropavlivska Borshchahivka 08130 Ukraine",
    hours: {
      week_ranges: [
        [
          {
            open_time: 600,
            close_time: 1260,
          },
        ],
        [
          {
            open_time: 540,
            close_time: 1260,
          },
        ],
        [
          {
            open_time: 540,
            close_time: 1260,
          },
        ],
        [
          {
            open_time: 540,
            close_time: 1260,
          },
        ],
        [
          {
            open_time: 540,
            close_time: 1260,
          },
        ],
        [
          {
            open_time: 540,
            close_time: 1260,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1260,
          },
        ],
      ],
      timezone: "Europe/Kiev",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "4617",
        name: "Italian",
      },
      {
        key: "9908",
        name: "American",
      },
      {
        key: "10654",
        name: "European",
      },
      {
        key: "10668",
        name: "Grill",
      },
    ],
    dietary_restrictions: [],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "15231533",
    name: "Sazha",
    latitude: "50.441776",
    longitude: "30.35797",
    num_reviews: "15",
    timezone: "Europe/Kiev",
    location_string: "Kyiv (Kiev)",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/1c/b3/da/3c/caption.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/1c/b3/da/3c/caption.jpg",
          height: "50",
        },
        original: {
          width: "1280",
          url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/b3/da/3c/caption.jpg",
          height: "853",
        },
        large: {
          width: "1024",
          url: "https://media-cdn.tripadvisor.com/media/photo-w/1c/b3/da/3c/caption.jpg",
          height: "682",
        },
        medium: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/1c/b3/da/3c/caption.jpg",
          height: "366",
        },
      },
      is_blessed: true,
      uploaded_date: "2021-03-03T09:01:34-0500",
      caption: "зал",
      id: "481548860",
      helpful_votes: "0",
      published_date: "2021-03-03T09:01:34-0500",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/15231533",
    awards: [],
    doubleclick_zone: "eu.ukraine.kiev",
    preferred_map_engine: "default",
    raw_ranking: "3.0631861686706543",
    ranking_geo: "Kyiv (Kiev)",
    ranking_geo_id: "294474",
    ranking_position: "1410",
    ranking_denominator: "2419",
    ranking_category: "restaurant",
    ranking: "#1,277 of 2,754 Restaurants in Kyiv (Kiev)",
    distance: "0.6749383695958129",
    distance_string: "0.7 mi",
    bearing: "northeast",
    rating: "3.5",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    price_level: "$$ - $$$",
    description: "",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g294474-d15231533-Reviews-Sazha-Kyiv_Kiev.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g294474-d15231533-Sazha-Kyiv_Kiev.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Kyiv (Kiev)",
        abbrv: null,
        location_id: "294474",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Ukraine",
        abbrv: null,
        location_id: "294473",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [],
    parent_display_name: "Kyiv (Kiev)",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+380 97 012 3243",
    website: "http://sazharest.com.ua/",
    email: "sazhameat@gmail.com",
    address_obj: {
      street1: "16 Petropavlovskaya Streat, Petropavlovskaya Borschagovka",
      street2: null,
      city: "Kyiv (Kiev)",
      state: null,
      country: "Ukraine",
      postalcode: "08130",
    },
    address:
      "16 Petropavlovskaya Streat, Petropavlovskaya Borschagovka, Kyiv (Kiev) 08130 Ukraine",
    hours: {
      week_ranges: [
        [
          {
            open_time: 660,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1380,
          },
        ],
      ],
      timezone: "Europe/Kiev",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10654",
        name: "European",
      },
      {
        key: "10637",
        name: "Polish",
      },
      {
        key: "10770",
        name: "Ukrainian",
      },
    ],
    dietary_restrictions: [],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "13324244",
    name: "Restaurant Kazan Mangal",
    latitude: "50.4342",
    longitude: "30.3294",
    num_reviews: "2",
    timezone: "Europe/Kiev",
    location_string: "Petropavlivska Borshchahivka, Kiev Oblast",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/14/98/bc/0e/img-20180911-150216-largejpg.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/14/98/bc/0e/img-20180911-150216-largejpg.jpg",
          height: "50",
        },
        original: {
          width: "992",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/14/98/bc/0e/img-20180911-150216-largejpg.jpg",
          height: "744",
        },
        large: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/14/98/bc/0e/img-20180911-150216-largejpg.jpg",
          height: "413",
        },
        medium: {
          width: "250",
          url: "https://media-cdn.tripadvisor.com/media/photo-f/14/98/bc/0e/img-20180911-150216-largejpg.jpg",
          height: "188",
        },
      },
      is_blessed: true,
      uploaded_date: "2018-09-12T09:18:53-0400",
      caption: "",
      id: "345553934",
      helpful_votes: "1",
      published_date: "2018-09-12T09:18:53-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/13324244",
    awards: [],
    doubleclick_zone: "eu.ukraine",
    preferred_map_engine: "default",
    raw_ranking: "3.0426902770996094",
    ranking_geo: "Petropavlivska Borshchahivka",
    ranking_geo_id: "12545534",
    ranking_position: "3",
    ranking_denominator: "4",
    ranking_category: "restaurant",
    ranking: "#3 of 7 Restaurants in Petropavlivska Borshchahivka",
    distance: "0.7067385351927531",
    distance_string: "0.7 mi",
    bearing: "west",
    rating: "4.5",
    is_closed: false,
    is_long_closed: false,
    price_level: "",
    description: "",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g12545534-d13324244-Reviews-Restaurant_Kazan_Mangal-Petropavlivska_Borshchahivka_Kiev_Oblast.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g12545534-d13324244-Restaurant_Kazan_Mangal-Petropavlivska_Borshchahivka_Kiev_Oblast.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Petropavlivska Borshchahivka",
        abbrv: null,
        location_id: "12545534",
      },
      {
        subcategory: [
          {
            key: "province",
            name: "Province",
          },
        ],
        name: "Kiev Oblast",
        abbrv: null,
        location_id: "2693129",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Ukraine",
        abbrv: null,
        location_id: "294473",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [],
    parent_display_name: "Petropavlivska Borshchahivka",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+380 97 718 1871",
    address_obj: {
      street1: "Sobornaya St., 80",
      street2: null,
      city: "Petropavlivska Borshchahivka",
      state: null,
      country: "Ukraine",
      postalcode: "08130",
    },
    address: "Sobornaya St., 80, Petropavlivska Borshchahivka 08130 Ukraine",
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10659",
        name: "Asian",
      },
      {
        key: "10742",
        name: "Eastern European",
      },
      {
        key: "11743",
        name: "Azerbaijani",
      },
    ],
    dietary_restrictions: [],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "13482710",
    name: "Cipolla Rossa Trattoria",
    latitude: "50.43862",
    longitude: "30.325624",
    num_reviews: "10",
    timezone: "Europe/Kiev",
    location_string: "Petropavlivska Borshchahivka, Kiev Oblast",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/12/47/6f/6e/caption.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/12/47/6f/6e/caption.jpg",
          height: "50",
        },
        original: {
          width: "2048",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/12/47/6f/6e/caption.jpg",
          height: "2048",
        },
        large: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-p/12/47/6f/6e/caption.jpg",
          height: "550",
        },
        medium: {
          width: "450",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/12/47/6f/6e/caption.jpg",
          height: "450",
        },
      },
      is_blessed: true,
      uploaded_date: "2018-03-09T01:22:27-0500",
      caption: "Траттория Чиполла Росса",
      id: "306671470",
      helpful_votes: "1",
      published_date: "2018-03-09T01:22:27-0500",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/13482710",
    awards: [],
    doubleclick_zone: "eu.ukraine",
    preferred_map_engine: "default",
    raw_ranking: "3.1514508724212646",
    ranking_geo: "Petropavlivska Borshchahivka",
    ranking_geo_id: "12545534",
    ranking_position: "2",
    ranking_denominator: "4",
    ranking_category: "restaurant",
    ranking: "#2 of 7 Restaurants in Petropavlivska Borshchahivka",
    distance: "0.865043775465032",
    distance_string: "0.9 mi",
    bearing: "west",
    rating: "4.5",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    price_level: "$$ - $$$",
    description:
      "Dinner in a restaurant with the family, rewarding yourself for your work and sharing news with family and friends is gradually becoming a part of Ukrainian everyday life. We will keep this tradition. We are friendly to families with children, guests with small animals and lonely hungry travelers. Here you will find the best food and warm family coziness.",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g12545534-d13482710-Reviews-Cipolla_Rossa_Trattoria-Petropavlivska_Borshchahivka_Kiev_Oblast.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g12545534-d13482710-Cipolla_Rossa_Trattoria-Petropavlivska_Borshchahivka_Kiev_Oblast.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Petropavlivska Borshchahivka",
        abbrv: null,
        location_id: "12545534",
      },
      {
        subcategory: [
          {
            key: "province",
            name: "Province",
          },
        ],
        name: "Kiev Oblast",
        abbrv: null,
        location_id: "2693129",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Ukraine",
        abbrv: null,
        location_id: "294473",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [],
    parent_display_name: "Petropavlivska Borshchahivka",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+380 98 557 0000",
    website: "https://www.facebook.com/cipolla.rossa.trattoria/",
    address_obj: {
      street1: "Aviatoriv St., 41A",
      street2: null,
      city: "Petropavlivska Borshchahivka",
      state: null,
      country: "Ukraine",
      postalcode: null,
    },
    address: "Aviatoriv St., 41A, Petropavlivska Borshchahivka Ukraine",
    hours: {
      week_ranges: [
        [
          {
            open_time: 660,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1380,
          },
        ],
      ],
      timezone: "Europe/Kiev",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "4617",
        name: "Italian",
      },
      {
        key: "10649",
        name: "Mediterranean",
      },
      {
        key: "10671",
        name: "Fusion",
      },
      {
        key: "10679",
        name: "Healthy",
      },
      {
        key: "10742",
        name: "Eastern European",
      },
      {
        key: "10770",
        name: "Ukrainian",
      },
    ],
    dietary_restrictions: [],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "7297641",
    name: "Coffee Time",
    latitude: "50.44681",
    longitude: "30.3589",
    num_reviews: "4",
    timezone: "Europe/Kiev",
    location_string: "Kyiv (Kiev)",
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/7297641",
    awards: [],
    doubleclick_zone: "eu.ukraine.kiev",
    preferred_map_engine: "default",
    raw_ranking: "3.0553841590881348",
    ranking_geo: "Kyiv (Kiev)",
    ranking_geo_id: "294474",
    ranking_position: "1479",
    ranking_denominator: "2419",
    ranking_category: "restaurant",
    ranking: "#92 of 223 Coffee & Tea in Kyiv (Kiev)",
    distance: "0.9356949221765445",
    distance_string: "0.9 mi",
    bearing: "northeast",
    rating: "4.5",
    is_closed: false,
    is_long_closed: false,
    price_level: "",
    description: "",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g294474-d7297641-Reviews-Coffee_Time-Kyiv_Kiev.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g294474-d7297641-Coffee_Time-Kyiv_Kiev.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Kyiv (Kiev)",
        abbrv: null,
        location_id: "294474",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Ukraine",
        abbrv: null,
        location_id: "294473",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "cafe",
        name: "Café",
      },
    ],
    parent_display_name: "Kyiv (Kiev)",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    website: "http://vk.com/coffee.time",
    address_obj: {
      street1: "Malinovskogo st., 12",
      street2: "Mall Metropolis",
      city: "Kyiv (Kiev)",
      state: null,
      country: "Ukraine",
      postalcode: null,
    },
    address: "Malinovskogo st., 12 Mall Metropolis, Kyiv (Kiev) Ukraine",
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "4617",
        name: "Italian",
      },
    ],
    dietary_restrictions: [],
    establishment_types: [
      {
        key: "9900",
        name: "Coffee & Tea",
      },
    ],
  },
  {
    location_id: "14971227",
    name: "Shashlikyan",
    latitude: "50.43044",
    longitude: "30.363775",
    num_reviews: "1",
    timezone: "Europe/Kiev",
    location_string: "Kyiv (Kiev)",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/22/2c/71/9c/caption.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/22/2c/71/9c/caption.jpg",
          height: "50",
        },
        original: {
          width: "1280",
          url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/22/2c/71/9c/caption.jpg",
          height: "854",
        },
        large: {
          width: "1024",
          url: "https://media-cdn.tripadvisor.com/media/photo-w/22/2c/71/9c/caption.jpg",
          height: "683",
        },
        medium: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/22/2c/71/9c/caption.jpg",
          height: "367",
        },
      },
      is_blessed: true,
      uploaded_date: "2022-02-23T05:31:31-0500",
      caption: "Доставляємо по Києву та в передмістя",
      id: "573338012",
      helpful_votes: "0",
      published_date: "2022-02-23T05:31:31-0500",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/14971227",
    awards: [],
    doubleclick_zone: "eu.ukraine.kiev",
    preferred_map_engine: "default",
    raw_ranking: "3.0406999588012695",
    ranking_geo: "Kyiv (Kiev)",
    ranking_geo_id: "294474",
    ranking_position: "1665",
    ranking_denominator: "2419",
    ranking_category: "restaurant",
    ranking: "#1,501 of 2,754 Restaurants in Kyiv (Kiev)",
    distance: "0.9301597634042091",
    distance_string: "0.9 mi",
    bearing: "southeast",
    rating: "5.0",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    price_level: "$$ - $$$",
    price: "$200 - $1,500",
    description:
      "Shashlikyan is a restaurant with delivery of barbecue and oriental cuisine. Free delivery and convenient pickup. More than 30 types of barbecue, a large selection of Georgian, Armenian, and Uzbek dishes. We prepare for you only selected meat from the best Ukrainian farms and use spices from Armenia. We have been working for 9 years, and trying to get better every day.",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g294474-d14971227-Reviews-Shashlikyan-Kyiv_Kiev.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g294474-d14971227-Shashlikyan-Kyiv_Kiev.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Kyiv (Kiev)",
        abbrv: null,
        location_id: "294474",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Ukraine",
        abbrv: null,
        location_id: "294473",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "sit_down",
        name: "Sit down",
      },
    ],
    parent_display_name: "Kyiv (Kiev)",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+380 44 384 0988",
    website: "http://shashlikyan.ua",
    email: "shashlikyan@gmail.com",
    address_obj: {
      street1: "Chornobylska St, 16/80",
      street2: null,
      city: "Kyiv (Kiev)",
      state: null,
      country: "Ukraine",
      postalcode: "03179",
    },
    address: "Chornobylska St, 16/80, Kyiv (Kiev) 03179 Ukraine",
    hours: {
      week_ranges: [
        [
          {
            open_time: 600,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1320,
          },
        ],
      ],
      timezone: "Europe/Kiev",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10668",
        name: "Grill",
      },
      {
        key: "10742",
        name: "Eastern European",
      },
      {
        key: "10766",
        name: "Armenian",
      },
      {
        key: "11742",
        name: "Georgian",
      },
    ],
    dietary_restrictions: [],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "12558273",
    name: "Ginger",
    latitude: "50.44987",
    longitude: "30.35408",
    num_reviews: "7",
    timezone: "Europe/Kiev",
    location_string: "Kyiv (Kiev)",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/11/e2/e5/08/photo0jpg.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/11/e2/e5/08/photo0jpg.jpg",
          height: "50",
        },
        original: {
          width: "2048",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/11/e2/e5/08/photo0jpg.jpg",
          height: "2048",
        },
        large: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-p/11/e2/e5/08/photo0jpg.jpg",
          height: "550",
        },
        medium: {
          width: "450",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/11/e2/e5/08/photo0jpg.jpg",
          height: "450",
        },
      },
      is_blessed: true,
      uploaded_date: "2018-01-27T05:27:08-0500",
      caption: "",
      id: "300082440",
      helpful_votes: "0",
      published_date: "2018-01-31T11:00:46-0500",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/12558273",
    awards: [],
    doubleclick_zone: "eu.ukraine.kiev",
    preferred_map_engine: "default",
    raw_ranking: "3.1329033374786377",
    ranking_geo: "Kyiv (Kiev)",
    ranking_geo_id: "294474",
    ranking_position: "946",
    ranking_denominator: "2419",
    ranking_category: "restaurant",
    ranking: "#861 of 2,754 Restaurants in Kyiv (Kiev)",
    distance: "1.0023534534503684",
    distance_string: "1 mi",
    bearing: "northeast",
    rating: "4.5",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    price_level: "$$ - $$$",
    description: "",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g294474-d12558273-Reviews-Ginger-Kyiv_Kiev.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g294474-d12558273-Ginger-Kyiv_Kiev.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Kyiv (Kiev)",
        abbrv: null,
        location_id: "294474",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Ukraine",
        abbrv: null,
        location_id: "294473",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [],
    parent_display_name: "Kyiv (Kiev)",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    website: "http://cafeimbir.com/",
    email: "info@cafeimbir.com",
    address_obj: {
      street1: "Zhylianska Street 7",
      street2: null,
      city: "Kyiv (Kiev)",
      state: null,
      country: "Ukraine",
      postalcode: "02000",
    },
    address: "Zhylianska Street 7, Kyiv (Kiev) 02000 Ukraine",
    hours: {
      week_ranges: [
        [
          {
            open_time: 480,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 480,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 480,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 480,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 480,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 480,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 480,
            close_time: 1380,
          },
        ],
      ],
      timezone: "Europe/Kiev",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [],
    dietary_restrictions: [],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "12187698",
    name: "Viktoriya Family 1",
    latitude: "50.43051",
    longitude: "30.366476",
    num_reviews: "20",
    timezone: "Europe/Kiev",
    location_string: "Kyiv (Kiev)",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/21/82/ec/bd/caption.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/21/82/ec/bd/caption.jpg",
          height: "50",
        },
        original: {
          width: "1280",
          url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/21/82/ec/bd/caption.jpg",
          height: "853",
        },
        large: {
          width: "1024",
          url: "https://media-cdn.tripadvisor.com/media/photo-w/21/82/ec/bd/caption.jpg",
          height: "683",
        },
        medium: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/21/82/ec/bd/caption.jpg",
          height: "367",
        },
      },
      is_blessed: true,
      uploaded_date: "2021-12-03T12:34:38-0500",
      caption: "Сцена",
      id: "562228413",
      helpful_votes: "0",
      published_date: "2021-12-03T12:34:38-0500",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/12187698",
    awards: [],
    doubleclick_zone: "eu.ukraine.kiev",
    preferred_map_engine: "default",
    raw_ranking: "3.065768003463745",
    ranking_geo: "Kyiv (Kiev)",
    ranking_geo_id: "294474",
    ranking_position: "1391",
    ranking_denominator: "2419",
    ranking_category: "restaurant",
    ranking: "#1,259 of 2,754 Restaurants in Kyiv (Kiev)",
    distance: "1.0353845925098482",
    distance_string: "1 mi",
    bearing: "southeast",
    rating: "3.5",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    price_level: "$$ - $$$",
    price: "$70 - $300",
    description:
      "Karaoke 21:00- 06:00, Restaurant, Bar, Hotel 24/7, Sauna 24/7-“ hammam”, “Finskaya”, “Parnaya” Beauty Salon",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g294474-d12187698-Reviews-Viktoriya_Family_1-Kyiv_Kiev.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g294474-d12187698-Viktoriya_Family_1-Kyiv_Kiev.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Kyiv (Kiev)",
        abbrv: null,
        location_id: "294474",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Ukraine",
        abbrv: null,
        location_id: "294473",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "sit_down",
        name: "Sit down",
      },
    ],
    parent_display_name: "Kyiv (Kiev)",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+380 67 740 4747",
    website: "https://viktoriya.ua/restoran/",
    address_obj: {
      street1: "vul. Tuluzy 3B",
      street2: null,
      city: "Kyiv (Kiev)",
      state: null,
      country: "Ukraine",
      postalcode: "03170",
    },
    address: "vul. Tuluzy 3B, Kyiv (Kiev) 03170 Ukraine",
    hours: {
      week_ranges: [
        [
          {
            open_time: 720,
            close_time: 1500,
          },
        ],
        [
          {
            open_time: 720,
            close_time: 1500,
          },
        ],
        [
          {
            open_time: 720,
            close_time: 1500,
          },
        ],
        [
          {
            open_time: 720,
            close_time: 1500,
          },
        ],
        [
          {
            open_time: 720,
            close_time: 1800,
          },
        ],
        [
          {
            open_time: 720,
            close_time: 1800,
          },
        ],
        [
          {
            open_time: 720,
            close_time: 1800,
          },
        ],
      ],
      timezone: "Europe/Kiev",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10654",
        name: "European",
      },
    ],
    dietary_restrictions: [],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "21392241",
    name: "Eski QIrIm",
    latitude: "50.42254",
    longitude: "30.354958",
    num_reviews: "1",
    timezone: "Europe/Kiev",
    location_string: "Sofiyivska Borschagivka, Kiev Oblast",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/1e/03/19/bd/caption.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/1e/03/19/bd/caption.jpg",
          height: "50",
        },
        original: {
          width: "1280",
          url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/1e/03/19/bd/caption.jpg",
          height: "960",
        },
        large: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/1e/03/19/bd/caption.jpg",
          height: "413",
        },
        medium: {
          width: "250",
          url: "https://media-cdn.tripadvisor.com/media/photo-f/1e/03/19/bd/caption.jpg",
          height: "188",
        },
      },
      is_blessed: false,
      uploaded_date: "2021-09-20T14:11:00-0400",
      caption: "",
      id: "503519677",
      helpful_votes: "0",
      published_date: "2021-09-20T14:11:00-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/21392241",
    awards: [],
    doubleclick_zone: "eu.ukraine",
    preferred_map_engine: "default",
    raw_ranking: "3.0428152084350586",
    ranking_geo: "Sofiyivska Borschagivka",
    ranking_geo_id: "10207499",
    ranking_position: "5",
    ranking_denominator: "12",
    ranking_category: "restaurant",
    ranking: "#4 of 14 Restaurants in Sofiyivska Borschagivka",
    distance: "1.066075581303948",
    distance_string: "1.1 mi",
    bearing: "southeast",
    rating: "5.0",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    price_level: "$$ - $$$",
    price: "$200 - $700",
    description: "",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g10207499-d21392241-Reviews-Eski_QIrIm-Sofiyivska_Borschagivka_Kiev_Oblast.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g10207499-d21392241-Eski_QIrIm-Sofiyivska_Borschagivka_Kiev_Oblast.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Sofiyivska Borschagivka",
        abbrv: null,
        location_id: "10207499",
      },
      {
        subcategory: [
          {
            key: "province",
            name: "Province",
          },
        ],
        name: "Kiev Oblast",
        abbrv: null,
        location_id: "2693129",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Ukraine",
        abbrv: null,
        location_id: "294473",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "sit_down",
        name: "Sit down",
      },
    ],
    parent_display_name: "Sofiyivska Borschagivka",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+380 93 820 3030",
    website: "http://eski-qirim2.postershop.me/",
    email: "eskiqirim.kiev@gmail.com",
    address_obj: {
      street1: "vul. Pushkina 1B",
      street2: null,
      city: "Sofiyivska Borschagivka",
      state: null,
      country: "Ukraine",
      postalcode: "08131",
    },
    address: "vul. Pushkina 1B, Sofiyivska Borschagivka 08131 Ukraine",
    hours: {
      week_ranges: [
        [
          {
            open_time: 600,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1320,
          },
        ],
      ],
      timezone: "Europe/Kiev",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10742",
        name: "Eastern European",
      },
      {
        key: "10663",
        name: "Turkish",
      },
      {
        key: "11740",
        name: "Uzbek",
      },
    ],
    dietary_restrictions: [],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "8721310",
    name: "Ketchup Room",
    latitude: "50.435444",
    longitude: "30.377409",
    num_reviews: "59",
    timezone: "Europe/Kiev",
    location_string: "Kyiv (Kiev)",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/0a/5d/0b/ac/360-69.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/0a/5d/0b/ac/360-69.jpg",
          height: "50",
        },
        original: {
          width: "1280",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/0a/5d/0b/ac/360-69.jpg",
          height: "853",
        },
        large: {
          width: "1024",
          url: "https://media-cdn.tripadvisor.com/media/photo-w/0a/5d/0b/ac/360-69.jpg",
          height: "682",
        },
        medium: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/0a/5d/0b/ac/360-69.jpg",
          height: "366",
        },
      },
      is_blessed: true,
      uploaded_date: "2016-02-18T14:57:52-0500",
      caption: "бургер Миннесота 360г - 69 грн",
      id: "173869996",
      helpful_votes: "0",
      published_date: "2016-02-18T14:57:52-0500",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/8721310",
    awards: [
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2017",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2017",
      },
    ],
    doubleclick_zone: "eu.ukraine.kiev",
    preferred_map_engine: "default",
    raw_ranking: "3.512648105621338",
    ranking_geo: "Kyiv (Kiev)",
    ranking_geo_id: "294474",
    ranking_position: "224",
    ranking_denominator: "2419",
    ranking_category: "restaurant",
    ranking: "#208 of 2,754 Restaurants in Kyiv (Kiev)",
    distance: "1.4301448450797343",
    distance_string: "1.4 mi",
    bearing: "east",
    rating: "4.5",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    price_level: "$",
    price: "$2 - $3",
    description:
      "12 kinds of delicious burgers as low as 45- 68 UAH, concise menu of European cuisine",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g294474-d8721310-Reviews-Ketchup_Room-Kyiv_Kiev.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g294474-d8721310-Ketchup_Room-Kyiv_Kiev.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Kyiv (Kiev)",
        abbrv: null,
        location_id: "294474",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Ukraine",
        abbrv: null,
        location_id: "294473",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "cafe",
        name: "Café",
      },
    ],
    parent_display_name: "Kyiv (Kiev)",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+380 97 412 9016",
    website: "http://www.facebook.com/ketchuproom",
    email: "burgers@ukr.net",
    address_obj: {
      street1: "Kolasa Yakuba vul. 15",
      street2: null,
      city: "Kyiv (Kiev)",
      state: null,
      country: "Ukraine",
      postalcode: "03148",
    },
    address: "Kolasa Yakuba vul. 15, Kyiv (Kiev) 03148 Ukraine",
    hours: {
      week_ranges: [
        [
          {
            open_time: 720,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 720,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 720,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 720,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 720,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 720,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 720,
            close_time: 1380,
          },
        ],
      ],
      timezone: "Europe/Kiev",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "4617",
        name: "Italian",
      },
      {
        key: "9908",
        name: "American",
      },
      {
        key: "10770",
        name: "Ukrainian",
      },
      {
        key: "10640",
        name: "Bar",
      },
      {
        key: "10670",
        name: "Pub",
      },
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    dietary_restrictions: [
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "11803893",
    name: "Embery Lounge",
    latitude: "50.45314",
    longitude: "30.35255",
    num_reviews: "3",
    timezone: "Europe/Kiev",
    location_string: "Kyiv (Kiev)",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/0d/c3/8e/c9/embery-lounge-interior.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/0d/c3/8e/c9/embery-lounge-interior.jpg",
          height: "50",
        },
        original: {
          width: "1280",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/0d/c3/8e/c9/embery-lounge-interior.jpg",
          height: "853",
        },
        large: {
          width: "1024",
          url: "https://media-cdn.tripadvisor.com/media/photo-w/0d/c3/8e/c9/embery-lounge-interior.jpg",
          height: "682",
        },
        medium: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/0d/c3/8e/c9/embery-lounge-interior.jpg",
          height: "367",
        },
      },
      is_blessed: true,
      uploaded_date: "2016-11-30T09:20:44-0500",
      caption: "Embery Lounge interior",
      id: "230919881",
      helpful_votes: "0",
      published_date: "2016-11-30T09:20:44-0500",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/11803893",
    awards: [],
    doubleclick_zone: "eu.ukraine.kiev",
    preferred_map_engine: "default",
    raw_ranking: "3.0356392860412598",
    ranking_geo: "Kyiv (Kiev)",
    ranking_geo_id: "294474",
    ranking_position: "1741",
    ranking_denominator: "2419",
    ranking_category: "restaurant",
    ranking: "#1,568 of 2,754 Restaurants in Kyiv (Kiev)",
    distance: "1.1925209664606133",
    distance_string: "1.2 mi",
    bearing: "north",
    rating: "4.0",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    price_level: "$$ - $$$",
    price: "$8 - $20",
    description:
      "Here you can always enjoy quality tobacco and try legendary Embery's hookah. We have the best hookah servers in Kyiv, they always know what you want. Also, our experienced chef won't disappoint even the most picky eater.",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g294474-d11803893-Reviews-Embery_Lounge-Kyiv_Kiev.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g294474-d11803893-Embery_Lounge-Kyiv_Kiev.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Kyiv (Kiev)",
        abbrv: null,
        location_id: "294474",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Ukraine",
        abbrv: null,
        location_id: "294473",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "sit_down",
        name: "Sit down",
      },
    ],
    parent_display_name: "Kyiv (Kiev)",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+380 93 955 2755",
    website: "http://vk.com/emberyloungekiev",
    address_obj: {
      street1: "Saksaganskogo St., 55",
      street2: null,
      city: "Kyiv (Kiev)",
      state: null,
      country: "Ukraine",
      postalcode: null,
    },
    address: "Saksaganskogo St., 55, Kyiv (Kiev) Ukraine",
    hours: {
      week_ranges: [
        [
          {
            open_time: 660,
            close_time: 1440,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1440,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1440,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1440,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1440,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1440,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1440,
          },
        ],
      ],
      timezone: "Europe/Kiev",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10654",
        name: "European",
      },
      {
        key: "5473",
        name: "Japanese",
      },
    ],
    dietary_restrictions: [],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "6895976",
    name: "Restaurant Vodograi",
    latitude: "50.42278",
    longitude: "30.35588",
    num_reviews: "8",
    timezone: "Europe/Kiev",
    location_string: "Sofiyivska Borschagivka, Kiev Oblast",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/06/3e/5c/11/restaurant-vodogray.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/06/3e/5c/11/restaurant-vodogray.jpg",
          height: "50",
        },
        original: {
          width: "1125",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/06/3e/5c/11/restaurant-vodogray.jpg",
          height: "1500",
        },
        large: {
          width: "1024",
          url: "https://media-cdn.tripadvisor.com/media/photo-w/06/3e/5c/11/restaurant-vodogray.jpg",
          height: "1365",
        },
        medium: {
          width: "338",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/06/3e/5c/11/restaurant-vodogray.jpg",
          height: "450",
        },
      },
      is_blessed: true,
      uploaded_date: "2014-07-23T19:22:57-0400",
      caption: "хачапури",
      id: "104750097",
      helpful_votes: "1",
      published_date: "2014-07-23T19:22:57-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/6895976",
    awards: [],
    doubleclick_zone: "eu.ukraine",
    preferred_map_engine: "default",
    raw_ranking: "2.748894691467285",
    ranking_geo: "Sofiyivska Borschagivka",
    ranking_geo_id: "10207499",
    ranking_position: "11",
    ranking_denominator: "12",
    ranking_category: "restaurant",
    ranking: "#9 of 14 Restaurants in Sofiyivska Borschagivka",
    distance: "1.0685742544549806",
    distance_string: "1.1 mi",
    bearing: "southeast",
    rating: "2.5",
    is_closed: false,
    is_long_closed: false,
    price_level: "$$ - $$$",
    description: "",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g10207499-d6895976-Reviews-Restaurant_Vodograi-Sofiyivska_Borschagivka_Kiev_Oblast.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g10207499-d6895976-Restaurant_Vodograi-Sofiyivska_Borschagivka_Kiev_Oblast.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Sofiyivska Borschagivka",
        abbrv: null,
        location_id: "10207499",
      },
      {
        subcategory: [
          {
            key: "province",
            name: "Province",
          },
        ],
        name: "Kiev Oblast",
        abbrv: null,
        location_id: "2693129",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Ukraine",
        abbrv: null,
        location_id: "294473",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "cafe",
        name: "Café",
      },
    ],
    parent_display_name: "Sofiyivska Borschagivka",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+380 44 406 5066",
    website: "http://vodogray.co.ua/",
    address_obj: {
      street1: "Pushkina St., 1",
      street2: null,
      city: "Sofiyivska Borschagivka",
      state: null,
      country: "Ukraine",
      postalcode: "08131",
    },
    address: "Pushkina St., 1, Sofiyivska Borschagivka 08131 Ukraine",
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10669",
        name: "Contemporary",
      },
      {
        key: "10742",
        name: "Eastern European",
      },
      {
        key: "10770",
        name: "Ukrainian",
      },
    ],
    dietary_restrictions: [],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "17436270",
    name: "L'Kafa Cafe",
    latitude: "50.43334",
    longitude: "30.37463",
    num_reviews: "1",
    timezone: "Europe/Kiev",
    location_string: "Kyiv (Kiev)",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/17/80/a9/bc/bar.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/17/80/a9/bc/bar.jpg",
          height: "50",
        },
        original: {
          width: "960",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/17/80/a9/bc/bar.jpg",
          height: "600",
        },
        large: {
          width: "960",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/17/80/a9/bc/bar.jpg",
          height: "600",
        },
        medium: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/17/80/a9/bc/bar.jpg",
          height: "344",
        },
      },
      is_blessed: true,
      uploaded_date: "2019-05-13T09:21:03-0400",
      caption: "Bar",
      id: "394308028",
      helpful_votes: "0",
      published_date: "2019-05-13T09:21:03-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/17436270",
    awards: [],
    doubleclick_zone: "eu.ukraine.kiev",
    preferred_map_engine: "default",
    raw_ranking: "3.0353784561157227",
    ranking_geo: "Kyiv (Kiev)",
    ranking_geo_id: "294474",
    ranking_position: "1744",
    ranking_denominator: "2419",
    ranking_category: "restaurant",
    ranking: "#1,571 of 2,754 Restaurants in Kyiv (Kiev)",
    distance: "1.3247301610581361",
    distance_string: "1.3 mi",
    bearing: "east",
    rating: "5.0",
    is_closed: false,
    is_long_closed: false,
    price_level: "$",
    price: "$100 - $400",
    description: "",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g294474-d17436270-Reviews-L_Kafa_Cafe-Kyiv_Kiev.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g294474-d17436270-L_Kafa_Cafe-Kyiv_Kiev.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Kyiv (Kiev)",
        abbrv: null,
        location_id: "294474",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Ukraine",
        abbrv: null,
        location_id: "294473",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "sit_down",
        name: "Sit down",
      },
    ],
    parent_display_name: "Kyiv (Kiev)",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+380 73 267 5712",
    website: "https://website-548463285455653940945-cafe.business.site/?m=true",
    address_obj: {
      street1: "Yakuba Kolasa, 25A",
      street2: null,
      city: "Kyiv (Kiev)",
      state: null,
      country: "Ukraine",
      postalcode: "02000",
    },
    address: "Yakuba Kolasa, 25A, Kyiv (Kiev) 02000 Ukraine",
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "5473",
        name: "Japanese",
      },
      {
        key: "10654",
        name: "European",
      },
      {
        key: "10687",
        name: "Middle Eastern",
      },
      {
        key: "10742",
        name: "Eastern European",
      },
      {
        key: "10770",
        name: "Ukrainian",
      },
      {
        key: "11742",
        name: "Georgian",
      },
    ],
    dietary_restrictions: [],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "6571905",
    name: "Art Eco Cafe",
    latitude: "50.45478",
    longitude: "30.360723",
    num_reviews: "12",
    timezone: "Europe/Kiev",
    location_string: "Kyiv (Kiev)",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/0f/8f/5b/6a/caption.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/0f/8f/5b/6a/caption.jpg",
          height: "50",
        },
        original: {
          width: "2000",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/0f/8f/5b/6a/caption.jpg",
          height: "1292",
        },
        large: {
          width: "1024",
          url: "https://media-cdn.tripadvisor.com/media/photo-w/0f/8f/5b/6a/caption.jpg",
          height: "661",
        },
        medium: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/0f/8f/5b/6a/caption.jpg",
          height: "355",
        },
      },
      is_blessed: true,
      uploaded_date: "2017-06-13T08:08:43-0400",
      caption: "Микс салата с авокадо и пикантным пармезаном",
      id: "261053290",
      helpful_votes: "0",
      published_date: "2017-06-13T08:08:43-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/6571905",
    awards: [],
    doubleclick_zone: "eu.ukraine.kiev",
    preferred_map_engine: "default",
    raw_ranking: "3.161921501159668",
    ranking_geo: "Kyiv (Kiev)",
    ranking_geo_id: "294474",
    ranking_position: "812",
    ranking_denominator: "2419",
    ranking_category: "restaurant",
    ranking: "#8 of 43 Bakeries in Kyiv (Kiev)",
    distance: "1.436661007574039",
    distance_string: "1.4 mi",
    bearing: "northeast",
    rating: "4.5",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    price_level: "$$ - $$$",
    price: "$1 - $7",
    description: "",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g294474-d6571905-Reviews-Art_Eco_Cafe-Kyiv_Kiev.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g294474-d6571905-Art_Eco_Cafe-Kyiv_Kiev.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Kyiv (Kiev)",
        abbrv: null,
        location_id: "294474",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Ukraine",
        abbrv: null,
        location_id: "294473",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "sit_down",
        name: "Sit down",
      },
    ],
    parent_display_name: "Kyiv (Kiev)",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+380 67 451 7745",
    website: "http://artecocafe.com.ua/",
    email: "info@artecocafe.com.ua",
    address_obj: {
      street1: "Peremohy prosp. 121 D",
      street2: null,
      city: "Kyiv (Kiev)",
      state: null,
      country: "Ukraine",
      postalcode: "03115",
    },
    address: "Peremohy prosp. 121 D, Kyiv (Kiev) 03115 Ukraine",
    hours: {
      week_ranges: [
        [
          {
            open_time: 660,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1320,
          },
        ],
      ],
      timezone: "Europe/Kiev",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10654",
        name: "European",
      },
      {
        key: "10770",
        name: "Ukrainian",
      },
      {
        key: "10742",
        name: "Eastern European",
      },
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    dietary_restrictions: [
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    establishment_types: [
      {
        key: "9900",
        name: "Coffee & Tea",
      },
      {
        key: "9901",
        name: "Bakeries",
      },
      {
        key: "9909",
        name: "Dessert",
      },
    ],
  },
  {
    location_id: "9979342",
    name: "Pesto Cafe",
    latitude: "50.45658",
    longitude: "30.364939",
    num_reviews: "86",
    timezone: "Europe/Kiev",
    location_string: "Kyiv (Kiev)",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/0a/8d/8b/a2/caption.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/0a/8d/8b/a2/caption.jpg",
          height: "50",
        },
        original: {
          width: "960",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/0a/8d/8b/a2/caption.jpg",
          height: "657",
        },
        large: {
          width: "960",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/0a/8d/8b/a2/caption.jpg",
          height: "657",
        },
        medium: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/0a/8d/8b/a2/caption.jpg",
          height: "376",
        },
      },
      is_blessed: true,
      uploaded_date: "2016-03-10T14:28:10-0500",
      caption: "Основной зал",
      id: "177048482",
      helpful_votes: "0",
      published_date: "2016-03-10T14:28:10-0500",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/9979342",
    awards: [
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2019",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2019",
      },
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2018",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2018",
      },
    ],
    doubleclick_zone: "eu.ukraine.kiev",
    preferred_map_engine: "default",
    raw_ranking: "3.2896811962127686",
    ranking_geo: "Kyiv (Kiev)",
    ranking_geo_id: "294474",
    ranking_position: "490",
    ranking_denominator: "2419",
    ranking_category: "restaurant",
    ranking: "#440 of 2,754 Restaurants in Kyiv (Kiev)",
    distance: "1.6385043876210246",
    distance_string: "1.6 mi",
    bearing: "northeast",
    rating: "4.0",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    price_level: "$$ - $$$",
    price: "$60 - $500",
    description:
      "Pesto Cafe - democratic, the Italian institution for the whole family. On the menu: home-made pasta, pizza, ravioli, bruschetta, risotto, salads, sweet desserts. For the little ones a children's room with a nanny.",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g294474-d9979342-Reviews-Pesto_Cafe-Kyiv_Kiev.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g294474-d9979342-Pesto_Cafe-Kyiv_Kiev.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Kyiv (Kiev)",
        abbrv: null,
        location_id: "294474",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Ukraine",
        abbrv: null,
        location_id: "294473",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "sit_down",
        name: "Sit down",
      },
    ],
    parent_display_name: "Kyiv (Kiev)",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+380 44 237 0375",
    website: "http://www.pestocafe.ua/",
    email: "info@pestocafe.com.ua",
    address_obj: {
      street1: "Pobedy Ave., 136",
      street2: null,
      city: "Kyiv (Kiev)",
      state: null,
      country: "Ukraine",
      postalcode: "03179",
    },
    address: "Pobedy Ave., 136, Kyiv (Kiev) 03179 Ukraine",
    hours: {
      week_ranges: [
        [
          {
            open_time: 600,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1440,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1440,
          },
        ],
      ],
      timezone: "Europe/Kiev",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "4617",
        name: "Italian",
      },
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
      {
        key: "10697",
        name: "Vegan Options",
      },
      {
        key: "10992",
        name: "Gluten Free Options",
      },
    ],
    dietary_restrictions: [
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
      {
        key: "10697",
        name: "Vegan Options",
      },
      {
        key: "10992",
        name: "Gluten Free Options",
      },
    ],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "19432471",
    name: "Mishok",
    latitude: "50.44035",
    longitude: "30.31147",
    num_reviews: "2",
    timezone: "Europe/Kiev",
    location_string: "Chaiky, Kiev Oblast",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/1a/0d/da/d4/mishok.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/1a/0d/da/d4/mishok.jpg",
          height: "50",
        },
        original: {
          width: "1280",
          url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/0d/da/d4/mishok.jpg",
          height: "995",
        },
        large: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/1a/0d/da/d4/mishok.jpg",
          height: "428",
        },
        medium: {
          width: "250",
          url: "https://media-cdn.tripadvisor.com/media/photo-f/1a/0d/da/d4/mishok.jpg",
          height: "194",
        },
      },
      is_blessed: true,
      uploaded_date: "2019-11-17T06:59:44-0500",
      caption: "Mishok",
      id: "437115604",
      helpful_votes: "0",
      published_date: "2019-11-17T06:59:44-0500",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/19432471",
    awards: [],
    doubleclick_zone: "eu.ukraine",
    preferred_map_engine: "default",
    raw_ranking: "3.0579612255096436",
    ranking_geo: "Chaiky",
    ranking_geo_id: "12158342",
    ranking_position: "1",
    ranking_denominator: "2",
    ranking_category: "restaurant",
    ranking: "#1 of 3 Restaurants in Chaiky",
    distance: "1.4998335917921484",
    distance_string: "1.5 mi",
    bearing: "west",
    rating: "4.5",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    price_level: "$",
    price: "$58 - $353",
    description:
      "Cozy restaurant in the village of Chaika. We offer our guests a wide range of dishes and a cozy atmosphere. Pizza delivery works",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g12158342-d19432471-Reviews-Mishok-Chaiky_Kiev_Oblast.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g12158342-d19432471-Mishok-Chaiky_Kiev_Oblast.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Chaiky",
        abbrv: null,
        location_id: "12158342",
      },
      {
        subcategory: [
          {
            key: "province",
            name: "Province",
          },
        ],
        name: "Kiev Oblast",
        abbrv: null,
        location_id: "2693129",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Ukraine",
        abbrv: null,
        location_id: "294473",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "cafe",
        name: "Café",
      },
    ],
    parent_display_name: "Chaiky",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+380 95 827 3119",
    website: "https://www.facebook.com/mishok.chayka/",
    email: "mishok.chayka@gmail.com",
    address_obj: {
      street1: "Antonova, 1A",
      street2: null,
      city: "Chaiky",
      state: null,
      country: "Ukraine",
      postalcode: "08130",
    },
    address: "Antonova, 1A, Chaiky 08130 Ukraine",
    hours: {
      week_ranges: [
        [
          {
            open_time: 660,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 480,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 480,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 480,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 480,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 480,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1320,
          },
        ],
      ],
      timezone: "Europe/Kiev",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "9908",
        name: "American",
      },
      {
        key: "10641",
        name: "Pizza",
      },
      {
        key: "10648",
        name: "International",
      },
      {
        key: "10659",
        name: "Asian",
      },
      {
        key: "10742",
        name: "Eastern European",
      },
      {
        key: "10770",
        name: "Ukrainian",
      },
    ],
    dietary_restrictions: [],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "23781643",
    name: "Pesto Cafe",
    latitude: "50.456543",
    longitude: "30.363316",
    num_reviews: "1",
    timezone: "Europe/Kiev",
    location_string: "Kyiv (Kiev)",
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/23781643",
    awards: [],
    doubleclick_zone: "eu.ukraine.kiev",
    preferred_map_engine: "default",
    raw_ranking: "3.0440735816955566",
    ranking_geo: "Kyiv (Kiev)",
    ranking_geo_id: "294474",
    ranking_position: "1608",
    ranking_denominator: "2419",
    ranking_category: "restaurant",
    ranking: "#1,450 of 2,754 Restaurants in Kyiv (Kiev)",
    distance: "1.5990364200870917",
    distance_string: "1.6 mi",
    bearing: "northeast",
    rating: "5.0",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    price_level: "",
    description: "",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g294474-d23781643-Reviews-Pesto_Cafe-Kyiv_Kiev.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g294474-d23781643-Pesto_Cafe-Kyiv_Kiev.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Kyiv (Kiev)",
        abbrv: null,
        location_id: "294474",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Ukraine",
        abbrv: null,
        location_id: "294473",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [],
    parent_display_name: "Kyiv (Kiev)",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+380 50 381 4359",
    website: "http://pesto-family.com",
    address_obj: {
      street1: "Peremohy Ave, 134/1",
      street2: "Khit Mall, 2nd floor",
      city: "Kyiv (Kiev)",
      state: null,
      country: "Ukraine",
      postalcode: "02000",
    },
    address:
      "Peremohy Ave, 134/1 Khit Mall, 2nd floor, Kyiv (Kiev) 02000 Ukraine",
    hours: {
      week_ranges: [
        [
          {
            open_time: 600,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1380,
          },
        ],
      ],
      timezone: "Europe/Kiev",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "4617",
        name: "Italian",
      },
    ],
    dietary_restrictions: [],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "12133277",
    name: "Frans.ua",
    latitude: "50.4579",
    longitude: "30.3583",
    num_reviews: "1",
    timezone: "Europe/Kiev",
    location_string: "Kyiv (Kiev)",
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/12133277",
    awards: [],
    doubleclick_zone: "eu.ukraine.kiev",
    preferred_map_engine: "default",
    raw_ranking: "3.0132510662078857",
    ranking_geo: "Kyiv (Kiev)",
    ranking_geo_id: "294474",
    ranking_position: "2098",
    ranking_denominator: "2419",
    ranking_category: "restaurant",
    ranking: "#1,881 of 2,754 Restaurants in Kyiv (Kiev)",
    distance: "1.5866157572247501",
    distance_string: "1.6 mi",
    bearing: "north",
    rating: "4.0",
    is_closed: false,
    is_long_closed: false,
    price_level: "",
    description:
      'Hlіbna Right "Frans.ua" - a unique institution in which every guest can enjoy not only high-quality branded and fresh pastries, as well, and see firsthand the process of baking breads (from the dough until fragrant and hot bread from the oven).',
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g294474-d12133277-Reviews-Frans_ua-Kyiv_Kiev.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g294474-d12133277-Frans_ua-Kyiv_Kiev.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Kyiv (Kiev)",
        abbrv: null,
        location_id: "294474",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Ukraine",
        abbrv: null,
        location_id: "294473",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "cafe",
        name: "Café",
      },
    ],
    parent_display_name: "Kyiv (Kiev)",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+380 67 314 7878",
    website: "https://vk.com/fransua_cafe",
    email: "fransua.services@gmail.com",
    address_obj: {
      street1: "Akademika Palladina st., 5",
      street2: null,
      city: "Kyiv (Kiev)",
      state: null,
      country: "Ukraine",
      postalcode: null,
    },
    address: "Akademika Palladina st., 5, Kyiv (Kiev) Ukraine",
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "5086",
        name: "French",
      },
      {
        key: "9908",
        name: "American",
      },
      {
        key: "10654",
        name: "European",
      },
    ],
    dietary_restrictions: [],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "12508006",
    name: "Crazy Family",
    latitude: "50.45897",
    longitude: "30.35858",
    num_reviews: "30",
    timezone: "Europe/Kiev",
    location_string: "Kyiv (Kiev)",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/0f/86/5b/71/caption.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/0f/86/5b/71/caption.jpg",
          height: "50",
        },
        original: {
          width: "1920",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/0f/86/5b/71/caption.jpg",
          height: "1194",
        },
        large: {
          width: "1024",
          url: "https://media-cdn.tripadvisor.com/media/photo-w/0f/86/5b/71/caption.jpg",
          height: "637",
        },
        medium: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/0f/86/5b/71/caption.jpg",
          height: "342",
        },
      },
      is_blessed: true,
      uploaded_date: "2017-06-09T12:35:59-0400",
      caption: "Хоспер-бар прямо в зале",
      id: "260463473",
      helpful_votes: "0",
      published_date: "2017-06-09T12:35:59-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/12508006",
    awards: [],
    doubleclick_zone: "eu.ukraine.kiev",
    preferred_map_engine: "default",
    raw_ranking: "3.097635507583618",
    ranking_geo: "Kyiv (Kiev)",
    ranking_geo_id: "294474",
    ranking_position: "1134",
    ranking_denominator: "2419",
    ranking_category: "restaurant",
    ranking: "#1,025 of 2,754 Restaurants in Kyiv (Kiev)",
    distance: "1.6599089191052976",
    distance_string: "1.7 mi",
    bearing: "north",
    rating: "3.5",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    price_level: "$$ - $$$",
    price: "$1 - $20",
    description:
      "Restoration of taste and emotion Crazy Family - institution, saturated with the spirit of America, its diversity and democracy. The highlight of the Crazy Family is the open-air Hosper Bar. Order meat, fish or vegetables from the barbecue and make yourself comfortable - look at the fire and how your dish is prepared. The atmosphere of passionate madness",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g294474-d12508006-Reviews-Crazy_Family-Kyiv_Kiev.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g294474-d12508006-Crazy_Family-Kyiv_Kiev.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Kyiv (Kiev)",
        abbrv: null,
        location_id: "294474",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Ukraine",
        abbrv: null,
        location_id: "294473",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "sit_down",
        name: "Sit down",
      },
    ],
    parent_display_name: "Kyiv (Kiev)",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+380 66 465 9789",
    website: "http://crazyfamily.kiev.ua/new",
    address_obj: {
      street1: "Vasiliya Stusa St., 35/37",
      street2: null,
      city: "Kyiv (Kiev)",
      state: null,
      country: "Ukraine",
      postalcode: "03142",
    },
    address: "Vasiliya Stusa St., 35/37, Kyiv (Kiev) 03142 Ukraine",
    hours: {
      week_ranges: [
        [
          {
            open_time: 660,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1380,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1440,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1440,
          },
        ],
      ],
      timezone: "Europe/Kiev",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10668",
        name: "Grill",
      },
      {
        key: "10770",
        name: "Ukrainian",
      },
      {
        key: "9908",
        name: "American",
      },
      {
        key: "10641",
        name: "Pizza",
      },
      {
        key: "10654",
        name: "European",
      },
      {
        key: "10742",
        name: "Eastern European",
      },
    ],
    dietary_restrictions: [],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "12644743",
    name: "Hanami restaurant & bar",
    latitude: "50.459328",
    longitude: "30.357302",
    num_reviews: "36",
    timezone: "Europe/Kiev",
    location_string: "Kyiv (Kiev)",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/10/4d/4c/d4/received-997384040403363.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/10/4d/4c/d4/received-997384040403363.jpg",
          height: "50",
        },
        original: {
          width: "1188",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/10/4d/4c/d4/received-997384040403363.jpg",
          height: "792",
        },
        large: {
          width: "1024",
          url: "https://media-cdn.tripadvisor.com/media/photo-w/10/4d/4c/d4/received-997384040403363.jpg",
          height: "682",
        },
        medium: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/10/4d/4c/d4/received-997384040403363.jpg",
          height: "366",
        },
      },
      is_blessed: true,
      uploaded_date: "2017-08-16T15:00:54-0400",
      caption: "",
      id: "273501396",
      helpful_votes: "1",
      published_date: "2017-08-16T15:00:54-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/12644743",
    awards: [],
    doubleclick_zone: "eu.ukraine.kiev",
    preferred_map_engine: "default",
    raw_ranking: "3.09521222114563",
    ranking_geo: "Kyiv (Kiev)",
    ranking_geo_id: "294474",
    ranking_position: "1148",
    ranking_denominator: "2419",
    ranking_category: "restaurant",
    ranking: "#1,036 of 2,754 Restaurants in Kyiv (Kiev)",
    distance: "1.6638927020337237",
    distance_string: "1.7 mi",
    bearing: "north",
    rating: "3.5",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    price_level: "$$ - $$$",
    price: "$300 - $500",
    description: "",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g294474-d12644743-Reviews-Hanami_restaurant_bar-Kyiv_Kiev.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g294474-d12644743-Hanami_restaurant_bar-Kyiv_Kiev.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Kyiv (Kiev)",
        abbrv: null,
        location_id: "294474",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Ukraine",
        abbrv: null,
        location_id: "294473",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "sit_down",
        name: "Sit down",
      },
    ],
    parent_display_name: "Kyiv (Kiev)",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+380 66 911 1818",
    website: "http://hanami.kyiv.ua/",
    address_obj: {
      street1: "Akademika Palladina Ave., 16",
      street2: null,
      city: "Kyiv (Kiev)",
      state: null,
      country: "Ukraine",
      postalcode: "03164",
    },
    address: "Akademika Palladina Ave., 16, Kyiv (Kiev) 03164 Ukraine",
    hours: {
      week_ranges: [
        [
          {
            open_time: 660,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1320,
          },
        ],
        [
          {
            open_time: 660,
            close_time: 1320,
          },
        ],
      ],
      timezone: "Europe/Kiev",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "5473",
        name: "Japanese",
      },
      {
        key: "9908",
        name: "American",
      },
      {
        key: "10654",
        name: "European",
      },
      {
        key: "10640",
        name: "Bar",
      },
      {
        key: "10653",
        name: "Sushi",
      },
    ],
    dietary_restrictions: [],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "19878630",
    name: "Porter Pub",
    latitude: "50.45749",
    longitude: "30.363014",
    num_reviews: "1",
    timezone: "Europe/Kiev",
    location_string: "Kyiv (Kiev)",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/1a/dc/2b/d3/great-pub.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/1a/dc/2b/d3/great-pub.jpg",
          height: "50",
        },
        original: {
          width: "946",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/1a/dc/2b/d3/great-pub.jpg",
          height: "756",
        },
        large: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/1a/dc/2b/d3/great-pub.jpg",
          height: "440",
        },
        medium: {
          width: "250",
          url: "https://media-cdn.tripadvisor.com/media/photo-f/1a/dc/2b/d3/great-pub.jpg",
          height: "200",
        },
      },
      is_blessed: false,
      uploaded_date: "2020-02-11T04:42:03-0500",
      caption: "Great pub",
      id: "450636755",
      helpful_votes: "0",
      published_date: "2020-02-11T04:42:03-0500",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/19878630",
    awards: [],
    doubleclick_zone: "eu.ukraine.kiev",
    preferred_map_engine: "default",
    raw_ranking: "3.0350773334503174",
    ranking_geo: "Kyiv (Kiev)",
    ranking_geo_id: "294474",
    ranking_position: "1770",
    ranking_denominator: "2419",
    ranking_category: "restaurant",
    ranking: "#1,596 of 2,754 Restaurants in Kyiv (Kiev)",
    distance: "1.649430741321936",
    distance_string: "1.6 mi",
    bearing: "northeast",
    rating: "5.0",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    price_level: "",
    description: "",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g294474-d19878630-Reviews-Porter_Pub-Kyiv_Kiev.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g294474-d19878630-Porter_Pub-Kyiv_Kiev.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Kyiv (Kiev)",
        abbrv: null,
        location_id: "294474",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Ukraine",
        abbrv: null,
        location_id: "294473",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [],
    parent_display_name: "Kyiv (Kiev)",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+380 44 599 0558",
    website: "http://www.porter.com.ua/",
    email: "reklama.porterpub@gmail.com",
    address_obj: {
      street1: "Feodory Pushynoi Street, 23/25",
      street2: null,
      city: "Kyiv (Kiev)",
      state: null,
      country: "Ukraine",
      postalcode: "02000",
    },
    address: "Feodory Pushynoi Street, 23/25, Kyiv (Kiev) 02000 Ukraine",
    hours: {
      week_ranges: [
        [
          {
            open_time: 600,
            close_time: 1560,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1560,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1560,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1560,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1560,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1560,
          },
        ],
        [
          {
            open_time: 600,
            close_time: 1560,
          },
        ],
      ],
      timezone: "Europe/Kiev",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10670",
        name: "Pub",
      },
    ],
    dietary_restrictions: [],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "15309746",
    name: "Chaikhona BAZAR",
    latitude: "50.43447",
    longitude: "30.38287",
    num_reviews: "1",
    timezone: "Europe/Kiev",
    location_string: "Kyiv (Kiev)",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/18/fe/33/e8/getlstd-property-photo.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/18/fe/33/e8/getlstd-property-photo.jpg",
          height: "50",
        },
        original: {
          width: "960",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/18/fe/33/e8/getlstd-property-photo.jpg",
          height: "698",
        },
        large: {
          width: "960",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/18/fe/33/e8/getlstd-property-photo.jpg",
          height: "698",
        },
        medium: {
          width: "250",
          url: "https://media-cdn.tripadvisor.com/media/photo-f/18/fe/33/e8/getlstd-property-photo.jpg",
          height: "182",
        },
      },
      is_blessed: true,
      uploaded_date: "2019-08-28T10:07:23-0400",
      caption: "getlstd_property_photo",
      id: "419312616",
      helpful_votes: "0",
      published_date: "2019-08-28T10:07:23-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/15309746",
    awards: [],
    doubleclick_zone: "eu.ukraine.kiev",
    preferred_map_engine: "default",
    raw_ranking: "3.0",
    ranking_geo: "Kyiv (Kiev)",
    ranking_geo_id: "294474",
    ranking_position: "2203",
    ranking_denominator: "2419",
    ranking_category: "restaurant",
    ranking: "#1,980 of 2,754 Restaurants in Kyiv (Kiev)",
    distance: "1.6749606836603887",
    distance_string: "1.7 mi",
    bearing: "east",
    rating: "3.0",
    is_closed: false,
    is_long_closed: false,
    price_level: "$",
    price: "$50 - $300",
    description: "",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g294474-d15309746-Reviews-Chaikhona_BAZAR-Kyiv_Kiev.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g294474-d15309746-Chaikhona_BAZAR-Kyiv_Kiev.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Kyiv (Kiev)",
        abbrv: null,
        location_id: "294474",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Ukraine",
        abbrv: null,
        location_id: "294473",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "sit_down",
        name: "Sit down",
      },
    ],
    parent_display_name: "Kyiv (Kiev)",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+380 73 267 5713",
    website: "https://www.facebook.com/chaihonakiev/",
    address_obj: {
      street1: "Geroyev Stalingrada, 16V",
      street2: null,
      city: "Kyiv (Kiev)",
      state: null,
      country: "Ukraine",
      postalcode: "02000",
    },
    address: "Geroyev Stalingrada, 16V, Kyiv (Kiev) 02000 Ukraine",
    is_candidate_for_contact_info_suppression: false,
    cuisine: [],
    dietary_restrictions: [],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "10122361",
    name: "Rukkola",
    latitude: "50.430496",
    longitude: "30.385382",
    num_reviews: "32",
    timezone: "Europe/Kiev",
    location_string: "Kyiv (Kiev)",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/19/3a/f9/7a/img-20190913-201601-largejpg.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/19/3a/f9/7a/img-20190913-201601-largejpg.jpg",
          height: "50",
        },
        original: {
          width: "921",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/19/3a/f9/7a/img-20190913-201601-largejpg.jpg",
          height: "691",
        },
        large: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/19/3a/f9/7a/img-20190913-201601-largejpg.jpg",
          height: "413",
        },
        medium: {
          width: "250",
          url: "https://media-cdn.tripadvisor.com/media/photo-f/19/3a/f9/7a/img-20190913-201601-largejpg.jpg",
          height: "188",
        },
      },
      is_blessed: false,
      uploaded_date: "2019-09-13T14:16:22-0400",
      caption: "",
      id: "423295354",
      helpful_votes: "0",
      published_date: "2019-09-13T14:16:22-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/10122361",
    awards: [],
    doubleclick_zone: "eu.ukraine.kiev",
    preferred_map_engine: "default",
    raw_ranking: "3.1610350608825684",
    ranking_geo: "Kyiv (Kiev)",
    ranking_geo_id: "294474",
    ranking_position: "819",
    ranking_denominator: "2419",
    ranking_category: "restaurant",
    ranking: "#742 of 2,754 Restaurants in Kyiv (Kiev)",
    distance: "1.8284733329831886",
    distance_string: "1.8 mi",
    bearing: "east",
    rating: "3.5",
    is_closed: false,
    is_long_closed: false,
    price_level: "$$ - $$$",
    description: "",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g294474-d10122361-Reviews-Rukkola-Kyiv_Kiev.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g294474-d10122361-Rukkola-Kyiv_Kiev.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Kyiv (Kiev)",
        abbrv: null,
        location_id: "294474",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Ukraine",
        abbrv: null,
        location_id: "294473",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "cafe",
        name: "Café",
      },
    ],
    parent_display_name: "Kyiv (Kiev)",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+380 44 384 4934",
    website: "http://rucola.com.ua/rus/news/311/",
    address_obj: {
      street1: "vul. Yury Hnata 13",
      street2: null,
      city: "Kyiv (Kiev)",
      state: null,
      country: "Ukraine",
      postalcode: "03148",
    },
    address: "vul. Yury Hnata 13, Kyiv (Kiev) 03148 Ukraine",
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "4617",
        name: "Italian",
      },
      {
        key: "10654",
        name: "European",
      },
      {
        key: "10746",
        name: "Central European",
      },
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
      {
        key: "10697",
        name: "Vegan Options",
      },
    ],
    dietary_restrictions: [
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
      {
        key: "10697",
        name: "Vegan Options",
      },
    ],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "6882099",
    name: "Chaikhona Bazar",
    latitude: "50.430424",
    longitude: "30.384348",
    num_reviews: "40",
    timezone: "Europe/Kiev",
    location_string: "Kyiv (Kiev)",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/18/ff/01/03/getlstd-property-photo.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/18/ff/01/03/getlstd-property-photo.jpg",
          height: "50",
        },
        original: {
          width: "1280",
          url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/18/ff/01/03/getlstd-property-photo.jpg",
          height: "853",
        },
        large: {
          width: "1024",
          url: "https://media-cdn.tripadvisor.com/media/photo-w/18/ff/01/03/getlstd-property-photo.jpg",
          height: "683",
        },
        medium: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/18/ff/01/03/getlstd-property-photo.jpg",
          height: "367",
        },
      },
      is_blessed: true,
      uploaded_date: "2019-08-28T10:38:13-0400",
      caption: "getlstd_property_photo",
      id: "419365123",
      helpful_votes: "1",
      published_date: "2019-08-28T10:38:13-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/6882099",
    awards: [],
    doubleclick_zone: "eu.ukraine.kiev",
    preferred_map_engine: "default",
    raw_ranking: "3.070673942565918",
    ranking_geo: "Kyiv (Kiev)",
    ranking_geo_id: "294474",
    ranking_position: "1350",
    ranking_denominator: "2419",
    ranking_category: "restaurant",
    ranking: "#1,222 of 2,754 Restaurants in Kyiv (Kiev)",
    distance: "1.7853719501159557",
    distance_string: "1.8 mi",
    bearing: "east",
    rating: "3.5",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    price_level: "$$ - $$$",
    price: "$50 - $300",
    description: "",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g294474-d6882099-Reviews-Chaikhona_Bazar-Kyiv_Kiev.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g294474-d6882099-Chaikhona_Bazar-Kyiv_Kiev.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Kyiv (Kiev)",
        abbrv: null,
        location_id: "294474",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Ukraine",
        abbrv: null,
        location_id: "294473",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "sit_down",
        name: "Sit down",
      },
    ],
    parent_display_name: "Kyiv (Kiev)",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+380 73 267 5721",
    website: "http://www.facebook.com/chaihonakiev/",
    address_obj: {
      street1: "Gnata Yury St., 6G",
      street2: null,
      city: "Kyiv (Kiev)",
      state: null,
      country: "Ukraine",
      postalcode: "02000",
    },
    address: "Gnata Yury St., 6G, Kyiv (Kiev) 02000 Ukraine",
    hours: {
      week_ranges: [
        [
          {
            open_time: 540,
            close_time: 1800,
          },
        ],
        [
          {
            open_time: 540,
            close_time: 1800,
          },
        ],
        [
          {
            open_time: 540,
            close_time: 1800,
          },
        ],
        [
          {
            open_time: 540,
            close_time: 1800,
          },
        ],
        [
          {
            open_time: 540,
            close_time: 1800,
          },
        ],
        [
          {
            open_time: 540,
            close_time: 1800,
          },
        ],
        [
          {
            open_time: 540,
            close_time: 1800,
          },
        ],
      ],
      timezone: "Europe/Kiev",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10687",
        name: "Middle Eastern",
      },
      {
        key: "10642",
        name: "Cafe",
      },
      {
        key: "10742",
        name: "Eastern European",
      },
      {
        key: "11742",
        name: "Georgian",
      },
      {
        key: "11743",
        name: "Azerbaijani",
      },
    ],
    dietary_restrictions: [],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "19719414",
    name: "il Molino",
    latitude: "50.459095",
    longitude: "30.357548",
    num_reviews: "1",
    timezone: "Europe/Kiev",
    location_string: "Kyiv (Kiev)",
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/19719414",
    awards: [],
    doubleclick_zone: "eu.ukraine.kiev",
    preferred_map_engine: "default",
    raw_ranking: "2.859083414077759",
    ranking_geo: "Kyiv (Kiev)",
    ranking_geo_id: "294474",
    ranking_position: "2290",
    ranking_denominator: "2419",
    ranking_category: "restaurant",
    ranking: "#2,061 of 2,754 Restaurants in Kyiv (Kiev)",
    distance: "1.652277762179903",
    distance_string: "1.7 mi",
    bearing: "north",
    rating: "2.0",
    is_closed: false,
    is_long_closed: false,
    price_level: "",
    description: "",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g294474-d19719414-Reviews-Il_Molino-Kyiv_Kiev.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g294474-d19719414-Il_Molino-Kyiv_Kiev.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Kyiv (Kiev)",
        abbrv: null,
        location_id: "294474",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Ukraine",
        abbrv: null,
        location_id: "294473",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [],
    parent_display_name: "Kyiv (Kiev)",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+380 67 434 1106",
    website: "https://ilmolino.ua/ru/",
    address_obj: {
      street1: "Akademika Palladina Ave, 16",
      street2: null,
      city: "Kyiv (Kiev)",
      state: null,
      country: "Ukraine",
      postalcode: "03164",
    },
    address: "Akademika Palladina Ave, 16, Kyiv (Kiev) 03164 Ukraine",
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "4617",
        name: "Italian",
      },
    ],
    dietary_restrictions: [],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "4313792",
    name: "McDonald's",
    latitude: "50.46148",
    longitude: "30.35479",
    num_reviews: "16",
    timezone: "Europe/Kiev",
    location_string: "Kyiv (Kiev)",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/1b/f0/46/7b/caption.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/1b/f0/46/7b/caption.jpg",
          height: "50",
        },
        original: {
          width: "1280",
          url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/f0/46/7b/caption.jpg",
          height: "1280",
        },
        large: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-p/1b/f0/46/7b/caption.jpg",
          height: "550",
        },
        medium: {
          width: "450",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/1b/f0/46/7b/caption.jpg",
          height: "450",
        },
      },
      is_blessed: false,
      uploaded_date: "2020-09-04T21:54:28-0400",
      caption: "",
      id: "468731515",
      helpful_votes: "0",
      published_date: "2020-09-04T21:54:28-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/4313792",
    awards: [],
    doubleclick_zone: "eu.ukraine.kiev",
    preferred_map_engine: "default",
    raw_ranking: "3.004333257675171",
    ranking_geo: "Kyiv (Kiev)",
    ranking_geo_id: "294474",
    ranking_position: "2153",
    ranking_denominator: "2419",
    ranking_category: "restaurant",
    ranking: "#1,932 of 2,754 Restaurants in Kyiv (Kiev)",
    distance: "1.7751685689234227",
    distance_string: "1.8 mi",
    bearing: "north",
    rating: "3.5",
    is_closed: false,
    is_long_closed: false,
    price_level: "",
    description: "",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g294474-d4313792-Reviews-McDonald_s-Kyiv_Kiev.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g294474-d4313792-McDonald_s-Kyiv_Kiev.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Kyiv (Kiev)",
        abbrv: null,
        location_id: "294474",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Ukraine",
        abbrv: null,
        location_id: "294473",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "sit_down",
        name: "Sit down",
      },
    ],
    parent_display_name: "Kyiv (Kiev)",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    address_obj: {
      street1: "Korolova akademika prosp. 7/60",
      street2: null,
      city: "Kyiv (Kiev)",
      state: null,
      country: "Ukraine",
      postalcode: "03134",
    },
    address: "Korolova akademika prosp. 7/60, Kyiv (Kiev) 03134 Ukraine",
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "9908",
        name: "American",
      },
    ],
    dietary_restrictions: [],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "9744677",
    name: "Restaurant Apelsin",
    latitude: "50.46008",
    longitude: "30.362804",
    num_reviews: "6",
    timezone: "Europe/Kiev",
    location_string: "Kyiv (Kiev)",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/1a/19/b0/e4/100-900.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/1a/19/b0/e4/100-900.jpg",
          height: "50",
        },
        original: {
          width: "850",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/1a/19/b0/e4/100-900.jpg",
          height: "595",
        },
        large: {
          width: "850",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/1a/19/b0/e4/100-900.jpg",
          height: "595",
        },
        medium: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/1a/19/b0/e4/100-900.jpg",
          height: "385",
        },
      },
      is_blessed: true,
      uploaded_date: "2019-11-22T06:22:30-0500",
      caption:
        'Банкетный зал в Рестобаре "Апельсин" вмещает 100 человек наяву красивее чем на фото. Цена 900 грн с человека, столы ломятся от вкусной еды. Рекомендую',
      id: "437891300",
      helpful_votes: "0",
      published_date: "2019-11-22T06:22:30-0500",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/9744677",
    awards: [],
    doubleclick_zone: "eu.ukraine.kiev",
    preferred_map_engine: "default",
    raw_ranking: "3.001955032348633",
    ranking_geo: "Kyiv (Kiev)",
    ranking_geo_id: "294474",
    ranking_position: "2162",
    ranking_denominator: "2419",
    ranking_category: "restaurant",
    ranking: "#1,940 of 2,754 Restaurants in Kyiv (Kiev)",
    distance: "1.8045046034144854",
    distance_string: "1.8 mi",
    bearing: "northeast",
    rating: "3.0",
    is_closed: false,
    is_long_closed: false,
    price_level: "$$ - $$$",
    description: "",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g294474-d9744677-Reviews-Restaurant_Apelsin-Kyiv_Kiev.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g294474-d9744677-Restaurant_Apelsin-Kyiv_Kiev.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Kyiv (Kiev)",
        abbrv: null,
        location_id: "294474",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Ukraine",
        abbrv: null,
        location_id: "294473",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [],
    parent_display_name: "Kyiv (Kiev)",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+380 44 423 3492",
    website: "http://vk.com/apelsin.restobar",
    address_obj: {
      street1: "Vasylya Stusa St, 22/1",
      street2: null,
      city: "Kyiv (Kiev)",
      state: null,
      country: "Ukraine",
      postalcode: "03142",
    },
    address: "Vasylya Stusa St, 22/1, Kyiv (Kiev) 03142 Ukraine",
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "5473",
        name: "Japanese",
      },
      {
        key: "10649",
        name: "Mediterranean",
      },
      {
        key: "10742",
        name: "Eastern European",
      },
      {
        key: "10770",
        name: "Ukrainian",
      },
    ],
    dietary_restrictions: [],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "10258483",
    name: "Busan",
    latitude: "50.42338",
    longitude: "30.38266",
    num_reviews: "3",
    timezone: "Europe/Kiev",
    location_string: "Kyiv (Kiev)",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/11/18/e3/e7/photo0jpg.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/11/18/e3/e7/photo0jpg.jpg",
          height: "50",
        },
        original: {
          width: "1536",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/11/18/e3/e7/photo0jpg.jpg",
          height: "2048",
        },
        large: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-p/11/18/e3/e7/photo0jpg.jpg",
          height: "733",
        },
        medium: {
          width: "338",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/11/18/e3/e7/photo0jpg.jpg",
          height: "450",
        },
      },
      is_blessed: true,
      uploaded_date: "2017-10-27T12:52:23-0400",
      caption: "",
      id: "286843879",
      helpful_votes: "0",
      published_date: "2017-10-27T12:52:23-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/10258483",
    awards: [],
    doubleclick_zone: "eu.ukraine.kiev",
    preferred_map_engine: "default",
    raw_ranking: "3.0128283500671387",
    ranking_geo: "Kyiv (Kiev)",
    ranking_geo_id: "294474",
    ranking_position: "2103",
    ranking_denominator: "2419",
    ranking_category: "restaurant",
    ranking: "#1,886 of 2,754 Restaurants in Kyiv (Kiev)",
    distance: "1.8942020367013632",
    distance_string: "1.9 mi",
    bearing: "southeast",
    rating: "3.5",
    is_closed: false,
    is_long_closed: false,
    price_level: "",
    description: "",
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g294474-d10258483-Reviews-Busan-Kyiv_Kiev.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g294474-d10258483-Busan-Kyiv_Kiev.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Kyiv (Kiev)",
        abbrv: null,
        location_id: "294474",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Ukraine",
        abbrv: null,
        location_id: "294473",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [],
    parent_display_name: "Kyiv (Kiev)",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+380 44 227 3490",
    website: "http://busan.com.ua",
    address_obj: {
      street1: "Koltsova bulv. 14zh",
      street2: null,
      city: "Kyiv (Kiev)",
      state: null,
      country: "Ukraine",
      postalcode: "03194",
    },
    address: "Koltsova bulv. 14zh, Kyiv (Kiev) 03194 Ukraine",
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10659",
        name: "Asian",
      },
      {
        key: "10661",
        name: "Korean",
      },
    ],
    dietary_restrictions: [],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
  {
    location_id: "12253277",
    name: "Sezam Restaurant",
    latitude: "50.457607",
    longitude: "30.380316",
    num_reviews: "38",
    timezone: "Europe/Kiev",
    location_string: "Kyiv (Kiev)",
    photo: {
      images: {
        small: {
          width: "150",
          url: "https://media-cdn.tripadvisor.com/media/photo-l/13/46/4c/a9/caption.jpg",
          height: "150",
        },
        thumbnail: {
          width: "50",
          url: "https://media-cdn.tripadvisor.com/media/photo-t/13/46/4c/a9/caption.jpg",
          height: "50",
        },
        original: {
          width: "960",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/13/46/4c/a9/caption.jpg",
          height: "640",
        },
        large: {
          width: "960",
          url: "https://media-cdn.tripadvisor.com/media/photo-o/13/46/4c/a9/caption.jpg",
          height: "640",
        },
        medium: {
          width: "550",
          url: "https://media-cdn.tripadvisor.com/media/photo-s/13/46/4c/a9/caption.jpg",
          height: "367",
        },
      },
      is_blessed: true,
      uploaded_date: "2018-06-13T12:45:08-0400",
      caption: 'Зал "Сокровищница"',
      id: "323374249",
      helpful_votes: "2",
      published_date: "2018-06-13T12:45:08-0400",
      user: {
        user_id: null,
        member_id: "0",
        type: "user",
      },
    },
    api_detail_url:
      "https://api.tripadvisor.com/api/internal/1.14/location/12253277",
    awards: [
      {
        award_type: "CERTIFICATE_OF_EXCELLENCE",
        year: "2019",
        images: {
          small:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
          large:
            "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg",
        },
        categories: [],
        display_name: "Certificate of Excellence 2019",
      },
    ],
    doubleclick_zone: "eu.ukraine.kiev",
    preferred_map_engine: "default",
    raw_ranking: "3.3549458980560303",
    ranking_geo: "Kyiv (Kiev)",
    ranking_geo_id: "294474",
    ranking_position: "373",
    ranking_denominator: "2419",
    ranking_category: "restaurant",
    ranking: "#340 of 2,754 Restaurants in Kyiv (Kiev)",
    distance: "2.129475741896898",
    distance_string: "2.1 mi",
    bearing: "northeast",
    rating: "4.5",
    is_closed: false,
    open_now_text: "Open Now",
    is_long_closed: false,
    price_level: "$$ - $$$",
    price: "$2 - $20",
    description:
      'What is eastern hospitality and a generous feast you will understand by visiting the restaurant "Sesame". On April 24, 2008, its doors opened on Victory Avenue, 112 for all comers! Figures of the magical genies meet the guests at the central entrance. Drapery from Syrian fabrics, handmade stained-glass windows, painting on walls and murmuring fountain - every element of the interior tells about the richness of the eastern world. The restaurant has several luxurious halls: "Treasury" and "Aladdin\'s Cave", VIP halls. "Treasury" (or the red hall) meets guests filled with various treasures. There are many mirrors in the room, on one - peacock settled comfortably. The hall is designed for 30 seats. "Cave of Aladdin" (blue hall) attracts waterfalls. Hand painting of walls and ceiling is complemented by chandeliers made of beads. The hall can accommodate up to 50 people. In the evenings, from Tuesday to Saturday from 20.00 for our guests are charming dancers who perform belly dancing.',
    web_url:
      "https://www.tripadvisor.com/Restaurant_Review-g294474-d12253277-Reviews-Sezam_Restaurant-Kyiv_Kiev.html",
    write_review:
      "https://www.tripadvisor.com/UserReview-g294474-d12253277-Sezam_Restaurant-Kyiv_Kiev.html",
    ancestors: [
      {
        subcategory: [
          {
            key: "city",
            name: "City",
          },
        ],
        name: "Kyiv (Kiev)",
        abbrv: null,
        location_id: "294474",
      },
      {
        subcategory: [
          {
            key: "country",
            name: "Country",
          },
        ],
        name: "Ukraine",
        abbrv: null,
        location_id: "294473",
      },
    ],
    category: {
      key: "restaurant",
      name: "Restaurant",
    },
    subcategory: [
      {
        key: "sit_down",
        name: "Sit down",
      },
    ],
    parent_display_name: "Kyiv (Kiev)",
    is_jfy_enabled: false,
    nearest_metro_station: [],
    phone: "+380 97 000 0450",
    website: "http://sesam.kiev.ua/",
    email: "pecherakiev@meta.ua",
    address_obj: {
      street1: "Pobedy Ave., 112",
      street2: null,
      city: "Kyiv (Kiev)",
      state: null,
      country: "Ukraine",
      postalcode: "03118",
    },
    address: "Pobedy Ave., 112, Kyiv (Kiev) 03118 Ukraine",
    hours: {
      week_ranges: [
        [
          {
            open_time: 0,
            close_time: 1439,
          },
        ],
        [
          {
            open_time: 0,
            close_time: 1439,
          },
        ],
        [
          {
            open_time: 0,
            close_time: 1439,
          },
        ],
        [
          {
            open_time: 0,
            close_time: 1439,
          },
        ],
        [
          {
            open_time: 0,
            close_time: 1439,
          },
        ],
        [
          {
            open_time: 0,
            close_time: 1439,
          },
        ],
        [
          {
            open_time: 0,
            close_time: 1439,
          },
        ],
      ],
      timezone: "Europe/Kiev",
    },
    is_candidate_for_contact_info_suppression: false,
    cuisine: [
      {
        key: "10687",
        name: "Middle Eastern",
      },
      {
        key: "10770",
        name: "Ukrainian",
      },
      {
        key: "10626",
        name: "Lebanese",
      },
      {
        key: "10751",
        name: "Halal",
      },
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    dietary_restrictions: [
      {
        key: "10751",
        name: "Halal",
      },
      {
        key: "10665",
        name: "Vegetarian Friendly",
      },
    ],
    establishment_types: [
      {
        key: "10591",
        name: "Restaurants",
      },
    ],
  },
];

export default function RestorantItem(props) {
  const default_photo =
    "https://titan-autoparts.com/wp-content/uploads/2019/09/no.png";
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      {props.restorantData.map((el, i) => (
        <View key={i} style={styles.container}>
          <RestorantImages
            image={
              el.photo === undefined
                ? default_photo
                : el.photo.images.original.url
            }
          />
          <RestorantInfo
            name={el.name}
            rating={el.rating}
            location={el.location_string}
            price={el.price}
          />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RestorantImages = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={styles.image}
    />
    <TouchableOpacity style={styles.TouchableOpacityStyles}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestorantInfo = (props) => (
  <View style={styles.restorantInfo}>
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>{props.location}</Text>
      {props.price === undefined || props.price === "" ? (
        <Text></Text>
      ) : (
        <Text style={{ fontSize: 13, color: "gray" }}>
          average price: {props.price}
        </Text>
      )}
    </View>
    <View style={styles.restorantRating}>
      <Text>{props.rating}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "#FFFF",
  },
  image: {
    width: "100%",
    height: 180,
  },
  TouchableOpacityStyles: {
    position: "absolute",
    right: 20,
    top: 20,
  },
  restorantInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  restorantRating: {
    backgroundColor: "#eee",
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
});
