import LL from "%i18n/i18n-svelte";
import { get } from "svelte/store";
const $LL = get(LL);

export type ValidationOptions = {
   required?: boolean;
   min?: number;
   max?: number;
   email?: boolean;
}

export type TextAreaOptions = {
   noResize?: boolean;
   noClear?: boolean;
   rows?: number;
}


export type InputItem = {
   label: string,
   key: string,
   value: string,
   disabled?: boolean,
   placeholder?: string,
   options: ValidationOptions,
   automatic?: boolean
}
export type TextAreaItem = InputItem & {
   textAreaOptions: TextAreaOptions
}
export type InputItems = InputItem[];


export type ChosenInputs = {
   name?: {
      first_name: InputItem,
      last_name: InputItem
   };
   email?: InputItem,
   phone?: InputItem,
   
   org?: {
      company?: InputItem,
      job?: InputItem,
   },

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
}