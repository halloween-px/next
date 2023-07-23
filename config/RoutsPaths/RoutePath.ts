export enum RoutePathList {
     MAIN = 'main',
    ABOUT = 'about',
    CONTACTS = 'contacts',
    PHOTOGALLERY = 'photogallery',
    TEAMS = 'teams'
}

export const RoutePath: Record<RoutePathList, string> = {
    [RoutePathList.MAIN]: '/',
    [RoutePathList.ABOUT]: '/about',
    [RoutePathList.TEAMS]: '/teams',
    [RoutePathList.PHOTOGALLERY]: '/photogallery',
    [RoutePathList.CONTACTS]: '/contacts',
};