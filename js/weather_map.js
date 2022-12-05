(() => {
  `use strict`;

  // * object of svg's
  const icon = {
    high: `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-thermometer-sun" viewBox="0 0 16 16">
        <path d="M5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585A1.5 1.5 0 0 1 5 12.5z"/>
        <path d="M1 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM3.5 1A1.5 1.5 0 0 0 2 2.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0L5 10.486V2.5A1.5 1.5 0 0 0 3.5 1zm5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5zm4.243 1.757a.5.5 0 0 1 0 .707l-.707.708a.5.5 0 1 1-.708-.708l.708-.707a.5.5 0 0 1 .707 0zM8 5.5a.5.5 0 0 1 .5-.5 3 3 0 1 1 0 6 .5.5 0 0 1 0-1 2 2 0 0 0 0-4 .5.5 0 0 1-.5-.5zM12.5 8a.5.5 0 0 1 .5-.5h1a.5.5 0 1 1 0 1h-1a.5.5 0 0 1-.5-.5zm-1.172 2.828a.5.5 0 0 1 .708 0l.707.708a.5.5 0 0 1-.707.707l-.708-.707a.5.5 0 0 1 0-.708zM8.5 12a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5z"/>
      </svg>`,
    low: `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-thermometer-snow" viewBox="0 0 16 16">
        <path d="M5 12.5a1.5 1.5 0 1 1-2-1.415V9.5a.5.5 0 0 1 1 0v1.585A1.5 1.5 0 0 1 5 12.5z"/>
        <path d="M1 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM3.5 1A1.5 1.5 0 0 0 2 2.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0L5 10.486V2.5A1.5 1.5 0 0 0 3.5 1zm5 1a.5.5 0 0 1 .5.5v1.293l.646-.647a.5.5 0 0 1 .708.708L9 5.207v1.927l1.669-.963.495-1.85a.5.5 0 1 1 .966.26l-.237.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.884.237a.5.5 0 1 1-.26.966l-1.848-.495L9.5 8l1.669.963 1.849-.495a.5.5 0 1 1 .258.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.237.883a.5.5 0 1 1-.966.258L10.67 9.83 9 8.866v1.927l1.354 1.353a.5.5 0 0 1-.708.708L9 12.207V13.5a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5z"/>
      </svg>`,
    humidity: `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moisture" viewBox="0 0 16 16">
        <path d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-2zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a28.458 28.458 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a28.458 28.458 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001L7 1.5zm0 0-.364-.343L7 1.5zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267z"></path>
      </svg>`,
    wind: `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wind" viewBox="0 0 16 16">
        <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"/>
      </svg>`,
    headTemp: `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-thermometer-half" viewBox="0 0 16 16">
        <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415z"/>
        <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"/>
      </svg>`,
    condition: `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-sun" viewBox="0 0 16 16">
        <path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .624.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .51-.375A3.502 3.502 0 0 1 7 8zm4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z"/>
        <path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>
      </svg>`,
  };

  // * current and forecast weather
  $.get(`https://api.openweathermap.org/data/2.5/weather`, {
    APPID: weatherKey,
    q: `Fort Bragg, US`,
    units: "imperial",
  })
    .done(function (data) {
      const cur = {
        divO: `<div class="container-1-1">`,
        temp: `<span>${icon.headTemp} ${data.main.temp}°F</span>`,
        condition: `<span>${icon.condition} ${data.weather[0].main}</span>`,
        humidity: `<span>${icon.humidity} ${data.main.humidity}%</span>`,
        wind: `<span>${icon.wind} ${data.wind.speed}mph</span>`,
        divC: `</div>`,
      };
      $(`.container-1-1`).html(`${cur.divO}${cur.temp}${cur.condition}${cur.humidity}${cur.wind}${cur.divC}`);
    })
    .then(
      $.get("https://api.openweathermap.org/data/2.5/forecast", {
        APPID: weatherKey,
        q: "Fort Bragg, US",
        units: "imperial",
      }).done(function (data) {
        let reports = data.list;
        console.log(data);
        for (let i = 0; i < reports.length; i += 8) {
          let day = reports[i];
          let daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
          let date = new Date(day.dt * 1000);
          let dayOfWeek = daysOfTheWeek[date.getDay()];
          const forecast = {
            divO: `<div class="card">`,
            day: `<h3>${dayOfWeek}</h3>`,
            high: `<span class="red">${icon.high} ${day.main.temp_max}°F</span>`,
            low: `<span class="blue">${icon.low} ${day.main.temp_min}°F</span>`,
            humidity: `<span>${icon.humidity} ${day.main.humidity}%</span>`,
            condition: `<span>${icon.condition} ${day.weather[0].main}</span>`,
            wind: `<span>${icon.wind} ${day.wind.speed}mph</span>`,
            divC: `</div>`,
          };
          const containers = [$(`#container-2-1`), $(`#container-2-2`), $(`#container-2-3`), $(`#container-2-4`), $(`#container-2-5`)];
          containers[i / 8].html(`${forecast.divO}${forecast.day}${forecast.high}${forecast.low}${forecast.humidity}${forecast.condition}${forecast.wind}${forecast.divC}`);
        }
      })
    );
 
  // * map initialilzation
  mapboxgl.accessToken = mapboxKey;
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: [-79.02119103975892, 35.12703524187906], // starting position [lng, lat]
    zoom: 10, // starting zoom
  });

  // * popover text for map buttons
  $(() => {
    $(`.zoom-in`).hover(
      () => {
        $(`[data-toggle="zoom-in"]`).popover("show");
      },
      () => {
        $(`[data-toggle="zoom-in"]`).popover("hide");
      }
    );
    $(`.zoom-out`).hover(
      () => {
        $('[data-toggle="zoom-out"]').popover(`show`);
      },
      () => {
        $('[data-toggle="zoom-out"]').popover(`hide`);
      }
    );
    $(`.remove-marker`).hover(
      () => {
        $('[data-toggle="remove-marker"]').popover(`show`);
      },
      () => {
        $('[data-toggle="remove-marker"]').popover(`hide`);
      }
    );
    $(`.add-marker`).hover(
      () => {
        $('[data-toggle="add-marker"]').popover(`show`);
      },
      () => {
        $('[data-toggle="add-marker"]').popover(`hide`);
      }
    );
  });

  // * map button functionality
  $(document).ready(() => {
    // * Zoom feature
    $(`.zoom-in`).click(() => {
      map.zoomIn();
    });
    $(`.zoom-out`).click(() => {
      map.zoomOut();
    });
    // * remove marker feature
    $(`.remove-marker`).click(() => {
      $(`.mapboxgl-marker`).remove();
    });
    $(`#submit`).click(() => {
      const search = $(`#search`).val();
      const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?access_token=${mapboxKey}`;
      $.get(url).done((data) => {
        let coordinates = data.features[0].center;
        let marker = new mapboxgl.Marker({
          draggable: true,
        })
          .setLngLat(coordinates)
          .addTo(map);
        map.flyTo({
          center: coordinates,
          zoom: 10,
        });
      });
      $(`.mapboxgl-marker`).markerPositionWeather(getDay(day));
    });
    $(`#search`).keyup((e) => {
      if (e.keyCode === 13) {
        $(`#submit`).click();
      }
      else if (e.keyCode === 27) {
        $(`#search`).click();
      }
    });
    // * main search feature
    $(`.search`).click(() => {
      const search = $(`.search-input`).val();
      const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?access_token=${mapboxgl.accessToken}`;
      $.ajax({
        url: url,
        success: (data) => {
          const coordinates = data.features[0].center;
          map.flyTo({
            center: coordinates,
            zoom: 15,
          });
        },
      });
    });
    $(`.search-input`).keypress((e) => {
      if (e.keyCode === 13 || e.keyCode === 27) {
        $(`.search`).click();
        markerPositionWeather();
      }
    });
    // * add marker feature
    $(`.add-marker`).click(() => {
      markerPositionWeather();
    });
    // * hide marker forecast feature until called
    $(`.container-forecast-marker`).hide();
    // * blur page while searching for location
    $(`.search-input`).focusin(() => {
      $(`.wrapper-current-weather, .wrapper-forecast, #map, .wrapper-forecast-marker`).addClass(`blur`);
      $(`.search`).css(`filter`, `brightness(1)`);
    });
    $(`.search-input`).focusout(() => {
      $(`.wrapper-current-weather, .wrapper-forecast, #map, .wrapper-forecast-marker`).removeClass(`blur`);
    });
    $(`.search-input`).keyup((e) => {
      if (e.keyCode === 13 || e.keyCode === 27) {
        $(`.wrapper-current-weather, .wrapper-forecast, #map, .wrapper-forecast-marker`).removeClass(`blur`);
      }
    });
    $(`.form-control`).focusin(() => {
      $(`.wrapper-current-weather, .wrapper-forecast, #map, .wrapper-forecast-marker, .search-input`).addClass(`blur`);
    });
    $(`.form-control`).focusout(() => {
      $(`.wrapper-current-weather, .wrapper-forecast, #map, .wrapper-forecast-marker, .search-input`).removeClass(`blur`);
    });
    $(`.form-control`).keyup((e) => {
      if (e.keyCode === 13 || e.keyCode === 27) {
        $(`.wrapper-current-weather, .wrapper-forecast, #map, .wrapper-forecast-marker, .search-input`).removeClass(`blur`);
      }
    });
  });

  function markerPositionWeather() {
    const marker = new mapboxgl.Marker({
      draggable: true,
    })
      .setLngLat(map.getCenter())
      .addTo(map);
    marker.on("dragend", () => {
      const lngLat = marker.getLngLat();
      $.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lngLat.lng},${lngLat.lat}.json?access_token=${mapboxgl.accessToken}`, (data) => {
        $(`.search-input`).val(data.features[0].place_name);
      });
      // * weather forecast for marker position
      $.get(`https://api.openweathermap.org/data/2.5/forecast`, {
        APPID: weatherKey,
        lat: lngLat.lat,
        lon: lngLat.lng,
        units: "imperial",
      }).done((data) => {
        let reports = data.list;
        console.log(reports);
        for (let i = 0; i < reports.length; i += 8) {
          let day = reports[i];
          let daysofWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
          let date = new Date(day.dt * 1000);
          let dayOfWeek = daysofWeek[date.getDay()];
          const forecast = {
            divO: `<div class="card">`,
            day: `<h3>${dayOfWeek}</h3>`,
            high: `<span class="red">${icon.high} ${day.main.temp_max}°F</span>`,
            low: `<span class="blue">${icon.low} ${day.main.temp_min}°F</span>`,
            humidity: `<span>${icon.humidity} ${day.main.humidity}%</span>`,
            condition: `<span>${icon.condition} ${day.weather[0].main}</span>`,
            wind: `<span>${icon.wind} ${day.wind.speed} mph</span>`,
            divC: `</div>`,
          };
          $(`.container-forecast-marker`).show();
          $(`.marker-forecast-name:nth-of-type(1)`).text(`5 Day Forecast for ${data.city.name}`);
          let containers = [$(`#container-marker-1`), $(`#container-marker-2`), $(`#container-marker-3`), $(`#container-marker-4`), $(`#container-marker-5`)];
          containers[i / 8].html(`${forecast.divO}${forecast.day}${forecast.high}${forecast.low}${forecast.humidity}${forecast.condition}${forecast.wind}${forecast.divC}`);
        }
      });
    });
  }
})();
