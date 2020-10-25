#fuck windows anyway

#assumes you have npm.

mkdir trickcordtreatselfbot;
cd trickcordtreatselfbot;
npm init -y > /dev/null;
npm i --save-local discord.js@11.6.4 > /dev/null;
curl -o trickcordtreatselfbot.js "https://raw.githubusercontent.com/ARandomAssGuy/scripts/master/discord/TrickCord%20treat%20selfbot.js" > /dev/null;
clear;
echo "Finished install. Here is the command to launch it:";
echo
echo "cd trickcordtreatselfbot; node trickcordtreatselfbot.js";
echo
echo "!!! MAKE SURE TO PUT YOUR TOKEN IN client.login('TOKEN') !!!";
