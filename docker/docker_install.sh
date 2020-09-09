#!/bin/bash
# update apt package index
sudo apt-get update
#install package for allow apt to use a repo over https
sudo apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
# dockers official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
# set up stable repo
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
# update apt package index
# install latest version of docker engine/containerd
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
# add current user to docker group
# so there is no need to use sudo when running docker
sudo usermod -aG docker $(whoami)
