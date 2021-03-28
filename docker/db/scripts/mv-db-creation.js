db = db.getSiblingDB('mv');
var mvCollections = [ "users", "manifestation", "post", "deny_list" ];
mvCollections.forEach( collName => db.createCollection( collName ) );
db.users.insert(
    {
        "superadmin" : true,
        "deleted" : false,
        "name" : "admin",
        "email" : "admin@admin.com",
        "password" : "$2a$08$jmShGQAXpa45zLaWfuDpWOt/pUVBQ3enEhPifqaOU.m/CbDgd4yV.",
        "tokens" : [],
        "manifestation_id" : null,
    }
);

db.manifestation.insert(
    {
        "active" : false,
        "metadata" : {
            "title" : "",
            "keywords" : "",
            "description" : ""
        },
        "styles" : {
            "colors" : {
                "background" : "",
                "accent" : ""
            },
            "text" : {
                "title" : {
                    "font" : "",
                    "color" : ""
                },
                "subtitle" : {
                    "font" : "",
                    "color" : ""
                },
                "body" : {
                    "font" : "",
                    "color" : ""
                }
            },
            "thumbnails" : {
                "colors" : {
                    "hover" : "",
                    "border" : ""
                }
            },
            "cards" : {
                "darkMode" : false
            }
        },
        "images" : {
            "og" : {
                "twitter" : {
                    "src" : ""
                },
                "facebook" : {
                    "src" : ""
                }
            },
            "favicon" : {
                "src" : ""
            },
            "header" : {
                "src" : ""
            }
        },
        "title" : "El supero tituloro",
        "subtitle" : "",
        "description" : "",
        "footer" : "",
        "people" : 2607,
        "deleted" : false,
        "name" : "Marcha Coco Bongo",
        "uri" : "https://google.com",
        "sponsors" : [],
        "hashtags" : [
            {
                "name" : "myelixirstatus",
                "source" : "twitter"
            },
            {
                "name" : "webeamtogether",
                "source" : "twitter"
            },
            {
                "name" : "feminismo",
                "source" : "twitter"
            },
            {
                "name" : "feminismo",
                "source" : "instagram"
            }
        ],
        "crawlStatuses" : [
        ],
        "config" : {
            "twitter" : {
                "active" : true,
                "scheduleSchema" : "*/3 * * * *",
                "maxTweets" : 1400,
                "maxTweetsPerQuery" : 200,
                "api" : {
                    "consumerKey" : "fU2pETUJO7lVY1oeMqjYZwwMc",
                    "consumerSecret" : "ugXD4tJt03M0PTtmUDVCqEqJWEJcSow9yZTsYY79ThwRGkv6yC",
                    "accessTokenKey" : "507654134-jN4D7on0Nmbr4gLeCLbBUYe82lCFNx5DRIrqpjKh",
                    "accessTokenSecret" : "7wRADvxYTq1uguPrD4smQVXOJie1Zfr9RWuR8gzLe3Bak"
                }
            },
            "instagram" : {
                "active" : true,
                "scheduleSchema" : "*/4 * * * *",
                "maxPosts" : 1400,
                "impersonate" : {
                    "username" : "gimenezhermeto",
                    "password" : "YcZYmjN6"
                }
            },
            "mediaCleaner" : {
                "active" : false,
                "scheduleSchema" : "*/1 * * * *"
            }
        },
        "startDate" : ISODate("2021-02-25T18:47:11.733Z"),
        "endDate" : ISODate("2021-05-25T18:47:11.733Z"),
    }
);
