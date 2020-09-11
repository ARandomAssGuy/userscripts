# warning:
# THIS SH SCRIPT IS IN TESTING.
# IT MAY WORK, OR IT MAY DESTROY YOUR COMPUTER
# DO NOT USE UNLESS YOU ARE SURE THAT THE SCRIPT WILL WORK
# USE AT YOUR OWN RISK
if ! command -v node &> /dev/null && ! command -v nodejs &> /dev/null
then
    echo "node does not seem to be installed. It is required in order to run this program."
    echo "Press y and then Enter if you want to attempt an install."
    read installnode
    if [ "$installnode" = "y" ]
    then
    if [ "$OSTYPE" = "darwin18" ]
    then
    if ! command -v brew &> /dev/null
    then
    echo "Attempting nodejs install using brew"
    else
    echo "installing brew using curl"
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
    fi
    echo "No installer yet for macos, you can manually install nodejs."
    fi
    fi
    if [ "$OSTYPE" = *"linux"* ]
    then
    sudo apt-get install nodejs
    sudo apt-get install npm
    else
    echo "No installer is out for your OS yet. You can manually install nodejs."
    fi
    else 
    if ! command -v npm &> /dev/null
then
    echo "npm not found. checking if yarn exists"
    if ! command -v yarn &> /dev/null
  then
    echo "yarn not found. Please install yarn or npm before launching."
  else yarn add net
  fi
  else npm i -g net
fi
fi
