/*
I will try to automate this even further, maybe have a bot that runs this code, who knows?
Feel free to use this code however you please. 
Enjoy.
-Crillz
https://steamcommunity.com/id/CrilleMega/
*/

var com = document.body.getElementsByClassName("commentthread_comment_text");
var com_l = com.length;
var blacklist = ["keys", "[", "]", "key", "{", "(h)", "(w)", "selling", "buying", "buy", "sell", "key", "1k", "2k", "3k", "offers", "endo", "crate", "crates"]; 
var delay = 750; //Keep at 750ms to give it some time, don't stress the code, you don't want it to break. (I don't want to fix it, it's good enough.)
console.log(com_l); //Check the length of


function Clear()
{
for(i = 0; i<com_l; i++)
    {
    var comment = com[i].innerHTML.toString();
    for(x = 0; x<blacklist.length; x++)
        {
        if(comment.toLowerCase().includes(blacklist[x].toLowerCase()))
            {
            var parent = document.getElementById(com[i].id).parentElement; //kommer åt parenten av kommentaren.
            var author = parent.getElementsByClassName("commentthread_comment_author"); //kommer åt barnet i parent.
            var actionLink = jQuery(author).find(".actionlink").attr("href"); //hittar länken i parent.
            Remove(actionLink, comment, i, x);
            x=blacklist.length; //Stops the X-loop
            i=com_l; //Restarts the i-loop. Preventing console spam.
            } //Else do nothing I guess  ¯\_(ツ)_/¯
        }
        
    }
//Automation.
let notification = document.getElementById("header_notification_link");
if(notification.className == "header_notification_btn global_header_toggle_button notification_count_total_ctn has_notifications")
    {
        //reload page
        //window.location.reload();
        
        //TODO: Run this script on reload somehow.
    }
else if (notification.className == "header_notification_btn global_header_toggle_button notification_count_total_ctn no_notifications")
    {
        //nothing
        //¯\_(ツ)_/¯
    }
}

function Remove(actionLink, comment, i, x)
{
    window.location.href = actionLink;//click.
    console.log("%c Blacklisted phrase: " + blacklist[x] + " ", "background: #222; color: #bada55"); //logs the word that was detected
    console.log(i + com[i].id); //Logs the comment ID
    //console.log((com_l - i)+": "+comment);
}
var c = confirm("Are you sure you want to run this script? Remember that the blacklist is very aggressive.");
if(c)
{
setInterval(function(){
Clear();}, delay);
}
