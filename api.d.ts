/********************************************************
 JobRouter JavaScript-API Stubs v2022.1
 ********************************************************/
type CustomErrorHandler = (errorMessage: string) => void;
type DecimalSeparator = "" | "," | ".";
type DialogFunctionUserParameters = {
    [key: string]: unknown;
};
type DialogSuccessReturnObject = {
    status: string;
    result?: {
        [key: string]: unknown;
    };
};
type DialogErrorReturnObject = {
    status: string;
    message?: string;
    result?: {
        [key: string]: unknown;
    };
};
type ElementValue = string | number | Date | boolean;
type MessageReplacements = {
    [key: string]: string;
};
type StepAction = "abort" | "answer" | "assign" | "back" | "finish" | "jumpTo" | "request" | "resubmission" | "save" | "send";
type Stamp = { text: string } & StampOptions;
type StampOptionOnStampFunction = (stamp: Stamp, x: number, y: number) => void;
type StampOptions = {
    includeTime: boolean;
    includeDate: boolean;
    color: string;
    onStamp?: StampOptionOnStampFunction;
};
type SubtableData = {
    [key: number]: SubtableRowObject;
};
type SubtableRowObject = {
    [key: string]: ElementValue;
};
type ThousandsSeparator = "" | "," | "." | "'";
type TimeUnit = "s" | "m" | "h" | "d";

declare const jr_execute: (action: StepAction | "reserve") => void;
declare const jr_get_value: (id: string, customErrorHandler?: CustomErrorHandler) => ElementValue;
declare const jr_set_value: (id: string, value: ElementValue, customHandler?: CustomErrorHandler) => void;
declare const jr_get_display_value: (id: string, customHandler?: CustomErrorHandler) => ElementValue;
declare const jr_reset_value: (id: string, customHandler?: CustomErrorHandler) => void;
declare const jr_set_required: (id: string, value?: boolean, customHandler?: CustomErrorHandler) => void;
declare const jr_is_required: (id: string, customHandler?: CustomErrorHandler) => boolean;
declare const jr_set_label: (id: string, label: string, radioValue?: string, customHandler?: CustomErrorHandler) => void;
declare const jr_get_label: (id: string, radioValue?: string, customHandler?: CustomErrorHandler) => string;
declare const jr_set_label2: (id: string, label: string, radioValue?: string, customHandler?: CustomErrorHandler) => void;
declare const jr_get_label2: (id: string, radioValue?: string, customHandler?: CustomErrorHandler) => string;
declare const jr_show: (id: string | string[]) => void;
declare const jr_hide: (id: string | string[]) => void;
declare const jr_is_visible: (id: string, customHandler?: CustomErrorHandler) => boolean;
declare const jr_show_page: (pageName: string | string[]) => void;
declare const jr_hide_page: (pageName: string | string[]) => void;
declare const jr_show_step_action: (action: StepAction | StepAction[]) => void;
declare const jr_hide_step_action: (action: StepAction | StepAction[]) => void;
declare const jr_set_step_action_label: (action: StepAction, label: string) => void;
declare const jr_select_page: (pageName: string) => void;
declare const jr_set_readonly: (id: string, value?: boolean, customHandler?: CustomErrorHandler) => void;
declare const jr_is_readonly: (id: string, customHandler?: CustomErrorHandler) => boolean;
declare const jr_set_disabled: (id: string, value?: boolean, customHandler?: CustomErrorHandler) => void;
declare const jr_is_disabled: (id: string, customHandler?: CustomErrorHandler) => boolean;
declare const jr_set_background_color: (id: string, color: string, customHandler?: CustomErrorHandler) => void;
declare const jr_set_subtable_value: (subtableViewName: string, rowId: number, columnName: string, value: ElementValue, customHandler?: CustomErrorHandler) => void;
declare const jr_set_subtable_display_value: (subtableViewName: string, rowId: number, columnName: string, value: ElementValue, customHandler?: CustomErrorHandler) => void;
declare const jr_get_subtable_value: (subtableViewName: string, rowId: number | "sum", columnName: string, customHandler?: CustomErrorHandler) => ElementValue;
declare const jr_get_subtable_display_value: (subtableViewName: string, rowId: number, columnName: string, customHandler?: CustomErrorHandler) => ElementValue;
declare const jr_add_subtable_row: (subtableViewName: string, rows: number | SubtableRowObject | SubtableRowObject[], ignoreMaxRows?: boolean, finishCallback?: (addedRows: number) => void, customHandler?: CustomErrorHandler) => void;
declare const jr_remove_subtable_row: (subtableViewName: string, rowId: number | number[], ignoreMinRows?: boolean) => void;
declare const jr_copy_subtable_row: (subtableViewName: string, rowId: number | number[]) => void;
declare const jr_hide_subtable_column: (subtableViewName: string, columnName: string | string[], radioValue?: string) => void;
declare const jr_show_subtable_column: (subtableViewName: string, columnName: string | string[], radioValue?: string) => void;
declare const jr_hide_subtable_row: (subtableViewName: string, rowId: number) => void;
declare const jr_show_subtable_row: (subtableViewName: string, rowId: number) => void;
declare const jr_get_subtable_count: (subtableViewName: string, customHandler?: CustomErrorHandler) => number;
declare const jr_get_subtable_max_id: (subtableViewName: string, customHandler?: CustomErrorHandler) => number;
declare const jr_get_subtable_row_ids: (subtableViewName: string, customHandler?: CustomErrorHandler) => number[];
declare const jr_sum_subtable_column: (subtableViewName: string, columnName: string, thousandsSeparator?: ThousandsSeparator, decimalSeparator?: DecimalSeparator, decimalPlace?: number) => number;
declare const jr_loop_table: (subtableViewName: string, callback: (subtableViewName: string, currentRow: number) => void, customHandler?: CustomErrorHandler) => void;
declare const jr_set_column_label: (id: string, columnName: string, label: string, customHandler?: CustomErrorHandler) => void;
declare const jr_get_column_label: (id: string, columnName: string, customHandler?: CustomErrorHandler) => string;
declare const jr_set_cell_label2: (subtableViewName: string, rowId: number, columnName: string, label: string, radioValue?: string, customHandler?: CustomErrorHandler) => void;
declare const jr_get_cell_label2: (subtableViewName: string, rowId: number, columnName: string, radioValue?: string, customHandler?: CustomErrorHandler) => string;
declare const jr_get_table_count: (tableName: string, customHandler?: CustomErrorHandler) => number;
declare const jr_get_table_max_id: (tableName: string, customHandler?: CustomErrorHandler) => number;
declare const jr_set_table_background_color: (tableName: string, rowId: number | "*", columnName: string, color: string, customHandler?: CustomErrorHandler) => void;
declare const jr_date_add: (date: Date, value: string, timeUnit: TimeUnit, customHandler?: CustomErrorHandler) => Date;
declare const jr_date_diff: (date1: Date, date2: Date, timeUnit: TimeUnit, customHandler?: CustomErrorHandler) => number;
declare const jr_sql_refresh: (id: string | string[], successCallback?: (id: string, oldValue: ElementValue) => void, errorCallback?: (id: string, error: string) => void, sequential?: boolean) => void;
declare const jr_subtable_refresh: (subtableViewName: string, columnName?: string, rowId?: number | "*", successCallback?: (subtableViewName: string, columnName: string, rowId: number | "*") => void, errorCallback?: (subtableViewName: string, columnName: string, rowId: number | "*", error: string) => void, customHandler?: CustomErrorHandler) => void;
declare const jr_message: (message: string, replacements?: MessageReplacements, customHandler?: CustomErrorHandler) => void;
declare const jr_get_message: (message: string, replacements?: MessageReplacements, customHandler?: CustomErrorHandler) => string;
declare const jr_allow_send: (value: boolean) => void;
declare const jr_enable_send: () => void;
declare const jr_disable_send: () => void;
declare const jr_set_steplabel: (label: string) => void;
declare const jr_get_steplabel: () => string;
declare const jr_print: (callback?: () => void) => void;
declare const jr_get_table_value: (tableName: string, rowId: number, columnName: string, customHandler?: CustomErrorHandler) => ElementValue;
declare const jr_execute_dialog_function: (functionName: string, userParameters?: DialogFunctionUserParameters, onSuccessCallback?: (returnObject: DialogSuccessReturnObject) => void, onErrorCallback?: (returnObject: DialogErrorReturnObject) => void) => void;
declare const jr_set_dialog_unchanged: () => void;
declare const jr_has_dialog_changed: () => boolean;
declare const jr_enable_dialog_changecheck: () => void;
declare const jr_disable_dialog_changecheck: () => void;
declare const jr_is_dialog_changecheck_enabled: () => boolean;
declare const jr_get_subtable_checked_row_ids: (subtableViewName: string, customHandler?: CustomErrorHandler) => number[];
declare const jr_notify_success: (message: string, timeoutInSeconds?: number) => void;
declare const jr_notify_info: (message: string, timeoutInSeconds?: number) => void;
declare const jr_notify_warn: (message: string, timeoutInSeconds?: number) => void;
declare const jr_notify_error: (message: string, timeoutInSeconds?: number) => void;
declare const jr_set_window_title: (title: string) => void;
declare const jr_viewer_stamp_create: (stampText: string, options: StampOptions) => Stamp;
declare const jr_viewer_stamp_activate: (stamp: Stamp) => void;
declare const jr_viewer_stamp_remove: (stamp: Stamp) => void;
declare const jr_subtable_init: (subtableViewName: string, subtableData: SubtableData, successCallback?: (subtableViewName: string) => void, errorCallback?: (subtableViewName: string, error: string) => void) => void;
declare const jr_get_instance_id: () => number;
declare const jr_close_section: (sectionName: string) => void;
declare const jr_open_section: (sectionName: string) => void;
declare const jr_show_table_column: (tableName: string, columnName: string) => void;
declare const jr_hide_table_column: (tableName: string, columnName: string) => void;
