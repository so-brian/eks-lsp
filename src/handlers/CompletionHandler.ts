import { ServerRequestHandler, CompletionParams, CompletionItem, CompletionList, HandlerResult, CancellationToken, WorkDoneProgressReporter, ResultProgressReporter, TextDocumentPositionParams, CompletionItemKind } from "vscode-languageserver";

export const CompletionHandler: ServerRequestHandler<
    CompletionParams,
    CompletionItem[] | CompletionList | undefined | null,
    CompletionItem[],
    void> = (
    params: CompletionParams,
    token: CancellationToken,
    workDoneProgressReporter: WorkDoneProgressReporter,
    resultProgress?: ResultProgressReporter<CompletionItem[]> | undefined
): HandlerResult<CompletionItem[] | CompletionList | undefined | null, void> => {
    return [
        {
            label: '123',
            kind: CompletionItemKind.Class
        },
        {
            label: '456',
            kind: CompletionItemKind.Function
        },
        {
            label: '456',
            kind: CompletionItemKind.Interface
        }
    ];
};
