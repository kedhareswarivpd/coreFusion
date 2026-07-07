import { apiRequest, toQueryString } from './client.js';

// ── Dashboard ──────────────────────────────────────────────────────────────
export const fetchDashboardOverview      = (token)         => apiRequest('/dashboard/overview', { token });
export const fetchProjectStatusBreakdown = (token)         => apiRequest('/dashboard/projects/status-breakdown', { token });

// ── Users ──────────────────────────────────────────────────────────────────
export const fetchUsers  = (token, p = {}) => apiRequest(`/users${toQueryString(p)}`, { token });
export const createUser  = (token, body)   => apiRequest('/users', { method: 'POST', body, token });
export const updateUser  = (token, id, b)  => apiRequest(`/users/${id}`, { method: 'PUT', body: b, token });
export const deactivateUser = (token, id)  => apiRequest(`/users/${id}/deactivate`, { method: 'PATCH', token });
export const deleteUser  = (token, id)     => apiRequest(`/users/${id}`, { method: 'DELETE', token });

// ── Employees ──────────────────────────────────────────────────────────────
export const fetchEmployees = (token, p = {}) => apiRequest(`/employees${toQueryString(p)}`, { token });

// ── Clients ────────────────────────────────────────────────────────────────
export const fetchClients = (token, p = {}) => apiRequest(`/clients${toQueryString(p)}`, { token });

// ── Projects ───────────────────────────────────────────────────────────────
export const fetchAdminProjects = (token, p = {}) => apiRequest(`/projects${toQueryString(p)}`, { token });
export const createProject      = (token, body)   => apiRequest('/projects', { method: 'POST', body, token });
export const updateProject      = (token, id, b)  => apiRequest(`/projects/${id}`, { method: 'PUT', body: b, token });
export const deleteProject      = (token, id)     => apiRequest(`/projects/${id}`, { method: 'DELETE', token });

// ── Roles & Permissions ────────────────────────────────────────────────────
export const fetchRoles       = (token, p = {}) => apiRequest(`/access-control/roles${toQueryString(p)}`, { token });
export const createRole       = (token, body)   => apiRequest('/access-control/roles', { method: 'POST', body, token });
export const updateRole       = (token, id, b)  => apiRequest(`/access-control/roles/${id}`, { method: 'PUT', body: b, token });
export const deleteRole       = (token, id)     => apiRequest(`/access-control/roles/${id}`, { method: 'DELETE', token });
export const fetchPermissions = (token, p = {}) => apiRequest(`/access-control/permissions${toQueryString(p)}`, { token });
export const createPermission = (token, body)   => apiRequest('/access-control/permissions', { method: 'POST', body, token });
export const deletePermission = (token, id)     => apiRequest(`/access-control/permissions/${id}`, { method: 'DELETE', token });

// ── Analytics ──────────────────────────────────────────────────────────────
export const fetchAnalyticsSummary = (token) => apiRequest('/analytics/summary', { token });

// ── Media ──────────────────────────────────────────────────────────────────
export const fetchMedia       = (token, p = {}) => apiRequest(`/media${toQueryString(p)}`, { token });
export const deleteMedia      = (token, id)     => apiRequest(`/media/${id}`, { method: 'DELETE', token });

// ── Notifications ──────────────────────────────────────────────────────────
export const fetchNotifications = (token)     => apiRequest('/notifications', { token });
export const markNotificationRead = (token, id) => apiRequest(`/notifications/${id}/read`, { method: 'PATCH', token });
export const markAllNotificationsRead = (token) => apiRequest('/notifications/read-all', { method: 'PATCH', token });

// ── Reports ────────────────────────────────────────────────────────────────
export const fetchReports  = (token, p = {}) => apiRequest(`/reports${toQueryString(p)}`, { token });
export const generateReport = (token, body)  => apiRequest('/reports/generate', { method: 'POST', body, token });
export const deleteReport  = (token, id)     => apiRequest(`/reports/${id}`, { method: 'DELETE', token });

// ── Settings ───────────────────────────────────────────────────────────────
export const fetchSettings  = (token)          => apiRequest('/settings', { token });
export const upsertSetting  = (token, key, body) => apiRequest(`/settings/${key}`, { method: 'PUT', body, token });

// ── Audit Logs ─────────────────────────────────────────────────────────────
export const fetchAuditLogs = (token, p = {}) => apiRequest(`/audit-logs${toQueryString(p)}`, { token });
