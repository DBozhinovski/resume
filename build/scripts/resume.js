document.addEventListener('DOMContentLoaded', function(){
  var githubRequest = new XMLHttpRequest();
  githubRequest.open('GET', 'https://github.com/DBozhinovski.atom', true);

  var element = document.querySelectorAll('.gh-activity')[0];
  console.log(element);

  githubRequest.onload = function(){
    if(this.status >=200 && this.status < 400){
    //   var buffer = '';
    //   var count = 0;
    //
    //   JSON.parse(this.response).forEach(function(item){
    //     if(count < 5){
    //       buffer += '<li>';
    //
    //       if(item.type === 'WatchEvent'){
    //         buffer += 'Watched ';
    //       }
    //
    //       if(item.type === 'PushEvent'){
    //         buffer += 'Commited to';
    //       }
    //
    //       if(item.type === 'CreateEvent'){
    //         buffer += 'Created ';
    //       }
    //
    //       if(item.type === 'ForkEvent'){
    //         buffer += 'Forked ';
    //       }
    //
    //       buffer += '<a href=\'' + item.repo.url + '\'>' + item.repo.name + '</a>';
    //
    //       buffer += '</li>';
    //     }
    //
    //     count++;
    //   });
    //
    //   element.innerHTML = '<ul>' + buffer + '</ul>';
      console.log(this.response);
    } else {
      console.log('error');
    }

  };

  githubRequest.onerror = function(){
    console.log('something bad happened');
  };

  githubRequest.send();
});
