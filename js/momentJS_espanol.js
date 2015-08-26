moment.locale('fr', {
				    months : "Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split("_"),
				    monthsShort : "Ene._Feb._Mar._Abr._May._Jun._Jul._Ago_Sept._Oct._Nov._Dic.".split("_"),
				    weekdays : "Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado".split("_"),
				    weekdaysShort : "Dom._Lun._Mar._Mier._Jue._Vie._Sab.".split("_"),
				    weekdaysMin : "Do_Lu_Ma_Mi_Ju_Vi_Sa".split("_"),
				    longDateFormat : {
				        LT : "HH:mm",
				        LTS : "HH:mm:ss",
				        L : "DD/MM/YYYY",
				        LL : "D MMMM YYYY",
				        LLL : "D MMMM YYYY LT",
				        LLLL : "dddd D MMMM YYYY LT"
				    },
				    calendar : {
				        sameDay: "[Aujourd'hui �] LT",
				        nextDay: '[Demain �] LT',
				        nextWeek: 'dddd [�] LT',
				        lastDay: '[Hier �] LT',
				        lastWeek: 'dddd [dernier �] LT',
				        sameElse: 'L'
				    },
				    relativeTime : {
				        future : "dans %s",
				        past : "il y a %s",
				        s : "quelques secondes",
				        m : "une minute",
				        mm : "%d minutes",
				        h : "une heure",
				        hh : "%d heures",
				        d : "un jour",
				        dd : "%d jours",
				        M : "un mois",
				        MM : "%d mois",
				        y : "une ann�e",
				        yy : "%d ann�es"
				    },
				    ordinalParse : /\d{1,2}(er|�me)/,
				    ordinal : function (number) {
				        return number + (number === 1 ? 'er' : '�me');
				    },
				    meridiemParse: /PD|MD/,
				    isPM: function (input) {
				        return input.charAt(0) === 'M';
				    },
				    // in case the meridiem units are not separated around 12, then implement
				    // this function (look at locale/id.js for an example)
				    // meridiemHour : function (hour, meridiem) {
				    //     return /* 0-23 hour, given meridiem token and hour 1-12 */
				    // },
				    meridiem : function (hours, minutes, isLower) {
				        return hours < 12 ? 'PD' : 'MD';
				    },
				    week : {
				        dow : 1, // Monday is the first day of the week.
				        doy : 4  // The week that contains Jan 4th is the first week of the year.
				    }
				});
				$('#cuerpoActividades').append('Lenguaje definido.<br>');
				moment.locale('es'); // change the global locale to Spanish