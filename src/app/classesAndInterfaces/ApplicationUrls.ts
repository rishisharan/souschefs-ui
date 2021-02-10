
export class ApplicationUrls{
    public static getServerLocation(){
      return 'http://localhost:9090';
    }

    public static getServerContext(){
      return '/souschefs'
    }

    public static getItems(){
       return this.getServerLocation() + '/api/getAllItems';
    }

}
