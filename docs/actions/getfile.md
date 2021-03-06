
## Get File / getfile (internally `is.workflow.actions.documentpicker.open`)

> This action requires that Shortcuts has permission to use [object Object].


## description

### summary

Get files from iCloud Drive or Dropbox. Turn off “Show Document Picker” to specify a path to retrieve.


### note

In the iCloud picker, tap “Locations” to see document pickers from other apps.


### usage
```
getfile service=("iCloud Drive" | "Dropbox") showdocumentpicker=(true | false | variable) selectmultiple=(true | false | variable) filepath="string" initialpath="string" errorifnotfound=(true | false | variable)
```

### arguments

---

### service: Storage Service Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `iCloud Drive`
- `Dropbox`

---

### showdocumentpicker: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Default Value**: ```
		true
		```
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### selectmultiple: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true

**Only enabled if**: argument WFShowFilePicker == `true`

Accepts a boolean
or a variable.

---

### filepath: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"example.txt"`
**Allows Variables**: true

**Only enabled if**: argument WFShowFilePicker == `false`

Accepts a string 
or text
with the text.

---

### initialpath: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"optional"`
**Allows Variables**: true

**Only enabled if**: This action is always **disabled** inside Shortcutslang.

Accepts a string 
or text
with the text.

---

### errorifnotfound: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Default Value**: ```
		true
		```
**Allows Variables**: true

**Only enabled if**: argument WFShowFilePicker == `false`

Accepts a boolean
or a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFGetFileAction",
	"ActionKeywords": [
		"pick",
		"select",
		"file",
		"document",
		"filepicker.io",
		"filepicker",
		"ink"
	],
	"Category": "Documents",
	"Description": {
		"DescriptionNote": "In the iCloud picker, tap “Locations” to see document pickers from other apps.",
		"DescriptionSummary": "Get files from iCloud Drive or Dropbox. Turn off “Show Document Picker” to specify a path to retrieve."
	},
	"IconName": "Documents.png",
	"LastModifiedDate": "2017-03-13T05:00:00.000Z",
	"Name": "Get File",
	"Output": {
		"Multiple": true,
		"OutputName": "File",
		"Types": [
			"public.data"
		]
	},
	"Parameters": [
		{
			"AlwaysShowsButton": true,
			"Class": "WFStorageServicePickerParameter",
			"Key": "WFFileStorageService",
			"Label": "Service"
		},
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Key": "WFShowFilePicker",
			"Label": "Show Document Picker"
		},
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": false,
			"Key": "SelectMultiple",
			"Label": "Select Multiple",
			"RequiredResources": [
				{
					"WFParameterKey": "WFShowFilePicker",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"AutocapitalizationType": "None",
			"Class": "WFTextInputParameter",
			"Description": "The path to retrieve, such as \"/folder/file.txt\"",
			"DisableAutocorrection": true,
			"Key": "WFGetFilePath",
			"KeyboardType": "WebSearch",
			"Label": "File Path",
			"Placeholder": "example.txt",
			"RequiredResources": [
				{
					"WFParameterKey": "WFShowFilePicker",
					"WFParameterValue": false,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Left"
		},
		{
			"AutocapitalizationType": "None",
			"Class": "WFTextInputParameter",
			"DisableAutocorrection": true,
			"Key": "WFGetFileInitialDirectoryPath",
			"KeyboardType": "WebSearch",
			"Label": "Initial Path",
			"Placeholder": "optional",
			"TextAlignment": "Left",
			"Hidden": true
		},
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Key": "WFFileErrorIfNotFound",
			"Label": "Error If Not Found",
			"RequiredResources": [
				{
					"WFParameterKey": "WFShowFilePicker",
					"WFParameterValue": false,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		}
	],
	"RequiredResources": [
		{
			"RequiredResources": [
				{
					"WFParameterKey": "WFShowFilePicker",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"WFResourceClass": "WFUserInteractionResource"
		}
	],
	"Subcategory": "File Storage",
	"UserInterfaces": [
		"UIKit"
	]
}
```
