import * as uuidv4 from "uuid/v4";
import { Shortcut, Action } from "./OutputData";
import { AsAble } from "./ParserData";
import defaultPreprocessorActions from "./PreprocessorActions";

export class ConvertingContext {
	namedVariables: { [key: string]: boolean };
	magicVariables: { [key: string]: { action: Action } };
	shortcut: Shortcut;
	lastVariableAction?: Action;
	controlFlowStack: Array<{ uuid: string; number: number; wfaction: any }>;
	parserVariables: { [key: string]: AsAble };
	parserActions: {
		[key: string]: (cc: ConvertingContext, ...args: AsAble[]) => void;
	};
	above?: ConvertingContext;

	constructor(above?: ConvertingContext) {
		this.namedVariables = {};
		this.magicVariables = {};
		this.parserVariables = {};
		this.parserActions = {};

		this.shortcut = new Shortcut("My Great Shortcut");
		this.lastVariableAction = undefined;
		///
		this.controlFlowStack = [];

		this.above = above;
	}

	getNamedVariable(name: string): boolean | undefined {
		// if this doesn't have it try this.above
		if (this.namedVariables[name]) {
			return this.namedVariables[name];
		}
		if (this.above) {
			return this.above.getNamedVariable(name);
		}
		return undefined;
	}
	setNamedVariable(name: string): void {
		// go to the highest this.above and set it there, named variables are global
		if (this.above) {
			return this.above.setNamedVariable(name);
		}
		this.namedVariables[name] = true;
	}

	getMagicVariable(name: string): { action: Action } | undefined {
		// if this doesn't have it try this.above
		if (this.magicVariables[name]) {
			return this.magicVariables[name];
		}
		if (this.above) {
			return this.above.getMagicVariable(name);
		}
		return undefined;
	}
	setMagicVariable(name: string, action: Action) {
		// set this's magicVariable[name] to {action:action}
		this.magicVariables[name] = { action };
	}

	getParserVariable(name: string): AsAble | undefined {
		if (this.parserVariables[name]) {
			return this.parserVariables[name];
		}
		if (this.above) {
			return this.above.getParserVariable(name);
		}
		return undefined;
	}
	setParserVariable(name: string, value: AsAble) {
		this.parserVariables[name] = value;
	}

	getParserAction(
		name: string
	): ((cc: ConvertingContext, ...args: AsAble[]) => void) | undefined {
		if (defaultPreprocessorActions[name]) {
			return defaultPreprocessorActions[name];
		}
		if (this.parserActions[name]) {
			return this.parserActions[name];
		}
		if (this.above) {
			return this.above.getParserAction(name);
		}
		return undefined;
	}
	setParserAction(
		name: string,
		value: (cc: ConvertingContext, ...args: AsAble[]) => void
	) {
		this.parserActions[name] = value;
	}

	in(): ConvertingContext {
		return new ConvertingContext(this);
	}

	pushControlFlow(wfaction: any) {
		const res = { uuid: uuidv4(), number: 0, wfaction };
		this.controlFlowStack.push(res);
		return res;
	}
	nextControlFlow() {
		// if this doesn't have it, too bad.
		// controlflow does not go up.
		const last = this.controlFlowStack[this.controlFlowStack.length - 1];
		if (!last) {
			return undefined;
		}
		last.number = 1;
		return last;
	}
	endControlFlow() {
		const last = this.controlFlowStack.pop();
		if (!last) {
			return undefined;
		}
		last.number = 2;
		return last;
	}
	add(action: Action): void {
		// add an action to the highest cc
		if (this.above) {
			return this.above.add(action);
		}
		this.shortcut.add(action);
		this.lastVariableAction = action;
	}
}
