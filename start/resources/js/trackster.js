var Trackster = {};
const API_KEY = '32d90aefa91d979df2e02db9e21bef90';

$(document).ready(function() {
  $('#search-button').click(function() {
    Trackster.searchTracksByTitle($('#search-input').val());
  });
});

Trackster.renderTracks = function(tracks) {
  var $trackList = $('#track-list');

  $trackList.empty();

};
