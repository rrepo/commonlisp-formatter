import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const outputChannel = vscode.window.createOutputChannel("Lisp Formatter");
	const disposable = vscode.commands.registerCommand('console.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from console!');
		outputChannel.appendLine("Hello World command executed.");
	});

	vscode.languages.registerDocumentFormattingEditProvider(['lisp', 'commonlisp'], {
		provideDocumentFormattingEdits(document: vscode.TextDocument): vscode.TextEdit[] {
			outputChannel.appendLine("Lisp file formatting triggered");

			const edits: vscode.TextEdit[] = [];
			for (let i = 0; i < document.lineCount; i++) {
				const line = document.lineAt(i);
				if (line.text.trim().length > 0) {
					const newText = '    ' + line.text.trim();
					edits.push(vscode.TextEdit.replace(line.range, newText));
				}
			}

			outputChannel.appendLine("Formatting applied to Lisp file.");
			return edits;
		}
	});

	context.subscriptions.push(disposable, outputChannel);
}

export function deactivate() { }
