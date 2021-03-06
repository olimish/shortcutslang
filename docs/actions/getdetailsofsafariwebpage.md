
## Get Details of Safari Webpage / getdetailsofsafariwebpage (internally `is.workflow.actions.properties.safariwebpage`)


## description

### note

Safari Webpage items are only available when running your shortcut as an Action Extension in Safari.


### usage
```
getdetailsofsafariwebpage get=("Name" | "Page Contents" | "Page URL" | "Page Selection")
```

### arguments

---

### get: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Name`
- `Page Contents`
- `Page URL`
- `Page Selection`

---

### source json (for developers)

```json
{
	"ActionClass": "WFContentItemPropertiesAction",
	"AppIdentifier": "com.apple.mobilesafari",
	"Category": "Web",
	"CreationDate": "2016-03-07T08:00:00.000Z",
	"Description": {
		"DescriptionNote": "Safari Webpage items are only available when running your shortcut as an Action Extension in Safari."
	},
	"Name": "Get Details of Safari Webpage",
	"Subcategory": "Safari",
	"WFContentItemClass": "WFSafariWebPageContentItem",
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"Key": "WFContentItemPropertyName",
			"Label": "Get",
			"Items": [
				"Name",
				"Page Contents",
				"Page URL",
				"Page Selection"
			]
		}
	]
}
```
