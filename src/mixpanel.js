import mixpanel from "mixpanel-browser";
mixpanel.init("5a14e8a5c178e521e0d0d0a4e644f022", {debug: false});
export default mixpanel;

export const track = (event, obj) => {
    mixpanel.track(event, obj);
}

export const click = (obj) => {
    mixpanel.track('Click', obj);
}

export const link = (obj) => {
    mixpanel.track('Click Link', obj);
}

export const cta = (obj) => {
    mixpanel.track('Click CTA', obj);
}

