// ==UserScript==
// @match        https://freebitco.in/*
// @gith// ==UserScript==
// @match        https://freebitco.in/*
// @github       http://github.com/GeArS4BrAInS
// @version      1.0
// @description  My local pub accepts btc : : 1KALCqcKgdttda9xJWqwSYeBPtLtYR9C9h
// @author       GeArS4BrAInZ// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
'use strict';
$("body").append (
    '<img id="myNewImage" src="https://2.bp.blogspot.com/_nU_C8t8tNEg/TKx494qMcRI/AAAAAAAAAIU/AsCmCBQHISk/s320/Automaton+(Colour).jpg">'
);
$("#myNewImage").css ( {
    position:   "fixed",
    width:      "256px",
    height:     "256px",
    bottom:      "0",
    right:       "0"
} );
var body = $('body');

var points = {};

if ($('#free_play_form_button').is(':visible'))
    setTimeout(function(){ $('#free_play_form_button').click();},2000);
if ($('.close-reveal-modal').is(':visible'))
    setTimeout(function(){ $('.close-reveal-modal').click(); },2000);

var reward = {};
reward.select = function() {
    reward.points = parseInt($('.user_reward_points').text().replace(',',""));
    reward.bonustime = {};
    if ($("#bonus_container_free_points").length != 0) {
        reward.bonustime.text = $('#bonus_span_free_points').text();
        reward.bonustime.hour = parseInt(reward.bonustime.text.split(":")[0]);
        reward.bonustime.min = parseInt(reward.bonustime.text.split(":")[1]);
        reward.bonustime.sec = parseInt(reward.bonustime.text.split(":")[2]);
        reward.bonustime.current = reward.bonustime.hour * 3600 + reward.bonustime.min * 60 + reward.bonustime.sec;
    } else
        reward.bonustime.current = 0;


    console.log(reward.bonustime.current);
    if (reward.bonustime.current !== 0) {
        console.log(reward.bonustime.current);
    } else {
        if (reward.points < 12) {
            console.log("waiting for points");
        }
        else if (reward.points < 120) {
                console.log("waiting for points 60");
                RedeemRPProduct('free_points_1');
            }
        else if (reward.points < 600) {
                console.log("waiting for points 120");
                RedeemRPProduct('free_points_10');
            }
        else if (reward.points < 1200) {
                console.log("waiting for points 600");
                RedeemRPProduct('free_points_50');
            }
        else {
            RedeemRPProduct('free_points_100');
        }
        if ($('#bonus_span_fp_bonus').length === 0)
            if (reward.points >= 4400)
                RedeemRPProduct('fp_bonus_1000');
    }
};
body.prepend(
    $('<div/>').attr('style',"position:fixed;bottom:0px;left:0;z-index:999;width:350px;background-color:black;color: white; text-align: left;")
        .append(
            $('<div/>').attr('id','autofaucet')
                .append($('<p/>').attr('style','text-decoration:underline;').text("freebitco.in-AF mod by GeArS4BrAInZ"))
                .append($('<p/>').text("Hand em over"))
                .append($('<p/>').text("1KALCqcKgdttda9xJWqwSYeBPtLtYR9C9h"))
                .append($('<p/>').text("(click me maybe)"))
                .append($('<p/>')
                    .append($('<p/>').text("Current Features:"))
                    .append($('<p/>').text("Auto Roll"))
                    .append($('<p/>').text("Auto Select Rewards"))
                    .append($('<p/>').text("(according to Highest rewards/BTC Bonus)"))
                )
        ).click(function(){
        var $temp = $('<input>').val("1KALCqcKgdttda9xJWqwSYeBPtLtYR9C9h");
        body.append($temp);
        $temp.select();
        document.execCommand("copy");
        $temp.remove();
    })
).prepend($('<style/>')
    .text("#autofaucet p { margin: 0; margin-left: 2px;  text-align: left; }")
);
setTimeout(reward.select,1000);
setInterval(reward.select,60000);
})();ub       http://github.com/GeArS4BrAInS
// @version      1.0
// @description  My local pub accepts btc : : 1KALCqcKgdttda9xJWqwSYeBPtLtYR9C9h
// @author       GeArS4BrAInZ// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
'use strict';
$("body").append (
    '<img id="myNewImage" src="https://2.bp.blogspot.com/_nU_C8t8tNEg/TKx494qMcRI/AAAAAAAAAIU/AsCmCBQHISk/s320/Automaton+(Colour).jpg">'
);
$("#myNewImage").css ( {
    position:   "fixed",
    width:      "256px",
    height:     "256px",
    bottom:      "0",
    right:       "0"
} );
var body = $('body');

var points = {};

if ($('#free_play_form_button').is(':visible'))
    setTimeout(function(){ $('#free_play_form_button').click();},2000);
if ($('.close-reveal-modal').is(':visible'))
    setTimeout(function(){ $('.close-reveal-modal').click(); },2000);

var reward = {};
reward.select = function() {
    reward.points = parseInt($('.user_reward_points').text().replace(',',""));
    reward.bonustime = {};
    if ($("#bonus_container_free_points").length != 0) {
        reward.bonustime.text = $('#bonus_span_free_points').text();
        reward.bonustime.hour = parseInt(reward.bonustime.text.split(":")[0]);
        reward.bonustime.min = parseInt(reward.bonustime.text.split(":")[1]);
        reward.bonustime.sec = parseInt(reward.bonustime.text.split(":")[2]);
        reward.bonustime.current = reward.bonustime.hour * 3600 + reward.bonustime.min * 60 + reward.bonustime.sec;
    } else
        reward.bonustime.current = 0;


    console.log(reward.bonustime.current);
    if (reward.bonustime.current !== 0) {
        console.log(reward.bonustime.current);
    } else {
        if (reward.points < 12) {
            console.log("waiting for points");
        }
        else if (reward.points < 120) {
                console.log("waiting for points 60");
                RedeemRPProduct('free_points_1');
            }
        else if (reward.points < 600) {
                console.log("waiting for points 120");
                RedeemRPProduct('free_points_10');
            }
        else if (reward.points < 1200) {
                console.log("waiting for points 600");
                RedeemRPProduct('free_points_50');
            }
        else {
            RedeemRPProduct('free_points_100');
        }
        if ($('#bonus_span_fp_bonus').length === 0)
            if (reward.points >= 4400)
                RedeemRPProduct('fp_bonus_1000');
    }
};
body.prepend(
    $('<div/>').attr('style',"position:fixed;bottom:0px;left:0;z-index:999;width:350px;background-color:black;color: white; text-align: left;")
        .append(
            $('<div/>').attr('id','autofaucet')
                .append($('<p/>').attr('style','text-decoration:underline;').text("freebitco.in-AF mod by GeArS4BrAInZ"))
                .append($('<p/>').text("Hand em over"))
                .append($('<p/>').text("1KALCqcKgdttda9xJWqwSYeBPtLtYR9C9h"))
                .append($('<p/>').text("(click me maybe)"))
                .append($('<p/>')
                    .append($('<p/>').text("Current Features:"))
                    .append($('<p/>').text("Auto Roll"))
                    .append($('<p/>').text("Auto Select Rewards"))
                    .append($('<p/>').text("(according to Highest rewards/BTC Bonus)"))
                )
        ).click(function(){
        var $temp = $('<input>').val("1KALCqcKgdttda9xJWqwSYeBPtLtYR9C9h");
        body.append($temp);
        $temp.select();
        document.execCommand("copy");
        $temp.remove();
    })
).prepend($('<style/>')
    .text("#autofaucet p { margin: 0; margin-left: 2px;  text-align: left; }")
);
setTimeout(reward.select,1000);
setInterval(reward.select,60000);
})();
