export interface IAsset {
  url: string;
  id: number;
  name: string;
  download_count: number;
  size: number;
  created_at: string;
  browser_download_url: string;
}

export interface ReleaseResponse {
  html_url: string;
  id: number;
  name: string;
  prerelease: boolean;
  published_at: string;
  tag_name: string;
  tarball_url: string;
  assets: IAsset[];
}

export class GitHubAPI {
  public static apiBaseUrl = "https://api.github.com";
  public static publicBaseUrl = "https://github.com";

  public static async releases(repo: string) {
    const url = [GitHubAPI.apiBaseUrl, "repos", repo, "releases"].join("/");
    const response = await fetch(url);
    const [data] = (await response.json()) as ReleaseResponse[];
    return Promise.resolve(data);
  }

  public static getDownloadLink(assets: IAsset[]) {
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
