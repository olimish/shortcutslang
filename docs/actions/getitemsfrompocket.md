
## Get Items from Pocket / getitemsfrompocket (internally `is.workflow.actions.pocket.get`)

> This action requires that Shortcuts has permission to use WFPocketAccessResource.


## description

### summary

Returns items in your Pocket account.


### usage
```
getitemsfrompocket wfpocketitemcount=number type=("Unread" | "Archived" | "All") search="string" tag="string"
```

### arguments

---

### wfpocketitemcount: Stepper Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#stepper-number-fields)
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### type: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"All"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Unread`
- `Archived`
- `All`

---

### search: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"optional"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### tag: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"optional"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### source json (for developers)

```json
{
	"ActionClass": "WFPocketGetAction",
	"AppIdentifier": "com.ideashower.ReadItLaterPro",
	"Category": "Web",
	"Description": {
		"DescriptionSummary": "Returns items in your Pocket account."
	},
	"Name": "Get Items from Pocket",
	"Output": {
		"Multiple": true,
		"OutputName": "Items from Pocket",
		"Types": [
			"NSURL"
		]
	},
	"Parameters": [
		{
			"Class": "WFStepperParameter",
			"Key": "WFPocketItemCount",
			"StepperDescription": "Number of Items",
			"StepperNoun": "Item",
			"StepperPluralNoun": "Items",
			"StepperPrefix": "Get"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "All",
			"Items": [
				"Unread",
				"Archived",
				"All"
			],
			"Key": "WFPocketItemState",
			"Label": "Type"
		},
		{
			"Class": "WFTextInputParameter",
			"Description": "If specified, only items with titles or URLs matching this search will be returned.",
			"Key": "WFPocketItemSearchTerm",
			"Label": "Search",
			"Placeholder": "optional",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFTextInputParameter",
			"Description": "If specified, only items matching this tag will be returned.",
			"Key": "WFPocketItemSearchTags",
			"Label": "Tag",
			"Placeholder": "optional",
			"TextAlignment": "Right"
		}
	],
	"RequiredResources": [
		"WFPocketAccessResource"
	],
	"ShortName": "Get Pocket Items"
}
```
