export class ApiNasaModel {
    
    constructor(
        public title: string,
        public date: string,
        public url: string,
        public hdurl: string,
        public media_type: string,
        public explanation: string,
        public concepts: string,
        public thumbnail_url: string,
        public copyright: string
    ) {

    }
}
