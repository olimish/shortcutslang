
## Run Script Over SSH / runscriptoverssh (internally `is.workflow.actions.runsshscript`)


## description

### summary

Runs a script on a remote computer over SSH.


### input

The input passed to the shell script (stdin)


### output

The output from the shell script (stdout)

### usage
```
runscriptoverssh host="string" port="string" user="string" password="string" script="string"
```

### arguments

---

### host: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"192.168.1.100"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### port: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"22"`
**Default Value**: `"22"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### user: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"root"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### password: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"••••••••"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### script: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Script"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### source json (for developers)

```json
{
	"ActionClass": "WFRunSSHScriptAction",
	"ActionKeywords": [
		"unix",
		"shell",
		"script",
		"ssh",
		"terminal",
		"linux",
		"mac"
	],
	"Category": "Scripting",
	"Description": {
		"DescriptionInput": "The input passed to the shell script (stdin)",
		"DescriptionResult": "The output from the shell script (stdout)",
		"DescriptionSummary": "Runs a script on a remote computer over SSH."
	},
	"IconName": "Scripting.png",
	"Input": {
		"Multiple": false,
		"Required": false,
		"Types": [
			"public.data"
		]
	},
	"LastModifiedDate": "2015-01-11T06:00:00.000Z",
	"Name": "Run Script Over SSH",
	"Output": {
		"Multiple": false,
		"OutputName": "Run Script Over SSH",
		"Types": [
			"public.data"
		]
	},
	"Parameters": [
		{
			"AutocapitalizationType": "None",
			"Class": "WFTextInputParameter",
			"DisableAutocorrection": true,
			"Key": "WFSSHHost",
			"KeyboardType": "URL",
			"Label": "Host",
			"Placeholder": "192.168.1.100",
			"TextContentType": "URL"
		},
		{
			"Class": "WFTextInputParameter",
			"DefaultValue": "22",
			"Key": "WFSSHPort",
			"KeyboardType": "NumberPad",
			"Label": "Port",
			"Placeholder": "22"
		},
		{
			"AutocapitalizationType": "None",
			"Class": "WFTextInputParameter",
			"DisableAutocorrection": true,
			"DoNotLocalizeValues": true,
			"Key": "WFSSHUser",
			"Label": "User",
			"Placeholder": "root",
			"TextContentType": "Username"
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFSSHPassword",
			"Label": "Password",
			"Placeholder": "••••••••",
			"SecureTextInput": true,
			"TextContentType": "Password"
		},
		{
			"AutocapitalizationType": "None",
			"Class": "WFTextInputParameter",
			"DisableAutocorrection": true,
			"Key": "WFSSHScript",
			"Label": "Script",
			"Multiline": true,
			"Placeholder": "Script"
		}
	],
	"ShortName": "Run SSH Script",
	"Subcategory": "Shell",
	"SuggestedNever": true
}
```
