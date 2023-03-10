import LL from "%i18n/i18n-svelte";
import { get } from "svelte/store";
const $LL = get(LL);

// Email types
interface SendEmail {
   from: string = 'Trixolutions Admin',
   to: string[] = ['mirostorm@gmail.com'],
   cc?: string,
   subject: string,
   message: string,
}

// Turnstile types
interface TokenValidateResponse {
   'error-codes': string[],
   success: boolean,
   action: string,
   cdata: string
}
type TurnstileVersion = 'v0' | 'v1';

// Form / Input types
export type InputItem = {
   enabled: boolean = false,
   disabled?: boolean,
   placeholder?: string,
   required?: boolean = true,
   automatic?: boolean = false,
}

export type TextAreaItem = InputItem & {
   rows?: number;
}
export type SelectItem = InputItem & {
   options: string[];
}

export type InputItems = InputItem[];

export type ChosenInputs = {
   name?: InputItem,
   email?: InputItem,
   phone?: InputItem,

   company?: InputItem,
   job?: InputItem,

   session_picked?: SelectItem,
   subject?: InputItem,
   message?: TextAreaItem,
   file?: InputItem,

   terms?: InputItem,

   password?: InputItem,
   password_confirm?: InputItem,

   address?: InputItem,
   city?: InputItem,
   state?: InputItem,
   zip?: InputItem,
   country?: InputItem,

   date?: InputItem,
   text?: InputItem,
   number?: InputItem,

   turnstile_response?: InputItem,
   accept_terms?: InputItem,
}