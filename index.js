$.getJSON ("topsports.json", function (data) {
    $.each(data, function(i, data) {
      var name = data.name;
      var description = data.description;
      var locationToo = data.location;  
      var place=  'https://www.google.com/maps?q=' + locationToo;
      $('#thatTable').append("<tr align='left'>"+"<td style='border-bottom:.5px solid black'>"+name+'</td>' + "<td style='border-bottom:.5px solid black'>"+description+'</td>'+ "<td style='border-bottom:.5px solid black'>"+'<a href='+place+'>'+"<button style='width: 150px; height: 29px;background-color:#1D7DBA; border-radius: 6px; color: white'>Open in Google Maps</button>"+'</a>'+'</td>'+'</tr>')
    });
});