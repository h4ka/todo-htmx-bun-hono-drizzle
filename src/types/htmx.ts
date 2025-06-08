type HtmxAttributes = {
	// HTTP Methods
	"hx-get"?: string;
	"hx-post"?: string;
	"hx-put"?: string;
	"hx-patch"?: string;
	"hx-delete"?: string;

	// Core attributes
	"hx-target"?: string;
	"hx-swap"?: string;
	"hx-trigger"?: string;
	"hx-vals"?: string;

	// Additional common attributes
	"hx-boost"?: "true" | "false";
	"hx-push-url"?: string | "true" | "false";
	"hx-select"?: string;
	"hx-select-oob"?: string;
	"hx-indicator"?: string;
	"hx-confirm"?: string;
	"hx-disable"?: boolean | string;
	"hx-ext"?: string;
	"hx-headers"?: string;
	"hx-include"?: string;
	"hx-params"?: string | "none" | "*";
	"hx-prompt"?: string;
	"hx-replace-url"?: string | "true" | "false";
	"hx-request"?: string;
	"hx-sync"?: string;
	"hx-validate"?: "true" | "false";
	"hx-on::after-request"?: string;
};

enum CustomHtmxTrigger {
	TODO_DELETE = "todo_delete",
	TODO_ADD = "todo_add",
	TODO_UPDATE = "todo_update",
}

export { CustomHtmxTrigger, type HtmxAttributes };
