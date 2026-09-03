/**
 * Yukti Rail - AI-Powered Integrated Block Planning for Indian Railways
 * Synthetic Data Demonstration Platform
 * Pure Vanilla JavaScript Client-Side Engine
 * 
 * NOTE: All data is synthetic prototype data for demonstration only.
 */

import { initCorridorTracking } from "./corridor-tracking.js";

// ==========================================
// 1. SYNTHETIC MOCK DATA STORAGE
// ==========================================

const SYNTHETIC_DATA = {
  // Maintenance Requests (Page 2)
  maintenanceRequests: [
    {
      id: "REQ-001",
      section: "Kalyan–Igatpuri DN",
      department: "Engineering",
      workType: "Rail Renewal",
      severity: "Critical",
      overdueDays: 15,
      priorityScore: 92,
      durationHrs: 5.0,
      status: "Pending"
    },
    {
      id: "REQ-002",
      section: "Kalyan–Igatpuri DN",
      department: "TRD",
      workType: "OHE Adjustment",
      severity: "High",
      overdueDays: 8,
      priorityScore: 78,
      durationHrs: 3.0,
      status: "Pending"
    },
    {
      id: "REQ-003",
      section: "Kalyan–Igatpuri DN",
      department: "S&T",
      workType: "Signal Shifting",
      severity: "High",
      overdueDays: 5,
      priorityScore: 75,
      durationHrs: 3.0,
      status: "Pending"
    },
    {
      id: "REQ-004",
      section: "Pune–Lonavala DN",
      department: "Engineering",
      workType: "Deep Screening BCM",
      severity: "High",
      overdueDays: 12,
      priorityScore: 84,
      durationHrs: 3.0,
      status: "Pending"
    },
    {
      id: "REQ-005",
      section: "Pune–Lonavala DN",
      department: "TRD",
      workType: "Catenary Wire Replacement",
      severity: "High",
      overdueDays: 9,
      priorityScore: 80,
      durationHrs: 3.0,
      status: "Pending"
    },
    {
      id: "REQ-006",
      section: "Thane–Kalyan DN",
      department: "TRD",
      workType: "Isolator Maintenance",
      severity: "Medium",
      overdueDays: 3,
      priorityScore: 64,
      durationHrs: 3.0,
      status: "Pending"
    },
    {
      id: "REQ-007",
      section: "Thane–Kalyan DN",
      department: "S&T",
      workType: "Track Circuit Replacement",
      severity: "Medium",
      overdueDays: 4,
      priorityScore: 62,
      durationHrs: 2.5,
      status: "Pending"
    },
    {
      id: "REQ-008",
      section: "Dadar–Kurla UP",
      department: "Engineering",
      workType: "Turnout Renewal",
      severity: "Critical",
      overdueDays: 18,
      priorityScore: 95,
      durationHrs: 4.0,
      status: "Pending"
    },
    {
      id: "REQ-009",
      section: "Igatpuri–Bhusawal DN",
      department: "S&T",
      workType: "Axle Counter Calibration",
      severity: "Low",
      overdueDays: 1,
      priorityScore: 45,
      durationHrs: 2.0,
      status: "Pending"
    },
    {
      id: "REQ-010",
      section: "CSMT–Byculla UP",
      department: "TRD",
      workType: "Section Insulator Inspection",
      severity: "Low",
      overdueDays: 2,
      priorityScore: 40,
      durationHrs: 2.0,
      status: "Pending"
    },
    {
      id: "REQ-011",
      section: "Karjat–Lonavala UP",
      department: "Engineering",
      workType: "Ghat Ultrasonic Rail Testing",
      severity: "Medium",
      overdueDays: 6,
      priorityScore: 68,
      durationHrs: 3.5,
      status: "Pending"
    },
    {
      id: "REQ-012",
      section: "Diva–Panvel DN",
      department: "S&T",
      workType: "Point Machine Overhauling",
      severity: "High",
      overdueDays: 7,
      priorityScore: 74,
      durationHrs: 3.0,
      status: "Pending"
    }
  ],

  // Weekly Schedule Initial Blocks (Page 4)
  weeklySchedule: [
    {
      id: "BLK-W01",
      day: "Tuesday",
      time: "01:00–06:00",
      section: "Kalyan–Igatpuri DN",
      departments: "Engineering + TRD + S&T",
      duration: "5.0 hrs",
      trainsAffected: "3 trains (simulated)",
      status: "Scheduled"
    },
    {
      id: "BLK-W02",
      day: "Thursday",
      time: "02:00–05:00",
      section: "Pune–Lonavala DN",
      departments: "Engineering",
      duration: "3.0 hrs",
      trainsAffected: "2 trains (simulated)",
      status: "Pending Conflict"
    },
    {
      id: "BLK-W03",
      day: "Saturday",
      time: "01:30–04:30",
      section: "Thane–Kalyan DN",
      departments: "TRD + S&T",
      duration: "3.0 hrs",
      trainsAffected: "2 trains (simulated)",
      status: "Scheduled"
    }
  ],

  // Block History Initial Records (Page 5)
  history: [
    {
      id: "BLK-101",
      section: "Kalyan–Igatpuri DN",
      plannedDuration: "5.0 hr",
      actualDuration: "5.2 hr",
      status: "Completed",
      reason: "—"
    },
    {
      id: "BLK-102",
      section: "Pune–Lonavala DN",
      plannedDuration: "3.0 hr",
      actualDuration: "—",
      status: "Deferred",
      reason: "Train congestion (freight clearance backlog)"
    },
    {
      id: "BLK-103",
      section: "Thane–Kalyan DN",
      plannedDuration: "4.0 hr",
      actualDuration: "3.8 hr",
      status: "Completed",
      reason: "—"
    },
    {
      id: "BLK-104",
      section: "Dadar–Kurla UP",
      plannedDuration: "4.0 hr",
      actualDuration: "4.1 hr",
      status: "Completed",
      reason: "—"
    },
    {
      id: "BLK-105",
      section: "Igatpuri–Kasara DN",
      plannedDuration: "3.5 hr",
      actualDuration: "—",
      status: "Deferred",
      reason: "Heavy monsoon ghat visibility protocol"
    }
  ]
};

// Application State
const AppState = {
  activePage: "dashboard",
  isCombined: false,
  approvalStage: 2, // 1: Draft, 2: AI Rec, 3: Dept Review, 4: Ops Review, 5: DRM Approval, 6: Scheduled
  filters: {
    dept: "All",
    severity: "All",
    search: ""
  }
};

// Stepper Stages Definition
const APPROVAL_STAGES = [
  "Draft Request",
  "AI Recommendation",
  "Department Review",
  "Operations Review",
  "DRM Approval",
  "Scheduled / Closed"
];

// Safe storage wrapper to prevent DOMException / SecurityError in sandboxed iframe contexts
const safeStorage = {
  get: function(key) {
    try {
      return typeof window !== "undefined" && window.localStorage ? window.localStorage.getItem(key) : null;
    } catch (e) {
      return null;
    }
  },
  set: function(key, val) {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        window.localStorage.setItem(key, val);
      }
    } catch (e) {}
  }
};

// ==========================================
// 2. DOM INITIALIZATION & ROUTING
// ==========================================

// Setup Page Navigation without reload
function setupNavigation() {
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const pageId = item.getAttribute("data-page");
      if (pageId) {
        switchPage(pageId);
        // Close mobile drawer if open
        const sidebar = document.getElementById("sidebar");
        const backdrop = document.getElementById("sidebar-backdrop");
        if (sidebar && sidebar.classList.contains("open")) {
          sidebar.classList.remove("open");
        }
        if (backdrop) backdrop.classList.remove("active");
        document.body.classList.remove("sidebar-drawer-open");
      }
    });
  });

  // Handle direct hash navigation if present
  const hash = window.location.hash.replace("#", "");
  if (hash && document.getElementById(`view-${hash}`)) {
    switchPage(hash);
  }
}

function switchPage(pageId) {
  if (!pageId) return;
  AppState.activePage = pageId;
  try {
    window.location.hash = pageId;
  } catch (e) {
    // Suppress hash navigation errors in restricted sandbox
  }

  // Update nav link styles
  document.querySelectorAll(".nav-item").forEach(el => {
    if (el.getAttribute("data-page") === pageId) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });

  // Switch views
  document.querySelectorAll(".page-view").forEach(view => {
    if (view.id === `view-${pageId}`) {
      view.classList.add("active");
    } else {
      view.classList.remove("active");
    }
  });

  // If switching to corridor tracking, trigger map resize / activation
  if (pageId === "corridor-tracking") {
    setTimeout(() => {
      try {
        initCorridorTracking();
      } catch (err) {
        console.error("Corridor tracking activation error:", err);
      }
    }, 40);
  }

  // If switching to analytics, trigger charts render
  if (pageId === "analytics") {
    setTimeout(() => {
      try {
        renderAnalyticsView();
      } catch (err) {
        console.error("Analytics render error:", err);
      }
    }, 40);
  }

  // Scroll to top of content safely
  try {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } catch (e) {
    try { window.scrollTo(0, 0); } catch (_) {}
  }
}

// Expose switchPage immediately on window and connect to fallback stub
window.switchPage = switchPage;
window._switchPageImpl = switchPage;

// Setup Dashboard Quick Nav Actions
function setupDashboardInteractions() {
  const btnViewAnalytics = document.getElementById("btn-dashboard-view-analytics");
  if (btnViewAnalytics) {
    btnViewAnalytics.addEventListener("click", (e) => {
      e.preventDefault();
      switchPage("analytics");
    });
  }

  const btnViewCorridor = document.getElementById("btn-dashboard-view-corridor");
  if (btnViewCorridor) {
    btnViewCorridor.addEventListener("click", (e) => {
      e.preventDefault();
      switchPage("corridor-tracking");
    });
  }

  const btnViewRecs = document.getElementById("btn-dashboard-view-recommendations");
  if (btnViewRecs) {
    btnViewRecs.addEventListener("click", (e) => {
      e.preventDefault();
      switchPage("recommendations");
    });
  }

  const btnViewSched = document.getElementById("btn-view-full-schedule");
  if (btnViewSched) {
    btnViewSched.addEventListener("click", (e) => {
      e.preventDefault();
      switchPage("schedule");
    });
  }

  // Dashboard Metric Cards Navigation
  const metricTotal = document.getElementById("metric-card-total-requests");
  if (metricTotal) {
    metricTotal.style.cursor = "pointer";
    metricTotal.addEventListener("click", () => switchPage("requests"));
  }

  const metricSafety = document.getElementById("metric-card-safety-critical");
  if (metricSafety) {
    metricSafety.style.cursor = "pointer";
    metricSafety.addEventListener("click", () => {
      AppState.filters.severity = "Critical";
      const sevSelect = document.getElementById("req-severity-filter");
      if (sevSelect) sevSelect.value = "Critical";
      renderRequestsTable();
      switchPage("requests");
      showToast("Filtered view to Safety-Critical requests.", "warning", 2500);
    });
  }

  const metricIntegration = document.getElementById("metric-card-integration-opps");
  if (metricIntegration) {
    metricIntegration.style.cursor = "pointer";
    metricIntegration.addEventListener("click", () => switchPage("recommendations"));
  }

  const metricPlanned = document.getElementById("metric-card-planned-blocks");
  if (metricPlanned) {
    metricPlanned.style.cursor = "pointer";
    metricPlanned.addEventListener("click", () => switchPage("schedule"));
  }

  // Dashboard Alert action buttons delegation
  document.querySelectorAll(".alert-item").forEach(item => {
    const btn = item.querySelector(".alert-action-btn");
    if (!btn) return;
    if (item.classList.contains("critical")) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        AppState.filters.severity = "Critical";
        const sevSelect = document.getElementById("req-severity-filter");
        if (sevSelect) sevSelect.value = "Critical";
        renderRequestsTable();
        switchPage("requests");
      });
    } else if (item.classList.contains("opportunity") || item.classList.contains("conflict")) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        switchPage("recommendations");
      });
    }
  });
}

function initApp() {
  try { initTheme(); } catch (err) { console.error("Theme init error:", err); }
  try { setupNavigation(); } catch (err) { console.error("Navigation setup error:", err); }
  try { setupConnectivityHeartbeat(); } catch (err) { console.error("Heartbeat setup error:", err); }
  try { setupDashboardInteractions(); } catch (err) { console.error("Dashboard setup error:", err); }
  try { setupRequestsTable(); } catch (err) { console.error("Requests setup error:", err); }
  try { setupAIRecommendations(); } catch (err) { console.error("AI recommendations setup error:", err); }
  try { setupWeeklySchedule(); } catch (err) { console.error("Weekly schedule setup error:", err); }
  try { setupSimulationModal(); } catch (err) { console.error("Simulation modal setup error:", err); }
  try { setupMobileDrawer(); } catch (err) { console.error("Mobile drawer setup error:", err); }
  try { setupAnalytics(); } catch (err) { console.error("Analytics setup error:", err); }
  try { renderAllViews(); } catch (err) { console.error("Render views error:", err); }
  try { initCorridorTracking(); } catch (err) { console.error("Corridor tracking init error:", err); }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

// ==========================================
// 3. THEME TOGGLING (Navy / Dark Operations Mode)
// ==========================================

function initTheme() {
  const savedTheme = safeStorage.get("yuktirail-theme") || safeStorage.get("blockopt-theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  const themeBtn = document.getElementById("btn-theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const target = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", target);
      safeStorage.set("yuktirail-theme", target);
      updateThemeIcon(target);
      showToast(`Switched to ${target === "dark" ? "Night Operations (Dark)" : "Standard Day (Light)"} theme`, "info", 2000);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.querySelector("#btn-theme-toggle i");
  if (icon) {
    icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
  }
}

// Setup Mobile Hamburger Drawer
function setupMobileDrawer() {
  const toggleBtn = document.getElementById("btn-mobile-menu");
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("btn-sidebar-close");
  const backdrop = document.getElementById("sidebar-backdrop");

  function openSidebar() {
    if (sidebar) sidebar.classList.add("open");
    if (backdrop) backdrop.classList.add("active");
    document.body.classList.add("sidebar-drawer-open");
  }

  function closeSidebar() {
    if (sidebar) sidebar.classList.remove("open");
    if (backdrop) backdrop.classList.remove("active");
    document.body.classList.remove("sidebar-drawer-open");
  }

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (sidebar.classList.contains("open")) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        closeSidebar();
      });
    }

    if (backdrop) {
      backdrop.addEventListener("click", () => {
        closeSidebar();
      });
    }

    document.addEventListener("click", (e) => {
      if (sidebar.classList.contains("open") && !sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
        closeSidebar();
      }
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && sidebar.classList.contains("open")) {
        closeSidebar();
      }
    });
  }
}

// ==========================================
// 4. PAGE 2: MAINTENANCE REQUESTS LOGIC
// ==========================================

function setupRequestsTable() {
  const searchInput = document.getElementById("req-search");
  const deptSelect = document.getElementById("req-dept-filter");
  const severitySelect = document.getElementById("req-severity-filter");
  const resetBtn = document.getElementById("req-reset-filter");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      AppState.filters.search = e.target.value.toLowerCase().trim();
      renderRequestsTable();
    });
  }

  if (deptSelect) {
    deptSelect.addEventListener("change", (e) => {
      AppState.filters.dept = e.target.value;
      renderRequestsTable();
    });
  }

  if (severitySelect) {
    severitySelect.addEventListener("change", (e) => {
      AppState.filters.severity = e.target.value;
      renderRequestsTable();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      AppState.filters = { dept: "All", severity: "All", search: "" };
      if (searchInput) searchInput.value = "";
      if (deptSelect) deptSelect.value = "All";
      if (severitySelect) severitySelect.value = "All";
      renderRequestsTable();
      showToast("Filters reset to default view", "info", 2000);
    });
  }

  renderRequestsTable();
}

function renderRequestsTable() {
  const tbody = document.getElementById("requests-tbody");
  const countBadge = document.getElementById("requests-count-badge");
  if (!tbody) return;

  const filtered = SYNTHETIC_DATA.maintenanceRequests.filter(req => {
    // Dept filter
    if (AppState.filters.dept !== "All" && req.department !== AppState.filters.dept) {
      return false;
    }
    // Severity filter
    if (AppState.filters.severity !== "All" && req.severity !== AppState.filters.severity) {
      return false;
    }
    // Search by ID or Section
    if (AppState.filters.search) {
      const q = AppState.filters.search;
      const matchId = req.id.toLowerCase().includes(q);
      const matchSec = req.section.toLowerCase().includes(q);
      const matchWork = req.workType.toLowerCase().includes(q);
      if (!matchId && !matchSec && !matchWork) {
        return false;
      }
    }
    return true;
  });

  if (countBadge) {
    countBadge.textContent = `Showing ${filtered.length} of ${SYNTHETIC_DATA.maintenanceRequests.length} requests`;
  }

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="9" style="text-align: center; padding: 36px; color: var(--color-text-muted);">
          <i class="fa-solid fa-filter-circle-xmark" style="font-size: 24px; margin-bottom: 8px; display: block;"></i>
          No maintenance requests match your filter criteria.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map(req => {
    const badgeClass = getSeverityBadgeClass(req.severity);
    const isIntegrated = AppState.isCombined && ["REQ-001", "REQ-002", "REQ-003"].includes(req.id);
    const statusText = isIntegrated ? "Integrated" : req.status;
    const statusBadge = isIntegrated ? "badge-success" : "badge-low";

    return `
      <tr id="row-${req.id}">
        <td><span class="tabular-id">${req.id}</span></td>
        <td><strong>${req.section}</strong></td>
        <td>${getDeptPill(req.department)}</td>
        <td>${req.workType}</td>
        <td><span class="badge ${badgeClass}">${req.severity}</span></td>
        <td><strong>${req.overdueDays}d</strong></td>
        <td>
          <div class="priority-meter">
            <span class="priority-val">${req.priorityScore}</span>
            <div class="priority-bar">
              <div class="priority-bar-fill" style="width: ${req.priorityScore}%; background-color: ${getPriorityColor(req.priorityScore)};"></div>
            </div>
          </div>
        </td>
        <td>${req.durationHrs.toFixed(1)} hrs</td>
        <td><span class="badge ${statusBadge}">${statusText}</span></td>
      </tr>
    `;
  }).join("");
}

function getDeptPill(dept) {
  if (dept.includes("Engineering") || dept === "ENG") return `<span class="dept-pill eng">ENG</span>`;
  if (dept.includes("TRD")) return `<span class="dept-pill trd">TRD</span>`;
  if (dept.includes("S&T")) return `<span class="dept-pill snt">S&T</span>`;
  return `<span class="badge badge-low">${dept}</span>`;
}

function getSeverityBadgeClass(sev) {
  switch (sev) {
    case "Critical": return "badge-critical";
    case "High": return "badge-high";
    case "Medium": return "badge-medium";
    default: return "badge-low";
  }
}

function getPriorityColor(score) {
  if (score >= 90) return "#dc2626";
  if (score >= 75) return "#d97706";
  if (score >= 60) return "#2563eb";
  return "#64748b";
}

// ==========================================
// 5. PAGE 3: AI RECOMMENDATIONS LOGIC
// ==========================================

function setupAIRecommendations() {
  // Accordion toggle
  const accordion = document.getElementById("ai-accordion-why");
  const accordionHeader = document.getElementById("accordion-header-why");
  if (accordionHeader && accordion) {
    accordionHeader.addEventListener("click", () => {
      accordion.classList.toggle("open");
    });
  }

  // Combine Into One Block Button
  const combineBtn = document.getElementById("btn-combine-block");
  if (combineBtn) {
    combineBtn.addEventListener("click", () => {
      if (AppState.isCombined) {
        showToast("Integrated block is already generated in the weekly schedule.", "info");
        return;
      }

      AppState.isCombined = true;
      AppState.approvalStage = 3; // Advance to Department Review

      // Update button state
      combineBtn.disabled = true;
      combineBtn.innerHTML = '<i class="fa-solid fa-check"></i> Integrated Block Created';
      combineBtn.classList.remove("btn-primary");
      combineBtn.classList.add("btn-secondary");

      // Update badge on card
      const recStatusBadge = document.getElementById("rec-card-status");
      if (recStatusBadge) {
        recStatusBadge.className = "badge badge-success";
        recStatusBadge.innerHTML = '<i class="fa-solid fa-check-circle"></i> Integrated into Weekly Plan';
      }

      // Add to Weekly Schedule
      const newIntegratedBlock = {
        id: "BLK-INT01",
        day: "Tuesday",
        time: "01:00–07:00",
        section: "Kalyan–Igatpuri DN",
        departments: "Engineering + TRD + S&T (Integrated)",
        duration: "6.0 hrs",
        trainsAffected: "3 trains (simulated)",
        status: "Department Review"
      };

      // Replace or prepend in schedule
      SYNTHETIC_DATA.weeklySchedule.unshift(newIntegratedBlock);

      // Trigger toasts and re-renders
      showToast("Integrated block recommendation created successfully.", "success", 4000);
      renderWeeklySchedule();
      renderRequestsTable();
      renderStepper();
    });
  }

  // Conflict Card Action Buttons
  const btnMerge = document.getElementById("btn-conflict-merge");
  const btnFriday = document.getElementById("btn-conflict-friday");
  const btnSeparate = document.getElementById("btn-conflict-separate");

  if (btnMerge) {
    btnMerge.addEventListener("click", () => {
      showToast("Merged Pune–Lonavala requests into joint 4-hour window for safety validation.", "success");
    });
  }

  if (btnFriday) {
    btnFriday.addEventListener("click", () => {
      showToast("Rescheduled TRD request to Friday night window (02:00–05:00). Conflict cleared.", "info");
    });
  }

  if (btnSeparate) {
    btnSeparate.addEventListener("click", () => {
      showToast("Maintained as separate requests. Operations clearance flag tagged.", "warning");
    });
  }
}

// ==========================================
// 6. PAGE 4: WEEKLY SCHEDULE LOGIC & STEPPER
// ==========================================

function setupWeeklySchedule() {
  // Stepper buttons
  const approveBtn = document.getElementById("btn-approve-review");
  const rejectBtn = document.getElementById("btn-reject-block");

  if (approveBtn) {
    approveBtn.addEventListener("click", () => {
      if (AppState.approvalStage < 6) {
        AppState.approvalStage++;
        renderStepper();
        const stageName = APPROVAL_STAGES[AppState.approvalStage - 1];
        showToast(`Block status updated: Forwarded to ${stageName}.`, "success");
      } else {
        showToast("Block has already reached final scheduled & closed state.", "info");
      }
    });
  }

  if (rejectBtn) {
    rejectBtn.addEventListener("click", () => {
      AppState.approvalStage = 1;
      renderStepper();
      showToast("Block proposal returned to Draft Request for technical revision.", "warning");
    });
  }

  // Delegated click listener for simulation buttons in schedule table
  const tbody = document.getElementById("schedule-tbody");
  if (tbody) {
    tbody.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-action='simulate-block']");
      if (btn) {
        const blockId = btn.getAttribute("data-block-id");
        if (blockId) {
          openSimulationModalForBlock(blockId);
        }
      }
    });
  }

  renderWeeklySchedule();
  renderStepper();
}

function getMultiDeptPills(deptStr) {
  let pills = [];
  if (deptStr.includes("Engineering") || deptStr.includes("ENG")) pills.push('<span class="dept-pill eng">ENG</span>');
  if (deptStr.includes("TRD")) pills.push('<span class="dept-pill trd">TRD</span>');
  if (deptStr.includes("S&T")) pills.push('<span class="dept-pill snt">S&T</span>');
  if (pills.length === 0) return `<span class="badge badge-low">${deptStr}</span>`;
  return `<div class="dept-pill-group">${pills.join("")}</div>`;
}

function renderWeeklySchedule() {
  const tbody = document.getElementById("schedule-tbody");
  if (!tbody) return;

  tbody.innerHTML = SYNTHETIC_DATA.weeklySchedule.map(block => {
    let statusBadge = "badge-low";
    if (block.status.includes("Department Review")) statusBadge = "badge-high";
    else if (block.status.includes("Scheduled") || block.status.includes("Approved")) statusBadge = "badge-success";
    else if (block.status.includes("Pending Conflict")) statusBadge = "badge-critical";

    return `
      <tr id="sched-row-${block.id}">
        <td><span class="tabular-id">${block.id}</span></td>
        <td><strong>${block.day}</strong></td>
        <td>${block.time}</td>
        <td><strong>${block.section}</strong></td>
        <td>${getMultiDeptPills(block.departments)}</td>
        <td>${block.duration}</td>
        <td>${block.trainsAffected}</td>
        <td><span class="badge ${statusBadge}">${block.status}</span></td>
        <td>
          <button class="btn-secondary" style="padding: 4px 10px; font-size: 12px;" data-action="simulate-block" data-block-id="${block.id}" aria-label="Simulate alternative window">
            <i class="fa-solid fa-chart-line"></i> Simulate
          </button>
        </td>
      </tr>
    `;
  }).join("");
}

function renderStepper() {
  const stepsContainer = document.getElementById("stepper-progress");
  const lineFill = document.getElementById("stepper-line-fill");
  if (!stepsContainer) return;

  const total = APPROVAL_STAGES.length;
  const current = AppState.approvalStage;

  const stageTextEl = document.getElementById("stepper-current-stage-text");
  if (stageTextEl && APPROVAL_STAGES[current - 1]) {
    stageTextEl.textContent = `Active Stage: ${APPROVAL_STAGES[current - 1]}`;
  }

  if (lineFill) {
    const percentage = ((current - 1) / (total - 1)) * 100;
    lineFill.style.width = `${percentage}%`;
  }

  stepsContainer.innerHTML = APPROVAL_STAGES.map((name, index) => {
    const stepNum = index + 1;
    let stateClass = "";
    let icon = stepNum;

    if (stepNum < current) {
      stateClass = "completed";
      icon = '<i class="fa-solid fa-check"></i>';
    } else if (stepNum === current) {
      stateClass = "active";
    }

    return `
      <div class="step-item ${stateClass}" id="step-${stepNum}">
        <div class="step-circle">${icon}</div>
        <div class="step-name">${name}</div>
      </div>
    `;
  }).join("");
}

// ==========================================
// 7. SIMULATION MODAL LOGIC
// ==========================================

function setupSimulationModal() {
  const modal = document.getElementById("modal-simulation");
  const openButtons = document.querySelectorAll(".btn-open-simulation");
  const closeButtons = document.querySelectorAll(".btn-close-modal");
  const runSimBtn = document.getElementById("btn-run-simulation");

  openButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      openSimulationModal();
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      closeSimulationModal();
    });
  });

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeSimulationModal();
      }
    });
  }

  if (runSimBtn) {
    runSimBtn.addEventListener("click", () => {
      runAlternativeSimulation();
    });
  }
}

window.openSimulationModalForBlock = function(blockId) {
  const block = SYNTHETIC_DATA.weeklySchedule.find(b => b.id === blockId);
  const targetSelect = document.getElementById("sim-target-block");
  if (targetSelect && block) {
    targetSelect.value = block.id;
  }
  openSimulationModal();
};
window._openSimulationModalForBlockImpl = window.openSimulationModalForBlock;

function openSimulationModal() {
  const modal = document.getElementById("modal-simulation");
  const resultBox = document.getElementById("simulation-results");
  if (resultBox) resultBox.classList.remove("show");
  if (modal) modal.classList.add("active");
}

function closeSimulationModal() {
  const modal = document.getElementById("modal-simulation");
  if (modal) modal.classList.remove("active");
}

function runAlternativeSimulation() {
  const daySelect = document.getElementById("sim-day");
  const timeSelect = document.getElementById("sim-time");
  const resultBox = document.getElementById("simulation-results");
  const resultOrig = document.getElementById("sim-orig-impact");
  const resultAlt = document.getElementById("sim-alt-impact");
  const resultRec = document.getElementById("sim-rec-text");

  if (!resultBox) return;

  const selectedDay = daySelect ? daySelect.value : "Wednesday";
  const selectedTime = timeSelect ? timeSelect.value : "11:00–16:00";

  let altTrains = 6;
  let recommendationText = "Keep original night window because it has lower train occupancy.";

  if (selectedTime.includes("11:00") || selectedTime.includes("Day")) {
    altTrains = 14;
    recommendationText = `Heavy day traffic detected on ${selectedDay}. Keep original night window to avoid disrupting 14 passenger/express trains.`;
  } else if (selectedTime.includes("23:00") || selectedTime.includes("01:00")) {
    altTrains = 5;
    recommendationText = `Night window on ${selectedDay} is viable, but original Tuesday schedule affects fewer freight crossovers (3 vs 5). Recommendation: Retain Tuesday night window.`;
  } else {
    altTrains = 8;
    recommendationText = `Alternative slot on ${selectedDay} causes 8 train retimings. Original schedule remains mathematically optimal.`;
  }

  if (resultOrig) resultOrig.textContent = "3 simulated trains affected";
  if (resultAlt) resultAlt.textContent = `${altTrains} simulated trains affected (${selectedDay} ${selectedTime})`;
  if (resultRec) resultRec.textContent = recommendationText;

  resultBox.classList.add("show");
  showToast("Synthetic timetable occupancy simulation executed.", "info", 2500);
}

// ==========================================
// 8. PAGE 5: BLOCK HISTORY RENDERING
// ==========================================

function renderHistoryTable() {
  const tbody = document.getElementById("history-tbody");
  if (!tbody) return;

  tbody.innerHTML = SYNTHETIC_DATA.history.map(row => {
    const isCompleted = row.status === "Completed";
    const statusBadge = isCompleted ? "badge-success" : "badge-critical";

    return `
      <tr id="hist-row-${row.id}">
        <td><span class="tabular-id">${row.id}</span></td>
        <td><strong>${row.section}</strong></td>
        <td>${row.plannedDuration}</td>
        <td>${row.actualDuration}</td>
        <td><span class="badge ${statusBadge}">${row.status}</span></td>
        <td style="color: ${row.reason === '—' ? 'var(--color-text-subtle)' : 'var(--color-text-main)'}; font-size: 13px;">
          ${row.reason}
        </td>
      </tr>
    `;
  }).join("");
}

// ==========================================
// 9. TOAST NOTIFICATION COMPONENT
// ==========================================

function showToast(message, type = "info", duration = 3500) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  let iconName = "fa-circle-info";
  if (type === "success") iconName = "fa-circle-check";
  else if (type === "warning") iconName = "fa-triangle-exclamation";
  else if (type === "error") iconName = "fa-circle-xmark";

  toast.innerHTML = `
    <i class="fa-solid ${iconName} toast-icon"></i>
    <div class="toast-body">${message}</div>
    <button class="toast-close" aria-label="Dismiss">&times;</button>
  `;

  container.appendChild(toast);

  const closeBtn = toast.querySelector(".toast-close");
  closeBtn.addEventListener("click", () => {
    dismissToast(toast);
  });

  const timer = setTimeout(() => {
    dismissToast(toast);
  }, duration);

  function dismissToast(el) {
    clearTimeout(timer);
    el.style.opacity = "0";
    el.style.transform = "translateX(20px)";
    setTimeout(() => {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 200);
  }
}

// ==========================================
// 8. REAL-TIME CONNECTIVITY STATUS & HEARTBEAT
// ==========================================

function setupConnectivityHeartbeat() {
  const card = document.getElementById("sidebar-connectivity-card");
  const pulseDot = document.getElementById("heartbeat-pulse-indicator");
  const nodeNameEl = document.getElementById("active-node-name");
  const latencyEl = document.getElementById("active-node-latency");
  const timerEl = document.getElementById("active-heartbeat-timer");
  const flashEl = document.getElementById("signal-pulse-flash");
  const stabilityTextEl = document.getElementById("signal-stability-text");
  const statusPill = document.getElementById("connectivity-status-pill");

  if (!card) return;

  const serverNodes = [
    { name: "CRIS-MUM-01", baseLatency: 22, desc: "Central Railway Mumbai CSMT Operations Gateway" },
    { name: "COA-PUNE-GW", baseLatency: 25, desc: "Control Office Application Node, Pune" },
    { name: "CR-BHUSAWAL-02", baseLatency: 28, desc: "Bhusawal Division Operational Relay" },
    { name: "FOIS-NDLS-HQ", baseLatency: 34, desc: "Freight Operations Info System Primary" }
  ];

  let activeNodeIndex = 0;
  let lastHeartbeatTime = Date.now();
  let isPinging = false;

  // Update seconds-ago counter smoothly
  setInterval(() => {
    if (!timerEl) return;
    const diffSec = Math.floor((Date.now() - lastHeartbeatTime) / 1000);
    if (diffSec <= 1) {
      timerEl.textContent = "Just now";
    } else {
      timerEl.textContent = `${diffSec}s ago`;
    }
  }, 1000);

  // Rhythmic heartbeat pulse every ~2.6 seconds
  function triggerHeartbeatPulse() {
    if (isPinging) return;
    lastHeartbeatTime = Date.now();

    const currentNode = serverNodes[activeNodeIndex];
    // Realistic micro-jitter between -3ms and +5ms
    const jitter = Math.floor(Math.random() * 9) - 3;
    const currentLatency = Math.max(16, currentNode.baseLatency + jitter);

    if (latencyEl) latencyEl.textContent = `${currentLatency}ms`;
    if (timerEl) timerEl.textContent = "Just now";

    // Visual pulse effect
    if (flashEl) {
      flashEl.classList.add("flash-active");
      flashEl.textContent = "● BEAT";
    }
    if (pulseDot) {
      pulseDot.style.transform = "scale(1.4)";
      pulseDot.style.boxShadow = "0 0 12px #4ade80";
    }

    setTimeout(() => {
      if (flashEl) {
        flashEl.classList.remove("flash-active");
        flashEl.textContent = "● PING";
      }
      if (pulseDot) {
        pulseDot.style.transform = "scale(1)";
        pulseDot.style.boxShadow = "0 0 8px #22c55e";
      }
    }, 400);

    // Minor stability rate variation (99.96% - 99.99%)
    if (stabilityTextEl && Math.random() > 0.6) {
      const stabilities = ["99.98% Optimal", "99.99% Optimal", "100% Stable", "99.97% Optimal"];
      stabilityTextEl.textContent = stabilities[Math.floor(Math.random() * stabilities.length)];
    }
  }

  const pulseInterval = setInterval(triggerHeartbeatPulse, 2600);

  // Interactive diagnostic ping on click or keyboard activation
  function handleManualDiagnostic() {
    if (isPinging) return;
    isPinging = true;

    // Cycle to next railway server node
    activeNodeIndex = (activeNodeIndex + 1) % serverNodes.length;
    const selectedNode = serverNodes[activeNodeIndex];

    if (nodeNameEl) nodeNameEl.textContent = selectedNode.name;
    if (latencyEl) latencyEl.textContent = "Testing...";
    if (timerEl) timerEl.textContent = "Probing...";
    if (statusPill) {
      statusPill.textContent = "PROBING";
      statusPill.style.backgroundColor = "rgba(56, 189, 248, 0.2)";
      statusPill.style.color = "#38bdf8";
      statusPill.style.borderColor = "rgba(56, 189, 248, 0.4)";
    }

    if (pulseDot) {
      pulseDot.style.backgroundColor = "#38bdf8";
      pulseDot.style.boxShadow = "0 0 12px #38bdf8";
    }

    setTimeout(() => {
      lastHeartbeatTime = Date.now();
      const testLatency = selectedNode.baseLatency - Math.floor(Math.random() * 3);

      if (latencyEl) latencyEl.textContent = `${testLatency}ms`;
      if (timerEl) timerEl.textContent = "Just now";
      if (statusPill) {
        statusPill.textContent = "STABLE";
        statusPill.style.backgroundColor = "rgba(34, 197, 94, 0.18)";
        statusPill.style.color = "#4ade80";
        statusPill.style.borderColor = "rgba(74, 222, 128, 0.35)";
      }
      if (pulseDot) {
        pulseDot.style.backgroundColor = "#22c55e";
        pulseDot.style.boxShadow = "0 0 8px #22c55e";
      }

      showToast(
        `Link verified: Connected to ${selectedNode.name} (${selectedNode.desc}) in ${testLatency}ms with 0% packet loss.`,
        "success",
        3000
      );
      isPinging = false;
    }, 450);
  }

  card.addEventListener("click", handleManualDiagnostic);
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleManualDiagnostic();
    }
  });

  // Initial immediate pulse
  setTimeout(triggerHeartbeatPulse, 400);
}

// Window helpers for calls from HTML inline handlers or developer console
window.showToast = showToast;
window._showToastImpl = showToast;
window.switchPage = switchPage;
window._switchPageImpl = switchPage;
window.openSimulationModal = openSimulationModal;
window.closeSimulationModal = closeSimulationModal;
window.runAlternativeSimulation = runAlternativeSimulation;

// Render all views initial setup
function renderAllViews() {
  renderRequestsTable();
  renderWeeklySchedule();
  renderHistoryTable();
  renderStepper();
}
