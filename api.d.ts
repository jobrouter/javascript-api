/********************************************************
 JobRouter JavaScript-API Stubs v5.1
 ********************************************************/
type CustomErrorHandler = (errorMessage: string) => void;
type ElementId = string;
type StepAction = "abort" | "answer" | "assign" | "back" | "finish" | "jumpTo" | "request" | "resubmission" | "save" | "send";
type TimeUnit = "s" | "m" | "h" | "d";
type Stamp = {
    text: string
    includeTime: boolean
    includeDate: boolean
    color: string
    onStamp?: ((stamp: Stamp, x: number, y: number) => void)
};

declare const jr_execute: (action: StepAction | "reserve") => void;
declare const jr_get_value: (id: ElementId, customErrorHandler?: CustomErrorHandler) => any;
declare const jr_set_value: (id: ElementId, value: any, customHandler?: CustomErrorHandler) => void;
declare const jr_get_display_value: (id: ElementId, customHandler?: CustomErrorHandler) => any;
declare const jr_reset_value: (id: ElementId, customHandler?: CustomErrorHandler) => void;
declare const jr_set_required: (id: ElementId, value?: boolean, customHandler?: CustomErrorHandler) => void;
declare const jr_is_required: (id: ElementId, customHandler?: CustomErrorHandler) => boolean;
declare const jr_set_label: (id: ElementId, label: string, radioValue?: string, customHandler?: CustomErrorHandler) => void;
declare const jr_get_label: (id: ElementId, radioValue?: string, customHandler?: CustomErrorHandler) => string;
declare const jr_set_label2: (id: ElementId, label: string, radioValue?: string, customHandler?: CustomErrorHandler) => void;
declare const jr_get_label2: (id: ElementId, radioValue?: string, customHandler?: CustomErrorHandler) => string;
declare const jr_show: (obj: string | string[]) => void;
declare const jr_hide: (obj: string | string[]) => void;
declare const jr_is_visible: (id: ElementId, customHandler?: CustomErrorHandler) => boolean;
declare const jr_show_page: (pageName: string | string[]) => void;
declare const jr_hide_page: (pageName: string | string[]) => void;
declare const jr_show_step_action: (action: StepAction | StepAction[]) => void;
declare const jr_hide_step_action: (action: StepAction | StepAction[]) => void;
declare const jr_set_step_action_label: (action: StepAction, label: string) => void;
declare const jr_select_page: (pageName: string) => void;
declare const jr_set_readonly: (id: ElementId, value?: boolean, customHandler?: CustomErrorHandler) => void;
declare const jr_is_readonly: (id: ElementId, customHandler?: CustomErrorHandler) => boolean;
declare const jr_set_disabled: (id: ElementId, value?: boolean, customHandler?: CustomErrorHandler) => void;
declare const jr_is_disabled: (id: ElementId, customHandler?: CustomErrorHandler) => boolean;
declare const jr_set_background_color: (id: ElementId, color: string, customHandler?: CustomErrorHandler) => void;
declare const jr_set_subtable_value: (subtableViewName: string, rowId: number, columnName: string, value: any, customHandler?: CustomErrorHandler) => void;
declare const jr_set_subtable_display_value: (subtableViewName: string, rowId: number, columnName: string, value: any, customHandler?: CustomErrorHandler) => void;
declare const jr_get_subtable_value: (subtableViewName: string, rowId: number, columnName: string, customHandler?: CustomErrorHandler) => any;
declare const jr_get_subtable_display_value: (subtableViewName: string, rowId: number, columnName: string, customHandler?: CustomErrorHandler) => any;
declare const jr_add_subtable_row: (subtableViewName: string, numberOfRows: number | Object | Object[], ignoreMaxRows: boolean, finishCallback: (addedRows: number) => void, customHandler?: CustomErrorHandler) => void;
declare const jr_remove_subtable_row: (subtableViewName: string, rowId: number | number[], ignoreMinRows: boolean) => void;
declare const jr_copy_subtable_row: (subtableViewName: string, rowId: number | number[]) => void;
declare const jr_hide_subtable_column: (subtableViewName: string, columnId: string | string[], radioValue: string) => void;
declare const jr_show_subtable_column: (subtableViewName: string, columnId: string | string[], radioValue: string) => void;
declare const jr_hide_subtable_row: (subtableViewName: string, rowId: number) => void;
declare const jr_show_subtable_row: (subtableViewName: string, rowId: number) => void;
declare const jr_get_subtable_count: (subtableViewName: string, customHandler?: CustomErrorHandler) => number;
declare const jr_get_subtable_max_id: (subtableViewName: string, customHandler?: CustomErrorHandler) => number;
declare const jr_get_subtable_row_ids: (subtableViewName: string, customHandler?: CustomErrorHandler) => number[];
declare const jr_sum_subtable_column: (subtableViewName: string, columnName: string, thousandsSeparator?: string, decimalSeparator?: string, decimalPlace?: number) => number;
declare const jr_loop_table: (subtableViewName: string, callback: (subtableView: string, currentRow: number) => void, customHandler?: CustomErrorHandler) => void;
declare const jr_set_column_label: (elementName: string, columnName: string, label: string, customHandler?: CustomErrorHandler) => void;
declare const jr_get_column_label: (elementName: string, columnName: string, customHandler?: CustomErrorHandler) => string;
declare const jr_set_cell_label2: (subtableViewName: string, rowId: number, columnName: string, label: string, radioValue: string, customHandler?: CustomErrorHandler) => void;
declare const jr_get_cell_label2: (subtableViewName: string, rowId: number, columnName: string, radioValue: string, customHandler?: CustomErrorHandler) => string;
declare const jr_get_table_count: (tableName: string, customHandler?: CustomErrorHandler) => number;
declare const jr_get_table_max_id: (tableName: string, customHandler?: CustomErrorHandler) => number;
declare const jr_set_table_background_color: (tableName: string, rowId: number | "*", columnName: string, color: string, customHandler?: CustomErrorHandler) => void;
declare const jr_date_add: (date: Date, value: string, timeUnit: TimeUnit, customHandler?: CustomErrorHandler) => Date;
declare const jr_date_diff: (date1: Date, date2: Date, timeUnit: TimeUnit, customHandler?: CustomErrorHandler) => number;
declare const jr_sql_refresh: (id: ElementId | ElementId[], successCallback?: (id: ElementId, value: any) => void, errorCallback?: (id: ElementId, error: string) => void, sequential?: boolean) => void;
declare const jr_subtable_refresh: (subtableViewName: string, columnName?: string, rowId?: number | "*", successCallback?: (subtableViewName: string, columnName: string, rowId: number | "*") => void, errorCallback?: (subtableViewName: string, columnName: string, rowId: number | "*", error: string) => void, customHandler?: CustomErrorHandler) => void;
declare const jr_message: (message: string, data?: Object, customHandler?: CustomErrorHandler) => void;
declare const jr_get_message: (message: string, data?: Object, customHandler?: CustomErrorHandler) => string;
declare const jr_allow_send: (value: boolean) => void;
declare const jr_enable_send: () => void;
declare const jr_disable_send: () => void;
declare const jr_set_steplabel: (label: string) => void;
declare const jr_get_steplabel: () => string;
declare const jr_print: (callback?: () => void) => void;
declare const jr_get_table_value: (tableName: string, rowId: number, columnName: string, customHandler?: CustomErrorHandler) => any;
declare const jr_execute_dialog_function: (functionName: string, userParameters?: Object, onSuccessCallback?: (returnObject: { status: string, result?: Object }) => void, onErrorCallback?: (returnObject: { status: string, message?: string, result?: Object }) => void) => void;
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
declare const jr_viewer_stamp_create: (stampText: string, options: Object) => Stamp;
declare const jr_viewer_stamp_activate: (stamp: Stamp) => void;
declare const jr_viewer_stamp_remove: (stamp: Stamp) => void;
declare const jr_subtable_init: (subtableViewName: string, subtableData: Object, successCallback?: (subtableViewName: string) => void, errorCallback?: (subtableViewName: string, error: string) => void) => void;
declare const jr_get_instance_id: () => number;
declare const jr_close_section: (sectionName: string) => void;
declare const jr_open_section: (sectionName: string) => void;
declare const jr_show_table_column: (tableName: string, columnName: string) => void;
declare const jr_hide_table_column: (tableName: string, columnName: string) => void;