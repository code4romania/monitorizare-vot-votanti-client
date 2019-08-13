import * as api from './baseApi';

export default {
  getIncidents(cb, errorCb) {
    return api.get('/incidents?status=Approved,Pending,Rejected&limit=1000', {}, cb, errorCb);
  },
  approveIncident(incidentId, cb, errorCb) {
    api.post(`/incidents/${incidentId}/approve`, {}, cb, errorCb);
  },
  rejectIncident(incidentId, cb, errorCb) {
    api.post(`/incidents/${incidentId}/reject`, {}, cb, errorCb);
  },
};
