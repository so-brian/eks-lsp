import { createConnection, TextDocuments, ProposedFeatures } from 'vscode-languageserver/node';

import { TextDocument } from 'vscode-languageserver-textdocument';
import { InitializeHandler } from './handlers';

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager.
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

connection.onInitialize(InitializeHandler);

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();
