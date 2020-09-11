#this script assumes that curl is installed. everything else is going to be handled automatically including dependencies
#make sure to use the program like sh downloader.sh <program> <download or install>
# download will just download the js file 
# install will also attempt to install dependencies.
if [ "$2" = "download" ]
then
curl "https://raw.githubusercontent.com/ARandomAssGuy/scripts/master/$1.js" -O
else 
if [ "$2" = "install" ]
then
curl "https://raw.githubusercontent.com/ARandomAssGuy/scripts/master/$1.js" -O
curl "https://raw.githubusercontent.com/ARandomAssGuy/scripts/master/$1.sh" -O
sh $1.sh
fi
fi
