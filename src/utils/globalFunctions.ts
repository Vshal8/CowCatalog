import moment from 'moment';

export const fmt = (iso?: string) =>
    iso ? moment(iso).format('MMM D, YYYY') : '-';

export const fromNow = (iso?: string) =>
    iso ? moment(iso).fromNow() : '';

export const nowIso = () =>
    moment().toISOString();
