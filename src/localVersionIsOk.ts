import semver from 'semver';

export default (localSemVer: string, remoteSemVer: string) => {
  return !semver.lt(localSemVer, remoteSemVer);
};
