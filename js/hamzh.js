/* ----------------- Start JS Document ----------------- */
var $ = jQuery.noConflict();
$(function($) {
'use strict';
jQuery(document).ready(function() {
///////////////////////////////////////////
//////////// INSTAGRAM FEED ///////////////
///////////////////////////////////////////
/* ================  ================ */
    $('.instagram_feed').socialstream({
        socialnetwork: 'instagram',
        limit: 8,
        username: 'ashmawisami',
        overlay: true
    });

///////////////////////////////////////////
///////////// twitter_slider //////////////
///////////////////////////////////////////
    $('.twitter_slider').bxSlider({
      mode: 'vertical',
      auto: true,
      minSlides: 1,
      easing: "linear",
      controls: false,
      pager: false,
      speed: 1000,
    });

///////////////////////////////////////////
////////// Testimonials Slider ////////////
///////////////////////////////////////////
    $("#testimonials_slider").owlCarousel({
    autoPlay: true, //Set AutoPlay to 3 seconds
    navigation : false, // Show next and prev buttons
    slideSpeed : 1000,
    paginationSpeed : 1000,
    stopOnHover : true,
    singleItem:true,
    responsive:true
    // "singleItem:true" is a shortcut for:
    // items : 1, 
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false
  });

///////////////////////////////////////////
////////// Post Slider Media ////////////
///////////////////////////////////////////
     $(".post_slider_media").owlCarousel({
    autoPlay: true, //Set AutoPlay to 3 seconds
    navigation : true, // Show next and prev buttons
    slideSpeed : 1000,
    paginationSpeed : 1000,
    stopOnHover : true,
    singleItem:true,
    responsive:true
    // "singleItem:true" is a shortcut for:
    // items : 1, 
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false
  });

///////////////////////////////////////////
///////////////// Animated ////////////////
///////////////////////////////////////////
     // use this snippet on single element
    $('.icon_servi_right, .box_content').waypoint(function() {
        $(this.element).addClass('animated fadeInRight');
        },{ 
        offset: '80%'
    });

//use this snippet if there are multiple, consecutive divs with same class
    $('.icon_servi_left, .year').each(function() {
        $(this).waypoint(function() {
            $(this.element).addClass('animated fadeInLeft');
        },
        { offset: '80%'});
    });

//use this snippet if there are multiple, consecutive divs with same class
    $('.content_post, .section_blog_posts, .portfolio').each(function() {
        $(this).waypoint(function() {
            $(this.element).addClass('animated fadeInUp');
        },
        { offset: '80%'});
    });


///////////////////////////////////////////
///////////////// More Blog ///////////////
///////////////////////////////////////////
$('a.read_m').click(function() {
    var pagina = $(this).attr('href');
    var postdetail = pagina + '-page';
    $( ".main_wrapper" ).scrollTop( 0 );

    if (pagina.indexOf("#post-") != -1) {

        $('.section_blog_posts, .post_header').hide();

        $(postdetail).show();
    }

    return false;

  });

///////////////////////////////////////////
/////////////////// Taps //////////////////
///////////////////////////////////////////
jQuery('.sections_wrapper .header a').on('click', function(e)  {
    var currentAttrValue = jQuery(this).attr('href');

    // Show/Hide Tabs
    jQuery('.main_wrapper ' + currentAttrValue).slideDown(400).siblings().slideUp(400);
    $( ".main_wrapper" ).scrollTop( 0 );
    
    // Change/remove current tab to active
    jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

    e.preventDefault();

///////////////////////////////////////////
///////////////// Filter //////////////////
///////////////////////////////////////////
// external js: isotope.pkgd.js
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};

function getHashFilter() {
  // get filter=filterName
  var matches = location.hash.match( /filter=([^&]+)/i );
  var hashFilter = matches && matches[1];
  return hashFilter && decodeURIComponent( hashFilter );
}



  var $grid = $('.grid').imagesLoaded( function(){

  // bind filter button click
  var $filterButtonGroup = $('.filter-button-group');
  $filterButtonGroup.on( 'click', 'li', function() {
    var filterAttr = $( this ).attr('data-filter');
    // set filter in hash
    location.hash = 'filter=' + encodeURIComponent( filterAttr );
  });

  var isIsotopeInit = false;

  function onHashchange() {
    var hashFilter = getHashFilter();
    if ( !hashFilter && isIsotopeInit ) {
      return;
    }
    isIsotopeInit = true;
    // filter isotope
    $grid.isotope({
      itemSelector: '.portfolio_item',
      layoutMode: 'fitRows',
      // use filterFns
      filter: filterFns[ hashFilter ] || hashFilter
    });
    // set selected class on button
    if ( hashFilter ) {
      $filterButtonGroup.find('.is-checked').removeClass('is-checked');
      $filterButtonGroup.find('[data-filter="' + hashFilter + '"]').addClass('is-checked');
    }
  }

  $(window).on( 'hashchange', onHashchange );

  // trigger event handler to init Isotope
  onHashchange();
  });

  });

///////////////////////////////////////////
///////////// Nivo Lightbox ///////////////
///////////////////////////////////////////
$('a').nivoLightbox();

$('.content_post a').click(function() {
    var pagina = $(this).attr('href');
    $( ".main_wrapper" ).scrollTop( 0 );

    if (pagina == "#blog") {

        $('.content_post').hide();
        $('.section_blog_posts, .post_header').show();
    }

    return false;

  });


//==============___Scrollbars___================
$('.main_wrapper').perfectScrollbar({
  wheelSpeed: 0.9
});

});

///////////////////////////////////////////
///////////////// Loading /////////////////
///////////////////////////////////////////
$(window).load(function () {
      $("#testimonials_slider").show();
      $(".post_slider_media").show();
      $("#loading").delay(1000).fadeOut(500);
      $("#loading-center").click(function() {
      $("#loading").fadeOut(500);
        })
  });
  
///////////////////////////////////////////
///////////////// Skill Bar ////////////////
///////////////////////////////////////////
jQuery('.skillbar').each(function(){
  jQuery(this).find('.skillbar-bar').animate({
    width:jQuery(this).attr('data-percent')
  },2000);
});

///////////////////////////////////////////
/////////// SET BACKGROUND IMAGE //////////
///////////////////////////////////////////
jQuery('.img-section').each( function() {
  var section = jQuery(this);
  var bg = jQuery(this).attr("data-bg-img");
  section.css('background-image', 'url('+ bg +')');
});

  jQuery('.progress-section').each( function() {
  var section = jQuery(this);
  var progress = jQuery(this).attr("data-progress");
  section.css('width', ''+ progress +'');
});

///////////////////////////////////////////
/////////////// Waypoints /////////////////
///////////////////////////////////////////
/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=y+l-f,h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();


});