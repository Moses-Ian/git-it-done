//variables
//==================================



//functions
//====================================


var getUserRepos = function() {
  fetch("https://api.github.com/users/octocat/repos");
};



//listeners
//=====================================





//body
//=====================================

getUserRepos();