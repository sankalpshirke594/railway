// ==========================================
// YUKTI RAIL - LIVE CORRIDOR TRACKING MODULE
// Integrates Google Maps Platform & Geometry Library
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

// Mathematical Geodesic Fallback Engine (Great Circle Math)
// Provides identical behavior to google.maps.geometry.spherical if API key is not supplied
export const GeometryMath = {
  toRad: (deg) => (deg * Math.PI) / 180,
  toDeg: (rad) => (rad * 180) / Math.PI,
  EARTH_RADIUS: 6378137, // WGS84 standard earth radius in meters

  // Calculates distance in meters between two lat/lng coords
  computeDistanceBetween: (p1, p2) => {
    const lat1 = GeometryMath.toRad(p1.lat || p1.lat());
    const lat2 = GeometryMath.toRad(p2.lat || p2.lat());
    const dLat = lat2 - lat1;
    const dLng = GeometryMath.toRad((p2.lng || p2.lng()) - (p1.lng || p1.lng()));

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return GeometryMath.EARTH_RADIUS * c;
  },

  // Calculates total length of a polyline in meters
  computeLength: (path) => {
    if (!path || path.length < 2) return 0;
    let total = 0;
    for (let i = 0; i < path.length - 1; i++) {
      total += GeometryMath.computeDistanceBetween(path[i], path[i + 1]);
    }
    return total;
  },

  // Calculates initial forward heading/bearing from p1 to p2 in degrees (0 - 360)
  computeHeading: (p1, p2) => {
    const lat1 = GeometryMath.toRad(p1.lat || p1.lat());
    const lat2 = GeometryMath.toRad(p2.lat || p2.lat());
    const dLng = GeometryMath.toRad((p2.lng || p2.lng()) - (p1.lng || p1.lng()));

    const y = Math.sin(dLng) * Math.cos(lat2);
    const x =
      Math.cos(lat1) * Math.sin(lat2) -
      Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLng);
    let brng = GeometryMath.toDeg(Math.atan2(y, x));
    return (brng + 360) % 360;
  },

  // Spherical interpolation between two points given fraction 0..1
  interpolate: (p1, p2, fraction) => {
    const lat1 = GeometryMath.toRad(p1.lat || p1.lat());
    const lng1 = GeometryMath.toRad(p1.lng || p1.lng());
    const lat2 = GeometryMath.toRad(p2.lat || p2.lat());
    const lng2 = GeometryMath.toRad(p2.lng || p2.lng());

    const d = GeometryMath.computeDistanceBetween(p1, p2) / GeometryMath.EARTH_RADIUS;
    if (d < 1e-7) return { lat: p1.lat || p1.lat(), lng: p1.lng || p1.lng() };

    const A = Math.sin((1 - fraction) * d) / Math.sin(d);
    const B = Math.sin(fraction * d) / Math.sin(d);

    const x = A * Math.cos(lat1) * Math.cos(lng1) + B * Math.cos(lat2) * Math.cos(lng2);
    const y = A * Math.cos(lat1) * Math.sin(lng1) + B * Math.cos(lat2) * Math.sin(lng2);
    const z = A * Math.sin(lat1) + B * Math.sin(lat2);

    const lat = Math.atan2(z, Math.sqrt(x * x + y * y));
    const lng = Math.atan2(y, x);

    return {
      lat: GeometryMath.toDeg(lat),
      lng: GeometryMath.toDeg(lng)
    };
  }
};

// ==========================================
// CORRIDOR CONTROLLER & SIMULATOR CLASS
// ==========================================
class CorridorTrackingEngine {
  constructor() {
    this.map = null;
    this.googleMaps = null;
    this.geometrySpherical = null;
    this.isNativeMaps = false;

    this.selectedCorridor = "ALL";
    this.selectedTrainType = "ALL";
    this.showBlocks = true;
    this.showStations = true;

    this.simSpeed = 1;
    this.simRunning = true;
    this.animationFrameId = null;

    this.trains = JSON.parse(JSON.stringify(INITIAL_TRAINS));
    this.selectedTrainId = "T101";

    // Google Maps Markers & Overlays
    this.markers = {
      trains: new Map(),
      stations: [],
      blocks: [],
      polylines: []
    };

    // Canvas fallback rendering state
    this.canvas = null;
    this.ctx = null;
    this.canvasCenter = { lat: 19.2437, lng: 73.1355 };
    this.canvasZoom = 9.5;
  }

  async initialize() {
    this.bindUIEvents();
    this.renderFleetList();
    this.updateInspector(this.selectedTrainId);
    this.updateGeometryMetrics();

    // Check for Google Maps API Key
    const apiKey =
      (typeof import.meta !== "undefined" &&
        import.meta.env &&
        import.meta.env.VITE_GOOGLE_MAPS_API_KEY) ||
      window.VITE_GOOGLE_MAPS_API_KEY ||
      "";

    const canvasContainer = document.getElementById("corridor-map-canvas");
    if (!canvasContainer) return;

    if (apiKey && apiKey.trim().length > 5) {
      try {
        await this.loadGoogleMaps(apiKey.trim());
        return;
      } catch (err) {
        console.warn("Google Maps load attempt error, activating vector canvas:", err);
      }
    }

    // Fallback to Interactive Rail Vector Canvas with full telemetry & geometry math
    this.initVectorFallback();
    this.startSimulationLoop();
  }

  async loadGoogleMaps(apiKey) {
    const statusBadge = document.getElementById("map-api-status-badge");
    if (statusBadge) {
      statusBadge.textContent = "Connecting Google Maps API...";
      statusBadge.style.color = "#0284c7";
    }

    // Modern Bootstrap Dynamic Loading Pattern with attribution id
    await new Promise((resolve, reject) => {
      if (window.google && window.google.maps && window.google.maps.importLibrary) {
        return resolve();
      }

      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(
        apiKey
      )}&v=weekly&libraries=geometry,maps,marker&internal_usage_attribution_ids=gmp_mcp_codeassist_v1_aistudio`;
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = (e) => reject(e);
      document.head.appendChild(script);
    });

    this.googleMaps = window.google.maps;
    const { Map } = await this.googleMaps.importLibrary("maps");
    const { AdvancedMarkerElement } = await this.googleMaps.importLibrary("marker");
    const { spherical } = await this.googleMaps.importLibrary("geometry");

    this.geometrySpherical = spherical;
    this.isNativeMaps = true;

    if (statusBadge) {
      statusBadge.textContent = "● Google Maps Active (DEMO_MAP_ID)";
      statusBadge.style.color = "var(--color-green)";
      statusBadge.style.background = "var(--color-green-light)";
    }

    const container = document.getElementById("corridor-map-canvas");
    container.innerHTML = ""; // Clear fallback

    // CF2 & CF9: Explicit height and mapId
    this.map = new Map(container, {
      center: { lat: 19.2437, lng: 73.1355 },
      zoom: 10,
      mapId: "DEMO_MAP_ID",
      mapTypeId: "terrain",
      streetViewControl: false,
      fullscreenControl: true,
      mapTypeControl: true,
      zoomControl: true,
      styles: [
        {
          featureType: "transit.line",
          elementType: "geometry",
          stylers: [{ color: "#1e3a8a" }, { weight: 3 }]
        }
      ]
    });

    this.renderGoogleMapsPolylines();
    this.renderGoogleMapsStations(AdvancedMarkerElement);
    this.renderGoogleMapsBlocks(AdvancedMarkerElement);
    this.renderGoogleMapsTrainMarkers(AdvancedMarkerElement);

    this.startSimulationLoop();
  }

  renderGoogleMapsPolylines() {
    if (!this.map || !this.googleMaps) return;

    // Clear previous
    this.markers.polylines.forEach((p) => p.setMap(null));
    this.markers.polylines = [];

    const corridorsToRender =
      this.selectedCorridor === "ALL"
        ? Object.values(CORRIDORS_DATA)
        : [CORRIDORS_DATA[this.selectedCorridor]].filter(Boolean);

    corridorsToRender.forEach((corridor) => {
      // Base Rail Track Polyline
      const line = new this.googleMaps.Polyline({
        path: corridor.path,
        geodesic: true,
        strokeColor: corridor.color,
        strokeOpacity: 0.9,
        strokeWeight: 5,
        map: this.map
      });

      // Railroad Ties Dashed Polyline
      const tieLine = new this.googleMaps.Polyline({
        path: corridor.path,
        geodesic: true,
        strokeColor: "#ffffff",
        strokeOpacity: 0.6,
        strokeWeight: 2,
        strokePattern: [10, 8],
        map: this.map
      });

      this.markers.polylines.push(line, tieLine);
    });
  }

  renderGoogleMapsStations(AdvancedMarkerElement) {
    if (!this.map) return;
    this.markers.stations.forEach((m) => (m.map = null));
    this.markers.stations = [];

    if (!this.showStations) return;

    const corridors =
      this.selectedCorridor === "ALL"
        ? Object.values(CORRIDORS_DATA)
        : [CORRIDORS_DATA[this.selectedCorridor]].filter(Boolean);

    corridors.forEach((c) => {
      c.stations.forEach((st) => {
        const pinEl = document.createElement("div");
        pinEl.className = "rail-station-pin";
        pinEl.innerHTML = `<i class="fa-solid fa-building-flag"></i> ${st.code} - ${st.name}`;

        const marker = new AdvancedMarkerElement({
          map: this.map,
          position: st.pos,
          title: `${st.name} (${st.code})`,
          content: pinEl
        });

        marker.addListener("click", () => {
          this.map.panTo(st.pos);
          this.map.setZoom(12);
        });

        this.markers.stations.push(marker);
      });
    });
  }

  renderGoogleMapsBlocks(AdvancedMarkerElement) {
    if (!this.map) return;
    this.markers.blocks.forEach((m) => {
      if (m.setMap) m.setMap(null);
      if (m.map !== undefined) m.map = null;
    });
    this.markers.blocks = [];

    if (!this.showBlocks) return;

    const blocks =
      this.selectedCorridor === "ALL"
        ? ACTIVE_BLOCK_ZONES
        : ACTIVE_BLOCK_ZONES.filter((b) => b.corridorId === this.selectedCorridor);

    blocks.forEach((blk) => {
      // Highlighted dashed line for block zone
      const poly = new this.googleMaps.Polyline({
        path: blk.path,
        geodesic: true,
        strokeColor: "#dc2626",
        strokeOpacity: 0.95,
        strokeWeight: 7,
        map: this.map
      });

      // Hazard Pin Marker at center
      const hazardEl = document.createElement("div");
      hazardEl.className = "rail-block-hazard-pin";
      hazardEl.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> ${blk.reqId} (${blk.cautionSpeed})`;

      const marker = new AdvancedMarkerElement({
        map: this.map,
        position: blk.center,
        title: `${blk.title} - Caution Speed: ${blk.cautionSpeed}`,
        content: hazardEl
      });

      marker.addListener("click", () => {
        if (window.showToast) {
          window.showToast(
            `Block Zone ${blk.reqId}: ${blk.title}. Enforced speed limit: ${blk.cautionSpeed}. Dept: ${blk.department}.`,
            "warning",
            4000
          );
        }
      });

      this.markers.blocks.push(poly, marker);
    });
  }

  renderGoogleMapsTrainMarkers(AdvancedMarkerElement) {
    if (!this.map) return;

    // Filter trains
    const visibleTrains = this.getFilteredTrains();

    visibleTrains.forEach((train) => {
      const pos = this.getTrainPosition(train);
      const heading = this.getTrainHeading(train);

      let markerWrap = this.markers.trains.get(train.id);
      if (!markerWrap) {
        const el = document.createElement("div");
        el.className = `rail-train-marker ${
          train.id === this.selectedTrainId ? "selected" : ""
        }`;
        el.id = `train-marker-${train.id}`;
        el.innerHTML = `
          <div class="train-icon-wrap" style="transform: rotate(${Math.round(
            heading
          )}deg);">
            <i class="fa-solid fa-train"></i>
          </div>
          <div style="display: flex; flex-direction: column; line-height: 1.1;">
            <span>${train.number}</span>
            <span style="font-size: 8.5px; opacity: 0.85;">${train.speed} km/h</span>
          </div>
        `;

        el.addEventListener("click", () => {
          this.selectTrain(train.id);
        });

        const marker = new AdvancedMarkerElement({
          map: this.map,
          position: pos,
          title: `${train.number} ${train.name}`,
          content: el
        });

        this.markers.trains.set(train.id, { marker, el });
      } else {
        markerWrap.marker.position = pos;
        const iconWrap = markerWrap.el.querySelector(".train-icon-wrap");
        if (iconWrap) {
          iconWrap.style.transform = `rotate(${Math.round(heading)}deg)`;
        }
        if (train.id === this.selectedTrainId) {
          markerWrap.el.classList.add("selected");
        } else {
          markerWrap.el.classList.remove("selected");
        }
      }
    });

    // Remove trains no longer visible
    for (const [id, wrap] of this.markers.trains.entries()) {
      if (!visibleTrains.find((t) => t.id === id)) {
        wrap.marker.map = null;
        this.markers.trains.delete(id);
      }
    }
  }

  // ==========================================
  // MATHEMATICAL GEOMETRY COMPILATION
  // Uses google.maps.geometry.spherical if available, or GeometryMath fallback
  // ==========================================
  computeLength(path) {
    if (this.geometrySpherical && this.geometrySpherical.computeLength) {
      return this.geometrySpherical.computeLength(path);
    }
    return GeometryMath.computeLength(path);
  }

  computeDistanceBetween(p1, p2) {
    if (this.geometrySpherical && this.geometrySpherical.computeDistanceBetween) {
      return this.geometrySpherical.computeDistanceBetween(p1, p2);
    }
    return GeometryMath.computeDistanceBetween(p1, p2);
  }

  computeHeading(p1, p2) {
    if (this.geometrySpherical && this.geometrySpherical.computeHeading) {
      return this.geometrySpherical.computeHeading(p1, p2);
    }
    return GeometryMath.computeHeading(p1, p2);
  }

  interpolate(p1, p2, fraction) {
    if (this.geometrySpherical && this.geometrySpherical.interpolate) {
      const pt = this.geometrySpherical.interpolate(p1, p2, fraction);
      return { lat: pt.lat(), lng: pt.lng() };
    }
    return GeometryMath.interpolate(p1, p2, fraction);
  }

  getTrainPosition(train) {
    const corridor = CORRIDORS_DATA[train.corridorId];
    if (!corridor || !corridor.path || corridor.path.length < 2) {
      return { lat: 19.2437, lng: 73.1355 };
    }

    const path = corridor.path;
    const numSegments = path.length - 1;
    const progress = Math.max(0, Math.min(0.999, train.progress));
    const segmentIndex = Math.min(Math.floor(progress * numSegments), numSegments - 1);
    const segmentFraction = progress * numSegments - segmentIndex;

    const p1 = path[segmentIndex];
    const p2 = path[segmentIndex + 1];

    return this.interpolate(p1, p2, segmentFraction);
  }

  getTrainHeading(train) {
    const corridor = CORRIDORS_DATA[train.corridorId];
    if (!corridor || !corridor.path || corridor.path.length < 2) return 0;

    const path = corridor.path;
    const numSegments = path.length - 1;
    const progress = Math.max(0, Math.min(0.999, train.progress));
    const segmentIndex = Math.min(Math.floor(progress * numSegments), numSegments - 1);

    const p1 = path[segmentIndex];
    const p2 = path[segmentIndex + 1];

    return this.computeHeading(p1, p2);
  }

  // ==========================================
  // REAL-TIME TRAIN SIMULATION
  // ==========================================
  startSimulationLoop() {
    let lastTime = performance.now();

    const loop = (currentTime) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      if (this.simRunning) {
        this.stepSimulation(delta * this.simSpeed);
      }

      if (!this.isNativeMaps) {
        this.drawVectorCanvas();
      } else {
        this.updateNativeMarkers();
      }

      this.animationFrameId = requestAnimationFrame(loop);
    };

    this.animationFrameId = requestAnimationFrame(loop);
  }

  stepSimulation(deltaSeconds) {
    this.trains.forEach((train) => {
      // Check proximity to active blocks
      const currentPos = this.getTrainPosition(train);
      let minDistanceToBlock = Infinity;

      ACTIVE_BLOCK_ZONES.forEach((blk) => {
        if (blk.corridorId === train.corridorId) {
          const dist = this.computeDistanceBetween(currentPos, blk.center);
          if (dist < minDistanceToBlock) {
            minDistanceToBlock = dist;
          }
        }
      });

      // Adjust speed dynamically when approaching block zone
      if (minDistanceToBlock < 2500) {
        train.speed = Math.max(25, train.speed - 0.4);
        train.signal = "Restrictive (Caution 30 km/h)";
      } else if (minDistanceToBlock < 6000) {
        train.signal = "Single Yellow (Caution Work Ahead)";
      } else {
        train.signal = "Double Green";
        // Restore standard operating speed
        if (train.type === "EXPRESS") train.speed = Math.min(105, train.speed + 0.2);
        else if (train.type === "SUBURBAN") train.speed = Math.min(75, train.speed + 0.2);
        else train.speed = Math.min(45, train.speed + 0.1);
      }

      // Advance along polyline
      train.progress += train.speedStep * (deltaSeconds * 2.5);
      if (train.progress >= 1) {
        train.progress = 0.02; // Loop back
      }
    });

    // Refresh active inspector if selected
    if (this.selectedTrainId) {
      this.updateInspector(this.selectedTrainId);
    }
  }

  updateNativeMarkers() {
    if (!this.isNativeMaps) return;

    this.getFilteredTrains().forEach((train) => {
      const wrap = this.markers.trains.get(train.id);
      if (wrap) {
        const pos = this.getTrainPosition(train);
        const heading = this.getTrainHeading(train);
        wrap.marker.position = pos;

        const iconWrap = wrap.el.querySelector(".train-icon-wrap");
        if (iconWrap) {
          iconWrap.style.transform = `rotate(${Math.round(heading)}deg)`;
        }

        const speedText = wrap.el.querySelector("span:last-child");
        if (speedText) {
          speedText.textContent = `${Math.round(train.speed)} km/h`;
        }

        if (train.signal.includes("Restrictive") || train.signal.includes("Yellow")) {
          wrap.el.classList.add("status-caution");
        } else {
          wrap.el.classList.remove("status-caution");
        }
      }
    });
  }

  // ==========================================
  // HIGH-FIDELITY VECTOR CANVAS ENGINE (FAILSAFE)
  // Renders vector railway network, stations, and trains seamlessly
  // ==========================================
  initVectorFallback() {
    const fallbackBox = document.getElementById("corridor-map-fallback");
    if (fallbackBox) {
      fallbackBox.style.display = "flex";
    }

    this.canvas = document.getElementById("fallback-corridor-canvas");
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");

    const resizeCanvas = () => {
      const rect = this.canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      this.canvas.width = rect.width * dpr;
      this.canvas.height = rect.height * dpr;
      this.ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Enable Pan and Zoom interactions on the vector canvas
    let isDragging = false;
    let lastX = 0;
    let lastY = 0;

    this.canvas.addEventListener("mousedown", (e) => {
      isDragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
    });

    window.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;

      const scale = Math.pow(2, this.canvasZoom) * 256;
      const dLng = (-dx / scale) * 360;
      const dLat = (dy / scale) * 180;

      this.canvasCenter.lng += dLng;
      this.canvasCenter.lat += dLat;
      this.updateCenterCoordinateText();
    });

    window.addEventListener("mouseup", () => {
      isDragging = false;
    });

    this.canvas.addEventListener("wheel", (e) => {
      e.preventDefault();
      const zoomFactor = e.deltaY < 0 ? 0.2 : -0.2;
      this.canvasZoom = Math.max(7.5, Math.min(14, this.canvasZoom + zoomFactor));
    });

    // Train Selection on Click
    this.canvas.addEventListener("click", (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      const visibleTrains = this.getFilteredTrains();
      for (const t of visibleTrains) {
        const pos = this.getTrainPosition(t);
        const pt = this.projectLatLng(pos.lat, pos.lng);
        const dist = Math.hypot(clickX - pt.x, clickY - pt.y);
        if (dist < 22) {
          this.selectTrain(t.id);
          return;
        }
      }
    });

    this.updateCenterCoordinateText();
  }

  projectLatLng(lat, lng) {
    if (!this.canvas) return { x: 0, y: 0 };
    const rect = this.canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Web Mercator Forward Projection centered at this.canvasCenter
    const zoom = this.canvasZoom;
    const scale = (256 * Math.pow(2, zoom)) / (2 * Math.PI);

    const centerLatRad = GeometryMath.toRad(this.canvasCenter.lat);
    const centerLngRad = GeometryMath.toRad(this.canvasCenter.lng);
    const centerWorldX = scale * (centerLngRad + Math.PI);
    const centerWorldY =
      scale * (Math.PI - Math.log(Math.tan(Math.PI / 4 + centerLatRad / 2)));

    const latRad = GeometryMath.toRad(lat);
    const lngRad = GeometryMath.toRad(lng);
    const worldX = scale * (lngRad + Math.PI);
    const worldY = scale * (Math.PI - Math.log(Math.tan(Math.PI / 4 + latRad / 2)));

    return {
      x: width / 2 + (worldX - centerWorldX),
      y: height / 2 + (worldY - centerWorldY)
    };
  }

  drawVectorCanvas() {
    if (!this.ctx || !this.canvas) return;
    const rect = this.canvas.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;

    // Dark Railway Operations Canvas Background
    this.ctx.fillStyle = "#0a1322";
    this.ctx.fillRect(0, 0, w, h);

    // Geographic Grid Lines
    this.ctx.strokeStyle = "rgba(56, 189, 248, 0.08)";
    this.ctx.lineWidth = 1;
    const gridStep = 60;
    for (let x = 0; x < w; x += gridStep) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, h);
      this.ctx.stroke();
    }
    for (let y = 0; y < h; y += gridStep) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(w, y);
      this.ctx.stroke();
    }

    // Topography Accents / Water Bodies (Arabian Sea & Ulhas River)
    this.ctx.fillStyle = "#071c35";
    this.ctx.beginPath();
    const seaPt = this.projectLatLng(18.9, 72.78);
    this.ctx.arc(seaPt.x, seaPt.y, 160, 0, Math.PI * 2);
    this.ctx.fill();

    // 1. Draw Corridors Polyline Tracks
    const corridors =
      this.selectedCorridor === "ALL"
        ? Object.values(CORRIDORS_DATA)
        : [CORRIDORS_DATA[this.selectedCorridor]].filter(Boolean);

    corridors.forEach((c) => {
      if (!c.path || c.path.length < 2) return;

      // Track Bed Outer Glow
      this.ctx.strokeStyle = c.color + "33";
      this.ctx.lineWidth = 9;
      this.ctx.beginPath();
      c.path.forEach((pt, i) => {
        const p = this.projectLatLng(pt.lat, pt.lng);
        if (i === 0) this.ctx.moveTo(p.x, p.y);
        else this.ctx.lineTo(p.x, p.y);
      });
      this.ctx.stroke();

      // Track Rails
      this.ctx.strokeStyle = c.color;
      this.ctx.lineWidth = 4;
      this.ctx.beginPath();
      c.path.forEach((pt, i) => {
        const p = this.projectLatLng(pt.lat, pt.lng);
        if (i === 0) this.ctx.moveTo(p.x, p.y);
        else this.ctx.lineTo(p.x, p.y);
      });
      this.ctx.stroke();

      // Railway Sleeper Ties Dashed Center
      this.ctx.strokeStyle = "#ffffff";
      this.ctx.lineWidth = 1.8;
      this.ctx.setLineDash([6, 6]);
      this.ctx.stroke();
      this.ctx.setLineDash([]);
    });

    // 2. Draw Active Maintenance Block Overlays
    if (this.showBlocks) {
      const blocks =
        this.selectedCorridor === "ALL"
          ? ACTIVE_BLOCK_ZONES
          : ACTIVE_BLOCK_ZONES.filter((b) => b.corridorId === this.selectedCorridor);

      blocks.forEach((blk) => {
        this.ctx.strokeStyle = "#ef4444";
        this.ctx.lineWidth = 6;
        this.ctx.setLineDash([8, 6]);
        this.ctx.beginPath();
        blk.path.forEach((pt, i) => {
          const p = this.projectLatLng(pt.lat, pt.lng);
          if (i === 0) this.ctx.moveTo(p.x, p.y);
          else this.ctx.lineTo(p.x, p.y);
        });
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        // Block Warning Pin
        const centerPt = this.projectLatLng(blk.center.lat, blk.center.lng);
        this.ctx.fillStyle = "rgba(220, 38, 38, 0.95)";
        this.ctx.strokeStyle = "#fecaca";
        this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.roundRect(centerPt.x - 48, centerPt.y - 24, 96, 20, 4);
        this.ctx.fill();
        this.ctx.stroke();

        this.ctx.fillStyle = "#ffffff";
        this.ctx.font = "bold 10px sans-serif";
        this.ctx.textAlign = "center";
        this.ctx.fillText(`⚠ ${blk.reqId} (30km/h)`, centerPt.x, centerPt.y - 10);
      });
    }

    // 3. Draw Railway Stations
    if (this.showStations) {
      corridors.forEach((c) => {
        c.stations.forEach((st) => {
          const pt = this.projectLatLng(st.pos.lat, st.pos.lng);

          // Station Node Circle
          this.ctx.fillStyle = st.major ? "#38bdf8" : "#94a3b8";
          this.ctx.beginPath();
          this.ctx.arc(pt.x, pt.y, st.major ? 4.5 : 3, 0, Math.PI * 2);
          this.ctx.fill();

          // Station Label
          this.ctx.fillStyle = st.major ? "#f8fafc" : "#94a3b8";
          this.ctx.font = st.major ? "bold 10px sans-serif" : "9px sans-serif";
          this.ctx.textAlign = "left";
          this.ctx.fillText(st.code, pt.x + 7, pt.y + 3);
        });
      });
    }

    // 4. Draw Animated Trains
    const visibleTrains = this.getFilteredTrains();
    visibleTrains.forEach((t) => {
      const pos = this.getTrainPosition(t);
      const heading = this.getTrainHeading(t);
      const pt = this.projectLatLng(pos.lat, pos.lng);
      const isSelected = t.id === this.selectedTrainId;

      this.ctx.save();
      this.ctx.translate(pt.x, pt.y);

      // Selected Train Halo
      if (isSelected) {
        this.ctx.strokeStyle = "#f59e0b";
        this.ctx.lineWidth = 2.5;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, 16, 0, Math.PI * 2);
        this.ctx.stroke();
      }

      // Train Marker Pill
      const pillWidth = 84;
      const pillHeight = 22;
      this.ctx.fillStyle = isSelected
        ? "rgba(15, 23, 42, 0.96)"
        : "rgba(15, 23, 42, 0.88)";
      this.ctx.strokeStyle = isSelected ? "#f59e0b" : "#38bdf8";
      this.ctx.lineWidth = 1.5;

      this.ctx.beginPath();
      this.ctx.roundRect(-pillWidth / 2, -pillHeight / 2, pillWidth, pillHeight, 11);
      this.ctx.fill();
      this.ctx.stroke();

      // Heading Arrow Icon
      this.ctx.save();
      this.ctx.translate(-pillWidth / 2 + 12, 0);
      this.ctx.rotate(GeometryMath.toRad(heading));
      this.ctx.fillStyle = isSelected ? "#f59e0b" : "#38bdf8";
      this.ctx.beginPath();
      this.ctx.moveTo(0, -5);
      this.ctx.lineTo(5, 5);
      this.ctx.lineTo(-5, 5);
      this.ctx.closePath();
      this.ctx.fill();
      this.ctx.restore();

      // Train ID & Speed Text
      this.ctx.fillStyle = "#ffffff";
      this.ctx.font = "bold 9.5px monospace";
      this.ctx.textAlign = "left";
      this.ctx.fillText(t.number, -pillWidth / 2 + 22, -1);

      this.ctx.fillStyle = "#38bdf8";
      this.ctx.font = "8.5px sans-serif";
      this.ctx.fillText(`${Math.round(t.speed)}km/h`, -pillWidth / 2 + 22, 8);

      this.ctx.restore();
    });
  }

  updateCenterCoordinateText() {
    const coordsEl = document.getElementById("map-center-coords");
    if (coordsEl) {
      coordsEl.textContent = `${this.canvasCenter.lat.toFixed(
        4
      )}° N, ${this.canvasCenter.lng.toFixed(4)}° E`;
    }
  }

  // ==========================================
  // UI FILTER & INSPECTOR UPDATES
  // ==========================================
  getFilteredTrains() {
    return this.trains.filter((t) => {
      const matchCorridor =
        this.selectedCorridor === "ALL" || t.corridorId === this.selectedCorridor;
      const matchType =
        this.selectedTrainType === "ALL" || t.type === this.selectedTrainType;
      return matchCorridor && matchType;
    });
  }

  selectTrain(trainId) {
    this.selectedTrainId = trainId;
    const train = this.trains.find((t) => t.id === trainId);
    if (!train) return;

    this.updateInspector(trainId);
    this.renderFleetList();

    const pos = this.getTrainPosition(train);
    if (this.isNativeMaps && this.map) {
      this.map.panTo(pos);
      this.map.setZoom(11);
    } else {
      this.canvasCenter = { ...pos };
      this.canvasZoom = 10.5;
      this.updateCenterCoordinateText();
    }
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
        train.type === "EXPRESS"
          ? "badge-medium"
          : train.type === "SUBURBAN"
          ? "badge-low"
          : "badge-high"
      }`;
    }

    const corridor = CORRIDORS_DATA[train.corridorId];
    if (sectionEl) {
      sectionEl.textContent = `Section: ${corridor ? corridor.name : train.corridorId} (${
        train.direction
      } Line)`;
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

    // Geometry Distance to Nearest Station
    const pos = this.getTrainPosition(train);
    let nearestSt = null;
    let minStDist = Infinity;
    if (corridor && corridor.stations) {
      corridor.stations.forEach((st) => {
        const d = this.computeDistanceBetween(pos, st.pos);
        if (d < minStDist) {
          minStDist = d;
          nearestSt = st;
        }
      });
    }

    if (nextEl && nearestSt) {
      nextEl.textContent = `${nearestSt.name} (${(minStDist / 1000).toFixed(1)} km)`;
    }

    // Geometry Distance to Nearest Active Block Zone
    let nearestBlk = null;
    let minBlkDist = Infinity;
    ACTIVE_BLOCK_ZONES.forEach((blk) => {
      if (blk.corridorId === train.corridorId) {
        const d = this.computeDistanceBetween(pos, blk.center);
        if (d < minBlkDist) {
          minBlkDist = d;
          nearestBlk = blk;
        }
      }
    });

    if (blockEl) {
      if (minBlkDist < 3000) {
        blockEl.textContent = `${(minBlkDist / 1000).toFixed(1)} km (Active Worksite)`;
        blockEl.style.color = "var(--color-red)";
      } else if (minBlkDist < 8000) {
        blockEl.textContent = `${(minBlkDist / 1000).toFixed(1)} km (Caution Ahead)`;
        blockEl.style.color = "var(--color-amber)";
      } else {
        blockEl.textContent = `${(minBlkDist / 1000).toFixed(1)} km (Clear Buffer)`;
        blockEl.style.color = "var(--color-green)";
      }
    }

    if (signalEl) {
      const isGreen = train.signal === "Double Green";
      const isYellow = train.signal.includes("Yellow");
      signalEl.style.color = isGreen
        ? "var(--color-green)"
        : isYellow
        ? "var(--color-amber)"
        : "var(--color-red)";
      signalEl.innerHTML = `
        <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: currentColor;"></span>
        ${train.signal}
      `;
    }

    if (formulaEl) {
      formulaEl.innerHTML = `
        <strong>spherical.computeDistanceBetween:</strong> Separated by <strong>${(
          minBlkDist / 1000
        ).toFixed(2)} km</strong> from block zone ${nearestBlk ? nearestBlk.reqId : "N/A"}.
        Heading computed at <strong>${heading}°</strong>.
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
      row.className = `corridor-train-row ${
        t.id === this.selectedTrainId ? "active" : ""
      }`;
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
          <div style="font-size: 12.5px; font-weight: 700; color: var(--color-navy);">${Math.round(
            t.speed
          )} km/h</div>
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
    // 1. Total Corridor Track KM
    let totalMeters = 0;
    if (this.selectedCorridor === "ALL") {
      Object.values(CORRIDORS_DATA).forEach((c) => {
        totalMeters += this.computeLength(c.path);
      });
    } else if (CORRIDORS_DATA[this.selectedCorridor]) {
      totalMeters = this.computeLength(CORRIDORS_DATA[this.selectedCorridor].path);
    }
    const trackKmEl = document.getElementById("val-corridor-track-km");
    if (trackKmEl) {
      trackKmEl.textContent = `${(totalMeters / 1000).toFixed(1)} km`;
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
      blocksCountEl.textContent = `${activeBlocksCount} Section${
        activeBlocksCount === 1 ? "" : "s"
      }`;
    }

    // 4. Minimum distance to block across all active trains
    let globalMinDistance = Infinity;
    const visibleTrains = this.getFilteredTrains();
    visibleTrains.forEach((train) => {
      const trainPos = this.getTrainPosition(train);
      ACTIVE_BLOCK_ZONES.forEach((blk) => {
        if (blk.corridorId === train.corridorId) {
          const d = this.computeDistanceBetween(trainPos, blk.center);
          if (d < globalMinDistance) globalMinDistance = d;
        }
      });
    });

    const proximityEl = document.getElementById("val-corridor-nearest-proximity");
    const proximityStatusEl = document.getElementById("val-corridor-proximity-status");
    if (proximityEl && globalMinDistance !== Infinity) {
      const km = (globalMinDistance / 1000).toFixed(1);
      proximityEl.textContent = `${km} km`;
      if (proximityStatusEl) {
        if (globalMinDistance < 3000) {
          proximityStatusEl.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Worksite Caution Zone`;
          proximityStatusEl.style.color = "var(--color-red)";
        } else if (globalMinDistance < 8000) {
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
        if (this.isNativeMaps) {
          this.renderGoogleMapsBlocks(this.googleMaps.marker.AdvancedMarkerElement);
        }
      });
    }

    const chkStations = document.getElementById("chk-show-stations");
    if (chkStations) {
      chkStations.addEventListener("change", (e) => {
        this.showStations = e.target.checked;
        if (this.isNativeMaps) {
          this.renderGoogleMapsStations(this.googleMaps.marker.AdvancedMarkerElement);
        }
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
        const center =
          this.selectedCorridor !== "ALL" && CORRIDORS_DATA[this.selectedCorridor]
            ? CORRIDORS_DATA[this.selectedCorridor].center
            : { lat: 19.2437, lng: 73.1355 };
        const zoom =
          this.selectedCorridor !== "ALL" && CORRIDORS_DATA[this.selectedCorridor]
            ? CORRIDORS_DATA[this.selectedCorridor].zoom
            : 10;

        if (this.isNativeMaps && this.map) {
          this.map.panTo(center);
          this.map.setZoom(zoom);
        } else {
          this.canvasCenter = { ...center };
          this.canvasZoom = zoom;
          this.updateCenterCoordinateText();
        }
      });
    }
  }

  onFilterChange() {
    this.updateGeometryMetrics();
    this.renderFleetList();

    const targetCorridor = CORRIDORS_DATA[this.selectedCorridor];
    const center = targetCorridor
      ? targetCorridor.center
      : { lat: 19.2437, lng: 73.1355 };
    const zoom = targetCorridor ? targetCorridor.zoom : 10;

    if (this.isNativeMaps && this.map) {
      this.map.panTo(center);
      this.map.setZoom(zoom);
      this.renderGoogleMapsPolylines();
      this.renderGoogleMapsStations(this.googleMaps.marker.AdvancedMarkerElement);
      this.renderGoogleMapsBlocks(this.googleMaps.marker.AdvancedMarkerElement);
      this.renderGoogleMapsTrainMarkers(this.googleMaps.marker.AdvancedMarkerElement);
    } else {
      this.canvasCenter = { ...center };
      this.canvasZoom = zoom;
      this.updateCenterCoordinateText();
    }
  }

  // Triggered when tab becomes active
  onPageActivated() {
    if (this.isNativeMaps && this.map && this.googleMaps) {
      this.googleMaps.event.trigger(this.map, "resize");
    } else if (this.canvas) {
      const rect = this.canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      this.canvas.width = rect.width * dpr;
      this.canvas.height = rect.height * dpr;
      this.ctx.scale(dpr, dpr);
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
