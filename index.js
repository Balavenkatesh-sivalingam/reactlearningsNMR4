import React from "react";

import ReactDom from "react-dom/client";

// Header component

const Header = () => {
  return (
    <div className="Header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/68218/optimized_product_thumb_stage.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="img-card"
        alt="img-card"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

const resList = [
  {
    "info": {
      "id": "75041",
      "name": "A2B - Adyar Ananda Bhavan",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/15/03dc47bd-d0c0-436b-856b-59ed1deb0b7d_75041.jpg",
      "locality": "Annamalai Nagar",
      "areaName": "Woraiyur",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "South Indian",
        "North Indian",
        "Sweets",
        "Chinese"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "22",
      "avgRatingString": "4.5",
      "totalRatingsString": "29K+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 8.3,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "8.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-06-23 22:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "ABOVE ₹600",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-9b6582fc-16b4-42e9-b41d-0889a809d4cb"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/trichy/a2b-adyar-ananda-bhavan-annamalai-nagar-woraiyur-rest75041",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "256828",
      "name": "Pizza Hut",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/840868b8-618d-4889-a2de-9483f7e24d46_256828.JPG",
      "locality": "Karur Byepass Road",
      "areaName": "Thillai Nagar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 4.2,
      "parentId": "721",
      "avgRatingString": "4.2",
      "totalRatingsString": "7.8K+",
      "sla": {
        "deliveryTime": 37,
        "lastMileTravel": 8.1,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "8.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-06-24 01:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Pizza.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-9b6582fc-16b4-42e9-b41d-0889a809d4cb"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/trichy/pizza-hut-karur-byepass-road-thillai-nagar-rest256828",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "75278",
      "name": "KFC",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/3361f21d-8d39-4716-a0d7-dd0f56841eb9_75278.JPG",
      "locality": "Bharathiyar Salai",
      "areaName": "Cantonment",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Fast Food",
        "Rolls & Wraps"
      ],
      "avgRating": 4.4,
      "parentId": "547",
      "avgRatingString": "4.4",
      "totalRatingsString": "17K+",
      "sla": {
        "deliveryTime": 22,
        "lastMileTravel": 4.7,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "4.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-06-24 02:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "65% OFF",
        "subHeader": "UPTO ₹125",
        "headerTypeV2": 12
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-9b6582fc-16b4-42e9-b41d-0889a809d4cb"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/trichy/kfc-bharathiyar-salai-cantonment-rest75278",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "806673",
      "name": "Burger King",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/be9f7a84-cfdb-4fdc-9dbb-c5e348de8afa_806673.jpg",
      "locality": "Karur bye pass road",
      "areaName": "Tiruchirappalli",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRating": 4.4,
      "parentId": "166",
      "avgRatingString": "4.4",
      "totalRatingsString": "4.8K+",
      "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 8.1,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "8.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-06-24 02:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-9b6582fc-16b4-42e9-b41d-0889a809d4cb"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/trichy/burger-king-karur-bye-pass-road-tiruchirappalli-rest806673",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "361114",
      "name": "The Good Bowl",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/367538da-8476-41fb-b9fd-3f99a2b60f1b_361114.jpg",
      "locality": "Salai Road",
      "areaName": "Thillai Nagar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Biryani",
        "North Indian",
        "Pastas",
        "Punjabi",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.4,
      "parentId": "7918",
      "avgRatingString": "4.4",
      "totalRatingsString": "1.8K+",
      "sla": {
        "deliveryTime": 41,
        "lastMileTravel": 8.3,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "8.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-06-23 23:59:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹165 OFF",
        "subHeader": "ABOVE ₹499",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 12
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-9b6582fc-16b4-42e9-b41d-0889a809d4cb"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/trichy/the-good-bowl-salai-road-thillai-nagar-rest361114",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "72970",
      "name": "Banana Leaf AC Restaurant",
      "cloudinaryImageId": "jomkf7zxvwwhbjh2shio",
      "locality": "Everest Park Residency",
      "areaName": "TVS Tolgate",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Biryani",
        "South Indian",
        "Chinese",
        "North Indian"
      ],
      "avgRating": 4.5,
      "parentId": "6474",
      "avgRatingString": "4.5",
      "totalRatingsString": "16K+",
      "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 2.8,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "2.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-06-23 23:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-9b6582fc-16b4-42e9-b41d-0889a809d4cb"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/trichy/banana-leaf-ac-restaurant-everest-park-residency-tvs-tolgate-rest72970",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "75976",
      "name": "Sri Gowri Krishna",
      "cloudinaryImageId": "gvkc9qwdf5xmtam86xvm",
      "locality": "7th Street",
      "areaName": "Thillai Nagar",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Desserts",
        "Chinese",
        "North Indian",
        "South Indian",
        "Ice Cream",
        "Biryani"
      ],
      "avgRating": 4.5,
      "parentId": "17988",
      "avgRatingString": "4.5",
      "totalRatingsString": "44K+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 7.8,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "7.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-06-23 22:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Ratnesh_Badges/Rx_Awards_2025/_Milestone%20Restaurants.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Ratnesh_Badges/Rx_Awards_2025/_Milestone%20Restaurants.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹49"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-9b6582fc-16b4-42e9-b41d-0889a809d4cb"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/trichy/sri-gowri-krishna-7th-street-thillai-nagar-rest75976",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "134791",
      "name": "Raj Hot Chicken",
      "cloudinaryImageId": "sesedcn1vxetirwrnps4",
      "locality": "Royal road",
      "areaName": "Cantonment",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Biryani",
        "Chinese"
      ],
      "avgRating": 4.5,
      "parentId": "18168",
      "avgRatingString": "4.5",
      "totalRatingsString": "18K+",
      "sla": {
        "deliveryTime": 22,
        "lastMileTravel": 5.6,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "5.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-06-23 23:45:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            "description": "OnlyOnSwiggy"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "OnlyOnSwiggy",
                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "65% OFF",
        "subHeader": "UPTO ₹130",
        "headerTypeV2": 12
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-9b6582fc-16b4-42e9-b41d-0889a809d4cb"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/trichy/raj-hot-chicken-royal-road-cantonment-rest134791",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "297853",
      "name": "Suvai Briyani Family Restaurant",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/4/4eb42448-6627-4a40-9cee-82be9aba6128_297853.jpg",
      "locality": "Ubaidulrahman",
      "areaName": "Karumandapam",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Chinese",
        "North Indian",
        "Biryani"
      ],
      "avgRating": 4.5,
      "parentId": "17966",
      "avgRatingString": "4.5",
      "totalRatingsString": "27K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 7.5,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "7.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-06-23 23:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "65% OFF",
        "subHeader": "UPTO ₹130",
        "headerTypeV2": 12
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-9b6582fc-16b4-42e9-b41d-0889a809d4cb"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/trichy/suvai-briyani-family-restaurant-ubaidulrahman-karumandapam-rest297853",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "657095",
      "name": "Suvai Briyani Family Restaurant Elite",
      "cloudinaryImageId": "b33020eb6608b35bc925b8cf8614b418",
      "locality": "Palayambazar Road",
      "areaName": "Thillai Nagar",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Chinese",
        "Indian"
      ],
      "avgRating": 4.5,
      "parentId": "394887",
      "avgRatingString": "4.5",
      "totalRatingsString": "14K+",
      "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 7,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "7.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-06-23 23:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-9b6582fc-16b4-42e9-b41d-0889a809d4cb"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/trichy/suvai-briyani-family-restaurant-elite-palayambazar-road-thillai-nagar-rest657095",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "89807",
      "name": "Suvai Biriyani",
      "cloudinaryImageId": "rbsg8tkjrufs3ngvk2zz",
      "locality": "Wireless Road",
      "areaName": "Wireless road, Airport",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Chinese",
        "North Indian",
        "Biryani"
      ],
      "avgRating": 4.5,
      "parentId": "18304",
      "avgRatingString": "4.5",
      "totalRatingsString": "39K+",
      "sla": {
        "deliveryTime": 17,
        "lastMileTravel": 2.8,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "2.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-06-23 23:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-9b6582fc-16b4-42e9-b41d-0889a809d4cb"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/trichy/suvai-biriyani-wireless-road-wireless-road-airport-rest89807",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "493863",
      "name": "Baskin Robbins - Ice Cream Desserts",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/a4c64200-b68d-4b78-acd2-093498f11147_493863.JPG",
      "locality": "Sastri Road",
      "areaName": "Thillai Nagar",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Desserts",
        "Ice Cream"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "5588",
      "avgRatingString": "4.6",
      "totalRatingsString": "972",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 8,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "8.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-06-23 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹65 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 12
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-9b6582fc-16b4-42e9-b41d-0889a809d4cb"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/trichy/baskin-robbins-ice-cream-desserts-sastri-road-thillai-nagar-rest493863",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "756333",
      "name": "Madras Midnight Biriyani",
      "cloudinaryImageId": "71f95af64cc899103d040aa28bc1d44c",
      "locality": "Salai Road",
      "areaName": "Thillai Nagar",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Biryani",
        "Chinese",
        "Barbecue",
        "North Indian"
      ],
      "avgRating": 4.3,
      "parentId": "447343",
      "avgRatingString": "4.3",
      "totalRatingsString": "4.1K+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 7.8,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "7.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-06-24 00:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹165 OFF",
        "subHeader": "ABOVE ₹399",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 12
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-9b6582fc-16b4-42e9-b41d-0889a809d4cb"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/trichy/madras-midnight-biriyani-salai-road-thillai-nagar-rest756333",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "79045",
      "name": "Roshan Arabian Restaurant",
      "cloudinaryImageId": "f8wgbhd18vhbtoyts7l3",
      "locality": "Tanjore Main Road",
      "areaName": "Ariyamangalam Area",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Chinese",
        "South Indian",
        "Burgers",
        "Ice Cream",
        "Pizzas",
        "Biryani"
      ],
      "avgRating": 4.4,
      "parentId": "7490",
      "avgRatingString": "4.4",
      "totalRatingsString": "8.7K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 6.1,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "6.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-06-23 23:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-9b6582fc-16b4-42e9-b41d-0889a809d4cb"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/trichy/roshan-arabian-restaurant-tanjore-main-road-ariyamangalam-area-rest79045",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "92648",
      "name": "Avana Chappathi",
      "cloudinaryImageId": "tjc8uo93bua36eeaxjyd",
      "locality": "Alwarthopu",
      "areaName": "Cantonment",
      "costForTwo": "₹100 for two",
      "cuisines": [
        "North Indian"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "7486",
      "avgRatingString": "4.6",
      "totalRatingsString": "11K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 5.8,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "5.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-06-24 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "65% OFF",
        "subHeader": "UPTO ₹130",
        "headerTypeV2": 12
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-9b6582fc-16b4-42e9-b41d-0889a809d4cb"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/trichy/avana-chappathi-alwarthopu-cantonment-rest92648",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "166601",
      "name": "Grill Chicken Arabian Restaurant",
      "cloudinaryImageId": "a30e50075ob5ske3njrg",
      "locality": "1St Cross",
      "areaName": "Thillai Nagar",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Chinese",
        "North Indian",
        "Burgers",
        "Ice Cream",
        "Pizzas",
        "Biryani"
      ],
      "avgRating": 4.4,
      "parentId": "17975",
      "avgRatingString": "4.4",
      "totalRatingsString": "7.8K+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 8,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "8.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-06-23 22:30:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "aggregatedDiscountInfoV2": {},
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-9b6582fc-16b4-42e9-b41d-0889a809d4cb"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/trichy/grill-chicken-arabian-restaurant-1st-cross-thillai-nagar-rest166601",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "136135",
      "name": "Rottu Kadai",
      "cloudinaryImageId": "aaooujztmyx6yqxq2uxk",
      "locality": "Benwells Road",
      "areaName": "Reynolds road",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Chinese",
        "North Indian",
        "South Indian",
        "Biryani"
      ],
      "avgRating": 4.3,
      "parentId": "18166",
      "avgRatingString": "4.3",
      "totalRatingsString": "13K+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-06-23 23:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-9b6582fc-16b4-42e9-b41d-0889a809d4cb"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/trichy/rottu-kadai-benwells-road-reynolds-road-rest136135",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "405742",
      "name": "KMS Hakkim Kalyana Biriyani Restaurant",
      "cloudinaryImageId": "ovmclgi9ebnvi093hakf",
      "locality": "Higheays Colony",
      "areaName": "G-Corner",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Biryani",
        "South Indian",
        "North Indian",
        "Chinese",
        "Tandoor",
        "Kebabs",
        "Barbecue",
        "Beverages"
      ],
      "avgRating": 4.4,
      "parentId": "387543",
      "avgRatingString": "4.4",
      "totalRatingsString": "3.4K+",
      "sla": {
        "deliveryTime": 22,
        "lastMileTravel": 1.7,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-06-23 22:45:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png",
            "description": "bolt!"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {},
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "bolt!",
                  "imageId": "bolt/big%20rx%20listing%2015%20mins%20.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-9b6582fc-16b4-42e9-b41d-0889a809d4cb"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/trichy/kms-hakkim-kalyana-biriyani-restaurant-higheays-colony-g-corner-rest405742",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "361112",
      "name": "Sweet Truth - Cake and Desserts",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/19/6ae0c5d0-98bb-4837-98b3-ddc1205aa18b_361112.jpg",
      "locality": "Salai Road",
      "areaName": "Thillai Nagar",
      "costForTwo": "₹450 for two",
      "cuisines": [
        "Desserts",
        "Ice Cream",
        "Bakery",
        "Beverages"
      ],
      "avgRating": 4.5,
      "parentId": "4444",
      "avgRatingString": "4.5",
      "totalRatingsString": "1.8K+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 8.3,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "8.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-06-23 23:59:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-9b6582fc-16b4-42e9-b41d-0889a809d4cb"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/trichy/sweet-truth-cake-and-desserts-salai-road-thillai-nagar-rest361112",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "654359",
      "name": "CakeZone Patisserie",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/0edb361d-90eb-4b07-9fa0-5785e23f4a4d_654359.jpg",
      "locality": "Anandha bhavan complex",
      "areaName": "Puthur High Road",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Bakery",
        "Desserts",
        "Beverages",
        "Ice Cream",
        "Juices",
        "Sweets",
        "Bengali"
      ],
      "avgRating": 4.4,
      "parentId": "7003",
      "avgRatingString": "4.4",
      "totalRatingsString": "1.2K+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 6.9,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "6.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-06-24 01:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "65% OFF",
        "subHeader": "UPTO ₹125",
        "headerTypeV2": 12
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-9b6582fc-16b4-42e9-b41d-0889a809d4cb"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/trichy/cakezone-patisserie-anandha-bhavan-complex-puthur-high-road-rest654359",
      "type": "WEBLINK"
    }
  }
]

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="rescontainer">
        {
          resList.map((restaurant) =>
            (<RestaurantCard key = {restaurant.info.id} resData ={restaurant} />)
          )
        }
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
