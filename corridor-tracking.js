// ==========================================
// YUKTI RAIL - LIVE CORRIDOR TRACKING MODULE
// High-Performance Leaflet.js + OpenStreetMap & Turf.js
// ==========================================

export const CORRIDORS_DATA = {
  KALYAN_IGATPURI: {
    id: "KALYAN_IGATPURI",
    name: "Kalyan–Igatpuri Corridor (Thal Ghat)",
    division: "Central Railway (Mumbai Division)",
    center: { lat: 19.48, lng: 73.38 },
    zoom: 10,
    color: "#2563eb",
    stations: [
      { code: "KYN", name: "Kalyan Jn", pos: { lat: 19.2437, lng: 73.1355 }, major: true },
      { code: "TLA", name: "Titwala", pos: { lat: 19.3005, lng: 73.2081 }, major: false },
      { code: "VSD", name: "Vasind", pos: { lat: 19.3980, lng: 73.2842 }, major: false },
      { code: "ASO", name: "Asangaon", pos: { lat: 19.4397, lng: 73.3056 }, major: true },
      { code: "ATG", name: "Atgaon", pos: { lat: 19.4975, lng: 73.3601 }, major: false },
      { code: "KSRA", name: "Kasara", pos: { lat: 19.6467, lng: 73.4839 }, major: true },
      { code: "TGR", name: "Thal Ghat Cabin", pos: { lat: 19.6740, lng: 73.5180 }, major: false },
      { code: "IGP", name: "Igatpuri", pos: { lat: 19.6974, lng: 73.5606 }, major: true }
    ],
    path: [
      { lat: 19.2437, lng: 73.1355 },
      { lat: 19.2592, lng: 73.1534 },
      { lat: 19.2789, lng: 73.1812 },
      { lat: 19.3005, lng: 73.2081 },
      { lat: 19.3496, lng: 73.2501 },
      { lat: 19.3980, lng: 73.2842 },
      { lat: 19.4397, lng: 73.3056 },
      { lat: 19.4975, lng: 73.3601 },
      { lat: 19.5312, lng: 73.3982 },
      { lat: 19.5694, lng: 73.4320 },
      { lat: 19.6467, lng: 73.4839 },
      { lat: 19.6650, lng: 73.5050 },
      { lat: 19.6820, lng: 73.5350 },
      { lat: 19.6974, lng: 73.5606 }
    ]
  },
  PUNE_LONAVALA: {
    id: "PUNE_LONAVALA",
    name: "Pune–Lonavala Corridor (Bhor Ghat)",
    division: "Central Railway (Pune Division)",
    center: { lat: 18.66, lng: 73.65 },
    zoom: 10,
    color: "#0891b2",
    stations: [
      { code: "PUNE", name: "Pune Jn", pos: { lat: 18.5284, lng: 73.8744 }, major: true },
      { code: "KK", name: "Khadki", pos: { lat: 18.5615, lng: 73.8347 }, major: false },
      { code: "CCH", name: "Chinchwad", pos: { lat: 18.6366, lng: 73.7885 }, major: true },
      { code: "DEHR", name: "Dehu Road", pos: { lat: 18.6791, lng: 73.7289 }, major: false },
      { code: "TGN", name: "Talegaon", pos: { lat: 18.7289, lng: 73.6766 }, major: true },
      { code: "KMST", name: "Kamshet", pos: { lat: 18.7510, lng: 73.5410 }, major: false },
      { code: "LNL", name: "Lonavala", pos: { lat: 18.7557, lng: 73.4091 }, major: true }
    ],
    path: [
      { lat: 18.5284, lng: 73.8744 },
      { lat: 18.5325, lng: 73.8523 },
      { lat: 18.5615, lng: 73.8347 },
      { lat: 18.5832, lng: 73.8241 },
      { lat: 18.6010, lng: 73.8152 },
      { lat: 18.6212, lng: 73.8010 },
      { lat: 18.6366, lng: 73.7885 },
      { lat: 18.6534, lng: 73.7681 },
      { lat: 18.6791, lng: 73.7289 },
      { lat: 18.7120, lng: 73.6910 },
      { lat: 18.7289, lng: 73.6766 },
      { lat: 18.7450, lng: 73.6290 },
      { lat: 18.7510, lng: 73.5410 },
      { lat: 18.7530, lng: 73.4820 },
      { lat: 18.7557, lng: 73.4091 }
    ]
  },
  THANE_KALYAN: {
    id: "THANE_KALYAN",
    name: "Thane–Kalyan Quadruple Track Corridor",
    division: "Central Railway (Suburban Fast/Slow Lines)",
    center: { lat: 19.21, lng: 73.05 },
    zoom: 12,
    color: "#4f46e5",
    stations: [
      { code: "TNA", name: "Thane", pos: { lat: 19.1860, lng: 72.9757 }, major: true },
      { code: "KLVA", name: "Kalva", pos: { lat: 19.1983, lng: 72.9984 }, major: false },
      { code: "MBQ", name: "Mumbra", pos: { lat: 19.1873, lng: 73.0232 }, major: false },
      { code: "DIVA", name: "Diva Jn", pos: { lat: 19.1895, lng: 73.0450 }, major: true },
      { code: "DI", name: "Dombivli", pos: { lat: 19.2183, lng: 73.0867 }, major: true },
      { code: "THK", name: "Thakurli", pos: { lat: 19.2272, lng: 73.1033 }, major: false },
      { code: "KYN", name: "Kalyan Jn", pos: { lat: 19.2437, lng: 73.1355 }, major: true }
    ],
    path: [
      { lat: 19.1860, lng: 72.9757 },
      { lat: 19.1983, lng: 72.9984 },
      { lat: 19.1873, lng: 73.0232 },
      { lat: 19.1895, lng: 73.0450 },
      { lat: 19.2132, lng: 73.0784 },
      { lat: 19.2183, lng: 73.0867 },
      { lat: 19.2272, lng: 73.1033 },
      { lat: 19.2437, lng: 73.1355 }
    ]
  },
  DADAR_KURLA: {
    id: "DADAR_KURLA",
    name: "Dadar–Kurla Suburban High-Density Corridor",
    division: "Central Railway (Main Line)",
    center: { lat: 19.04, lng: 72.87 },
    zoom: 12,
    color: "#7c3aed",
    stations: [
      { code: "CSMT", name: "Mumbai CSMT", pos: { lat: 18.9400, lng: 72.8353 }, major: true },
      { code: "DR", name: "Dadar Central", pos: { lat: 19.0178, lng: 72.8478 }, major: true },
      { code: "MTN", name: "Matunga", pos: { lat: 19.0270, lng: 72.8550 }, major: false },
      { code: "SIN", name: "Sion", pos: { lat: 19.0435, lng: 72.8631 }, major: false },
      { code: "CLA", name: "Kurla Jn", pos: { lat: 19.0657, lng: 72.8793 }, major: true },
      { code: "GC", name: "Ghatkopar", pos: { lat: 19.0863, lng: 72.9080 }, major: true },
      { code: "TNA", name: "Thane", pos: { lat: 19.1860, lng: 72.9757 }, major: true }
    ],
    path: [
      { lat: 18.9400, lng: 72.8353 },
      { lat: 18.9772, lng: 72.8335 },
      { lat: 19.0178, lng: 72.8478 },
      { lat: 19.0270, lng: 72.8550 },
      { lat: 19.0435, lng: 72.8631 },
      { lat: 19.0657, lng: 72.8793 },
      { lat: 19.0863, lng: 72.9080 },
      { lat: 19.1450, lng: 72.9390 },
      { lat: 19.1860, lng: 72.9757 }
    ]
  }
};

export const ACTIVE_BLOCK_ZONES = [
  {
    id: "BLK-01",
    reqId: "REQ-001",
    corridorId: "KALYAN_IGATPURI",
    title: "Thal Ghat Track Renewal (TRR)",
    department: "ENGG + S&T",
    cautionSpeed: "30 km/h",
    severity: "CRITICAL",
    center: { lat: 19.665, lng: 73.510 },
    path: [
      { lat: 19.6467, lng: 73.4839 },
      { lat: 19.6650, lng: 73.5050 },
      { lat: 19.6820, lng: 73.5350 }
    ],
    description: "Ballast tamping & flash-butt welding on 1:37 gradient curves."
  },
  {
    id: "BLK-02",
    reqId: "REQ-004",
    corridorId: "PUNE_LONAVALA",
    title: "Talegaon BCM Deep Screening",
    department: "ENGG",
    cautionSpeed: "20 km/h",
    severity: "HIGH",
    center: { lat: 18.735, lng: 73.650 },
    path: [
      { lat: 18.7289, lng: 73.6766 },
      { lat: 18.7450, lng: 73.6290 }
    ],
    description: "Ballast Cleaning Machine operation on DN line track bed."
  },
  {
    id: "BLK-03",
    reqId: "REQ-006",
    corridorId: "THANE_KALYAN",
    title: "Diva Junction Isolator & Point Renewal",
    department: "TRD + S&T",
    cautionSpeed: "45 km/h",
    severity: "MEDIUM",
    center: { lat: 19.195, lng: 73.055 },
    path: [
      { lat: 19.1895, lng: 73.0450 },
      { lat: 19.2132, lng: 73.0784 }
    ],
    description: "OHE cantilever alignment and cross-over track circuit inspection."
  }
];

export const INITIAL_TRAINS = [
  {
    id: "T101",
    number: "12137",
    name: "Punjab Mail",
    type: "EXPRESS",
    corridorId: "KALYAN_IGATPURI",
    direction: "DN",
    speed: 86,
    progress: 0.63,
    signal: "Double Green",
    speedStep: 0.0004
  },
  {
    id: "T102",
    number: "22221",
    name: "CSMT NZM Rajdhani",
    type: "EXPRESS",
    corridorId: "KALYAN_IGATPURI",
    direction: "DN",
    speed: 105,
    progress: 0.32,
    signal: "Double Green",
    speedStep: 0.0006
  },
  {
    id: "T103",
    number: "20705",
    name: "CSMT Jalna Vande Bharat",
    type: "EXPRESS",
    corridorId: "KALYAN_IGATPURI",
    direction: "DN",
    speed: 115,
    progress: 0.88,
    signal: "Attention (Yellow)",
    speedStep: 0.0007
  },
  {
    id: "T104",
    number: "11009",
    name: "Sinhagad Express",
    type: "EXPRESS",
    corridorId: "PUNE_LONAVALA",
    direction: "UP",
    speed: 78,
    progress: 0.45,
    signal: "Caution (Single Yellow)",
    speedStep: 0.0004
  },
  {
    id: "T105",
    number: "12124",
    name: "Deccan Queen",
    type: "EXPRESS",
    corridorId: "PUNE_LONAVALA",
    direction: "DN",
    speed: 94,
    progress: 0.72,
    signal: "Double Green",
    speedStep: 0.0005
  },
  {
    id: "T106",
    number: "97103",
    name: "Thane–Kalyan Fast Local",
    type: "SUBURBAN",
    corridorId: "THANE_KALYAN",
    direction: "DN",
    speed: 68,
    progress: 0.58,
    signal: "Double Green",
    speedStep: 0.00045
  },
  {
    id: "T107",
    number: "97042",
    name: "Dadar–Kurla Slow Local",
    type: "SUBURBAN",
    corridorId: "DADAR_KURLA",
    direction: "DN",
    speed: 52,
    progress: 0.38,
    signal: "Double Green",
    speedStep: 0.00035
  },
  {
    id: "T108",
    number: "BOXN-8842",
    name: "Coal Freight (Bankers Attached)",
    type: "FREIGHT",
    corridorId: "KALYAN_IGATPURI",
    direction: "DN",
    speed: 38,
    progress: 0.73,
    signal: "Caution Speed",
    speedStep: 0.0002
  }
];

// ==========================================
// TURF.JS HELPER WRAPPER WITH SAFE FALLBACK
// Ensures Turf methods always execute reliably
// ==========================================
function toRad(deg) {
  return (deg * Math.PI) / 180;
}
function toDeg(rad) {
  return (rad * 180) / Math.PI;
}

function safeDistanceKm(c1, c2) {
  const [lng1, lat1] = c1;
  const [lng2, lat2] = c2;
  const R = 6371; // Earth radius in km
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function safeBearingDeg(c1, c2) {
  const [lng1, lat1] = c1;
  const [lng2, lat2] = c2;
  const φ1 = toRad(lat1);
  const φ2 = toRad(lat2);
  const Δλ = toRad(lng2 - lng1);
  const y = Math.sin(Δλ) * Math.cos(φ2);
  const x = Math.cos(φ1) * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ);
  const θ = Math.atan2(y, x);
  return (toDeg(θ) + 360) % 360;
}

function safeInterpolate(c1, c2, fraction) {
  const [lng1, lat1] = c1;
  const [lng2, lat2] = c2;
  const d = safeDistanceKm(c1, c2) / 6371;
  if (d < 1e-7) return [lng1, lat1];

  const A = Math.sin((1 - fraction) * d) / Math.sin(d);
  const B = Math.sin(fraction * d) / Math.sin(d);

  const φ1 = toRad(lat1);
  const λ1 = toRad(lng1);
  const φ2 = toRad(lat2);
  const λ2 = toRad(lng2);

  const x = A * Math.cos(φ1) * Math.cos(λ1) + B * Math.cos(φ2) * Math.cos(λ2);
  const y = A * Math.cos(φ1) * Math.sin(λ1) + B * Math.cos(φ2) * Math.sin(λ2);
  const z = A * Math.sin(φ1) + B * Math.sin(φ2);

  const lat = Math.atan2(z, Math.sqrt(x * x + y * y));
  const lng = Math.atan2(y, x);
  return [toDeg(lng), toDeg(lat)];
}

const TurfEngine = {
  getTurf() {
    if (typeof window !== "undefined" && window.turf) {
      return window.turf;
    }
    return null;
  },

  lineString(coords) {
    const t = this.getTurf();
    if (t && t.lineString) {
      return t.lineString(coords);
    }
    return { type: "Feature", geometry: { type: "LineString", coordinates: coords } };
  },

  length(line, options = { units: "kilometers" }) {
    const t = this.getTurf();
    if (t && t.length) {
      return t.length(line, options);
    }
    const coords = line.geometry ? line.geometry.coordinates : line;
    let sum = 0;
    for (let i = 0; i < coords.length - 1; i++) {
      sum += safeDistanceKm(coords[i], coords[i + 1]);
    }
    return sum;
  },

  along(line, distance, options = { units: "kilometers" }) {
    const t = this.getTurf();
    if (t && t.along) {
      return t.along(line, distance, options);
    }
    const coords = line.geometry ? line.geometry.coordinates : line;
    if (!coords || coords.length === 0) {
      return { type: "Feature", geometry: { type: "Point", coordinates: [73.1355, 19.2437] } };
    }
    if (coords.length === 1 || distance <= 0) {
      return { type: "Feature", geometry: { type: "Point", coordinates: coords[0] } };
    }

    let travelled = 0;
    for (let i = 0; i < coords.length - 1; i++) {
      const segDist = safeDistanceKm(coords[i], coords[i + 1]);
      if (travelled + segDist >= distance) {
        const segFraction = segDist > 0 ? (distance - travelled) / segDist : 0;
        const pt = safeInterpolate(coords[i], coords[i + 1], segFraction);
        return { type: "Feature", geometry: { type: "Point", coordinates: pt } };
      }
      travelled += segDist;
    }
    return { type: "Feature", geometry: { type: "Point", coordinates: coords[coords.length - 1] } };
  },

  bearing(pointA, pointB) {
    const t = this.getTurf();
    if (t && t.bearing) {
      const b = t.bearing(pointA, pointB);
      return (b + 360) % 360;
    }
    const c1 = pointA.geometry ? pointA.geometry.coordinates : pointA;
    const c2 = pointB.geometry ? pointB.geometry.coordinates : pointB;
    return safeBearingDeg(c1, c2);
  },

  distance(pointA, pointB, options = { units: "kilometers" }) {
    const t = this.getTurf();
    if (t && t.distance) {
      return t.distance(pointA, pointB, options);
    }
    const c1 = pointA.geometry ? pointA.geometry.coordinates : pointA;
    const c2 = pointB.geometry ? pointB.geometry.coordinates : pointB;
    return safeDistanceKm(c1, c2);
  },

  point(coords) {
    const t = this.getTurf();
    if (t && t.point) {
      return t.point(coords);
    }
    return { type: "Feature", geometry: { type: "Point", coordinates: coords } };
  }
};

// ==========================================
// CORRIDOR CONTROLLER & SIMULATOR CLASS (LEAFLET)
// ==========================================
export class CorridorTrackingEngine {
  constructor() {
    this.map = null;
    this.tileLayer = null;

    this.selectedCorridor = "ALL";
    this.selectedTrainType = "ALL";
    this.showBlocks = true;
    this.showStations = true;
    this.showTrains = true;

    this.simSpeed = 1;
    this.simRunning = true;
    this.animationFrameId = null;

    this.trains = JSON.parse(JSON.stringify(INITIAL_TRAINS));
    this.selectedTrainId = "T101";

    // Leaflet Layers & Markers
    this.layers = {
      polylines: [],
      stations: [],
      blocks: [],
      trains: new Map() // trainId -> { marker, el, lastLat, lastLng, heading }
    };

    this.basemapProviders = {
      osm: {
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
        maxZoom: 19
      },
      "carto-positron": {
        url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        maxZoom: 20
      },
      "carto-dark": {
        url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        maxZoom: 20
      },
      opentopo: {
        url: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, SRTM | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a>',
        maxZoom: 17
      }
    };
  }

  async initialize() {
    window.__corridorTrackingEngine = this;

    // Wait if Leaflet script is still loading
    if (typeof window.L === "undefined") {
      await this.waitForLeaflet();
    }

    this.initMap();
    this.bindUIEvents();
    this.renderFleetList();
    this.updateInspector(this.selectedTrainId);
    this.updateGeometryMetrics();
    this.startSimulationLoop();
  }

  waitForLeaflet() {
    return new Promise((resolve) => {
      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        if (typeof window.L !== "undefined" || attempts > 50) {
          clearInterval(interval);
          resolve();
        }
      }, 50);
    });
  }

  initMap() {
    const L = window.L;
    if (!L) {
      console.warn("Leaflet.js is not loaded yet.");
      return;
    }

    // Ensure map container element exists
    const container = document.getElementById("map") || document.getElementById("corridor-map-canvas");
    if (!container) return;

    // If an existing Leaflet instance is attached, remove it cleanly
    if (this.map) {
      try {
        this.map.remove();
      } catch (e) {
        console.warn("Map remove notice:", e);
      }
      this.map = null;
    }

    // Replace new google.maps.Map(...) with Leaflet's L.map('map')
    this.map = L.map(container.id || "map", {
      center: [19.2437, 73.1355],
      zoom: 10,
      zoomControl: true,
      attributionControl: true
    });

    // Set base tile layer to OpenStreetMap: https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
    this.tileLayer = L.tileLayer(this.basemapProviders.osm.url, {
      maxZoom: this.basemapProviders.osm.maxZoom,
      attribution: this.basemapProviders.osm.attribution
    }).addTo(this.map);

    // Track center coordinate updates
    this.map.on("move", () => {
      this.updateCenterCoordinateText();
    });

    // Render Corridor track lines, stations, and blocks
    this.renderPolylines();
    this.renderStations();
    this.renderBlocks();
    this.renderTrainMarkers();

    // Trigger size invalidation to guarantee proper tile render
    setTimeout(() => {
      if (this.map) this.map.invalidateSize();
    }, 150);
  }

  setBasemap(providerKey) {
    const L = window.L;
    if (!this.map || !L) return;
    const config = this.basemapProviders[providerKey] || this.basemapProviders.osm;

    if (this.tileLayer) {
      this.map.removeLayer(this.tileLayer);
    }
    this.tileLayer = L.tileLayer(config.url, {
      maxZoom: config.maxZoom,
      attribution: config.attribution
    }).addTo(this.map);
  }

  // ==========================================
  // RENDER TRACKS (L.polyline)
  // ==========================================
  renderPolylines() {
    const L = window.L;
    if (!this.map || !L) return;

    // Clear previous
    this.layers.polylines.forEach((p) => this.map.removeLayer(p));
    this.layers.polylines = [];

    const corridorsToRender =
      this.selectedCorridor === "ALL"
        ? Object.values(CORRIDORS_DATA)
        : [CORRIDORS_DATA[this.selectedCorridor]].filter(Boolean);

    corridorsToRender.forEach((corridor) => {
      const latLngs = corridor.path.map((pt) => [pt.lat, pt.lng]);

      // Base Rail Track Polyline
      const baseTrack = L.polyline(latLngs, {
        color: corridor.color,
        weight: 6,
        opacity: 0.9,
        lineCap: "round",
        lineJoin: "round"
      }).addTo(this.map);

      // Railroad Ties Dashed Polyline
      const tieTrack = L.polyline(latLngs, {
        color: "#ffffff",
        weight: 2,
        opacity: 0.7,
        dashArray: "6, 8"
      }).addTo(this.map);

      this.layers.polylines.push(baseTrack, tieTrack);
    });
  }

  // ==========================================
  // RENDER STATIONS (L.marker with L.divIcon)
  // ==========================================
  renderStations() {
    const L = window.L;
    if (!this.map || !L) return;

    this.layers.stations.forEach((m) => this.map.removeLayer(m));
    this.layers.stations = [];

    if (!this.showStations) return;

    const corridors =
      this.selectedCorridor === "ALL"
        ? Object.values(CORRIDORS_DATA)
        : [CORRIDORS_DATA[this.selectedCorridor]].filter(Boolean);

    corridors.forEach((c) => {
      c.stations.forEach((st) => {
        const stationIcon = L.divIcon({
          className: "leaflet-station-pin-wrap",
          html: `<div class="rail-station-pin"><i class="fa-solid fa-building-flag"></i> ${st.code} - ${st.name}</div>`,
          iconSize: [110, 22],
          iconAnchor: [55, 11]
        });

        const marker = L.marker([st.pos.lat, st.pos.lng], { icon: stationIcon }).addTo(this.map);

        marker.bindTooltip(
          `<b>${st.name} (${st.code})</b><br>${st.major ? "Major Railway Junction" : "Intermediate Station"}`,
          { direction: "top", offset: [0, -10] }
        );

        marker.on("click", () => {
          this.map.setView([st.pos.lat, st.pos.lng], 13, { animate: true });
        });

        this.layers.stations.push(marker);
      });
    });
  }

  // ==========================================
  // RENDER ACTIVE MAINTENANCE BLOCKS (L.polyline & L.marker)
  // ==========================================
  renderBlocks() {
    const L = window.L;
    if (!this.map || !L) return;

    this.layers.blocks.forEach((m) => this.map.removeLayer(m));
    this.layers.blocks = [];

    if (!this.showBlocks) return;

    const blocks =
      this.selectedCorridor === "ALL"
        ? ACTIVE_BLOCK_ZONES
        : ACTIVE_BLOCK_ZONES.filter((b) => b.corridorId === this.selectedCorridor);

    blocks.forEach((blk) => {
      const blockLatLngs = blk.path.map((pt) => [pt.lat, pt.lng]);

      // Highlighted dashed line for block zone
      const poly = L.polyline(blockLatLngs, {
        color: "#dc2626",
        weight: 7,
        opacity: 0.95,
        dashArray: "10, 6"
      }).addTo(this.map);

      // Hazard Pin Marker at center
      const hazardIcon = L.divIcon({
        className: "leaflet-hazard-pin-wrap",
        html: `<div class="rail-block-hazard-pin"><i class="fa-solid fa-triangle-exclamation"></i> ${blk.reqId} (${blk.cautionSpeed})</div>`,
        iconSize: [120, 24],
        iconAnchor: [60, 12]
      });

      const marker = L.marker([blk.center.lat, blk.center.lng], {
        icon: hazardIcon,
        zIndexOffset: 500
      }).addTo(this.map);

      marker.bindPopup(`
        <div style="font-size: 12px; line-height: 1.4;">
          <strong style="color: #dc2626; font-size: 13px;"><i class="fa-solid fa-triangle-exclamation"></i> Block Zone ${blk.reqId}</strong><br/>
          <strong>${blk.title}</strong><br/>
          Speed Restriction: <b>${blk.cautionSpeed}</b><br/>
          Department: <b>${blk.department}</b><br/>
          <div style="margin-top: 4px; color: #475569; font-size: 11px;">${blk.description}</div>
        </div>
      `);

      this.layers.blocks.push(poly, marker);
    });
  }

  // ==========================================
  // RENDER & UPDATE TRAIN MARKERS (L.marker)
  // ==========================================
  renderTrainMarkers() {
    const L = window.L;
    if (!this.map || !L) return;

    const visibleTrains = this.getFilteredTrains();

    if (!this.showTrains) {
      for (const [id, wrap] of this.layers.trains.entries()) {
        this.map.removeLayer(wrap.marker);
      }
      this.layers.trains.clear();
      return;
    }

    visibleTrains.forEach((train) => {
      const { lat, lng, heading } = this.calculateTrainStateWithTurf(train);

      let wrap = this.layers.trains.get(train.id);
      if (!wrap) {
        const trainIcon = L.divIcon({
          className: "leaflet-train-marker-wrap",
          html: `
            <div class="rail-train-marker ${train.id === this.selectedTrainId ? "selected" : ""}" id="train-marker-${train.id}">
              <div class="train-icon-wrap" style="transform: rotate(${Math.round(heading)}deg);">
                <i class="fa-solid fa-train"></i>
              </div>
              <div style="display: flex; flex-direction: column; line-height: 1.1;">
                <span>${train.number}</span>
                <span class="train-speed-txt" style="font-size: 8.5px; opacity: 0.85;">${Math.round(train.speed)} km/h</span>
              </div>
            </div>
          `,
          iconSize: [110, 32],
          iconAnchor: [55, 16]
        });

        const marker = L.marker([lat, lng], { icon: trainIcon, zIndexOffset: 1000 }).addTo(this.map);

        marker.on("click", () => {
          this.selectTrain(train.id);
        });

        this.layers.trains.set(train.id, {
          marker,
          heading,
          lat,
          lng
        });
      } else {
        // Update position using .setLatLng()
        wrap.marker.setLatLng([lat, lng]);
        wrap.heading = heading;
        wrap.lat = lat;
        wrap.lng = lng;

        const el = document.getElementById(`train-marker-${train.id}`);
        if (el) {
          const iconWrap = el.querySelector(".train-icon-wrap");
          if (iconWrap) {
            iconWrap.style.transform = `rotate(${Math.round(heading)}deg)`;
          }
          const speedTxt = el.querySelector(".train-speed-txt");
          if (speedTxt) {
            speedTxt.textContent = `${Math.round(train.speed)} km/h`;
          }
          if (train.id === this.selectedTrainId) {
            el.classList.add("selected");
          } else {
            el.classList.remove("selected");
          }
          if (train.signal && (train.signal.includes("Restrictive") || train.signal.includes("Yellow"))) {
            el.classList.add("status-caution");
          } else {
            el.classList.remove("status-caution");
          }
        }
      }
    });

    // Remove any trains no longer visible under active filter
    for (const [id, wrap] of this.layers.trains.entries()) {
      if (!visibleTrains.find((t) => t.id === id)) {
        this.map.removeLayer(wrap.marker);
        this.layers.trains.delete(id);
      }
    }
  }

  // ==========================================
  // TURF.JS INTERPOLATION & MOTION LOGIC
  // Strict Requirement: Use turf.lineString([stationA_coords, stationB_coords])
  // and turf.along(line, distance) to calculate exact coordinates
  // ==========================================
  calculateTrainStateWithTurf(train) {
    const corridor = CORRIDORS_DATA[train.corridorId];
    if (!corridor || !corridor.path || corridor.path.length < 2) {
      return { lat: 19.2437, lng: 73.1355, heading: 0 };
    }

    const path = corridor.path;
    const numSegments = path.length - 1;
    const progress = Math.max(0, Math.min(0.9999, train.progress));
    const segmentIndex = Math.min(Math.floor(progress * numSegments), numSegments - 1);
    const segmentFraction = progress * numSegments - segmentIndex;

    const p1 = path[segmentIndex];
    const p2 = path[segmentIndex + 1];

    // Turf coordinates standard: [longitude, latitude]
    const stationA_coords = [p1.lng, p1.lat];
    const stationB_coords = [p2.lng, p2.lat];

    // Build Turf LineString between the two track coordinates
    const line = TurfEngine.lineString([stationA_coords, stationB_coords]);

    // Calculate segment geodesic length in kilometers
    const segmentLengthKm = TurfEngine.length(line, { units: "kilometers" });

    // Distance along line based on elapsed time fraction
    const distance = segmentFraction * segmentLengthKm;

    // Calculate exact coordinate of the train
    const currentPoint = TurfEngine.along(line, distance, { units: "kilometers" });
    const [trainLng, trainLat] = currentPoint.geometry.coordinates;

    // Calculate bearing angle to orient train glyph
    const heading = TurfEngine.bearing(stationA_coords, stationB_coords);

    return {
      lat: trainLat,
      lng: trainLng,
      heading
    };
  }

  getTrainPosition(train) {
    const state = this.calculateTrainStateWithTurf(train);
    return { lat: state.lat, lng: state.lng };
  }

  getTrainHeading(train) {
    const state = this.calculateTrainStateWithTurf(train);
    return state.heading;
  }

  // ==========================================
  // REAL-TIME SIMULATION LOOP
  // ==========================================
  startSimulationLoop() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }

    let lastTime = performance.now();

    const loop = (currentTime) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      if (this.simRunning) {
        this.stepSimulation(delta * this.simSpeed);
      }

      this.updateMovingMarkers();

      this.animationFrameId = requestAnimationFrame(loop);
    };

    this.animationFrameId = requestAnimationFrame(loop);
  }

  stepSimulation(deltaSeconds) {
    this.trains.forEach((train) => {
      const pos = this.getTrainPosition(train);
      const trainPoint = TurfEngine.point([pos.lng, pos.lat]);

      // Measure proximity to active maintenance blocks with Turf.js
      let minDistanceKm = Infinity;
      ACTIVE_BLOCK_ZONES.forEach((blk) => {
        if (blk.corridorId === train.corridorId) {
          const blkPoint = TurfEngine.point([blk.center.lng, blk.center.lat]);
          const d = TurfEngine.distance(trainPoint, blkPoint, { units: "kilometers" });
          if (d < minDistanceKm) {
            minDistanceKm = d;
          }
        }
      });

      // Adjust speed dynamically when approaching block zone
      if (minDistanceKm < 2.5) {
        train.speed = Math.max(25, train.speed - 0.4);
        train.signal = "Restrictive (Caution 30 km/h)";
      } else if (minDistanceKm < 6.0) {
        train.signal = "Single Yellow (Caution Work Ahead)";
      } else {
        train.signal = "Double Green";
        // Restore standard operating speed
        if (train.type === "EXPRESS") train.speed = Math.min(105, train.speed + 0.2);
        else if (train.type === "SUBURBAN") train.speed = Math.min(75, train.speed + 0.2);
        else train.speed = Math.min(45, train.speed + 0.1);
      }

      // Advance along polyline based on elapsed time fraction
      train.progress += train.speedStep * (deltaSeconds * 2.5);
      if (train.progress >= 1) {
        train.progress = 0.02; // Loop back
      }
    });

    // Refresh telemetry inspector
    if (this.selectedTrainId) {
      this.updateInspector(this.selectedTrainId);
    }
  }

  // Update moving train markers using Leaflet's .setLatLng()
  updateMovingMarkers() {
    if (!this.map || !this.showTrains) return;

    this.getFilteredTrains().forEach((train) => {
      const { lat, lng, heading } = this.calculateTrainStateWithTurf(train);
      const wrap = this.layers.trains.get(train.id);

      if (wrap && wrap.marker) {
        // Update marker position using .setLatLng()
        wrap.marker.setLatLng([lat, lng]);
        wrap.heading = heading;

        const el = document.getElementById(`train-marker-${train.id}`);
        if (el) {
          const iconWrap = el.querySelector(".train-icon-wrap");
          if (iconWrap) {
            iconWrap.style.transform = `rotate(${Math.round(heading)}deg)`;
          }
          const speedTxt = el.querySelector(".train-speed-txt");
          if (speedTxt) {
            speedTxt.textContent = `${Math.round(train.speed)} km/h`;
          }
          if (train.signal && (train.signal.includes("Restrictive") || train.signal.includes("Yellow"))) {
            el.classList.add("status-caution");
          } else {
            el.classList.remove("status-caution");
          }
        }
      } else {
        this.renderTrainMarkers();
      }
    });
  }

  updateCenterCoordinateText() {
    const coordsEl = document.getElementById("map-center-coords");
    if (coordsEl && this.map) {
      const c = this.map.getCenter();
      coordsEl.textContent = `${c.lat.toFixed(4)}° N, ${c.lng.toFixed(4)}° E`;
    }
  }

  // ==========================================
  // UI FILTERS & INSPECTOR LOGIC
  // ==========================================
  getFilteredTrains() {
    return this.trains.filter((t) => {
      const matchCorridor = this.selectedCorridor === "ALL" || t.corridorId === this.selectedCorridor;
      const matchType = this.selectedTrainType === "ALL" || t.type === this.selectedTrainType;
      return matchCorridor && matchType;
    });
  }

  selectTrain(trainId) {
    this.selectedTrainId = trainId;
    const train = this.trains.find((t) => t.id === trainId);
    if (!train) return;

    this.updateInspector(trainId);
    this.renderFleetList();

    // Focus train in Leaflet
    const pos = this.getTrainPosition(train);
    if (this.map) {
      this.map.panTo([pos.lat, pos.lng], { animate: true });
    }

    // Highlight marker DOM
    document.querySelectorAll(".rail-train-marker").forEach((el) => el.classList.remove("selected"));
    const activeEl = document.getElementById(`train-marker-${trainId}`);
    if (activeEl) activeEl.classList.add("selected");
  }

  updateInspector(trainId) {
    const train = this.trains.find((t) => t.id === trainId);
    if (!train) return;

    const nameEl = document.getElementById("inspector-train-name");
    const typeEl = document.getElementById("inspector-train-type");
    const sectionEl = document.getElementById("inspector-train-section");
    const speedEl = document.getElementById("inspector-speed");
    const headingEl = document.getElementById("inspector-heading");
    const nextEl = document.getElementById("inspector-dist-next");
    const blockEl = document.getElementById("inspector-dist-block");
    const signalEl = document.getElementById("inspector-signal");
    const formulaEl = document.getElementById("inspector-geometry-formula");

    if (nameEl) nameEl.textContent = `${train.number} ${train.name}`;
    if (typeEl) {
      typeEl.textContent = train.type;
      typeEl.className = `badge ${
        train.type === "EXPRESS" ? "badge-medium" : train.type === "SUBURBAN" ? "badge-low" : "badge-high"
      }`;
    }

    const corridor = CORRIDORS_DATA[train.corridorId];
    if (sectionEl) {
      sectionEl.textContent = `Section: ${corridor ? corridor.name : train.corridorId} (${train.direction} Line)`;
    }

    if (speedEl) speedEl.textContent = `${Math.round(train.speed)} km/h`;

    const heading = Math.round(this.getTrainHeading(train));
    if (headingEl) {
      const cardinal =
        heading >= 315 || heading < 45
          ? "N"
          : heading >= 45 && heading < 135
          ? "E"
          : heading >= 135 && heading < 225
          ? "S"
          : "W";
      headingEl.textContent = `${String(heading).padStart(3, "0")}° ${cardinal}`;
    }

    // Distance to Nearest Station using Turf
    const pos = this.getTrainPosition(train);
    const trainPt = TurfEngine.point([pos.lng, pos.lat]);
    let nearestSt = null;
    let minStDistKm = Infinity;
    if (corridor && corridor.stations) {
      corridor.stations.forEach((st) => {
        const d = TurfEngine.distance(trainPt, TurfEngine.point([st.pos.lng, st.pos.lat]), {
          units: "kilometers"
        });
        if (d < minStDistKm) {
          minStDistKm = d;
          nearestSt = st;
        }
      });
    }

    if (nextEl && nearestSt) {
      nextEl.textContent = `${nearestSt.name} (${minStDistKm.toFixed(1)} km)`;
    }

    // Distance to Nearest Active Block Zone using Turf
    let nearestBlk = null;
    let minBlkDistKm = Infinity;
    ACTIVE_BLOCK_ZONES.forEach((blk) => {
      if (blk.corridorId === train.corridorId) {
        const d = TurfEngine.distance(trainPt, TurfEngine.point([blk.center.lng, blk.center.lat]), {
          units: "kilometers"
        });
        if (d < minBlkDistKm) {
          minBlkDistKm = d;
          nearestBlk = blk;
        }
      }
    });

    if (blockEl) {
      if (minBlkDistKm < 3.0) {
        blockEl.textContent = `${minBlkDistKm.toFixed(1)} km (Active Worksite)`;
        blockEl.style.color = "var(--color-red)";
      } else if (minBlkDistKm < 8.0) {
        blockEl.textContent = `${minBlkDistKm.toFixed(1)} km (Caution Ahead)`;
        blockEl.style.color = "var(--color-amber)";
      } else {
        blockEl.textContent = `${minBlkDistKm.toFixed(1)} km (Clear Buffer)`;
        blockEl.style.color = "var(--color-green)";
      }
    }

    if (signalEl) {
      const isGreen = train.signal === "Double Green";
      const isYellow = train.signal.includes("Yellow");
      signalEl.style.color = isGreen ? "var(--color-green)" : isYellow ? "var(--color-amber)" : "var(--color-red)";
      signalEl.innerHTML = `
        <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: currentColor;"></span>
        ${train.signal}
      `;
    }

    if (formulaEl) {
      formulaEl.innerHTML = `
        <strong>turf.distance &amp; turf.along:</strong> Separated by <strong>${minBlkDistKm.toFixed(
          2
        )} km</strong> from block zone ${nearestBlk ? nearestBlk.reqId : "N/A"}. Track orientation: <strong>${heading}°</strong>.
      `;
    }
  }

  renderFleetList() {
    const listContainer = document.getElementById("corridor-train-list-container");
    const countBadge = document.getElementById("fleet-count-badge");
    if (!listContainer) return;

    const visibleTrains = this.getFilteredTrains();
    if (countBadge) countBadge.textContent = `${visibleTrains.length} Trains`;

    listContainer.innerHTML = "";
    visibleTrains.forEach((t) => {
      const row = document.createElement("div");
      row.className = `corridor-train-row ${t.id === this.selectedTrainId ? "active" : ""}`;
      row.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px;">
          <div style="width: 26px; height: 26px; border-radius: 6px; background: var(--color-sidebar-hover); display: flex; align-items: center; justify-content: center; font-size: 11px; color: var(--color-railway-blue);">
            <i class="fa-solid fa-train"></i>
          </div>
          <div>
            <div style="font-weight: 700; font-size: 12.5px; color: var(--color-navy);">${t.number}</div>
            <div style="font-size: 11px; color: var(--color-text-muted);">${t.name}</div>
          </div>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 12.5px; font-weight: 700; color: var(--color-navy);">${Math.round(t.speed)} km/h</div>
          <span style="font-size: 10px; color: ${
            t.signal.includes("Green")
              ? "var(--color-green)"
              : t.signal.includes("Yellow")
              ? "var(--color-amber)"
              : "var(--color-red)"
          }; font-weight: 600;">${t.signal.split(" ")[0]}</span>
        </div>
      `;

      row.addEventListener("click", () => {
        this.selectTrain(t.id);
      });

      listContainer.appendChild(row);
    });
  }

  updateGeometryMetrics() {
    // 1. Total Corridor Track KM using Turf
    let totalKm = 0;
    if (this.selectedCorridor === "ALL") {
      Object.values(CORRIDORS_DATA).forEach((c) => {
        const line = TurfEngine.lineString(c.path.map((p) => [p.lng, p.lat]));
        totalKm += TurfEngine.length(line, { units: "kilometers" });
      });
    } else if (CORRIDORS_DATA[this.selectedCorridor]) {
      const c = CORRIDORS_DATA[this.selectedCorridor];
      const line = TurfEngine.lineString(c.path.map((p) => [p.lng, p.lat]));
      totalKm = TurfEngine.length(line, { units: "kilometers" });
    }
    const trackKmEl = document.getElementById("val-corridor-track-km");
    if (trackKmEl) {
      trackKmEl.textContent = `${totalKm.toFixed(1)} km`;
    }

    // 2. Active Trains
    const trainsCountEl = document.getElementById("val-corridor-active-trains");
    if (trainsCountEl) {
      trainsCountEl.textContent = `${this.getFilteredTrains().length} Trains`;
    }

    // 3. Active Blocks
    const activeBlocksCount =
      this.selectedCorridor === "ALL"
        ? ACTIVE_BLOCK_ZONES.length
        : ACTIVE_BLOCK_ZONES.filter((b) => b.corridorId === this.selectedCorridor).length;
    const blocksCountEl = document.getElementById("val-corridor-active-blocks");
    if (blocksCountEl) {
      blocksCountEl.textContent = `${activeBlocksCount} Section${activeBlocksCount === 1 ? "" : "s"}`;
    }

    // 4. Global minimum proximity to maintenance blocks using Turf
    let globalMinDistanceKm = Infinity;
    const visibleTrains = this.getFilteredTrains();
    visibleTrains.forEach((train) => {
      const pos = this.getTrainPosition(train);
      const trainPt = TurfEngine.point([pos.lng, pos.lat]);
      ACTIVE_BLOCK_ZONES.forEach((blk) => {
        if (blk.corridorId === train.corridorId) {
          const d = TurfEngine.distance(trainPt, TurfEngine.point([blk.center.lng, blk.center.lat]), {
            units: "kilometers"
          });
          if (d < globalMinDistanceKm) globalMinDistanceKm = d;
        }
      });
    });

    const proximityEl = document.getElementById("val-corridor-nearest-proximity");
    const proximityStatusEl = document.getElementById("val-corridor-proximity-status");
    if (proximityEl && globalMinDistanceKm !== Infinity) {
      proximityEl.textContent = `${globalMinDistanceKm.toFixed(1)} km`;
      if (proximityStatusEl) {
        if (globalMinDistanceKm < 3.0) {
          proximityStatusEl.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Worksite Caution Zone`;
          proximityStatusEl.style.color = "var(--color-red)";
        } else if (globalMinDistanceKm < 8.0) {
          proximityStatusEl.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Approaching Worksite`;
          proximityStatusEl.style.color = "var(--color-amber)";
        } else {
          proximityStatusEl.innerHTML = `<i class="fa-solid fa-shield-check"></i> Safe Spatial Separation`;
          proximityStatusEl.style.color = "var(--color-green)";
        }
      }
    }
  }

  bindUIEvents() {
    // Corridor selector dropdown
    const corridorSelect = document.getElementById("corridor-select");
    if (corridorSelect) {
      corridorSelect.addEventListener("change", (e) => {
        this.selectedCorridor = e.target.value;
        this.onFilterChange();
      });
    }

    // Train type filter
    const typeSelect = document.getElementById("train-type-filter");
    if (typeSelect) {
      typeSelect.addEventListener("change", (e) => {
        this.selectedTrainType = e.target.value;
        this.onFilterChange();
      });
    }

    // Checkbox toggles
    const chkBlocks = document.getElementById("chk-show-blocks");
    if (chkBlocks) {
      chkBlocks.addEventListener("change", (e) => {
        this.showBlocks = e.target.checked;
        this.renderBlocks();
      });
    }

    const chkStations = document.getElementById("chk-show-stations");
    if (chkStations) {
      chkStations.addEventListener("change", (e) => {
        this.showStations = e.target.checked;
        this.renderStations();
      });
    }

    // Simulation play/pause
    const btnPlay = document.getElementById("btn-toggle-sim-trains");
    const playIcon = document.getElementById("sim-play-icon");
    const playText = document.getElementById("sim-play-text");
    if (btnPlay) {
      btnPlay.addEventListener("click", () => {
        this.simRunning = !this.simRunning;
        if (this.simRunning) {
          if (playIcon) playIcon.className = "fa-solid fa-pause";
          if (playText) playText.textContent = "Pause Motion";
        } else {
          if (playIcon) playIcon.className = "fa-solid fa-play";
          if (playText) playText.textContent = "Resume Motion";
        }
      });
    }

    // Simulation speed buttons
    const speedButtons = document.querySelectorAll(".sim-speed-btn");
    speedButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        speedButtons.forEach((b) => {
          b.classList.remove("active");
          b.style.background = "transparent";
          b.style.color = "var(--color-navy)";
        });
        btn.classList.add("active");
        btn.style.background = "var(--color-railway-blue)";
        btn.style.color = "#ffffff";
        this.simSpeed = parseFloat(btn.getAttribute("data-speed") || "1");
      });
    });

    // Recenter Map
    const btnRecenter = document.getElementById("btn-recenter-map");
    if (btnRecenter) {
      btnRecenter.addEventListener("click", () => {
        this.resetMapView();
      });
    }

    // Fullscreen Toggle
    const btnFullscreen = document.getElementById("btn-toggle-fullscreen");
    const mapWrapper = document.getElementById("corridor-map-wrapper");
    if (btnFullscreen && mapWrapper) {
      btnFullscreen.addEventListener("click", () => {
        mapWrapper.classList.toggle("fullscreen-mode");
        const isFull = mapWrapper.classList.contains("fullscreen-mode");
        btnFullscreen.innerHTML = isFull
          ? '<i class="fa-solid fa-compress"></i> Exit'
          : '<i class="fa-solid fa-expand"></i> Fullscreen';

        setTimeout(() => {
          if (this.map) this.map.invalidateSize();
        }, 100);
      });
    }

    // Map Settings Modal
    const modalSettings = document.getElementById("modal-map-settings");
    const btnOpenSettings = document.getElementById("btn-map-layer-settings");
    const statusBadge = document.getElementById("map-api-status-badge");
    const selectBasemap = document.getElementById("select-basemap-layer");
    const modalToggleBlocks = document.getElementById("modal-toggle-blocks");
    const modalToggleStations = document.getElementById("modal-toggle-stations");
    const modalToggleTrains = document.getElementById("modal-toggle-trains");
    const btnResetView = document.getElementById("btn-reset-map-view");

    const openSettingsModal = () => {
      if (!modalSettings) return;
      if (modalToggleBlocks) modalToggleBlocks.checked = this.showBlocks;
      if (modalToggleStations) modalToggleStations.checked = this.showStations;
      if (modalToggleTrains) modalToggleTrains.checked = this.showTrains;
      modalSettings.style.display = "flex";
    };

    if (btnOpenSettings) btnOpenSettings.addEventListener("click", openSettingsModal);
    if (statusBadge) statusBadge.addEventListener("click", openSettingsModal);

    if (selectBasemap) {
      selectBasemap.addEventListener("change", (e) => {
        this.setBasemap(e.target.value);
        if (window.showToast) {
          window.showToast(`Switched basemap to ${e.target.options[e.target.selectedIndex].text}`, "info", 2500);
        }
      });
    }

    if (modalToggleBlocks) {
      modalToggleBlocks.addEventListener("change", (e) => {
        this.showBlocks = e.target.checked;
        const mainChk = document.getElementById("chk-show-blocks");
        if (mainChk) mainChk.checked = this.showBlocks;
        this.renderBlocks();
      });
    }

    if (modalToggleStations) {
      modalToggleStations.addEventListener("change", (e) => {
        this.showStations = e.target.checked;
        const mainChk = document.getElementById("chk-show-stations");
        if (mainChk) mainChk.checked = this.showStations;
        this.renderStations();
      });
    }

    if (modalToggleTrains) {
      modalToggleTrains.addEventListener("change", (e) => {
        this.showTrains = e.target.checked;
        this.renderTrainMarkers();
      });
    }

    if (btnResetView) {
      btnResetView.addEventListener("click", () => {
        this.resetMapView();
        if (modalSettings) modalSettings.style.display = "none";
      });
    }
  }

  resetMapView() {
    if (!this.map) return;
    if (this.selectedCorridor !== "ALL" && CORRIDORS_DATA[this.selectedCorridor]) {
      const c = CORRIDORS_DATA[this.selectedCorridor];
      this.map.setView([c.center.lat, c.center.lng], c.zoom, { animate: true });
    } else {
      const allPoints = [];
      Object.values(CORRIDORS_DATA).forEach((c) => {
        c.path.forEach((pt) => allPoints.push([pt.lat, pt.lng]));
      });
      if (allPoints.length > 0) {
        this.map.fitBounds(allPoints, { padding: [40, 40], animate: true });
      } else {
        this.map.setView([19.2437, 73.1355], 10, { animate: true });
      }
    }
  }

  onFilterChange() {
    this.updateGeometryMetrics();
    this.renderFleetList();
    this.renderPolylines();
    this.renderStations();
    this.renderBlocks();
    this.renderTrainMarkers();
    this.resetMapView();
  }

  // Triggered when tab becomes active
  onPageActivated() {
    if (this.map) {
      setTimeout(() => {
        this.map.invalidateSize();
        this.updateCenterCoordinateText();
      }, 60);
    }
  }
}

// Global Singleton
let corridorEngineInstance = null;

export function initCorridorTracking() {
  if (!corridorEngineInstance) {
    corridorEngineInstance = new CorridorTrackingEngine();
    corridorEngineInstance.initialize();
  } else {
    corridorEngineInstance.onPageActivated();
  }
  return corridorEngineInstance;
}

window.initCorridorTracking = initCorridorTracking;
