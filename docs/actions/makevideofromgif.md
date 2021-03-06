
## Make Video from GIF / makevideofromgif (internally `is.workflow.actions.makevideofromgif`)


## description

### summary

Converts an animated GIF into a video.


### input

An animated GIF


### output

A video

### usage
```
makevideofromgif wfmakevideofromgifactionloopcount=number
```

### arguments

---

### wfmakevideofromgifactionloopcount: Stepper Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#stepper-number-fields)
**Default Value**: `1`
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### source json (for developers)

```json
{
	"ActionClass": "WFMakeVideoFromGIFAction",
	"ActionKeywords": [
		"video",
		"gif",
		"convert",
		"make"
	],
	"Category": "Photos & Video",
	"CreationDate": "2015-02-03T08:00:00.000Z",
	"Description": {
		"DescriptionInput": "An animated GIF",
		"DescriptionResult": "A video",
		"DescriptionSummary": "Converts an animated GIF into a video."
	},
	"IconName": "GIF.png",
	"Input": {
		"Multiple": false,
		"Required": true,
		"Types": [
			"com.compuserve.gif"
		]
	},
	"InputPassthrough": false,
	"Name": "Make Video from GIF",
	"Output": {
		"Multiple": false,
		"OutputName": "Video",
		"Types": [
			"public.mpeg-4"
		]
	},
	"Parameters": [
		{
			"Class": "WFStepperParameter",
			"DefaultValue": 1,
			"Key": "WFMakeVideoFromGIFActionLoopCount",
			"StepperDescription": "Number of Loops",
			"StepperNoun": "Time",
			"StepperPluralNoun": "Times",
			"StepperPrefix": "Loop"
		}
	],
	"ShortName": "Make Video",
	"Subcategory": "GIFs",
	"SuggestedNever": true
}
```
