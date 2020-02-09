import {
  findCommitBySha,
  getCommitRecord,
  retrieveHeadCommit,
} from '@skypilot/nodegit-tools';
import { CommitRecord } from '@skypilot/nodegit-tools/lib/functions/commit/getCommitRecord';
import { git } from '../git';
import { PARSABLE_LOG_COMMAND } from '../git/commit/constants';
import { parseCommitsFromLog } from './parseCommitLog';


export async function findCommitsSinceSha(sha: string): Promise<CommitRecord[]> {
  const headCommit = await retrieveHeadCommit();
  const earliestCommit = await findCommitBySha(sha);

  if (!headCommit || !earliestCommit) {
    throw new Error('Range could not be found');
  }

  const head = getCommitRecord(headCommit);
  const earliest = getCommitRecord(earliestCommit);

  const gitCommand = [
    PARSABLE_LOG_COMMAND,
    `${earliest.sha}...${head.sha}`,
  ].join(' ');
  return git(gitCommand).then((resultString: string) => parseCommitsFromLog(resultString));
}
