# Failcoder's Google Calendar Rolodex

This is a very simple addon that will read your Google Calendar and output the results in an accordion style list.

## USAGE

Having included all necessary files, you will need to use the following exact lines in your HTML so that the script can target them:

```
<section id="gcr-content">
	<div id="gcr-container" class="ac-container">
		<div id="gcr-loader"></div>
		<div id="gcr-feed"></div>
	</div>
</section>
```
...then just before your </body> tag add this script call.

```
<script>
	gSchedule.launch({uri : 'http://www.google.com/calendar/feeds/en.usa%23holiday%40group.v.calendar.google.com/public/full'});
</script>
```

The uri points to your calendar and can be found within the Google Calendar settings panel.
**NOTE: **You will want to use the "XML" version of the link.

For a better understanding of how to put this together, please examine "schedule.html" to see the general layout.

## Author

Steven Jackson (aka: Failcoder)

## License

MIT