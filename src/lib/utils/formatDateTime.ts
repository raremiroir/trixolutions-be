
// Full day/month Date format
export const formatDateMonthFull = (date:any) => {
	let dateString = String(date).substring(0, 10);
	let year = dateString.substring(0, dateString.indexOf('-'));
	let month = dateString.substring((dateString.indexOf('-') + 1), dateString.indexOf('-') + 3);
	let day = dateString.substring((dateString.indexOf('-') + 4));
	day = day.charAt(0) === '0' ? day.replace('0', '') : day;
	month = month === '1' || month === '01' ? 'Januari'
	: month === '2' || month === '02' ? 'Februari'
	: month === '3' || month === '03' ? 'Maart'
	: month === '4' || month === '04' ? 'April'
	: month === '5' || month === '05' ? 'Mei'
	: month === '6' || month === '06' ? 'Juni'
	: month === '7' || month === '07' ? 'Juli'
	: month === '8' || month === '08' ? 'Augustus'
	: month === '9' || month === '09' ? 'September'
	: month === '10' ? 'Oktober'
	: month === '11' ? 'November'
	: month === '12' ? 'December'
	: month;

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