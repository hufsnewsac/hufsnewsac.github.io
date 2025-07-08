$(document).ready(function() {
	$(".artclInfo").find(" > dl:even").addClass("_even");
	$(".artclInfo").find(" > dl:odd").addClass("_odd");
	
	$("a[onclick*='jf_searchArtcl('], a[onclick*='jf_viewArtcl(']").click(function(event) {
		event.preventDefault();
	});
});

function page_link(page) {
	$( "form[name='pageForm'] input[id='page']" ).val( page );
	$( "form[name='pageForm']" ).submit();
}

function jf_searchArtcl(id, val) {
	//event.preventDefault ? event.preventDefault() : (event.returnValue = false);
	$( "form[name='searchForm'] input[id='" + id + "']" ).val( val );
	$( "form[name='searchForm']" ).submit();
}

function jf_viewArtcl(siteId, fnctNo, proflArtclSeq) {
	//event.preventDefault ? event.preventDefault() : (event.returnValue = false);
	var url = kurl( '/profl/' + siteId + "/" + fnctNo + "/" + proflArtclSeq + "/artclView" );
	$( "form[name='viewForm']" ).attr( "action", url );
	$( "form[name='viewForm']" ).submit();
}

