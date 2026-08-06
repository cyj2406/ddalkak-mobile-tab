export { default as ProgressBar } from "./ProgressBar";
export { default as QuestionCard } from "./QuestionCard";
export { default as AnswerInput } from "./AnswerInput";
export { default as AiSuggestButton } from "./AiSuggestButton";
export { default as ActionButtons } from "./ActionButtons";
export { default as LanguageSelect, DEFAULT_LANGUAGES } from "./LanguageSelect";
export { default as CompletionPanel } from "./CompletionPanel";
export { default as DocumentViewer } from "./DocumentViewer";
export { default as FormFillDesktop } from "./FormFillDesktop";

export { FormFillProvider, useFormFill } from "./FormFillContext";
export { useFormFillState } from "./useFormFillState";
export { F4_FIELDS, F4_FORM } from "./mockFields";
export { getFormFields } from "./getFormFields";

export type { ProgressBarProps } from "./ProgressBar";
export type { QuestionCardProps } from "./QuestionCard";
export type { AnswerInputProps } from "./AnswerInput";
export type { AiSuggestButtonProps } from "./AiSuggestButton";
export type { ActionButtonsProps } from "./ActionButtons";
export type { LanguageSelectProps, LanguageOption } from "./LanguageSelect";
export type { CompletionPanelProps } from "./CompletionPanel";
export type { DocumentViewerProps } from "./DocumentViewer";
export type { FormFillState, FormFillProgress } from "./useFormFillState";
export type { FormField, FormFieldType, FieldAnchor, Answers, FormDetail } from "./types";
