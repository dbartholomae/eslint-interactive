import chalk from 'chalk';
import { Remote } from 'comlink';
import { ESLint } from 'eslint';
import ora from 'ora';
import { promptToInputDescription } from '../cli/prompt';
import { Core } from '../core';

export async function doDisablePerLineAction(
  core: Remote<Core>,
  results: ESLint.LintResult[],
  selectedRuleIds: string[],
) {
  const description = await promptToInputDescription();
  const fixingSpinner = ora('Disabling...').start();
  await core.disablePerLine(results, selectedRuleIds, description);
  fixingSpinner.succeed(chalk.bold('Disabling was successful.'));
}
