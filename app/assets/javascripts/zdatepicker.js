
$.datepicker.regional['de'] = {
	clearText: 'löschen', clearStatus: 'aktuelles Datum löschen',
  closeText: 'schließen', closeStatus: 'ohne Änderungen schließen',
  prevText: '<zurück', prevStatus: 'letzten Monat zeigen',
  nextText: 'Vor>', nextStatus: 'nächsten Monat zeigen',
  currentText: 'heute', currentStatus: '',
  monthNames: ['Januar','Februar','März','April','Mai','Juni', 'Juli','August','September','Oktober','November','Dezember'],
  monthNamesShort: ['Jan','Feb','Mär','Apr','Mai','Jun', 'Jul','Aug','Sep','Okt','Nov','Dez'],
  monthStatus: 'anderen Monat anzeigen', yearStatus: 'anderes Jahr anzeigen',
  weekHeader: 'Wo', weekStatus: 'Woche des Monats',
  dayNames: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
  dayNamesShort: ['So','Mo','Di','Mi','Do','Fr','Sa'],
  dayNamesMin: ['So','Mo','Di','Mi','Do','Fr','Sa'],
  dayStatus: 'Setze DD als ersten Wochentag', dateStatus: 'Wähle D, M d',
  dateFormat: 'dd.mm.yy', firstDay: 1, 
  initStatus: 'Wähle ein Datum', isRTL: false};
$.datepicker.setDefaults($.datepicker.regional['de']);

$.timepicker.regional['de'] = {
	timeOnlyTitle: 'Zeit Wählen',
	timeText: 'Zeit',
	hourText: 'Stunde',
	minuteText: 'Minute',
	secondText: 'Sekunde',
	millisecText: 'Millisekunde',
	timezoneText: 'Zeitzone',
	currentText: 'Jetzt',
	closeText: 'Fertig',
	timeFormat: 'HH:mm',
	amNames: ['vorm.', 'AM', 'A'],
	pmNames: ['nachm.', 'PM', 'P'],
	isRTL: false
};
$.timepicker.setDefaults($.timepicker.regional['de']);

$(document).ready(function(){
  $('input.ui-date-picker').datepicker({
    useLocalTimezone: true,
    defaultDate: new Date(2013, 02, 01)
  });
  $('input.ui-datetime-picker').datetimepicker({
  	useLocalTimezone: true,
    defaultDate: new Date(2013, 02, 01)
  });
  $('#simulate_datetime').datetimepicker({
    useLocalTimezone: true,
    defaultDate: new Date(2013, 02, 01)
  });
});