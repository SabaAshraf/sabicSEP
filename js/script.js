$(document).ready(function(){
  $('#fromdate,#fromCal').click(function(){
    $('#fromdate,#fromCal').datepicker({
      clearBtn: true,
      format: "dd/mm/yyyy"
    }).on('change', function(){
      $('.datepicker').hide();
    });
    $('#datepicker-2 .datepicker').hide();
  });
 
  $('#todate,#toCal').click(function(){
    $('#todate,#toCal').datepicker({
      clearBtn: true,
      format: "dd/mm/yyyy"
    }).on('change', function(){
      $('.datepicker').hide();
    });
    $('#datepicker-1 .datepicker').hide();
  });
});

// custom checkbox
$(document).ready(function () {
	$('input[type="checkbox"]').before('<span class="custom-checkbox">');
	$('input[type="checkbox"]').each(function () {
		customizeCheckbox($(this));
	});
});
$('body').on('change', 'input[type="checkbox"]', function () {
	customizeCheckbox($(this));
});
function customizeCheckbox(elem) {
	if ($(elem).is(':checked')) {
		$(elem).prev('.custom-checkbox').addClass('checked');
	} else {
		$(elem).prev('.custom-checkbox').removeClass('checked');
	}
}

//Simple Pagination
$(document).ready(function(){
  var items = $('#userProfile .searchResultContent .list-item');
  var totalItems = items.length;
  var itemsperPage = 2;
  items.slice(itemsperPage).hide();
  $('.paginationContainer').pagination({
    items: totalItems,
    itemsOnPage: itemsperPage,
    prevText:'<span class="back">Previous</span>',
    nextText:'<span class="forward">Next</span>',
    onPageClick: function(pageNumber){
      var showFrom = itemsperPage * (pageNumber - 1);
      var showTo = showFrom + itemsperPage;
      items.hide().slice(showFrom,showTo).show();
    }
  });
});
$(document).ready(function(){
  var items = $('#locationMap .searchResultContent .list-item');
  var totalItems = items.length;
  var itemsperPage = 2;
  items.slice(itemsperPage).hide();
  $('.paginationContainer').pagination({
    items: totalItems,
    itemsOnPage: itemsperPage,
    prevText:'<span class="back">Previous</span>',
    nextText:'<span class="forward">Next</span>',
    onPageClick: function(pageNumber){
      var showFrom = itemsperPage * (pageNumber - 1);
      var showTo = showFrom + itemsperPage;
      items.hide().slice(showFrom,showTo).show();
    }
  });
});