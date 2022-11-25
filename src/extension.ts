import * as vscode from 'vscode';



export function activate(context: vscode.ExtensionContext) {
	console.log('Mnlua is now active!');
	let disposable = vscode.commands.registerCommand('mnlua.command', () => {
		vscode.window.showInformationMessage('Hello, World!');
	});
	context.subscriptions.push(disposable);
}



export function deactivate() {}