import {
  mapbox_token,
  turnstile_sitekey,
  mailgun_api_key,
  mailgun_domain,
  mailgun_base_url,
  mailchimp_api_key
} from '$lib/constants/env'

const variables = process.env.NODE_ENV === 'production' 
  ? {
    mapbox: import.meta.env.VITE_MAPBOX_TOKEN,
    turnstile: import.meta.env.VITE_TURNSTILE_SITEKEY,
    mailgun_key: import.meta.env.VITE_MAILGUN_API_KEY,
    mailgun_domain: import.meta.env.VITE_MAILGUN_DOMAIN,
    mailgun_base_url: import.meta.env.VITE_MAILGUN_BASE_URL,  
    mailchimp: import.meta.env.VITE_MAILCHIMP_API_KEY,
  } 
  : {
    mapbox: mapbox_token,
    turnstile: turnstile_sitekey,
    mailgun_key: mailgun_api_key,
    mailgun_domain: mailgun_domain,
    mailgun_base_url: mailgun_base_url,
    mailchimp: mailchimp_api_key,
  };

export default variables;