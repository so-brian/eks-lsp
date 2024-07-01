import { ServerRequestHandler, InitializeParams, InitializeResult, InitializeError, ResultProgressReporter, CancellationToken, WorkDoneProgressReporter, HandlerResult, DocumentSelector, TextDocumentSyncKind } from "vscode-languageserver";

export const InitializeHandler: ServerRequestHandler<
    InitializeParams,
    InitializeResult,
    never,
    InitializeError> = (
        params: InitializeParams,
        token: CancellationToken,
        workDoneProgressReporter: WorkDoneProgressReporter,
        resultProgress?: ResultProgressReporter<never>
    ): HandlerResult<InitializeResult, InitializeError> => {
        return {
            capabilities: {
                textDocumentSync: TextDocumentSyncKind.Full,
                completionProvider: {
                    triggerCharacters: [
                        ...'.abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"'
                    ]
                }
            }
        }

};