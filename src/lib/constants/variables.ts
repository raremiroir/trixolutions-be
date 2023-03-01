const variables = {
  mapbox: import.meta.env.VITE_MAPBOX_TOKEN,
  turnstile: import.meta.env.VITE_TURNSTILE_SITEKEY,
  mailgun_key: import.meta.env.VITE_MAILGUN_API_KEY,
  mailgun_domain: import.meta.env.VITE_MAILGUN_DOMAIN,
  mailgun_base_url: import.meta.env.VITE_MAILGUN_BASE_URL,
  mailchimp: import.meta.env.VITE_MAILCHIMP_API_KEY,
};

export default variables;