
## Get Latest Photos / getlatestphotos (internally `is.workflow.actions.getlastphoto`)

> This action requires that Shortcuts has permission to use WFPhotoAccessResource.


## description

### summary

Gets the most recent photos from the camera roll.


### usage
```
getlatestphotos wfgetlatestphotocount=number includescreenshots=(true | false | variable)
```

### arguments

---

### wfgetlatestphotocount: Stepper Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#stepper-number-fields)
**Default Value**: `1`
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### includescreenshots: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Default Value**: ```
		true
		```
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFGetLatestPhotosAction",
	"ActionKeywords": [
		"camera",
		"roll",
		"picture",
		"last"
	],
	"AppIdentifier": "com.apple.mobileslideshow",
	"Category": "Photos & Video",
	"Description": {
		"DescriptionSummary": "Gets the most recent photos from the camera roll."
	},
	"Name": "Get Latest Photos",
	"Output": {
		"Multiple": true,
		"OutputName": "Latest Photos",
		"Types": [
			"PHAsset"
		]
	},
	"Parameters": [
		{
			"Class": "WFStepperParameter",
			"DefaultValue": 1,
			"Key": "WFGetLatestPhotoCount",
			"StepperDescription": "Number of Photos",
			"StepperNoun": "Photo",
			"StepperPluralNoun": "Photos"
		},
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Key": "WFGetLatestPhotosActionIncludeScreenshots",
			"Label": "Include Screenshots"
		}
	],
	"RequiredResources": [
		"WFPhotoAccessResource"
	],
	"ShortName": "Get Photos",
	"Subcategory": "Photos",
	"WFGetLatestPhotosActionType": "Photo"
}
```
