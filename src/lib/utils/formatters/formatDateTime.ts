
// Full day/month Date format
export const formatDateMonthFull = (date:any) => {
	let dateString = String(date).substring(0, 10);
	let year = dateString.substring(0, dateString.indexOf('-'));
	let month = dateString.substring((dateString.indexOf('-') + 1), dateString.indexOf('-') + 3);
	let day = dateString.substring((dateString.indexOf('-') + 4));
	day = day.charAt(0) === '0' ? day.replace('0', '') : day;
	month = getMonthFull(month);

	return `${day} ${month}`;
}
// Short d/m Date format
export const formatDateShort = (date:any) => {
	let dateString = String(date).substring(0, 10);
	let month = dateString.substring((dateString.indexOf('-') + 1), dateString.indexOf('-') + 3);
	let day = dateString.substring((dateString.indexOf('-') + 4));

	return `${day}/${month}`;
}
// Short d/m/yyyy format
export const formatDateFull = (date:any) => {
	let dateString = String(date).substring(0, 10);
	let year = dateString.substring(0, dateString.indexOf('-'));
	let month = dateString.substring((dateString.indexOf('-') + 1), dateString.indexOf('-') + 3);
	let day = dateString.substring((dateString.indexOf('-') + 4));

	return `${day}/${month}/${year}`;
}
// Hour format
export const formatTime = (date:any) => {
	let dateString = String(date).substring(11, 20);
	let hour = dateString.substring(0, dateString.indexOf(':'));
	let minute = dateString.substring((dateString.indexOf(':') + 1), dateString.indexOf(':') + 3);
	return `${hour}:${minute}`;
}

// Format only year
export const formatYear = (date:any) => {
	let dateString = String(date).substring(0, 10);
	return dateString.substring(0, dateString.indexOf('-')); 
}

// format only month (short string)
export const formatMonthShort = (date:any) => {
	let dateString = String(date).substring(0, 10);
	let month = dateString.substring((dateString.indexOf('-') + 1), dateString.indexOf('-') + 3);
	month = getMonthShort(month);

	return `${month}`;
}

// TODO: localize
const getMonthShort = (month) => {
	switch(month) {
		case '1' || '01' 	:	return 'jan'; 	break;
		case '2' || '02' 	:	return 'feb'; 	break;
		case '3' || '03' 	:	return 'mar'; 	break;
		case '4' || '04' 	:	return 'apr'; 	break;
		case '5' || '05' 	:	return 'mei';	break;
		case '6' || '06' 	:	return 'jun'; 	break;
		case '7' || '07' 	:	return 'jul'; 	break;
		case '8' || '08' 	:	return 'aug'; 	break;
		case '9' || '09' 	:	return 'sep'; 	break;
		case '10' 			: 	return 'okt'; 	break;
		case '11' 			: 	return 'nov'; 	break;
		case '12' 			: 	return 'dec'; 	break;
		default: 				return 'jan';	break;
	}
}
const getMonthFull = (month) => {
	switch(month) {
		case '1' || '01' 	:	return 'Januari'; 	break;
		case '2' || '02' 	:	return 'Februari'; 	break;
		case '3' || '03' 	:	return 'Maart'; 		break;
		case '4' || '04' 	:	return 'April'; 		break;
		case '5' || '05' 	:	return 'Mei'; 			break;
		case '6' || '06' 	:	return 'Juni'; 		break;
		case '7' || '07' 	:	return 'Juli'; 		break;
		case '8' || '08' 	:	return 'Augustus'; 	break;
		case '9' || '09' 	:	return 'September'; 	break;
		case '10' 			: 	return 'Oktober'; 	break;
		case '11' 			: 	return 'November'; 	break;
		case '12' 			: 	return 'December'; 	break;
		default: 				return 'Januari';		break;
	}
}