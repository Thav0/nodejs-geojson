mapboxgl.accessToken = 'pk.eyJ1IjoidGhhdm8iLCJhIjoiY2s2MmRvZWlhMGRmbjNucHdndXAzYXAzYiJ9.uGj_K4ndQHfNgk7angUvcg';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  zoom: 14,
  center: [-51.224448, -23.301966]
});

// Fetch Stores from API
async function getStores() {
  const res     = await fetch('/api/v1/stores');
  const data    = await res.json();

  const stores  = data.data.map(store => {
    return {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [store.location.coordinates[0], store.location.coordinates[1]]
      },
      properties: {
        storeId: store.storeId,
        icon: 'shop'
      }
    }
  });

  loadMap(stores);
}

// Load Map with stores
function loadMap(stores) {
  console.log(stores);
  map.on('load', function() {
    map.addSource('point', {
      'type': 'geojson',
      'data': {
          'type': 'FeatureCollection',
          'features': stores,
        }
      });
      map.addLayer({
      'id': 'points',
      'type': 'symbol',
      'source': 'point',
      'layout': {
          'icon-image': '{icon}-15',
          'icon-size': 1.5,
          'text-field': '{storeId}',
          // 'text-font': ['Open Sans Semibold', 'Arial Unicode Ms Bold'],
          'text-offset': [0, 0.9],
          'text-anchor': 'top'
        }
      });
  });
}

getStores();