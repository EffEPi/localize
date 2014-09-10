var localize={
	lang: '',
	locals: {
		'en': {
			click_activation: 'click here to re-send the activation code',
			email: "Email",
			loading: " Loading...",	//space at the beginning
			loading_contacts: " Loading Contacts...",	//space at the beginning
			ratings_body: 'If you enjoy using gNoclu, whould you mind taking a moment to rate it? It won\'t take more than a minute. Thanks for your support!',
			ratings_button_rate:'Rate gNext',
			settings_language: "Language",
			"": ""
		},
		'it': {
			click_activation: 'clicca qui per ricevere il codice di attivazione',
			email: "Email",
			loading: " Loading...",	//space at the beginning
			loading_contacts: " Loading Contacts...",	//space at the beginning
			ratings_body: 'Se ti piace gNext, che ne dici di spendere un momento per valutarlo? Non richiedera\' piu\' di un minuto.  Grazie!',
			settings_language: "Lingua",
			"": ""
		}
	},
	start: function(lang){
		app.log('localize setup');
		lang=lang.toLowerCase();
		this.lang=lang;
		var langs=this.locals;
		$('.lang').each(function(){
			var txt=$(this).data('lang');
			var to=$(this).data('lang-to');
			if(txt!==''&&typeof langs[lang]!=='undefined'&&typeof langs[lang][txt]!=='undefined'){
				switch(to){
					case 'text':
						$(this).text(langs[lang][txt]);
						break;
					case 'placeholder':
					case 'alt':
					case 'title':
						$(this).attr(to, langs[lang][txt]);
						break;
					case 'html':
					default:
						$(this).html(langs[lang][txt]);
						break;
				}
			}
		});
	},
	get: function(code){
		var langs=this.locals, lang=this.lang;
		if(code!==''&&typeof langs[lang]!=='undefined'&&typeof langs[lang][code]!=='undefined'){
			return langs[lang][code];
		}else{
			return '';
		}
	}
};
//localize.start(lang);
//try{
//	var userLang = navigator.language||navigator.userLanguage;
//	var language=userLang.split("-");
//	localize.start(lang);
//}catch(err){
//	localize.start('en');
//}
