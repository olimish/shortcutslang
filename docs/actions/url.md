
## URL / url (internally `is.workflow.actions.url`)


## description

### summary

Passes the specified URL to the next action.


### usage
```
url url="string"
```

### arguments

---

### url: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"example.com"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### source json (for developers)

```json
{
	"ActionClass": "WFURLAction",
	"ActionKeywords": [
		"text",
		"such text",
		"very speech",
		"much words",
		"so wow"
	],
	"Category": "Web",
	"Description": {
		"DescriptionSummary": "Passes the specified URL to the next action."
	},
	"IconName": "URL.png",
	"Name": "URL",
	"Output": {
		"Multiple": false,
		"OutputName": "URL",
		"Types": [
			"NSURL"
		]
	},
	"Parameters": [
		{
			"AutocapitalizationType": "None",
			"Class": "WFTextInputParameter",
			"DisableAutocorrection": true,
			"Key": "WFURLActionURL",
			"KeyboardType": "URL",
			"Label": "URL",
			"Placeholder": "example.com",
			"TextContentType": "URL"
		}
	],
	"Subcategory": "URLs"
}
```
