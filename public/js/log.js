function moveMasterFile() {
  location.href = './masterFile.html'
}

$(document).ready(function () {
  $('#byProject').click(function() {
    $('#byProject').css({ 'color': '#39A2C0' });
    $('#byUser').css({ 'color': '#707070' });
    $('#all').css({ 'color': '#707070' });
    $('#table-byUser').hide();
    $('#table-byProject').show();
  })
  $('#byUser').click(function() {
    $('#byUser').css({ 'color': '#39A2C0' });
    $('#byProject').css({ 'color': '#707070' });
    $('#all').css({ 'color': '#707070' });
    $('#table-byProject').hide();
    $('#table-byUser').show();
  })
  $('#all').click(function() {
    $('#all').css({ 'color': '#39A2C0' });
    $('#byProject').css({ 'color': '#707070' });
    $('#byUser').css({ 'color': '#707070' });
    $('#table-byProject').show();
    $('#table-byUser').show();
  })
})