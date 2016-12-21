'use strict';
var Alexa = require('alexa-sdk');
var APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

var languageStrings = {
    "en-US": {
        "translation": {
            "FACTS": [
                'The tapir is related to the horse and the rhinoserous.',
                'The tapir is a fast and agile runner.',
                'The tapir is an excellent swimmer.',
                'The tapir has excellent vision and hearing.',
                'The tapir has fourteen toes, three on its hind legs and four on the front.',
                'The snout of the tapir is converd with sensory hairs.',
                'The tapir was not discovered until the early 19th century.',
                'The tapir is very shy.',
                'There are five kinds of tapirs, Mountain, Brazilian, Baird, Malayan and Kabomani.',
                'The Kabomani species was not discovered until 2013',
                'A tapir weight between 150 and 400 kg.',
                'The Mountain tapir has longer hair in order to keep warm at high altitude.',
                'The Malayan tapir is the largest and the Mountain tapir is the smallest.',
                'The camoflage style of the Malayan is called disruptive camoflage.',
                'All tapirs prefer a tropical climate.',
                'Tapirs are normally active at dawn and dusk.',
                'Tapir babies have white stripes and spots.',
                'The tapir eats almost all kinds of plants.',
                'The tapir uses its snout to smell and grab food.',
                'Tapirs mate both on land and in water.',
                'The top speed of a tapir is 48 km/h.',
                'A tapir lives 25 to 30 years.',
                'The Malayan Tapir once roamed the tropical forests across South East Asia.',
                'he Mountain Tapir is the smallest of the four different tapir species.',
                'The Mountain Tapir inhabits more mountainous regions rather than lowland forests.',
                'The Mountain Tapir is found in the high forests in the Andes mountains across Colombia, Ecuador and parts north of Peru.',
                'The Brazilian Tapir, also known as the South American Tapir, is known to be a fantastic swimmer.',
                'The Brazilian Tapir is generally found close to water in the Amazon Rainforest.',
                'The tapir is a herbivore and spends its time browsing for food to eat.',
                'The tapir eats leaves, twigs, branches, buds, shoots, berries, fruits and aquatic plants.',
                'Due to its large size, the tapir has few natural predators in its environment.',
                'The tapir is known to be prey upon by wild cats such as tigers, jaguars and cougars along with large reptiles like crocodiles and even the odd snake.',
                'The human is believed to be the most common predator of the tapir as they have been hunted for food and even domesticated in some areas.',
                'Tapirs have a long, flexible nose similar to the trunk of an elephant but no way near as big.',
                'Despite their stocky build, tapirs are known to be fantastic swimmers and tapirs therefore spend a great deal of their time close to water which the tapirs use to cool down. ',
                'Tapirs are even known to dive into the shallows in order to feed on the lush aquatic plants.',
                'After a gestation period of more than a year, the female tapir gives births to just one tapir baby.',
                'A newborn baby tapir weighs around 10 kg',
                'The baby tapirs also have a stripy coat particularly in comparison to the adult tapirs.',
                'Female tapirs are thought to breed every other year.',
                'The baby tapirs tend to leave their mother when they are between 2 and 3 years old.',
                'The tapir is related to the horse and the rhinoserous.',    'All four species of tapir are considered to be endangered',
                'The tapir is a fast and agile runner.',    'Humans have hunted tapirs for both their meat and their leathery skin.',
                'The tapir is an excellent swimmer.',    'Tapirs are solitary animals with the exception of the mating season and the mother tapir nursing the baby tapir.',
                'The tapir has excellent vision and hearing.',    'Tapirs are known to defend themselves using their powerful jaws and although rare, tapir attacks on humans are known to occur.',
                'The tapir has fourteen toes, three on its hind legs and four on the front.',    'The most damage the tapir will generally do though is give you a nasty bite!',
                'The snout of the tapir is converd with sensory hairs.',    'A group of tapirs is called a "candle."',
                'The tapir was not discovered until the early 19th century.',    'Tapir calves are born with dappled markings; at about six months, they lose the markings and look like a miniature adult tapir.',
                'The tapir is very shy.',    'The dappled markings of a tapir calf are excellent camouflage.',
                'There are four kinds of tapirs, Mountain, Brazilian, Baird, and Malayan.',    'The average lifespan of a tapir is 25 to 30 years.',
                'A tapir weight between 150 and 400 kg.',    'The tapir’s nose is prehensile and is used to grab leaves – and also as a snorkel while swimming.',
                'The Mountain tapir has longer hair in order to keep warm at high altitude.',    'Tapirs have a long gestation period (13 months) and give birth to one calf per gestation.',
                'The Malayan tapir is the largest and the Mountain tapir is the smallest.',    'All tapir populations are in decline – a not-so-cool fact.',
                'In 1998, a female tapir at the Oklahoma City Zoo bit off a zookeeper’s arm at the bicep. The tapir had a two-month-old calf in her enclosure.',
                'Scientists believe that tapirs have not changed very much over tens of millions of years.',
                'A hybrid tapir was reportedly born at the San Francisco Zoo around 1968 – a cross between a Baird’s Tapir and a lowland tapir.',
                'Tapirs starred in the movie, 2001: A Space Odyssey.'
                'The camouflage style of the Malayan is called disruptive camouflage.',
                'All tapirs prefer a tropical climate.',
                'Tapirs are normally active at dawn and dusk.',
                'Tapir babies have white stripes and spots.',
                'The tapir eats almost all kinds of plants.',
                'The tapir uses its snout to smell and grab food.',
                'Tapirs mate both on land and in water.',
                'The top speed of a tapir is 48 km/h.',
                'A tapir lives 25 to 30 years.',
                'The Malayan Tapir once roamed the tropical forests across South East Asia.',
                'he Mountain Tapir is the smallest of the four different tapir species.',
                'The Mountain Tapir inhabits more mountainous regions rather than lowland forests.',
                'The Mountain Tapir is found in the high forests in the Andes mountains across Colombia, Ecuador and parts north of Peru.',
                'The Brazilian Tapir, also known as the South American Tapir, is known to be a fantastic swimmer.',
                'The Brazilian Tapir is generally found close to water in the Amazon Rainforest.',
                'The tapir is a herbivore and spends its time browsing for food to eat.',
                'The tapir eats leaves, twigs, branches, buds, shoots, berries, fruits and aquatic plants.',
                'Due to its large size, the tapir has few natural predators in its environment.',
                'The tapir is known to be prey upon by wild cats such as tigers, jaguars and cougars along with large reptiles like crocodiles and even the odd snake.',
                'The human is believed to be the most common predator of the tapir as they have been hunted for food and even domesticated in some areas.',
                'Tapirs have a long, flexible nose similar to the trunk of an elephant but no way near as big.',
                'Despite their stocky build, tapirs are known to be fantastic swimmers and tapirs therefore spend a great deal of their time close to water which the tapirs use to cool down. ',
                'Tapirs are even known to dive into the shallows in order to feed on the lush aquatic plants.',
                'After a gestation period of more than a year, the female tapir gives births to just one tapir baby.',
                'A newborn baby tapir weighs around 10 kg',
                'The baby tapirs also have a stripy coat particularly in comparison to the adult tapirs.',
                'Female tapirs are thought to breed every other year.',
                'The baby tapirs tend to leave their mother when they are between 2 and 3 years old.',
                'All four species of tapir are considered to be endangered',
                'Humans have hunted tapirs for both their meat and their leathery skin.',
                'Tapirs are solitary animals with the exception of the mating season and the mother tapir nursing the baby tapir.',
                'Tapirs are known to defend themselves using their powerful jaws and although rare, tapir attacks on humans are known to occur.',
                'The most damage the tapir will generally do though is give you a nasty bite!',
                'A group of tapirs is called a "candle."',
                'Tapir calves are born with dappled markings; at about six months, they lose the markings and look like a miniature adult tapir.',
                'The dappled markings of a tapir calf are excellent camouflage.',
                'The average lifespan of a tapir is 25 to 30 years.',
                'The tapir’s nose is prehensile and is used to grab leaves – and also as a snorkel while swimming.',
                'Tapirs have a long gestation period (13 months) and give birth to one calf per gestation.',
                'All tapir populations are in decline – a not-so-cool fact.',
                'In 1998, a female tapir at the Oklahoma City Zoo bit off a zookeeper’s arm at the bicep. The tapir had a two-month-old calf in her enclosure.',
                'Scientists believe that tapirs have not changed very much over tens of millions of years.',
                'A hybrid tapir was reportedly born at the San Francisco Zoo around 1968 – a cross between a Baird’s Tapir and a lowland tapir.',
                'Tapirs starred in the movie, 2001: A Space Odyssey.'
            ],
            "GET_FACT_MESSAGE" : "Here's your fact: ",
            "HELP_MESSAGE" : "You can say tell me a tapir fact, or, you can say exit... What can I help you with?",
            "HELP_REPROMPT" : "What can I help you with?",
            "STOP_MESSAGE" : "Goodbye!"
        }
    }
};

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        var factArr = this.t('FACTS');
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];

        // Create speech output
        var speechOutput = this.t("GET_FACT_MESSAGE") + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t("SKILL_NAME"), randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = this.t("HELP_MESSAGE");
        var reprompt = this.t("HELP_MESSAGE");
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    }
};
