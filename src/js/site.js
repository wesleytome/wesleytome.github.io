var words = [
  {text: "Project Management", weight: 6},
  {text: "MS Project", weight: 6},
  {text: "Agile", weight: 6},
  {text: "Digital Strategy", weight: 5},
  {text: "Android", weight: 3},
  {text: "iOS", weight: 3},
  {text: "Cordova", weight: 3},
  {text: "Phonegap", weight: 3},
  {text: "Ionic", weight: 3},
  {text: "Java", weight: 4},
  {text: "ASP.NET", weight: 4},
  {text: "C#", weight: 4},
  {text: "PHP", weight: 4},
  {text: "ASP", weight: 4},
  {text: "Wordpress", weight: 4},
  {text: "HTML", weight:4},
  {text: "CSS", weight: 4},
  {text: "Javascript", weight: 1},
  {text: "EC2", weight: 2},
  {text: "S3", weight: 2},
  {text: "Docker", weight: 2},
  {text: "Vagrant", weight: 2},
  {text: "PL SQL", weight: 4},
  {text: "Microsoft SQL Server", weight: 1},
  {text: "MySQL", weight: 1},
  {text: "Postgres", weight: 1},
  {text: "Oracle", weight: 1},
  
];



$( document ).ready(function() {
    $('#cloudtags').jQCloud(words, {autoResize: true, fontSize: {
      from: 0.08,
      to: 0.02
    }});
});








function initMap() {
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
      center: new google.maps.LatLng(0, 0),
      minZoom: 1,
      zoom:3,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false,
      disableDefaultUI: true,
      zoomControl: true,
      styles: [
        {
          featureType: "all",
          elementType: "labels",
          stylers: [
            { visibility: "off" }
          ]
        },
        {elementType: 'geometry', stylers: [{color: ' #333333'}]},
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#363E41'}]
        },
        {
          featureType: 'landscape.natural',
          elementType: 'geometry',
          stylers: [{color: '#333333'}]
        },
      ]
    });
 
    function customMarker(latlng, map, args) {
    // Initialize all properties.
    this.latlng = latlng;
    this.args = args;

    // Explicitly call setMap on this overlay.
    this.setMap(map);
  }

  customMarker.prototype = new google.maps.OverlayView();

  customMarker.prototype.draw = function() {
    var self = this,
      div = this.div;

    if (!div) {
      div = this.div = document.createElement('div');

      div.className = self.args.class_name;
      
      if (typeof(self.args.marker_id) !== 'undefined') {
        div.dataset.marker_id = self.args.marker_id;
      }
      if (typeof(self.args.price) !== 'undefined') {
        div.innerHTML = self.args.price;
      }
      
      google.maps.event.addDomListener(div, 'click', function (event) {
        google.maps.event.trigger(self, 'click');
      });

      var panes = self.getPanes();
      panes.overlayImage.appendChild(div);
    }

    var point = self.getProjection().fromLatLngToDivPixel(self.latlng);

    if (point) {
      div.style.left = point.x + 'px';
      div.style.top = point.y + 'px';
    }
  };

    var hotelMarker = new customMarker(new google.maps.LatLng(40.766159, -73.977644), map, {
      class_name: 'hotel-marker',
      marker_id: '01',
      price: 'New York'
    });  

    // var marker = new google.maps.Marker({
    //   position: {lat: 40.766159, lng: -73.977644},
    //   map: map,
    //   title: 'EUA: NY!',
    //   content: "<div class='pin'>Teste</div><div class='pulse'></div>",
    //   class_name: 'testemap'
    // });

    var hotelMarker = new customMarker(new google.maps.LatLng(28.428135,-81.463610), map, {
      class_name: 'hotel-marker',
      marker_id: '02',
      price: 'Orlando'
    });  
    // var marker = new google.maps.Marker({
    //   position: {lat: 28.428135, lng: -81.463610},
    //   map: map,
    //   title: 'EUA: Orlando!'
    // });

    var hotelMarker = new customMarker(new google.maps.LatLng(25.791567,-80.129896), map, {
      class_name: 'hotel-marker',
      marker_id: '03',
      price: 'Miami'
    });  
    // var marker = new google.maps.Marker({
    //   position: {lat: 25.791567, lng: -80.129896},
    //   map: map,
    //   title: 'EUA: Miami!'
    // });


    var hotelMarker = new customMarker(new google.maps.LatLng(38.726348,-9.139090), map, {
      class_name: 'hotel-marker',
      marker_id: '04',
      price: 'Lisbon'
    });  
    // var marker = new google.maps.Marker({
    //   position: {lat: 38.726348, lng: -9.139090},
    //   map: map,
    //   title: 'Portugal: Lisboa!'
    // });

    var hotelMarker = new customMarker(new google.maps.LatLng(41.161571,-8.629578), map, {
      class_name: 'hotel-marker',
      marker_id: '05',
      price: 'Porto'
    });  
    // var marker = new google.maps.Marker({
    //   position: {lat: 41.161571, lng: -8.629578},
    //   map: map,
    //   title: 'Portugal: Porto!'
    // });

    var hotelMarker = new customMarker(new google.maps.LatLng(40.431075, -3.703577), map, {
      class_name: 'hotel-marker',
      marker_id: '06',
      price: 'Madrid'
    }); 
    // var marker = new google.maps.Marker({
    //   position: {lat: 40.431075, lng: -3.703577},
    //   map: map,
    //   title: 'Espanha: Madrid!'
    // });

    var hotelMarker = new customMarker(new google.maps.LatLng(51.520014, -0.129090), map, {
      class_name: 'hotel-marker',
      marker_id: '07',
      price: 'Londres'
    }); 
    // var marker = new google.maps.Marker({
    //   position: {lat: 51.520014, lng: -0.129090},
    //   map: map,
      
    //   title: 'Inglaterra: Londres!'
    // });

    var hotelMarker = new customMarker(new google.maps.LatLng(48.858640, 2.298546), map, {
      class_name: 'hotel-marker',
      marker_id: '08',
      price: ''
    }); 
    // var marker = new google.maps.Marker({
    //   position: {lat: 48.858640, lng: 2.298546},
    //   map: map,
    //   title: 'França: Paris!'
    // });

    var hotelMarker = new customMarker(new google.maps.LatLng(-22.907377, -43.190850), map, {
      class_name: 'hotel-marker',
      marker_id: '08',
      price: 'I\'m here!'
    }); 
  }

  var c2 = document.getElementById( 'c2' ),
  ctx2 = c2.getContext( '2d' ),
  twopi = Math.PI * 2,
  parts = [],
  sizeBase,
  cw,
  opt,
  hue,
  count;

  function rand( min, max ) {
    return Math.random() * ( max - min ) + min;
  }

  function hsla( h, s, l, a ) {
    return 'hsla(' + h + ',' + s + '%,' + l + '%,' + a + ')';
  }
    
  function create() {
    sizeBase = 140;
    count = Math.floor( sizeBase * 0.3 ),
    hue =100,
    opt = {
      radiusMin: 1,
      radiusMax: sizeBase * 0.04,
      
      alphaMin: 0.1,
      alphaMax: 0.5
    }
    
    while( count-- ) {
      var radius = rand( opt.radiusMin, opt.radiusMax ),
        blur = rand( opt.blurMin, opt.blurMax ),
        x = rand( 0, cw ),
        y = rand( 0, ch ),
        hue = rand(opt.hueMin, opt.hueMax ),
        saturation = rand( opt.saturationMin, opt.saturationMax ),
        lightness = rand(  opt.lightnessMin, opt.lightnessMax ),
        alpha = rand( opt.alphaMin, opt.alphaMax );

    }
    
    parts.length = 0;
    for( var i = 0; i < Math.floor( ( cw + ch ) * 0.03 ); i++ ) {
      parts.push({
        radius: rand( 1, sizeBase * 0.03 ),
        x: rand( 0, cw ),
        y: rand( 0, ch ),
        angle: rand( 0, twopi ),
        vel: rand( 0.1, 0.5 ),
        tick: rand( 0, 10000 )
      });
    }
  }

  function init() {
    resize();
    create();
    loop();
  }

  function loop() {
    requestAnimationFrame( loop );
    
    ctx2.clearRect( 0, 0, cw, ch );
    ctx2.globalCompositeOperation = 'source-over';
    ctx2.shadowBlur = 0;
    // ctx2.globalCompositeOperation = 'lighter';
    
    var i = parts.length;
    ctx2.shadowBlur = 2;
    ctx2.shadowColor = '#fff';
    while( i-- ) {
      var part = parts[ i ];
      
      part.x += Math.cos( part.angle ) * part.vel;
      part.y += Math.sin( part.angle ) * part.vel;
      part.angle += rand( -0.05, 0.05 );
      
      ctx2.beginPath();
      ctx2.arc( part.x, part.y, part.radius, 0, twopi );
      ctx2.fillStyle = hsla( 0, 0, 100, 0.075 + Math.cos( part.tick * 0.02 ) * 0.05 );
      ctx2.fill();
      
      if( part.x - part.radius > cw ) { part.x = -part.radius }
      if( part.x + part.radius < 0 )  { part.x = cw + part.radius }
      if( part.y - part.radius > ch ) { part.y = -part.radius }
      if( part.y + part.radius < 0 )  { part.y = ch + part.radius }
      
      part.tick++;
    }
  }

  function resize() {
    cw = c2.width = window.innerWidth,
    ch = c2.height = window.innerHeight;
    create();
  }

  function click() {
    create()
  }

  window.addEventListener( 'resize', resize );
  window.addEventListener( 'click', click );

  init();








  /*CHART*/

  





;(function($, window, document) {
  "use strict";

  var CHARTS = window.CHATS || {};

  var $container = $('#languages'),
        τ = 2 * Math.PI,
        width = $container.width(),
        height = $container.height(),
        outerRadius = Math.min(width,height)/2,
        innerRadius = (outerRadius/5)*4,
        fontSize = (Math.min(width,height)/4);

  var svg,
      arcReadBG, arcReadFG, arcWriteBG, arcWriteFG, arcSpeakBG, arcSpeakFG, 
      pathReadBG, pathReadFG, pathWriteBG, pathWriteFG, pathSpeakBG, pathSpeakFG;

  var read,write, speak;

  CHARTS.CONFIG = {
    'containers_selectors': {
      'futebol_aovivo': '#chart-container',
      'box_lateral': '#box_confrontos'
    }
  };

  CHARTS.init = function() {  

    read = 65,write=40, speak=60;

    CHARTS.create_chart('#chartPortuguese','Portuguese',100,100,100,'#002478','#FFE100','#009C34');
    CHARTS.create_chart('#chartEnglish','English',95,80,65,'#00266A','#C1012B', '#FFF');
    CHARTS.create_chart('#chartSpanish','Spanish',90,80,75,'#C60418','#FFC600', '#C60418');
  };

  CHARTS.create_chart = function(_chartcontainer,_title,_read,_write,_speak,_colorSpeak,_colorWrite, _colorRead){
    var like = _read,unlike=_write, speak=_speak;

    var ratioRead  = like/100;
    var ratioWrite = unlike/100;
    var ratioSpeak = speak/100;

    var pie=d3.layout.pie()
            .value(function(d){return d})
            .sort(null);

    var w=400,h=400;

    var outerRadius=(w/2)-20;
    var innerRadius=outerRadius-30;


    var color = d3.scale.ordinal().range(['#486376']);

    var arcReadBG=d3.svg.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius)
            .startAngle(0)
            .endAngle(2*Math.PI);
    var arcReadFG=d3.svg.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius)
            .cornerRadius(20)
            .startAngle(-.05);


    var arcWriteBG=d3.svg.arc()
            .innerRadius(innerRadius-30)
            .outerRadius(innerRadius)
            .startAngle(0)
            .endAngle(2*Math.PI);
    var arcWriteFG=d3.svg.arc()
            .innerRadius(innerRadius-30)
            .outerRadius(innerRadius)
            .cornerRadius(20)
            .startAngle(-.05);


    var arcSpeakBG=d3.svg.arc()
            .innerRadius(innerRadius-60)
            .outerRadius(innerRadius)
            .startAngle(0)
            .endAngle(2*Math.PI);
    var arcSpeakFG=d3.svg.arc()
            .innerRadius(innerRadius-60)
            .outerRadius(innerRadius-30)
            .cornerRadius(20)
            .startAngle(-.05);

    var svg=d3.select(_chartcontainer)
            .append("svg")
            .attr("width", '100%')
            .attr("height", '100%')
            .attr('viewBox','0 0 '+Math.min(width,height)+' '+Math.min(width,height))
            .attr('preserveAspectRatio','xMinYMin')
            .append("g")
            .attr("transform", "translate(" + Math.min(width,height) / 2 + "," + Math.min(width,height) / 2 + ")");

    

    var pathSpeakBG=svg.append('path').attr({d:arcSpeakBG}).style({fill:'rgba(0, 0, 0, 0.05)'});
    var pathSpeakFG=svg.append('path').datum({endAngle:0}).attr({d:arcSpeakFG}).style({fill:_colorSpeak});

    var pathWriteBG=svg.append('path').attr({d:arcWriteBG}).style({fill:'rgba(0, 0, 0, 0.1)'});
    var pathWriteFG=svg.append('path').datum({endAngle:0}).attr({d:arcWriteFG}).style({fill:_colorWrite});

    var pathReadBG=svg.append('path').attr({d:arcReadBG}).style({fill:'rgba(0, 0, 0, 0.2)'});
    var pathReadFG=svg.append('path').datum({endAngle:0}).attr({d:arcReadFG}).style({fill:_colorRead});

    var arcTweenRead=function(transition, newAngle) {
        transition.attrTween("d", function (d) {
            var interpolate = d3.interpolate(d.endAngle, newAngle);

            return function (t) {
                d.endAngle = interpolate(t);
                return arcReadFG(d);
            };
        });
    };

    var arcTweenWrite=function(transition, newAngle) {
        transition.attrTween("d", function (d) {
            var interpolate = d3.interpolate(d.endAngle, newAngle);

            return function (t) {
                d.endAngle = interpolate(t);
                return arcWriteFG(d);
            };
        });
    };  

    var arcTweenSpeak=function(transition, newAngle) {
        transition.attrTween("d", function (d) {
            var interpolate = d3.interpolate(d.endAngle, newAngle);

            return function (t) {
                d.endAngle = interpolate(t);
                return arcSpeakFG(d);
            };
        });
    };


    var animate=function(){
        pathReadFG.transition()
                .duration(750)
                .ease('cubic')
                .call(arcTweenRead,((2*Math.PI))*ratioRead);

        pathWriteFG.transition()
                .duration(750)
                .ease('quad')
                .call(arcTweenWrite,((2*Math.PI))*ratioWrite);

        pathSpeakFG.transition()
                .duration(750)
                .ease('quad')
                .call(arcTweenSpeak,((2*Math.PI))*ratioSpeak);


    };

    setTimeout(animate,0);

    var circleGroup=svg.append('g')
            .attr({
                class:'plus'
            });

    // circleGroup.append('path').attr(
    //                                 {d:'M27 0c2.761 0 5 2.239 5 5 0 1.126-0.372 2.164-1 3l-2 2-7-7 2-2c0.836-0.628 1.874-1 3-1zM2 23l-2 9 9-2 18.5-18.5-7-7-18.5 18.5zM22.362 11.362l-14 14-1.724-1.724 14-14 1.724 1.724z'}).style({fill:'rgba(0, 0, 0, 0.2)'}

    //                                 ).style({width:20,height:20,transform: translate(0, -174)});

    // circleGroup.append('path')
    //         .attr({
    //             d:'M27 0c2.761 0 5 2.239 5 5 0 1.126-0.372 2.164-1 3l-2 2-7-7 2-2c0.836-0.628 1.874-1 3-1zM2 23l-2 9 9-2 18.5-18.5-7-7-18.5 18.5zM22.362 11.362l-14 14-1.724-1.724 14-14 1.724 1.724z'}).style({fill:'rgba(0, 0, 0, 0.2)',
                
    //             transform:'translate(0,'+ (-outerRadius+6) +')'
    //         });

    circleGroup.append('image')
            .attr({
                'xlink:href':'./assets/img/icon-read.png',
                width:30,
                height:30,
                transform:'translate(-10,'+ (-outerRadius+0) +')'
            });

    circleGroup.append('image')
            .attr({
                'xlink:href':'./assets/img/icon-write.png',
                width:30,
                height:30,
                transform:'translate(-10,'+ (-innerRadius+0) +')'
            });

    circleGroup.append('image')
            .attr({
                'xlink:href':'./assets/img/icon-speak.png',
                width:30,
                height:30,
                transform:'translate(-10,'+ (-innerRadius+30) +')'
            });

    svg.append("text")
       .attr("text-anchor", "middle")  
       .style("font-size", "22px") 
       .text(_title);
  };

  

      

  $('document').ready(function () {
    CHARTS.init();
  });

})(jQuery, window, document);