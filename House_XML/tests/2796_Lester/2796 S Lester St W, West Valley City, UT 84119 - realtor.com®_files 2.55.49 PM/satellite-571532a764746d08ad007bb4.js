_satellite.pushAsyncScript(function(event, target, $variables){
  //EDW If Turbo Status = Active, pull agent ID, otherwise Office ID
var edwPixel = _satellite.getVar('edw-endpoint')+_satellite.getVar('edwGlobal')
+"&ptnid="+"page_view"
+"&page="+_satellite.getVar('pageType')
+"&adtyp="+_satellite.getVar('productType')+":"+_satellite.getVar('productTypeSub')+":"+_satellite.getVar('turboStatus')
+"&pgvar="+_satellite.getVar('pageType')
+"&lid="+_satellite.getVar('lidSwitch')
+"&adtsid=" +_satellite.getVar('advertiserID-selector')
+"&comid="+_satellite.getVar('communityID')
+"&planid=" +_satellite.getVar('planID')
+"&SubId="+_satellite.getVar('subID')
+"&listing_adtsid=" +_satellite.getVar('advertiserID-listing')
+"&local_adtsid=" +_satellite.getVar('advertiserID-local')
+"&nearbyhomes_lid=" +_satellite.getVar('nearbyRR-listingID')
+"&agentsother_lid=" +_satellite.getVar('additionalRR-listingID')
+"&agentsother_comid=" +_satellite.getVar('additionalRR-comID')
+"&nearbyhomes_adtsid=" +_satellite.getVar('nearybyRR-advertiserID')
+"&chnl="+_satellite.getVar('propertyStatus')+":"+_satellite.getVar('propertyStatusSub')
+"&zip="+_satellite.getVar('ListingZip')
+"&city="+_satellite.getVar('ListingCity')
+"&state="+_satellite.getVar('ListingState')
+"&campid="+_satellite.getVar('turboCampaignID')
+"&ppage="+_satellite.getVar('listingClickSource')
+"&rank="+_satellite.getVar('listingRank')
function myFunction() 
{var x = document.createElement("img");     
 x.setAttribute("src", edwPixel);     document.body.appendChild(x); }
myFunction();

//fb
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '754678604575607');
fbq('track', 'ViewContent', {
content_ids: [_satellite.getVar('listingID')],
content_type: 'product',
listing_id: _satellite.getVar('listingID'),
pageType: _satellite.getVar('pageType'),
propertyStatus: _satellite.getVar('propertyStatus'),
listingPrice: _satellite.getVar('ListingPrice'),
listingState: _satellite.getVar('ListingState'),
listingBeds: _satellite.getVar('listingBeds'),
listingBaths: _satellite.getVar('listingBaths'),
listingSqFt: _satellite.getVar('listingSqFt'),
listingCity: _satellite.getVar('ListingCity'),
listingZip: _satellite.getVar('ListingZip'),
propertyType: _satellite.getVar('ListingPropertyType'),
productType: _satellite.getVar('productType')
});

//Costar Listing
//var costarListing = _satellite.getVar('costarKey');
//var costarEndpoint = 'http://www.apartments.com/impression/al.gif?FrontDoorAffiliateId=MOVE&SiteId=1&VisitId=12345678-0000-0000-0000-000000000000&VisitorId=00000000-0000-0000-0000-000000000000&SearchId=00000000-0000-0000-0000-000000000000&ContainerTypeId=0&ImpressionCount=1&EventTypeId=0&Media=4005'
//var costarContent = '&ListingKey='+_satellite.getVar('costarKey')+'&r='+_satellite.getVar('utc')
//var costarPixel = costarEndpoint + costarContent
//if(costarListing !== 'null') {
//var x = document.createElement("img");     
//x.setAttribute("src", costarPixel);     document.body.appendChild(x); 
//}

});
