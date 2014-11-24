document.addEventListener('DOMContentLoaded', function(){
  // var github = new Github({
  //   token: '8c45275ad364643248c7dd63fd5479850544e3ca',
  //   auth: 'oauth'
  // });
  //
  // var user = github.getUser();
  //
  // user.show('dbozhinovski',function(error, response){
  //   console.log(response);
  // });

  var githubRequest = new XMLHttpRequest();
  githubRequest.open('GET', 'https://api.github.com/users/dbozhinovski/events', true);

  githubRequest.setRequestHeader('Authorization', 'token 8c45275ad364643248c7dd63fd5479850544e3ca');

  var element = document.querySelectorAll('.gh-activity')[0];
  console.log(element);

  githubRequest.onload = function(){
    if(this.status >=200 && this.status < 400){
      var buffer = '';
      var count = 0;

      JSON.parse(this.response).forEach(function(item){
        if(count < 5){
          buffer += '<li>';

          if(item.type === 'WatchEvent'){
            buffer += 'Watched ';
          }

          if(item.type === 'PushEvent'){
            buffer += 'Commited to ';
          }

          if(item.type === 'CreateEvent'){
            buffer += 'Created ';
          }

          if(item.type === 'ForkEvent'){
            buffer += 'Forked ';
          }

          buffer += '<a href=\'' + item.repo.url + '\'>' + item.repo.name + '</a>';

          buffer += '</li>';
        }

        count++;
      });

      element.innerHTML = buffer;
      // console.log(this.response);
    } else {
      console.log('error');
    }

  };

  githubRequest.onerror = function(){
    console.log('something bad happened');
  };

  githubRequest.send();
});
