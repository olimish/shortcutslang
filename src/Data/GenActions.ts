import * as builtin from "./Shortcuts 2.2.json";
import getTypes from "./GetTypes";
import {
	isCoercionTypeClass,
	AggrandizementPropertyRawName
} from "../WFTypes/Types";
import * as fs from "fs";

const actions: { [key: string]: any } = builtin[0];

actions["is.workflow.actions.documentpicker.open"].Parameters[4].Hidden = true;
actions["is.workflow.actions.conditional"].BlockInfo = {
	Example: "\n  ...\notherwise\n  ...\nend",
	Completion: "\n\t$0\notherwise\nend"
};
actions["is.workflow.actions.choosefrommenu"].BlockInfo = {
	Example: "\ncase\n  ...\ncase\n  ...\nend",
	Completion: "\ncase\n\t$0\nend"
};
actions["is.workflow.actions.repeat.count"].BlockInfo = {
	Example: "\n  ...\nend",
	Completion: "\n\t$0\nend"
};
actions["is.workflow.actions.repeat.each"].BlockInfo = {
	Example: "\n  ...\nend",
	Completion: "\n\t$0\nend"
};

// append to note -> append to evernote note
actions["is.workflow.actions.evernote.append"].AppInfo = "Evernote";

Object.values(actions).forEach((action: any) => {
	if (action.ActionClass === "WFContentItemPropertiesAction") {
		if (!action.Parameters) {
			action.Parameters = [];
		}
		const getTypeItemClass = action.WFContentItemClass;
		if (!isCoercionTypeClass(getTypeItemClass)) {
			action.Parameters.push({ Class: "_UndefinedCoercionClass" });
		} else {
			action.Parameters.push({
				Class: "WFEnumerationParameter",
				Key: "WFContentItemPropertyName",
				Label: "Get",
				Items: Object.values(getTypes[getTypeItemClass].properties).map(
					t => (<{name: string}>t).name
				)
			});
		}
	} else if (action.ActionClass === "WFContentItemFilterAction") {
		if (!action.Parameters) {
			action.Parameters = [];
		}
		const getTypeItemClass = action.WFContentItemClass;
		if (!isCoercionTypeClass(getTypeItemClass)) {
			action.Parameters.push({ Class: "_UndefinedCoercionClass" });
		} else {
			action.Parameters.push({
				Class: "WFFilterParameter",
				Key: "WFContentItemFilter",
				Label: "Filter",
				ContentItemClass: getTypeItemClass
			});
			action.Parameters.push({
				Class: "WFEnumerationParameter",
				Key: "WFContentItemSortProperty",
				Label: "Sort by",
				Items: [
					...Object.values(getTypes[getTypeItemClass].properties).map(
						t => (<{name: string}>t).name
					),
					"Random"
				]
			});
			action.Parameters.push({
				Class: "WFEnumerationParameter",
				Key: "WFContentItemSortOrder",
				Label: "Order",
				Items: ["Oldest First", "Newest First", "A to Z", "Z to A"],
				RequiredResources: [
					{
						WFParameterKey: "WFContentItemSortProperty",
						WFParameterValues: ["Random"],
						WFResourceClass: "WFParameterRelationResource",
						WFParameterRelation: "!="
					}
				]
			});
			action.Parameters.push({
				Class: "WFSwitchParameter",
				Key: "WFContentItemLimitEnabled",
				Label: "Limit"
			});
			action.Parameters.push({
				Class: "WFStepperParameter",
				Key: "WFContentItemLimitNumber",
				Label: "Get Items",
				RequiredResources: [
					{
						WFParameterKey: "WFSwitchParameter",
						WFParameterValues: [true],
						WFResourceClass: "WFParameterRelationResource"
					}
				]
			});
		}
	} else {
		// good, do nothing
	}
});

fs.writeFileSync(
	"./src/Data/OutActions.json",
	JSON.stringify(actions, null, "\t")
);
