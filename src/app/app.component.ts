import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cosmobotsapp';

  public ngOnInit()
  {
    $(function(){
// modal 

$('#search').click(function () {
  $('.jumbotron').hide(1000);
  $('.result').html("");
  var user = $('#isearch').val();
  $.getJSON("https://api.github.com/users/" + user, function (data) {
    if (data['name'] == null) {
      window.location.href = "/error";
    } else {
      // card1 avt,nickname e username
      $('#exampleModal .modal-title').text(data['name']);
      $('#exampleModal .modal-body').html('<br>Avatar URL: ' + data['avatar_url'] + '<br> name: ' + data['name'] + '<br>followers: ' + data['followers'] + '<br>following:' + data['following']);
      $('.result').append('<div class="card"><div id="c1" style="text-align: center;max-width: 25%; background: lightgray; padding: 5em; font-size: 15px;"><img style="max-width: 50%"  class="rounded mx-auto d-block" src="' + data['avatar_url'] + '</img><br><span class="username">' + data['name'] + '</span><br><span class="id">' + data['login'] + '</span><br><br><button type="button" id="minf" class="btn btn-dark" data-toggle="modal" data-target="#exampleModal">Mais informações</button></div>');
      // card2 navbar
      $('.result').append('</div>');
  
      $.get(data['repos_url'], function (data2) {
        var tma = data2.length;
        tma = tma - 1;
        while (tma != 0) {
          //console.log(data2[tma].name);
          $('.card').append("<div class='titleb'>" + data2[tma].name + "<br>");
          tma = tma - 1;
        }
      });
    }
  });
  });
  });
  }

}
