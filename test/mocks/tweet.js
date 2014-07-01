/**
 * Created by Mikhail Zyatin on 01.07.14.
 */


var NumberLong = function (str) {
    "use strict";
    return parseInt(str, 10);
};

var ISODate = function (str) {
    "use strict";
    return new Date(str);
};

var ObjectId = function (str) {
    "use strict";
    return str;
};


module.exports = {
    "_id" : ObjectId("53a85491531fbb99368054a1"),
    "favorited" : false,
    "contributors" : null,
    "truncated" : false,
    "text" : "А с кем работаете Вы? #indposhiv #bespoke # suits #tailors #menswear @ Indposhiv Lab http://t.co/ao4fy6uhwB",
    "possibly_sensitive" : false,
    "user" : {
        "follow_request_sent" : false,
        "profile_use_background_image" : true,
        "default_profile_image" : false,
        "id" : 119102990,
        "profile_background_image_url_https" : "https://pbs.twimg.com/profile_background_images/444244318/16840333315.png",
        "verified" : false,
        "profile_text_color" : "333333",
        "profile_image_url_https" : "https://pbs.twimg.com/profile_images/1612831185/5690605715_155d1bb213_o_normal.jpg",
        "profile_sidebar_fill_color" : "B2D9D6",
        "entities" : {
            "url" : {
                "urls" : [
                    {
                        "url" : "http://t.co/BwcEC7ddPD",
                        "indices" : [
                            0,
                            22
                        ],
                        "expanded_url" : "http://vkontakte.ru/tanya_podakina",
                        "display_url" : "vkontakte.ru/tanya_podakina"
                    }
                ]
            },
            "description" : {
                "urls" : [ ]
            }
        },
        "followers_count" : 193,
        "profile_sidebar_border_color" : "DBE9ED",
        "id_str" : "119102990",
        "profile_background_color" : "FFFFFF",
        "listed_count" : 8,
        "is_translation_enabled" : false,
        "utc_offset" : 10800,
        "statuses_count" : 17325,
        "description" : "",
        "friends_count" : 102,
        "location" : "Cherkassy,Ukraine",
        "profile_link_color" : "B06570",
        "profile_image_url" : "http://pbs.twimg.com/profile_images/1612831185/5690605715_155d1bb213_o_normal.jpg",
        "following" : false,
        "geo_enabled" : true,
        "profile_background_image_url" : "http://pbs.twimg.com/profile_background_images/444244318/16840333315.png",
        "screen_name" : "none_too",
        "lang" : "en",
        "profile_background_tile" : true,
        "favourites_count" : 1014,
        "name" : "Tania Podakina",
        "notifications" : false,
        "url" : "http://t.co/BwcEC7ddPD",
        "created_at" : "Tue Mar 02 17:44:22 +0000 2010",
        "contributors_enabled" : false,
        "time_zone" : "Kyiv",
        "protected" : false,
        "default_profile" : false,
        "is_translator" : false
    },
    "geo" : {
        "type" : "Point",
        "coordinates" : [
            50.44583628,
            30.49934548
        ]
    },
    "id" : NumberLong("481101713646960641"),
    "favorite_count" : 0,
    "lang" : "ru",
    "entities" : {
        "symbols" : [ ],
        "user_mentions" : [ ],
        "hashtags" : [
            {
                "indices" : [
                    22,
                    32
                ],
                "text" : "indposhiv"
            },
            {
                "indices" : [
                    33,
                    41
                ],
                "text" : "bespoke"
            },
            {
                "indices" : [
                    50,
                    58
                ],
                "text" : "tailors"
            },
            {
                "indices" : [
                    59,
                    68
                ],
                "text" : "menswear"
            }
        ],
        "urls" : [
            {
                "url" : "http://t.co/ao4fy6uhwB",
                "indices" : [
                    85,
                    107
                ],
                "expanded_url" : "http://instagram.com/p/pl5mA1RkuX/",
                "display_url" : "instagram.com/p/pl5mA1RkuX/"
            }
        ]
    },
    "created_at" : ISODate("2014-06-23T15:49:21Z"),
    "retweeted" : false,
    "metadata" : {
        "iso_language_code" : "ru",
        "result_type" : "recent"
    },
    "coordinates" : {
        "type" : "Point",
        "coordinates" : [
            30.49934548,
            50.44583628
        ]
    },
    "source" : "<a href=\"http://instagram.com\" rel=\"nofollow\">Instagram</a>",
    "place" : {
        "full_name" : "Ukraine",
        "url" : "https://api.twitter.com/1.1/geo/id/084d0d0155787e9d.json",
        "country" : "Ukraine",
        "place_type" : "country",
        "bounding_box" : {
            "type" : "Polygon",
            "coordinates" : [
                [
                    [
                        22.1357201,
                        44.38643
                    ],
                    [
                        40.227172,
                        44.38643
                    ],
                    [
                        40.227172,
                        52.379475
                    ],
                    [
                        22.1357201,
                        52.379475
                    ]
                ]
            ]
        },
        "contained_within" : [ ],
        "country_code" : "UA",
        "attributes" : {

        },
        "id" : "084d0d0155787e9d",
        "name" : "Ukraine"
    },
    "retweet_count" : 0,
    "id_str" : "481101713646960641"
};