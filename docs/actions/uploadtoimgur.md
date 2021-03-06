
## Upload to Imgur / uploadtoimgur (internally `is.workflow.actions.imgur.upload`)

> This action requires that Shortcuts has permission to use [object Object].


## description

### summary

Uploads the input to Imgur.


### note

Powered by Imgur (imgur.com)


### usage
```
uploadtoimgur uploadanonymously=(true | false | variable) directlink=(true | false | variable) createalbum=(true | false | variable) albumlayout=("Blog" | "Grid" | "Horizontal" | "Vertical") albumprivacy=("Public" | "Hidden" | "Secret") title="string" description="string"
```

### arguments

---

### uploadanonymously: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Default Value**: ```
		true
		```
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### directlink: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true

**Only enabled if**: argument WFImgurAlbum == `false`

Accepts a boolean
or a variable.

---

### createalbum: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### albumlayout: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Blog"`
**Allows Variables**: true

**Only enabled if**: argument WFImgurAlbum == `true`

Accepts a string 
or variable
containing one of the options:

- `Blog`
- `Grid`
- `Horizontal`
- `Vertical`

---

### albumprivacy: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Hidden"`
**Allows Variables**: true

**Only enabled if**: argument WFImgurAlbum == `true`

Accepts a string 
or variable
containing one of the options:

- `Public`
- `Hidden`
- `Secret`

---

### title: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"optional"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### description: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Description"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### source json (for developers)

```json
{
	"ActionClass": "WFImgurUploadAction",
	"ActionKeywords": [
		"image",
		"reddit",
		"album",
		"photo"
	],
	"AppIdentifier": "imgurmobile",
	"Category": "Photos & Video",
	"CreationDate": "2015-05-03T05:00:00.000Z",
	"Description": {
		"DescriptionNote": "Powered by Imgur (imgur.com)",
		"DescriptionSummary": "Uploads the input to Imgur."
	},
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFImageContentItem"
		]
	},
	"Name": "Upload to Imgur",
	"Output": {
		"Multiple": true,
		"OutputName": "Imgur URLs",
		"Types": [
			"NSURL"
		]
	},
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Key": "WFImgurAnonymous",
			"Label": "Upload Anonymously"
		},
		{
			"Class": "WFSwitchParameter",
			"Description": "If enabled, the action will return a link to the image, and not its Imgur page.",
			"Key": "WFImgurDirectLink",
			"Label": "Direct Link",
			"RequiredResources": [
				{
					"WFParameterKey": "WFImgurAlbum",
					"WFParameterValue": false,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": false,
			"Description": "If enabled, the input images will be grouped into an album. Otherwise, the individual links will be returned.",
			"Key": "WFImgurAlbum",
			"Label": "Create Album"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Blog",
			"Items": [
				"Blog",
				"Grid",
				"Horizontal",
				"Vertical"
			],
			"Key": "WFImgurAlbumLayout",
			"Label": "Album Layout",
			"RequiredResources": [
				{
					"WFParameterKey": "WFImgurAlbum",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Hidden",
			"Items": [
				"Public",
				"Hidden",
				"Secret"
			],
			"Key": "WFImgurAlbumPrivacy",
			"Label": "Album Privacy",
			"RequiredResources": [
				{
					"WFParameterKey": "WFImgurAlbum",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFImgurTitle",
			"Label": "Title",
			"Placeholder": "optional",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFImgurDescription",
			"Label": "Description",
			"Multiline": true,
			"Placeholder": "Description"
		}
	],
	"RequiredResources": [
		{
			"RequiredResources": [
				{
					"WFParameterKey": "WFImgurAnonymous",
					"WFParameterValue": false,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"WFAccountClass": "WFImgurAccount",
			"WFResourceClass": "WFAccountAccessResource"
		}
	]
}
```
