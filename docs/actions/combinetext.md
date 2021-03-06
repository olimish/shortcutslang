
## Combine Text / combinetext (internally `is.workflow.actions.text.combine`)


## description

### summary

Joins text together, inserting the separator between each join.


### usage
```
combinetext separator=("New Lines" | "Spaces" | "Custom") custom="string"
```

### arguments

---

### separator: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Spaces"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `New Lines`
- `Spaces`
- `Custom`

---

### custom: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Text"`
**Allows Variables**: true

**Only enabled if**: argument WFTextSeparator == `Custom`

Accepts a string 
or text
with the text.

---

### source json (for developers)

```json
{
	"ActionClass": "WFTextComponentsAction",
	"ActionKeywords": [
		"separate",
		"delimiter"
	],
	"Category": "Text",
	"Description": {
		"DescriptionSummary": "Joins text together, inserting the separator between each join."
	},
	"IconName": "Text.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"NSString"
		]
	},
	"InputPassthrough": false,
	"Name": "Combine Text",
	"Output": {
		"Multiple": false,
		"OutputName": "Combined Text",
		"Types": [
			"NSString"
		]
	},
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Spaces",
			"Items": [
				"New Lines",
				"Spaces",
				"Custom"
			],
			"Key": "WFTextSeparator",
			"Label": "Separator"
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFTextCustomSeparator",
			"Label": "Custom",
			"Placeholder": "Text",
			"RequiredResources": [
				{
					"WFParameterKey": "WFTextSeparator",
					"WFParameterValue": "Custom",
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		}
	],
	"Subcategory": "Text Editing",
	"WFTextComponentsMode": "Combine"
}
```
