
## Open In... / openin (internally `is.workflow.actions.openin`)

> This action requires that Shortcuts has permission to use WFUserInteractionResource.


## description

### summary

Opens the input as a file in the specified app.


### usage
```
openin showopeninmenu=(true | false | variable) app=("app name" | "com.identifier.for.app")] wfappname="string"
```

### arguments

---

### showopeninmenu: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Default Value**: ```
		true
		```
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### app: App [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Allows Variables**: true

**Only enabled if**: argument WFOpenInAskWhenRun == `false`

Accepts a string containing a supported app or an app identifier.
You can use [this shortcut](https://www.icloud.com/shortcuts/7aff3fcdd0ca4bbc9c0d1b70e2825ed8) to get an app identifier for an unsupported app.
Supported apps are:
- `appstore` (App Store)
- `files` (Files)
- `shortcuts` (Shortcuts)
- `safari` (Safari)
- Any other app by entering its id from [this shortcut](https://www.icloud.com/shortcuts/7aff3fcdd0ca4bbc9c0d1b70e2825ed8)
		

---

### wfappname: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Allows Variables**: true

**Only enabled if**: This action is always **disabled** inside Shortcutslang.

Accepts a string 
or text
with the text.

---

### source json (for developers)

```json
{
	"ActionClass": "WFOpenInAction",
	"ActionKeywords": [
		"open",
		"file",
		"document",
		"in",
		"app",
		"application",
		"uidocumentinteractioncontroller"
	],
	"Category": "Documents",
	"Description": {
		"DescriptionSummary": "Opens the input as a file in the specified app."
	},
	"IconName": "Apps.png",
	"Input": {
		"Multiple": false,
		"Required": true,
		"Types": [
			"public.data"
		]
	},
	"InputPassthrough": true,
	"Name": "Open In...",
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Key": "WFOpenInAskWhenRun",
			"Label": "Show Open In Menu"
		},
		{
			"AppSearchType": "OpenIn",
			"Class": "WFAppPickerParameter",
			"Key": "WFOpenInAppIdentifier",
			"Label": "App",
			"RequiredResources": [
				{
					"WFParameterKey": "WFOpenInAskWhenRun",
					"WFParameterValue": false,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFTextInputParameter",
			"Hidden": true,
			"Key": "WFAppName"
		}
	],
	"RequiredResources": [
		"WFUserInteractionResource"
	],
	"Subcategory": "Files",
	"UserInterfaces": [
		"UIKit",
		"UIKitWidget"
	]
}
```
