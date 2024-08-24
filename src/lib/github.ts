/**
 * GitHub releases api.
 *
 * @module
 */

/** @interface */
export interface Asset {
  url: string;
  id: number;
  name: string;
  download_count: number;
  size: number;
  created_at: string;
  browser_download_url: string;
}

/** @interface */
export interface ReleaseResponse {
  html_url: string;
  id: number;
  name: string;
  prerelease: boolean;
  published_at: string;
  tag_name: string;
  tarball_url: string;
  assets: Asset[];
  body: string;
}

/**
 * Gets the repo slug from the Github FQDN URL.
 *
 * @param url The repository url.
 * @function
 */
export function getRepoSlugFromURL(url: string) {
  const repoInfo = url.match(/github\.com\/(?<owner>\w+)\/(?<repo>.+)\.git/);

  if (!repoInfo || !repoInfo.groups) {
    return "";
  }

  return `${repoInfo.groups.owner}/${repoInfo.groups.repo}`;
}

/** @class */
export class Releases {
  public static apiBaseUrl = "https://api.github.com";
  public static publicBaseUrl = "https://github.com";

  /**
   * Gets all releases of the provided repo.
   *
   * @param repo The repository url.
   * @function
   */
  public static async all(repo: string) {
    const url = [Releases.apiBaseUrl, "repos", repo, "releases"].join("/");
    const response = await fetch(url);
    const data = await response.json();
    return data as ReleaseResponse[];
  }

  /**
   * Gets the latest release of the provided repo.
   *
   * @param repo The repository url.
   * @function
   */
  public static async latest(repo: string) {
    const data = await Releases.all(repo);
    return data[0];
  }

  /**
   * Gets the installer download url from a release's asset list.
   *
   * @param assets The list of assets.
   * @function
   */
  public static installer(assets: Asset[]) {
    // setup some sane defaults
    const useragent = navigator.userAgent.toLowerCase();
    const default_download_ext = ".exe";

    // get other platforms
    let download_ext: string;

    if (useragent.indexOf("mac") >= 0) {
      download_ext = ".dmg";
    }

    // get current platform's download link
    const download_info = assets.find(
      (item) =>
        item.browser_download_url.indexOf(
          download_ext || default_download_ext,
        ) >= 0,
    );

    // if nothing was found, default to windows
    if (!download_info) {
      const default_download_info = assets.find(
        (item) => item.browser_download_url.indexOf(default_download_ext) >= 0,
      );
      return default_download_info?.browser_download_url;
    }

    return download_info?.browser_download_url;
  }
}
