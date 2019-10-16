  var canvas;
  var myMap;
  var data;
  var key = 'pk.eyJ1IjoibWFwcGluZzJkYXkiLCJhIjoiY2sxcWZ6YW9tMTZoMjNkcWZxZzFzbGJ1OSJ9.eqXF6Qj7RJsj25bLH-Ug7g'

  var options = {
    lat: 0,
    lng: 0,
    zoom: 1.4,
    style: 'mapbox://styles/mapbox/dark-v9',
    pitch: 10
  }

  var mappa = new Mappa('Mapboxgl', key);

  function setup() {
    canvas = createCanvas(1920, 1080);
    myMap = mappa.tileMap(options);
    myMap.overlay(canvas)
    fill(204, 0, 0, 60);
    noStroke();


    myMap.onChange(drawPoint);
  }

  function draw() {}

  function drawPoint() {
    clear();

    const nigeria = myMap.latLngToPixel(11.396396, 5.076543);
    ellipse(nigeria.x, nigeria.y, 53.5, 53.5);

    const kenya = myMap.latLngToPixel(-1.2833333, 36.8166667);
    ellipse(kenya.x, kenya.y, 36.8, 36.8);

    const Madagascar = myMap.latLngToPixel(-25, 43);
    ellipse(Madagascar.x, Madagascar.y, 77.6, 77.6);

    const congo = myMap.latLngToPixel(-5.89624, 22.41659);
    ellipse(congo.x, congo.y, 76, 76);

    const burundi = myMap.latLngToPixel(-3.3822, 29.3644);
    ellipse(burundi.x, burundi.y, 71, 71);

    const Malawi = myMap.latLngToPixel(-13.96692, 33.78725);
    ellipse(Malawi.x, Malawi.y, 62.4, 62.4);

    const Uzbekistan = myMap.latLngToPixel(40.78206, 72.34424);
    ellipse(Uzbekistan.x, Uzbekistan.y, 62.1, 62.1);

    const zambia = myMap.latLngToPixel(-15.40669, 28.28713);
    ellipse(zambia.x, zambia.y, 57.5, 57.5);

    const CAR = myMap.latLngToPixel(4.36122, 18.55496);
    ellipse(CAR.x, CAR.y, 66.3, 66.3);

    const Lesotho = myMap.latLngToPixel(-29.61667, 27.76667);
    ellipse(Lesotho.x, Lesotho.y, 59.7, 59.7);

    const SierraLeone = myMap.latLngToPixel(8.484, -13.22994);
    ellipse(SierraLeone.x, SierraLeone.y, 52.2, 52.2);

    const mali = myMap.latLngToPixel(12.65, -8);
    ellipse(mali.x, mali.y, 49.7, 49.7);

    const benin = myMap.latLngToPixel(9.70853, 1.66598);
    ellipse(benin.x, benin.y, 49.5, 49.5);

    const togo = myMap.latLngToPixel(6.13748, 1.21227);
    ellipse(togo.x, togo.y, 49.2, 49.2);

    const tanzania = myMap.latLngToPixel(11.396396, 5.076543);
    ellipse(tanzania.x, tanzania.y, 39.26951, 39.26951);

  }