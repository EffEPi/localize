localize
========

JS class for a simple localization, great for PHONEGAP apps

This is a very simple class that can be used to recognized the language supported by the user and automatically change all the elements on the page.

It requires jQuery (or any jQuery like library) to select the elements with class `lang`.

To use it, you need to add `lang` to the element that you want to localize, then add the "variable" name in the dataset using `data-lang` and if you want the text to be placed in a different place than inside the element (I.E.: as a placeholder text) use the `data-lang-to`
	
Usage:

Example 1:

	<div class="lang" data-lang="loading_contacts">Loading Contacts</div>
	<input class="lang" data-lang="search" data-lang-to="placeholder" placeholder="search.." value="" />
	<script>
		localize.start('it');
	</script>
	

Example 2:

	<script>
		localize.start('it');
		alert(localize.get('ratings_body'));
	</script>
	

You can find the current language in any way you want, this is the way I do it:

	try{
		var userLang = navigator.language||navigator.userLanguage;
		var language=userLang.split("-");
		localize.start(lang);
	}catch(err){
		localize.start('en');
	}


You can add the translation for each variable inside the class itself for the variable "locals":

this is an example:

	locals: {
		'en': {
			click_activation: 'click here to re-send the activation code',
			email: "Email",
			loading: " Loading...",	//space at the beginning
			loading_contacts: " Loading Contacts...",	//space at the beginning
			ratings_body: 'If you enjoy using gNext, whould you mind taking a moment to rate it? It won\'t take more than a minute. Thanks for your support!',
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


I am open to suggestions on how to make this better
